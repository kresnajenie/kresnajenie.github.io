var vE=Object.defineProperty;var xE=(i,e,t)=>e in i?vE(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var yd=(i,e,t)=>(xE(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vu="162",fs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yE=0,Sd=1,SE=2,vm=1,EE=2,Gi=3,pr=0,Pn=1,Vi=2,hr=0,Ns=1,Ed=2,Md=3,bd=4,ME=5,Ur=100,bE=101,TE=102,Td=103,Ad=104,AE=200,wE=201,CE=202,RE=203,Su=204,Eu=205,LE=206,PE=207,IE=208,DE=209,UE=210,NE=211,OE=212,FE=213,BE=214,zE=0,GE=1,HE=2,sl=3,kE=4,VE=5,WE=6,XE=7,xm=0,qE=1,YE=2,fr=0,$E=1,ZE=2,KE=3,JE=4,jE=5,QE=6,eM=7,ym=300,Bs=301,zs=302,Mu=303,bu=304,gl=306,Tu=1e3,ui=1001,Au=1002,un=1003,wd=1004,ho=1005,Ln=1006,Uc=1007,Or=1008,dr=1009,tM=1010,nM=1011,Wu=1012,Sm=1013,ur=1014,xi=1015,To=1016,Em=1017,Mm=1018,Fr=1020,iM=1021,hi=1023,rM=1024,sM=1025,Br=1026,Gs=1027,bm=1028,Tm=1029,oM=1030,Am=1031,wm=1033,Nc=33776,Oc=33777,Fc=33778,Bc=33779,Cd=35840,Rd=35841,Ld=35842,Pd=35843,Cm=36196,Id=37492,Dd=37496,Ud=37808,Nd=37809,Od=37810,Fd=37811,Bd=37812,zd=37813,Gd=37814,Hd=37815,kd=37816,Vd=37817,Wd=37818,Xd=37819,qd=37820,Yd=37821,zc=36492,$d=36494,Zd=36495,aM=36283,Kd=36284,Jd=36285,jd=36286,lM=3200,cM=3201,uM=0,hM=1,cr="",_i="srgb",gr="srgb-linear",Xu="display-p3",_l="display-p3-linear",ol="linear",Gt="srgb",al="rec709",ll="p3",ps=7680,Qd=519,fM=512,dM=513,pM=514,Rm=515,mM=516,gM=517,_M=518,vM=519,ep=35044,tp="300 es",wu=1035,Wi=2e3,cl=2001;class Vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let np=1234567;const So=Math.PI/180,Ao=180/Math.PI;function Wr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function an(i,e,t){return Math.max(e,Math.min(t,i))}function qu(i,e){return(i%e+e)%e}function xM(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function yM(i,e,t){return i!==e?(t-i)/(e-i):0}function Eo(i,e,t){return(1-t)*i+t*e}function SM(i,e,t,n){return Eo(i,e,1-Math.exp(-t*n))}function EM(i,e=1){return e-Math.abs(qu(i,e*2)-e)}function MM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function bM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function TM(i,e){return i+Math.floor(Math.random()*(e-i+1))}function AM(i,e){return i+Math.random()*(e-i)}function wM(i){return i*(.5-Math.random())}function CM(i){i!==void 0&&(np=i);let e=np+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function RM(i){return i*So}function LM(i){return i*Ao}function Cu(i){return(i&i-1)===0&&i!==0}function PM(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ul(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function IM(i,e,t,n,s){const a=Math.cos,c=Math.sin,l=a(t/2),h=c(t/2),f=a((e+n)/2),d=c((e+n)/2),p=a((e-n)/2),_=c((e-n)/2),x=a((n-e)/2),S=c((n-e)/2);switch(s){case"XYX":i.set(l*d,h*p,h*_,l*f);break;case"YZY":i.set(h*_,l*d,h*p,l*f);break;case"ZXZ":i.set(h*p,h*_,l*d,l*f);break;case"XZX":i.set(l*d,h*S,h*x,l*f);break;case"YXY":i.set(h*x,l*d,h*S,l*f);break;case"ZYZ":i.set(h*S,h*x,l*d,l*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ps(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const DM={DEG2RAD:So,RAD2DEG:Ao,generateUUID:Wr,clamp:an,euclideanModulo:qu,mapLinear:xM,inverseLerp:yM,lerp:Eo,damp:SM,pingpong:EM,smoothstep:MM,smootherstep:bM,randInt:TM,randFloat:AM,randFloatSpread:wM,seededRandom:CM,degToRad:RM,radToDeg:LM,isPowerOfTwo:Cu,ceilPowerOfTwo:PM,floorPowerOfTwo:ul,setQuaternionFromProperEuler:IM,normalize:yn,denormalize:Ps};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*s+e.x,this.y=a*s+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(e,t,n,s,a,c,l,h,f){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,l,h,f)}set(e,t,n,s,a,c,l,h,f){const d=this.elements;return d[0]=e,d[1]=s,d[2]=l,d[3]=t,d[4]=a,d[5]=h,d[6]=n,d[7]=c,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,c=n[0],l=n[3],h=n[6],f=n[1],d=n[4],p=n[7],_=n[2],x=n[5],S=n[8],E=s[0],v=s[3],g=s[6],I=s[1],M=s[4],C=s[7],G=s[2],F=s[5],D=s[8];return a[0]=c*E+l*I+h*G,a[3]=c*v+l*M+h*F,a[6]=c*g+l*C+h*D,a[1]=f*E+d*I+p*G,a[4]=f*v+d*M+p*F,a[7]=f*g+d*C+p*D,a[2]=_*E+x*I+S*G,a[5]=_*v+x*M+S*F,a[8]=_*g+x*C+S*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],l=e[5],h=e[6],f=e[7],d=e[8];return t*c*d-t*l*f-n*a*d+n*l*h+s*a*f-s*c*h}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],l=e[5],h=e[6],f=e[7],d=e[8],p=d*c-l*f,_=l*h-d*a,x=f*a-c*h,S=t*p+n*_+s*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=p*E,e[1]=(s*f-d*n)*E,e[2]=(l*n-s*c)*E,e[3]=_*E,e[4]=(d*t-s*h)*E,e[5]=(s*a-l*t)*E,e[6]=x*E,e[7]=(n*h-f*t)*E,e[8]=(c*t-n*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,c,l){const h=Math.cos(a),f=Math.sin(a);return this.set(n*h,n*f,-n*(h*c+f*l)+c+e,-s*f,s*h,-s*(-f*c+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Gc.makeScale(e,t)),this}rotate(e){return this.premultiply(Gc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gc=new xt;function Lm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function UM(){const i=hl("canvas");return i.style.display="block",i}const ip={};function NM(i){i in ip||(ip[i]=!0,console.warn(i))}const rp=new xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sp=new xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ea={[gr]:{transfer:ol,primaries:al,toReference:i=>i,fromReference:i=>i},[_i]:{transfer:Gt,primaries:al,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[_l]:{transfer:ol,primaries:ll,toReference:i=>i.applyMatrix3(sp),fromReference:i=>i.applyMatrix3(rp)},[Xu]:{transfer:Gt,primaries:ll,toReference:i=>i.convertSRGBToLinear().applyMatrix3(sp),fromReference:i=>i.applyMatrix3(rp).convertLinearToSRGB()}},OM=new Set([gr,_l]),Dt={enabled:!0,_workingColorSpace:gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!OM.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ea[e].toReference,s=Ea[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ea[i].primaries},getTransfer:function(i){return i===cr?ol:Ea[i].transfer}};function Os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ms;class Pm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ms===void 0&&(ms=hl("canvas")),ms.width=e.width,ms.height=e.height;const n=ms.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=Os(a[c]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Os(t[n]/255)*255):t[n]=Os(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FM=0;class Im{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=Wr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,l=s.length;c<l;c++)s[c].isDataTexture?a.push(kc(s[c].image)):a.push(kc(s[c]))}else a=kc(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function kc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BM=0;class En extends Vr{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,n=ui,s=ui,a=Ln,c=Or,l=hi,h=dr,f=En.DEFAULT_ANISOTROPY,d=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Wr(),this.name="",this.source=new Im(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=h,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ym)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tu:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Au:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tu:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Au:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=ym;En.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,t=0,n=0,s=1){hn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*s+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const h=e.elements,f=h[0],d=h[4],p=h[8],_=h[1],x=h[5],S=h[9],E=h[2],v=h[6],g=h[10];if(Math.abs(d-_)<.01&&Math.abs(p-E)<.01&&Math.abs(S-v)<.01){if(Math.abs(d+_)<.1&&Math.abs(p+E)<.1&&Math.abs(S+v)<.1&&Math.abs(f+x+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(f+1)/2,C=(x+1)/2,G=(g+1)/2,F=(d+_)/4,D=(p+E)/4,k=(S+v)/4;return M>C&&M>G?M<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(M),s=F/n,a=D/n):C>G?C<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(C),n=F/s,a=k/s):G<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(G),n=D/a,s=k/a),this.set(n,s,a,t),this}let I=Math.sqrt((v-S)*(v-S)+(p-E)*(p-E)+(_-d)*(_-d));return Math.abs(I)<.001&&(I=1),this.x=(v-S)/I,this.y=(p-E)/I,this.z=(_-d)/I,this.w=Math.acos((f+x+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zM extends Vr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const a=new En(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let l=0;l<c;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Im(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zr extends zM{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Dm extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class GM extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,c,l){let h=n[s+0],f=n[s+1],d=n[s+2],p=n[s+3];const _=a[c+0],x=a[c+1],S=a[c+2],E=a[c+3];if(l===0){e[t+0]=h,e[t+1]=f,e[t+2]=d,e[t+3]=p;return}if(l===1){e[t+0]=_,e[t+1]=x,e[t+2]=S,e[t+3]=E;return}if(p!==E||h!==_||f!==x||d!==S){let v=1-l;const g=h*_+f*x+d*S+p*E,I=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const G=Math.sqrt(M),F=Math.atan2(G,g*I);v=Math.sin(v*F)/G,l=Math.sin(l*F)/G}const C=l*I;if(h=h*v+_*C,f=f*v+x*C,d=d*v+S*C,p=p*v+E*C,v===1-l){const G=1/Math.sqrt(h*h+f*f+d*d+p*p);h*=G,f*=G,d*=G,p*=G}}e[t]=h,e[t+1]=f,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,a,c){const l=n[s],h=n[s+1],f=n[s+2],d=n[s+3],p=a[c],_=a[c+1],x=a[c+2],S=a[c+3];return e[t]=l*S+d*p+h*x-f*_,e[t+1]=h*S+d*_+f*p-l*x,e[t+2]=f*S+d*x+l*_-h*p,e[t+3]=d*S-l*p-h*_-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,c=e._order,l=Math.cos,h=Math.sin,f=l(n/2),d=l(s/2),p=l(a/2),_=h(n/2),x=h(s/2),S=h(a/2);switch(c){case"XYZ":this._x=_*d*p+f*x*S,this._y=f*x*p-_*d*S,this._z=f*d*S+_*x*p,this._w=f*d*p-_*x*S;break;case"YXZ":this._x=_*d*p+f*x*S,this._y=f*x*p-_*d*S,this._z=f*d*S-_*x*p,this._w=f*d*p+_*x*S;break;case"ZXY":this._x=_*d*p-f*x*S,this._y=f*x*p+_*d*S,this._z=f*d*S+_*x*p,this._w=f*d*p-_*x*S;break;case"ZYX":this._x=_*d*p-f*x*S,this._y=f*x*p+_*d*S,this._z=f*d*S-_*x*p,this._w=f*d*p+_*x*S;break;case"YZX":this._x=_*d*p+f*x*S,this._y=f*x*p+_*d*S,this._z=f*d*S-_*x*p,this._w=f*d*p-_*x*S;break;case"XZY":this._x=_*d*p-f*x*S,this._y=f*x*p-_*d*S,this._z=f*d*S+_*x*p,this._w=f*d*p+_*x*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],c=t[1],l=t[5],h=t[9],f=t[2],d=t[6],p=t[10],_=n+l+p;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(d-h)*x,this._y=(a-f)*x,this._z=(c-s)*x}else if(n>l&&n>p){const x=2*Math.sqrt(1+n-l-p);this._w=(d-h)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(a+f)/x}else if(l>p){const x=2*Math.sqrt(1+l-n-p);this._w=(a-f)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(h+d)/x}else{const x=2*Math.sqrt(1+p-n-l);this._w=(c-s)/x,this._x=(a+f)/x,this._y=(h+d)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,c=e._w,l=t._x,h=t._y,f=t._z,d=t._w;return this._x=n*d+c*l+s*f-a*h,this._y=s*d+c*h+a*l-n*f,this._z=a*d+c*f+n*h-s*l,this._w=c*d-n*l-s*h-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,c=this._w;let l=c*e._w+n*e._x+s*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=s,this._z=a,this;const h=1-l*l;if(h<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*n+t*this._x,this._y=x*s+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const f=Math.sqrt(h),d=Math.atan2(f,l),p=Math.sin((1-t)*d)/f,_=Math.sin(t*d)/f;return this._w=c*p+this._w*_,this._x=n*p+this._x*_,this._y=s*p+this._y*_,this._z=a*p+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(op.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(op.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,c=e.y,l=e.z,h=e.w,f=2*(c*s-l*n),d=2*(l*t-a*s),p=2*(a*n-c*t);return this.x=t+h*f+c*p-l*d,this.y=n+h*d+l*f-a*p,this.z=s+h*p+a*d-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,c=t.x,l=t.y,h=t.z;return this.x=s*h-a*l,this.y=a*c-n*h,this.z=n*l-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new W,op=new Gr;class Xr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=a.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,oi):oi.fromBufferAttribute(a,c),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),ba.subVectors(this.max,fo),gs.subVectors(e.a,fo),_s.subVectors(e.b,fo),vs.subVectors(e.c,fo),nr.subVectors(_s,gs),ir.subVectors(vs,_s),Ar.subVectors(gs,vs);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Ar.z,Ar.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Ar.z,0,-Ar.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Ar.y,Ar.x,0];return!Wc(t,gs,_s,vs,ba)||(t=[1,0,0,0,1,0,0,0,1],!Wc(t,gs,_s,vs,ba))?!1:(Ta.crossVectors(nr,ir),t=[Ta.x,Ta.y,Ta.z],Wc(t,gs,_s,vs,ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new W,new W,new W,new W,new W,new W,new W,new W],oi=new W,Ma=new Xr,gs=new W,_s=new W,vs=new W,nr=new W,ir=new W,Ar=new W,fo=new W,ba=new W,Ta=new W,wr=new W;function Wc(i,e,t,n,s){for(let a=0,c=i.length-3;a<=c;a+=3){wr.fromArray(i,a);const l=s.x*Math.abs(wr.x)+s.y*Math.abs(wr.y)+s.z*Math.abs(wr.z),h=e.dot(wr),f=t.dot(wr),d=n.dot(wr);if(Math.max(-Math.max(h,f,d),Math.min(h,f,d))>l)return!1}return!0}const HM=new Xr,po=new W,Xc=new W;class Lo{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):HM.setFromPoints(e).getCenter(n);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;po.subVectors(e,this.center);const t=po.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(po,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(po.copy(e.center).add(Xc)),this.expandByPoint(po.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new W,qc=new W,Aa=new W,rr=new W,Yc=new W,wa=new W,$c=new W;class Um{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qc.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),rr.copy(this.origin).sub(qc);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Aa),l=rr.dot(this.direction),h=-rr.dot(Aa),f=rr.lengthSq(),d=Math.abs(1-c*c);let p,_,x,S;if(d>0)if(p=c*h-l,_=c*l-h,S=a*d,p>=0)if(_>=-S)if(_<=S){const E=1/d;p*=E,_*=E,x=p*(p+c*_+2*l)+_*(c*p+_+2*h)+f}else _=a,p=Math.max(0,-(c*_+l)),x=-p*p+_*(_+2*h)+f;else _=-a,p=Math.max(0,-(c*_+l)),x=-p*p+_*(_+2*h)+f;else _<=-S?(p=Math.max(0,-(-c*a+l)),_=p>0?-a:Math.min(Math.max(-a,-h),a),x=-p*p+_*(_+2*h)+f):_<=S?(p=0,_=Math.min(Math.max(-a,-h),a),x=_*(_+2*h)+f):(p=Math.max(0,-(c*a+l)),_=p>0?a:Math.min(Math.max(-a,-h),a),x=-p*p+_*(_+2*h)+f);else _=c>0?-a:a,p=Math.max(0,-(c*_+l)),x=-p*p+_*(_+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(qc).addScaledVector(Aa,_),x}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const n=Ni.dot(this.direction),s=Ni.dot(Ni)-n*n,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),l=n-c,h=n+c;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,c,l,h;const f=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,_=this.origin;return f>=0?(n=(e.min.x-_.x)*f,s=(e.max.x-_.x)*f):(n=(e.max.x-_.x)*f,s=(e.min.x-_.x)*f),d>=0?(a=(e.min.y-_.y)*d,c=(e.max.y-_.y)*d):(a=(e.max.y-_.y)*d,c=(e.min.y-_.y)*d),n>c||a>s||((a>n||isNaN(n))&&(n=a),(c<s||isNaN(s))&&(s=c),p>=0?(l=(e.min.z-_.z)*p,h=(e.max.z-_.z)*p):(l=(e.max.z-_.z)*p,h=(e.min.z-_.z)*p),n>h||l>s)||((l>n||n!==n)&&(n=l),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,s,a){Yc.subVectors(t,e),wa.subVectors(n,e),$c.crossVectors(Yc,wa);let c=this.direction.dot($c),l;if(c>0){if(s)return null;l=1}else if(c<0)l=-1,c=-c;else return null;rr.subVectors(this.origin,e);const h=l*this.direction.dot(wa.crossVectors(rr,wa));if(h<0)return null;const f=l*this.direction.dot(Yc.cross(rr));if(f<0||h+f>c)return null;const d=-l*rr.dot($c);return d<0?null:this.at(d/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,n,s,a,c,l,h,f,d,p,_,x,S,E,v){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,l,h,f,d,p,_,x,S,E,v)}set(e,t,n,s,a,c,l,h,f,d,p,_,x,S,E,v){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=a,g[5]=c,g[9]=l,g[13]=h,g[2]=f,g[6]=d,g[10]=p,g[14]=_,g[3]=x,g[7]=S,g[11]=E,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),a=1/xs.setFromMatrixColumn(e,1).length(),c=1/xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),f=Math.sin(s),d=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const _=c*d,x=c*p,S=l*d,E=l*p;t[0]=h*d,t[4]=-h*p,t[8]=f,t[1]=x+S*f,t[5]=_-E*f,t[9]=-l*h,t[2]=E-_*f,t[6]=S+x*f,t[10]=c*h}else if(e.order==="YXZ"){const _=h*d,x=h*p,S=f*d,E=f*p;t[0]=_+E*l,t[4]=S*l-x,t[8]=c*f,t[1]=c*p,t[5]=c*d,t[9]=-l,t[2]=x*l-S,t[6]=E+_*l,t[10]=c*h}else if(e.order==="ZXY"){const _=h*d,x=h*p,S=f*d,E=f*p;t[0]=_-E*l,t[4]=-c*p,t[8]=S+x*l,t[1]=x+S*l,t[5]=c*d,t[9]=E-_*l,t[2]=-c*f,t[6]=l,t[10]=c*h}else if(e.order==="ZYX"){const _=c*d,x=c*p,S=l*d,E=l*p;t[0]=h*d,t[4]=S*f-x,t[8]=_*f+E,t[1]=h*p,t[5]=E*f+_,t[9]=x*f-S,t[2]=-f,t[6]=l*h,t[10]=c*h}else if(e.order==="YZX"){const _=c*h,x=c*f,S=l*h,E=l*f;t[0]=h*d,t[4]=E-_*p,t[8]=S*p+x,t[1]=p,t[5]=c*d,t[9]=-l*d,t[2]=-f*d,t[6]=x*p+S,t[10]=_-E*p}else if(e.order==="XZY"){const _=c*h,x=c*f,S=l*h,E=l*f;t[0]=h*d,t[4]=-p,t[8]=f*d,t[1]=_*p+E,t[5]=c*d,t[9]=x*p-S,t[2]=S*p-x,t[6]=l*d,t[10]=E*p+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kM,e,VM)}lookAt(e,t,n){const s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),sr.crossVectors(n,Bn),sr.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),sr.crossVectors(n,Bn)),sr.normalize(),Ca.crossVectors(Bn,sr),s[0]=sr.x,s[4]=Ca.x,s[8]=Bn.x,s[1]=sr.y,s[5]=Ca.y,s[9]=Bn.y,s[2]=sr.z,s[6]=Ca.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,c=n[0],l=n[4],h=n[8],f=n[12],d=n[1],p=n[5],_=n[9],x=n[13],S=n[2],E=n[6],v=n[10],g=n[14],I=n[3],M=n[7],C=n[11],G=n[15],F=s[0],D=s[4],k=s[8],he=s[12],T=s[1],P=s[5],be=s[9],ve=s[13],H=s[2],oe=s[6],Q=s[10],le=s[14],ne=s[3],ce=s[7],pe=s[11],xe=s[15];return a[0]=c*F+l*T+h*H+f*ne,a[4]=c*D+l*P+h*oe+f*ce,a[8]=c*k+l*be+h*Q+f*pe,a[12]=c*he+l*ve+h*le+f*xe,a[1]=d*F+p*T+_*H+x*ne,a[5]=d*D+p*P+_*oe+x*ce,a[9]=d*k+p*be+_*Q+x*pe,a[13]=d*he+p*ve+_*le+x*xe,a[2]=S*F+E*T+v*H+g*ne,a[6]=S*D+E*P+v*oe+g*ce,a[10]=S*k+E*be+v*Q+g*pe,a[14]=S*he+E*ve+v*le+g*xe,a[3]=I*F+M*T+C*H+G*ne,a[7]=I*D+M*P+C*oe+G*ce,a[11]=I*k+M*be+C*Q+G*pe,a[15]=I*he+M*ve+C*le+G*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],c=e[1],l=e[5],h=e[9],f=e[13],d=e[2],p=e[6],_=e[10],x=e[14],S=e[3],E=e[7],v=e[11],g=e[15];return S*(+a*h*p-s*f*p-a*l*_+n*f*_+s*l*x-n*h*x)+E*(+t*h*x-t*f*_+a*c*_-s*c*x+s*f*d-a*h*d)+v*(+t*f*p-t*l*x-a*c*p+n*c*x+a*l*d-n*f*d)+g*(-s*l*d-t*h*p+t*l*_+s*c*p-n*c*_+n*h*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],l=e[5],h=e[6],f=e[7],d=e[8],p=e[9],_=e[10],x=e[11],S=e[12],E=e[13],v=e[14],g=e[15],I=p*v*f-E*_*f+E*h*x-l*v*x-p*h*g+l*_*g,M=S*_*f-d*v*f-S*h*x+c*v*x+d*h*g-c*_*g,C=d*E*f-S*p*f+S*l*x-c*E*x-d*l*g+c*p*g,G=S*p*h-d*E*h-S*l*_+c*E*_+d*l*v-c*p*v,F=t*I+n*M+s*C+a*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/F;return e[0]=I*D,e[1]=(E*_*a-p*v*a-E*s*x+n*v*x+p*s*g-n*_*g)*D,e[2]=(l*v*a-E*h*a+E*s*f-n*v*f-l*s*g+n*h*g)*D,e[3]=(p*h*a-l*_*a-p*s*f+n*_*f+l*s*x-n*h*x)*D,e[4]=M*D,e[5]=(d*v*a-S*_*a+S*s*x-t*v*x-d*s*g+t*_*g)*D,e[6]=(S*h*a-c*v*a-S*s*f+t*v*f+c*s*g-t*h*g)*D,e[7]=(c*_*a-d*h*a+d*s*f-t*_*f-c*s*x+t*h*x)*D,e[8]=C*D,e[9]=(S*p*a-d*E*a-S*n*x+t*E*x+d*n*g-t*p*g)*D,e[10]=(c*E*a-S*l*a+S*n*f-t*E*f-c*n*g+t*l*g)*D,e[11]=(d*l*a-c*p*a-d*n*f+t*p*f+c*n*x-t*l*x)*D,e[12]=G*D,e[13]=(d*E*s-S*p*s+S*n*_-t*E*_-d*n*v+t*p*v)*D,e[14]=(S*l*s-c*E*s-S*n*h+t*E*h+c*n*v-t*l*v)*D,e[15]=(c*p*s-d*l*s+d*n*h-t*p*h-c*n*_+t*l*_)*D,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,c=e.x,l=e.y,h=e.z,f=a*c,d=a*l;return this.set(f*c+n,f*l-s*h,f*h+s*l,0,f*l+s*h,d*l+n,d*h-s*c,0,f*h-s*l,d*h+s*c,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,c){return this.set(1,n,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,c=t._y,l=t._z,h=t._w,f=a+a,d=c+c,p=l+l,_=a*f,x=a*d,S=a*p,E=c*d,v=c*p,g=l*p,I=h*f,M=h*d,C=h*p,G=n.x,F=n.y,D=n.z;return s[0]=(1-(E+g))*G,s[1]=(x+C)*G,s[2]=(S-M)*G,s[3]=0,s[4]=(x-C)*F,s[5]=(1-(_+g))*F,s[6]=(v+I)*F,s[7]=0,s[8]=(S+M)*D,s[9]=(v-I)*D,s[10]=(1-(_+E))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=xs.set(s[0],s[1],s[2]).length();const c=xs.set(s[4],s[5],s[6]).length(),l=xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],ai.copy(this);const f=1/a,d=1/c,p=1/l;return ai.elements[0]*=f,ai.elements[1]*=f,ai.elements[2]*=f,ai.elements[4]*=d,ai.elements[5]*=d,ai.elements[6]*=d,ai.elements[8]*=p,ai.elements[9]*=p,ai.elements[10]*=p,t.setFromRotationMatrix(ai),n.x=a,n.y=c,n.z=l,this}makePerspective(e,t,n,s,a,c,l=Wi){const h=this.elements,f=2*a/(t-e),d=2*a/(n-s),p=(t+e)/(t-e),_=(n+s)/(n-s);let x,S;if(l===Wi)x=-(c+a)/(c-a),S=-2*c*a/(c-a);else if(l===cl)x=-c/(c-a),S=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=f,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=d,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,a,c,l=Wi){const h=this.elements,f=1/(t-e),d=1/(n-s),p=1/(c-a),_=(t+e)*f,x=(n+s)*d;let S,E;if(l===Wi)S=(c+a)*p,E=-2*p;else if(l===cl)S=a*p,E=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*d,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=E,h[14]=-S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xs=new W,ai=new qt,kM=new W(0,0,0),VM=new W(1,1,1),sr=new W,Ca=new W,Bn=new W,ap=new qt,lp=new Gr;class Xi{constructor(e=0,t=0,n=0,s=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],c=s[4],l=s[8],h=s[1],f=s[5],d=s[9],p=s[2],_=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(an(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-an(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(an(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-d,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ap.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ap,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lp.setFromEuler(this),this.setFromQuaternion(lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class Nm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WM=0;const cp=new W,ys=new Gr,Oi=new qt,Ra=new W,mo=new W,XM=new W,qM=new Gr,up=new W(1,0,0),hp=new W(0,1,0),fp=new W(0,0,1),YM={type:"added"},$M={type:"removed"},Zc={type:"childadded",child:null},Kc={type:"childremoved",child:null};class Mn extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new W,t=new Xi,n=new Gr,s=new W(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new xt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(up,e)}rotateY(e){return this.rotateOnAxis(hp,e)}rotateZ(e){return this.rotateOnAxis(fp,e)}translateOnAxis(e,t){return cp.copy(e).applyQuaternion(this.quaternion),this.position.add(cp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(up,e)}translateY(e){return this.translateOnAxis(hp,e)}translateZ(e){return this.translateOnAxis(fp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ra.copy(e):Ra.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(mo,Ra,this.up):Oi.lookAt(Ra,mo,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(Oi),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(YM),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($M),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,XM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,qM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++){const l=s[a];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let f=0,d=h.length;f<d;f++){const p=h[f];a(e.shapes,p)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,f=this.material.length;h<f;h++)l.push(a(e.materials,this.material[h]));s.material=l}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];s.animations.push(a(e.animations,h))}}if(t){const l=c(e.geometries),h=c(e.materials),f=c(e.textures),d=c(e.images),p=c(e.shapes),_=c(e.skeletons),x=c(e.animations),S=c(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),f.length>0&&(n.textures=f),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),_.length>0&&(n.skeletons=_),x.length>0&&(n.animations=x),S.length>0&&(n.nodes=S)}return n.object=s,n;function c(l){const h=[];for(const f in l){const d=l[f];delete d.metadata,h.push(d)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Mn.DEFAULT_UP=new W(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new W,Fi=new W,Jc=new W,Bi=new W,Ss=new W,Es=new W,dp=new W,jc=new W,Qc=new W,eu=new W;class yi{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),li.subVectors(e,t),s.cross(li);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){li.subVectors(s,t),Fi.subVectors(n,t),Jc.subVectors(e,t);const c=li.dot(li),l=li.dot(Fi),h=li.dot(Jc),f=Fi.dot(Fi),d=Fi.dot(Jc),p=c*f-l*l;if(p===0)return a.set(0,0,0),null;const _=1/p,x=(f*h-l*d)*_,S=(c*d-l*h)*_;return a.set(1-x-S,S,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,n,s,a,c,l,h){return this.getBarycoord(e,t,n,s,Bi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Bi.x),h.addScaledVector(c,Bi.y),h.addScaledVector(l,Bi.z),h)}static isFrontFacing(e,t,n,s){return li.subVectors(n,t),Fi.subVectors(e,t),li.cross(Fi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),li.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return yi.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let c,l;Ss.subVectors(s,n),Es.subVectors(a,n),jc.subVectors(e,n);const h=Ss.dot(jc),f=Es.dot(jc);if(h<=0&&f<=0)return t.copy(n);Qc.subVectors(e,s);const d=Ss.dot(Qc),p=Es.dot(Qc);if(d>=0&&p<=d)return t.copy(s);const _=h*p-d*f;if(_<=0&&h>=0&&d<=0)return c=h/(h-d),t.copy(n).addScaledVector(Ss,c);eu.subVectors(e,a);const x=Ss.dot(eu),S=Es.dot(eu);if(S>=0&&x<=S)return t.copy(a);const E=x*f-h*S;if(E<=0&&f>=0&&S<=0)return l=f/(f-S),t.copy(n).addScaledVector(Es,l);const v=d*S-x*p;if(v<=0&&p-d>=0&&x-S>=0)return dp.subVectors(a,s),l=(p-d)/(p-d+(x-S)),t.copy(s).addScaledVector(dp,l);const g=1/(v+E+_);return c=E*g,l=_*g,t.copy(n).addScaledVector(Ss,c).addScaledVector(Es,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},La={h:0,s:0,l:0};function tu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class bt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Dt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Dt.workingColorSpace){if(e=qu(e,1),t=an(t,0,1),n=an(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=tu(c,a,e+1/3),this.g=tu(c,a,e),this.b=tu(c,a,e-1/3)}return Dt.toWorkingColorSpace(this,s),this}setStyle(e,t=_i){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],l=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_i){const n=Om[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=Hc(e.r),this.g=Hc(e.g),this.b=Hc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return Dt.fromWorkingColorSpace(gn.copy(this),e),Math.round(an(gn.r*255,0,255))*65536+Math.round(an(gn.g*255,0,255))*256+Math.round(an(gn.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.fromWorkingColorSpace(gn.copy(this),t);const n=gn.r,s=gn.g,a=gn.b,c=Math.max(n,s,a),l=Math.min(n,s,a);let h,f;const d=(l+c)/2;if(l===c)h=0,f=0;else{const p=c-l;switch(f=d<=.5?p/(c+l):p/(2-c-l),c){case n:h=(s-a)/p+(s<a?6:0);break;case s:h=(a-n)/p+2;break;case a:h=(n-s)/p+4;break}h/=6}return e.h=h,e.s=f,e.l=d,e}getRGB(e,t=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=_i){Dt.fromWorkingColorSpace(gn.copy(this),e);const t=gn.r,n=gn.g,s=gn.b;return e!==_i?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(La);const n=Eo(or.h,La.h,t),s=Eo(or.s,La.s,t),a=Eo(or.l,La.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new bt;bt.NAMES=Om;let ZM=0;class vl extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=Ns,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Su,this.blendDst=Eu,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==pr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Su&&(n.blendSrc=this.blendSrc),this.blendDst!==Eu&&(n.blendDst=this.blendDst),this.blendEquation!==Ur&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fl extends vl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=xm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new W,Pa=new Ce;class fi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ep,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return NM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ps(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),n=yn(n,this.array),s=yn(s,this.array),a=yn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ep&&(e.usage=this.usage),e}}class Fm extends fi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bm extends fi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bn extends fi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let KM=0;const Kn=new qt,nu=new Mn,Ms=new W,zn=new Xr,go=new Xr,on=new W;class Ei extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lm(e)?Bm:Fm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new xt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return nu.lookAt(e),nu.updateMatrix(),this.applyMatrix4(nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];zn.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const l=t[a];go.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(zn.min,go.min),zn.expandByPoint(on),on.addVectors(zn.max,go.max),zn.expandByPoint(on)):(zn.expandByPoint(go.min),zn.expandByPoint(go.max))}zn.getCenter(n);let s=0;for(let a=0,c=e.count;a<c;a++)on.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(on));if(t)for(let a=0,c=t.length;a<c;a++){const l=t[a],h=this.morphTargetsRelative;for(let f=0,d=l.count;f<d;f++)on.fromBufferAttribute(l,f),h&&(Ms.fromBufferAttribute(e,f),on.add(Ms)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),l=[],h=[];for(let k=0;k<n.count;k++)l[k]=new W,h[k]=new W;const f=new W,d=new W,p=new W,_=new Ce,x=new Ce,S=new Ce,E=new W,v=new W;function g(k,he,T){f.fromBufferAttribute(n,k),d.fromBufferAttribute(n,he),p.fromBufferAttribute(n,T),_.fromBufferAttribute(a,k),x.fromBufferAttribute(a,he),S.fromBufferAttribute(a,T),d.sub(f),p.sub(f),x.sub(_),S.sub(_);const P=1/(x.x*S.y-S.x*x.y);isFinite(P)&&(E.copy(d).multiplyScalar(S.y).addScaledVector(p,-x.y).multiplyScalar(P),v.copy(p).multiplyScalar(x.x).addScaledVector(d,-S.x).multiplyScalar(P),l[k].add(E),l[he].add(E),l[T].add(E),h[k].add(v),h[he].add(v),h[T].add(v))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let k=0,he=I.length;k<he;++k){const T=I[k],P=T.start,be=T.count;for(let ve=P,H=P+be;ve<H;ve+=3)g(e.getX(ve+0),e.getX(ve+1),e.getX(ve+2))}const M=new W,C=new W,G=new W,F=new W;function D(k){G.fromBufferAttribute(s,k),F.copy(G);const he=l[k];M.copy(he),M.sub(G.multiplyScalar(G.dot(he))).normalize(),C.crossVectors(F,he);const P=C.dot(h[k])<0?-1:1;c.setXYZW(k,M.x,M.y,M.z,P)}for(let k=0,he=I.length;k<he;++k){const T=I[k],P=T.start,be=T.count;for(let ve=P,H=P+be;ve<H;ve+=3)D(e.getX(ve+0)),D(e.getX(ve+1)),D(e.getX(ve+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,x=n.count;_<x;_++)n.setXYZ(_,0,0,0);const s=new W,a=new W,c=new W,l=new W,h=new W,f=new W,d=new W,p=new W;if(e)for(let _=0,x=e.count;_<x;_+=3){const S=e.getX(_+0),E=e.getX(_+1),v=e.getX(_+2);s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,v),d.subVectors(c,a),p.subVectors(s,a),d.cross(p),l.fromBufferAttribute(n,S),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,v),l.add(d),h.add(d),f.add(d),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(E,h.x,h.y,h.z),n.setXYZ(v,f.x,f.y,f.z)}else for(let _=0,x=t.count;_<x;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),d.subVectors(c,a),p.subVectors(s,a),d.cross(p),n.setXYZ(_+0,d.x,d.y,d.z),n.setXYZ(_+1,d.x,d.y,d.z),n.setXYZ(_+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(l,h){const f=l.array,d=l.itemSize,p=l.normalized,_=new f.constructor(h.length*d);let x=0,S=0;for(let E=0,v=h.length;E<v;E++){l.isInterleavedBufferAttribute?x=h[E]*l.data.stride+l.offset:x=h[E]*d;for(let g=0;g<d;g++)_[S++]=f[x++]}return new fi(_,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ei,n=this.index.array,s=this.attributes;for(const l in s){const h=s[l],f=e(h,n);t.setAttribute(l,f)}const a=this.morphAttributes;for(const l in a){const h=[],f=a[l];for(let d=0,p=f.length;d<p;d++){const _=f[d],x=e(_,n);h.push(x)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,h=c.length;l<h;l++){const f=c[l];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const f=n[h];e.data.attributes[h]=f.toJSON(e.data)}const s={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],d=[];for(let p=0,_=f.length;p<_;p++){const x=f[p];d.push(x.toJSON(e.data))}d.length>0&&(s[h]=d,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const f in s){const d=s[f];this.setAttribute(f,d.clone(t))}const a=e.morphAttributes;for(const f in a){const d=[],p=a[f];for(let _=0,x=p.length;_<x;_++)d.push(p[_].clone(t));this.morphAttributes[f]=d}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pp=new qt,Cr=new Um,Ia=new Lo,mp=new W,bs=new W,Ts=new W,As=new W,iu=new W,Da=new W,Ua=new Ce,Na=new Ce,Oa=new Ce,gp=new W,_p=new W,vp=new W,Fa=new W,Ba=new W;class Gn extends Mn{constructor(e=new Ei,t=new fl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(a&&l){Da.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const d=l[h],p=a[h];d!==0&&(iu.fromBufferAttribute(p,e),c?Da.addScaledVector(iu,d):Da.addScaledVector(iu.sub(t),d))}t.add(Da)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(a),Cr.copy(e.ray).recast(e.near),!(Ia.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(Ia,mp)===null||Cr.origin.distanceToSquared(mp)>(e.far-e.near)**2))&&(pp.copy(a).invert(),Cr.copy(e.ray).applyMatrix4(pp),!(n.boundingBox!==null&&Cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cr)))}_computeIntersections(e,t,n){let s;const a=this.geometry,c=this.material,l=a.index,h=a.attributes.position,f=a.attributes.uv,d=a.attributes.uv1,p=a.attributes.normal,_=a.groups,x=a.drawRange;if(l!==null)if(Array.isArray(c))for(let S=0,E=_.length;S<E;S++){const v=_[S],g=c[v.materialIndex],I=Math.max(v.start,x.start),M=Math.min(l.count,Math.min(v.start+v.count,x.start+x.count));for(let C=I,G=M;C<G;C+=3){const F=l.getX(C),D=l.getX(C+1),k=l.getX(C+2);s=za(this,g,e,n,f,d,p,F,D,k),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const S=Math.max(0,x.start),E=Math.min(l.count,x.start+x.count);for(let v=S,g=E;v<g;v+=3){const I=l.getX(v),M=l.getX(v+1),C=l.getX(v+2);s=za(this,c,e,n,f,d,p,I,M,C),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let S=0,E=_.length;S<E;S++){const v=_[S],g=c[v.materialIndex],I=Math.max(v.start,x.start),M=Math.min(h.count,Math.min(v.start+v.count,x.start+x.count));for(let C=I,G=M;C<G;C+=3){const F=C,D=C+1,k=C+2;s=za(this,g,e,n,f,d,p,F,D,k),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const S=Math.max(0,x.start),E=Math.min(h.count,x.start+x.count);for(let v=S,g=E;v<g;v+=3){const I=v,M=v+1,C=v+2;s=za(this,c,e,n,f,d,p,I,M,C),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}}function JM(i,e,t,n,s,a,c,l){let h;if(e.side===Pn?h=n.intersectTriangle(c,a,s,!0,l):h=n.intersectTriangle(s,a,c,e.side===pr,l),h===null)return null;Ba.copy(l),Ba.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(Ba);return f<t.near||f>t.far?null:{distance:f,point:Ba.clone(),object:i}}function za(i,e,t,n,s,a,c,l,h,f){i.getVertexPosition(l,bs),i.getVertexPosition(h,Ts),i.getVertexPosition(f,As);const d=JM(i,e,t,n,bs,Ts,As,Fa);if(d){s&&(Ua.fromBufferAttribute(s,l),Na.fromBufferAttribute(s,h),Oa.fromBufferAttribute(s,f),d.uv=yi.getInterpolation(Fa,bs,Ts,As,Ua,Na,Oa,new Ce)),a&&(Ua.fromBufferAttribute(a,l),Na.fromBufferAttribute(a,h),Oa.fromBufferAttribute(a,f),d.uv1=yi.getInterpolation(Fa,bs,Ts,As,Ua,Na,Oa,new Ce)),c&&(gp.fromBufferAttribute(c,l),_p.fromBufferAttribute(c,h),vp.fromBufferAttribute(c,f),d.normal=yi.getInterpolation(Fa,bs,Ts,As,gp,_p,vp,new W),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:l,b:h,c:f,normal:new W,materialIndex:0};yi.getNormal(bs,Ts,As,p.normal),d.face=p}return d}class Po extends Ei{constructor(e=1,t=1,n=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:c};const l=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const h=[],f=[],d=[],p=[];let _=0,x=0;S("z","y","x",-1,-1,n,t,e,c,a,0),S("z","y","x",1,-1,n,t,-e,c,a,1),S("x","z","y",1,1,e,n,t,s,c,2),S("x","z","y",1,-1,e,n,-t,s,c,3),S("x","y","z",1,-1,e,t,n,s,a,4),S("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(h),this.setAttribute("position",new bn(f,3)),this.setAttribute("normal",new bn(d,3)),this.setAttribute("uv",new bn(p,2));function S(E,v,g,I,M,C,G,F,D,k,he){const T=C/D,P=G/k,be=C/2,ve=G/2,H=F/2,oe=D+1,Q=k+1;let le=0,ne=0;const ce=new W;for(let pe=0;pe<Q;pe++){const xe=pe*P-ve;for(let Be=0;Be<oe;Be++){const st=Be*T-be;ce[E]=st*I,ce[v]=xe*M,ce[g]=H,f.push(ce.x,ce.y,ce.z),ce[E]=0,ce[v]=0,ce[g]=F>0?1:-1,d.push(ce.x,ce.y,ce.z),p.push(Be/D),p.push(1-pe/k),le+=1}}for(let pe=0;pe<k;pe++)for(let xe=0;xe<D;xe++){const Be=_+xe+oe*pe,st=_+xe+oe*(pe+1),te=_+(xe+1)+oe*(pe+1),_e=_+(xe+1)+oe*pe;h.push(Be,st,_e),h.push(st,te,_e),ne+=6}l.addGroup(x,ne,he),x+=ne,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Sn(i){const e={};for(let t=0;t<i.length;t++){const n=Hs(i[t]);for(const s in n)e[s]=n[s]}return e}function jM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zm(i){return i.getRenderTarget()===null?i.outputColorSpace:Dt.workingColorSpace}const QM={clone:Hs,merge:Sn};var eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mr extends vl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eb,this.fragmentShader=tb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=jM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Gm extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new W,xp=new Ce,yp=new Ce;class Qn extends Gm{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,t){return this.getViewBounds(e,xp,yp),t.subVectors(yp,xp)}setViewOffset(e,t,n,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(So*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;a+=c.offsetX*s/h,t-=c.offsetY*n/f,s*=c.width/h,n*=c.height/f}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ws=-90,Cs=1;class nb extends Mn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qn(ws,Cs,e,t);s.layers=this.layers,this.add(s);const a=new Qn(ws,Cs,e,t);a.layers=this.layers,this.add(a);const c=new Qn(ws,Cs,e,t);c.layers=this.layers,this.add(c);const l=new Qn(ws,Cs,e,t);l.layers=this.layers,this.add(l);const h=new Qn(ws,Cs,e,t);h.layers=this.layers,this.add(h);const f=new Qn(ws,Cs,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,c,l,h]=t;for(const f of t)this.remove(f);if(e===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===cl)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,l,h,f,d]=this.children,p=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,c),e.setRenderTarget(n,2,s),e.render(t,l),e.setRenderTarget(n,3,s),e.render(t,h),e.setRenderTarget(n,4,s),e.render(t,f),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(p,_,x),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Hm extends En{constructor(e,t,n,s,a,c,l,h,f,d){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,n,s,a,c,l,h,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ib extends zr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Hm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Po(5,5,5),a=new mr({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:hr});a.uniforms.tEquirect.value=t;const c=new Gn(s,a),l=t.minFilter;return t.minFilter===Or&&(t.minFilter=Ln),new nb(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,s);e.setRenderTarget(a)}}const ru=new W,rb=new W,sb=new xt;class lr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ru.subVectors(n,t).cross(rb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ru),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sb.getNormalMatrix(e),s=this.coplanarPoint(ru).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new Lo,Ga=new W;class km{constructor(e=new lr,t=new lr,n=new lr,s=new lr,a=new lr,c=new lr){this.planes=[e,t,n,s,a,c]}set(e,t,n,s,a,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(a),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wi){const n=this.planes,s=e.elements,a=s[0],c=s[1],l=s[2],h=s[3],f=s[4],d=s[5],p=s[6],_=s[7],x=s[8],S=s[9],E=s[10],v=s[11],g=s[12],I=s[13],M=s[14],C=s[15];if(n[0].setComponents(h-a,_-f,v-x,C-g).normalize(),n[1].setComponents(h+a,_+f,v+x,C+g).normalize(),n[2].setComponents(h+c,_+d,v+S,C+I).normalize(),n[3].setComponents(h-c,_-d,v-S,C-I).normalize(),n[4].setComponents(h-l,_-p,v-E,C-M).normalize(),t===Wi)n[5].setComponents(h+l,_+p,v+E,C+M).normalize();else if(t===cl)n[5].setComponents(l,p,E,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ga.x=s.normal.x>0?e.max.x:e.min.x,Ga.y=s.normal.y>0?e.max.y:e.min.y,Ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vm(){let i=null,e=!1,t=null,n=null;function s(a,c){t(a,c),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function ob(i,e){const t=e.isWebGL2,n=new WeakMap;function s(f,d){const p=f.array,_=f.usage,x=p.byteLength,S=i.createBuffer();i.bindBuffer(d,S),i.bufferData(d,p,_),f.onUploadCallback();let E;if(p instanceof Float32Array)E=i.FLOAT;else if(p instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)E=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=i.SHORT;else if(p instanceof Uint32Array)E=i.UNSIGNED_INT;else if(p instanceof Int32Array)E=i.INT;else if(p instanceof Int8Array)E=i.BYTE;else if(p instanceof Uint8Array)E=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:x}}function a(f,d,p){const _=d.array,x=d._updateRange,S=d.updateRanges;if(i.bindBuffer(p,f),x.count===-1&&S.length===0&&i.bufferSubData(p,0,_),S.length!==0){for(let E=0,v=S.length;E<v;E++){const g=S[E];t?i.bufferSubData(p,g.start*_.BYTES_PER_ELEMENT,_,g.start,g.count):i.bufferSubData(p,g.start*_.BYTES_PER_ELEMENT,_.subarray(g.start,g.start+g.count))}d.clearUpdateRanges()}x.count!==-1&&(t?i.bufferSubData(p,x.offset*_.BYTES_PER_ELEMENT,_,x.offset,x.count):i.bufferSubData(p,x.offset*_.BYTES_PER_ELEMENT,_.subarray(x.offset,x.offset+x.count)),x.count=-1),d.onUploadCallback()}function c(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=n.get(f);d&&(i.deleteBuffer(d.buffer),n.delete(f))}function h(f,d){if(f.isGLBufferAttribute){const _=n.get(f);(!_||_.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const p=n.get(f);if(p===void 0)n.set(f,s(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,f,d),p.version=f.version}}return{get:c,remove:l,update:h}}class xl extends Ei{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,c=t/2,l=Math.floor(n),h=Math.floor(s),f=l+1,d=h+1,p=e/l,_=t/h,x=[],S=[],E=[],v=[];for(let g=0;g<d;g++){const I=g*_-c;for(let M=0;M<f;M++){const C=M*p-a;S.push(C,-I,0),E.push(0,0,1),v.push(M/l),v.push(1-g/h)}}for(let g=0;g<h;g++)for(let I=0;I<l;I++){const M=I+f*g,C=I+f*(g+1),G=I+1+f*(g+1),F=I+1+f*g;x.push(M,C,F),x.push(C,G,F)}this.setIndex(x),this.setAttribute("position",new bn(S,3)),this.setAttribute("normal",new bn(E,3)),this.setAttribute("uv",new bn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.width,e.height,e.widthSegments,e.heightSegments)}}var ab=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lb=`#ifdef USE_ALPHAHASH
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
#endif`,cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,db=`#ifdef USE_AOMAP
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
#endif`,pb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mb=`#ifdef USE_BATCHING
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
#endif`,gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_b=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yb=`#ifdef USE_IRIDESCENCE
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
#endif`,Sb=`#ifdef USE_BUMPMAP
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
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ab=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lb=`#define PI 3.141592653589793
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
} // validated`,Pb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ib=`vec3 transformedNormal = objectNormal;
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
#endif`,Db=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ub=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ob=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bb=`
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
}`,zb=`#ifdef USE_ENVMAP
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
#endif`,Gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hb=`#ifdef USE_ENVMAP
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
#endif`,kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
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
#endif`,Wb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$b=`#ifdef USE_GRADIENTMAP
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
}`,Zb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qb=`uniform bool receiveShadow;
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
#endif`,eT=`#ifdef USE_ENVMAP
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
#endif`,tT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sT=`PhysicalMaterial material;
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
#endif`,oT=`struct PhysicalMaterial {
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
}`,aT=`
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
#endif`,lT=`#if defined( RE_IndirectDiffuse )
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
#endif`,cT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
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
#endif`,dT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_T=`#if defined( USE_POINTS_UV )
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
#endif`,vT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yT=`#ifdef USE_INSTANCING_MORPH
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
#endif`,ET=`#ifdef USE_MORPHNORMALS
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
#endif`,MT=`#ifdef USE_MORPHTARGETS
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
#endif`,bT=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,AT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CT=`#ifndef FLAT_SHADED
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
#endif`,LT=`#ifdef USE_NORMALMAP
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
#endif`,PT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,FT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qT=`float getShadowMask() {
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
#endif`,$T=`#ifdef USE_SKINNING
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
#endif`,ZT=`#ifdef USE_SKINNING
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
#endif`,JT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tA=`#ifdef USE_TRANSMISSION
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
#endif`,nA=`#ifdef USE_TRANSMISSION
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
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lA=`uniform sampler2D t2D;
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
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`#include <common>
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
}`,pA=`#if DEPTH_PACKING == 3200
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
}`,mA=`#define DISTANCE
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
}`,gA=`#define DISTANCE
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
}`,_A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xA=`uniform float scale;
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
}`,yA=`uniform vec3 diffuse;
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
}`,SA=`#include <common>
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
}`,EA=`uniform vec3 diffuse;
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
}`,MA=`#define LAMBERT
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
}`,bA=`#define LAMBERT
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
}`,TA=`#define MATCAP
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
}`,AA=`#define MATCAP
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
}`,wA=`#define NORMAL
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
}`,CA=`#define NORMAL
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
}`,RA=`#define PHONG
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
}`,LA=`#define PHONG
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
}`,PA=`#define STANDARD
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
}`,IA=`#define STANDARD
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
}`,DA=`#define TOON
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
}`,UA=`#define TOON
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
}`,NA=`uniform float size;
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
}`,OA=`uniform vec3 diffuse;
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
}`,FA=`#include <common>
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
}`,BA=`uniform vec3 color;
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
}`,zA=`uniform float rotation;
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
}`,GA=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:ab,alphahash_pars_fragment:lb,alphamap_fragment:cb,alphamap_pars_fragment:ub,alphatest_fragment:hb,alphatest_pars_fragment:fb,aomap_fragment:db,aomap_pars_fragment:pb,batching_pars_vertex:mb,batching_vertex:gb,begin_vertex:_b,beginnormal_vertex:vb,bsdfs:xb,iridescence_fragment:yb,bumpmap_pars_fragment:Sb,clipping_planes_fragment:Eb,clipping_planes_pars_fragment:Mb,clipping_planes_pars_vertex:bb,clipping_planes_vertex:Tb,color_fragment:Ab,color_pars_fragment:wb,color_pars_vertex:Cb,color_vertex:Rb,common:Lb,cube_uv_reflection_fragment:Pb,defaultnormal_vertex:Ib,displacementmap_pars_vertex:Db,displacementmap_vertex:Ub,emissivemap_fragment:Nb,emissivemap_pars_fragment:Ob,colorspace_fragment:Fb,colorspace_pars_fragment:Bb,envmap_fragment:zb,envmap_common_pars_fragment:Gb,envmap_pars_fragment:Hb,envmap_pars_vertex:kb,envmap_physical_pars_fragment:eT,envmap_vertex:Vb,fog_vertex:Wb,fog_pars_vertex:Xb,fog_fragment:qb,fog_pars_fragment:Yb,gradientmap_pars_fragment:$b,lightmap_fragment:Zb,lightmap_pars_fragment:Kb,lights_lambert_fragment:Jb,lights_lambert_pars_fragment:jb,lights_pars_begin:Qb,lights_toon_fragment:tT,lights_toon_pars_fragment:nT,lights_phong_fragment:iT,lights_phong_pars_fragment:rT,lights_physical_fragment:sT,lights_physical_pars_fragment:oT,lights_fragment_begin:aT,lights_fragment_maps:lT,lights_fragment_end:cT,logdepthbuf_fragment:uT,logdepthbuf_pars_fragment:hT,logdepthbuf_pars_vertex:fT,logdepthbuf_vertex:dT,map_fragment:pT,map_pars_fragment:mT,map_particle_fragment:gT,map_particle_pars_fragment:_T,metalnessmap_fragment:vT,metalnessmap_pars_fragment:xT,morphinstance_vertex:yT,morphcolor_vertex:ST,morphnormal_vertex:ET,morphtarget_pars_vertex:MT,morphtarget_vertex:bT,normal_fragment_begin:TT,normal_fragment_maps:AT,normal_pars_fragment:wT,normal_pars_vertex:CT,normal_vertex:RT,normalmap_pars_fragment:LT,clearcoat_normal_fragment_begin:PT,clearcoat_normal_fragment_maps:IT,clearcoat_pars_fragment:DT,iridescence_pars_fragment:UT,opaque_fragment:NT,packing:OT,premultiplied_alpha_fragment:FT,project_vertex:BT,dithering_fragment:zT,dithering_pars_fragment:GT,roughnessmap_fragment:HT,roughnessmap_pars_fragment:kT,shadowmap_pars_fragment:VT,shadowmap_pars_vertex:WT,shadowmap_vertex:XT,shadowmask_pars_fragment:qT,skinbase_vertex:YT,skinning_pars_vertex:$T,skinning_vertex:ZT,skinnormal_vertex:KT,specularmap_fragment:JT,specularmap_pars_fragment:jT,tonemapping_fragment:QT,tonemapping_pars_fragment:eA,transmission_fragment:tA,transmission_pars_fragment:nA,uv_pars_fragment:iA,uv_pars_vertex:rA,uv_vertex:sA,worldpos_vertex:oA,background_vert:aA,background_frag:lA,backgroundCube_vert:cA,backgroundCube_frag:uA,cube_vert:hA,cube_frag:fA,depth_vert:dA,depth_frag:pA,distanceRGBA_vert:mA,distanceRGBA_frag:gA,equirect_vert:_A,equirect_frag:vA,linedashed_vert:xA,linedashed_frag:yA,meshbasic_vert:SA,meshbasic_frag:EA,meshlambert_vert:MA,meshlambert_frag:bA,meshmatcap_vert:TA,meshmatcap_frag:AA,meshnormal_vert:wA,meshnormal_frag:CA,meshphong_vert:RA,meshphong_frag:LA,meshphysical_vert:PA,meshphysical_frag:IA,meshtoon_vert:DA,meshtoon_frag:UA,points_vert:NA,points_frag:OA,shadow_vert:FA,shadow_frag:BA,sprite_vert:zA,sprite_frag:GA},Le={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},vi={basic:{uniforms:Sn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Sn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new bt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Sn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Sn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Sn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new bt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Sn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Sn([Le.points,Le.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Sn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Sn([Le.common,Le.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Sn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Sn([Le.sprite,Le.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Sn([Le.common,Le.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Sn([Le.lights,Le.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};vi.physical={uniforms:Sn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Ha={r:0,b:0,g:0},Lr=new Xi,HA=new qt;function kA(i,e,t,n,s,a,c){const l=new bt(0);let h=a===!0?0:1,f,d,p=null,_=0,x=null;function S(v,g){let I=!1,M=g.isScene===!0?g.background:null;M&&M.isTexture&&(M=(g.backgroundBlurriness>0?t:e).get(M)),M===null?E(l,h):M&&M.isColor&&(E(M,1),I=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,c):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||I)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===gl)?(d===void 0&&(d=new Gn(new Po(1,1,1),new mr({name:"BackgroundCubeMaterial",uniforms:Hs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(G,F,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Lr.copy(g.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(HA.makeRotationFromEuler(Lr)),d.material.toneMapped=Dt.getTransfer(M.colorSpace)!==Gt,(p!==M||_!==M.version||x!==i.toneMapping)&&(d.material.needsUpdate=!0,p=M,_=M.version,x=i.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(f===void 0&&(f=new Gn(new xl(2,2),new mr({name:"BackgroundMaterial",uniforms:Hs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=M,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=Dt.getTransfer(M.colorSpace)!==Gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),f.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||_!==M.version||x!==i.toneMapping)&&(f.material.needsUpdate=!0,p=M,_=M.version,x=i.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null))}function E(v,g){v.getRGB(Ha,zm(i)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,g,c)}return{getClearColor:function(){return l},setClearColor:function(v,g=1){l.set(v),h=g,E(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,E(l,h)},render:S}}function VA(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),c=n.isWebGL2||a!==null,l={},h=v(null);let f=h,d=!1;function p(H,oe,Q,le,ne){let ce=!1;if(c){const pe=E(le,Q,oe);f!==pe&&(f=pe,x(f.object)),ce=g(H,le,Q,ne),ce&&I(H,le,Q,ne)}else{const pe=oe.wireframe===!0;(f.geometry!==le.id||f.program!==Q.id||f.wireframe!==pe)&&(f.geometry=le.id,f.program=Q.id,f.wireframe=pe,ce=!0)}ne!==null&&t.update(ne,i.ELEMENT_ARRAY_BUFFER),(ce||d)&&(d=!1,k(H,oe,Q,le),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function _(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function x(H){return n.isWebGL2?i.bindVertexArray(H):a.bindVertexArrayOES(H)}function S(H){return n.isWebGL2?i.deleteVertexArray(H):a.deleteVertexArrayOES(H)}function E(H,oe,Q){const le=Q.wireframe===!0;let ne=l[H.id];ne===void 0&&(ne={},l[H.id]=ne);let ce=ne[oe.id];ce===void 0&&(ce={},ne[oe.id]=ce);let pe=ce[le];return pe===void 0&&(pe=v(_()),ce[le]=pe),pe}function v(H){const oe=[],Q=[],le=[];for(let ne=0;ne<s;ne++)oe[ne]=0,Q[ne]=0,le[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:oe,enabledAttributes:Q,attributeDivisors:le,object:H,attributes:{},index:null}}function g(H,oe,Q,le){const ne=f.attributes,ce=oe.attributes;let pe=0;const xe=Q.getAttributes();for(const Be in xe)if(xe[Be].location>=0){const te=ne[Be];let _e=ce[Be];if(_e===void 0&&(Be==="instanceMatrix"&&H.instanceMatrix&&(_e=H.instanceMatrix),Be==="instanceColor"&&H.instanceColor&&(_e=H.instanceColor)),te===void 0||te.attribute!==_e||_e&&te.data!==_e.data)return!0;pe++}return f.attributesNum!==pe||f.index!==le}function I(H,oe,Q,le){const ne={},ce=oe.attributes;let pe=0;const xe=Q.getAttributes();for(const Be in xe)if(xe[Be].location>=0){let te=ce[Be];te===void 0&&(Be==="instanceMatrix"&&H.instanceMatrix&&(te=H.instanceMatrix),Be==="instanceColor"&&H.instanceColor&&(te=H.instanceColor));const _e={};_e.attribute=te,te&&te.data&&(_e.data=te.data),ne[Be]=_e,pe++}f.attributes=ne,f.attributesNum=pe,f.index=le}function M(){const H=f.newAttributes;for(let oe=0,Q=H.length;oe<Q;oe++)H[oe]=0}function C(H){G(H,0)}function G(H,oe){const Q=f.newAttributes,le=f.enabledAttributes,ne=f.attributeDivisors;Q[H]=1,le[H]===0&&(i.enableVertexAttribArray(H),le[H]=1),ne[H]!==oe&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,oe),ne[H]=oe)}function F(){const H=f.newAttributes,oe=f.enabledAttributes;for(let Q=0,le=oe.length;Q<le;Q++)oe[Q]!==H[Q]&&(i.disableVertexAttribArray(Q),oe[Q]=0)}function D(H,oe,Q,le,ne,ce,pe){pe===!0?i.vertexAttribIPointer(H,oe,Q,ne,ce):i.vertexAttribPointer(H,oe,Q,le,ne,ce)}function k(H,oe,Q,le){if(n.isWebGL2===!1&&(H.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const ne=le.attributes,ce=Q.getAttributes(),pe=oe.defaultAttributeValues;for(const xe in ce){const Be=ce[xe];if(Be.location>=0){let st=ne[xe];if(st===void 0&&(xe==="instanceMatrix"&&H.instanceMatrix&&(st=H.instanceMatrix),xe==="instanceColor"&&H.instanceColor&&(st=H.instanceColor)),st!==void 0){const te=st.normalized,_e=st.itemSize,De=t.get(st);if(De===void 0)continue;const Je=De.buffer,ke=De.type,Fe=De.bytesPerElement,at=n.isWebGL2===!0&&(ke===i.INT||ke===i.UNSIGNED_INT||st.gpuType===Sm);if(st.isInterleavedBufferAttribute){const Xe=st.data,O=Xe.stride,Ae=st.offset;if(Xe.isInstancedInterleavedBuffer){for(let ie=0;ie<Be.locationSize;ie++)G(Be.location+ie,Xe.meshPerAttribute);H.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let ie=0;ie<Be.locationSize;ie++)C(Be.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let ie=0;ie<Be.locationSize;ie++)D(Be.location+ie,_e/Be.locationSize,ke,te,O*Fe,(Ae+_e/Be.locationSize*ie)*Fe,at)}else{if(st.isInstancedBufferAttribute){for(let Xe=0;Xe<Be.locationSize;Xe++)G(Be.location+Xe,st.meshPerAttribute);H.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Xe=0;Xe<Be.locationSize;Xe++)C(Be.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let Xe=0;Xe<Be.locationSize;Xe++)D(Be.location+Xe,_e/Be.locationSize,ke,te,_e*Fe,_e/Be.locationSize*Xe*Fe,at)}}else if(pe!==void 0){const te=pe[xe];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(Be.location,te);break;case 3:i.vertexAttrib3fv(Be.location,te);break;case 4:i.vertexAttrib4fv(Be.location,te);break;default:i.vertexAttrib1fv(Be.location,te)}}}}F()}function he(){be();for(const H in l){const oe=l[H];for(const Q in oe){const le=oe[Q];for(const ne in le)S(le[ne].object),delete le[ne];delete oe[Q]}delete l[H]}}function T(H){if(l[H.id]===void 0)return;const oe=l[H.id];for(const Q in oe){const le=oe[Q];for(const ne in le)S(le[ne].object),delete le[ne];delete oe[Q]}delete l[H.id]}function P(H){for(const oe in l){const Q=l[oe];if(Q[H.id]===void 0)continue;const le=Q[H.id];for(const ne in le)S(le[ne].object),delete le[ne];delete Q[H.id]}}function be(){ve(),d=!0,f!==h&&(f=h,x(f.object))}function ve(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:p,reset:be,resetDefaultState:ve,dispose:he,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:C,disableUnusedAttributes:F}}function WA(i,e,t,n){const s=n.isWebGL2;let a;function c(d){a=d}function l(d,p){i.drawArrays(a,d,p),t.update(p,a,1)}function h(d,p,_){if(_===0)return;let x,S;if(s)x=i,S="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[S](a,d,p,_),t.update(p,a,_)}function f(d,p,_){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<_;S++)this.render(d[S],p[S]);else{x.multiDrawArraysWEBGL(a,d,0,p,0,_);let S=0;for(let E=0;E<_;E++)S+=p[E];t.update(S,a,1)}}this.setMode=c,this.render=l,this.renderInstances=h,this.renderMultiDraw=f}function XA(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const h=a(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=c||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),E=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),I=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=_>0,C=c||e.has("OES_texture_float"),G=M&&C,F=c?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:f,getMaxAnisotropy:s,getMaxPrecision:a,precision:l,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:S,maxAttributes:E,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:I,vertexTextures:M,floatFragmentTextures:C,floatVertexTextures:G,maxSamples:F}}function qA(i){const e=this;let t=null,n=0,s=!1,a=!1;const c=new lr,l=new xt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,_){const x=p.length!==0||_||n!==0||s;return s=_,n=p.length,x},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,_){t=d(p,_,0)},this.setState=function(p,_,x){const S=p.clippingPlanes,E=p.clipIntersection,v=p.clipShadows,g=i.get(p);if(!s||S===null||S.length===0||a&&!v)a?d(null):f();else{const I=a?0:n,M=I*4;let C=g.clippingState||null;h.value=C,C=d(S,_,M,x);for(let G=0;G!==M;++G)C[G]=t[G];g.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=I}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,_,x,S){const E=p!==null?p.length:0;let v=null;if(E!==0){if(v=h.value,S!==!0||v===null){const g=x+E*4,I=_.matrixWorldInverse;l.getNormalMatrix(I),(v===null||v.length<g)&&(v=new Float32Array(g));for(let M=0,C=x;M!==E;++M,C+=4)c.copy(p[M]).applyMatrix4(I,l),c.normal.toArray(v,C),v[C+3]=c.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,v}}function YA(i){let e=new WeakMap;function t(c,l){return l===Mu?c.mapping=Bs:l===bu&&(c.mapping=zs),c}function n(c){if(c&&c.isTexture){const l=c.mapping;if(l===Mu||l===bu)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const f=new ib(h.height);return f.fromEquirectangularTexture(i,c),e.set(c,f),c.addEventListener("dispose",s),t(f.texture,c.mapping)}else return null}}return c}function s(c){const l=c.target;l.removeEventListener("dispose",s);const h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class $A extends Gm{constructor(e=-1,t=1,n=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,c=n+e,l=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,l-=d*this.view.offsetY,h=l-d*this.view.height}this.projectionMatrix.makeOrthographic(a,c,l,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Is=4,Sp=[.125,.215,.35,.446,.526,.582],Nr=20,su=new $A,Ep=new bt;let ou=null,au=0,lu=0;const Dr=(1+Math.sqrt(5))/2,Rs=1/Dr,Mp=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Dr,Rs),new W(0,Dr,-Rs),new W(Rs,0,Dr),new W(-Rs,0,Dr),new W(Dr,Rs,0),new W(-Dr,Rs,0)];class bp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,au,lu),e.scissorTest=!1,ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:To,format:hi,colorSpace:gr,depthBuffer:!1},s=Tp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tp(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZA(a)),this._blurMaterial=KA(a,e,t)}return s}_compileMaterial(e){const t=new Gn(this._lodPlanes[0],e);this._renderer.compile(t,su)}_sceneToCubeUV(e,t,n,s){const l=new Qn(90,1,t,n),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,_=d.toneMapping;d.getClearColor(Ep),d.toneMapping=fr,d.autoClear=!1;const x=new fl({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),S=new Gn(new Po,x);let E=!1;const v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,E=!0):(x.color.copy(Ep),E=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(l.up.set(0,h[g],0),l.lookAt(f[g],0,0)):I===1?(l.up.set(0,0,h[g]),l.lookAt(0,f[g],0)):(l.up.set(0,h[g],0),l.lookAt(0,0,f[g]));const M=this._cubeSize;ka(s,I*M,g>2?M:0,M,M),d.setRenderTarget(s),E&&d.render(S,l),d.render(e,l)}S.geometry.dispose(),S.material.dispose(),d.toneMapping=_,d.autoClear=p,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Bs||e.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ap());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new Gn(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const h=this._cubeSize;ka(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(c,su)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=Mp[(s-1)%Mp.length];this._blur(e,s-1,s,a,c)}t.autoClear=n}_blur(e,t,n,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,s,"latitudinal",a),this._halfBlur(c,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,c,l){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Gn(this._lodPlanes[s],f),_=f.uniforms,x=this._sizeLods[n]-1,S=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Nr-1),E=a/S,v=isFinite(a)?1+Math.floor(d*E):Nr;v>Nr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Nr}`);const g=[];let I=0;for(let D=0;D<Nr;++D){const k=D/E,he=Math.exp(-k*k/2);g.push(he),D===0?I+=he:D<v&&(I+=2*he)}for(let D=0;D<g.length;D++)g[D]=g[D]/I;_.envMap.value=e.texture,_.samples.value=v,_.weights.value=g,_.latitudinal.value=c==="latitudinal",l&&(_.poleAxis.value=l);const{_lodMax:M}=this;_.dTheta.value=S,_.mipInt.value=M-n;const C=this._sizeLods[s],G=3*C*(s>M-Is?s-M+Is:0),F=4*(this._cubeSize-C);ka(t,G,F,3*C,2*C),h.setRenderTarget(t),h.render(p,su)}}function ZA(i){const e=[],t=[],n=[];let s=i;const a=i-Is+1+Sp.length;for(let c=0;c<a;c++){const l=Math.pow(2,s);t.push(l);let h=1/l;c>i-Is?h=Sp[c-i+Is-1]:c===0&&(h=0),n.push(h);const f=1/(l-2),d=-f,p=1+f,_=[d,d,p,d,p,p,d,d,p,p,d,p],x=6,S=6,E=3,v=2,g=1,I=new Float32Array(E*S*x),M=new Float32Array(v*S*x),C=new Float32Array(g*S*x);for(let F=0;F<x;F++){const D=F%3*2/3-1,k=F>2?0:-1,he=[D,k,0,D+2/3,k,0,D+2/3,k+1,0,D,k,0,D+2/3,k+1,0,D,k+1,0];I.set(he,E*S*F),M.set(_,v*S*F);const T=[F,F,F,F,F,F];C.set(T,g*S*F)}const G=new Ei;G.setAttribute("position",new fi(I,E)),G.setAttribute("uv",new fi(M,v)),G.setAttribute("faceIndex",new fi(C,g)),e.push(G),s>Is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tp(i,e,t){const n=new zr(i,e,t);return n.texture.mapping=gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ka(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function KA(i,e,t){const n=new Float32Array(Nr),s=new W(0,1,0);return new mr({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Ap(){return new mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function wp(){return new mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Yu(){return`

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
	`}function JA(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const h=l.mapping,f=h===Mu||h===bu,d=h===Bs||h===zs;if(f||d)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let p=e.get(l);return t===null&&(t=new bp(i)),p=f?t.fromEquirectangular(l,p):t.fromCubemap(l,p),e.set(l,p),p.texture}else{if(e.has(l))return e.get(l).texture;{const p=l.image;if(f&&p&&p.height>0||d&&p&&s(p)){t===null&&(t=new bp(i));const _=f?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,_),l.addEventListener("dispose",a),_.texture}else return null}}}return l}function s(l){let h=0;const f=6;for(let d=0;d<f;d++)l[d]!==void 0&&h++;return h===f}function a(l){const h=l.target;h.removeEventListener("dispose",a);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function jA(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function QA(i,e,t,n){const s={},a=new WeakMap;function c(p){const _=p.target;_.index!==null&&e.remove(_.index);for(const S in _.attributes)e.remove(_.attributes[S]);for(const S in _.morphAttributes){const E=_.morphAttributes[S];for(let v=0,g=E.length;v<g;v++)e.remove(E[v])}_.removeEventListener("dispose",c),delete s[_.id];const x=a.get(_);x&&(e.remove(x),a.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(p,_){return s[_.id]===!0||(_.addEventListener("dispose",c),s[_.id]=!0,t.memory.geometries++),_}function h(p){const _=p.attributes;for(const S in _)e.update(_[S],i.ARRAY_BUFFER);const x=p.morphAttributes;for(const S in x){const E=x[S];for(let v=0,g=E.length;v<g;v++)e.update(E[v],i.ARRAY_BUFFER)}}function f(p){const _=[],x=p.index,S=p.attributes.position;let E=0;if(x!==null){const I=x.array;E=x.version;for(let M=0,C=I.length;M<C;M+=3){const G=I[M+0],F=I[M+1],D=I[M+2];_.push(G,F,F,D,D,G)}}else if(S!==void 0){const I=S.array;E=S.version;for(let M=0,C=I.length/3-1;M<C;M+=3){const G=M+0,F=M+1,D=M+2;_.push(G,F,F,D,D,G)}}else return;const v=new(Lm(_)?Bm:Fm)(_,1);v.version=E;const g=a.get(p);g&&e.remove(g),a.set(p,v)}function d(p){const _=a.get(p);if(_){const x=p.index;x!==null&&_.version<x.version&&f(p)}else f(p);return a.get(p)}return{get:l,update:h,getWireframeAttribute:d}}function ew(i,e,t,n){const s=n.isWebGL2;let a;function c(x){a=x}let l,h;function f(x){l=x.type,h=x.bytesPerElement}function d(x,S){i.drawElements(a,S,l,x*h),t.update(S,a,1)}function p(x,S,E){if(E===0)return;let v,g;if(s)v=i,g="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[g](a,S,l,x*h,E),t.update(S,a,E)}function _(x,S,E){if(E===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<E;g++)this.render(x[g]/h,S[g]);else{v.multiDrawElementsWEBGL(a,S,0,l,x,0,E);let g=0;for(let I=0;I<E;I++)g+=S[I];t.update(g,a,1)}}this.setMode=c,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=_}function tw(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,l){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=l*(a/3);break;case i.LINES:t.lines+=l*(a/2);break;case i.LINE_STRIP:t.lines+=l*(a-1);break;case i.LINE_LOOP:t.lines+=l*a;break;case i.POINTS:t.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function nw(i,e){return i[0]-e[0]}function iw(i,e){return Math.abs(e[1])-Math.abs(i[1])}function rw(i,e,t){const n={},s=new Float32Array(8),a=new WeakMap,c=new hn,l=[];for(let f=0;f<8;f++)l[f]=[f,0];function h(f,d,p){const _=f.morphTargetInfluences;if(e.isWebGL2===!0){const S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,E=S!==void 0?S.length:0;let v=a.get(d);if(v===void 0||v.count!==E){let ve=function(){P.dispose(),a.delete(d),d.removeEventListener("dispose",ve)};var x=ve;v!==void 0&&v.texture.dispose();const g=d.morphAttributes.position!==void 0,I=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],G=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let D=0;g===!0&&(D=1),I===!0&&(D=2),M===!0&&(D=3);let k=d.attributes.position.count*D,he=1;k>e.maxTextureSize&&(he=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const T=new Float32Array(k*he*4*E),P=new Dm(T,k,he,E);P.type=xi,P.needsUpdate=!0;const be=D*4;for(let H=0;H<E;H++){const oe=C[H],Q=G[H],le=F[H],ne=k*he*4*H;for(let ce=0;ce<oe.count;ce++){const pe=ce*be;g===!0&&(c.fromBufferAttribute(oe,ce),T[ne+pe+0]=c.x,T[ne+pe+1]=c.y,T[ne+pe+2]=c.z,T[ne+pe+3]=0),I===!0&&(c.fromBufferAttribute(Q,ce),T[ne+pe+4]=c.x,T[ne+pe+5]=c.y,T[ne+pe+6]=c.z,T[ne+pe+7]=0),M===!0&&(c.fromBufferAttribute(le,ce),T[ne+pe+8]=c.x,T[ne+pe+9]=c.y,T[ne+pe+10]=c.z,T[ne+pe+11]=le.itemSize===4?c.w:1)}}v={count:E,texture:P,size:new Ce(k,he)},a.set(d,v),d.addEventListener("dispose",ve)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",f.morphTexture,t);else{let g=0;for(let M=0;M<_.length;M++)g+=_[M];const I=d.morphTargetsRelative?1:1-g;p.getUniforms().setValue(i,"morphTargetBaseInfluence",I),p.getUniforms().setValue(i,"morphTargetInfluences",_)}p.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const S=_===void 0?0:_.length;let E=n[d.id];if(E===void 0||E.length!==S){E=[];for(let C=0;C<S;C++)E[C]=[C,0];n[d.id]=E}for(let C=0;C<S;C++){const G=E[C];G[0]=C,G[1]=_[C]}E.sort(iw);for(let C=0;C<8;C++)C<S&&E[C][1]?(l[C][0]=E[C][0],l[C][1]=E[C][1]):(l[C][0]=Number.MAX_SAFE_INTEGER,l[C][1]=0);l.sort(nw);const v=d.morphAttributes.position,g=d.morphAttributes.normal;let I=0;for(let C=0;C<8;C++){const G=l[C],F=G[0],D=G[1];F!==Number.MAX_SAFE_INTEGER&&D?(v&&d.getAttribute("morphTarget"+C)!==v[F]&&d.setAttribute("morphTarget"+C,v[F]),g&&d.getAttribute("morphNormal"+C)!==g[F]&&d.setAttribute("morphNormal"+C,g[F]),s[C]=D,I+=D):(v&&d.hasAttribute("morphTarget"+C)===!0&&d.deleteAttribute("morphTarget"+C),g&&d.hasAttribute("morphNormal"+C)===!0&&d.deleteAttribute("morphNormal"+C),s[C]=0)}const M=d.morphTargetsRelative?1:1-I;p.getUniforms().setValue(i,"morphTargetBaseInfluence",M),p.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:h}}function sw(i,e,t,n){let s=new WeakMap;function a(h){const f=n.render.frame,d=h.geometry,p=e.get(h,d);if(s.get(p)!==f&&(e.update(p),s.set(p,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),s.get(h)!==f&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,f))),h.isSkinnedMesh){const _=h.skeleton;s.get(_)!==f&&(_.update(),s.set(_,f))}return p}function c(){s=new WeakMap}function l(h){const f=h.target;f.removeEventListener("dispose",l),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:c}}class Wm extends En{constructor(e,t,n,s,a,c,l,h,f,d){if(d=d!==void 0?d:Br,d!==Br&&d!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Br&&(n=ur),n===void 0&&d===Gs&&(n=Fr),super(null,s,a,c,l,h,d,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:un,this.minFilter=h!==void 0?h:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xm=new En,qm=new Wm(1,1);qm.compareFunction=Rm;const Ym=new Dm,$m=new GM,Zm=new Hm,Cp=[],Rp=[],Lp=new Float32Array(16),Pp=new Float32Array(9),Ip=new Float32Array(4);function Vs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Cp[s];if(a===void 0&&(a=new Float32Array(s),Cp[s]=a),e!==0){n.toArray(a,0);for(let c=1,l=0;c!==e;++c)l+=t,i[c].toArray(a,l)}return a}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yl(i,e){let t=Rp[e];t===void 0&&(t=new Int32Array(e),Rp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ow(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function aw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function lw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function cw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function uw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Ip.set(n),i.uniformMatrix2fv(this.addr,!1,Ip),nn(t,n)}}function hw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Pp.set(n),i.uniformMatrix3fv(this.addr,!1,Pp),nn(t,n)}}function fw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Lp.set(n),i.uniformMatrix4fv(this.addr,!1,Lp),nn(t,n)}}function dw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function mw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function gw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function _w(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function xw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function yw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function Sw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const a=this.type===i.SAMPLER_2D_SHADOW?qm:Xm;t.setTexture2D(e||a,s)}function Ew(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$m,s)}function Mw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Zm,s)}function bw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ym,s)}function Tw(i){switch(i){case 5126:return ow;case 35664:return aw;case 35665:return lw;case 35666:return cw;case 35674:return uw;case 35675:return hw;case 35676:return fw;case 5124:case 35670:return dw;case 35667:case 35671:return pw;case 35668:case 35672:return mw;case 35669:case 35673:return gw;case 5125:return _w;case 36294:return vw;case 36295:return xw;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return Mw;case 36289:case 36303:case 36311:case 36292:return bw}}function Aw(i,e){i.uniform1fv(this.addr,e)}function ww(i,e){const t=Vs(e,this.size,2);i.uniform2fv(this.addr,t)}function Cw(i,e){const t=Vs(e,this.size,3);i.uniform3fv(this.addr,t)}function Rw(i,e){const t=Vs(e,this.size,4);i.uniform4fv(this.addr,t)}function Lw(i,e){const t=Vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Pw(i,e){const t=Vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Iw(i,e){const t=Vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Dw(i,e){i.uniform1iv(this.addr,e)}function Uw(i,e){i.uniform2iv(this.addr,e)}function Nw(i,e){i.uniform3iv(this.addr,e)}function Ow(i,e){i.uniform4iv(this.addr,e)}function Fw(i,e){i.uniform1uiv(this.addr,e)}function Bw(i,e){i.uniform2uiv(this.addr,e)}function zw(i,e){i.uniform3uiv(this.addr,e)}function Gw(i,e){i.uniform4uiv(this.addr,e)}function Hw(i,e,t){const n=this.cache,s=e.length,a=yl(t,s);tn(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||Xm,a[c])}function kw(i,e,t){const n=this.cache,s=e.length,a=yl(t,s);tn(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||$m,a[c])}function Vw(i,e,t){const n=this.cache,s=e.length,a=yl(t,s);tn(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||Zm,a[c])}function Ww(i,e,t){const n=this.cache,s=e.length,a=yl(t,s);tn(n,a)||(i.uniform1iv(this.addr,a),nn(n,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||Ym,a[c])}function Xw(i){switch(i){case 5126:return Aw;case 35664:return ww;case 35665:return Cw;case 35666:return Rw;case 35674:return Lw;case 35675:return Pw;case 35676:return Iw;case 5124:case 35670:return Dw;case 35667:case 35671:return Uw;case 35668:case 35672:return Nw;case 35669:case 35673:return Ow;case 5125:return Fw;case 36294:return Bw;case 36295:return zw;case 36296:return Gw;case 35678:case 36198:case 36298:case 36306:case 35682:return Hw;case 35679:case 36299:case 36307:return kw;case 35680:case 36300:case 36308:case 36293:return Vw;case 36289:case 36303:case 36311:case 36292:return Ww}}class qw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tw(t.type)}}class Yw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xw(t.type)}}class $w{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const l=s[a];l.setValue(e,t[l.id],n)}}}const cu=/(\w+)(\])?(\[|\.)?/g;function Dp(i,e){i.seq.push(e),i.map[e.id]=e}function Zw(i,e,t){const n=i.name,s=n.length;for(cu.lastIndex=0;;){const a=cu.exec(n),c=cu.lastIndex;let l=a[1];const h=a[2]==="]",f=a[3];if(h&&(l=l|0),f===void 0||f==="["&&c+2===s){Dp(t,f===void 0?new qw(l,i,e):new Yw(l,i,e));break}else{let p=t.map[l];p===void 0&&(p=new $w(l),Dp(t,p)),t=p}}}class nl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);Zw(a,c,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,c=t.length;a!==c;++a){const l=t[a],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&n.push(c)}return n}}function Up(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Kw=37297;let Jw=0;function jw(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}function Qw(i){const e=Dt.getPrimaries(Dt.workingColorSpace),t=Dt.getPrimaries(i);let n;switch(e===t?n="":e===ll&&t===al?n="LinearDisplayP3ToLinearSRGB":e===al&&t===ll&&(n="LinearSRGBToLinearDisplayP3"),i){case gr:case _l:return[n,"LinearTransferOETF"];case _i:case Xu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Np(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+jw(i.getShaderSource(e),c)}else return s}function eC(i,e){const t=Qw(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function tC(i,e){let t;switch(e){case $E:t="Linear";break;case ZE:t="Reinhard";break;case KE:t="OptimizedCineon";break;case JE:t="ACESFilmic";break;case QE:t="AgX";break;case eM:t="Neutral";break;case jE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nC(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function iC(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function rC(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sC(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),c=a.name;let l=1;a.type===i.FLOAT_MAT2&&(l=2),a.type===i.FLOAT_MAT3&&(l=3),a.type===i.FLOAT_MAT4&&(l=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:l}}return t}function Ds(i){return i!==""}function Op(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(i){return i.replace(oC,lC)}const aC=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lC(i,e){let t=vt[e];if(t===void 0){const n=aC.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ru(t)}const cC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bp(i){return i.replace(cC,uC)}function uC(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function zp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function hC(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===EE?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function fC(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dC(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function pC(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xm:e="ENVMAP_BLENDING_MULTIPLY";break;case qE:e="ENVMAP_BLENDING_MIX";break;case YE:e="ENVMAP_BLENDING_ADD";break}return e}function mC(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function gC(i,e,t,n){const s=i.getContext(),a=t.defines;let c=t.vertexShader,l=t.fragmentShader;const h=hC(t),f=fC(t),d=dC(t),p=pC(t),_=mC(t),x=t.isWebGL2?"":nC(t),S=iC(t),E=rC(a),v=s.createProgram();let g,I,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ds).join(`
`),g.length>0&&(g+=`
`),I=[x,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ds).join(`
`),I.length>0&&(I+=`
`)):(g=[zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),I=[x,zp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fr?"#define TONE_MAPPING":"",t.toneMapping!==fr?vt.tonemapping_pars_fragment:"",t.toneMapping!==fr?tC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,eC("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),c=Ru(c),c=Op(c,t),c=Fp(c,t),l=Ru(l),l=Op(l,t),l=Fp(l,t),c=Bp(c),l=Bp(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,I=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+I);const C=M+g+c,G=M+I+l,F=Up(s,s.VERTEX_SHADER,C),D=Up(s,s.FRAGMENT_SHADER,G);s.attachShader(v,F),s.attachShader(v,D),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function k(be){if(i.debug.checkShaderErrors){const ve=s.getProgramInfoLog(v).trim(),H=s.getShaderInfoLog(F).trim(),oe=s.getShaderInfoLog(D).trim();let Q=!0,le=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,F,D);else{const ne=Np(s,F,"vertex"),ce=Np(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+be.name+`
Material Type: `+be.type+`

Program Info Log: `+ve+`
`+ne+`
`+ce)}else ve!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ve):(H===""||oe==="")&&(le=!1);le&&(be.diagnostics={runnable:Q,programLog:ve,vertexShader:{log:H,prefix:g},fragmentShader:{log:oe,prefix:I}})}s.deleteShader(F),s.deleteShader(D),he=new nl(s,v),T=sC(s,v)}let he;this.getUniforms=function(){return he===void 0&&k(this),he};let T;this.getAttributes=function(){return T===void 0&&k(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(v,Kw)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=D,this}let _C=0;class vC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xC(e),t.set(e,n)),n}}class xC{constructor(e){this.id=_C++,this.code=e,this.usedTimes=0}}function yC(i,e,t,n,s,a,c){const l=new Nm,h=new vC,f=new Set,d=[],p=s.isWebGL2,_=s.logarithmicDepthBuffer,x=s.vertexTextures;let S=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return f.add(T),T===0?"uv":`uv${T}`}function g(T,P,be,ve,H){const oe=ve.fog,Q=H.geometry,le=T.isMeshStandardMaterial?ve.environment:null,ne=(T.isMeshStandardMaterial?t:e).get(T.envMap||le),ce=ne&&ne.mapping===gl?ne.image.height:null,pe=E[T.type];T.precision!==null&&(S=s.getMaxPrecision(T.precision),S!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",S,"instead."));const xe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Be=xe!==void 0?xe.length:0;let st=0;Q.morphAttributes.position!==void 0&&(st=1),Q.morphAttributes.normal!==void 0&&(st=2),Q.morphAttributes.color!==void 0&&(st=3);let te,_e,De,Je;if(pe){const wt=vi[pe];te=wt.vertexShader,_e=wt.fragmentShader}else te=T.vertexShader,_e=T.fragmentShader,h.update(T),De=h.getVertexShaderID(T),Je=h.getFragmentShaderID(T);const ke=i.getRenderTarget(),Fe=H.isInstancedMesh===!0,at=H.isBatchedMesh===!0,Xe=!!T.map,O=!!T.matcap,Ae=!!ne,ie=!!T.aoMap,Ee=!!T.lightMap,de=!!T.bumpMap,Pe=!!T.normalMap,Ue=!!T.displacementMap,Ve=!!T.emissiveMap,ot=!!T.metalnessMap,L=!!T.roughnessMap,b=T.anisotropy>0,ee=T.clearcoat>0,re=T.iridescence>0,ye=T.sheen>0,me=T.transmission>0,je=b&&!!T.anisotropyMap,Ze=ee&&!!T.clearcoatMap,we=ee&&!!T.clearcoatNormalMap,Re=ee&&!!T.clearcoatRoughnessMap,et=re&&!!T.iridescenceMap,Te=re&&!!T.iridescenceThicknessMap,Ot=ye&&!!T.sheenColorMap,ut=ye&&!!T.sheenRoughnessMap,Ke=!!T.specularMap,Ge=!!T.specularColorMap,qe=!!T.specularIntensityMap,U=me&&!!T.transmissionMap,fe=me&&!!T.thicknessMap,We=!!T.gradientMap,B=!!T.alphaMap,Me=T.alphaTest>0,Y=!!T.alphaHash,Se=!!T.extensions;let Ne=fr;T.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(Ne=i.toneMapping);const gt={isWebGL2:p,shaderID:pe,shaderType:T.type,shaderName:T.name,vertexShader:te,fragmentShader:_e,defines:T.defines,customVertexShaderID:De,customFragmentShaderID:Je,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:S,batching:at,instancing:Fe,instancingColor:Fe&&H.instanceColor!==null,instancingMorph:Fe&&H.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ke===null?i.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:gr,alphaToCoverage:!!T.alphaToCoverage,map:Xe,matcap:O,envMap:Ae,envMapMode:Ae&&ne.mapping,envMapCubeUVHeight:ce,aoMap:ie,lightMap:Ee,bumpMap:de,normalMap:Pe,displacementMap:x&&Ue,emissiveMap:Ve,normalMapObjectSpace:Pe&&T.normalMapType===hM,normalMapTangentSpace:Pe&&T.normalMapType===uM,metalnessMap:ot,roughnessMap:L,anisotropy:b,anisotropyMap:je,clearcoat:ee,clearcoatMap:Ze,clearcoatNormalMap:we,clearcoatRoughnessMap:Re,iridescence:re,iridescenceMap:et,iridescenceThicknessMap:Te,sheen:ye,sheenColorMap:Ot,sheenRoughnessMap:ut,specularMap:Ke,specularColorMap:Ge,specularIntensityMap:qe,transmission:me,transmissionMap:U,thicknessMap:fe,gradientMap:We,opaque:T.transparent===!1&&T.blending===Ns&&T.alphaToCoverage===!1,alphaMap:B,alphaTest:Me,alphaHash:Y,combine:T.combine,mapUv:Xe&&v(T.map.channel),aoMapUv:ie&&v(T.aoMap.channel),lightMapUv:Ee&&v(T.lightMap.channel),bumpMapUv:de&&v(T.bumpMap.channel),normalMapUv:Pe&&v(T.normalMap.channel),displacementMapUv:Ue&&v(T.displacementMap.channel),emissiveMapUv:Ve&&v(T.emissiveMap.channel),metalnessMapUv:ot&&v(T.metalnessMap.channel),roughnessMapUv:L&&v(T.roughnessMap.channel),anisotropyMapUv:je&&v(T.anisotropyMap.channel),clearcoatMapUv:Ze&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:ut&&v(T.sheenRoughnessMap.channel),specularMapUv:Ke&&v(T.specularMap.channel),specularColorMapUv:Ge&&v(T.specularColorMap.channel),specularIntensityMapUv:qe&&v(T.specularIntensityMap.channel),transmissionMapUv:U&&v(T.transmissionMap.channel),thicknessMapUv:fe&&v(T.thicknessMap.channel),alphaMapUv:B&&v(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Pe||b),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(Xe||B),fog:!!oe,useFog:T.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:st,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&be.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ne,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Xe&&T.map.isVideoTexture===!0&&Dt.getTransfer(T.map.colorSpace)===Gt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Vi,flipSided:T.side===Pn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Se&&T.extensions.derivatives===!0,extensionFragDepth:Se&&T.extensions.fragDepth===!0,extensionDrawBuffers:Se&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Se&&T.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return gt.vertexUv1s=f.has(1),gt.vertexUv2s=f.has(2),gt.vertexUv3s=f.has(3),f.clear(),gt}function I(T){const P=[];if(T.shaderID?P.push(T.shaderID):(P.push(T.customVertexShaderID),P.push(T.customFragmentShaderID)),T.defines!==void 0)for(const be in T.defines)P.push(be),P.push(T.defines[be]);return T.isRawShaderMaterial===!1&&(M(P,T),C(P,T),P.push(i.outputColorSpace)),P.push(T.customProgramCacheKey),P.join()}function M(T,P){T.push(P.precision),T.push(P.outputColorSpace),T.push(P.envMapMode),T.push(P.envMapCubeUVHeight),T.push(P.mapUv),T.push(P.alphaMapUv),T.push(P.lightMapUv),T.push(P.aoMapUv),T.push(P.bumpMapUv),T.push(P.normalMapUv),T.push(P.displacementMapUv),T.push(P.emissiveMapUv),T.push(P.metalnessMapUv),T.push(P.roughnessMapUv),T.push(P.anisotropyMapUv),T.push(P.clearcoatMapUv),T.push(P.clearcoatNormalMapUv),T.push(P.clearcoatRoughnessMapUv),T.push(P.iridescenceMapUv),T.push(P.iridescenceThicknessMapUv),T.push(P.sheenColorMapUv),T.push(P.sheenRoughnessMapUv),T.push(P.specularMapUv),T.push(P.specularColorMapUv),T.push(P.specularIntensityMapUv),T.push(P.transmissionMapUv),T.push(P.thicknessMapUv),T.push(P.combine),T.push(P.fogExp2),T.push(P.sizeAttenuation),T.push(P.morphTargetsCount),T.push(P.morphAttributeCount),T.push(P.numDirLights),T.push(P.numPointLights),T.push(P.numSpotLights),T.push(P.numSpotLightMaps),T.push(P.numHemiLights),T.push(P.numRectAreaLights),T.push(P.numDirLightShadows),T.push(P.numPointLightShadows),T.push(P.numSpotLightShadows),T.push(P.numSpotLightShadowsWithMaps),T.push(P.numLightProbes),T.push(P.shadowMapType),T.push(P.toneMapping),T.push(P.numClippingPlanes),T.push(P.numClipIntersection),T.push(P.depthPacking)}function C(T,P){l.disableAll(),P.isWebGL2&&l.enable(0),P.supportsVertexTextures&&l.enable(1),P.instancing&&l.enable(2),P.instancingColor&&l.enable(3),P.instancingMorph&&l.enable(4),P.matcap&&l.enable(5),P.envMap&&l.enable(6),P.normalMapObjectSpace&&l.enable(7),P.normalMapTangentSpace&&l.enable(8),P.clearcoat&&l.enable(9),P.iridescence&&l.enable(10),P.alphaTest&&l.enable(11),P.vertexColors&&l.enable(12),P.vertexAlphas&&l.enable(13),P.vertexUv1s&&l.enable(14),P.vertexUv2s&&l.enable(15),P.vertexUv3s&&l.enable(16),P.vertexTangents&&l.enable(17),P.anisotropy&&l.enable(18),P.alphaHash&&l.enable(19),P.batching&&l.enable(20),T.push(l.mask),l.disableAll(),P.fog&&l.enable(0),P.useFog&&l.enable(1),P.flatShading&&l.enable(2),P.logarithmicDepthBuffer&&l.enable(3),P.skinning&&l.enable(4),P.morphTargets&&l.enable(5),P.morphNormals&&l.enable(6),P.morphColors&&l.enable(7),P.premultipliedAlpha&&l.enable(8),P.shadowMapEnabled&&l.enable(9),P.useLegacyLights&&l.enable(10),P.doubleSided&&l.enable(11),P.flipSided&&l.enable(12),P.useDepthPacking&&l.enable(13),P.dithering&&l.enable(14),P.transmission&&l.enable(15),P.sheen&&l.enable(16),P.opaque&&l.enable(17),P.pointsUvs&&l.enable(18),P.decodeVideoTexture&&l.enable(19),P.alphaToCoverage&&l.enable(20),T.push(l.mask)}function G(T){const P=E[T.type];let be;if(P){const ve=vi[P];be=QM.clone(ve.uniforms)}else be=T.uniforms;return be}function F(T,P){let be;for(let ve=0,H=d.length;ve<H;ve++){const oe=d[ve];if(oe.cacheKey===P){be=oe,++be.usedTimes;break}}return be===void 0&&(be=new gC(i,P,T,a),d.push(be)),be}function D(T){if(--T.usedTimes===0){const P=d.indexOf(T);d[P]=d[d.length-1],d.pop(),T.destroy()}}function k(T){h.remove(T)}function he(){h.dispose()}return{getParameters:g,getProgramCacheKey:I,getUniforms:G,acquireProgram:F,releaseProgram:D,releaseShaderCache:k,programs:d,dispose:he}}function SC(){let i=new WeakMap;function e(a){let c=i.get(a);return c===void 0&&(c={},i.set(a,c)),c}function t(a){i.delete(a)}function n(a,c,l){i.get(a)[c]=l}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function EC(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Gp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hp(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function c(p,_,x,S,E,v){let g=i[e];return g===void 0?(g={id:p.id,object:p,geometry:_,material:x,groupOrder:S,renderOrder:p.renderOrder,z:E,group:v},i[e]=g):(g.id=p.id,g.object=p,g.geometry=_,g.material=x,g.groupOrder=S,g.renderOrder=p.renderOrder,g.z=E,g.group=v),e++,g}function l(p,_,x,S,E,v){const g=c(p,_,x,S,E,v);x.transmission>0?n.push(g):x.transparent===!0?s.push(g):t.push(g)}function h(p,_,x,S,E,v){const g=c(p,_,x,S,E,v);x.transmission>0?n.unshift(g):x.transparent===!0?s.unshift(g):t.unshift(g)}function f(p,_){t.length>1&&t.sort(p||EC),n.length>1&&n.sort(_||Gp),s.length>1&&s.sort(_||Gp)}function d(){for(let p=e,_=i.length;p<_;p++){const x=i[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:l,unshift:h,finish:d,sort:f}}function MC(){let i=new WeakMap;function e(n,s){const a=i.get(n);let c;return a===void 0?(c=new Hp,i.set(n,[c])):s>=a.length?(c=new Hp,a.push(c)):c=a[s],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function bC(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new bt};break;case"SpotLight":t={position:new W,direction:new W,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function TC(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let AC=0;function wC(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function CC(i,e){const t=new bC,n=TC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new W);const a=new W,c=new qt,l=new qt;function h(d,p){let _=0,x=0,S=0;for(let be=0;be<9;be++)s.probe[be].set(0,0,0);let E=0,v=0,g=0,I=0,M=0,C=0,G=0,F=0,D=0,k=0,he=0;d.sort(wC);const T=p===!0?Math.PI:1;for(let be=0,ve=d.length;be<ve;be++){const H=d[be],oe=H.color,Q=H.intensity,le=H.distance,ne=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=oe.r*Q*T,x+=oe.g*Q*T,S+=oe.b*Q*T;else if(H.isLightProbe){for(let ce=0;ce<9;ce++)s.probe[ce].addScaledVector(H.sh.coefficients[ce],Q);he++}else if(H.isDirectionalLight){const ce=t.get(H);if(ce.color.copy(H.color).multiplyScalar(H.intensity*T),H.castShadow){const pe=H.shadow,xe=n.get(H);xe.shadowBias=pe.bias,xe.shadowNormalBias=pe.normalBias,xe.shadowRadius=pe.radius,xe.shadowMapSize=pe.mapSize,s.directionalShadow[E]=xe,s.directionalShadowMap[E]=ne,s.directionalShadowMatrix[E]=H.shadow.matrix,C++}s.directional[E]=ce,E++}else if(H.isSpotLight){const ce=t.get(H);ce.position.setFromMatrixPosition(H.matrixWorld),ce.color.copy(oe).multiplyScalar(Q*T),ce.distance=le,ce.coneCos=Math.cos(H.angle),ce.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ce.decay=H.decay,s.spot[g]=ce;const pe=H.shadow;if(H.map&&(s.spotLightMap[D]=H.map,D++,pe.updateMatrices(H),H.castShadow&&k++),s.spotLightMatrix[g]=pe.matrix,H.castShadow){const xe=n.get(H);xe.shadowBias=pe.bias,xe.shadowNormalBias=pe.normalBias,xe.shadowRadius=pe.radius,xe.shadowMapSize=pe.mapSize,s.spotShadow[g]=xe,s.spotShadowMap[g]=ne,F++}g++}else if(H.isRectAreaLight){const ce=t.get(H);ce.color.copy(oe).multiplyScalar(Q),ce.halfWidth.set(H.width*.5,0,0),ce.halfHeight.set(0,H.height*.5,0),s.rectArea[I]=ce,I++}else if(H.isPointLight){const ce=t.get(H);if(ce.color.copy(H.color).multiplyScalar(H.intensity*T),ce.distance=H.distance,ce.decay=H.decay,H.castShadow){const pe=H.shadow,xe=n.get(H);xe.shadowBias=pe.bias,xe.shadowNormalBias=pe.normalBias,xe.shadowRadius=pe.radius,xe.shadowMapSize=pe.mapSize,xe.shadowCameraNear=pe.camera.near,xe.shadowCameraFar=pe.camera.far,s.pointShadow[v]=xe,s.pointShadowMap[v]=ne,s.pointShadowMatrix[v]=H.shadow.matrix,G++}s.point[v]=ce,v++}else if(H.isHemisphereLight){const ce=t.get(H);ce.skyColor.copy(H.color).multiplyScalar(Q*T),ce.groundColor.copy(H.groundColor).multiplyScalar(Q*T),s.hemi[M]=ce,M++}}I>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=S;const P=s.hash;(P.directionalLength!==E||P.pointLength!==v||P.spotLength!==g||P.rectAreaLength!==I||P.hemiLength!==M||P.numDirectionalShadows!==C||P.numPointShadows!==G||P.numSpotShadows!==F||P.numSpotMaps!==D||P.numLightProbes!==he)&&(s.directional.length=E,s.spot.length=g,s.rectArea.length=I,s.point.length=v,s.hemi.length=M,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=G,s.pointShadowMap.length=G,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=G,s.spotLightMatrix.length=F+D-k,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=he,P.directionalLength=E,P.pointLength=v,P.spotLength=g,P.rectAreaLength=I,P.hemiLength=M,P.numDirectionalShadows=C,P.numPointShadows=G,P.numSpotShadows=F,P.numSpotMaps=D,P.numLightProbes=he,s.version=AC++)}function f(d,p){let _=0,x=0,S=0,E=0,v=0;const g=p.matrixWorldInverse;for(let I=0,M=d.length;I<M;I++){const C=d[I];if(C.isDirectionalLight){const G=s.directional[_];G.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),G.direction.sub(a),G.direction.transformDirection(g),_++}else if(C.isSpotLight){const G=s.spot[S];G.position.setFromMatrixPosition(C.matrixWorld),G.position.applyMatrix4(g),G.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),G.direction.sub(a),G.direction.transformDirection(g),S++}else if(C.isRectAreaLight){const G=s.rectArea[E];G.position.setFromMatrixPosition(C.matrixWorld),G.position.applyMatrix4(g),l.identity(),c.copy(C.matrixWorld),c.premultiply(g),l.extractRotation(c),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),G.halfWidth.applyMatrix4(l),G.halfHeight.applyMatrix4(l),E++}else if(C.isPointLight){const G=s.point[x];G.position.setFromMatrixPosition(C.matrixWorld),G.position.applyMatrix4(g),x++}else if(C.isHemisphereLight){const G=s.hemi[v];G.direction.setFromMatrixPosition(C.matrixWorld),G.direction.transformDirection(g),v++}}}return{setup:h,setupView:f,state:s}}function kp(i,e){const t=new CC(i,e),n=[],s=[];function a(){n.length=0,s.length=0}function c(p){n.push(p)}function l(p){s.push(p)}function h(p){t.setup(n,p)}function f(p){t.setupView(n,p)}return{init:a,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:h,setupLightsView:f,pushLight:c,pushShadow:l}}function RC(i,e){let t=new WeakMap;function n(a,c=0){const l=t.get(a);let h;return l===void 0?(h=new kp(i,e),t.set(a,[h])):c>=l.length?(h=new kp(i,e),l.push(h)):h=l[c],h}function s(){t=new WeakMap}return{get:n,dispose:s}}class LC extends vl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PC extends vl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const IC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DC=`uniform sampler2D shadow_pass;
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
}`;function UC(i,e,t){let n=new km;const s=new Ce,a=new Ce,c=new hn,l=new LC({depthPacking:cM}),h=new PC,f={},d=t.maxTextureSize,p={[pr]:Pn,[Pn]:pr,[Vi]:Vi},_=new mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:IC,fragmentShader:DC}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const S=new Ei;S.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Gn(S,_),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vm;let g=this.type;this.render=function(F,D,k){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||F.length===0)return;const he=i.getRenderTarget(),T=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),be=i.state;be.setBlending(hr),be.buffers.color.setClear(1,1,1,1),be.buffers.depth.setTest(!0),be.setScissorTest(!1);const ve=g!==Gi&&this.type===Gi,H=g===Gi&&this.type!==Gi;for(let oe=0,Q=F.length;oe<Q;oe++){const le=F[oe],ne=le.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;s.copy(ne.mapSize);const ce=ne.getFrameExtents();if(s.multiply(ce),a.copy(ne.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/ce.x),s.x=a.x*ce.x,ne.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/ce.y),s.y=a.y*ce.y,ne.mapSize.y=a.y)),ne.map===null||ve===!0||H===!0){const xe=this.type!==Gi?{minFilter:un,magFilter:un}:{};ne.map!==null&&ne.map.dispose(),ne.map=new zr(s.x,s.y,xe),ne.map.texture.name=le.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();const pe=ne.getViewportCount();for(let xe=0;xe<pe;xe++){const Be=ne.getViewport(xe);c.set(a.x*Be.x,a.y*Be.y,a.x*Be.z,a.y*Be.w),be.viewport(c),ne.updateMatrices(le,xe),n=ne.getFrustum(),C(D,k,ne.camera,le,this.type)}ne.isPointLightShadow!==!0&&this.type===Gi&&I(ne,k),ne.needsUpdate=!1}g=this.type,v.needsUpdate=!1,i.setRenderTarget(he,T,P)};function I(F,D){const k=e.update(E);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new zr(s.x,s.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(D,null,k,_,E,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(D,null,k,x,E,null)}function M(F,D,k,he){let T=null;const P=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(P!==void 0)T=P;else if(T=k.isPointLight===!0?h:l,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const be=T.uuid,ve=D.uuid;let H=f[be];H===void 0&&(H={},f[be]=H);let oe=H[ve];oe===void 0&&(oe=T.clone(),H[ve]=oe,D.addEventListener("dispose",G)),T=oe}if(T.visible=D.visible,T.wireframe=D.wireframe,he===Gi?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:p[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const be=i.properties.get(T);be.light=k}return T}function C(F,D,k,he,T){if(F.visible===!1)return;if(F.layers.test(D.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&T===Gi)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const ve=e.update(F),H=F.material;if(Array.isArray(H)){const oe=ve.groups;for(let Q=0,le=oe.length;Q<le;Q++){const ne=oe[Q],ce=H[ne.materialIndex];if(ce&&ce.visible){const pe=M(F,ce,he,T);F.onBeforeShadow(i,F,D,k,ve,pe,ne),i.renderBufferDirect(k,null,ve,pe,F,ne),F.onAfterShadow(i,F,D,k,ve,pe,ne)}}}else if(H.visible){const oe=M(F,H,he,T);F.onBeforeShadow(i,F,D,k,ve,oe,null),i.renderBufferDirect(k,null,ve,oe,F,null),F.onAfterShadow(i,F,D,k,ve,oe,null)}}const be=F.children;for(let ve=0,H=be.length;ve<H;ve++)C(be[ve],D,k,he,T)}function G(F){F.target.removeEventListener("dispose",G);for(const k in f){const he=f[k],T=F.target.uuid;T in he&&(he[T].dispose(),delete he[T])}}}function NC(i,e,t){const n=t.isWebGL2;function s(){let B=!1;const Me=new hn;let Y=null;const Se=new hn(0,0,0,0);return{setMask:function(Ne){Y!==Ne&&!B&&(i.colorMask(Ne,Ne,Ne,Ne),Y=Ne)},setLocked:function(Ne){B=Ne},setClear:function(Ne,gt,wt,Lt,Ht){Ht===!0&&(Ne*=Lt,gt*=Lt,wt*=Lt),Me.set(Ne,gt,wt,Lt),Se.equals(Me)===!1&&(i.clearColor(Ne,gt,wt,Lt),Se.copy(Me))},reset:function(){B=!1,Y=null,Se.set(-1,0,0,0)}}}function a(){let B=!1,Me=null,Y=null,Se=null;return{setTest:function(Ne){Ne?Fe(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(Ne){Me!==Ne&&!B&&(i.depthMask(Ne),Me=Ne)},setFunc:function(Ne){if(Y!==Ne){switch(Ne){case zE:i.depthFunc(i.NEVER);break;case GE:i.depthFunc(i.ALWAYS);break;case HE:i.depthFunc(i.LESS);break;case sl:i.depthFunc(i.LEQUAL);break;case kE:i.depthFunc(i.EQUAL);break;case VE:i.depthFunc(i.GEQUAL);break;case WE:i.depthFunc(i.GREATER);break;case XE:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=Ne}},setLocked:function(Ne){B=Ne},setClear:function(Ne){Se!==Ne&&(i.clearDepth(Ne),Se=Ne)},reset:function(){B=!1,Me=null,Y=null,Se=null}}}function c(){let B=!1,Me=null,Y=null,Se=null,Ne=null,gt=null,wt=null,Lt=null,Ht=null;return{setTest:function(At){B||(At?Fe(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(At){Me!==At&&!B&&(i.stencilMask(At),Me=At)},setFunc:function(At,Pt,rn){(Y!==At||Se!==Pt||Ne!==rn)&&(i.stencilFunc(At,Pt,rn),Y=At,Se=Pt,Ne=rn)},setOp:function(At,Pt,rn){(gt!==At||wt!==Pt||Lt!==rn)&&(i.stencilOp(At,Pt,rn),gt=At,wt=Pt,Lt=rn)},setLocked:function(At){B=At},setClear:function(At){Ht!==At&&(i.clearStencil(At),Ht=At)},reset:function(){B=!1,Me=null,Y=null,Se=null,Ne=null,gt=null,wt=null,Lt=null,Ht=null}}}const l=new s,h=new a,f=new c,d=new WeakMap,p=new WeakMap;let _={},x={},S=new WeakMap,E=[],v=null,g=!1,I=null,M=null,C=null,G=null,F=null,D=null,k=null,he=new bt(0,0,0),T=0,P=!1,be=null,ve=null,H=null,oe=null,Q=null;const le=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,ce=0;const pe=i.getParameter(i.VERSION);pe.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(pe)[1]),ne=ce>=1):pe.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),ne=ce>=2);let xe=null,Be={};const st=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),_e=new hn().fromArray(st),De=new hn().fromArray(te);function Je(B,Me,Y,Se){const Ne=new Uint8Array(4),gt=i.createTexture();i.bindTexture(B,gt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<Y;wt++)n&&(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)?i.texImage3D(Me,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(Me+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return gt}const ke={};ke[i.TEXTURE_2D]=Je(i.TEXTURE_2D,i.TEXTURE_2D,1),ke[i.TEXTURE_CUBE_MAP]=Je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ke[i.TEXTURE_2D_ARRAY]=Je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ke[i.TEXTURE_3D]=Je(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),h.setClear(1),f.setClear(0),Fe(i.DEPTH_TEST),h.setFunc(sl),Ue(!1),Ve(Sd),Fe(i.CULL_FACE),de(hr);function Fe(B){_[B]!==!0&&(i.enable(B),_[B]=!0)}function at(B){_[B]!==!1&&(i.disable(B),_[B]=!1)}function Xe(B,Me){return x[B]!==Me?(i.bindFramebuffer(B,Me),x[B]=Me,n&&(B===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=Me),B===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=Me)),!0):!1}function O(B,Me){let Y=E,Se=!1;if(B){Y=S.get(Me),Y===void 0&&(Y=[],S.set(Me,Y));const Ne=B.textures;if(Y.length!==Ne.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,wt=Ne.length;gt<wt;gt++)Y[gt]=i.COLOR_ATTACHMENT0+gt;Y.length=Ne.length,Se=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,Se=!0);if(Se)if(t.isWebGL2)i.drawBuffers(Y);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ae(B){return v!==B?(i.useProgram(B),v=B,!0):!1}const ie={[Ur]:i.FUNC_ADD,[bE]:i.FUNC_SUBTRACT,[TE]:i.FUNC_REVERSE_SUBTRACT};if(n)ie[Td]=i.MIN,ie[Ad]=i.MAX;else{const B=e.get("EXT_blend_minmax");B!==null&&(ie[Td]=B.MIN_EXT,ie[Ad]=B.MAX_EXT)}const Ee={[AE]:i.ZERO,[wE]:i.ONE,[CE]:i.SRC_COLOR,[Su]:i.SRC_ALPHA,[UE]:i.SRC_ALPHA_SATURATE,[IE]:i.DST_COLOR,[LE]:i.DST_ALPHA,[RE]:i.ONE_MINUS_SRC_COLOR,[Eu]:i.ONE_MINUS_SRC_ALPHA,[DE]:i.ONE_MINUS_DST_COLOR,[PE]:i.ONE_MINUS_DST_ALPHA,[NE]:i.CONSTANT_COLOR,[OE]:i.ONE_MINUS_CONSTANT_COLOR,[FE]:i.CONSTANT_ALPHA,[BE]:i.ONE_MINUS_CONSTANT_ALPHA};function de(B,Me,Y,Se,Ne,gt,wt,Lt,Ht,At){if(B===hr){g===!0&&(at(i.BLEND),g=!1);return}if(g===!1&&(Fe(i.BLEND),g=!0),B!==ME){if(B!==I||At!==P){if((M!==Ur||F!==Ur)&&(i.blendEquation(i.FUNC_ADD),M=Ur,F=Ur),At)switch(B){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ed:i.blendFunc(i.ONE,i.ONE);break;case Md:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ed:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Md:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}C=null,G=null,D=null,k=null,he.set(0,0,0),T=0,I=B,P=At}return}Ne=Ne||Me,gt=gt||Y,wt=wt||Se,(Me!==M||Ne!==F)&&(i.blendEquationSeparate(ie[Me],ie[Ne]),M=Me,F=Ne),(Y!==C||Se!==G||gt!==D||wt!==k)&&(i.blendFuncSeparate(Ee[Y],Ee[Se],Ee[gt],Ee[wt]),C=Y,G=Se,D=gt,k=wt),(Lt.equals(he)===!1||Ht!==T)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Ht),he.copy(Lt),T=Ht),I=B,P=!1}function Pe(B,Me){B.side===Vi?at(i.CULL_FACE):Fe(i.CULL_FACE);let Y=B.side===Pn;Me&&(Y=!Y),Ue(Y),B.blending===Ns&&B.transparent===!1?de(hr):de(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),h.setFunc(B.depthFunc),h.setTest(B.depthTest),h.setMask(B.depthWrite),l.setMask(B.colorWrite);const Se=B.stencilWrite;f.setTest(Se),Se&&(f.setMask(B.stencilWriteMask),f.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),f.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),L(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Fe(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(B){be!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),be=B)}function Ve(B){B!==yE?(Fe(i.CULL_FACE),B!==ve&&(B===Sd?i.cullFace(i.BACK):B===SE?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),ve=B}function ot(B){B!==H&&(ne&&i.lineWidth(B),H=B)}function L(B,Me,Y){B?(Fe(i.POLYGON_OFFSET_FILL),(oe!==Me||Q!==Y)&&(i.polygonOffset(Me,Y),oe=Me,Q=Y)):at(i.POLYGON_OFFSET_FILL)}function b(B){B?Fe(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function ee(B){B===void 0&&(B=i.TEXTURE0+le-1),xe!==B&&(i.activeTexture(B),xe=B)}function re(B,Me,Y){Y===void 0&&(xe===null?Y=i.TEXTURE0+le-1:Y=xe);let Se=Be[Y];Se===void 0&&(Se={type:void 0,texture:void 0},Be[Y]=Se),(Se.type!==B||Se.texture!==Me)&&(xe!==Y&&(i.activeTexture(Y),xe=Y),i.bindTexture(B,Me||ke[B]),Se.type=B,Se.texture=Me)}function ye(){const B=Be[xe];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function me(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function je(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ze(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ot(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ke(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ge(B){_e.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),_e.copy(B))}function qe(B){De.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),De.copy(B))}function U(B,Me){let Y=p.get(Me);Y===void 0&&(Y=new WeakMap,p.set(Me,Y));let Se=Y.get(B);Se===void 0&&(Se=i.getUniformBlockIndex(Me,B.name),Y.set(B,Se))}function fe(B,Me){const Se=p.get(Me).get(B);d.get(Me)!==Se&&(i.uniformBlockBinding(Me,Se,B.__bindingPointIndex),d.set(Me,Se))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),_={},xe=null,Be={},x={},S=new WeakMap,E=[],v=null,g=!1,I=null,M=null,C=null,G=null,F=null,D=null,k=null,he=new bt(0,0,0),T=0,P=!1,be=null,ve=null,H=null,oe=null,Q=null,_e.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),l.reset(),h.reset(),f.reset()}return{buffers:{color:l,depth:h,stencil:f},enable:Fe,disable:at,bindFramebuffer:Xe,drawBuffers:O,useProgram:Ae,setBlending:de,setMaterial:Pe,setFlipSided:Ue,setCullFace:Ve,setLineWidth:ot,setPolygonOffset:L,setScissorTest:b,activeTexture:ee,bindTexture:re,unbindTexture:ye,compressedTexImage2D:me,compressedTexImage3D:je,texImage2D:ut,texImage3D:Ke,updateUBOMapping:U,uniformBlockBinding:fe,texStorage2D:Te,texStorage3D:Ot,texSubImage2D:Ze,texSubImage3D:we,compressedTexSubImage2D:Re,compressedTexSubImage3D:et,scissor:Ge,viewport:qe,reset:We}}function OC(i,e,t,n,s,a,c){const l=s.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ce,p=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return S?new OffscreenCanvas(L,b):hl("canvas")}function v(L,b,ee,re){let ye=1;const me=ot(L);if((me.width>re||me.height>re)&&(ye=re/Math.max(me.width,me.height)),ye<1||b===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const je=b?ul:Math.floor,Ze=je(ye*me.width),we=je(ye*me.height);_===void 0&&(_=E(Ze,we));const Re=ee?E(Ze,we):_;return Re.width=Ze,Re.height=we,Re.getContext("2d").drawImage(L,0,0,Ze,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Ze+"x"+we+")."),Re}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),L;return L}function g(L){const b=ot(L);return Cu(b.width)&&Cu(b.height)}function I(L){return l?!1:L.wrapS!==ui||L.wrapT!==ui||L.minFilter!==un&&L.minFilter!==Ln}function M(L,b){return L.generateMipmaps&&b&&L.minFilter!==un&&L.minFilter!==Ln}function C(L){i.generateMipmap(L)}function G(L,b,ee,re,ye=!1){if(l===!1)return b;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let me=b;if(b===i.RED&&(ee===i.FLOAT&&(me=i.R32F),ee===i.HALF_FLOAT&&(me=i.R16F),ee===i.UNSIGNED_BYTE&&(me=i.R8)),b===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(me=i.R8UI),ee===i.UNSIGNED_SHORT&&(me=i.R16UI),ee===i.UNSIGNED_INT&&(me=i.R32UI),ee===i.BYTE&&(me=i.R8I),ee===i.SHORT&&(me=i.R16I),ee===i.INT&&(me=i.R32I)),b===i.RG&&(ee===i.FLOAT&&(me=i.RG32F),ee===i.HALF_FLOAT&&(me=i.RG16F),ee===i.UNSIGNED_BYTE&&(me=i.RG8)),b===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(me=i.RG8UI),ee===i.UNSIGNED_SHORT&&(me=i.RG16UI),ee===i.UNSIGNED_INT&&(me=i.RG32UI),ee===i.BYTE&&(me=i.RG8I),ee===i.SHORT&&(me=i.RG16I),ee===i.INT&&(me=i.RG32I)),b===i.RGBA){const je=ye?ol:Dt.getTransfer(re);ee===i.FLOAT&&(me=i.RGBA32F),ee===i.HALF_FLOAT&&(me=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(me=je===Gt?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(me=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(me=i.RGB5_A1)}return(me===i.R16F||me===i.R32F||me===i.RG16F||me===i.RG32F||me===i.RGBA16F||me===i.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function F(L,b,ee){return M(L,ee)===!0||L.isFramebufferTexture&&L.minFilter!==un&&L.minFilter!==Ln?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function D(L){return L===un||L===wd||L===ho?i.NEAREST:i.LINEAR}function k(L){const b=L.target;b.removeEventListener("dispose",k),T(b),b.isVideoTexture&&p.delete(b)}function he(L){const b=L.target;b.removeEventListener("dispose",he),be(b)}function T(L){const b=n.get(L);if(b.__webglInit===void 0)return;const ee=L.source,re=x.get(ee);if(re){const ye=re[b.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&P(L),Object.keys(re).length===0&&x.delete(ee)}n.remove(L)}function P(L){const b=n.get(L);i.deleteTexture(b.__webglTexture);const ee=L.source,re=x.get(ee);delete re[b.__cacheKey],c.memory.textures--}function be(L){const b=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(b.__webglFramebuffer[re]))for(let ye=0;ye<b.__webglFramebuffer[re].length;ye++)i.deleteFramebuffer(b.__webglFramebuffer[re][ye]);else i.deleteFramebuffer(b.__webglFramebuffer[re]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[re])}else{if(Array.isArray(b.__webglFramebuffer))for(let re=0;re<b.__webglFramebuffer.length;re++)i.deleteFramebuffer(b.__webglFramebuffer[re]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let re=0;re<b.__webglColorRenderbuffer.length;re++)b.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[re]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ee=L.textures;for(let re=0,ye=ee.length;re<ye;re++){const me=n.get(ee[re]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),c.memory.textures--),n.remove(ee[re])}n.remove(L)}let ve=0;function H(){ve=0}function oe(){const L=ve;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),ve+=1,L}function Q(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function le(L,b){const ee=n.get(L);if(L.isVideoTexture&&Ue(L),L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){const re=L.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(ee,L,b);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+b)}function ne(L,b){const ee=n.get(L);if(L.version>0&&ee.__version!==L.version){De(ee,L,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+b)}function ce(L,b){const ee=n.get(L);if(L.version>0&&ee.__version!==L.version){De(ee,L,b);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+b)}function pe(L,b){const ee=n.get(L);if(L.version>0&&ee.__version!==L.version){Je(ee,L,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+b)}const xe={[Tu]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[Au]:i.MIRRORED_REPEAT},Be={[un]:i.NEAREST,[wd]:i.NEAREST_MIPMAP_NEAREST,[ho]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[Uc]:i.LINEAR_MIPMAP_NEAREST,[Or]:i.LINEAR_MIPMAP_LINEAR},st={[fM]:i.NEVER,[vM]:i.ALWAYS,[dM]:i.LESS,[Rm]:i.LEQUAL,[pM]:i.EQUAL,[_M]:i.GEQUAL,[mM]:i.GREATER,[gM]:i.NOTEQUAL};function te(L,b,ee){if(b.type===xi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ln||b.magFilter===Uc||b.magFilter===ho||b.magFilter===Or||b.minFilter===Ln||b.minFilter===Uc||b.minFilter===ho||b.minFilter===Or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ee?(i.texParameteri(L,i.TEXTURE_WRAP_S,xe[b.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,xe[b.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,xe[b.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Be[b.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Be[b.minFilter])):(i.texParameteri(L,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(L,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==ui||b.wrapT!==ui)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,i.TEXTURE_MAG_FILTER,D(b.magFilter)),i.texParameteri(L,i.TEXTURE_MIN_FILTER,D(b.minFilter)),b.minFilter!==un&&b.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,st[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===un||b.minFilter!==ho&&b.minFilter!==Or||b.type===xi&&e.has("OES_texture_float_linear")===!1||l===!1&&b.type===To&&e.has("OES_texture_half_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function _e(L,b){let ee=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",k));const re=b.source;let ye=x.get(re);ye===void 0&&(ye={},x.set(re,ye));const me=Q(b);if(me!==L.__cacheKey){ye[me]===void 0&&(ye[me]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),ye[me].usedTimes++;const je=ye[L.__cacheKey];je!==void 0&&(ye[L.__cacheKey].usedTimes--,je.usedTimes===0&&P(b)),L.__cacheKey=me,L.__webglTexture=ye[me].texture}return ee}function De(L,b,ee){let re=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(re=i.TEXTURE_3D);const ye=_e(L,b),me=b.source;t.bindTexture(re,L.__webglTexture,i.TEXTURE0+ee);const je=n.get(me);if(me.version!==je.__version||ye===!0){t.activeTexture(i.TEXTURE0+ee);const Ze=Dt.getPrimaries(Dt.workingColorSpace),we=b.colorSpace===cr?null:Dt.getPrimaries(b.colorSpace),Re=b.colorSpace===cr||Ze===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const et=I(b)&&g(b.image)===!1;let Te=v(b.image,et,!1,s.maxTextureSize);Te=Ve(b,Te);const Ot=g(Te)||l,ut=a.convert(b.format,b.colorSpace);let Ke=a.convert(b.type),Ge=G(b.internalFormat,ut,Ke,b.colorSpace,b.isVideoTexture);te(re,b,Ot);let qe;const U=b.mipmaps,fe=l&&b.isVideoTexture!==!0&&Ge!==Cm,We=je.__version===void 0||ye===!0,B=me.dataReady,Me=F(b,Te,Ot);if(b.isDepthTexture)Ge=i.DEPTH_COMPONENT,l?b.type===xi?Ge=i.DEPTH_COMPONENT32F:b.type===ur?Ge=i.DEPTH_COMPONENT24:b.type===Fr?Ge=i.DEPTH24_STENCIL8:Ge=i.DEPTH_COMPONENT16:b.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Br&&Ge===i.DEPTH_COMPONENT&&b.type!==Wu&&b.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=ur,Ke=a.convert(b.type)),b.format===Gs&&Ge===i.DEPTH_COMPONENT&&(Ge=i.DEPTH_STENCIL,b.type!==Fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Fr,Ke=a.convert(b.type))),We&&(fe?t.texStorage2D(i.TEXTURE_2D,1,Ge,Te.width,Te.height):t.texImage2D(i.TEXTURE_2D,0,Ge,Te.width,Te.height,0,ut,Ke,null));else if(b.isDataTexture)if(U.length>0&&Ot){fe&&We&&t.texStorage2D(i.TEXTURE_2D,Me,Ge,U[0].width,U[0].height);for(let Y=0,Se=U.length;Y<Se;Y++)qe=U[Y],fe?B&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,qe.width,qe.height,ut,Ke,qe.data):t.texImage2D(i.TEXTURE_2D,Y,Ge,qe.width,qe.height,0,ut,Ke,qe.data);b.generateMipmaps=!1}else fe?(We&&t.texStorage2D(i.TEXTURE_2D,Me,Ge,Te.width,Te.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te.width,Te.height,ut,Ke,Te.data)):t.texImage2D(i.TEXTURE_2D,0,Ge,Te.width,Te.height,0,ut,Ke,Te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){fe&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ge,U[0].width,U[0].height,Te.depth);for(let Y=0,Se=U.length;Y<Se;Y++)qe=U[Y],b.format!==hi?ut!==null?fe?B&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,qe.width,qe.height,Te.depth,ut,qe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ge,qe.width,qe.height,Te.depth,0,qe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,qe.width,qe.height,Te.depth,ut,Ke,qe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ge,qe.width,qe.height,Te.depth,0,ut,Ke,qe.data)}else{fe&&We&&t.texStorage2D(i.TEXTURE_2D,Me,Ge,U[0].width,U[0].height);for(let Y=0,Se=U.length;Y<Se;Y++)qe=U[Y],b.format!==hi?ut!==null?fe?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,qe.width,qe.height,ut,qe.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,Ge,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?B&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,qe.width,qe.height,ut,Ke,qe.data):t.texImage2D(i.TEXTURE_2D,Y,Ge,qe.width,qe.height,0,ut,Ke,qe.data)}else if(b.isDataArrayTexture)fe?(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Ge,Te.width,Te.height,Te.depth),B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,ut,Ke,Te.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,Te.width,Te.height,Te.depth,0,ut,Ke,Te.data);else if(b.isData3DTexture)fe?(We&&t.texStorage3D(i.TEXTURE_3D,Me,Ge,Te.width,Te.height,Te.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,ut,Ke,Te.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,Te.width,Te.height,Te.depth,0,ut,Ke,Te.data);else if(b.isFramebufferTexture){if(We)if(fe)t.texStorage2D(i.TEXTURE_2D,Me,Ge,Te.width,Te.height);else{let Y=Te.width,Se=Te.height;for(let Ne=0;Ne<Me;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,Ge,Y,Se,0,ut,Ke,null),Y>>=1,Se>>=1}}else if(U.length>0&&Ot){if(fe&&We){const Y=ot(U[0]);t.texStorage2D(i.TEXTURE_2D,Me,Ge,Y.width,Y.height)}for(let Y=0,Se=U.length;Y<Se;Y++)qe=U[Y],fe?B&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,ut,Ke,qe):t.texImage2D(i.TEXTURE_2D,Y,Ge,ut,Ke,qe);b.generateMipmaps=!1}else if(fe){if(We){const Y=ot(Te);t.texStorage2D(i.TEXTURE_2D,Me,Ge,Y.width,Y.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Ke,Te)}else t.texImage2D(i.TEXTURE_2D,0,Ge,ut,Ke,Te);M(b,Ot)&&C(re),je.__version=me.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Je(L,b,ee){if(b.image.length!==6)return;const re=_e(L,b),ye=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+ee);const me=n.get(ye);if(ye.version!==me.__version||re===!0){t.activeTexture(i.TEXTURE0+ee);const je=Dt.getPrimaries(Dt.workingColorSpace),Ze=b.colorSpace===cr?null:Dt.getPrimaries(b.colorSpace),we=b.colorSpace===cr||je===Ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Re=b.isCompressedTexture||b.image[0].isCompressedTexture,et=b.image[0]&&b.image[0].isDataTexture,Te=[];for(let Y=0;Y<6;Y++)!Re&&!et?Te[Y]=v(b.image[Y],!1,!0,s.maxCubemapSize):Te[Y]=et?b.image[Y].image:b.image[Y],Te[Y]=Ve(b,Te[Y]);const Ot=Te[0],ut=g(Ot)||l,Ke=a.convert(b.format,b.colorSpace),Ge=a.convert(b.type),qe=G(b.internalFormat,Ke,Ge,b.colorSpace),U=l&&b.isVideoTexture!==!0,fe=me.__version===void 0||re===!0,We=ye.dataReady;let B=F(b,Ot,ut);te(i.TEXTURE_CUBE_MAP,b,ut);let Me;if(Re){U&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,B,qe,Ot.width,Ot.height);for(let Y=0;Y<6;Y++){Me=Te[Y].mipmaps;for(let Se=0;Se<Me.length;Se++){const Ne=Me[Se];b.format!==hi?Ke!==null?U?We&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,0,0,Ne.width,Ne.height,Ke,Ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,qe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?We&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,0,0,Ne.width,Ne.height,Ke,Ge,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,qe,Ne.width,Ne.height,0,Ke,Ge,Ne.data)}}}else{if(Me=b.mipmaps,U&&fe){Me.length>0&&B++;const Y=ot(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,B,qe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(et){U?We&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Te[Y].width,Te[Y].height,Ke,Ge,Te[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,qe,Te[Y].width,Te[Y].height,0,Ke,Ge,Te[Y].data);for(let Se=0;Se<Me.length;Se++){const gt=Me[Se].image[Y].image;U?We&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,0,0,gt.width,gt.height,Ke,Ge,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,qe,gt.width,gt.height,0,Ke,Ge,gt.data)}}else{U?We&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ke,Ge,Te[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,qe,Ke,Ge,Te[Y]);for(let Se=0;Se<Me.length;Se++){const Ne=Me[Se];U?We&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,0,0,Ke,Ge,Ne.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,qe,Ke,Ge,Ne.image[Y])}}}M(b,ut)&&C(i.TEXTURE_CUBE_MAP),me.__version=ye.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ke(L,b,ee,re,ye,me){const je=a.convert(ee.format,ee.colorSpace),Ze=a.convert(ee.type),we=G(ee.internalFormat,je,Ze,ee.colorSpace);if(!n.get(b).__hasExternalTextures){const et=Math.max(1,b.width>>me),Te=Math.max(1,b.height>>me);ye===i.TEXTURE_3D||ye===i.TEXTURE_2D_ARRAY?t.texImage3D(ye,me,we,et,Te,b.depth,0,je,Ze,null):t.texImage2D(ye,me,we,et,Te,0,je,Ze,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Pe(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ye,n.get(ee).__webglTexture,0,de(b)):(ye===i.TEXTURE_2D||ye>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,ye,n.get(ee).__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(L,b,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,L),b.depthBuffer&&!b.stencilBuffer){let re=l===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ee||Pe(b)){const ye=b.depthTexture;ye&&ye.isDepthTexture&&(ye.type===xi?re=i.DEPTH_COMPONENT32F:ye.type===ur&&(re=i.DEPTH_COMPONENT24));const me=de(b);Pe(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,re,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,me,re,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,re,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,L)}else if(b.depthBuffer&&b.stencilBuffer){const re=de(b);ee&&Pe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,b.width,b.height):Pe(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,L)}else{const re=b.textures;for(let ye=0;ye<re.length;ye++){const me=re[ye],je=a.convert(me.format,me.colorSpace),Ze=a.convert(me.type),we=G(me.internalFormat,je,Ze,me.colorSpace),Re=de(b);ee&&Pe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,we,b.width,b.height):Pe(b)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,we,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,we,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),le(b.depthTexture,0);const re=n.get(b.depthTexture).__webglTexture,ye=de(b);if(b.depthTexture.format===Br)Pe(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(b.depthTexture.format===Gs)Pe(b)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Xe(L){const b=n.get(L),ee=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");at(b.__webglFramebuffer,L)}else if(ee){b.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[re]),b.__webglDepthbuffer[re]=i.createRenderbuffer(),Fe(b.__webglDepthbuffer[re],L,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),Fe(b.__webglDepthbuffer,L,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function O(L,b,ee){const re=n.get(L);b!==void 0&&ke(re.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&Xe(L)}function Ae(L){const b=L.texture,ee=n.get(L),re=n.get(b);L.addEventListener("dispose",he);const ye=L.textures,me=L.isWebGLCubeRenderTarget===!0,je=ye.length>1,Ze=g(L)||l;if(je||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=b.version,c.memory.textures++),me){ee.__webglFramebuffer=[];for(let we=0;we<6;we++)if(l&&b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer[we]=[];for(let Re=0;Re<b.mipmaps.length;Re++)ee.__webglFramebuffer[we][Re]=i.createFramebuffer()}else ee.__webglFramebuffer[we]=i.createFramebuffer()}else{if(l&&b.mipmaps&&b.mipmaps.length>0){ee.__webglFramebuffer=[];for(let we=0;we<b.mipmaps.length;we++)ee.__webglFramebuffer[we]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(je)if(s.drawBuffers)for(let we=0,Re=ye.length;we<Re;we++){const et=n.get(ye[we]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),c.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&L.samples>0&&Pe(L)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let we=0;we<ye.length;we++){const Re=ye[we];ee.__webglColorRenderbuffer[we]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[we]);const et=a.convert(Re.format,Re.colorSpace),Te=a.convert(Re.type),Ot=G(Re.internalFormat,et,Te,Re.colorSpace,L.isXRRenderTarget===!0),ut=de(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Ot,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,ee.__webglColorRenderbuffer[we])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(ee.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),te(i.TEXTURE_CUBE_MAP,b,Ze);for(let we=0;we<6;we++)if(l&&b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)ke(ee.__webglFramebuffer[we][Re],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Re);else ke(ee.__webglFramebuffer[we],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);M(b,Ze)&&C(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let we=0,Re=ye.length;we<Re;we++){const et=ye[we],Te=n.get(et);t.bindTexture(i.TEXTURE_2D,Te.__webglTexture),te(i.TEXTURE_2D,et,Ze),ke(ee.__webglFramebuffer,L,et,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,0),M(et,Ze)&&C(i.TEXTURE_2D)}t.unbindTexture()}else{let we=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(l?we=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(we,re.__webglTexture),te(we,b,Ze),l&&b.mipmaps&&b.mipmaps.length>0)for(let Re=0;Re<b.mipmaps.length;Re++)ke(ee.__webglFramebuffer[Re],L,b,i.COLOR_ATTACHMENT0,we,Re);else ke(ee.__webglFramebuffer,L,b,i.COLOR_ATTACHMENT0,we,0);M(b,Ze)&&C(we),t.unbindTexture()}L.depthBuffer&&Xe(L)}function ie(L){const b=g(L)||l,ee=L.textures;for(let re=0,ye=ee.length;re<ye;re++){const me=ee[re];if(M(me,b)){const je=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ze=n.get(me).__webglTexture;t.bindTexture(je,Ze),C(je),t.unbindTexture()}}}function Ee(L){if(l&&L.samples>0&&Pe(L)===!1){const b=L.textures,ee=L.width,re=L.height;let ye=i.COLOR_BUFFER_BIT;const me=[],je=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ze=n.get(L),we=b.length>1;if(we)for(let Re=0;Re<b.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ze.__webglFramebuffer);for(let Re=0;Re<b.length;Re++){me.push(i.COLOR_ATTACHMENT0+Re),L.depthBuffer&&me.push(je);const et=Ze.__ignoreDepthValues!==void 0?Ze.__ignoreDepthValues:!1;if(et===!1&&(L.depthBuffer&&(ye|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ye|=i.STENCIL_BUFFER_BIT)),we&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ze.__webglColorRenderbuffer[Re]),et===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[je]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[je])),we){const Te=n.get(b[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,ee,re,0,0,ee,re,ye,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),we)for(let Re=0;Re<b.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Ze.__webglColorRenderbuffer[Re]);const et=n.get(b[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ze.__webglMultisampledFramebuffer)}}function de(L){return Math.min(s.maxSamples,L.samples)}function Pe(L){const b=n.get(L);return l&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ue(L){const b=c.render.frame;p.get(L)!==b&&(p.set(L,b),L.update())}function Ve(L,b){const ee=L.colorSpace,re=L.format,ye=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===wu||ee!==gr&&ee!==cr&&(Dt.getTransfer(ee)===Gt?l===!1?e.has("EXT_sRGB")===!0&&re===hi?(L.format=wu,L.minFilter=Ln,L.generateMipmaps=!1):b=Pm.sRGBToLinear(b):(re!==hi||ye!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),b}function ot(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=oe,this.resetTextureUnits=H,this.setTexture2D=le,this.setTexture2DArray=ne,this.setTexture3D=ce,this.setTextureCube=pe,this.rebindTextures=O,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Pe}function FC(i,e,t){const n=t.isWebGL2;function s(a,c=cr){let l;const h=Dt.getTransfer(c);if(a===dr)return i.UNSIGNED_BYTE;if(a===Em)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Mm)return i.UNSIGNED_SHORT_5_5_5_1;if(a===tM)return i.BYTE;if(a===nM)return i.SHORT;if(a===Wu)return i.UNSIGNED_SHORT;if(a===Sm)return i.INT;if(a===ur)return i.UNSIGNED_INT;if(a===xi)return i.FLOAT;if(a===To)return n?i.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(a===iM)return i.ALPHA;if(a===hi)return i.RGBA;if(a===rM)return i.LUMINANCE;if(a===sM)return i.LUMINANCE_ALPHA;if(a===Br)return i.DEPTH_COMPONENT;if(a===Gs)return i.DEPTH_STENCIL;if(a===wu)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(a===bm)return i.RED;if(a===Tm)return i.RED_INTEGER;if(a===oM)return i.RG;if(a===Am)return i.RG_INTEGER;if(a===wm)return i.RGBA_INTEGER;if(a===Nc||a===Oc||a===Fc||a===Bc)if(h===Gt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Nc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Fc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Bc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Nc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Oc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Fc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Bc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Cd||a===Rd||a===Ld||a===Pd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Cd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Rd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ld)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Pd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Cm)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Id||a===Dd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Id)return h===Gt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Dd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ud||a===Nd||a===Od||a===Fd||a===Bd||a===zd||a===Gd||a===Hd||a===kd||a===Vd||a===Wd||a===Xd||a===qd||a===Yd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Ud)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Nd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Od)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Fd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Bd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===zd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Gd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Hd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===kd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Vd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Wd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Xd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===qd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Yd)return h===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===zc||a===$d||a===Zd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===zc)return h===Gt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===$d)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Zd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===aM||a===Kd||a===Jd||a===jd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===zc)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Kd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Jd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===jd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Fr?n?i.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:s}}class BC extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Va extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zC={type:"move"};class uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,c=null;const l=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const E of e.hand.values()){const v=t.getJointPose(E,n),g=this._getHandJoint(f,E);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}const d=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],_=d.position.distanceTo(p.position),x=.02,S=.005;f.inputState.pinching&&_>x+S?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&_<=x-S&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(zC)))}return l!==null&&(l.visible=s!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Va;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const GC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HC=`
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

}`;class kC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new En,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new mr({extensions:{fragDepth:!0},vertexShader:GC,fragmentShader:HC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Gn(new xl(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class VC extends Vr{constructor(e,t){super();const n=this;let s=null,a=1,c=null,l="local-floor",h=1,f=null,d=null,p=null,_=null,x=null,S=null;const E=new kC,v=t.getContextAttributes();let g=null,I=null;const M=[],C=[],G=new Ce;let F=null;const D=new Qn;D.layers.enable(1),D.viewport=new hn;const k=new Qn;k.layers.enable(2),k.viewport=new hn;const he=[D,k],T=new BC;T.layers.enable(1),T.layers.enable(2);let P=null,be=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let _e=M[te];return _e===void 0&&(_e=new uu,M[te]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(te){let _e=M[te];return _e===void 0&&(_e=new uu,M[te]=_e),_e.getGripSpace()},this.getHand=function(te){let _e=M[te];return _e===void 0&&(_e=new uu,M[te]=_e),_e.getHandSpace()};function ve(te){const _e=C.indexOf(te.inputSource);if(_e===-1)return;const De=M[_e];De!==void 0&&(De.update(te.inputSource,te.frame,f||c),De.dispatchEvent({type:te.type,data:te.inputSource}))}function H(){s.removeEventListener("select",ve),s.removeEventListener("selectstart",ve),s.removeEventListener("selectend",ve),s.removeEventListener("squeeze",ve),s.removeEventListener("squeezestart",ve),s.removeEventListener("squeezeend",ve),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",oe);for(let te=0;te<M.length;te++){const _e=C[te];_e!==null&&(C[te]=null,M[te].disconnect(_e))}P=null,be=null,E.reset(),e.setRenderTarget(g),x=null,_=null,p=null,s=null,I=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(G.width,G.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){l=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(te){f=te},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return p},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",ve),s.addEventListener("selectstart",ve),s.addEventListener("selectend",ve),s.addEventListener("squeeze",ve),s.addEventListener("squeezestart",ve),s.addEventListener("squeezeend",ve),s.addEventListener("end",H),s.addEventListener("inputsourceschange",oe),v.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(G),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const _e={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),I=new zr(x.framebufferWidth,x.framebufferHeight,{format:hi,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let _e=null,De=null,Je=null;v.depth&&(Je=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=v.stencil?Gs:Br,De=v.stencil?Fr:ur);const ke={colorFormat:t.RGBA8,depthFormat:Je,scaleFactor:a};p=new XRWebGLBinding(s,t),_=p.createProjectionLayer(ke),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),I=new zr(_.textureWidth,_.textureHeight,{format:hi,type:dr,depthTexture:new Wm(_.textureWidth,_.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Fe=e.properties.get(I);Fe.__ignoreDepthValues=_.ignoreDepthValues}I.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await s.requestReferenceSpace(l),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function oe(te){for(let _e=0;_e<te.removed.length;_e++){const De=te.removed[_e],Je=C.indexOf(De);Je>=0&&(C[Je]=null,M[Je].disconnect(De))}for(let _e=0;_e<te.added.length;_e++){const De=te.added[_e];let Je=C.indexOf(De);if(Je===-1){for(let Fe=0;Fe<M.length;Fe++)if(Fe>=C.length){C.push(De),Je=Fe;break}else if(C[Fe]===null){C[Fe]=De,Je=Fe;break}if(Je===-1)break}const ke=M[Je];ke&&ke.connect(De)}}const Q=new W,le=new W;function ne(te,_e,De){Q.setFromMatrixPosition(_e.matrixWorld),le.setFromMatrixPosition(De.matrixWorld);const Je=Q.distanceTo(le),ke=_e.projectionMatrix.elements,Fe=De.projectionMatrix.elements,at=ke[14]/(ke[10]-1),Xe=ke[14]/(ke[10]+1),O=(ke[9]+1)/ke[5],Ae=(ke[9]-1)/ke[5],ie=(ke[8]-1)/ke[0],Ee=(Fe[8]+1)/Fe[0],de=at*ie,Pe=at*Ee,Ue=Je/(-ie+Ee),Ve=Ue*-ie;_e.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ve),te.translateZ(Ue),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const ot=at+Ue,L=Xe+Ue,b=de-Ve,ee=Pe+(Je-Ve),re=O*Xe/L*ot,ye=Ae*Xe/L*ot;te.projectionMatrix.makePerspective(b,ee,re,ye,ot,L),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function ce(te,_e){_e===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(_e.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;E.texture!==null&&(te.near=E.depthNear,te.far=E.depthFar),T.near=k.near=D.near=te.near,T.far=k.far=D.far=te.far,(P!==T.near||be!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,be=T.far,D.near=P,D.far=be,k.near=P,k.far=be,D.updateProjectionMatrix(),k.updateProjectionMatrix(),te.updateProjectionMatrix());const _e=te.parent,De=T.cameras;ce(T,_e);for(let Je=0;Je<De.length;Je++)ce(De[Je],_e);De.length===2?ne(T,D,k):T.projectionMatrix.copy(D.projectionMatrix),pe(te,T,_e)};function pe(te,_e,De){De===null?te.matrix.copy(_e.matrixWorld):(te.matrix.copy(De.matrixWorld),te.matrix.invert(),te.matrix.multiply(_e.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(_e.projectionMatrix),te.projectionMatrixInverse.copy(_e.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ao*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(_===null&&x===null))return h},this.setFoveation=function(te){h=te,_!==null&&(_.fixedFoveation=te),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=te)},this.hasDepthSensing=function(){return E.texture!==null};let xe=null;function Be(te,_e){if(d=_e.getViewerPose(f||c),S=_e,d!==null){const De=d.views;x!==null&&(e.setRenderTargetFramebuffer(I,x.framebuffer),e.setRenderTarget(I));let Je=!1;De.length!==T.cameras.length&&(T.cameras.length=0,Je=!0);for(let Fe=0;Fe<De.length;Fe++){const at=De[Fe];let Xe=null;if(x!==null)Xe=x.getViewport(at);else{const Ae=p.getViewSubImage(_,at);Xe=Ae.viewport,Fe===0&&(e.setRenderTargetTextures(I,Ae.colorTexture,_.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(I))}let O=he[Fe];O===void 0&&(O=new Qn,O.layers.enable(Fe),O.viewport=new hn,he[Fe]=O),O.matrix.fromArray(at.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(at.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Fe===0&&(T.matrix.copy(O.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Je===!0&&T.cameras.push(O)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const Fe=p.getDepthInformation(De[0]);Fe&&Fe.isValid&&Fe.texture&&E.init(e,Fe,s.renderState)}}for(let De=0;De<M.length;De++){const Je=C[De],ke=M[De];Je!==null&&ke!==void 0&&ke.update(Je,_e,f||c)}E.render(e,T),xe&&xe(te,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),S=null}const st=new Vm;st.setAnimationLoop(Be),this.setAnimationLoop=function(te){xe=te},this.dispose=function(){}}}const Pr=new Xi,WC=new qt;function XC(i,e){function t(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function n(v,g){g.color.getRGB(v.fogColor.value,zm(i)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function s(v,g,I,M,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(v,g):g.isMeshToonMaterial?(a(v,g),p(v,g)):g.isMeshPhongMaterial?(a(v,g),d(v,g)):g.isMeshStandardMaterial?(a(v,g),_(v,g),g.isMeshPhysicalMaterial&&x(v,g,C)):g.isMeshMatcapMaterial?(a(v,g),S(v,g)):g.isMeshDepthMaterial?a(v,g):g.isMeshDistanceMaterial?(a(v,g),E(v,g)):g.isMeshNormalMaterial?a(v,g):g.isLineBasicMaterial?(c(v,g),g.isLineDashedMaterial&&l(v,g)):g.isPointsMaterial?h(v,g,I,M):g.isSpriteMaterial?f(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,t(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===Pn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,t(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===Pn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,t(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,t(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);const I=e.get(g),M=I.envMap,C=I.envMapRotation;if(M&&(v.envMap.value=M,Pr.copy(C),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),v.envMapRotation.value.setFromMatrix4(WC.makeRotationFromEuler(Pr)),v.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap){v.lightMap.value=g.lightMap;const G=i._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=g.lightMapIntensity*G,t(g.lightMap,v.lightMapTransform)}g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,v.aoMapTransform))}function c(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform))}function l(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function h(v,g,I,M){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*I,v.scale.value=M*.5,g.map&&(v.map.value=g.map,t(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function f(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,t(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,t(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function d(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function p(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function _(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,v.roughnessMapTransform)),e.get(g).envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function x(v,g,I){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Pn&&v.clearcoatNormalScale.value.negate())),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=I.texture,v.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,v.specularIntensityMapTransform))}function S(v,g){g.matcap&&(v.matcap.value=g.matcap)}function E(v,g){const I=e.get(g).light;v.referencePosition.value.setFromMatrixPosition(I.matrixWorld),v.nearDistance.value=I.shadow.camera.near,v.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qC(i,e,t,n){let s={},a={},c=[];const l=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(I,M){const C=M.program;n.uniformBlockBinding(I,C)}function f(I,M){let C=s[I.id];C===void 0&&(S(I),C=d(I),s[I.id]=C,I.addEventListener("dispose",v));const G=M.program;n.updateUBOMapping(I,G);const F=e.render.frame;a[I.id]!==F&&(_(I),a[I.id]=F)}function d(I){const M=p();I.__bindingPointIndex=M;const C=i.createBuffer(),G=I.__size,F=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,G,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,C),C}function p(){for(let I=0;I<l;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(I){const M=s[I.id],C=I.uniforms,G=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let F=0,D=C.length;F<D;F++){const k=Array.isArray(C[F])?C[F]:[C[F]];for(let he=0,T=k.length;he<T;he++){const P=k[he];if(x(P,F,he,G)===!0){const be=P.__offset,ve=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let oe=0;oe<ve.length;oe++){const Q=ve[oe],le=E(Q);typeof Q=="number"||typeof Q=="boolean"?(P.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,be+H,P.__data)):Q.isMatrix3?(P.__data[0]=Q.elements[0],P.__data[1]=Q.elements[1],P.__data[2]=Q.elements[2],P.__data[3]=0,P.__data[4]=Q.elements[3],P.__data[5]=Q.elements[4],P.__data[6]=Q.elements[5],P.__data[7]=0,P.__data[8]=Q.elements[6],P.__data[9]=Q.elements[7],P.__data[10]=Q.elements[8],P.__data[11]=0):(Q.toArray(P.__data,H),H+=le.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,be,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(I,M,C,G){const F=I.value,D=M+"_"+C;if(G[D]===void 0)return typeof F=="number"||typeof F=="boolean"?G[D]=F:G[D]=F.clone(),!0;{const k=G[D];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return G[D]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function S(I){const M=I.uniforms;let C=0;const G=16;for(let D=0,k=M.length;D<k;D++){const he=Array.isArray(M[D])?M[D]:[M[D]];for(let T=0,P=he.length;T<P;T++){const be=he[T],ve=Array.isArray(be.value)?be.value:[be.value];for(let H=0,oe=ve.length;H<oe;H++){const Q=ve[H],le=E(Q),ne=C%G;ne!==0&&G-ne<le.boundary&&(C+=G-ne),be.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),be.__offset=C,C+=le.storage}}}const F=C%G;return F>0&&(C+=G-F),I.__size=C,I.__cache={},this}function E(I){const M={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(M.boundary=4,M.storage=4):I.isVector2?(M.boundary=8,M.storage=8):I.isVector3||I.isColor?(M.boundary=16,M.storage=12):I.isVector4?(M.boundary=16,M.storage=16):I.isMatrix3?(M.boundary=48,M.storage=48):I.isMatrix4?(M.boundary=64,M.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),M}function v(I){const M=I.target;M.removeEventListener("dispose",v);const C=c.indexOf(M.__bindingPointIndex);c.splice(C,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete a[M.id]}function g(){for(const I in s)i.deleteBuffer(s[I]);c=[],s={},a={}}return{bind:h,update:f,dispose:g}}class Km{constructor(e={}){const{canvas:t=UM(),context:n=null,depth:s=!0,stencil:a=!0,alpha:c=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let _;n!==null?_=n.getContextAttributes().alpha:_=c;const x=new Uint32Array(4),S=new Int32Array(4);let E=null,v=null;const g=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_i,this._useLegacyLights=!1,this.toneMapping=fr,this.toneMappingExposure=1;const M=this;let C=!1,G=0,F=0,D=null,k=-1,he=null;const T=new hn,P=new hn;let be=null;const ve=new bt(0);let H=0,oe=t.width,Q=t.height,le=1,ne=null,ce=null;const pe=new hn(0,0,oe,Q),xe=new hn(0,0,oe,Q);let Be=!1;const st=new km;let te=!1,_e=!1,De=null;const Je=new qt,ke=new Ce,Fe=new W,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return D===null?le:1}let O=n;function Ae(R,q){for(let K=0;K<R.length;K++){const j=R[K],Z=t.getContext(j,q);if(Z!==null)return Z}return null}try{const R={alpha:!0,depth:s,stencil:a,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vu}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",B,!1),t.addEventListener("webglcontextcreationerror",Me,!1),O===null){const q=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&q.shift(),O=Ae(q,R),O===null)throw Ae(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ie,Ee,de,Pe,Ue,Ve,ot,L,b,ee,re,ye,me,je,Ze,we,Re,et,Te,Ot,ut,Ke,Ge,qe;function U(){ie=new jA(O),Ee=new XA(O,ie,e),ie.init(Ee),Ke=new FC(O,ie,Ee),de=new NC(O,ie,Ee),Pe=new tw(O),Ue=new SC,Ve=new OC(O,ie,de,Ue,Ee,Ke,Pe),ot=new YA(M),L=new JA(M),b=new ob(O,Ee),Ge=new VA(O,ie,b,Ee),ee=new QA(O,b,Pe,Ge),re=new sw(O,ee,b,Pe),Te=new rw(O,Ee,Ve),we=new qA(Ue),ye=new yC(M,ot,L,ie,Ee,Ge,we),me=new XC(M,Ue),je=new MC,Ze=new RC(ie,Ee),et=new kA(M,ot,L,de,re,_,h),Re=new UC(M,re,Ee),qe=new qC(O,Pe,Ee,de),Ot=new WA(O,ie,Pe,Ee),ut=new ew(O,ie,Pe,Ee),Pe.programs=ye.programs,M.capabilities=Ee,M.extensions=ie,M.properties=Ue,M.renderLists=je,M.shadowMap=Re,M.state=de,M.info=Pe}U();const fe=new VC(M,O);this.xr=fe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=ie.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ie.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(R){R!==void 0&&(le=R,this.setSize(oe,Q,!1))},this.getSize=function(R){return R.set(oe,Q)},this.setSize=function(R,q,K=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=R,Q=q,t.width=Math.floor(R*le),t.height=Math.floor(q*le),K===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(oe*le,Q*le).floor()},this.setDrawingBufferSize=function(R,q,K){oe=R,Q=q,le=K,t.width=Math.floor(R*K),t.height=Math.floor(q*K),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(pe)},this.setViewport=function(R,q,K,j){R.isVector4?pe.set(R.x,R.y,R.z,R.w):pe.set(R,q,K,j),de.viewport(T.copy(pe).multiplyScalar(le).round())},this.getScissor=function(R){return R.copy(xe)},this.setScissor=function(R,q,K,j){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,q,K,j),de.scissor(P.copy(xe).multiplyScalar(le).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(R){de.setScissorTest(Be=R)},this.setOpaqueSort=function(R){ne=R},this.setTransparentSort=function(R){ce=R},this.getClearColor=function(R){return R.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(R=!0,q=!0,K=!0){let j=0;if(R){let Z=!1;if(D!==null){const ze=D.texture.format;Z=ze===wm||ze===Am||ze===Tm}if(Z){const ze=D.texture.type,Ye=ze===dr||ze===ur||ze===Wu||ze===Fr||ze===Em||ze===Mm,tt=et.getClearColor(),nt=et.getClearAlpha(),pt=tt.r,lt=tt.g,ht=tt.b;Ye?(x[0]=pt,x[1]=lt,x[2]=ht,x[3]=nt,O.clearBufferuiv(O.COLOR,0,x)):(S[0]=pt,S[1]=lt,S[2]=ht,S[3]=nt,O.clearBufferiv(O.COLOR,0,S))}else j|=O.COLOR_BUFFER_BIT}q&&(j|=O.DEPTH_BUFFER_BIT),K&&(j|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",B,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),je.dispose(),Ze.dispose(),Ue.dispose(),ot.dispose(),L.dispose(),re.dispose(),Ge.dispose(),qe.dispose(),ye.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Ht),fe.removeEventListener("sessionend",At),De&&(De.dispose(),De=null),Pt.stop()};function We(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const R=Pe.autoReset,q=Re.enabled,K=Re.autoUpdate,j=Re.needsUpdate,Z=Re.type;U(),Pe.autoReset=R,Re.enabled=q,Re.autoUpdate=K,Re.needsUpdate=j,Re.type=Z}function Me(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Y(R){const q=R.target;q.removeEventListener("dispose",Y),Se(q)}function Se(R){Ne(R),Ue.remove(R)}function Ne(R){const q=Ue.get(R).programs;q!==void 0&&(q.forEach(function(K){ye.releaseProgram(K)}),R.isShaderMaterial&&ye.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,K,j,Z,ze){q===null&&(q=at);const Ye=Z.isMesh&&Z.matrixWorld.determinant()<0,tt=bl(R,q,K,j,Z);de.setMaterial(j,Ye);let nt=K.index,pt=1;if(j.wireframe===!0){if(nt=ee.getWireframeAttribute(K),nt===void 0)return;pt=2}const lt=K.drawRange,ht=K.attributes.position;let kt=lt.start*pt,fn=(lt.start+lt.count)*pt;ze!==null&&(kt=Math.max(kt,ze.start*pt),fn=Math.min(fn,(ze.start+ze.count)*pt)),nt!==null?(kt=Math.max(kt,0),fn=Math.min(fn,nt.count)):ht!=null&&(kt=Math.max(kt,0),fn=Math.min(fn,ht.count));const $t=fn-kt;if($t<0||$t===1/0)return;Ge.setup(Z,j,tt,K,nt);let ti,Bt=Ot;if(nt!==null&&(ti=b.get(nt),Bt=ut,Bt.setIndex(ti)),Z.isMesh)j.wireframe===!0?(de.setLineWidth(j.wireframeLinewidth*Xe()),Bt.setMode(O.LINES)):Bt.setMode(O.TRIANGLES);else if(Z.isLine){let dt=j.linewidth;dt===void 0&&(dt=1),de.setLineWidth(dt*Xe()),Z.isLineSegments?Bt.setMode(O.LINES):Z.isLineLoop?Bt.setMode(O.LINE_LOOP):Bt.setMode(O.LINE_STRIP)}else Z.isPoints?Bt.setMode(O.POINTS):Z.isSprite&&Bt.setMode(O.TRIANGLES);if(Z.isBatchedMesh)Bt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)Bt.renderInstances(kt,$t,Z.count);else if(K.isInstancedBufferGeometry){const dt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ys=Math.min(K.instanceCount,dt);Bt.renderInstances(kt,$t,Ys)}else Bt.render(kt,$t)};function gt(R,q,K){R.transparent===!0&&R.side===Vi&&R.forceSinglePass===!1?(R.side=Pn,R.needsUpdate=!0,$r(R,q,K),R.side=pr,R.needsUpdate=!0,$r(R,q,K),R.side=Vi):$r(R,q,K)}this.compile=function(R,q,K=null){K===null&&(K=R),v=Ze.get(K),v.init(),I.push(v),K.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),R!==K&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights(M._useLegacyLights);const j=new Set;return R.traverse(function(Z){const ze=Z.material;if(ze)if(Array.isArray(ze))for(let Ye=0;Ye<ze.length;Ye++){const tt=ze[Ye];gt(tt,K,Z),j.add(tt)}else gt(ze,K,Z),j.add(ze)}),I.pop(),v=null,j},this.compileAsync=function(R,q,K=null){const j=this.compile(R,q,K);return new Promise(Z=>{function ze(){if(j.forEach(function(Ye){Ue.get(Ye).currentProgram.isReady()&&j.delete(Ye)}),j.size===0){Z(R);return}setTimeout(ze,10)}ie.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let wt=null;function Lt(R){wt&&wt(R)}function Ht(){Pt.stop()}function At(){Pt.start()}const Pt=new Vm;Pt.setAnimationLoop(Lt),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(R){wt=R,fe.setAnimationLoop(R),R===null?Pt.stop():Pt.start()},fe.addEventListener("sessionstart",Ht),fe.addEventListener("sessionend",At),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(q),q=fe.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,q,D),v=Ze.get(R,I.length),v.init(),I.push(v),Je.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),st.setFromProjectionMatrix(Je),_e=this.localClippingEnabled,te=we.init(this.clippingPlanes,_e),E=je.get(R,g.length),E.init(),g.push(E),rn(R,q,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(ne,ce),this.info.render.frame++,te===!0&&we.beginShadows();const K=v.state.shadowsArray;if(Re.render(K,R,q),te===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1)&&et.render(E,R),v.setupLights(M._useLegacyLights),q.isArrayCamera){const j=q.cameras;for(let Z=0,ze=j.length;Z<ze;Z++){const Ye=j[Z];ei(E,R,Ye,Ye.viewport)}}else ei(E,R,q);D!==null&&(Ve.updateMultisampleRenderTarget(D),Ve.updateRenderTargetMipmap(D)),R.isScene===!0&&R.onAfterRender(M,R,q),Ge.resetDefaultState(),k=-1,he=null,I.pop(),I.length>0?v=I[I.length-1]:v=null,g.pop(),g.length>0?E=g[g.length-1]:E=null};function rn(R,q,K,j){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||st.intersectsSprite(R)){j&&Fe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Je);const Ye=re.update(R),tt=R.material;tt.visible&&E.push(R,Ye,tt,K,Fe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||st.intersectsObject(R))){const Ye=re.update(R),tt=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Fe.copy(R.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),Fe.copy(Ye.boundingSphere.center)),Fe.applyMatrix4(R.matrixWorld).applyMatrix4(Je)),Array.isArray(tt)){const nt=Ye.groups;for(let pt=0,lt=nt.length;pt<lt;pt++){const ht=nt[pt],kt=tt[ht.materialIndex];kt&&kt.visible&&E.push(R,Ye,kt,K,Fe.z,ht)}}else tt.visible&&E.push(R,Ye,tt,K,Fe.z,null)}}const ze=R.children;for(let Ye=0,tt=ze.length;Ye<tt;Ye++)rn(ze[Ye],q,K,j)}function ei(R,q,K,j){const Z=R.opaque,ze=R.transmissive,Ye=R.transparent;v.setupLightsView(K),te===!0&&we.setGlobalState(M.clippingPlanes,K),ze.length>0&&qr(Z,ze,q,K),j&&de.viewport(T.copy(j)),Z.length>0&&Yr(Z,q,K),ze.length>0&&Yr(ze,q,K),Ye.length>0&&Yr(Ye,q,K),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function qr(R,q,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const ze=Ee.isWebGL2;De===null&&(De=new zr(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")?To:dr,minFilter:Or,samples:ze?4:0})),M.getDrawingBufferSize(ke),ze?De.setSize(ke.x,ke.y):De.setSize(ul(ke.x),ul(ke.y));const Ye=M.getRenderTarget();M.setRenderTarget(De),M.getClearColor(ve),H=M.getClearAlpha(),H<1&&M.setClearColor(16777215,.5),M.clear();const tt=M.toneMapping;M.toneMapping=fr,Yr(R,K,j),Ve.updateMultisampleRenderTarget(De),Ve.updateRenderTargetMipmap(De);let nt=!1;for(let pt=0,lt=q.length;pt<lt;pt++){const ht=q[pt],kt=ht.object,fn=ht.geometry,$t=ht.material,ti=ht.group;if($t.side===Vi&&kt.layers.test(j.layers)){const Bt=$t.side;$t.side=Pn,$t.needsUpdate=!0,Io(kt,K,j,fn,$t,ti),$t.side=Bt,$t.needsUpdate=!0,nt=!0}}nt===!0&&(Ve.updateMultisampleRenderTarget(De),Ve.updateRenderTargetMipmap(De)),M.setRenderTarget(Ye),M.setClearColor(ve,H),M.toneMapping=tt}function Yr(R,q,K){const j=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,ze=R.length;Z<ze;Z++){const Ye=R[Z],tt=Ye.object,nt=Ye.geometry,pt=j===null?Ye.material:j,lt=Ye.group;tt.layers.test(K.layers)&&Io(tt,q,K,nt,pt,lt)}}function Io(R,q,K,j,Z,ze){R.onBeforeRender(M,q,K,j,Z,ze),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(M,q,K,j,R,ze),Z.transparent===!0&&Z.side===Vi&&Z.forceSinglePass===!1?(Z.side=Pn,Z.needsUpdate=!0,M.renderBufferDirect(K,q,j,Z,R,ze),Z.side=pr,Z.needsUpdate=!0,M.renderBufferDirect(K,q,j,Z,R,ze),Z.side=Vi):M.renderBufferDirect(K,q,j,Z,R,ze),R.onAfterRender(M,q,K,j,Z,ze)}function $r(R,q,K){q.isScene!==!0&&(q=at);const j=Ue.get(R),Z=v.state.lights,ze=v.state.shadowsArray,Ye=Z.state.version,tt=ye.getParameters(R,Z.state,ze,q,K),nt=ye.getProgramCacheKey(tt);let pt=j.programs;j.environment=R.isMeshStandardMaterial?q.environment:null,j.fog=q.fog,j.envMap=(R.isMeshStandardMaterial?L:ot).get(R.envMap||j.environment),j.envMapRotation=j.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,pt===void 0&&(R.addEventListener("dispose",Y),pt=new Map,j.programs=pt);let lt=pt.get(nt);if(lt!==void 0){if(j.currentProgram===lt&&j.lightsStateVersion===Ye)return Uo(R,tt),lt}else tt.uniforms=ye.getUniforms(R),R.onBuild(K,tt,M),R.onBeforeCompile(tt,M),lt=ye.acquireProgram(tt,nt),pt.set(nt,lt),j.uniforms=tt.uniforms;const ht=j.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ht.clippingPlanes=we.uniform),Uo(R,tt),j.needsLights=No(R),j.lightsStateVersion=Ye,j.needsLights&&(ht.ambientLightColor.value=Z.state.ambient,ht.lightProbe.value=Z.state.probe,ht.directionalLights.value=Z.state.directional,ht.directionalLightShadows.value=Z.state.directionalShadow,ht.spotLights.value=Z.state.spot,ht.spotLightShadows.value=Z.state.spotShadow,ht.rectAreaLights.value=Z.state.rectArea,ht.ltc_1.value=Z.state.rectAreaLTC1,ht.ltc_2.value=Z.state.rectAreaLTC2,ht.pointLights.value=Z.state.point,ht.pointLightShadows.value=Z.state.pointShadow,ht.hemisphereLights.value=Z.state.hemi,ht.directionalShadowMap.value=Z.state.directionalShadowMap,ht.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ht.spotShadowMap.value=Z.state.spotShadowMap,ht.spotLightMatrix.value=Z.state.spotLightMatrix,ht.spotLightMap.value=Z.state.spotLightMap,ht.pointShadowMap.value=Z.state.pointShadowMap,ht.pointShadowMatrix.value=Z.state.pointShadowMatrix),j.currentProgram=lt,j.uniformsList=null,lt}function Do(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=nl.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Uo(R,q){const K=Ue.get(R);K.outputColorSpace=q.outputColorSpace,K.batching=q.batching,K.instancing=q.instancing,K.instancingColor=q.instancingColor,K.instancingMorph=q.instancingMorph,K.skinning=q.skinning,K.morphTargets=q.morphTargets,K.morphNormals=q.morphNormals,K.morphColors=q.morphColors,K.morphTargetsCount=q.morphTargetsCount,K.numClippingPlanes=q.numClippingPlanes,K.numIntersection=q.numClipIntersection,K.vertexAlphas=q.vertexAlphas,K.vertexTangents=q.vertexTangents,K.toneMapping=q.toneMapping}function bl(R,q,K,j,Z){q.isScene!==!0&&(q=at),Ve.resetTextureUnits();const ze=q.fog,Ye=j.isMeshStandardMaterial?q.environment:null,tt=D===null?M.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:gr,nt=(j.isMeshStandardMaterial?L:ot).get(j.envMap||Ye),pt=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,lt=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ht=!!K.morphAttributes.position,kt=!!K.morphAttributes.normal,fn=!!K.morphAttributes.color;let $t=fr;j.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&($t=M.toneMapping);const ti=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Bt=ti!==void 0?ti.length:0,dt=Ue.get(j),Ys=v.state.lights;if(te===!0&&(_e===!0||R!==he)){const Tn=R===he&&j.id===k;we.setState(j,R,Tn)}let Ut=!1;j.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==Ys.state.version||dt.outputColorSpace!==tt||Z.isBatchedMesh&&dt.batching===!1||!Z.isBatchedMesh&&dt.batching===!0||Z.isInstancedMesh&&dt.instancing===!1||!Z.isInstancedMesh&&dt.instancing===!0||Z.isSkinnedMesh&&dt.skinning===!1||!Z.isSkinnedMesh&&dt.skinning===!0||Z.isInstancedMesh&&dt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&dt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&dt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&dt.instancingMorph===!1&&Z.morphTexture!==null||dt.envMap!==nt||j.fog===!0&&dt.fog!==ze||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==we.numPlanes||dt.numIntersection!==we.numIntersection)||dt.vertexAlphas!==pt||dt.vertexTangents!==lt||dt.morphTargets!==ht||dt.morphNormals!==kt||dt.morphColors!==fn||dt.toneMapping!==$t||Ee.isWebGL2===!0&&dt.morphTargetsCount!==Bt)&&(Ut=!0):(Ut=!0,dt.__version=j.version);let di=dt.currentProgram;Ut===!0&&(di=$r(j,q,Z));let $s=!1,bi=!1,Zs=!1;const jt=di.getUniforms(),Hn=dt.uniforms;if(de.useProgram(di.program)&&($s=!0,bi=!0,Zs=!0),j.id!==k&&(k=j.id,bi=!0),$s||he!==R){jt.setValue(O,"projectionMatrix",R.projectionMatrix),jt.setValue(O,"viewMatrix",R.matrixWorldInverse);const Tn=jt.map.cameraPosition;Tn!==void 0&&Tn.setValue(O,Fe.setFromMatrixPosition(R.matrixWorld)),Ee.logarithmicDepthBuffer&&jt.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&jt.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),he!==R&&(he=R,bi=!0,Zs=!0)}if(Z.isSkinnedMesh){jt.setOptional(O,Z,"bindMatrix"),jt.setOptional(O,Z,"bindMatrixInverse");const Tn=Z.skeleton;Tn&&(Ee.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),jt.setValue(O,"boneTexture",Tn.boneTexture,Ve)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(jt.setOptional(O,Z,"batchingTexture"),jt.setValue(O,"batchingTexture",Z._matricesTexture,Ve));const Zr=K.morphAttributes;if((Zr.position!==void 0||Zr.normal!==void 0||Zr.color!==void 0&&Ee.isWebGL2===!0)&&Te.update(Z,K,di),(bi||dt.receiveShadow!==Z.receiveShadow)&&(dt.receiveShadow=Z.receiveShadow,jt.setValue(O,"receiveShadow",Z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Hn.envMap.value=nt,Hn.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),bi&&(jt.setValue(O,"toneMappingExposure",M.toneMappingExposure),dt.needsLights&&Tl(Hn,Zs),ze&&j.fog===!0&&me.refreshFogUniforms(Hn,ze),me.refreshMaterialUniforms(Hn,j,le,Q,De),nl.upload(O,Do(dt),Hn,Ve)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(nl.upload(O,Do(dt),Hn,Ve),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&jt.setValue(O,"center",Z.center),jt.setValue(O,"modelViewMatrix",Z.modelViewMatrix),jt.setValue(O,"normalMatrix",Z.normalMatrix),jt.setValue(O,"modelMatrix",Z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Tn=j.uniformsGroups;for(let Kr=0,Oo=Tn.length;Kr<Oo;Kr++)if(Ee.isWebGL2){const Jr=Tn[Kr];qe.update(Jr,di),qe.bind(Jr,di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return di}function Tl(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function No(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,q,K){Ue.get(R.texture).__webglTexture=q,Ue.get(R.depthTexture).__webglTexture=K;const j=Ue.get(R);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=K===void 0,j.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,q){const K=Ue.get(R);K.__webglFramebuffer=q,K.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,K=0){D=R,G=q,F=K;let j=!0,Z=null,ze=!1,Ye=!1;if(R){const nt=Ue.get(R);nt.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(O.FRAMEBUFFER,null),j=!1):nt.__webglFramebuffer===void 0?Ve.setupRenderTarget(R):nt.__hasExternalTextures&&Ve.rebindTextures(R,Ue.get(R.texture).__webglTexture,Ue.get(R.depthTexture).__webglTexture);const pt=R.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(Ye=!0);const lt=Ue.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(lt[q])?Z=lt[q][K]:Z=lt[q],ze=!0):Ee.isWebGL2&&R.samples>0&&Ve.useMultisampledRTT(R)===!1?Z=Ue.get(R).__webglMultisampledFramebuffer:Array.isArray(lt)?Z=lt[K]:Z=lt,T.copy(R.viewport),P.copy(R.scissor),be=R.scissorTest}else T.copy(pe).multiplyScalar(le).floor(),P.copy(xe).multiplyScalar(le).floor(),be=Be;if(de.bindFramebuffer(O.FRAMEBUFFER,Z)&&Ee.drawBuffers&&j&&de.drawBuffers(R,Z),de.viewport(T),de.scissor(P),de.setScissorTest(be),ze){const nt=Ue.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt.__webglTexture,K)}else if(Ye){const nt=Ue.get(R.texture),pt=q||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,nt.__webglTexture,K||0,pt)}k=-1},this.readRenderTargetPixels=function(R,q,K,j,Z,ze,Ye){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ye!==void 0&&(tt=tt[Ye]),tt){de.bindFramebuffer(O.FRAMEBUFFER,tt);try{const nt=R.texture,pt=nt.format,lt=nt.type;if(pt!==hi&&Ke.convert(pt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ht=lt===To&&(ie.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&ie.has("EXT_color_buffer_float"));if(lt!==dr&&Ke.convert(lt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(lt===xi&&(Ee.isWebGL2||ie.has("OES_texture_float")||ie.has("WEBGL_color_buffer_float")))&&!ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-j&&K>=0&&K<=R.height-Z&&O.readPixels(q,K,j,Z,Ke.convert(pt),Ke.convert(lt),ze)}finally{const nt=D!==null?Ue.get(D).__webglFramebuffer:null;de.bindFramebuffer(O.FRAMEBUFFER,nt)}}},this.copyFramebufferToTexture=function(R,q,K=0){const j=Math.pow(2,-K),Z=Math.floor(q.image.width*j),ze=Math.floor(q.image.height*j);Ve.setTexture2D(q,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,R.x,R.y,Z,ze),de.unbindTexture()},this.copyTextureToTexture=function(R,q,K,j=0){const Z=q.image.width,ze=q.image.height,Ye=Ke.convert(K.format),tt=Ke.convert(K.type);Ve.setTexture2D(K,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,K.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,K.unpackAlignment),q.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,j,R.x,R.y,Z,ze,Ye,tt,q.image.data):q.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,j,R.x,R.y,q.mipmaps[0].width,q.mipmaps[0].height,Ye,q.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,j,R.x,R.y,Ye,tt,q.image),j===0&&K.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(R,q,K,j,Z=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ze=Math.round(R.max.x-R.min.x),Ye=Math.round(R.max.y-R.min.y),tt=R.max.z-R.min.z+1,nt=Ke.convert(j.format),pt=Ke.convert(j.type);let lt;if(j.isData3DTexture)Ve.setTexture3D(j,0),lt=O.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)Ve.setTexture2DArray(j,0),lt=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment);const ht=O.getParameter(O.UNPACK_ROW_LENGTH),kt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),fn=O.getParameter(O.UNPACK_SKIP_PIXELS),$t=O.getParameter(O.UNPACK_SKIP_ROWS),ti=O.getParameter(O.UNPACK_SKIP_IMAGES),Bt=K.isCompressedTexture?K.mipmaps[Z]:K.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Bt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Bt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,R.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,R.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,R.min.z),K.isDataTexture||K.isData3DTexture?O.texSubImage3D(lt,Z,q.x,q.y,q.z,ze,Ye,tt,nt,pt,Bt.data):j.isCompressedArrayTexture?O.compressedTexSubImage3D(lt,Z,q.x,q.y,q.z,ze,Ye,tt,nt,Bt.data):O.texSubImage3D(lt,Z,q.x,q.y,q.z,ze,Ye,tt,nt,pt,Bt),O.pixelStorei(O.UNPACK_ROW_LENGTH,ht),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,kt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,fn),O.pixelStorei(O.UNPACK_SKIP_ROWS,$t),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ti),Z===0&&j.generateMipmaps&&O.generateMipmap(lt),de.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Ve.setTextureCube(R,0):R.isData3DTexture?Ve.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ve.setTexture2DArray(R,0):Ve.setTexture2D(R,0),de.unbindTexture()},this.resetState=function(){G=0,F=0,D=null,de.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Xu?"display-p3":"srgb",t.unpackColorSpace=Dt.workingColorSpace===_l?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class YC extends Km{}YC.prototype.isWebGL1Renderer=!0;class $C extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ZC extends En{constructor(e=null,t=1,n=1,s,a,c,l,h,f=un,d=un,p,_){super(null,c,l,h,f,d,s,a,p,_),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vp extends fi{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ls=new qt,Wp=new qt,Wa=[],Xp=new Xr,KC=new qt,_o=new Gn,vo=new Lo;class qp extends Gn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vp(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,KC)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),Xp.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Xp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Lo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),vo.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,c=e*a+1;for(let l=0;l<n.length;l++)n[l]=s[c+l]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(n),e.ray.intersectsSphere(vo)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Ls),Wp.multiplyMatrices(n,Ls),_o.matrixWorld=Wp,_o.raycast(e,Wa);for(let c=0,l=Wa.length;c<l;c++){const h=Wa[c];h.instanceId=a,h.object=this,t.push(h)}Wa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vp(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ZC(new Float32Array(s*this.count),s,this.count,bm,xi));const a=this.morphTexture.source.data.data;let c=0;for(let f=0;f<n.length;f++)c+=n[f];const l=this.geometry.morphTargetsRelative?1:1-c,h=s*e;a[h]=l,a.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),a=0;t.push(0);for(let c=1;c<=e;c++)n=this.getPoint(c/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const a=n.length;let c;t?c=t:c=e*n[a-1];let l=0,h=a-1,f;for(;l<=h;)if(s=Math.floor(l+(h-l)/2),f=n[s]-c,f<0)l=s+1;else if(f>0)h=s-1;else{h=s;break}if(s=h,n[s]===c)return s/(a-1);const d=n[s],_=n[s+1]-d,x=(c-d)/_;return(s+x)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const c=this.getPoint(s),l=this.getPoint(a),h=t||(c.isVector2?new Ce:new W);return h.copy(l).sub(c).normalize(),h}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new W,s=[],a=[],c=[],l=new W,h=new qt;for(let x=0;x<=e;x++){const S=x/e;s[x]=this.getTangentAt(S,new W)}a[0]=new W,c[0]=new W;let f=Number.MAX_VALUE;const d=Math.abs(s[0].x),p=Math.abs(s[0].y),_=Math.abs(s[0].z);d<=f&&(f=d,n.set(1,0,0)),p<=f&&(f=p,n.set(0,1,0)),_<=f&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],l),c[0].crossVectors(s[0],a[0]);for(let x=1;x<=e;x++){if(a[x]=a[x-1].clone(),c[x]=c[x-1].clone(),l.crossVectors(s[x-1],s[x]),l.length()>Number.EPSILON){l.normalize();const S=Math.acos(an(s[x-1].dot(s[x]),-1,1));a[x].applyMatrix4(h.makeRotationAxis(l,S))}c[x].crossVectors(s[x],a[x])}if(t===!0){let x=Math.acos(an(a[0].dot(a[e]),-1,1));x/=e,s[0].dot(l.crossVectors(a[0],a[e]))>0&&(x=-x);for(let S=1;S<=e;S++)a[S].applyMatrix4(h.makeRotationAxis(s[S],x*S)),c[S].crossVectors(s[S],a[S])}return{tangents:s,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $u extends Mi{constructor(e=0,t=0,n=1,s=1,a=0,c=Math.PI*2,l=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=c,this.aClockwise=l,this.aRotation=h}getPoint(e,t=new Ce){const n=t,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const c=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(c?a=0:a=s),this.aClockwise===!0&&!c&&(a===s?a=-s:a=a-s);const l=this.aStartAngle+e*a;let h=this.aX+this.xRadius*Math.cos(l),f=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),_=h-this.aX,x=f-this.aY;h=_*d-x*p+this.aX,f=_*p+x*d+this.aY}return n.set(h,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class JC extends $u{constructor(e,t,n,s,a,c){super(e,t,n,n,s,a,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Zu(){let i=0,e=0,t=0,n=0;function s(a,c,l,h){i=a,e=l,t=-3*a+3*c-2*l-h,n=2*a-2*c+l+h}return{initCatmullRom:function(a,c,l,h,f){s(c,l,f*(l-a),f*(h-c))},initNonuniformCatmullRom:function(a,c,l,h,f,d,p){let _=(c-a)/f-(l-a)/(f+d)+(l-c)/d,x=(l-c)/d-(h-c)/(d+p)+(h-l)/p;_*=d,x*=d,s(c,l,_,x)},calc:function(a){const c=a*a,l=c*a;return i+e*a+t*c+n*l}}}const Xa=new W,hu=new Zu,fu=new Zu,du=new Zu;class jC extends Mi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new W){const n=t,s=this.points,a=s.length,c=(a-(this.closed?0:1))*e;let l=Math.floor(c),h=c-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/a)+1)*a:h===0&&l===a-1&&(l=a-2,h=1);let f,d;this.closed||l>0?f=s[(l-1)%a]:(Xa.subVectors(s[0],s[1]).add(s[0]),f=Xa);const p=s[l%a],_=s[(l+1)%a];if(this.closed||l+2<a?d=s[(l+2)%a]:(Xa.subVectors(s[a-1],s[a-2]).add(s[a-1]),d=Xa),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let S=Math.pow(f.distanceToSquared(p),x),E=Math.pow(p.distanceToSquared(_),x),v=Math.pow(_.distanceToSquared(d),x);E<1e-4&&(E=1),S<1e-4&&(S=E),v<1e-4&&(v=E),hu.initNonuniformCatmullRom(f.x,p.x,_.x,d.x,S,E,v),fu.initNonuniformCatmullRom(f.y,p.y,_.y,d.y,S,E,v),du.initNonuniformCatmullRom(f.z,p.z,_.z,d.z,S,E,v)}else this.curveType==="catmullrom"&&(hu.initCatmullRom(f.x,p.x,_.x,d.x,this.tension),fu.initCatmullRom(f.y,p.y,_.y,d.y,this.tension),du.initCatmullRom(f.z,p.z,_.z,d.z,this.tension));return n.set(hu.calc(h),fu.calc(h),du.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new W().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yp(i,e,t,n,s){const a=(n-e)*.5,c=(s-t)*.5,l=i*i,h=i*l;return(2*t-2*n+a+c)*h+(-3*t+3*n-2*a-c)*l+a*i+t}function QC(i,e){const t=1-i;return t*t*e}function e1(i,e){return 2*(1-i)*i*e}function t1(i,e){return i*i*e}function Mo(i,e,t,n){return QC(i,e)+e1(i,t)+t1(i,n)}function n1(i,e){const t=1-i;return t*t*t*e}function i1(i,e){const t=1-i;return 3*t*t*i*e}function r1(i,e){return 3*(1-i)*i*i*e}function s1(i,e){return i*i*i*e}function bo(i,e,t,n,s){return n1(i,e)+i1(i,t)+r1(i,n)+s1(i,s)}class Jm extends Mi{constructor(e=new Ce,t=new Ce,n=new Ce,s=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ce){const n=t,s=this.v0,a=this.v1,c=this.v2,l=this.v3;return n.set(bo(e,s.x,a.x,c.x,l.x),bo(e,s.y,a.y,c.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class o1 extends Mi{constructor(e=new W,t=new W,n=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new W){const n=t,s=this.v0,a=this.v1,c=this.v2,l=this.v3;return n.set(bo(e,s.x,a.x,c.x,l.x),bo(e,s.y,a.y,c.y,l.y),bo(e,s.z,a.z,c.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jm extends Mi{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class a1 extends Mi{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qm extends Mi{constructor(e=new Ce,t=new Ce,n=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ce){const n=t,s=this.v0,a=this.v1,c=this.v2;return n.set(Mo(e,s.x,a.x,c.x),Mo(e,s.y,a.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class l1 extends Mi{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){const n=t,s=this.v0,a=this.v1,c=this.v2;return n.set(Mo(e,s.x,a.x,c.x),Mo(e,s.y,a.y,c.y),Mo(e,s.z,a.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eg extends Mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const n=t,s=this.points,a=(s.length-1)*e,c=Math.floor(a),l=a-c,h=s[c===0?c:c-1],f=s[c],d=s[c>s.length-2?s.length-1:c+1],p=s[c>s.length-3?s.length-1:c+2];return n.set(Yp(l,h.x,f.x,d.x,p.x),Yp(l,h.y,f.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Ce().fromArray(s))}return this}}var Lu=Object.freeze({__proto__:null,ArcCurve:JC,CatmullRomCurve3:jC,CubicBezierCurve:Jm,CubicBezierCurve3:o1,EllipseCurve:$u,LineCurve:jm,LineCurve3:a1,QuadraticBezierCurve:Qm,QuadraticBezierCurve3:l1,SplineCurve:eg});class c1 extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const c=s[a]-n,l=this.curves[a],h=l.getLength(),f=h===0?0:1-c/h;return l.getPointAt(f,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const c=a[s],l=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(l);for(let f=0;f<h.length;f++){const d=h[f];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Lu[s.type]().fromJSON(s))}return this}}class Pu extends c1{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new jm(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const a=new Qm(this.currentPoint.clone(),new Ce(e,t),new Ce(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,a,c){const l=new Jm(this.currentPoint.clone(),new Ce(e,t),new Ce(n,s),new Ce(a,c));return this.curves.push(l),this.currentPoint.set(a,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new eg(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+l,t+h,n,s,a,c),this}absarc(e,t,n,s,a,c){return this.absellipse(e,t,n,n,s,a,c),this}ellipse(e,t,n,s,a,c,l,h){const f=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+f,t+d,n,s,a,c,l,h),this}absellipse(e,t,n,s,a,c,l,h){const f=new $u(e,t,n,s,a,c,l,h);if(this.curves.length>0){const p=f.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(f);const d=f.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ku extends Ei{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],c=[],l=[],h=[],f=new W,d=new Ce;c.push(0,0,0),l.push(0,0,1),h.push(.5,.5);for(let p=0,_=3;p<=t;p++,_+=3){const x=n+p/t*s;f.x=e*Math.cos(x),f.y=e*Math.sin(x),c.push(f.x,f.y,f.z),l.push(0,0,1),d.x=(c[_]/e+1)/2,d.y=(c[_+1]/e+1)/2,h.push(d.x,d.y)}for(let p=1;p<=t;p++)a.push(p,p+1,0);this.setIndex(a),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(l,3)),this.setAttribute("uv",new bn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ku(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class il extends Pu{constructor(e){super(e),this.uuid=Wr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Pu().fromJSON(s))}return this}}const u1={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let a=tg(i,0,s,t,!0);const c=[];if(!a||a.next===a.prev)return c;let l,h,f,d,p,_,x;if(n&&(a=m1(i,e,a,t)),i.length>80*t){l=f=i[0],h=d=i[1];for(let S=t;S<s;S+=t)p=i[S],_=i[S+1],p<l&&(l=p),_<h&&(h=_),p>f&&(f=p),_>d&&(d=_);x=Math.max(f-l,d-h),x=x!==0?32767/x:0}return wo(a,c,t,l,h,x,0),c}};function tg(i,e,t,n,s){let a,c;if(s===A1(i,e,t,n)>0)for(a=e;a<t;a+=n)c=$p(a,i[a],i[a+1],c);else for(a=t-n;a>=e;a-=n)c=$p(a,i[a],i[a+1],c);return c&&Sl(c,c.next)&&(Ro(c),c=c.next),c}function Hr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Sl(t,t.next)||Xt(t.prev,t,t.next)===0)){if(Ro(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wo(i,e,t,n,s,a,c){if(!i)return;!c&&a&&y1(i,n,s,a);let l=i,h,f;for(;i.prev!==i.next;){if(h=i.prev,f=i.next,a?f1(i,n,s,a):h1(i)){e.push(h.i/t|0),e.push(i.i/t|0),e.push(f.i/t|0),Ro(i),i=f.next,l=f.next;continue}if(i=f,i===l){c?c===1?(i=d1(Hr(i),e,t),wo(i,e,t,n,s,a,2)):c===2&&p1(i,e,t,n,s,a):wo(Hr(i),e,t,n,s,a,1);break}}}function h1(i){const e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;const s=e.x,a=t.x,c=n.x,l=e.y,h=t.y,f=n.y,d=s<a?s<c?s:c:a<c?a:c,p=l<h?l<f?l:f:h<f?h:f,_=s>a?s>c?s:c:a>c?a:c,x=l>h?l>f?l:f:h>f?h:f;let S=n.next;for(;S!==e;){if(S.x>=d&&S.x<=_&&S.y>=p&&S.y<=x&&Us(s,l,a,h,c,f,S.x,S.y)&&Xt(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function f1(i,e,t,n){const s=i.prev,a=i,c=i.next;if(Xt(s,a,c)>=0)return!1;const l=s.x,h=a.x,f=c.x,d=s.y,p=a.y,_=c.y,x=l<h?l<f?l:f:h<f?h:f,S=d<p?d<_?d:_:p<_?p:_,E=l>h?l>f?l:f:h>f?h:f,v=d>p?d>_?d:_:p>_?p:_,g=Iu(x,S,e,t,n),I=Iu(E,v,e,t,n);let M=i.prevZ,C=i.nextZ;for(;M&&M.z>=g&&C&&C.z<=I;){if(M.x>=x&&M.x<=E&&M.y>=S&&M.y<=v&&M!==s&&M!==c&&Us(l,d,h,p,f,_,M.x,M.y)&&Xt(M.prev,M,M.next)>=0||(M=M.prevZ,C.x>=x&&C.x<=E&&C.y>=S&&C.y<=v&&C!==s&&C!==c&&Us(l,d,h,p,f,_,C.x,C.y)&&Xt(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;M&&M.z>=g;){if(M.x>=x&&M.x<=E&&M.y>=S&&M.y<=v&&M!==s&&M!==c&&Us(l,d,h,p,f,_,M.x,M.y)&&Xt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;C&&C.z<=I;){if(C.x>=x&&C.x<=E&&C.y>=S&&C.y<=v&&C!==s&&C!==c&&Us(l,d,h,p,f,_,C.x,C.y)&&Xt(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function d1(i,e,t){let n=i;do{const s=n.prev,a=n.next.next;!Sl(s,a)&&ng(s,n,n.next,a)&&Co(s,a)&&Co(a,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),Ro(n),Ro(n.next),n=i=a),n=n.next}while(n!==i);return Hr(n)}function p1(i,e,t,n,s,a){let c=i;do{let l=c.next.next;for(;l!==c.prev;){if(c.i!==l.i&&M1(c,l)){let h=ig(c,l);c=Hr(c,c.next),h=Hr(h,h.next),wo(c,e,t,n,s,a,0),wo(h,e,t,n,s,a,0);return}l=l.next}c=c.next}while(c!==i)}function m1(i,e,t,n){const s=[];let a,c,l,h,f;for(a=0,c=e.length;a<c;a++)l=e[a]*n,h=a<c-1?e[a+1]*n:i.length,f=tg(i,l,h,n,!1),f===f.next&&(f.steiner=!0),s.push(E1(f));for(s.sort(g1),a=0;a<s.length;a++)t=_1(s[a],t);return t}function g1(i,e){return i.x-e.x}function _1(i,e){const t=v1(i,e);if(!t)return e;const n=ig(t,i);return Hr(n,n.next),Hr(t,t.next)}function v1(i,e){let t=e,n=-1/0,s;const a=i.x,c=i.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const _=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(_<=a&&_>n&&(n=_,s=t.x<t.next.x?t:t.next,_===a))return s}t=t.next}while(t!==e);if(!s)return null;const l=s,h=s.x,f=s.y;let d=1/0,p;t=s;do a>=t.x&&t.x>=h&&a!==t.x&&Us(c<f?a:n,c,h,f,c<f?n:a,c,t.x,t.y)&&(p=Math.abs(c-t.y)/(a-t.x),Co(t,i)&&(p<d||p===d&&(t.x>s.x||t.x===s.x&&x1(s,t)))&&(s=t,d=p)),t=t.next;while(t!==l);return s}function x1(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function y1(i,e,t,n){let s=i;do s.z===0&&(s.z=Iu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,S1(s)}function S1(i){let e,t,n,s,a,c,l,h,f=1;do{for(t=i,i=null,a=null,c=0;t;){for(c++,n=t,l=0,e=0;e<f&&(l++,n=n.nextZ,!!n);e++);for(h=f;l>0||h>0&&n;)l!==0&&(h===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,l--):(s=n,n=n.nextZ,h--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;t=n}a.nextZ=null,f*=2}while(c>1);return i}function Iu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function E1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Us(i,e,t,n,s,a,c,l){return(s-c)*(e-l)>=(i-c)*(a-l)&&(i-c)*(n-l)>=(t-c)*(e-l)&&(t-c)*(a-l)>=(s-c)*(n-l)}function M1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!b1(i,e)&&(Co(i,e)&&Co(e,i)&&T1(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||Sl(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Sl(i,e){return i.x===e.x&&i.y===e.y}function ng(i,e,t,n){const s=Ya(Xt(i,e,t)),a=Ya(Xt(i,e,n)),c=Ya(Xt(t,n,i)),l=Ya(Xt(t,n,e));return!!(s!==a&&c!==l||s===0&&qa(i,t,e)||a===0&&qa(i,n,e)||c===0&&qa(t,i,n)||l===0&&qa(t,e,n))}function qa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ya(i){return i>0?1:i<0?-1:0}function b1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ng(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Co(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function T1(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ig(i,e){const t=new Du(i.i,i.x,i.y),n=new Du(e.i,e.x,e.y),s=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function $p(i,e,t,n){const s=new Du(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ro(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Du(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function A1(i,e,t,n){let s=0;for(let a=e,c=t-n;a<t;a+=n)s+=(i[c]-i[a])*(i[a+1]+i[c+1]),c=a;return s}class Fs{static area(e){const t=e.length;let n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return Fs.area(e)<0}static triangulateShape(e,t){const n=[],s=[],a=[];Zp(e),Kp(n,e);let c=e.length;t.forEach(Zp);for(let h=0;h<t.length;h++)s.push(c),c+=t[h].length,Kp(n,t[h]);const l=u1.triangulate(n,s);for(let h=0;h<l.length;h+=3)a.push(l.slice(h,h+3));return a}}function Zp(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Kp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ju extends Ei{constructor(e=new il([new Ce(.5,.5),new Ce(-.5,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],a=[];for(let l=0,h=e.length;l<h;l++){const f=e[l];c(f)}this.setAttribute("position",new bn(s,3)),this.setAttribute("uv",new bn(a,2)),this.computeVertexNormals();function c(l){const h=[],f=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let _=t.bevelEnabled!==void 0?t.bevelEnabled:!0,x=t.bevelThickness!==void 0?t.bevelThickness:.2,S=t.bevelSize!==void 0?t.bevelSize:x-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,I=t.UVGenerator!==void 0?t.UVGenerator:w1;let M,C=!1,G,F,D,k;g&&(M=g.getSpacedPoints(d),C=!0,_=!1,G=g.computeFrenetFrames(d,!1),F=new W,D=new W,k=new W),_||(v=0,x=0,S=0,E=0);const he=l.extractPoints(f);let T=he.shape;const P=he.holes;if(!Fs.isClockWise(T)){T=T.reverse();for(let O=0,Ae=P.length;O<Ae;O++){const ie=P[O];Fs.isClockWise(ie)&&(P[O]=ie.reverse())}}const ve=Fs.triangulateShape(T,P),H=T;for(let O=0,Ae=P.length;O<Ae;O++){const ie=P[O];T=T.concat(ie)}function oe(O,Ae,ie){return Ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(Ae,ie)}const Q=T.length,le=ve.length;function ne(O,Ae,ie){let Ee,de,Pe;const Ue=O.x-Ae.x,Ve=O.y-Ae.y,ot=ie.x-O.x,L=ie.y-O.y,b=Ue*Ue+Ve*Ve,ee=Ue*L-Ve*ot;if(Math.abs(ee)>Number.EPSILON){const re=Math.sqrt(b),ye=Math.sqrt(ot*ot+L*L),me=Ae.x-Ve/re,je=Ae.y+Ue/re,Ze=ie.x-L/ye,we=ie.y+ot/ye,Re=((Ze-me)*L-(we-je)*ot)/(Ue*L-Ve*ot);Ee=me+Ue*Re-O.x,de=je+Ve*Re-O.y;const et=Ee*Ee+de*de;if(et<=2)return new Ce(Ee,de);Pe=Math.sqrt(et/2)}else{let re=!1;Ue>Number.EPSILON?ot>Number.EPSILON&&(re=!0):Ue<-Number.EPSILON?ot<-Number.EPSILON&&(re=!0):Math.sign(Ve)===Math.sign(L)&&(re=!0),re?(Ee=-Ve,de=Ue,Pe=Math.sqrt(b)):(Ee=Ue,de=Ve,Pe=Math.sqrt(b/2))}return new Ce(Ee/Pe,de/Pe)}const ce=[];for(let O=0,Ae=H.length,ie=Ae-1,Ee=O+1;O<Ae;O++,ie++,Ee++)ie===Ae&&(ie=0),Ee===Ae&&(Ee=0),ce[O]=ne(H[O],H[ie],H[Ee]);const pe=[];let xe,Be=ce.concat();for(let O=0,Ae=P.length;O<Ae;O++){const ie=P[O];xe=[];for(let Ee=0,de=ie.length,Pe=de-1,Ue=Ee+1;Ee<de;Ee++,Pe++,Ue++)Pe===de&&(Pe=0),Ue===de&&(Ue=0),xe[Ee]=ne(ie[Ee],ie[Pe],ie[Ue]);pe.push(xe),Be=Be.concat(xe)}for(let O=0;O<v;O++){const Ae=O/v,ie=x*Math.cos(Ae*Math.PI/2),Ee=S*Math.sin(Ae*Math.PI/2)+E;for(let de=0,Pe=H.length;de<Pe;de++){const Ue=oe(H[de],ce[de],Ee);Je(Ue.x,Ue.y,-ie)}for(let de=0,Pe=P.length;de<Pe;de++){const Ue=P[de];xe=pe[de];for(let Ve=0,ot=Ue.length;Ve<ot;Ve++){const L=oe(Ue[Ve],xe[Ve],Ee);Je(L.x,L.y,-ie)}}}const st=S+E;for(let O=0;O<Q;O++){const Ae=_?oe(T[O],Be[O],st):T[O];C?(D.copy(G.normals[0]).multiplyScalar(Ae.x),F.copy(G.binormals[0]).multiplyScalar(Ae.y),k.copy(M[0]).add(D).add(F),Je(k.x,k.y,k.z)):Je(Ae.x,Ae.y,0)}for(let O=1;O<=d;O++)for(let Ae=0;Ae<Q;Ae++){const ie=_?oe(T[Ae],Be[Ae],st):T[Ae];C?(D.copy(G.normals[O]).multiplyScalar(ie.x),F.copy(G.binormals[O]).multiplyScalar(ie.y),k.copy(M[O]).add(D).add(F),Je(k.x,k.y,k.z)):Je(ie.x,ie.y,p/d*O)}for(let O=v-1;O>=0;O--){const Ae=O/v,ie=x*Math.cos(Ae*Math.PI/2),Ee=S*Math.sin(Ae*Math.PI/2)+E;for(let de=0,Pe=H.length;de<Pe;de++){const Ue=oe(H[de],ce[de],Ee);Je(Ue.x,Ue.y,p+ie)}for(let de=0,Pe=P.length;de<Pe;de++){const Ue=P[de];xe=pe[de];for(let Ve=0,ot=Ue.length;Ve<ot;Ve++){const L=oe(Ue[Ve],xe[Ve],Ee);C?Je(L.x,L.y+M[d-1].y,M[d-1].x+ie):Je(L.x,L.y,p+ie)}}}te(),_e();function te(){const O=s.length/3;if(_){let Ae=0,ie=Q*Ae;for(let Ee=0;Ee<le;Ee++){const de=ve[Ee];ke(de[2]+ie,de[1]+ie,de[0]+ie)}Ae=d+v*2,ie=Q*Ae;for(let Ee=0;Ee<le;Ee++){const de=ve[Ee];ke(de[0]+ie,de[1]+ie,de[2]+ie)}}else{for(let Ae=0;Ae<le;Ae++){const ie=ve[Ae];ke(ie[2],ie[1],ie[0])}for(let Ae=0;Ae<le;Ae++){const ie=ve[Ae];ke(ie[0]+Q*d,ie[1]+Q*d,ie[2]+Q*d)}}n.addGroup(O,s.length/3-O,0)}function _e(){const O=s.length/3;let Ae=0;De(H,Ae),Ae+=H.length;for(let ie=0,Ee=P.length;ie<Ee;ie++){const de=P[ie];De(de,Ae),Ae+=de.length}n.addGroup(O,s.length/3-O,1)}function De(O,Ae){let ie=O.length;for(;--ie>=0;){const Ee=ie;let de=ie-1;de<0&&(de=O.length-1);for(let Pe=0,Ue=d+v*2;Pe<Ue;Pe++){const Ve=Q*Pe,ot=Q*(Pe+1),L=Ae+Ee+Ve,b=Ae+de+Ve,ee=Ae+de+ot,re=Ae+Ee+ot;Fe(L,b,ee,re)}}}function Je(O,Ae,ie){h.push(O),h.push(Ae),h.push(ie)}function ke(O,Ae,ie){at(O),at(Ae),at(ie);const Ee=s.length/3,de=I.generateTopUV(n,s,Ee-3,Ee-2,Ee-1);Xe(de[0]),Xe(de[1]),Xe(de[2])}function Fe(O,Ae,ie,Ee){at(O),at(Ae),at(Ee),at(Ae),at(ie),at(Ee);const de=s.length/3,Pe=I.generateSideWallUV(n,s,de-6,de-3,de-2,de-1);Xe(Pe[0]),Xe(Pe[1]),Xe(Pe[3]),Xe(Pe[1]),Xe(Pe[2]),Xe(Pe[3])}function at(O){s.push(h[O*3+0]),s.push(h[O*3+1]),s.push(h[O*3+2])}function Xe(O){a.push(O.x),a.push(O.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return C1(t,n,e)}static fromJSON(e,t){const n=[];for(let a=0,c=e.shapes.length;a<c;a++){const l=t[e.shapes[a]];n.push(l)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Lu[s.type]().fromJSON(s)),new Ju(n,e.options)}}const w1={generateTopUV:function(i,e,t,n,s){const a=e[t*3],c=e[t*3+1],l=e[n*3],h=e[n*3+1],f=e[s*3],d=e[s*3+1];return[new Ce(a,c),new Ce(l,h),new Ce(f,d)]},generateSideWallUV:function(i,e,t,n,s,a){const c=e[t*3],l=e[t*3+1],h=e[t*3+2],f=e[n*3],d=e[n*3+1],p=e[n*3+2],_=e[s*3],x=e[s*3+1],S=e[s*3+2],E=e[a*3],v=e[a*3+1],g=e[a*3+2];return Math.abs(l-d)<Math.abs(c-f)?[new Ce(c,1-h),new Ce(f,1-p),new Ce(_,1-S),new Ce(E,1-g)]:[new Ce(l,1-h),new Ce(d,1-p),new Ce(x,1-S),new Ce(v,1-g)]}};function C1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const a=i[n];t.shapes.push(a.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ju extends Ei{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,c=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:c,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const h=Math.min(c+l,Math.PI);let f=0;const d=[],p=new W,_=new W,x=[],S=[],E=[],v=[];for(let g=0;g<=n;g++){const I=[],M=g/n;let C=0;g===0&&c===0?C=.5/t:g===n&&h===Math.PI&&(C=-.5/t);for(let G=0;G<=t;G++){const F=G/t;p.x=-e*Math.cos(s+F*a)*Math.sin(c+M*l),p.y=e*Math.cos(c+M*l),p.z=e*Math.sin(s+F*a)*Math.sin(c+M*l),S.push(p.x,p.y,p.z),_.copy(p).normalize(),E.push(_.x,_.y,_.z),v.push(F+C,1-M),I.push(f++)}d.push(I)}for(let g=0;g<n;g++)for(let I=0;I<t;I++){const M=d[g][I+1],C=d[g][I],G=d[g+1][I],F=d[g+1][I+1];(g!==0||c>0)&&x.push(M,C,F),(g!==n-1||h<Math.PI)&&x.push(C,G,F)}this.setIndex(x),this.setAttribute("position",new bn(S,3)),this.setAttribute("normal",new bn(E,3)),this.setAttribute("uv",new bn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Jp={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class R1{constructor(e,t,n){const s=this;let a=!1,c=0,l=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){l++,a===!1&&s.onStart!==void 0&&s.onStart(d,c,l),a=!0},this.itemEnd=function(d){c++,s.onProgress!==void 0&&s.onProgress(d,c,l),c===l&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,p){return f.push(d,p),this},this.removeHandler=function(d){const p=f.indexOf(d);return p!==-1&&f.splice(p,2),this},this.getHandler=function(d){for(let p=0,_=f.length;p<_;p+=2){const x=f[p],S=f[p+1];if(x.global&&(x.lastIndex=0),x.test(d))return S}return null}}}const L1=new R1;class Qu{constructor(e){this.manager=e!==void 0?e:L1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qu.DEFAULT_MATERIAL_NAME="__DEFAULT";const zi={};class P1 extends Error{constructor(e,t){super(e),this.response=t}}class I1 extends Qu{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Jp.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(zi[e]!==void 0){zi[e].push({onLoad:t,onProgress:n,onError:s});return}zi[e]=[],zi[e].push({onLoad:t,onProgress:n,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,h=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const d=zi[e],p=f.body.getReader(),_=f.headers.get("Content-Length")||f.headers.get("X-File-Size"),x=_?parseInt(_):0,S=x!==0;let E=0;const v=new ReadableStream({start(g){I();function I(){p.read().then(({done:M,value:C})=>{if(M)g.close();else{E+=C.byteLength;const G=new ProgressEvent("progress",{lengthComputable:S,loaded:E,total:x});for(let F=0,D=d.length;F<D;F++){const k=d[F];k.onProgress&&k.onProgress(G)}g.enqueue(C),I()}})}}});return new Response(v)}else throw new P1(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(h){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(d=>new DOMParser().parseFromString(d,l));case"json":return f.json();default:if(l===void 0)return f.text();{const p=/charset="?([^;"\s]*)"?/i.exec(l),_=p&&p[1]?p[1].toLowerCase():void 0,x=new TextDecoder(_);return f.arrayBuffer().then(S=>x.decode(S))}}}).then(f=>{Jp.add(e,f);const d=zi[e];delete zi[e];for(let p=0,_=d.length;p<_;p++){const x=d[p];x.onLoad&&x.onLoad(f)}}).catch(f=>{const d=zi[e];if(d===void 0)throw this.manager.itemError(e),f;delete zi[e];for(let p=0,_=d.length;p<_;p++){const x=d[p];x.onError&&x.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class jp{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(an(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class D1{constructor(){this.type="ShapePath",this.color=new bt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Pu,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,a,c){return this.currentPath.bezierCurveTo(e,t,n,s,a,c),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const I=[];for(let M=0,C=g.length;M<C;M++){const G=g[M],F=new il;F.curves=G.curves,I.push(F)}return I}function n(g,I){const M=I.length;let C=!1;for(let G=M-1,F=0;F<M;G=F++){let D=I[G],k=I[F],he=k.x-D.x,T=k.y-D.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(D=I[F],he=-he,k=I[G],T=-T),g.y<D.y||g.y>k.y)continue;if(g.y===D.y){if(g.x===D.x)return!0}else{const P=T*(g.x-D.x)-he*(g.y-D.y);if(P===0)return!0;if(P<0)continue;C=!C}}else{if(g.y!==D.y)continue;if(k.x<=g.x&&g.x<=D.x||D.x<=g.x&&g.x<=k.x)return!0}}return C}const s=Fs.isClockWise,a=this.subPaths;if(a.length===0)return[];let c,l,h;const f=[];if(a.length===1)return l=a[0],h=new il,h.curves=l.curves,f.push(h),f;let d=!s(a[0].getPoints());d=e?!d:d;const p=[],_=[];let x=[],S=0,E;_[S]=void 0,x[S]=[];for(let g=0,I=a.length;g<I;g++)l=a[g],E=l.getPoints(),c=s(E),c=e?!c:c,c?(!d&&_[S]&&S++,_[S]={s:new il,p:E},_[S].s.curves=l.curves,d&&S++,x[S]=[]):x[S].push({h:l,p:E[0]});if(!_[0])return t(a);if(_.length>1){let g=!1,I=0;for(let M=0,C=_.length;M<C;M++)p[M]=[];for(let M=0,C=_.length;M<C;M++){const G=x[M];for(let F=0;F<G.length;F++){const D=G[F];let k=!0;for(let he=0;he<_.length;he++)n(D.p,_[he].p)&&(M!==he&&I++,k?(k=!1,p[he].push(D)):g=!0);k&&p[M].push(D)}}I>0&&g===!1&&(x=p)}let v;for(let g=0,I=_.length;g<I;g++){h=_[g].s,f.push(h),v=x[g];for(let M=0,C=v.length;M<C;M++)h.holes.push(v[M].h)}return f}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vu);const Qp={type:"change"},pu={type:"start"},em={type:"end"},$a=new Um,tm=new lr,U1=Math.cos(70*DM.DEG2RAD);class N1 extends Vr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fs.ROTATE,MIDDLE:fs.DOLLY,RIGHT:fs.PAN},this.touches={ONE:ds.ROTATE,TWO:ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",Ze),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ze),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Qp),n.update(),a=s.NONE},this.update=function(){const U=new W,fe=new Gr().setFromUnitVectors(e.up,new W(0,1,0)),We=fe.clone().invert(),B=new W,Me=new Gr,Y=new W,Se=2*Math.PI;return function(gt=null){const wt=n.object.position;U.copy(wt).sub(n.target),U.applyQuaternion(fe),l.setFromVector3(U),n.autoRotate&&a===s.NONE&&be(T(gt)),n.enableDamping?(l.theta+=h.theta*n.dampingFactor,l.phi+=h.phi*n.dampingFactor):(l.theta+=h.theta,l.phi+=h.phi);let Lt=n.minAzimuthAngle,Ht=n.maxAzimuthAngle;isFinite(Lt)&&isFinite(Ht)&&(Lt<-Math.PI?Lt+=Se:Lt>Math.PI&&(Lt-=Se),Ht<-Math.PI?Ht+=Se:Ht>Math.PI&&(Ht-=Se),Lt<=Ht?l.theta=Math.max(Lt,Math.min(Ht,l.theta)):l.theta=l.theta>(Lt+Ht)/2?Math.max(Lt,l.theta):Math.min(Ht,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let At=!1;if(n.zoomToCursor&&F||n.object.isOrthographicCamera)l.radius=pe(l.radius);else{const Pt=l.radius;l.radius=pe(l.radius*f),At=Pt!=l.radius}if(U.setFromSpherical(l),U.applyQuaternion(We),wt.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),d.set(0,0,0)),n.zoomToCursor&&F){let Pt=null;if(n.object.isPerspectiveCamera){const rn=U.length();Pt=pe(rn*f);const ei=rn-Pt;n.object.position.addScaledVector(C,ei),n.object.updateMatrixWorld(),At=!!ei}else if(n.object.isOrthographicCamera){const rn=new W(G.x,G.y,0);rn.unproject(n.object);const ei=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),At=ei!==n.object.zoom;const qr=new W(G.x,G.y,0);qr.unproject(n.object),n.object.position.sub(qr).add(rn),n.object.updateMatrixWorld(),Pt=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Pt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Pt).add(n.object.position):($a.origin.copy(n.object.position),$a.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot($a.direction))<U1?e.lookAt(n.target):(tm.setFromNormalAndCoplanarPoint(n.object.up,n.target),$a.intersectPlane(tm,n.target))))}else if(n.object.isOrthographicCamera){const Pt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),Pt!==n.object.zoom&&(n.object.updateProjectionMatrix(),At=!0)}return f=1,F=!1,At||B.distanceToSquared(n.object.position)>c||8*(1-Me.dot(n.object.quaternion))>c||Y.distanceToSquared(n.target)>c?(n.dispatchEvent(Qp),B.copy(n.object.position),Me.copy(n.object.quaternion),Y.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",et),n.domElement.removeEventListener("pointerdown",Ve),n.domElement.removeEventListener("pointercancel",L),n.domElement.removeEventListener("wheel",re),n.domElement.removeEventListener("pointermove",ot),n.domElement.removeEventListener("pointerup",L),n.domElement.getRootNode().removeEventListener("keydown",me,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ze),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=s.NONE;const c=1e-6,l=new jp,h=new jp;let f=1;const d=new W,p=new Ce,_=new Ce,x=new Ce,S=new Ce,E=new Ce,v=new Ce,g=new Ce,I=new Ce,M=new Ce,C=new W,G=new Ce;let F=!1;const D=[],k={};let he=!1;function T(U){return U!==null?2*Math.PI/60*n.autoRotateSpeed*U:2*Math.PI/60/60*n.autoRotateSpeed}function P(U){const fe=Math.abs(U*.01);return Math.pow(.95,n.zoomSpeed*fe)}function be(U){h.theta-=U}function ve(U){h.phi-=U}const H=function(){const U=new W;return function(We,B){U.setFromMatrixColumn(B,0),U.multiplyScalar(-We),d.add(U)}}(),oe=function(){const U=new W;return function(We,B){n.screenSpacePanning===!0?U.setFromMatrixColumn(B,1):(U.setFromMatrixColumn(B,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(We),d.add(U)}}(),Q=function(){const U=new W;return function(We,B){const Me=n.domElement;if(n.object.isPerspectiveCamera){const Y=n.object.position;U.copy(Y).sub(n.target);let Se=U.length();Se*=Math.tan(n.object.fov/2*Math.PI/180),H(2*We*Se/Me.clientHeight,n.object.matrix),oe(2*B*Se/Me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(We*(n.object.right-n.object.left)/n.object.zoom/Me.clientWidth,n.object.matrix),oe(B*(n.object.top-n.object.bottom)/n.object.zoom/Me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function le(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ce(U,fe){if(!n.zoomToCursor)return;F=!0;const We=n.domElement.getBoundingClientRect(),B=U-We.left,Me=fe-We.top,Y=We.width,Se=We.height;G.x=B/Y*2-1,G.y=-(Me/Se)*2+1,C.set(G.x,G.y,1).unproject(n.object).sub(n.object.position).normalize()}function pe(U){return Math.max(n.minDistance,Math.min(n.maxDistance,U))}function xe(U){p.set(U.clientX,U.clientY)}function Be(U){ce(U.clientX,U.clientX),g.set(U.clientX,U.clientY)}function st(U){S.set(U.clientX,U.clientY)}function te(U){_.set(U.clientX,U.clientY),x.subVectors(_,p).multiplyScalar(n.rotateSpeed);const fe=n.domElement;be(2*Math.PI*x.x/fe.clientHeight),ve(2*Math.PI*x.y/fe.clientHeight),p.copy(_),n.update()}function _e(U){I.set(U.clientX,U.clientY),M.subVectors(I,g),M.y>0?le(P(M.y)):M.y<0&&ne(P(M.y)),g.copy(I),n.update()}function De(U){E.set(U.clientX,U.clientY),v.subVectors(E,S).multiplyScalar(n.panSpeed),Q(v.x,v.y),S.copy(E),n.update()}function Je(U){ce(U.clientX,U.clientY),U.deltaY<0?ne(P(U.deltaY)):U.deltaY>0&&le(P(U.deltaY)),n.update()}function ke(U){let fe=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?ve(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(0,n.keyPanSpeed),fe=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?ve(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(0,-n.keyPanSpeed),fe=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?be(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(n.keyPanSpeed,0),fe=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?be(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(-n.keyPanSpeed,0),fe=!0;break}fe&&(U.preventDefault(),n.update())}function Fe(U){if(D.length===1)p.set(U.pageX,U.pageY);else{const fe=Ge(U),We=.5*(U.pageX+fe.x),B=.5*(U.pageY+fe.y);p.set(We,B)}}function at(U){if(D.length===1)S.set(U.pageX,U.pageY);else{const fe=Ge(U),We=.5*(U.pageX+fe.x),B=.5*(U.pageY+fe.y);S.set(We,B)}}function Xe(U){const fe=Ge(U),We=U.pageX-fe.x,B=U.pageY-fe.y,Me=Math.sqrt(We*We+B*B);g.set(0,Me)}function O(U){n.enableZoom&&Xe(U),n.enablePan&&at(U)}function Ae(U){n.enableZoom&&Xe(U),n.enableRotate&&Fe(U)}function ie(U){if(D.length==1)_.set(U.pageX,U.pageY);else{const We=Ge(U),B=.5*(U.pageX+We.x),Me=.5*(U.pageY+We.y);_.set(B,Me)}x.subVectors(_,p).multiplyScalar(n.rotateSpeed);const fe=n.domElement;be(2*Math.PI*x.x/fe.clientHeight),ve(2*Math.PI*x.y/fe.clientHeight),p.copy(_)}function Ee(U){if(D.length===1)E.set(U.pageX,U.pageY);else{const fe=Ge(U),We=.5*(U.pageX+fe.x),B=.5*(U.pageY+fe.y);E.set(We,B)}v.subVectors(E,S).multiplyScalar(n.panSpeed),Q(v.x,v.y),S.copy(E)}function de(U){const fe=Ge(U),We=U.pageX-fe.x,B=U.pageY-fe.y,Me=Math.sqrt(We*We+B*B);I.set(0,Me),M.set(0,Math.pow(I.y/g.y,n.zoomSpeed)),le(M.y),g.copy(I);const Y=(U.pageX+fe.x)*.5,Se=(U.pageY+fe.y)*.5;ce(Y,Se)}function Pe(U){n.enableZoom&&de(U),n.enablePan&&Ee(U)}function Ue(U){n.enableZoom&&de(U),n.enableRotate&&ie(U)}function Ve(U){n.enabled!==!1&&(D.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",ot),n.domElement.addEventListener("pointerup",L)),!ut(U)&&(Te(U),U.pointerType==="touch"?we(U):b(U)))}function ot(U){n.enabled!==!1&&(U.pointerType==="touch"?Re(U):ee(U))}function L(U){switch(Ot(U),D.length){case 0:n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",ot),n.domElement.removeEventListener("pointerup",L),n.dispatchEvent(em),a=s.NONE;break;case 1:const fe=D[0],We=k[fe];we({pointerId:fe,pageX:We.x,pageY:We.y});break}}function b(U){let fe;switch(U.button){case 0:fe=n.mouseButtons.LEFT;break;case 1:fe=n.mouseButtons.MIDDLE;break;case 2:fe=n.mouseButtons.RIGHT;break;default:fe=-1}switch(fe){case fs.DOLLY:if(n.enableZoom===!1)return;Be(U),a=s.DOLLY;break;case fs.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;st(U),a=s.PAN}else{if(n.enableRotate===!1)return;xe(U),a=s.ROTATE}break;case fs.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;xe(U),a=s.ROTATE}else{if(n.enablePan===!1)return;st(U),a=s.PAN}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(pu)}function ee(U){switch(a){case s.ROTATE:if(n.enableRotate===!1)return;te(U);break;case s.DOLLY:if(n.enableZoom===!1)return;_e(U);break;case s.PAN:if(n.enablePan===!1)return;De(U);break}}function re(U){n.enabled===!1||n.enableZoom===!1||a!==s.NONE||(U.preventDefault(),n.dispatchEvent(pu),Je(ye(U)),n.dispatchEvent(em))}function ye(U){const fe=U.deltaMode,We={clientX:U.clientX,clientY:U.clientY,deltaY:U.deltaY};switch(fe){case 1:We.deltaY*=16;break;case 2:We.deltaY*=100;break}return U.ctrlKey&&!he&&(We.deltaY*=10),We}function me(U){U.key==="Control"&&(he=!0,n.domElement.getRootNode().addEventListener("keyup",je,{passive:!0,capture:!0}))}function je(U){U.key==="Control"&&(he=!1,n.domElement.getRootNode().removeEventListener("keyup",je,{passive:!0,capture:!0}))}function Ze(U){n.enabled===!1||n.enablePan===!1||ke(U)}function we(U){switch(Ke(U),D.length){case 1:switch(n.touches.ONE){case ds.ROTATE:if(n.enableRotate===!1)return;Fe(U),a=s.TOUCH_ROTATE;break;case ds.PAN:if(n.enablePan===!1)return;at(U),a=s.TOUCH_PAN;break;default:a=s.NONE}break;case 2:switch(n.touches.TWO){case ds.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(U),a=s.TOUCH_DOLLY_PAN;break;case ds.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(U),a=s.TOUCH_DOLLY_ROTATE;break;default:a=s.NONE}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(pu)}function Re(U){switch(Ke(U),a){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ie(U),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Ee(U),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(U),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ue(U),n.update();break;default:a=s.NONE}}function et(U){n.enabled!==!1&&U.preventDefault()}function Te(U){D.push(U.pointerId)}function Ot(U){delete k[U.pointerId];for(let fe=0;fe<D.length;fe++)if(D[fe]==U.pointerId){D.splice(fe,1);return}}function ut(U){for(let fe=0;fe<D.length;fe++)if(D[fe]==U.pointerId)return!0;return!1}function Ke(U){let fe=k[U.pointerId];fe===void 0&&(fe=new Ce,k[U.pointerId]=fe),fe.set(U.pageX,U.pageY)}function Ge(U){const fe=U.pointerId===D[0]?D[1]:D[0];return k[fe]}n.domElement.addEventListener("contextmenu",et),n.domElement.addEventListener("pointerdown",Ve),n.domElement.addEventListener("pointercancel",L),n.domElement.addEventListener("wheel",re,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",me,{passive:!0,capture:!0}),this.update()}}var Uu=function(i,e){return Uu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])},Uu(i,e)};function Ws(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Uu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Nu(i){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&i[e],n=0;if(t)return t.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&n>=i.length&&(i=void 0),{value:i&&i[n++],done:!i}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ou(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),s,a=[],c;try{for(;(e===void 0||e-- >0)&&!(s=n.next()).done;)a.push(s.value)}catch(l){c={error:l}}finally{try{s&&!s.done&&(t=n.return)&&t.call(n)}finally{if(c)throw c.error}}return a}function Fu(i,e,t){if(t||arguments.length===2)for(var n=0,s=e.length,a;n<s;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return i.concat(a||Array.prototype.slice.call(e))}function Si(i){return typeof i=="function"}function rg(i){var e=function(n){Error.call(n),n.stack=new Error().stack},t=i(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var mu=rg(function(i){return function(t){i(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(n,s){return s+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function Bu(i,e){if(i){var t=i.indexOf(e);0<=t&&i.splice(t,1)}}var El=function(){function i(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return i.prototype.unsubscribe=function(){var e,t,n,s,a;if(!this.closed){this.closed=!0;var c=this._parentage;if(c)if(this._parentage=null,Array.isArray(c))try{for(var l=Nu(c),h=l.next();!h.done;h=l.next()){var f=h.value;f.remove(this)}}catch(E){e={error:E}}finally{try{h&&!h.done&&(t=l.return)&&t.call(l)}finally{if(e)throw e.error}}else c.remove(this);var d=this.initialTeardown;if(Si(d))try{d()}catch(E){a=E instanceof mu?E.errors:[E]}var p=this._finalizers;if(p){this._finalizers=null;try{for(var _=Nu(p),x=_.next();!x.done;x=_.next()){var S=x.value;try{nm(S)}catch(E){a=a??[],E instanceof mu?a=Fu(Fu([],Ou(a)),Ou(E.errors)):a.push(E)}}}catch(E){n={error:E}}finally{try{x&&!x.done&&(s=_.return)&&s.call(_)}finally{if(n)throw n.error}}}if(a)throw new mu(a)}},i.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)nm(e);else{if(e instanceof i){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},i.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},i.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},i.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&Bu(t,e)},i.prototype.remove=function(e){var t=this._finalizers;t&&Bu(t,e),e instanceof i&&e._removeParent(this)},i.EMPTY=function(){var e=new i;return e.closed=!0,e}(),i}(),sg=El.EMPTY;function og(i){return i instanceof El||i&&"closed"in i&&Si(i.remove)&&Si(i.add)&&Si(i.unsubscribe)}function nm(i){Si(i)?i():i.unsubscribe()}var ag={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},lg={setTimeout:function(i,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];return setTimeout.apply(void 0,Fu([i,e],Ou(t)))},clearTimeout:function(i){var e=lg.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(i)},delegate:void 0};function O1(i){lg.setTimeout(function(){throw i})}function im(){}function rl(i){i()}var eh=function(i){Ws(e,i);function e(t){var n=i.call(this)||this;return n.isStopped=!1,t?(n.destination=t,og(t)&&t.add(n)):n.destination=G1,n}return e.create=function(t,n,s){return new zu(t,n,s)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,i.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(El),F1=Function.prototype.bind;function gu(i,e){return F1.call(i,e)}var B1=function(){function i(e){this.partialObserver=e}return i.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(n){Za(n)}},i.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(n){Za(n)}else Za(e)},i.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){Za(t)}},i}(),zu=function(i){Ws(e,i);function e(t,n,s){var a=i.call(this)||this,c;if(Si(t)||!t)c={next:t??void 0,error:n??void 0,complete:s??void 0};else{var l;a&&ag.useDeprecatedNextContext?(l=Object.create(t),l.unsubscribe=function(){return a.unsubscribe()},c={next:t.next&&gu(t.next,l),error:t.error&&gu(t.error,l),complete:t.complete&&gu(t.complete,l)}):c=t}return a.destination=new B1(c),a}return e}(eh);function Za(i){O1(i)}function z1(i){throw i}var G1={closed:!0,next:im,error:z1,complete:im},H1=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function cg(i){return i}function k1(i){return i.length===0?cg:i.length===1?i[0]:function(t){return i.reduce(function(n,s){return s(n)},t)}}var rm=function(){function i(e){e&&(this._subscribe=e)}return i.prototype.lift=function(e){var t=new i;return t.source=this,t.operator=e,t},i.prototype.subscribe=function(e,t,n){var s=this,a=W1(e)?e:new zu(e,t,n);return rl(function(){var c=s,l=c.operator,h=c.source;a.add(l?l.call(a,h):h?s._subscribe(a):s._trySubscribe(a))}),a},i.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},i.prototype.forEach=function(e,t){var n=this;return t=sm(t),new t(function(s,a){var c=new zu({next:function(l){try{e(l)}catch(h){a(h),c.unsubscribe()}},error:a,complete:s});n.subscribe(c)})},i.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},i.prototype[H1]=function(){return this},i.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return k1(e)(this)},i.prototype.toPromise=function(e){var t=this;return e=sm(e),new e(function(n,s){var a;t.subscribe(function(c){return a=c},function(c){return s(c)},function(){return n(a)})})},i.create=function(e){return new i(e)},i}();function sm(i){var e;return(e=i??ag.Promise)!==null&&e!==void 0?e:Promise}function V1(i){return i&&Si(i.next)&&Si(i.error)&&Si(i.complete)}function W1(i){return i&&i instanceof eh||V1(i)&&og(i)}function X1(i){return Si(i==null?void 0:i.lift)}function th(i){return function(e){if(X1(e))return e.lift(function(t){try{return i(t,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function nh(i,e,t,n,s){return new q1(i,e,t,n,s)}var q1=function(i){Ws(e,i);function e(t,n,s,a,c,l){var h=i.call(this,t)||this;return h.onFinalize=c,h.shouldUnsubscribe=l,h._next=n?function(f){try{n(f)}catch(d){t.error(d)}}:i.prototype._next,h._error=a?function(f){try{a(f)}catch(d){t.error(d)}finally{this.unsubscribe()}}:i.prototype._error,h._complete=s?function(){try{s()}catch(f){t.error(f)}finally{this.unsubscribe()}}:i.prototype._complete,h}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;i.prototype.unsubscribe.call(this),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(eh),Y1=rg(function(i){return function(){i(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),ug=function(i){Ws(e,i);function e(){var t=i.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var n=new om(this,this);return n.operator=t,n},e.prototype._throwIfClosed=function(){if(this.closed)throw new Y1},e.prototype.next=function(t){var n=this;rl(function(){var s,a;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var c=Nu(n.currentObservers),l=c.next();!l.done;l=c.next()){var h=l.value;h.next(t)}}catch(f){s={error:f}}finally{try{l&&!l.done&&(a=c.return)&&a.call(c)}finally{if(s)throw s.error}}}})},e.prototype.error=function(t){var n=this;rl(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=t;for(var s=n.observers;s.length;)s.shift().error(t)}})},e.prototype.complete=function(){var t=this;rl(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var n=t.observers;n.length;)n.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),i.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var n=this,s=this,a=s.hasError,c=s.isStopped,l=s.observers;return a||c?sg:(this.currentObservers=null,l.push(t),new El(function(){n.currentObservers=null,Bu(l,t)}))},e.prototype._checkFinalizedStatuses=function(t){var n=this,s=n.hasError,a=n.thrownError,c=n.isStopped;s?t.error(a):c&&t.complete()},e.prototype.asObservable=function(){var t=new rm;return t.source=this,t},e.create=function(t,n){return new om(t,n)},e}(rm),om=function(i){Ws(e,i);function e(t,n){var s=i.call(this)||this;return s.destination=t,s.source=n,s}return e.prototype.next=function(t){var n,s;(s=(n=this.destination)===null||n===void 0?void 0:n.next)===null||s===void 0||s.call(n,t)},e.prototype.error=function(t){var n,s;(s=(n=this.destination)===null||n===void 0?void 0:n.error)===null||s===void 0||s.call(n,t)},e.prototype.complete=function(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)},e.prototype._subscribe=function(t){var n,s;return(s=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&s!==void 0?s:sg},e}(ug),Xs=function(i){Ws(e,i);function e(t){var n=i.call(this)||this;return n._value=t,n}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var n=i.prototype._subscribe.call(this,t);return!n.closed&&t.next(this._value),n},e.prototype.getValue=function(){var t=this,n=t.hasError,s=t.thrownError,a=t._value;if(n)throw s;return this._throwIfClosed(),a},e.prototype.next=function(t){i.prototype.next.call(this,this._value=t)},e}(ug);function Hi(i,e){return th(function(t,n){var s=0;t.subscribe(nh(n,function(a){n.next(i.call(e,a,s++))}))})}function $1(i,e){return th(function(t,n){var s=0;t.subscribe(nh(n,function(a){return i.call(e,a,s++)&&n.next(a)}))})}function ki(i,e){return e===void 0&&(e=cg),i=i??Z1,th(function(t,n){var s,a=!0;t.subscribe(nh(n,function(c){var l=e(c);(a||!i(s,l))&&(a=!1,s=l,n.next(c))}))})}function Z1(i,e){return i===e}function Ir(i){return $1(function(e,t){return i<=t})}const K1={items:[]},Gu=new Xs(K1);function J1(i){const t={...Gu.getValue(),items:i};Gu.next(t)}const j1=new URL(window.location),am=new URLSearchParams(j1.search),Q1={columns:["X_umap0_norm","X_umap1_norm","X_spatial0_norm","X_spatial1_norm","X_spatial2_norm","clusters"],prefixOptions:["50pe","75pe","6s"],prefix:am.has("prefix")?am.get("prefix"):"6s",pallete:{},listPalette:[],palleteColumn:"clusters_pal",genes:[],atacs:[],items:[],groups:[]},St=new Xs(Q1);function eR(i){const e=St.getValue(),t=Object.keys(i).map(s=>[s,i[s]]),n={...e,pallete:i,listPalette:t};St.next(n)}function tR(i){const t={...St.getValue(),genes:i};St.next(t)}function nR(i){const t={...St.getValue(),atacs:i};St.next(t)}const iR={scene:new $C},rR=new Xs(iR),sR={isLoading:!0,theme:"light"},dl=new Xs(sR);function Jn(i,e=""){const n={...dl.getValue(),isLoading:i};dl.next(n)}const oR=new URL(window.location),lm=new URLSearchParams(oR.search),aR={selectedCelltypes:[],mode:lm.has("mode")?Number(lm.get("mode")):1,selectedSingleGene:"",selectedSingleAtac:"",selectedGenes:[],selectedAtacs:[],intervalsData:[],geneGenomeHover:!1,showing:"celltype",selectedGenesPrev:[]},Oe=new Xs(aR);function ks(i){const t={...Oe.getValue(),selectedCelltypes:[...new Set(i)]};Oe.next(t)}function hg(i){const e=Oe.getValue(),t=[...e.selectedCelltypes],n=t.indexOf(i);n>-1?t.splice(n,1):t.push(i);const s={...e,selectedCelltypes:t};Oe.next(s)}function fg(i){const t={...Oe.getValue(),intervalsData:[...new Set(i)]};Oe.next(t)}function lR(i){const t={...Oe.getValue(),mode:i};Oe.next(t)}function kr(i){i.includes(void 0)&&(i=[]);const e=Oe.getValue(),t=e.selectedGenes;if(t.length>0){let s=document.getElementById(t[0]);s&&(s.checked=!1),s=document.getElementById(t[1]),s&&(s.checked=!1)}const n={...e,selectedGenes:i,selectedGenesPrev:t};if(i.length>0){const s=document.getElementById(i[0]);s&&(s.checked=!0)}Oe.next(n)}function qi(i){i.includes(void 0)&&(i=[]),console.log(i);const e=Oe.getValue(),t=e.selectedAtacs;if(t.length>0){const a=document.getElementById(t[0]);console.log(a),a&&(a.checked=!1)}const n={...e,selectedAtacs:i},s=document.getElementById(i[0]);s&&(s.checked=!0),Oe.next(n)}const cR={dotSize:6,genePercentile:.99,cameraPositionZ:300,cameraPositionY:50,cameraPositionX:40,umapOffset:1e4,cameraUmapPositionY:0,cameraUmapPositionZ:400,violinOffset:-1e4,cameraViolinPositionY:0,cameraViolinPositionZ:400},jn=new Xs(cR);function _u(i){const t={...jn.getValue(),dotSize:i};jn.next(t)}function cm(i){const e=jn.getValue(),t=i*.01,n={...e,genePercentile:t};jn.next(n)}var xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},pl={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */pl.exports;(function(i,e){(function(){var t,n="4.17.21",s=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",l="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",f=500,d="__lodash_placeholder__",p=1,_=2,x=4,S=1,E=2,v=1,g=2,I=4,M=8,C=16,G=32,F=64,D=128,k=256,he=512,T=30,P="...",be=800,ve=16,H=1,oe=2,Q=3,le=1/0,ne=9007199254740991,ce=17976931348623157e292,pe=NaN,xe=4294967295,Be=xe-1,st=xe>>>1,te=[["ary",D],["bind",v],["bindKey",g],["curry",M],["curryRight",C],["flip",he],["partial",G],["partialRight",F],["rearg",k]],_e="[object Arguments]",De="[object Array]",Je="[object AsyncFunction]",ke="[object Boolean]",Fe="[object Date]",at="[object DOMException]",Xe="[object Error]",O="[object Function]",Ae="[object GeneratorFunction]",ie="[object Map]",Ee="[object Number]",de="[object Null]",Pe="[object Object]",Ue="[object Promise]",Ve="[object Proxy]",ot="[object RegExp]",L="[object Set]",b="[object String]",ee="[object Symbol]",re="[object Undefined]",ye="[object WeakMap]",me="[object WeakSet]",je="[object ArrayBuffer]",Ze="[object DataView]",we="[object Float32Array]",Re="[object Float64Array]",et="[object Int8Array]",Te="[object Int16Array]",Ot="[object Int32Array]",ut="[object Uint8Array]",Ke="[object Uint8ClampedArray]",Ge="[object Uint16Array]",qe="[object Uint32Array]",U=/\b__p \+= '';/g,fe=/\b(__p \+=) '' \+/g,We=/(__e\(.*?\)|\b__t\)) \+\n'';/g,B=/&(?:amp|lt|gt|quot|#39);/g,Me=/[&<>"']/g,Y=RegExp(B.source),Se=RegExp(Me.source),Ne=/<%-([\s\S]+?)%>/g,gt=/<%([\s\S]+?)%>/g,wt=/<%=([\s\S]+?)%>/g,Lt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ht=/^\w*$/,At=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pt=/[\\^$.*+?()[\]{}|]/g,rn=RegExp(Pt.source),ei=/^\s+/,qr=/\s/,Yr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Io=/\{\n\/\* \[wrapped with (.+)\] \*/,$r=/,? & /,Do=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Uo=/[()=,{}\[\]\/\s]/,bl=/\\(\\)?/g,Tl=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,No=/\w*$/,R=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,K=/^\[object .+?Constructor\]$/,j=/^0o[0-7]+$/i,Z=/^(?:0|[1-9]\d*)$/,ze=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ye=/($^)/,tt=/['\n\r\u2028\u2029\\]/g,nt="\\ud800-\\udfff",pt="\\u0300-\\u036f",lt="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",kt=pt+lt+ht,fn="\\u2700-\\u27bf",$t="a-z\\xdf-\\xf6\\xf8-\\xff",ti="\\xac\\xb1\\xd7\\xf7",Bt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",dt="\\u2000-\\u206f",Ys=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ut="A-Z\\xc0-\\xd6\\xd8-\\xde",di="\\ufe0e\\ufe0f",$s=ti+Bt+dt+Ys,bi="['’]",Zs="["+nt+"]",jt="["+$s+"]",Hn="["+kt+"]",Zr="\\d+",Tn="["+fn+"]",Kr="["+$t+"]",Oo="[^"+nt+$s+Zr+fn+$t+Ut+"]",Jr="\\ud83c[\\udffb-\\udfff]",yg="(?:"+Hn+"|"+Jr+")",rh="[^"+nt+"]",Al="(?:\\ud83c[\\udde6-\\uddff]){2}",wl="[\\ud800-\\udbff][\\udc00-\\udfff]",jr="["+Ut+"]",sh="\\u200d",oh="(?:"+Kr+"|"+Oo+")",Sg="(?:"+jr+"|"+Oo+")",ah="(?:"+bi+"(?:d|ll|m|re|s|t|ve))?",lh="(?:"+bi+"(?:D|LL|M|RE|S|T|VE))?",ch=yg+"?",uh="["+di+"]?",Eg="(?:"+sh+"(?:"+[rh,Al,wl].join("|")+")"+uh+ch+")*",Mg="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",bg="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",hh=uh+ch+Eg,Tg="(?:"+[Tn,Al,wl].join("|")+")"+hh,Ag="(?:"+[rh+Hn+"?",Hn,Al,wl,Zs].join("|")+")",wg=RegExp(bi,"g"),Cg=RegExp(Hn,"g"),Cl=RegExp(Jr+"(?="+Jr+")|"+Ag+hh,"g"),Rg=RegExp([jr+"?"+Kr+"+"+ah+"(?="+[jt,jr,"$"].join("|")+")",Sg+"+"+lh+"(?="+[jt,jr+oh,"$"].join("|")+")",jr+"?"+oh+"+"+ah,jr+"+"+lh,bg,Mg,Zr,Tg].join("|"),"g"),Lg=RegExp("["+sh+nt+kt+di+"]"),Pg=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ig=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Dg=-1,zt={};zt[we]=zt[Re]=zt[et]=zt[Te]=zt[Ot]=zt[ut]=zt[Ke]=zt[Ge]=zt[qe]=!0,zt[_e]=zt[De]=zt[je]=zt[ke]=zt[Ze]=zt[Fe]=zt[Xe]=zt[O]=zt[ie]=zt[Ee]=zt[Pe]=zt[ot]=zt[L]=zt[b]=zt[ye]=!1;var Ft={};Ft[_e]=Ft[De]=Ft[je]=Ft[Ze]=Ft[ke]=Ft[Fe]=Ft[we]=Ft[Re]=Ft[et]=Ft[Te]=Ft[Ot]=Ft[ie]=Ft[Ee]=Ft[Pe]=Ft[ot]=Ft[L]=Ft[b]=Ft[ee]=Ft[ut]=Ft[Ke]=Ft[Ge]=Ft[qe]=!0,Ft[Xe]=Ft[O]=Ft[ye]=!1;var Ug={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Ng={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Og={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Fg={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Bg=parseFloat,zg=parseInt,fh=typeof xo=="object"&&xo&&xo.Object===Object&&xo,Gg=typeof self=="object"&&self&&self.Object===Object&&self,ln=fh||Gg||Function("return this")(),Rl=e&&!e.nodeType&&e,_r=Rl&&!0&&i&&!i.nodeType&&i,dh=_r&&_r.exports===Rl,Ll=dh&&fh.process,kn=function(){try{var V=_r&&_r.require&&_r.require("util").types;return V||Ll&&Ll.binding&&Ll.binding("util")}catch{}}(),ph=kn&&kn.isArrayBuffer,mh=kn&&kn.isDate,gh=kn&&kn.isMap,_h=kn&&kn.isRegExp,vh=kn&&kn.isSet,xh=kn&&kn.isTypedArray;function In(V,se,J){switch(J.length){case 0:return V.call(se);case 1:return V.call(se,J[0]);case 2:return V.call(se,J[0],J[1]);case 3:return V.call(se,J[0],J[1],J[2])}return V.apply(se,J)}function Hg(V,se,J,He){for(var ct=-1,Ct=V==null?0:V.length;++ct<Ct;){var Qt=V[ct];se(He,Qt,J(Qt),V)}return He}function Vn(V,se){for(var J=-1,He=V==null?0:V.length;++J<He&&se(V[J],J,V)!==!1;);return V}function kg(V,se){for(var J=V==null?0:V.length;J--&&se(V[J],J,V)!==!1;);return V}function yh(V,se){for(var J=-1,He=V==null?0:V.length;++J<He;)if(!se(V[J],J,V))return!1;return!0}function Yi(V,se){for(var J=-1,He=V==null?0:V.length,ct=0,Ct=[];++J<He;){var Qt=V[J];se(Qt,J,V)&&(Ct[ct++]=Qt)}return Ct}function Fo(V,se){var J=V==null?0:V.length;return!!J&&Qr(V,se,0)>-1}function Pl(V,se,J){for(var He=-1,ct=V==null?0:V.length;++He<ct;)if(J(se,V[He]))return!0;return!1}function Vt(V,se){for(var J=-1,He=V==null?0:V.length,ct=Array(He);++J<He;)ct[J]=se(V[J],J,V);return ct}function $i(V,se){for(var J=-1,He=se.length,ct=V.length;++J<He;)V[ct+J]=se[J];return V}function Il(V,se,J,He){var ct=-1,Ct=V==null?0:V.length;for(He&&Ct&&(J=V[++ct]);++ct<Ct;)J=se(J,V[ct],ct,V);return J}function Vg(V,se,J,He){var ct=V==null?0:V.length;for(He&&ct&&(J=V[--ct]);ct--;)J=se(J,V[ct],ct,V);return J}function Dl(V,se){for(var J=-1,He=V==null?0:V.length;++J<He;)if(se(V[J],J,V))return!0;return!1}var Wg=Ul("length");function Xg(V){return V.split("")}function qg(V){return V.match(Do)||[]}function Sh(V,se,J){var He;return J(V,function(ct,Ct,Qt){if(se(ct,Ct,Qt))return He=Ct,!1}),He}function Bo(V,se,J,He){for(var ct=V.length,Ct=J+(He?1:-1);He?Ct--:++Ct<ct;)if(se(V[Ct],Ct,V))return Ct;return-1}function Qr(V,se,J){return se===se?r_(V,se,J):Bo(V,Eh,J)}function Yg(V,se,J,He){for(var ct=J-1,Ct=V.length;++ct<Ct;)if(He(V[ct],se))return ct;return-1}function Eh(V){return V!==V}function Mh(V,se){var J=V==null?0:V.length;return J?Ol(V,se)/J:pe}function Ul(V){return function(se){return se==null?t:se[V]}}function Nl(V){return function(se){return V==null?t:V[se]}}function bh(V,se,J,He,ct){return ct(V,function(Ct,Qt,Nt){J=He?(He=!1,Ct):se(J,Ct,Qt,Nt)}),J}function $g(V,se){var J=V.length;for(V.sort(se);J--;)V[J]=V[J].value;return V}function Ol(V,se){for(var J,He=-1,ct=V.length;++He<ct;){var Ct=se(V[He]);Ct!==t&&(J=J===t?Ct:J+Ct)}return J}function Fl(V,se){for(var J=-1,He=Array(V);++J<V;)He[J]=se(J);return He}function Zg(V,se){return Vt(se,function(J){return[J,V[J]]})}function Th(V){return V&&V.slice(0,Rh(V)+1).replace(ei,"")}function Dn(V){return function(se){return V(se)}}function Bl(V,se){return Vt(se,function(J){return V[J]})}function Ks(V,se){return V.has(se)}function Ah(V,se){for(var J=-1,He=V.length;++J<He&&Qr(se,V[J],0)>-1;);return J}function wh(V,se){for(var J=V.length;J--&&Qr(se,V[J],0)>-1;);return J}function Kg(V,se){for(var J=V.length,He=0;J--;)V[J]===se&&++He;return He}var Jg=Nl(Ug),jg=Nl(Ng);function Qg(V){return"\\"+Fg[V]}function e_(V,se){return V==null?t:V[se]}function es(V){return Lg.test(V)}function t_(V){return Pg.test(V)}function n_(V){for(var se,J=[];!(se=V.next()).done;)J.push(se.value);return J}function zl(V){var se=-1,J=Array(V.size);return V.forEach(function(He,ct){J[++se]=[ct,He]}),J}function Ch(V,se){return function(J){return V(se(J))}}function Zi(V,se){for(var J=-1,He=V.length,ct=0,Ct=[];++J<He;){var Qt=V[J];(Qt===se||Qt===d)&&(V[J]=d,Ct[ct++]=J)}return Ct}function zo(V){var se=-1,J=Array(V.size);return V.forEach(function(He){J[++se]=He}),J}function i_(V){var se=-1,J=Array(V.size);return V.forEach(function(He){J[++se]=[He,He]}),J}function r_(V,se,J){for(var He=J-1,ct=V.length;++He<ct;)if(V[He]===se)return He;return-1}function s_(V,se,J){for(var He=J+1;He--;)if(V[He]===se)return He;return He}function ts(V){return es(V)?a_(V):Wg(V)}function ni(V){return es(V)?l_(V):Xg(V)}function Rh(V){for(var se=V.length;se--&&qr.test(V.charAt(se)););return se}var o_=Nl(Og);function a_(V){for(var se=Cl.lastIndex=0;Cl.test(V);)++se;return se}function l_(V){return V.match(Cl)||[]}function c_(V){return V.match(Rg)||[]}var u_=function V(se){se=se==null?ln:ns.defaults(ln.Object(),se,ns.pick(ln,Ig));var J=se.Array,He=se.Date,ct=se.Error,Ct=se.Function,Qt=se.Math,Nt=se.Object,Gl=se.RegExp,h_=se.String,Wn=se.TypeError,Go=J.prototype,f_=Ct.prototype,is=Nt.prototype,Ho=se["__core-js_shared__"],ko=f_.toString,It=is.hasOwnProperty,d_=0,Lh=function(){var r=/[^.]+$/.exec(Ho&&Ho.keys&&Ho.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Vo=is.toString,p_=ko.call(Nt),m_=ln._,g_=Gl("^"+ko.call(It).replace(Pt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Wo=dh?se.Buffer:t,Ki=se.Symbol,Xo=se.Uint8Array,Ph=Wo?Wo.allocUnsafe:t,qo=Ch(Nt.getPrototypeOf,Nt),Ih=Nt.create,Dh=is.propertyIsEnumerable,Yo=Go.splice,Uh=Ki?Ki.isConcatSpreadable:t,Js=Ki?Ki.iterator:t,vr=Ki?Ki.toStringTag:t,$o=function(){try{var r=Mr(Nt,"defineProperty");return r({},"",{}),r}catch{}}(),__=se.clearTimeout!==ln.clearTimeout&&se.clearTimeout,v_=He&&He.now!==ln.Date.now&&He.now,x_=se.setTimeout!==ln.setTimeout&&se.setTimeout,Zo=Qt.ceil,Ko=Qt.floor,Hl=Nt.getOwnPropertySymbols,y_=Wo?Wo.isBuffer:t,Nh=se.isFinite,S_=Go.join,E_=Ch(Nt.keys,Nt),en=Qt.max,dn=Qt.min,M_=He.now,b_=se.parseInt,Oh=Qt.random,T_=Go.reverse,kl=Mr(se,"DataView"),js=Mr(se,"Map"),Vl=Mr(se,"Promise"),rs=Mr(se,"Set"),Qs=Mr(se,"WeakMap"),eo=Mr(Nt,"create"),Jo=Qs&&new Qs,ss={},A_=br(kl),w_=br(js),C_=br(Vl),R_=br(rs),L_=br(Qs),jo=Ki?Ki.prototype:t,to=jo?jo.valueOf:t,Fh=jo?jo.toString:t;function A(r){if(Yt(r)&&!ft(r)&&!(r instanceof Mt)){if(r instanceof Xn)return r;if(It.call(r,"__wrapped__"))return zf(r)}return new Xn(r)}var os=function(){function r(){}return function(o){if(!Wt(o))return{};if(Ih)return Ih(o);r.prototype=o;var u=new r;return r.prototype=t,u}}();function Qo(){}function Xn(r,o){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=t}A.templateSettings={escape:Ne,evaluate:gt,interpolate:wt,variable:"",imports:{_:A}},A.prototype=Qo.prototype,A.prototype.constructor=A,Xn.prototype=os(Qo.prototype),Xn.prototype.constructor=Xn;function Mt(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=xe,this.__views__=[]}function P_(){var r=new Mt(this.__wrapped__);return r.__actions__=An(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=An(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=An(this.__views__),r}function I_(){if(this.__filtered__){var r=new Mt(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function D_(){var r=this.__wrapped__.value(),o=this.__dir__,u=ft(r),m=o<0,y=u?r.length:0,w=Xv(0,y,this.__views__),N=w.start,z=w.end,X=z-N,ae=m?z:N-1,ue=this.__iteratees__,ge=ue.length,Ie=0,$e=dn(X,this.__takeCount__);if(!u||!m&&y==X&&$e==X)return lf(r,this.__actions__);var it=[];e:for(;X--&&Ie<$e;){ae+=o;for(var _t=-1,rt=r[ae];++_t<ge;){var Et=ue[_t],Tt=Et.iteratee,On=Et.type,xn=Tt(rt);if(On==oe)rt=xn;else if(!xn){if(On==H)continue e;break e}}it[Ie++]=rt}return it}Mt.prototype=os(Qo.prototype),Mt.prototype.constructor=Mt;function xr(r){var o=-1,u=r==null?0:r.length;for(this.clear();++o<u;){var m=r[o];this.set(m[0],m[1])}}function U_(){this.__data__=eo?eo(null):{},this.size=0}function N_(r){var o=this.has(r)&&delete this.__data__[r];return this.size-=o?1:0,o}function O_(r){var o=this.__data__;if(eo){var u=o[r];return u===h?t:u}return It.call(o,r)?o[r]:t}function F_(r){var o=this.__data__;return eo?o[r]!==t:It.call(o,r)}function B_(r,o){var u=this.__data__;return this.size+=this.has(r)?0:1,u[r]=eo&&o===t?h:o,this}xr.prototype.clear=U_,xr.prototype.delete=N_,xr.prototype.get=O_,xr.prototype.has=F_,xr.prototype.set=B_;function Ti(r){var o=-1,u=r==null?0:r.length;for(this.clear();++o<u;){var m=r[o];this.set(m[0],m[1])}}function z_(){this.__data__=[],this.size=0}function G_(r){var o=this.__data__,u=ea(o,r);if(u<0)return!1;var m=o.length-1;return u==m?o.pop():Yo.call(o,u,1),--this.size,!0}function H_(r){var o=this.__data__,u=ea(o,r);return u<0?t:o[u][1]}function k_(r){return ea(this.__data__,r)>-1}function V_(r,o){var u=this.__data__,m=ea(u,r);return m<0?(++this.size,u.push([r,o])):u[m][1]=o,this}Ti.prototype.clear=z_,Ti.prototype.delete=G_,Ti.prototype.get=H_,Ti.prototype.has=k_,Ti.prototype.set=V_;function Ai(r){var o=-1,u=r==null?0:r.length;for(this.clear();++o<u;){var m=r[o];this.set(m[0],m[1])}}function W_(){this.size=0,this.__data__={hash:new xr,map:new(js||Ti),string:new xr}}function X_(r){var o=fa(this,r).delete(r);return this.size-=o?1:0,o}function q_(r){return fa(this,r).get(r)}function Y_(r){return fa(this,r).has(r)}function $_(r,o){var u=fa(this,r),m=u.size;return u.set(r,o),this.size+=u.size==m?0:1,this}Ai.prototype.clear=W_,Ai.prototype.delete=X_,Ai.prototype.get=q_,Ai.prototype.has=Y_,Ai.prototype.set=$_;function yr(r){var o=-1,u=r==null?0:r.length;for(this.__data__=new Ai;++o<u;)this.add(r[o])}function Z_(r){return this.__data__.set(r,h),this}function K_(r){return this.__data__.has(r)}yr.prototype.add=yr.prototype.push=Z_,yr.prototype.has=K_;function ii(r){var o=this.__data__=new Ti(r);this.size=o.size}function J_(){this.__data__=new Ti,this.size=0}function j_(r){var o=this.__data__,u=o.delete(r);return this.size=o.size,u}function Q_(r){return this.__data__.get(r)}function ev(r){return this.__data__.has(r)}function tv(r,o){var u=this.__data__;if(u instanceof Ti){var m=u.__data__;if(!js||m.length<s-1)return m.push([r,o]),this.size=++u.size,this;u=this.__data__=new Ai(m)}return u.set(r,o),this.size=u.size,this}ii.prototype.clear=J_,ii.prototype.delete=j_,ii.prototype.get=Q_,ii.prototype.has=ev,ii.prototype.set=tv;function Bh(r,o){var u=ft(r),m=!u&&Tr(r),y=!u&&!m&&tr(r),w=!u&&!m&&!y&&us(r),N=u||m||y||w,z=N?Fl(r.length,h_):[],X=z.length;for(var ae in r)(o||It.call(r,ae))&&!(N&&(ae=="length"||y&&(ae=="offset"||ae=="parent")||w&&(ae=="buffer"||ae=="byteLength"||ae=="byteOffset")||Li(ae,X)))&&z.push(ae);return z}function zh(r){var o=r.length;return o?r[ec(0,o-1)]:t}function nv(r,o){return da(An(r),Sr(o,0,r.length))}function iv(r){return da(An(r))}function Wl(r,o,u){(u!==t&&!ri(r[o],u)||u===t&&!(o in r))&&wi(r,o,u)}function no(r,o,u){var m=r[o];(!(It.call(r,o)&&ri(m,u))||u===t&&!(o in r))&&wi(r,o,u)}function ea(r,o){for(var u=r.length;u--;)if(ri(r[u][0],o))return u;return-1}function rv(r,o,u,m){return Ji(r,function(y,w,N){o(m,y,u(y),N)}),m}function Gh(r,o){return r&&mi(o,sn(o),r)}function sv(r,o){return r&&mi(o,Cn(o),r)}function wi(r,o,u){o=="__proto__"&&$o?$o(r,o,{configurable:!0,enumerable:!0,value:u,writable:!0}):r[o]=u}function Xl(r,o){for(var u=-1,m=o.length,y=J(m),w=r==null;++u<m;)y[u]=w?t:Tc(r,o[u]);return y}function Sr(r,o,u){return r===r&&(u!==t&&(r=r<=u?r:u),o!==t&&(r=r>=o?r:o)),r}function qn(r,o,u,m,y,w){var N,z=o&p,X=o&_,ae=o&x;if(u&&(N=y?u(r,m,y,w):u(r)),N!==t)return N;if(!Wt(r))return r;var ue=ft(r);if(ue){if(N=Yv(r),!z)return An(r,N)}else{var ge=pn(r),Ie=ge==O||ge==Ae;if(tr(r))return hf(r,z);if(ge==Pe||ge==_e||Ie&&!y){if(N=X||Ie?{}:Lf(r),!z)return X?Ov(r,sv(N,r)):Nv(r,Gh(N,r))}else{if(!Ft[ge])return y?r:{};N=$v(r,ge,z)}}w||(w=new ii);var $e=w.get(r);if($e)return $e;w.set(r,N),sd(r)?r.forEach(function(rt){N.add(qn(rt,o,u,rt,r,w))}):id(r)&&r.forEach(function(rt,Et){N.set(Et,qn(rt,o,u,Et,r,w))});var it=ae?X?hc:uc:X?Cn:sn,_t=ue?t:it(r);return Vn(_t||r,function(rt,Et){_t&&(Et=rt,rt=r[Et]),no(N,Et,qn(rt,o,u,Et,r,w))}),N}function ov(r){var o=sn(r);return function(u){return Hh(u,r,o)}}function Hh(r,o,u){var m=u.length;if(r==null)return!m;for(r=Nt(r);m--;){var y=u[m],w=o[y],N=r[y];if(N===t&&!(y in r)||!w(N))return!1}return!0}function kh(r,o,u){if(typeof r!="function")throw new Wn(c);return co(function(){r.apply(t,u)},o)}function io(r,o,u,m){var y=-1,w=Fo,N=!0,z=r.length,X=[],ae=o.length;if(!z)return X;u&&(o=Vt(o,Dn(u))),m?(w=Pl,N=!1):o.length>=s&&(w=Ks,N=!1,o=new yr(o));e:for(;++y<z;){var ue=r[y],ge=u==null?ue:u(ue);if(ue=m||ue!==0?ue:0,N&&ge===ge){for(var Ie=ae;Ie--;)if(o[Ie]===ge)continue e;X.push(ue)}else w(o,ge,m)||X.push(ue)}return X}var Ji=gf(pi),Vh=gf(Yl,!0);function av(r,o){var u=!0;return Ji(r,function(m,y,w){return u=!!o(m,y,w),u}),u}function ta(r,o,u){for(var m=-1,y=r.length;++m<y;){var w=r[m],N=o(w);if(N!=null&&(z===t?N===N&&!Nn(N):u(N,z)))var z=N,X=w}return X}function lv(r,o,u,m){var y=r.length;for(u=mt(u),u<0&&(u=-u>y?0:y+u),m=m===t||m>y?y:mt(m),m<0&&(m+=y),m=u>m?0:ad(m);u<m;)r[u++]=o;return r}function Wh(r,o){var u=[];return Ji(r,function(m,y,w){o(m,y,w)&&u.push(m)}),u}function cn(r,o,u,m,y){var w=-1,N=r.length;for(u||(u=Kv),y||(y=[]);++w<N;){var z=r[w];o>0&&u(z)?o>1?cn(z,o-1,u,m,y):$i(y,z):m||(y[y.length]=z)}return y}var ql=_f(),Xh=_f(!0);function pi(r,o){return r&&ql(r,o,sn)}function Yl(r,o){return r&&Xh(r,o,sn)}function na(r,o){return Yi(o,function(u){return Pi(r[u])})}function Er(r,o){o=Qi(o,r);for(var u=0,m=o.length;r!=null&&u<m;)r=r[gi(o[u++])];return u&&u==m?r:t}function qh(r,o,u){var m=o(r);return ft(r)?m:$i(m,u(r))}function _n(r){return r==null?r===t?re:de:vr&&vr in Nt(r)?Wv(r):i0(r)}function $l(r,o){return r>o}function cv(r,o){return r!=null&&It.call(r,o)}function uv(r,o){return r!=null&&o in Nt(r)}function hv(r,o,u){return r>=dn(o,u)&&r<en(o,u)}function Zl(r,o,u){for(var m=u?Pl:Fo,y=r[0].length,w=r.length,N=w,z=J(w),X=1/0,ae=[];N--;){var ue=r[N];N&&o&&(ue=Vt(ue,Dn(o))),X=dn(ue.length,X),z[N]=!u&&(o||y>=120&&ue.length>=120)?new yr(N&&ue):t}ue=r[0];var ge=-1,Ie=z[0];e:for(;++ge<y&&ae.length<X;){var $e=ue[ge],it=o?o($e):$e;if($e=u||$e!==0?$e:0,!(Ie?Ks(Ie,it):m(ae,it,u))){for(N=w;--N;){var _t=z[N];if(!(_t?Ks(_t,it):m(r[N],it,u)))continue e}Ie&&Ie.push(it),ae.push($e)}}return ae}function fv(r,o,u,m){return pi(r,function(y,w,N){o(m,u(y),w,N)}),m}function ro(r,o,u){o=Qi(o,r),r=Uf(r,o);var m=r==null?r:r[gi($n(o))];return m==null?t:In(m,r,u)}function Yh(r){return Yt(r)&&_n(r)==_e}function dv(r){return Yt(r)&&_n(r)==je}function pv(r){return Yt(r)&&_n(r)==Fe}function so(r,o,u,m,y){return r===o?!0:r==null||o==null||!Yt(r)&&!Yt(o)?r!==r&&o!==o:mv(r,o,u,m,so,y)}function mv(r,o,u,m,y,w){var N=ft(r),z=ft(o),X=N?De:pn(r),ae=z?De:pn(o);X=X==_e?Pe:X,ae=ae==_e?Pe:ae;var ue=X==Pe,ge=ae==Pe,Ie=X==ae;if(Ie&&tr(r)){if(!tr(o))return!1;N=!0,ue=!1}if(Ie&&!ue)return w||(w=new ii),N||us(r)?wf(r,o,u,m,y,w):kv(r,o,X,u,m,y,w);if(!(u&S)){var $e=ue&&It.call(r,"__wrapped__"),it=ge&&It.call(o,"__wrapped__");if($e||it){var _t=$e?r.value():r,rt=it?o.value():o;return w||(w=new ii),y(_t,rt,u,m,w)}}return Ie?(w||(w=new ii),Vv(r,o,u,m,y,w)):!1}function gv(r){return Yt(r)&&pn(r)==ie}function Kl(r,o,u,m){var y=u.length,w=y,N=!m;if(r==null)return!w;for(r=Nt(r);y--;){var z=u[y];if(N&&z[2]?z[1]!==r[z[0]]:!(z[0]in r))return!1}for(;++y<w;){z=u[y];var X=z[0],ae=r[X],ue=z[1];if(N&&z[2]){if(ae===t&&!(X in r))return!1}else{var ge=new ii;if(m)var Ie=m(ae,ue,X,r,o,ge);if(!(Ie===t?so(ue,ae,S|E,m,ge):Ie))return!1}}return!0}function $h(r){if(!Wt(r)||jv(r))return!1;var o=Pi(r)?g_:K;return o.test(br(r))}function _v(r){return Yt(r)&&_n(r)==ot}function vv(r){return Yt(r)&&pn(r)==L}function xv(r){return Yt(r)&&xa(r.length)&&!!zt[_n(r)]}function Zh(r){return typeof r=="function"?r:r==null?Rn:typeof r=="object"?ft(r)?jh(r[0],r[1]):Jh(r):vd(r)}function Jl(r){if(!lo(r))return E_(r);var o=[];for(var u in Nt(r))It.call(r,u)&&u!="constructor"&&o.push(u);return o}function yv(r){if(!Wt(r))return n0(r);var o=lo(r),u=[];for(var m in r)m=="constructor"&&(o||!It.call(r,m))||u.push(m);return u}function jl(r,o){return r<o}function Kh(r,o){var u=-1,m=wn(r)?J(r.length):[];return Ji(r,function(y,w,N){m[++u]=o(y,w,N)}),m}function Jh(r){var o=dc(r);return o.length==1&&o[0][2]?If(o[0][0],o[0][1]):function(u){return u===r||Kl(u,r,o)}}function jh(r,o){return mc(r)&&Pf(o)?If(gi(r),o):function(u){var m=Tc(u,r);return m===t&&m===o?Ac(u,r):so(o,m,S|E)}}function ia(r,o,u,m,y){r!==o&&ql(o,function(w,N){if(y||(y=new ii),Wt(w))Sv(r,o,N,u,ia,m,y);else{var z=m?m(_c(r,N),w,N+"",r,o,y):t;z===t&&(z=w),Wl(r,N,z)}},Cn)}function Sv(r,o,u,m,y,w,N){var z=_c(r,u),X=_c(o,u),ae=N.get(X);if(ae){Wl(r,u,ae);return}var ue=w?w(z,X,u+"",r,o,N):t,ge=ue===t;if(ge){var Ie=ft(X),$e=!Ie&&tr(X),it=!Ie&&!$e&&us(X);ue=X,Ie||$e||it?ft(z)?ue=z:Zt(z)?ue=An(z):$e?(ge=!1,ue=hf(X,!0)):it?(ge=!1,ue=ff(X,!0)):ue=[]:uo(X)||Tr(X)?(ue=z,Tr(z)?ue=ld(z):(!Wt(z)||Pi(z))&&(ue=Lf(X))):ge=!1}ge&&(N.set(X,ue),y(ue,X,m,w,N),N.delete(X)),Wl(r,u,ue)}function Qh(r,o){var u=r.length;if(u)return o+=o<0?u:0,Li(o,u)?r[o]:t}function ef(r,o,u){o.length?o=Vt(o,function(w){return ft(w)?function(N){return Er(N,w.length===1?w[0]:w)}:w}):o=[Rn];var m=-1;o=Vt(o,Dn(Qe()));var y=Kh(r,function(w,N,z){var X=Vt(o,function(ae){return ae(w)});return{criteria:X,index:++m,value:w}});return $g(y,function(w,N){return Uv(w,N,u)})}function Ev(r,o){return tf(r,o,function(u,m){return Ac(r,m)})}function tf(r,o,u){for(var m=-1,y=o.length,w={};++m<y;){var N=o[m],z=Er(r,N);u(z,N)&&oo(w,Qi(N,r),z)}return w}function Mv(r){return function(o){return Er(o,r)}}function Ql(r,o,u,m){var y=m?Yg:Qr,w=-1,N=o.length,z=r;for(r===o&&(o=An(o)),u&&(z=Vt(r,Dn(u)));++w<N;)for(var X=0,ae=o[w],ue=u?u(ae):ae;(X=y(z,ue,X,m))>-1;)z!==r&&Yo.call(z,X,1),Yo.call(r,X,1);return r}function nf(r,o){for(var u=r?o.length:0,m=u-1;u--;){var y=o[u];if(u==m||y!==w){var w=y;Li(y)?Yo.call(r,y,1):ic(r,y)}}return r}function ec(r,o){return r+Ko(Oh()*(o-r+1))}function bv(r,o,u,m){for(var y=-1,w=en(Zo((o-r)/(u||1)),0),N=J(w);w--;)N[m?w:++y]=r,r+=u;return N}function tc(r,o){var u="";if(!r||o<1||o>ne)return u;do o%2&&(u+=r),o=Ko(o/2),o&&(r+=r);while(o);return u}function yt(r,o){return vc(Df(r,o,Rn),r+"")}function Tv(r){return zh(hs(r))}function Av(r,o){var u=hs(r);return da(u,Sr(o,0,u.length))}function oo(r,o,u,m){if(!Wt(r))return r;o=Qi(o,r);for(var y=-1,w=o.length,N=w-1,z=r;z!=null&&++y<w;){var X=gi(o[y]),ae=u;if(X==="__proto__"||X==="constructor"||X==="prototype")return r;if(y!=N){var ue=z[X];ae=m?m(ue,X,z):t,ae===t&&(ae=Wt(ue)?ue:Li(o[y+1])?[]:{})}no(z,X,ae),z=z[X]}return r}var rf=Jo?function(r,o){return Jo.set(r,o),r}:Rn,wv=$o?function(r,o){return $o(r,"toString",{configurable:!0,enumerable:!1,value:Cc(o),writable:!0})}:Rn;function Cv(r){return da(hs(r))}function Yn(r,o,u){var m=-1,y=r.length;o<0&&(o=-o>y?0:y+o),u=u>y?y:u,u<0&&(u+=y),y=o>u?0:u-o>>>0,o>>>=0;for(var w=J(y);++m<y;)w[m]=r[m+o];return w}function Rv(r,o){var u;return Ji(r,function(m,y,w){return u=o(m,y,w),!u}),!!u}function ra(r,o,u){var m=0,y=r==null?m:r.length;if(typeof o=="number"&&o===o&&y<=st){for(;m<y;){var w=m+y>>>1,N=r[w];N!==null&&!Nn(N)&&(u?N<=o:N<o)?m=w+1:y=w}return y}return nc(r,o,Rn,u)}function nc(r,o,u,m){var y=0,w=r==null?0:r.length;if(w===0)return 0;o=u(o);for(var N=o!==o,z=o===null,X=Nn(o),ae=o===t;y<w;){var ue=Ko((y+w)/2),ge=u(r[ue]),Ie=ge!==t,$e=ge===null,it=ge===ge,_t=Nn(ge);if(N)var rt=m||it;else ae?rt=it&&(m||Ie):z?rt=it&&Ie&&(m||!$e):X?rt=it&&Ie&&!$e&&(m||!_t):$e||_t?rt=!1:rt=m?ge<=o:ge<o;rt?y=ue+1:w=ue}return dn(w,Be)}function sf(r,o){for(var u=-1,m=r.length,y=0,w=[];++u<m;){var N=r[u],z=o?o(N):N;if(!u||!ri(z,X)){var X=z;w[y++]=N===0?0:N}}return w}function of(r){return typeof r=="number"?r:Nn(r)?pe:+r}function Un(r){if(typeof r=="string")return r;if(ft(r))return Vt(r,Un)+"";if(Nn(r))return Fh?Fh.call(r):"";var o=r+"";return o=="0"&&1/r==-le?"-0":o}function ji(r,o,u){var m=-1,y=Fo,w=r.length,N=!0,z=[],X=z;if(u)N=!1,y=Pl;else if(w>=s){var ae=o?null:Gv(r);if(ae)return zo(ae);N=!1,y=Ks,X=new yr}else X=o?[]:z;e:for(;++m<w;){var ue=r[m],ge=o?o(ue):ue;if(ue=u||ue!==0?ue:0,N&&ge===ge){for(var Ie=X.length;Ie--;)if(X[Ie]===ge)continue e;o&&X.push(ge),z.push(ue)}else y(X,ge,u)||(X!==z&&X.push(ge),z.push(ue))}return z}function ic(r,o){return o=Qi(o,r),r=Uf(r,o),r==null||delete r[gi($n(o))]}function af(r,o,u,m){return oo(r,o,u(Er(r,o)),m)}function sa(r,o,u,m){for(var y=r.length,w=m?y:-1;(m?w--:++w<y)&&o(r[w],w,r););return u?Yn(r,m?0:w,m?w+1:y):Yn(r,m?w+1:0,m?y:w)}function lf(r,o){var u=r;return u instanceof Mt&&(u=u.value()),Il(o,function(m,y){return y.func.apply(y.thisArg,$i([m],y.args))},u)}function rc(r,o,u){var m=r.length;if(m<2)return m?ji(r[0]):[];for(var y=-1,w=J(m);++y<m;)for(var N=r[y],z=-1;++z<m;)z!=y&&(w[y]=io(w[y]||N,r[z],o,u));return ji(cn(w,1),o,u)}function cf(r,o,u){for(var m=-1,y=r.length,w=o.length,N={};++m<y;){var z=m<w?o[m]:t;u(N,r[m],z)}return N}function sc(r){return Zt(r)?r:[]}function oc(r){return typeof r=="function"?r:Rn}function Qi(r,o){return ft(r)?r:mc(r,o)?[r]:Bf(Rt(r))}var Lv=yt;function er(r,o,u){var m=r.length;return u=u===t?m:u,!o&&u>=m?r:Yn(r,o,u)}var uf=__||function(r){return ln.clearTimeout(r)};function hf(r,o){if(o)return r.slice();var u=r.length,m=Ph?Ph(u):new r.constructor(u);return r.copy(m),m}function ac(r){var o=new r.constructor(r.byteLength);return new Xo(o).set(new Xo(r)),o}function Pv(r,o){var u=o?ac(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.byteLength)}function Iv(r){var o=new r.constructor(r.source,No.exec(r));return o.lastIndex=r.lastIndex,o}function Dv(r){return to?Nt(to.call(r)):{}}function ff(r,o){var u=o?ac(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.length)}function df(r,o){if(r!==o){var u=r!==t,m=r===null,y=r===r,w=Nn(r),N=o!==t,z=o===null,X=o===o,ae=Nn(o);if(!z&&!ae&&!w&&r>o||w&&N&&X&&!z&&!ae||m&&N&&X||!u&&X||!y)return 1;if(!m&&!w&&!ae&&r<o||ae&&u&&y&&!m&&!w||z&&u&&y||!N&&y||!X)return-1}return 0}function Uv(r,o,u){for(var m=-1,y=r.criteria,w=o.criteria,N=y.length,z=u.length;++m<N;){var X=df(y[m],w[m]);if(X){if(m>=z)return X;var ae=u[m];return X*(ae=="desc"?-1:1)}}return r.index-o.index}function pf(r,o,u,m){for(var y=-1,w=r.length,N=u.length,z=-1,X=o.length,ae=en(w-N,0),ue=J(X+ae),ge=!m;++z<X;)ue[z]=o[z];for(;++y<N;)(ge||y<w)&&(ue[u[y]]=r[y]);for(;ae--;)ue[z++]=r[y++];return ue}function mf(r,o,u,m){for(var y=-1,w=r.length,N=-1,z=u.length,X=-1,ae=o.length,ue=en(w-z,0),ge=J(ue+ae),Ie=!m;++y<ue;)ge[y]=r[y];for(var $e=y;++X<ae;)ge[$e+X]=o[X];for(;++N<z;)(Ie||y<w)&&(ge[$e+u[N]]=r[y++]);return ge}function An(r,o){var u=-1,m=r.length;for(o||(o=J(m));++u<m;)o[u]=r[u];return o}function mi(r,o,u,m){var y=!u;u||(u={});for(var w=-1,N=o.length;++w<N;){var z=o[w],X=m?m(u[z],r[z],z,u,r):t;X===t&&(X=r[z]),y?wi(u,z,X):no(u,z,X)}return u}function Nv(r,o){return mi(r,pc(r),o)}function Ov(r,o){return mi(r,Cf(r),o)}function oa(r,o){return function(u,m){var y=ft(u)?Hg:rv,w=o?o():{};return y(u,r,Qe(m,2),w)}}function as(r){return yt(function(o,u){var m=-1,y=u.length,w=y>1?u[y-1]:t,N=y>2?u[2]:t;for(w=r.length>3&&typeof w=="function"?(y--,w):t,N&&vn(u[0],u[1],N)&&(w=y<3?t:w,y=1),o=Nt(o);++m<y;){var z=u[m];z&&r(o,z,m,w)}return o})}function gf(r,o){return function(u,m){if(u==null)return u;if(!wn(u))return r(u,m);for(var y=u.length,w=o?y:-1,N=Nt(u);(o?w--:++w<y)&&m(N[w],w,N)!==!1;);return u}}function _f(r){return function(o,u,m){for(var y=-1,w=Nt(o),N=m(o),z=N.length;z--;){var X=N[r?z:++y];if(u(w[X],X,w)===!1)break}return o}}function Fv(r,o,u){var m=o&v,y=ao(r);function w(){var N=this&&this!==ln&&this instanceof w?y:r;return N.apply(m?u:this,arguments)}return w}function vf(r){return function(o){o=Rt(o);var u=es(o)?ni(o):t,m=u?u[0]:o.charAt(0),y=u?er(u,1).join(""):o.slice(1);return m[r]()+y}}function ls(r){return function(o){return Il(gd(md(o).replace(wg,"")),r,"")}}function ao(r){return function(){var o=arguments;switch(o.length){case 0:return new r;case 1:return new r(o[0]);case 2:return new r(o[0],o[1]);case 3:return new r(o[0],o[1],o[2]);case 4:return new r(o[0],o[1],o[2],o[3]);case 5:return new r(o[0],o[1],o[2],o[3],o[4]);case 6:return new r(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new r(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var u=os(r.prototype),m=r.apply(u,o);return Wt(m)?m:u}}function Bv(r,o,u){var m=ao(r);function y(){for(var w=arguments.length,N=J(w),z=w,X=cs(y);z--;)N[z]=arguments[z];var ae=w<3&&N[0]!==X&&N[w-1]!==X?[]:Zi(N,X);if(w-=ae.length,w<u)return Mf(r,o,aa,y.placeholder,t,N,ae,t,t,u-w);var ue=this&&this!==ln&&this instanceof y?m:r;return In(ue,this,N)}return y}function xf(r){return function(o,u,m){var y=Nt(o);if(!wn(o)){var w=Qe(u,3);o=sn(o),u=function(z){return w(y[z],z,y)}}var N=r(o,u,m);return N>-1?y[w?o[N]:N]:t}}function yf(r){return Ri(function(o){var u=o.length,m=u,y=Xn.prototype.thru;for(r&&o.reverse();m--;){var w=o[m];if(typeof w!="function")throw new Wn(c);if(y&&!N&&ha(w)=="wrapper")var N=new Xn([],!0)}for(m=N?m:u;++m<u;){w=o[m];var z=ha(w),X=z=="wrapper"?fc(w):t;X&&gc(X[0])&&X[1]==(D|M|G|k)&&!X[4].length&&X[9]==1?N=N[ha(X[0])].apply(N,X[3]):N=w.length==1&&gc(w)?N[z]():N.thru(w)}return function(){var ae=arguments,ue=ae[0];if(N&&ae.length==1&&ft(ue))return N.plant(ue).value();for(var ge=0,Ie=u?o[ge].apply(this,ae):ue;++ge<u;)Ie=o[ge].call(this,Ie);return Ie}})}function aa(r,o,u,m,y,w,N,z,X,ae){var ue=o&D,ge=o&v,Ie=o&g,$e=o&(M|C),it=o&he,_t=Ie?t:ao(r);function rt(){for(var Et=arguments.length,Tt=J(Et),On=Et;On--;)Tt[On]=arguments[On];if($e)var xn=cs(rt),Fn=Kg(Tt,xn);if(m&&(Tt=pf(Tt,m,y,$e)),w&&(Tt=mf(Tt,w,N,$e)),Et-=Fn,$e&&Et<ae){var Kt=Zi(Tt,xn);return Mf(r,o,aa,rt.placeholder,u,Tt,Kt,z,X,ae-Et)}var si=ge?u:this,Di=Ie?si[r]:r;return Et=Tt.length,z?Tt=r0(Tt,z):it&&Et>1&&Tt.reverse(),ue&&X<Et&&(Tt.length=X),this&&this!==ln&&this instanceof rt&&(Di=_t||ao(Di)),Di.apply(si,Tt)}return rt}function Sf(r,o){return function(u,m){return fv(u,r,o(m),{})}}function la(r,o){return function(u,m){var y;if(u===t&&m===t)return o;if(u!==t&&(y=u),m!==t){if(y===t)return m;typeof u=="string"||typeof m=="string"?(u=Un(u),m=Un(m)):(u=of(u),m=of(m)),y=r(u,m)}return y}}function lc(r){return Ri(function(o){return o=Vt(o,Dn(Qe())),yt(function(u){var m=this;return r(o,function(y){return In(y,m,u)})})})}function ca(r,o){o=o===t?" ":Un(o);var u=o.length;if(u<2)return u?tc(o,r):o;var m=tc(o,Zo(r/ts(o)));return es(o)?er(ni(m),0,r).join(""):m.slice(0,r)}function zv(r,o,u,m){var y=o&v,w=ao(r);function N(){for(var z=-1,X=arguments.length,ae=-1,ue=m.length,ge=J(ue+X),Ie=this&&this!==ln&&this instanceof N?w:r;++ae<ue;)ge[ae]=m[ae];for(;X--;)ge[ae++]=arguments[++z];return In(Ie,y?u:this,ge)}return N}function Ef(r){return function(o,u,m){return m&&typeof m!="number"&&vn(o,u,m)&&(u=m=t),o=Ii(o),u===t?(u=o,o=0):u=Ii(u),m=m===t?o<u?1:-1:Ii(m),bv(o,u,m,r)}}function ua(r){return function(o,u){return typeof o=="string"&&typeof u=="string"||(o=Zn(o),u=Zn(u)),r(o,u)}}function Mf(r,o,u,m,y,w,N,z,X,ae){var ue=o&M,ge=ue?N:t,Ie=ue?t:N,$e=ue?w:t,it=ue?t:w;o|=ue?G:F,o&=~(ue?F:G),o&I||(o&=~(v|g));var _t=[r,o,y,$e,ge,it,Ie,z,X,ae],rt=u.apply(t,_t);return gc(r)&&Nf(rt,_t),rt.placeholder=m,Of(rt,r,o)}function cc(r){var o=Qt[r];return function(u,m){if(u=Zn(u),m=m==null?0:dn(mt(m),292),m&&Nh(u)){var y=(Rt(u)+"e").split("e"),w=o(y[0]+"e"+(+y[1]+m));return y=(Rt(w)+"e").split("e"),+(y[0]+"e"+(+y[1]-m))}return o(u)}}var Gv=rs&&1/zo(new rs([,-0]))[1]==le?function(r){return new rs(r)}:Pc;function bf(r){return function(o){var u=pn(o);return u==ie?zl(o):u==L?i_(o):Zg(o,r(o))}}function Ci(r,o,u,m,y,w,N,z){var X=o&g;if(!X&&typeof r!="function")throw new Wn(c);var ae=m?m.length:0;if(ae||(o&=~(G|F),m=y=t),N=N===t?N:en(mt(N),0),z=z===t?z:mt(z),ae-=y?y.length:0,o&F){var ue=m,ge=y;m=y=t}var Ie=X?t:fc(r),$e=[r,o,u,m,y,ue,ge,w,N,z];if(Ie&&t0($e,Ie),r=$e[0],o=$e[1],u=$e[2],m=$e[3],y=$e[4],z=$e[9]=$e[9]===t?X?0:r.length:en($e[9]-ae,0),!z&&o&(M|C)&&(o&=~(M|C)),!o||o==v)var it=Fv(r,o,u);else o==M||o==C?it=Bv(r,o,z):(o==G||o==(v|G))&&!y.length?it=zv(r,o,u,m):it=aa.apply(t,$e);var _t=Ie?rf:Nf;return Of(_t(it,$e),r,o)}function Tf(r,o,u,m){return r===t||ri(r,is[u])&&!It.call(m,u)?o:r}function Af(r,o,u,m,y,w){return Wt(r)&&Wt(o)&&(w.set(o,r),ia(r,o,t,Af,w),w.delete(o)),r}function Hv(r){return uo(r)?t:r}function wf(r,o,u,m,y,w){var N=u&S,z=r.length,X=o.length;if(z!=X&&!(N&&X>z))return!1;var ae=w.get(r),ue=w.get(o);if(ae&&ue)return ae==o&&ue==r;var ge=-1,Ie=!0,$e=u&E?new yr:t;for(w.set(r,o),w.set(o,r);++ge<z;){var it=r[ge],_t=o[ge];if(m)var rt=N?m(_t,it,ge,o,r,w):m(it,_t,ge,r,o,w);if(rt!==t){if(rt)continue;Ie=!1;break}if($e){if(!Dl(o,function(Et,Tt){if(!Ks($e,Tt)&&(it===Et||y(it,Et,u,m,w)))return $e.push(Tt)})){Ie=!1;break}}else if(!(it===_t||y(it,_t,u,m,w))){Ie=!1;break}}return w.delete(r),w.delete(o),Ie}function kv(r,o,u,m,y,w,N){switch(u){case Ze:if(r.byteLength!=o.byteLength||r.byteOffset!=o.byteOffset)return!1;r=r.buffer,o=o.buffer;case je:return!(r.byteLength!=o.byteLength||!w(new Xo(r),new Xo(o)));case ke:case Fe:case Ee:return ri(+r,+o);case Xe:return r.name==o.name&&r.message==o.message;case ot:case b:return r==o+"";case ie:var z=zl;case L:var X=m&S;if(z||(z=zo),r.size!=o.size&&!X)return!1;var ae=N.get(r);if(ae)return ae==o;m|=E,N.set(r,o);var ue=wf(z(r),z(o),m,y,w,N);return N.delete(r),ue;case ee:if(to)return to.call(r)==to.call(o)}return!1}function Vv(r,o,u,m,y,w){var N=u&S,z=uc(r),X=z.length,ae=uc(o),ue=ae.length;if(X!=ue&&!N)return!1;for(var ge=X;ge--;){var Ie=z[ge];if(!(N?Ie in o:It.call(o,Ie)))return!1}var $e=w.get(r),it=w.get(o);if($e&&it)return $e==o&&it==r;var _t=!0;w.set(r,o),w.set(o,r);for(var rt=N;++ge<X;){Ie=z[ge];var Et=r[Ie],Tt=o[Ie];if(m)var On=N?m(Tt,Et,Ie,o,r,w):m(Et,Tt,Ie,r,o,w);if(!(On===t?Et===Tt||y(Et,Tt,u,m,w):On)){_t=!1;break}rt||(rt=Ie=="constructor")}if(_t&&!rt){var xn=r.constructor,Fn=o.constructor;xn!=Fn&&"constructor"in r&&"constructor"in o&&!(typeof xn=="function"&&xn instanceof xn&&typeof Fn=="function"&&Fn instanceof Fn)&&(_t=!1)}return w.delete(r),w.delete(o),_t}function Ri(r){return vc(Df(r,t,kf),r+"")}function uc(r){return qh(r,sn,pc)}function hc(r){return qh(r,Cn,Cf)}var fc=Jo?function(r){return Jo.get(r)}:Pc;function ha(r){for(var o=r.name+"",u=ss[o],m=It.call(ss,o)?u.length:0;m--;){var y=u[m],w=y.func;if(w==null||w==r)return y.name}return o}function cs(r){var o=It.call(A,"placeholder")?A:r;return o.placeholder}function Qe(){var r=A.iteratee||Rc;return r=r===Rc?Zh:r,arguments.length?r(arguments[0],arguments[1]):r}function fa(r,o){var u=r.__data__;return Jv(o)?u[typeof o=="string"?"string":"hash"]:u.map}function dc(r){for(var o=sn(r),u=o.length;u--;){var m=o[u],y=r[m];o[u]=[m,y,Pf(y)]}return o}function Mr(r,o){var u=e_(r,o);return $h(u)?u:t}function Wv(r){var o=It.call(r,vr),u=r[vr];try{r[vr]=t;var m=!0}catch{}var y=Vo.call(r);return m&&(o?r[vr]=u:delete r[vr]),y}var pc=Hl?function(r){return r==null?[]:(r=Nt(r),Yi(Hl(r),function(o){return Dh.call(r,o)}))}:Ic,Cf=Hl?function(r){for(var o=[];r;)$i(o,pc(r)),r=qo(r);return o}:Ic,pn=_n;(kl&&pn(new kl(new ArrayBuffer(1)))!=Ze||js&&pn(new js)!=ie||Vl&&pn(Vl.resolve())!=Ue||rs&&pn(new rs)!=L||Qs&&pn(new Qs)!=ye)&&(pn=function(r){var o=_n(r),u=o==Pe?r.constructor:t,m=u?br(u):"";if(m)switch(m){case A_:return Ze;case w_:return ie;case C_:return Ue;case R_:return L;case L_:return ye}return o});function Xv(r,o,u){for(var m=-1,y=u.length;++m<y;){var w=u[m],N=w.size;switch(w.type){case"drop":r+=N;break;case"dropRight":o-=N;break;case"take":o=dn(o,r+N);break;case"takeRight":r=en(r,o-N);break}}return{start:r,end:o}}function qv(r){var o=r.match(Io);return o?o[1].split($r):[]}function Rf(r,o,u){o=Qi(o,r);for(var m=-1,y=o.length,w=!1;++m<y;){var N=gi(o[m]);if(!(w=r!=null&&u(r,N)))break;r=r[N]}return w||++m!=y?w:(y=r==null?0:r.length,!!y&&xa(y)&&Li(N,y)&&(ft(r)||Tr(r)))}function Yv(r){var o=r.length,u=new r.constructor(o);return o&&typeof r[0]=="string"&&It.call(r,"index")&&(u.index=r.index,u.input=r.input),u}function Lf(r){return typeof r.constructor=="function"&&!lo(r)?os(qo(r)):{}}function $v(r,o,u){var m=r.constructor;switch(o){case je:return ac(r);case ke:case Fe:return new m(+r);case Ze:return Pv(r,u);case we:case Re:case et:case Te:case Ot:case ut:case Ke:case Ge:case qe:return ff(r,u);case ie:return new m;case Ee:case b:return new m(r);case ot:return Iv(r);case L:return new m;case ee:return Dv(r)}}function Zv(r,o){var u=o.length;if(!u)return r;var m=u-1;return o[m]=(u>1?"& ":"")+o[m],o=o.join(u>2?", ":" "),r.replace(Yr,`{
/* [wrapped with `+o+`] */
`)}function Kv(r){return ft(r)||Tr(r)||!!(Uh&&r&&r[Uh])}function Li(r,o){var u=typeof r;return o=o??ne,!!o&&(u=="number"||u!="symbol"&&Z.test(r))&&r>-1&&r%1==0&&r<o}function vn(r,o,u){if(!Wt(u))return!1;var m=typeof o;return(m=="number"?wn(u)&&Li(o,u.length):m=="string"&&o in u)?ri(u[o],r):!1}function mc(r,o){if(ft(r))return!1;var u=typeof r;return u=="number"||u=="symbol"||u=="boolean"||r==null||Nn(r)?!0:Ht.test(r)||!Lt.test(r)||o!=null&&r in Nt(o)}function Jv(r){var o=typeof r;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?r!=="__proto__":r===null}function gc(r){var o=ha(r),u=A[o];if(typeof u!="function"||!(o in Mt.prototype))return!1;if(r===u)return!0;var m=fc(u);return!!m&&r===m[0]}function jv(r){return!!Lh&&Lh in r}var Qv=Ho?Pi:Dc;function lo(r){var o=r&&r.constructor,u=typeof o=="function"&&o.prototype||is;return r===u}function Pf(r){return r===r&&!Wt(r)}function If(r,o){return function(u){return u==null?!1:u[r]===o&&(o!==t||r in Nt(u))}}function e0(r){var o=_a(r,function(m){return u.size===f&&u.clear(),m}),u=o.cache;return o}function t0(r,o){var u=r[1],m=o[1],y=u|m,w=y<(v|g|D),N=m==D&&u==M||m==D&&u==k&&r[7].length<=o[8]||m==(D|k)&&o[7].length<=o[8]&&u==M;if(!(w||N))return r;m&v&&(r[2]=o[2],y|=u&v?0:I);var z=o[3];if(z){var X=r[3];r[3]=X?pf(X,z,o[4]):z,r[4]=X?Zi(r[3],d):o[4]}return z=o[5],z&&(X=r[5],r[5]=X?mf(X,z,o[6]):z,r[6]=X?Zi(r[5],d):o[6]),z=o[7],z&&(r[7]=z),m&D&&(r[8]=r[8]==null?o[8]:dn(r[8],o[8])),r[9]==null&&(r[9]=o[9]),r[0]=o[0],r[1]=y,r}function n0(r){var o=[];if(r!=null)for(var u in Nt(r))o.push(u);return o}function i0(r){return Vo.call(r)}function Df(r,o,u){return o=en(o===t?r.length-1:o,0),function(){for(var m=arguments,y=-1,w=en(m.length-o,0),N=J(w);++y<w;)N[y]=m[o+y];y=-1;for(var z=J(o+1);++y<o;)z[y]=m[y];return z[o]=u(N),In(r,this,z)}}function Uf(r,o){return o.length<2?r:Er(r,Yn(o,0,-1))}function r0(r,o){for(var u=r.length,m=dn(o.length,u),y=An(r);m--;){var w=o[m];r[m]=Li(w,u)?y[w]:t}return r}function _c(r,o){if(!(o==="constructor"&&typeof r[o]=="function")&&o!="__proto__")return r[o]}var Nf=Ff(rf),co=x_||function(r,o){return ln.setTimeout(r,o)},vc=Ff(wv);function Of(r,o,u){var m=o+"";return vc(r,Zv(m,s0(qv(m),u)))}function Ff(r){var o=0,u=0;return function(){var m=M_(),y=ve-(m-u);if(u=m,y>0){if(++o>=be)return arguments[0]}else o=0;return r.apply(t,arguments)}}function da(r,o){var u=-1,m=r.length,y=m-1;for(o=o===t?m:o;++u<o;){var w=ec(u,y),N=r[w];r[w]=r[u],r[u]=N}return r.length=o,r}var Bf=e0(function(r){var o=[];return r.charCodeAt(0)===46&&o.push(""),r.replace(At,function(u,m,y,w){o.push(y?w.replace(bl,"$1"):m||u)}),o});function gi(r){if(typeof r=="string"||Nn(r))return r;var o=r+"";return o=="0"&&1/r==-le?"-0":o}function br(r){if(r!=null){try{return ko.call(r)}catch{}try{return r+""}catch{}}return""}function s0(r,o){return Vn(te,function(u){var m="_."+u[0];o&u[1]&&!Fo(r,m)&&r.push(m)}),r.sort()}function zf(r){if(r instanceof Mt)return r.clone();var o=new Xn(r.__wrapped__,r.__chain__);return o.__actions__=An(r.__actions__),o.__index__=r.__index__,o.__values__=r.__values__,o}function o0(r,o,u){(u?vn(r,o,u):o===t)?o=1:o=en(mt(o),0);var m=r==null?0:r.length;if(!m||o<1)return[];for(var y=0,w=0,N=J(Zo(m/o));y<m;)N[w++]=Yn(r,y,y+=o);return N}function a0(r){for(var o=-1,u=r==null?0:r.length,m=0,y=[];++o<u;){var w=r[o];w&&(y[m++]=w)}return y}function l0(){var r=arguments.length;if(!r)return[];for(var o=J(r-1),u=arguments[0],m=r;m--;)o[m-1]=arguments[m];return $i(ft(u)?An(u):[u],cn(o,1))}var c0=yt(function(r,o){return Zt(r)?io(r,cn(o,1,Zt,!0)):[]}),u0=yt(function(r,o){var u=$n(o);return Zt(u)&&(u=t),Zt(r)?io(r,cn(o,1,Zt,!0),Qe(u,2)):[]}),h0=yt(function(r,o){var u=$n(o);return Zt(u)&&(u=t),Zt(r)?io(r,cn(o,1,Zt,!0),t,u):[]});function f0(r,o,u){var m=r==null?0:r.length;return m?(o=u||o===t?1:mt(o),Yn(r,o<0?0:o,m)):[]}function d0(r,o,u){var m=r==null?0:r.length;return m?(o=u||o===t?1:mt(o),o=m-o,Yn(r,0,o<0?0:o)):[]}function p0(r,o){return r&&r.length?sa(r,Qe(o,3),!0,!0):[]}function m0(r,o){return r&&r.length?sa(r,Qe(o,3),!0):[]}function g0(r,o,u,m){var y=r==null?0:r.length;return y?(u&&typeof u!="number"&&vn(r,o,u)&&(u=0,m=y),lv(r,o,u,m)):[]}function Gf(r,o,u){var m=r==null?0:r.length;if(!m)return-1;var y=u==null?0:mt(u);return y<0&&(y=en(m+y,0)),Bo(r,Qe(o,3),y)}function Hf(r,o,u){var m=r==null?0:r.length;if(!m)return-1;var y=m-1;return u!==t&&(y=mt(u),y=u<0?en(m+y,0):dn(y,m-1)),Bo(r,Qe(o,3),y,!0)}function kf(r){var o=r==null?0:r.length;return o?cn(r,1):[]}function _0(r){var o=r==null?0:r.length;return o?cn(r,le):[]}function v0(r,o){var u=r==null?0:r.length;return u?(o=o===t?1:mt(o),cn(r,o)):[]}function x0(r){for(var o=-1,u=r==null?0:r.length,m={};++o<u;){var y=r[o];m[y[0]]=y[1]}return m}function Vf(r){return r&&r.length?r[0]:t}function y0(r,o,u){var m=r==null?0:r.length;if(!m)return-1;var y=u==null?0:mt(u);return y<0&&(y=en(m+y,0)),Qr(r,o,y)}function S0(r){var o=r==null?0:r.length;return o?Yn(r,0,-1):[]}var E0=yt(function(r){var o=Vt(r,sc);return o.length&&o[0]===r[0]?Zl(o):[]}),M0=yt(function(r){var o=$n(r),u=Vt(r,sc);return o===$n(u)?o=t:u.pop(),u.length&&u[0]===r[0]?Zl(u,Qe(o,2)):[]}),b0=yt(function(r){var o=$n(r),u=Vt(r,sc);return o=typeof o=="function"?o:t,o&&u.pop(),u.length&&u[0]===r[0]?Zl(u,t,o):[]});function T0(r,o){return r==null?"":S_.call(r,o)}function $n(r){var o=r==null?0:r.length;return o?r[o-1]:t}function A0(r,o,u){var m=r==null?0:r.length;if(!m)return-1;var y=m;return u!==t&&(y=mt(u),y=y<0?en(m+y,0):dn(y,m-1)),o===o?s_(r,o,y):Bo(r,Eh,y,!0)}function w0(r,o){return r&&r.length?Qh(r,mt(o)):t}var C0=yt(Wf);function Wf(r,o){return r&&r.length&&o&&o.length?Ql(r,o):r}function R0(r,o,u){return r&&r.length&&o&&o.length?Ql(r,o,Qe(u,2)):r}function L0(r,o,u){return r&&r.length&&o&&o.length?Ql(r,o,t,u):r}var P0=Ri(function(r,o){var u=r==null?0:r.length,m=Xl(r,o);return nf(r,Vt(o,function(y){return Li(y,u)?+y:y}).sort(df)),m});function I0(r,o){var u=[];if(!(r&&r.length))return u;var m=-1,y=[],w=r.length;for(o=Qe(o,3);++m<w;){var N=r[m];o(N,m,r)&&(u.push(N),y.push(m))}return nf(r,y),u}function xc(r){return r==null?r:T_.call(r)}function D0(r,o,u){var m=r==null?0:r.length;return m?(u&&typeof u!="number"&&vn(r,o,u)?(o=0,u=m):(o=o==null?0:mt(o),u=u===t?m:mt(u)),Yn(r,o,u)):[]}function U0(r,o){return ra(r,o)}function N0(r,o,u){return nc(r,o,Qe(u,2))}function O0(r,o){var u=r==null?0:r.length;if(u){var m=ra(r,o);if(m<u&&ri(r[m],o))return m}return-1}function F0(r,o){return ra(r,o,!0)}function B0(r,o,u){return nc(r,o,Qe(u,2),!0)}function z0(r,o){var u=r==null?0:r.length;if(u){var m=ra(r,o,!0)-1;if(ri(r[m],o))return m}return-1}function G0(r){return r&&r.length?sf(r):[]}function H0(r,o){return r&&r.length?sf(r,Qe(o,2)):[]}function k0(r){var o=r==null?0:r.length;return o?Yn(r,1,o):[]}function V0(r,o,u){return r&&r.length?(o=u||o===t?1:mt(o),Yn(r,0,o<0?0:o)):[]}function W0(r,o,u){var m=r==null?0:r.length;return m?(o=u||o===t?1:mt(o),o=m-o,Yn(r,o<0?0:o,m)):[]}function X0(r,o){return r&&r.length?sa(r,Qe(o,3),!1,!0):[]}function q0(r,o){return r&&r.length?sa(r,Qe(o,3)):[]}var Y0=yt(function(r){return ji(cn(r,1,Zt,!0))}),$0=yt(function(r){var o=$n(r);return Zt(o)&&(o=t),ji(cn(r,1,Zt,!0),Qe(o,2))}),Z0=yt(function(r){var o=$n(r);return o=typeof o=="function"?o:t,ji(cn(r,1,Zt,!0),t,o)});function K0(r){return r&&r.length?ji(r):[]}function J0(r,o){return r&&r.length?ji(r,Qe(o,2)):[]}function j0(r,o){return o=typeof o=="function"?o:t,r&&r.length?ji(r,t,o):[]}function yc(r){if(!(r&&r.length))return[];var o=0;return r=Yi(r,function(u){if(Zt(u))return o=en(u.length,o),!0}),Fl(o,function(u){return Vt(r,Ul(u))})}function Xf(r,o){if(!(r&&r.length))return[];var u=yc(r);return o==null?u:Vt(u,function(m){return In(o,t,m)})}var Q0=yt(function(r,o){return Zt(r)?io(r,o):[]}),ex=yt(function(r){return rc(Yi(r,Zt))}),tx=yt(function(r){var o=$n(r);return Zt(o)&&(o=t),rc(Yi(r,Zt),Qe(o,2))}),nx=yt(function(r){var o=$n(r);return o=typeof o=="function"?o:t,rc(Yi(r,Zt),t,o)}),ix=yt(yc);function rx(r,o){return cf(r||[],o||[],no)}function sx(r,o){return cf(r||[],o||[],oo)}var ox=yt(function(r){var o=r.length,u=o>1?r[o-1]:t;return u=typeof u=="function"?(r.pop(),u):t,Xf(r,u)});function qf(r){var o=A(r);return o.__chain__=!0,o}function ax(r,o){return o(r),r}function pa(r,o){return o(r)}var lx=Ri(function(r){var o=r.length,u=o?r[0]:0,m=this.__wrapped__,y=function(w){return Xl(w,r)};return o>1||this.__actions__.length||!(m instanceof Mt)||!Li(u)?this.thru(y):(m=m.slice(u,+u+(o?1:0)),m.__actions__.push({func:pa,args:[y],thisArg:t}),new Xn(m,this.__chain__).thru(function(w){return o&&!w.length&&w.push(t),w}))});function cx(){return qf(this)}function ux(){return new Xn(this.value(),this.__chain__)}function hx(){this.__values__===t&&(this.__values__=od(this.value()));var r=this.__index__>=this.__values__.length,o=r?t:this.__values__[this.__index__++];return{done:r,value:o}}function fx(){return this}function dx(r){for(var o,u=this;u instanceof Qo;){var m=zf(u);m.__index__=0,m.__values__=t,o?y.__wrapped__=m:o=m;var y=m;u=u.__wrapped__}return y.__wrapped__=r,o}function px(){var r=this.__wrapped__;if(r instanceof Mt){var o=r;return this.__actions__.length&&(o=new Mt(this)),o=o.reverse(),o.__actions__.push({func:pa,args:[xc],thisArg:t}),new Xn(o,this.__chain__)}return this.thru(xc)}function mx(){return lf(this.__wrapped__,this.__actions__)}var gx=oa(function(r,o,u){It.call(r,u)?++r[u]:wi(r,u,1)});function _x(r,o,u){var m=ft(r)?yh:av;return u&&vn(r,o,u)&&(o=t),m(r,Qe(o,3))}function vx(r,o){var u=ft(r)?Yi:Wh;return u(r,Qe(o,3))}var xx=xf(Gf),yx=xf(Hf);function Sx(r,o){return cn(ma(r,o),1)}function Ex(r,o){return cn(ma(r,o),le)}function Mx(r,o,u){return u=u===t?1:mt(u),cn(ma(r,o),u)}function Yf(r,o){var u=ft(r)?Vn:Ji;return u(r,Qe(o,3))}function $f(r,o){var u=ft(r)?kg:Vh;return u(r,Qe(o,3))}var bx=oa(function(r,o,u){It.call(r,u)?r[u].push(o):wi(r,u,[o])});function Tx(r,o,u,m){r=wn(r)?r:hs(r),u=u&&!m?mt(u):0;var y=r.length;return u<0&&(u=en(y+u,0)),ya(r)?u<=y&&r.indexOf(o,u)>-1:!!y&&Qr(r,o,u)>-1}var Ax=yt(function(r,o,u){var m=-1,y=typeof o=="function",w=wn(r)?J(r.length):[];return Ji(r,function(N){w[++m]=y?In(o,N,u):ro(N,o,u)}),w}),wx=oa(function(r,o,u){wi(r,u,o)});function ma(r,o){var u=ft(r)?Vt:Kh;return u(r,Qe(o,3))}function Cx(r,o,u,m){return r==null?[]:(ft(o)||(o=o==null?[]:[o]),u=m?t:u,ft(u)||(u=u==null?[]:[u]),ef(r,o,u))}var Rx=oa(function(r,o,u){r[u?0:1].push(o)},function(){return[[],[]]});function Lx(r,o,u){var m=ft(r)?Il:bh,y=arguments.length<3;return m(r,Qe(o,4),u,y,Ji)}function Px(r,o,u){var m=ft(r)?Vg:bh,y=arguments.length<3;return m(r,Qe(o,4),u,y,Vh)}function Ix(r,o){var u=ft(r)?Yi:Wh;return u(r,va(Qe(o,3)))}function Dx(r){var o=ft(r)?zh:Tv;return o(r)}function Ux(r,o,u){(u?vn(r,o,u):o===t)?o=1:o=mt(o);var m=ft(r)?nv:Av;return m(r,o)}function Nx(r){var o=ft(r)?iv:Cv;return o(r)}function Ox(r){if(r==null)return 0;if(wn(r))return ya(r)?ts(r):r.length;var o=pn(r);return o==ie||o==L?r.size:Jl(r).length}function Fx(r,o,u){var m=ft(r)?Dl:Rv;return u&&vn(r,o,u)&&(o=t),m(r,Qe(o,3))}var Bx=yt(function(r,o){if(r==null)return[];var u=o.length;return u>1&&vn(r,o[0],o[1])?o=[]:u>2&&vn(o[0],o[1],o[2])&&(o=[o[0]]),ef(r,cn(o,1),[])}),ga=v_||function(){return ln.Date.now()};function zx(r,o){if(typeof o!="function")throw new Wn(c);return r=mt(r),function(){if(--r<1)return o.apply(this,arguments)}}function Zf(r,o,u){return o=u?t:o,o=r&&o==null?r.length:o,Ci(r,D,t,t,t,t,o)}function Kf(r,o){var u;if(typeof o!="function")throw new Wn(c);return r=mt(r),function(){return--r>0&&(u=o.apply(this,arguments)),r<=1&&(o=t),u}}var Sc=yt(function(r,o,u){var m=v;if(u.length){var y=Zi(u,cs(Sc));m|=G}return Ci(r,m,o,u,y)}),Jf=yt(function(r,o,u){var m=v|g;if(u.length){var y=Zi(u,cs(Jf));m|=G}return Ci(o,m,r,u,y)});function jf(r,o,u){o=u?t:o;var m=Ci(r,M,t,t,t,t,t,o);return m.placeholder=jf.placeholder,m}function Qf(r,o,u){o=u?t:o;var m=Ci(r,C,t,t,t,t,t,o);return m.placeholder=Qf.placeholder,m}function ed(r,o,u){var m,y,w,N,z,X,ae=0,ue=!1,ge=!1,Ie=!0;if(typeof r!="function")throw new Wn(c);o=Zn(o)||0,Wt(u)&&(ue=!!u.leading,ge="maxWait"in u,w=ge?en(Zn(u.maxWait)||0,o):w,Ie="trailing"in u?!!u.trailing:Ie);function $e(Kt){var si=m,Di=y;return m=y=t,ae=Kt,N=r.apply(Di,si),N}function it(Kt){return ae=Kt,z=co(Et,o),ue?$e(Kt):N}function _t(Kt){var si=Kt-X,Di=Kt-ae,xd=o-si;return ge?dn(xd,w-Di):xd}function rt(Kt){var si=Kt-X,Di=Kt-ae;return X===t||si>=o||si<0||ge&&Di>=w}function Et(){var Kt=ga();if(rt(Kt))return Tt(Kt);z=co(Et,_t(Kt))}function Tt(Kt){return z=t,Ie&&m?$e(Kt):(m=y=t,N)}function On(){z!==t&&uf(z),ae=0,m=X=y=z=t}function xn(){return z===t?N:Tt(ga())}function Fn(){var Kt=ga(),si=rt(Kt);if(m=arguments,y=this,X=Kt,si){if(z===t)return it(X);if(ge)return uf(z),z=co(Et,o),$e(X)}return z===t&&(z=co(Et,o)),N}return Fn.cancel=On,Fn.flush=xn,Fn}var Gx=yt(function(r,o){return kh(r,1,o)}),Hx=yt(function(r,o,u){return kh(r,Zn(o)||0,u)});function kx(r){return Ci(r,he)}function _a(r,o){if(typeof r!="function"||o!=null&&typeof o!="function")throw new Wn(c);var u=function(){var m=arguments,y=o?o.apply(this,m):m[0],w=u.cache;if(w.has(y))return w.get(y);var N=r.apply(this,m);return u.cache=w.set(y,N)||w,N};return u.cache=new(_a.Cache||Ai),u}_a.Cache=Ai;function va(r){if(typeof r!="function")throw new Wn(c);return function(){var o=arguments;switch(o.length){case 0:return!r.call(this);case 1:return!r.call(this,o[0]);case 2:return!r.call(this,o[0],o[1]);case 3:return!r.call(this,o[0],o[1],o[2])}return!r.apply(this,o)}}function Vx(r){return Kf(2,r)}var Wx=Lv(function(r,o){o=o.length==1&&ft(o[0])?Vt(o[0],Dn(Qe())):Vt(cn(o,1),Dn(Qe()));var u=o.length;return yt(function(m){for(var y=-1,w=dn(m.length,u);++y<w;)m[y]=o[y].call(this,m[y]);return In(r,this,m)})}),Ec=yt(function(r,o){var u=Zi(o,cs(Ec));return Ci(r,G,t,o,u)}),td=yt(function(r,o){var u=Zi(o,cs(td));return Ci(r,F,t,o,u)}),Xx=Ri(function(r,o){return Ci(r,k,t,t,t,o)});function qx(r,o){if(typeof r!="function")throw new Wn(c);return o=o===t?o:mt(o),yt(r,o)}function Yx(r,o){if(typeof r!="function")throw new Wn(c);return o=o==null?0:en(mt(o),0),yt(function(u){var m=u[o],y=er(u,0,o);return m&&$i(y,m),In(r,this,y)})}function $x(r,o,u){var m=!0,y=!0;if(typeof r!="function")throw new Wn(c);return Wt(u)&&(m="leading"in u?!!u.leading:m,y="trailing"in u?!!u.trailing:y),ed(r,o,{leading:m,maxWait:o,trailing:y})}function Zx(r){return Zf(r,1)}function Kx(r,o){return Ec(oc(o),r)}function Jx(){if(!arguments.length)return[];var r=arguments[0];return ft(r)?r:[r]}function jx(r){return qn(r,x)}function Qx(r,o){return o=typeof o=="function"?o:t,qn(r,x,o)}function ey(r){return qn(r,p|x)}function ty(r,o){return o=typeof o=="function"?o:t,qn(r,p|x,o)}function ny(r,o){return o==null||Hh(r,o,sn(o))}function ri(r,o){return r===o||r!==r&&o!==o}var iy=ua($l),ry=ua(function(r,o){return r>=o}),Tr=Yh(function(){return arguments}())?Yh:function(r){return Yt(r)&&It.call(r,"callee")&&!Dh.call(r,"callee")},ft=J.isArray,sy=ph?Dn(ph):dv;function wn(r){return r!=null&&xa(r.length)&&!Pi(r)}function Zt(r){return Yt(r)&&wn(r)}function oy(r){return r===!0||r===!1||Yt(r)&&_n(r)==ke}var tr=y_||Dc,ay=mh?Dn(mh):pv;function ly(r){return Yt(r)&&r.nodeType===1&&!uo(r)}function cy(r){if(r==null)return!0;if(wn(r)&&(ft(r)||typeof r=="string"||typeof r.splice=="function"||tr(r)||us(r)||Tr(r)))return!r.length;var o=pn(r);if(o==ie||o==L)return!r.size;if(lo(r))return!Jl(r).length;for(var u in r)if(It.call(r,u))return!1;return!0}function uy(r,o){return so(r,o)}function hy(r,o,u){u=typeof u=="function"?u:t;var m=u?u(r,o):t;return m===t?so(r,o,t,u):!!m}function Mc(r){if(!Yt(r))return!1;var o=_n(r);return o==Xe||o==at||typeof r.message=="string"&&typeof r.name=="string"&&!uo(r)}function fy(r){return typeof r=="number"&&Nh(r)}function Pi(r){if(!Wt(r))return!1;var o=_n(r);return o==O||o==Ae||o==Je||o==Ve}function nd(r){return typeof r=="number"&&r==mt(r)}function xa(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=ne}function Wt(r){var o=typeof r;return r!=null&&(o=="object"||o=="function")}function Yt(r){return r!=null&&typeof r=="object"}var id=gh?Dn(gh):gv;function dy(r,o){return r===o||Kl(r,o,dc(o))}function py(r,o,u){return u=typeof u=="function"?u:t,Kl(r,o,dc(o),u)}function my(r){return rd(r)&&r!=+r}function gy(r){if(Qv(r))throw new ct(a);return $h(r)}function _y(r){return r===null}function vy(r){return r==null}function rd(r){return typeof r=="number"||Yt(r)&&_n(r)==Ee}function uo(r){if(!Yt(r)||_n(r)!=Pe)return!1;var o=qo(r);if(o===null)return!0;var u=It.call(o,"constructor")&&o.constructor;return typeof u=="function"&&u instanceof u&&ko.call(u)==p_}var bc=_h?Dn(_h):_v;function xy(r){return nd(r)&&r>=-ne&&r<=ne}var sd=vh?Dn(vh):vv;function ya(r){return typeof r=="string"||!ft(r)&&Yt(r)&&_n(r)==b}function Nn(r){return typeof r=="symbol"||Yt(r)&&_n(r)==ee}var us=xh?Dn(xh):xv;function yy(r){return r===t}function Sy(r){return Yt(r)&&pn(r)==ye}function Ey(r){return Yt(r)&&_n(r)==me}var My=ua(jl),by=ua(function(r,o){return r<=o});function od(r){if(!r)return[];if(wn(r))return ya(r)?ni(r):An(r);if(Js&&r[Js])return n_(r[Js]());var o=pn(r),u=o==ie?zl:o==L?zo:hs;return u(r)}function Ii(r){if(!r)return r===0?r:0;if(r=Zn(r),r===le||r===-le){var o=r<0?-1:1;return o*ce}return r===r?r:0}function mt(r){var o=Ii(r),u=o%1;return o===o?u?o-u:o:0}function ad(r){return r?Sr(mt(r),0,xe):0}function Zn(r){if(typeof r=="number")return r;if(Nn(r))return pe;if(Wt(r)){var o=typeof r.valueOf=="function"?r.valueOf():r;r=Wt(o)?o+"":o}if(typeof r!="string")return r===0?r:+r;r=Th(r);var u=q.test(r);return u||j.test(r)?zg(r.slice(2),u?2:8):R.test(r)?pe:+r}function ld(r){return mi(r,Cn(r))}function Ty(r){return r?Sr(mt(r),-ne,ne):r===0?r:0}function Rt(r){return r==null?"":Un(r)}var Ay=as(function(r,o){if(lo(o)||wn(o)){mi(o,sn(o),r);return}for(var u in o)It.call(o,u)&&no(r,u,o[u])}),cd=as(function(r,o){mi(o,Cn(o),r)}),Sa=as(function(r,o,u,m){mi(o,Cn(o),r,m)}),wy=as(function(r,o,u,m){mi(o,sn(o),r,m)}),Cy=Ri(Xl);function Ry(r,o){var u=os(r);return o==null?u:Gh(u,o)}var Ly=yt(function(r,o){r=Nt(r);var u=-1,m=o.length,y=m>2?o[2]:t;for(y&&vn(o[0],o[1],y)&&(m=1);++u<m;)for(var w=o[u],N=Cn(w),z=-1,X=N.length;++z<X;){var ae=N[z],ue=r[ae];(ue===t||ri(ue,is[ae])&&!It.call(r,ae))&&(r[ae]=w[ae])}return r}),Py=yt(function(r){return r.push(t,Af),In(ud,t,r)});function Iy(r,o){return Sh(r,Qe(o,3),pi)}function Dy(r,o){return Sh(r,Qe(o,3),Yl)}function Uy(r,o){return r==null?r:ql(r,Qe(o,3),Cn)}function Ny(r,o){return r==null?r:Xh(r,Qe(o,3),Cn)}function Oy(r,o){return r&&pi(r,Qe(o,3))}function Fy(r,o){return r&&Yl(r,Qe(o,3))}function By(r){return r==null?[]:na(r,sn(r))}function zy(r){return r==null?[]:na(r,Cn(r))}function Tc(r,o,u){var m=r==null?t:Er(r,o);return m===t?u:m}function Gy(r,o){return r!=null&&Rf(r,o,cv)}function Ac(r,o){return r!=null&&Rf(r,o,uv)}var Hy=Sf(function(r,o,u){o!=null&&typeof o.toString!="function"&&(o=Vo.call(o)),r[o]=u},Cc(Rn)),ky=Sf(function(r,o,u){o!=null&&typeof o.toString!="function"&&(o=Vo.call(o)),It.call(r,o)?r[o].push(u):r[o]=[u]},Qe),Vy=yt(ro);function sn(r){return wn(r)?Bh(r):Jl(r)}function Cn(r){return wn(r)?Bh(r,!0):yv(r)}function Wy(r,o){var u={};return o=Qe(o,3),pi(r,function(m,y,w){wi(u,o(m,y,w),m)}),u}function Xy(r,o){var u={};return o=Qe(o,3),pi(r,function(m,y,w){wi(u,y,o(m,y,w))}),u}var qy=as(function(r,o,u){ia(r,o,u)}),ud=as(function(r,o,u,m){ia(r,o,u,m)}),Yy=Ri(function(r,o){var u={};if(r==null)return u;var m=!1;o=Vt(o,function(w){return w=Qi(w,r),m||(m=w.length>1),w}),mi(r,hc(r),u),m&&(u=qn(u,p|_|x,Hv));for(var y=o.length;y--;)ic(u,o[y]);return u});function $y(r,o){return hd(r,va(Qe(o)))}var Zy=Ri(function(r,o){return r==null?{}:Ev(r,o)});function hd(r,o){if(r==null)return{};var u=Vt(hc(r),function(m){return[m]});return o=Qe(o),tf(r,u,function(m,y){return o(m,y[0])})}function Ky(r,o,u){o=Qi(o,r);var m=-1,y=o.length;for(y||(y=1,r=t);++m<y;){var w=r==null?t:r[gi(o[m])];w===t&&(m=y,w=u),r=Pi(w)?w.call(r):w}return r}function Jy(r,o,u){return r==null?r:oo(r,o,u)}function jy(r,o,u,m){return m=typeof m=="function"?m:t,r==null?r:oo(r,o,u,m)}var fd=bf(sn),dd=bf(Cn);function Qy(r,o,u){var m=ft(r),y=m||tr(r)||us(r);if(o=Qe(o,4),u==null){var w=r&&r.constructor;y?u=m?new w:[]:Wt(r)?u=Pi(w)?os(qo(r)):{}:u={}}return(y?Vn:pi)(r,function(N,z,X){return o(u,N,z,X)}),u}function eS(r,o){return r==null?!0:ic(r,o)}function tS(r,o,u){return r==null?r:af(r,o,oc(u))}function nS(r,o,u,m){return m=typeof m=="function"?m:t,r==null?r:af(r,o,oc(u),m)}function hs(r){return r==null?[]:Bl(r,sn(r))}function iS(r){return r==null?[]:Bl(r,Cn(r))}function rS(r,o,u){return u===t&&(u=o,o=t),u!==t&&(u=Zn(u),u=u===u?u:0),o!==t&&(o=Zn(o),o=o===o?o:0),Sr(Zn(r),o,u)}function sS(r,o,u){return o=Ii(o),u===t?(u=o,o=0):u=Ii(u),r=Zn(r),hv(r,o,u)}function oS(r,o,u){if(u&&typeof u!="boolean"&&vn(r,o,u)&&(o=u=t),u===t&&(typeof o=="boolean"?(u=o,o=t):typeof r=="boolean"&&(u=r,r=t)),r===t&&o===t?(r=0,o=1):(r=Ii(r),o===t?(o=r,r=0):o=Ii(o)),r>o){var m=r;r=o,o=m}if(u||r%1||o%1){var y=Oh();return dn(r+y*(o-r+Bg("1e-"+((y+"").length-1))),o)}return ec(r,o)}var aS=ls(function(r,o,u){return o=o.toLowerCase(),r+(u?pd(o):o)});function pd(r){return wc(Rt(r).toLowerCase())}function md(r){return r=Rt(r),r&&r.replace(ze,Jg).replace(Cg,"")}function lS(r,o,u){r=Rt(r),o=Un(o);var m=r.length;u=u===t?m:Sr(mt(u),0,m);var y=u;return u-=o.length,u>=0&&r.slice(u,y)==o}function cS(r){return r=Rt(r),r&&Se.test(r)?r.replace(Me,jg):r}function uS(r){return r=Rt(r),r&&rn.test(r)?r.replace(Pt,"\\$&"):r}var hS=ls(function(r,o,u){return r+(u?"-":"")+o.toLowerCase()}),fS=ls(function(r,o,u){return r+(u?" ":"")+o.toLowerCase()}),dS=vf("toLowerCase");function pS(r,o,u){r=Rt(r),o=mt(o);var m=o?ts(r):0;if(!o||m>=o)return r;var y=(o-m)/2;return ca(Ko(y),u)+r+ca(Zo(y),u)}function mS(r,o,u){r=Rt(r),o=mt(o);var m=o?ts(r):0;return o&&m<o?r+ca(o-m,u):r}function gS(r,o,u){r=Rt(r),o=mt(o);var m=o?ts(r):0;return o&&m<o?ca(o-m,u)+r:r}function _S(r,o,u){return u||o==null?o=0:o&&(o=+o),b_(Rt(r).replace(ei,""),o||0)}function vS(r,o,u){return(u?vn(r,o,u):o===t)?o=1:o=mt(o),tc(Rt(r),o)}function xS(){var r=arguments,o=Rt(r[0]);return r.length<3?o:o.replace(r[1],r[2])}var yS=ls(function(r,o,u){return r+(u?"_":"")+o.toLowerCase()});function SS(r,o,u){return u&&typeof u!="number"&&vn(r,o,u)&&(o=u=t),u=u===t?xe:u>>>0,u?(r=Rt(r),r&&(typeof o=="string"||o!=null&&!bc(o))&&(o=Un(o),!o&&es(r))?er(ni(r),0,u):r.split(o,u)):[]}var ES=ls(function(r,o,u){return r+(u?" ":"")+wc(o)});function MS(r,o,u){return r=Rt(r),u=u==null?0:Sr(mt(u),0,r.length),o=Un(o),r.slice(u,u+o.length)==o}function bS(r,o,u){var m=A.templateSettings;u&&vn(r,o,u)&&(o=t),r=Rt(r),o=Sa({},o,m,Tf);var y=Sa({},o.imports,m.imports,Tf),w=sn(y),N=Bl(y,w),z,X,ae=0,ue=o.interpolate||Ye,ge="__p += '",Ie=Gl((o.escape||Ye).source+"|"+ue.source+"|"+(ue===wt?Tl:Ye).source+"|"+(o.evaluate||Ye).source+"|$","g"),$e="//# sourceURL="+(It.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Dg+"]")+`
`;r.replace(Ie,function(rt,Et,Tt,On,xn,Fn){return Tt||(Tt=On),ge+=r.slice(ae,Fn).replace(tt,Qg),Et&&(z=!0,ge+=`' +
__e(`+Et+`) +
'`),xn&&(X=!0,ge+=`';
`+xn+`;
__p += '`),Tt&&(ge+=`' +
((__t = (`+Tt+`)) == null ? '' : __t) +
'`),ae=Fn+rt.length,rt}),ge+=`';
`;var it=It.call(o,"variable")&&o.variable;if(!it)ge=`with (obj) {
`+ge+`
}
`;else if(Uo.test(it))throw new ct(l);ge=(X?ge.replace(U,""):ge).replace(fe,"$1").replace(We,"$1;"),ge="function("+(it||"obj")+`) {
`+(it?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(z?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ge+`return __p
}`;var _t=_d(function(){return Ct(w,$e+"return "+ge).apply(t,N)});if(_t.source=ge,Mc(_t))throw _t;return _t}function TS(r){return Rt(r).toLowerCase()}function AS(r){return Rt(r).toUpperCase()}function wS(r,o,u){if(r=Rt(r),r&&(u||o===t))return Th(r);if(!r||!(o=Un(o)))return r;var m=ni(r),y=ni(o),w=Ah(m,y),N=wh(m,y)+1;return er(m,w,N).join("")}function CS(r,o,u){if(r=Rt(r),r&&(u||o===t))return r.slice(0,Rh(r)+1);if(!r||!(o=Un(o)))return r;var m=ni(r),y=wh(m,ni(o))+1;return er(m,0,y).join("")}function RS(r,o,u){if(r=Rt(r),r&&(u||o===t))return r.replace(ei,"");if(!r||!(o=Un(o)))return r;var m=ni(r),y=Ah(m,ni(o));return er(m,y).join("")}function LS(r,o){var u=T,m=P;if(Wt(o)){var y="separator"in o?o.separator:y;u="length"in o?mt(o.length):u,m="omission"in o?Un(o.omission):m}r=Rt(r);var w=r.length;if(es(r)){var N=ni(r);w=N.length}if(u>=w)return r;var z=u-ts(m);if(z<1)return m;var X=N?er(N,0,z).join(""):r.slice(0,z);if(y===t)return X+m;if(N&&(z+=X.length-z),bc(y)){if(r.slice(z).search(y)){var ae,ue=X;for(y.global||(y=Gl(y.source,Rt(No.exec(y))+"g")),y.lastIndex=0;ae=y.exec(ue);)var ge=ae.index;X=X.slice(0,ge===t?z:ge)}}else if(r.indexOf(Un(y),z)!=z){var Ie=X.lastIndexOf(y);Ie>-1&&(X=X.slice(0,Ie))}return X+m}function PS(r){return r=Rt(r),r&&Y.test(r)?r.replace(B,o_):r}var IS=ls(function(r,o,u){return r+(u?" ":"")+o.toUpperCase()}),wc=vf("toUpperCase");function gd(r,o,u){return r=Rt(r),o=u?t:o,o===t?t_(r)?c_(r):qg(r):r.match(o)||[]}var _d=yt(function(r,o){try{return In(r,t,o)}catch(u){return Mc(u)?u:new ct(u)}}),DS=Ri(function(r,o){return Vn(o,function(u){u=gi(u),wi(r,u,Sc(r[u],r))}),r});function US(r){var o=r==null?0:r.length,u=Qe();return r=o?Vt(r,function(m){if(typeof m[1]!="function")throw new Wn(c);return[u(m[0]),m[1]]}):[],yt(function(m){for(var y=-1;++y<o;){var w=r[y];if(In(w[0],this,m))return In(w[1],this,m)}})}function NS(r){return ov(qn(r,p))}function Cc(r){return function(){return r}}function OS(r,o){return r==null||r!==r?o:r}var FS=yf(),BS=yf(!0);function Rn(r){return r}function Rc(r){return Zh(typeof r=="function"?r:qn(r,p))}function zS(r){return Jh(qn(r,p))}function GS(r,o){return jh(r,qn(o,p))}var HS=yt(function(r,o){return function(u){return ro(u,r,o)}}),kS=yt(function(r,o){return function(u){return ro(r,u,o)}});function Lc(r,o,u){var m=sn(o),y=na(o,m);u==null&&!(Wt(o)&&(y.length||!m.length))&&(u=o,o=r,r=this,y=na(o,sn(o)));var w=!(Wt(u)&&"chain"in u)||!!u.chain,N=Pi(r);return Vn(y,function(z){var X=o[z];r[z]=X,N&&(r.prototype[z]=function(){var ae=this.__chain__;if(w||ae){var ue=r(this.__wrapped__),ge=ue.__actions__=An(this.__actions__);return ge.push({func:X,args:arguments,thisArg:r}),ue.__chain__=ae,ue}return X.apply(r,$i([this.value()],arguments))})}),r}function VS(){return ln._===this&&(ln._=m_),this}function Pc(){}function WS(r){return r=mt(r),yt(function(o){return Qh(o,r)})}var XS=lc(Vt),qS=lc(yh),YS=lc(Dl);function vd(r){return mc(r)?Ul(gi(r)):Mv(r)}function $S(r){return function(o){return r==null?t:Er(r,o)}}var ZS=Ef(),KS=Ef(!0);function Ic(){return[]}function Dc(){return!1}function JS(){return{}}function jS(){return""}function QS(){return!0}function eE(r,o){if(r=mt(r),r<1||r>ne)return[];var u=xe,m=dn(r,xe);o=Qe(o),r-=xe;for(var y=Fl(m,o);++u<r;)o(u);return y}function tE(r){return ft(r)?Vt(r,gi):Nn(r)?[r]:An(Bf(Rt(r)))}function nE(r){var o=++d_;return Rt(r)+o}var iE=la(function(r,o){return r+o},0),rE=cc("ceil"),sE=la(function(r,o){return r/o},1),oE=cc("floor");function aE(r){return r&&r.length?ta(r,Rn,$l):t}function lE(r,o){return r&&r.length?ta(r,Qe(o,2),$l):t}function cE(r){return Mh(r,Rn)}function uE(r,o){return Mh(r,Qe(o,2))}function hE(r){return r&&r.length?ta(r,Rn,jl):t}function fE(r,o){return r&&r.length?ta(r,Qe(o,2),jl):t}var dE=la(function(r,o){return r*o},1),pE=cc("round"),mE=la(function(r,o){return r-o},0);function gE(r){return r&&r.length?Ol(r,Rn):0}function _E(r,o){return r&&r.length?Ol(r,Qe(o,2)):0}return A.after=zx,A.ary=Zf,A.assign=Ay,A.assignIn=cd,A.assignInWith=Sa,A.assignWith=wy,A.at=Cy,A.before=Kf,A.bind=Sc,A.bindAll=DS,A.bindKey=Jf,A.castArray=Jx,A.chain=qf,A.chunk=o0,A.compact=a0,A.concat=l0,A.cond=US,A.conforms=NS,A.constant=Cc,A.countBy=gx,A.create=Ry,A.curry=jf,A.curryRight=Qf,A.debounce=ed,A.defaults=Ly,A.defaultsDeep=Py,A.defer=Gx,A.delay=Hx,A.difference=c0,A.differenceBy=u0,A.differenceWith=h0,A.drop=f0,A.dropRight=d0,A.dropRightWhile=p0,A.dropWhile=m0,A.fill=g0,A.filter=vx,A.flatMap=Sx,A.flatMapDeep=Ex,A.flatMapDepth=Mx,A.flatten=kf,A.flattenDeep=_0,A.flattenDepth=v0,A.flip=kx,A.flow=FS,A.flowRight=BS,A.fromPairs=x0,A.functions=By,A.functionsIn=zy,A.groupBy=bx,A.initial=S0,A.intersection=E0,A.intersectionBy=M0,A.intersectionWith=b0,A.invert=Hy,A.invertBy=ky,A.invokeMap=Ax,A.iteratee=Rc,A.keyBy=wx,A.keys=sn,A.keysIn=Cn,A.map=ma,A.mapKeys=Wy,A.mapValues=Xy,A.matches=zS,A.matchesProperty=GS,A.memoize=_a,A.merge=qy,A.mergeWith=ud,A.method=HS,A.methodOf=kS,A.mixin=Lc,A.negate=va,A.nthArg=WS,A.omit=Yy,A.omitBy=$y,A.once=Vx,A.orderBy=Cx,A.over=XS,A.overArgs=Wx,A.overEvery=qS,A.overSome=YS,A.partial=Ec,A.partialRight=td,A.partition=Rx,A.pick=Zy,A.pickBy=hd,A.property=vd,A.propertyOf=$S,A.pull=C0,A.pullAll=Wf,A.pullAllBy=R0,A.pullAllWith=L0,A.pullAt=P0,A.range=ZS,A.rangeRight=KS,A.rearg=Xx,A.reject=Ix,A.remove=I0,A.rest=qx,A.reverse=xc,A.sampleSize=Ux,A.set=Jy,A.setWith=jy,A.shuffle=Nx,A.slice=D0,A.sortBy=Bx,A.sortedUniq=G0,A.sortedUniqBy=H0,A.split=SS,A.spread=Yx,A.tail=k0,A.take=V0,A.takeRight=W0,A.takeRightWhile=X0,A.takeWhile=q0,A.tap=ax,A.throttle=$x,A.thru=pa,A.toArray=od,A.toPairs=fd,A.toPairsIn=dd,A.toPath=tE,A.toPlainObject=ld,A.transform=Qy,A.unary=Zx,A.union=Y0,A.unionBy=$0,A.unionWith=Z0,A.uniq=K0,A.uniqBy=J0,A.uniqWith=j0,A.unset=eS,A.unzip=yc,A.unzipWith=Xf,A.update=tS,A.updateWith=nS,A.values=hs,A.valuesIn=iS,A.without=Q0,A.words=gd,A.wrap=Kx,A.xor=ex,A.xorBy=tx,A.xorWith=nx,A.zip=ix,A.zipObject=rx,A.zipObjectDeep=sx,A.zipWith=ox,A.entries=fd,A.entriesIn=dd,A.extend=cd,A.extendWith=Sa,Lc(A,A),A.add=iE,A.attempt=_d,A.camelCase=aS,A.capitalize=pd,A.ceil=rE,A.clamp=rS,A.clone=jx,A.cloneDeep=ey,A.cloneDeepWith=ty,A.cloneWith=Qx,A.conformsTo=ny,A.deburr=md,A.defaultTo=OS,A.divide=sE,A.endsWith=lS,A.eq=ri,A.escape=cS,A.escapeRegExp=uS,A.every=_x,A.find=xx,A.findIndex=Gf,A.findKey=Iy,A.findLast=yx,A.findLastIndex=Hf,A.findLastKey=Dy,A.floor=oE,A.forEach=Yf,A.forEachRight=$f,A.forIn=Uy,A.forInRight=Ny,A.forOwn=Oy,A.forOwnRight=Fy,A.get=Tc,A.gt=iy,A.gte=ry,A.has=Gy,A.hasIn=Ac,A.head=Vf,A.identity=Rn,A.includes=Tx,A.indexOf=y0,A.inRange=sS,A.invoke=Vy,A.isArguments=Tr,A.isArray=ft,A.isArrayBuffer=sy,A.isArrayLike=wn,A.isArrayLikeObject=Zt,A.isBoolean=oy,A.isBuffer=tr,A.isDate=ay,A.isElement=ly,A.isEmpty=cy,A.isEqual=uy,A.isEqualWith=hy,A.isError=Mc,A.isFinite=fy,A.isFunction=Pi,A.isInteger=nd,A.isLength=xa,A.isMap=id,A.isMatch=dy,A.isMatchWith=py,A.isNaN=my,A.isNative=gy,A.isNil=vy,A.isNull=_y,A.isNumber=rd,A.isObject=Wt,A.isObjectLike=Yt,A.isPlainObject=uo,A.isRegExp=bc,A.isSafeInteger=xy,A.isSet=sd,A.isString=ya,A.isSymbol=Nn,A.isTypedArray=us,A.isUndefined=yy,A.isWeakMap=Sy,A.isWeakSet=Ey,A.join=T0,A.kebabCase=hS,A.last=$n,A.lastIndexOf=A0,A.lowerCase=fS,A.lowerFirst=dS,A.lt=My,A.lte=by,A.max=aE,A.maxBy=lE,A.mean=cE,A.meanBy=uE,A.min=hE,A.minBy=fE,A.stubArray=Ic,A.stubFalse=Dc,A.stubObject=JS,A.stubString=jS,A.stubTrue=QS,A.multiply=dE,A.nth=w0,A.noConflict=VS,A.noop=Pc,A.now=ga,A.pad=pS,A.padEnd=mS,A.padStart=gS,A.parseInt=_S,A.random=oS,A.reduce=Lx,A.reduceRight=Px,A.repeat=vS,A.replace=xS,A.result=Ky,A.round=pE,A.runInContext=V,A.sample=Dx,A.size=Ox,A.snakeCase=yS,A.some=Fx,A.sortedIndex=U0,A.sortedIndexBy=N0,A.sortedIndexOf=O0,A.sortedLastIndex=F0,A.sortedLastIndexBy=B0,A.sortedLastIndexOf=z0,A.startCase=ES,A.startsWith=MS,A.subtract=mE,A.sum=gE,A.sumBy=_E,A.template=bS,A.times=eE,A.toFinite=Ii,A.toInteger=mt,A.toLength=ad,A.toLower=TS,A.toNumber=Zn,A.toSafeInteger=Ty,A.toString=Rt,A.toUpper=AS,A.trim=wS,A.trimEnd=CS,A.trimStart=RS,A.truncate=LS,A.unescape=PS,A.uniqueId=nE,A.upperCase=IS,A.upperFirst=wc,A.each=Yf,A.eachRight=$f,A.first=Vf,Lc(A,function(){var r={};return pi(A,function(o,u){It.call(A.prototype,u)||(r[u]=o)}),r}(),{chain:!1}),A.VERSION=n,Vn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){A[r].placeholder=A}),Vn(["drop","take"],function(r,o){Mt.prototype[r]=function(u){u=u===t?1:en(mt(u),0);var m=this.__filtered__&&!o?new Mt(this):this.clone();return m.__filtered__?m.__takeCount__=dn(u,m.__takeCount__):m.__views__.push({size:dn(u,xe),type:r+(m.__dir__<0?"Right":"")}),m},Mt.prototype[r+"Right"]=function(u){return this.reverse()[r](u).reverse()}}),Vn(["filter","map","takeWhile"],function(r,o){var u=o+1,m=u==H||u==Q;Mt.prototype[r]=function(y){var w=this.clone();return w.__iteratees__.push({iteratee:Qe(y,3),type:u}),w.__filtered__=w.__filtered__||m,w}}),Vn(["head","last"],function(r,o){var u="take"+(o?"Right":"");Mt.prototype[r]=function(){return this[u](1).value()[0]}}),Vn(["initial","tail"],function(r,o){var u="drop"+(o?"":"Right");Mt.prototype[r]=function(){return this.__filtered__?new Mt(this):this[u](1)}}),Mt.prototype.compact=function(){return this.filter(Rn)},Mt.prototype.find=function(r){return this.filter(r).head()},Mt.prototype.findLast=function(r){return this.reverse().find(r)},Mt.prototype.invokeMap=yt(function(r,o){return typeof r=="function"?new Mt(this):this.map(function(u){return ro(u,r,o)})}),Mt.prototype.reject=function(r){return this.filter(va(Qe(r)))},Mt.prototype.slice=function(r,o){r=mt(r);var u=this;return u.__filtered__&&(r>0||o<0)?new Mt(u):(r<0?u=u.takeRight(-r):r&&(u=u.drop(r)),o!==t&&(o=mt(o),u=o<0?u.dropRight(-o):u.take(o-r)),u)},Mt.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Mt.prototype.toArray=function(){return this.take(xe)},pi(Mt.prototype,function(r,o){var u=/^(?:filter|find|map|reject)|While$/.test(o),m=/^(?:head|last)$/.test(o),y=A[m?"take"+(o=="last"?"Right":""):o],w=m||/^find/.test(o);y&&(A.prototype[o]=function(){var N=this.__wrapped__,z=m?[1]:arguments,X=N instanceof Mt,ae=z[0],ue=X||ft(N),ge=function(Et){var Tt=y.apply(A,$i([Et],z));return m&&Ie?Tt[0]:Tt};ue&&u&&typeof ae=="function"&&ae.length!=1&&(X=ue=!1);var Ie=this.__chain__,$e=!!this.__actions__.length,it=w&&!Ie,_t=X&&!$e;if(!w&&ue){N=_t?N:new Mt(this);var rt=r.apply(N,z);return rt.__actions__.push({func:pa,args:[ge],thisArg:t}),new Xn(rt,Ie)}return it&&_t?r.apply(this,z):(rt=this.thru(ge),it?m?rt.value()[0]:rt.value():rt)})}),Vn(["pop","push","shift","sort","splice","unshift"],function(r){var o=Go[r],u=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",m=/^(?:pop|shift)$/.test(r);A.prototype[r]=function(){var y=arguments;if(m&&!this.__chain__){var w=this.value();return o.apply(ft(w)?w:[],y)}return this[u](function(N){return o.apply(ft(N)?N:[],y)})}}),pi(Mt.prototype,function(r,o){var u=A[o];if(u){var m=u.name+"";It.call(ss,m)||(ss[m]=[]),ss[m].push({name:o,func:u})}}),ss[aa(t,g).name]=[{name:"wrapper",func:t}],Mt.prototype.clone=P_,Mt.prototype.reverse=I_,Mt.prototype.value=D_,A.prototype.at=lx,A.prototype.chain=cx,A.prototype.commit=ux,A.prototype.next=hx,A.prototype.plant=dx,A.prototype.reverse=px,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=mx,A.prototype.first=A.prototype.head,Js&&(A.prototype[Js]=fx),A},ns=u_();_r?((_r.exports=ns)._=ns,Rl._=ns):ln._=ns}).call(xo)})(pl,pl.exports);var um=pl.exports;const uR=i=>{const e=document.getElementById("loadingIndicator");i?e.style.display="flex":e.style.display="none"},hR=()=>{document.getElementById("cellTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),fR(t)})};function fR(i){const e=document.getElementById("cellNotFound");let t=St.value.listPalette;i?(t=St.value.listPalette.filter(([n,s])=>n.toLowerCase().startsWith(i)),console.log(t),ml(t)):ml(St.value.listPalette),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}function ml(i){let e={};const t=document.getElementById("cellCheckboxes");t.innerHTML="",i.sort((s,a)=>s[0].toLowerCase()<a[0].toLowerCase()?-1:s[0].toLowerCase()>a[0].toLowerCase()?1:0),i.forEach(([s,a])=>{const c=document.createElement("input");c.type="checkbox",c.className="box",c.id=s,c.value=s,Oe.value.selectedCelltypes.includes(s)&&(c.checked=!0);const l=document.createElement("label");l.htmlFor=s,l.style.color=a,l.appendChild(c),l.appendChild(document.createTextNode(s));let h,f,d,p,x=((S,E)=>{for(const v in S)if(S[v].includes(E))return v;return!1})(St.value.groups,s);if(x){const S=`${x}-group`;Object.keys(e).includes(x)?(h=document.getElementById(`${x}-div`),f=document.getElementById(S),d=document.getElementById(`${x}-label`),p=document.getElementById(`${x}-list`)):(e[x]=[],h=document.createElement("div"),h.id=`${x}-div`,d=document.createElement("label"),d.htmlFor=x,d.setAttribute("for",S),d.style.color="white",d.id=`${x}-label`,f=document.createElement("input"),f.type="checkbox",f.classList.add("box"),f.classList.add("group-input"),f.value=x,f.id=S,d.appendChild(f),d.appendChild(document.createTextNode(x.toUpperCase())),p=document.createElement("ul"),p.id=`${x}-list`,p.style.marginBottom=0,h.appendChild(d),h.appendChild(p),t.appendChild(h));const E=document.createElement("li");E.id=`${x}-item`,p.appendChild(l),p.append(document.createElement("br")),e[x].push(c),t.appendChild(h)}else t.appendChild(l),t.appendChild(document.createElement("br"));c.addEventListener("change",S=>{console.log(S),dR(s,S.target.checked)})});const n=document.getElementsByClassName("group-input");Array.prototype.slice.call(n).forEach(s=>{s.addEventListener("change",a=>{let c=Oe.value.selectedCelltypes.map(l=>l);console.log("CHECKING",c),e[a.target.value].forEach(l=>{l.checked=a.target.checked,a.target.checked?c.push(l.value):c.splice(c.indexOf(l.value),1)}),ks(c)}),e[s.value].forEach(a=>{let c=!0;a.checked||(c=!1),s.checked=c,a.addEventListener("change",()=>{let l=!0;e[s.value].forEach(h=>{h.checked||(l=!1)}),s.checked=l})})})}async function dR(i,e){let t=Oe.value.selectedCelltypes.map(n=>n);e?(t.push(i),ks(t)):(t=t.filter(n=>n!==i),ks(t))}const pR=()=>{document.getElementById("cellClearButton").addEventListener("click",()=>{ks([]),ml(St.value.listPalette),cellTextbox.value=""})},mR=()=>{const i=document.getElementById("cellFilters");i.innerHTML="",Oe.value.selectedCelltypes.length!==0?Oe.value.selectedCelltypes.forEach(e=>{const t=document.createElement("p");t.style.color=St.value.pallete[e],t.style.fontStyle="italic",t.style.fontWeight="bold",t.innerHTML=e,i.appendChild(t)}):i.innerHTML="No celltype filters selected"};function hm(){const i=Oe.value.selectedCelltypes,e=document.getElementById("cellCheckboxes");let t=[];for(const n in e.children){const s=e.children[n];s.nodeName==="LABEL"&&t.push(s.children[0])}t.forEach(n=>{i.includes(n.value)?n.checked||(n.checked=!0):n.checked&&(n.checked=!1)})}async function qs(i,e,t=!1){let n="";if(t==!0?n=await fetch(`https://backendbasel.techkyra.com/get-gene-values?gene=${i}&dbname=genedb&dbcollection=${e}&username=zebra&csv_filename=${e}_atac_new.csv`):n=await fetch(`https://backendbasel.techkyra.com/get-gene-values?gene=${i}&dbname=genedb&dbcollection=${e}&username=zebra&csv_filename=${e}_matrix.csv`),!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const s=await n.json();if(s===void 0||s.gene_values==null)return"[]";let a=s.gene_values.split(",").filter(h=>h!=="");return["clusters","clusters_pal","genes","hierarchical_clusters"].includes(i)==!0?(a.shift(),a):(a.shift(),a.map(f=>parseFloat(f)))}async function gR(i,e=1e5){let t="";if(t=await fetch(`https://backendbasel.techkyra.com/get-intervals?gene=${i}&range=${e}`),!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const n=await t.json();return n===void 0?"[]":n}const _R=()=>{};function vR(i){const e=document.getElementById("atacNotFound");if(i){const t=St.value.atacs.filter(n=>n.toLowerCase().startsWith(i));console.log(t),Hu(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else Hu(St.value.atacs.slice(0,1e3))}function Hu(i){const e=document.getElementById("atacContainer");e.innerHTML="",i.sort((t,n)=>t[0].toLowerCase()<n[0].toLowerCase()?-1:t[0].toLowerCase()>n[0].toLowerCase()?1:0),i.forEach(t=>{const n=document.createElement("input");n.type="checkbox",n.className="box",n.id=t,n.value=t,n.name="radio",Oe.value.selectedAtacs.includes(t)&&(n.checked=!0);const s=document.createElement("label");s.htmlFor=t,s.textContent=t,s.style.color="white";const a=document.createElement("div");a.appendChild(n),a.appendChild(s),a.appendChild(document.createElement("br")),e.appendChild(a),n.addEventListener("change",c=>{if(Oe.value.selectedAtacs.length>=Oe.value.mode&&(c.target.checked=!1),Oe.value.mode===1&&Oe.value.selectedAtacs.length===1){const l=document.querySelector(`[value=${CSS.escape(Oe.value.selectedAtacs[0])}]`);l&&(l.checked=!1),(l===null||l.value!==c.target.value)&&(qi([]),c.target.checked=!0)}dg(t,c.target.checked)})})}function dg(i,e){let t=Oe.value.selectedAtacs.map(n=>n);e?(t.push(i),qi(t)):(t=t.filter(n=>n!==i),qi(t))}const ih=()=>{document.getElementById("atacClearButton").addEventListener("click",()=>{qi([]),document.querySelectorAll('input[type="radio"]').forEach(t=>{t.checked=!1}),qi([]),atacTextbox.value=""})},xR=()=>{document.getElementById("atacEnterButton").addEventListener("click",()=>{console.log("entered clicked");const t=document.getElementById("atacTextbox").value.toLowerCase();vR(t)})},yR=()=>{const i=document.getElementById("atacFilters");i.innerHTML="",Oe.value.selectedAtacs.length!==0?Oe.value.selectedAtacs.forEach((e,t)=>{const n=document.createElement("p");n.style.color=t===0?"magenta":"green",n.style.fontStyle="italic",n.style.fontWeight="bold",n.innerHTML=e,i.appendChild(n)}):i.innerHTML="No ATAC filters selected"},SR=()=>{const i=document.getElementById("selectedContainer");if(i.innerHTML="",Oe.value.selectedAtacs.forEach(e=>{const t=document.createElement("input");t.type="checkbox",t.className="box",t.id="select-"+e,t.value=e,t.name="radio",Oe.value.selectedAtacs.includes(e)&&(t.checked=!0);const n=document.createElement("label");n.htmlFor="select-"+e,n.textContent=e,n.style.color="white";const s=document.createElement("div");s.appendChild(t),s.appendChild(n),s.appendChild(document.createElement("br")),i.appendChild(s),t.addEventListener("change",a=>{const c=document.querySelector(`#atacContainer [value=${CSS.escape(Oe.value.selectedAtacs[0])}]`);c!==null&&(c.checked=!1),dg(t.value,!1)})}),Oe.value.selectedAtacs.length>0){const e=document.createElement("p");e.innerText="Selected atacs",e.style.color="white",e.style.margin=0,i.prepend(e);const t=document.createElement("hr");t.style.borderColor="white",t.style.margin="2px",i.appendChild(t)}};function ER(i){const e=i.match(/^(\d+)-(\d+)-(\d+)$/);return e?`chr${e[1]}:${e[2]}-${e[3]}`:null}function MR(i){const e=i.match(/^chr(\d+):(\d+)-(\d+)$/);return e?`${e[1]}-${e[2]}-${e[3]}`:null}function fm(i){return qs(i,St.value.prefix)}function dm(i){return qs(MR(i),St.value.prefix,!0)}function bR(i,e){const t={r:255,g:255,b:255},n={r:0,g:255,b:0},s={r:255,g:0,b:255},a={r:Math.round(n.r+(t.r-n.r)*e),g:Math.round(n.g+(t.g-n.g)*e),b:Math.round(n.b+(t.b-n.b)*e)},c={r:Math.round(s.r+(t.r-s.r)*i),g:Math.round(s.g+(t.g-s.g)*i),b:Math.round(s.b+(t.b-s.b)*i)},l={r:(a.r+c.r)/2,g:(a.g+c.g)/2,b:(a.b+c.b)/2};return`rgb(${Math.round(l.r)}, ${Math.round(l.g)}, ${Math.round(l.b)})`}function Ka(i,e){const t={r:0,g:0,b:255},n={r:255,g:255,b:255},s={r:255,g:0,b:0};return e==null?i<.5?`rgb(${Math.floor(n.r*i*2)}, ${Math.floor(n.g*i*2)}, ${t.b})`:i===.5?`rgb(${n.r}, ${n.g}, ${n.b})`:`rgb(${s.r}, ${Math.floor(n.g-n.g*(i-.5)*2)}, ${Math.floor(n.b-n.b*(i-.5)*2)})`:bR(i,e)}function Ja(i,e){const t=i.slice().sort((s,a)=>s-a),n=Math.floor(t.length*e)-1;return t[n]}function ja(i,e){return i.map(t=>Math.min(t/e,1))}const TR=()=>{document.getElementById("geneTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),pg(t)})};function pg(i){const e=document.getElementById("geneNotFound");if(i){const t=St.value.genes.filter(n=>n.toLowerCase().startsWith(i));ku(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else ku(St.value.genes.slice(0,1e3))}function ku(i){const e=document.getElementById("geneContainer");e.innerHTML="",i.sort((t,n)=>t[0].toLowerCase()<n[0].toLowerCase()?-1:t[0].toLowerCase()>n[0].toLowerCase()?1:0),i.forEach(t=>{const n=document.createElement("input");n.type="checkbox",n.className="box",n.id=t,n.value=t,n.name="radio",Oe.value.selectedGenes.includes(t)&&(n.checked=!0);const s=document.createElement("label");s.htmlFor=t,s.textContent=t,s.style.color="white";const a=document.createElement("div");a.appendChild(n),a.appendChild(s),a.appendChild(document.createElement("br")),e.appendChild(a),n.addEventListener("change",c=>{if(Oe.value.selectedGenes.length>=Oe.value.mode&&(c.target.checked=!1),Oe.value.mode===1&&Oe.value.selectedGenes.length===1){const l=document.querySelector(`[value=${CSS.escape(Oe.value.selectedGenes[0])}]`);l&&(l.checked=!1),(l===null||l.value!==c.target.value)&&(kr([]),c.target.checked=!0)}mg(t,c.target.checked)})})}function AR(){const i=document.getElementById("modeButton");i.value=Oe.value.mode,i.value==="1"?(i.innerText="Single Gene Mode",i.classList.replace("btn-success","btn-info")):(i.innerText="Two Gene Mode",i.classList.replace("btn-info","btn-success")),i.onclick=()=>{let e=i.value==="1";e?(i.innerText="Two Gene Mode",i.classList.replace("btn-info","btn-success")):(i.innerText="Single Gene Mode",i.classList.replace("btn-success","btn-info")),i.value=e?2:1,lR(e?2:1),e?_g():document.getElementById("selectedContainer").innerHTML=""}}function mg(i,e){let t=Oe.value.selectedGenes.map(n=>n);e?(t.push(i),kr(t)):(t=t.filter(n=>n!==i),kr(t))}const gg=()=>{const i=document.getElementById("geneClearButton"),e=document.getElementById("geneTextbox");i.addEventListener("click",()=>{kr([]),fg([]),document.querySelectorAll('input[type="radio"]').forEach(n=>{n.checked=!1}),qi([]),e.value="",pg(e.value)})},wR=()=>{const i=document.getElementById("geneFilters");i.innerHTML="",Oe.value.selectedGenes.length!==0?Oe.value.selectedGenes.forEach((e,t)=>{const n=document.createElement("p");Oe.value.selectedGenes.length===1?n.style.color="white":n.style.color=t===0?"green":"magenta",n.style.fontStyle="italic",n.style.fontWeight="bold",n.innerHTML=e,i.appendChild(n)}):i.innerHTML="No gene filters selected"},_g=()=>{const i=document.getElementById("selectedContainer");if(i.innerHTML="",Oe.value.selectedGenes.forEach(e=>{const t=document.createElement("input");t.type="checkbox",t.className="box",t.id="select-"+e,t.value=e,t.name="radio",Oe.value.selectedGenes.includes(e)&&(t.checked=!0);const n=document.createElement("label");n.htmlFor="select-"+e,n.textContent=e,n.style.color="white";const s=document.createElement("div");s.appendChild(t),s.appendChild(n),s.appendChild(document.createElement("br")),i.appendChild(s),t.addEventListener("change",a=>{const c=document.querySelector(`#geneContainer [value=${CSS.escape(Oe.value.selectedGenes[0])}]`);c!==null&&(c.checked=!1),mg(t.value,!1)})}),Oe.value.selectedGenes.length>0){const e=document.createElement("p");e.innerText="Selected genes",e.style.color="white",e.style.margin=0,i.prepend(e);const t=document.createElement("hr");t.style.borderColor="white",t.style.margin="2px",i.appendChild(t)}};function CR(i){console.log("condition is",i);const e=document.getElementById("violinContainer"),t=document.getElementById("noViolinContainer");if(i!==void 0){const s=document.getElementById("dropdownMenuButton").innerText;console.log(s);const a="https://violinplots.s3.us-west-2.amazonaws.com/";let c="";s=="6s"?c=a+"C_6s_violin_plot/C_6s_"+i+".jpeg":s=="75pe"?c=a+"B_75p_violin_plot/B_75p_"+i+".jpeg":c=a+"A_50p_violin_plot/A_50p_"+i+".jpeg",console.log(c);const l=document.getElementById("violin-canvas"),h=l.getContext("2d"),f=new Image;f.id="violin-image",f.class="violin-image",f.src=c,f.crossOrigin="anonymous",f.onload=function(){const d=f.width,p=f.height;l.width=p,l.height=d,h.translate(l.width/2,l.height/2),h.rotate(90*Math.PI/180),h.drawImage(f,-d/2,-p/2)}}else console.error("Invalid key: No image found for this condition."),e.style.display="none",t.style.display="none"}const yo=i=>{let e=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+i.toString();window.history.pushState({path:e},"",e)};class RR extends Qu{constructor(e){super(e)}load(e,t,n,s){const a=this,c=new I1(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){const h=a.parse(JSON.parse(l));t&&t(h)},n,s)}parse(e){return new LR(e)}}class LR{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],s=PR(e,t,this.data);for(let a=0,c=s.length;a<c;a++)n.push(...s[a].toShapes());return n}}function PR(i,e,t){const n=Array.from(i),s=e/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,c=[];let l=0,h=0;for(let f=0;f<n.length;f++){const d=n[f];if(d===`
`)l=0,h-=a;else{const p=IR(d,s,l,h,t);l+=p.offsetX,c.push(p.path)}}return c}function IR(i,e,t,n,s){const a=s.glyphs[i]||s.glyphs["?"];if(!a){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}const c=new D1;let l,h,f,d,p,_,x,S;if(a.o){const E=a._cachedOutline||(a._cachedOutline=a.o.split(" "));for(let v=0,g=E.length;v<g;)switch(E[v++]){case"m":l=E[v++]*e+t,h=E[v++]*e+n,c.moveTo(l,h);break;case"l":l=E[v++]*e+t,h=E[v++]*e+n,c.lineTo(l,h);break;case"q":f=E[v++]*e+t,d=E[v++]*e+n,p=E[v++]*e+t,_=E[v++]*e+n,c.quadraticCurveTo(p,_,f,d);break;case"b":f=E[v++]*e+t,d=E[v++]*e+n,p=E[v++]*e+t,_=E[v++]*e+n,x=E[v++]*e+t,S=E[v++]*e+n,c.bezierCurveTo(p,_,x,S,f,d);break}}return{offsetX:a.ha*e,path:c}}class pm extends Ju{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const s=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}function vg(i,e,t){const n=document.createElement("p");return n.innerText="x",n.className="delete",n.setAttribute("data-badge_value",e),n.onclick=()=>{if(i==="celltype")hg(e);else if(i==="gene"){const s=[...Oe.value.selectedGenes];s.splice(s.indexOf(e),1),kr(s)}else if(i==="atac"){const s=[...Oe.value.selectedAtacs];s.splice(s.indexOf(e),1),qi(s)}t.remove()},t.onmouseover=()=>{n.style.display="block"},t.onmouseleave=()=>{n.style.display="none"},n}function vu(i,e=""){const t=document.querySelector(".showing-badge");if(!t){console.error("Badge container not found");return}t.querySelectorAll(".showing-label").forEach(a=>a.style.display="none");const s=t.querySelector(`.showing-${i}`);s?(s.style.display="inline-block",(i==="gene"||i==="atac")&&e.forEach((a,c)=>{const l=document.createElement("span");l.className="showing-label gene-atac-badge",l.innerText=a,l.title=a,l.style.backgroundColor=c%2===0?"rgb(0, 200, 0)":"rgb(255, 0, 255)";const h=vg(i,a,l);l.appendChild(h),t.appendChild(l)})):console.warn(`Unknown label: ${i}`)}function mm(){function i(c){const l=document.createElement("span");l.className="celltype-label",l.title=c,l.style.backgroundColor=St.value.pallete[c];const h=document.createElement("p");return h.className="celltype-text",h.innerText=c,l.appendChild(h),l.appendChild(vg("celltype",c,l)),l}const e=document.querySelector(".celltype-badges"),t=Oe.value.selectedCelltypes,n=document.querySelectorAll(".celltype-label"),s=[].map.call(n,c=>c.title);t.forEach(c=>{if(!s.includes(c)){const l=i(c);e.appendChild(l)}}),Array.from(e.childNodes).forEach(c=>{t.includes(c.title)||c.remove()})}function xu(){const i=document.querySelector(".celltype-badges"),e=Oe.value.selectedGenes,t=Oe.value.selectedAtacs;function n(l){const h=["colorbar-wrapper","colorbar-wrapper2","colorbar-wrapper3"];let f=0;h.forEach(_=>{const x=document.getElementById(_);if(x){const E=x.getBoundingClientRect().width;f=Math.max(f,E)}});const d=l?f+5:0,p=l?25:30;i.style.transform=`translateX(-${d}px)`,i.style.width=`${p}vw`}function s(l){i.style.display=l?"none":"flex"}const a=e.length>0,c=t.length>0;n(a),s(c)}const DR=36.75;function UR(i,e){const t=document.getElementById("top-label"),n=document.getElementById("bottom-label");let s=Oe.value.selectedGenes,a=!1;if(s!=[])try{a=s[0].split("_")[1]=="imputed"}catch{a=!1}let c=a?e*DR:e,l;c<1?l=c.toExponential(1):l=Math.round(c),t&&n?(t.textContent=l,n.textContent=i):console.error("Labels not found in the DOM.")}function NR(i,e){const t=document.getElementById("top-label-green"),n=document.getElementById("bottom-label-green");let s=Oe.value.selectedGenes,a=!1;if(s!=[])try{a=s[1].split("_")[1]=="imputed"}catch{a=!1}let l=a?e*36.75:e,h;l<1?h=l.toExponential(1):h=Math.round(l),t&&n?(t.textContent=h,n.textContent=i):console.error("Labels not found in the DOM.")}function OR(i,e){const t=document.getElementById("top-label-magenta"),n=document.getElementById("bottom-label-magenta");let s=Oe.value.selectedGenes,a=!1;if(s!=[])try{a=s[0].split("_")[1]=="imputed"}catch{a=!1}let l=a?e*36.75:e,h;l<1?h=l.toExponential(1):h=Math.round(l),t&&n?(t.textContent=h,n.textContent=i):console.error("Labels not found in the DOM.")}function gm(){const i=document.getElementById("colorbar-wrapper");i?i.style.display="grid":console.error("Colorbar wrapper not found in the DOM.")}function FR(){const i=document.getElementById("colorbar-wrapper2");i?i.style.display="grid":console.error("Colorbar wrapper not found in the DOM.")}function BR(){const i=document.getElementById("colorbar-wrapper3");i?i.style.display="grid":console.error("Colorbar wrapper not found in the DOM.")}function yu(){const i=document.getElementById("colorbar-wrapper");i?i.style.display="none":console.error("Colorbar wrapper not found in the DOM.")}function Qa(){const i=document.getElementById("colorbar-wrapper2");i?i.style.display="none":console.error("Colorbar wrapper not found in the DOM.")}function el(){const i=document.getElementById("colorbar-wrapper3");i?i.style.display="none":console.error("Colorbar wrapper not found in the DOM.")}Oe.pipe(Hi(i=>i.intervalsData),ki((i,e)=>i.join()===e.join())).subscribe(async i=>{zR(Oe.value.selectedGenes[0]),GR(i)});function zR(i){const e=document.querySelector(".left-text");e.textContent=i}function GR(i=[]){const e=document.getElementById("line-container"),t=document.getElementById("middle-space");if(!e||!t){console.error("Required elements not found");return}if(i.length===0)t.style.display="none";else{t.style.display="grid";let n=1;e.innerHTML="";let s,a=!1;i.forEach(c=>{const l=document.createElement("div"),h=document.createElement("div");if(h.className="tooltip",c.label==="atac")c.enriched===1?l.className="atac-peaks-enriched":l.className="atac-peaks",h.textContent=c.interval,l.style.zIndex=n,n++,l.addEventListener("mouseout",()=>{l.style.zIndex=1}),l.addEventListener("mouseover",()=>{a||(s=setTimeout(()=>{tl(c)},800))}),l.addEventListener("mouseout",()=>{l.style.zindex=1,a||(clearTimeout(s),l.classList.contains("clicked")||tl([]))}),l.addEventListener("click",()=>{clearTimeout(s);const f=document.querySelector(".atac-peaks.clicked, .atac-peaks-enriched.clicked");f&&f!==l&&(f.classList.remove("clicked"),f.style.background=""),l.classList.toggle("clicked"),a=l.classList.contains("clicked"),tl(a?c:[])});else{let f=c.label[0]==="-";c.label.split("__")[1]==="mygene"?f?l.className="gene-left":l.className="gene":f?l.className="gene-left-border":l.className="gene-border";let p=c.label.split("__").pop();h.textContent=p,l.addEventListener("mouseover",()=>{}),l.addEventListener("mouseout",()=>{l.style.zIndex=196}),l.addEventListener("click",async()=>{HR(c)})}l.addEventListener("mouseover",()=>{l.style.zIndex=1998}),l.style.left=c.start*100+"%",l.style.width=c.width*100+"%",l.appendChild(h),e.appendChild(l)})}}function tl(i){if(console.log("Peak clicked:",i),i==[]){ih();return}qi([i.interval])}function HR(i){console.log("Gene clicked:",i);let e=kR(i.label.split("__").pop());e==null?alert(`Gene ${i} was not measured`):(qi([]),kr([e]))}function kR(i){return St.value.genes.includes(`${i}_measured`)?`${i}_measured`:St.value.genes.includes(`${i}_imputed`)?`${i}_imputed`:null}async function VR(i){try{const e=await gR(i);fg(e.intervals)}catch(e){console.error("Error fetching interval gene:",e)}}function xg(){const i=document.createElement("div");i.id="overlay",i.className="overlay",i.setAttribute("display_type","maximize");const e=document.createElement("div");e.className="top-controls";const t=document.createElement("img");t.className="min_max_button",t.id="maximize",t.src="/images/overlay_controls/minimize.png",t.onclick=a=>{const c=a.target,l=c.id;let h="";l==="maximize"?h="minimize":h="maximize",c.id=h,c.src=`/images/overlay_controls/${l}.png`,document.querySelectorAll(".circle").forEach(d=>{h=="minimize"?d.style.display="none":d.style.display="block"}),l==="maximize"?i.style.transform="translateX(90%)":i.style.transform="translateX(0%)",i.setAttribute("display_type",h)},e.appendChild(t);const n=document.createElement("button");n.className="overlayClearButton btn btn-outline-danger m-1",n.id="clearButton",n.textContent="Clear",n.onclick=()=>{ks([])},e.appendChild(n),i.appendChild(e);const s=document.createElement("div");return s.className="cluster-text",s.textContent="Hover the UMAP",e.appendChild(s),i}function WR(i){document.querySelectorAll(".circle").forEach(t=>{const n=parseInt(t.dataset.index,10),s=i[n];s&&(typeof s=="string"?t.style.backgroundColor=s:typeof s=="object"&&s.r!==void 0&&s.g!==void 0&&s.b!==void 0&&(t.style.backgroundColor=`rgba(${s.r*255}, ${s.g*255}, ${s.b*255}, 1)`))})}function XR(i,e){const t=document.getElementById("overlay"),n=document.querySelector(".cluster-text"),s=St.value.pallete;if(!t||!n){console.error("Overlay or text container element not found. Make sure the elements are present in the DOM.");return}i.forEach((a,c)=>{const l=document.createElement("div");l.className="circle";const h=(a.X_umap0_norm+1.2)/2*80,f=(1.2-a.X_umap1_norm)/2*80+10;l.style.left=`${h}%`,l.style.top=`${f}%`,l.dataset.cluster=a.clusters,l.dataset.index=c;const d=e[c];d&&(l.style.backgroundColor=`rgba(${d.r*255}, ${d.g*255}, ${d.b*255}, 1)`),l.style.width="2.5px",l.style.height="2.5px",l.addEventListener("mouseenter",()=>{document.querySelectorAll(`.circle[data-cluster="${a.clusters}"]`).forEach(_=>_.classList.add("hovered")),n.style.display="block",n.innerText=`${a.clusters}`,n.style.backgroundColor=s[a.clusters]}),l.addEventListener("mouseleave",()=>{document.querySelectorAll(`.circle[data-cluster="${a.clusters}"]`).forEach(_=>_.classList.remove("hovered")),n.style.backgroundColor=""}),l.addEventListener("click",()=>{hg(a.clusters),n.innerText=`${a.clusters}`,n.style.backgroundColor=s[a.clusters]}),t.appendChild(l)})}document.body.appendChild(xg());const qR=new URL(window.location),ci=new URLSearchParams(qR.search);let _m=0;class YR{constructor(e){yd(this,"animate",()=>{requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)});this.container=e,this.instancedMesh,this.instancedMeshUmap,this.initScene(),this.subscribeToStateChanges()}addText(){new RR().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",t=>{const n=new pm("Anterior",{font:t,size:10,height:.1,curveSegments:12,bevelEnabled:!0,bevelThickness:1,bevelSize:.5,bevelOffset:0,bevelSegments:5}),s=new fl({color:16777215}),a=new Gn(n,s);a.position.set(-30,190,0),this.scene.add(a);const c=new pm("Posterior",{font:t,size:10,height:.1,curveSegments:12,bevelEnabled:!0,bevelThickness:1,bevelSize:.5,bevelOffset:0,bevelSegments:5}),l=new Gn(c,s);l.position.set(-30,-190,0),this.scene.add(l)})}initScene(){this.scene=rR.value.scene,this.scene.background=new bt(0),this.camera=new Qn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new Km,this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),St.value.prefix=="6s"?(this.camera.position.y=jn.value.cameraPositionY,this.camera.position.x=jn.value.cameraPositionX,this.addText()):(document.getElementById("toggleATACRadio").style.display="none",document.getElementById("atac-desc").style.display="none",this.camera.position.y=0,this.camera.position.x=0),this.camera.position.z=jn.value.cameraPositionZ,this.controls=new N1(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.25,this.controls.update(),this.updateInstancedMesh("initScene"),this.animate(),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},!1)}subscribeToStateChanges(){St.pipe(Hi(e=>e.prefix),ki((e,t)=>um.isEqual(e,t))).subscribe(e=>{const t=document.getElementById("dropdownMenuButton");t.innerText=St.value.prefix}),dl.pipe(Hi(e=>e.isLoading),ki((e,t)=>um.isEqual(e,t)),Ir(1)).subscribe(e=>{uR(dl.value.isLoading)}),Oe.pipe(Hi(e=>e.selectedCelltypes),ki((e,t)=>e.join()===t.join()),Ir(1)).subscribe(async e=>{if(Jn(!0),await this.updateInstancedMesh("selectedCelltype"),Jn(!1),mR(),mm(),hm(),Oe.value.selectedCelltypes.length>0){const t=encodeURIComponent(JSON.stringify(Oe.value.selectedCelltypes));ci.set("celltype",t)}else ci.delete("celltype");yo(ci)}),Oe.pipe(Hi(e=>e.selectedGenes),ki((e,t)=>e.join()===t.join()),Ir(1)).subscribe(async e=>{if(Oe.value.mode===2?_g():CR(e[0]),Jn(!0),ih(),wR(),Oe.value.selectedGenes.length>0){let n=Oe.value.selectedGenes[0].split("_")[0];St.value.prefix=="6s"&&Oe.value.geneGenomeHover==!1&&VR(n);const s=encodeURIComponent(JSON.stringify(Oe.value.selectedGenes));ci.set("gene",s)}else ci.delete("gene");await this.updateInstancedMesh("selectedGene"),yo(ci),Jn(!1),xu()}),Oe.pipe(Hi(e=>e.selectedAtacs),ki((e,t)=>e.join()===t.join()),Ir(1)).subscribe(async e=>{if(gg(),Oe.value.mode===2&&SR(),Jn(!0),yR(),Oe.value.selectedAtacs.length>0){const t=encodeURIComponent(JSON.stringify(Oe.value.selectedAtacs));ci.set("atac",t)}else ci.delete("atac");await this.updateInstancedMesh("selectedAtac"),yo(ci),Jn(!1),xu()}),jn.pipe(Hi(e=>e.dotSize),ki(),Ir(1)).subscribe(async e=>{Jn(!0),await this.updateInstancedMesh("dotSize"),Jn(!1)}),jn.pipe(Hi(e=>e.genePercentile),ki(),Ir(1)).subscribe(async e=>{Jn(!0),await this.updateInstancedMesh("genePercentile"),Jn(!1)}),Oe.pipe(Hi(e=>e.mode),ki(),Ir(1)).subscribe(e=>{ci.set("mode",e),yo(ci)})}async updateInstancedMesh(e){let t=[];this.instancedMesh&&(this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.scene.remove(this.instancedMesh)),this.instancedMeshUmap&&(this.instancedMeshUmap.geometry.dispose(),this.instancedMeshUmap.material.dispose(),this.scene.remove(this.instancedMeshUmap));let n=St.value.pallete,s=Gu.value.items;const a=new ju(.1,16,16),c=new Ku(.1,32,32),l=new fl,h=s.length;this.instancedMesh=new qp(a,l,h),this.instancedMeshUmap=new qp(c,l,h);const f=new Mn,d=new Mn;let p,_,x,S=200,E=2,v=Oe.value.selectedCelltypes,g=Oe.value.selectedGenes,I=Oe.value.selectedAtacs,M=jn.value.dotSize,C=Math.floor(M/2),G=jn.value.genePercentile,F=jn.value.genePercentile,D=1;if(I.length>0)try{let k=await dm(I[0]);if(I.length==2){let he=await dm(I[1]),T=Ja(he,F);x=ja(he,T)}D=Ja(k,F),_=ja(k,D)}catch(k){console.error("Error fetching data:",k)}else if(g.length>0)try{let k=await fm(g[0]);if(g.length==2){let he=await fm(g[1]),T=Ja(he,G);x=ja(he,T),OR(0,T)}D=Ja(k,G),_=ja(k,D)}catch(k){console.error("Error fetching data:",k)}UR(0,D),NR(0,D);for(let k=0;k<h;k++){if(I.length>0)if(v.length===0||v.includes(s[k].clusters)){let T,P;x?(T=Ka(_[k],x[k]),P=(_[k]+x[k])/2*M+M/1.5):(T=Ka(_[k]),P=_[k]*M+M/1.5),p=new bt(T),f.scale.set(P,P,P),d.scale.set(P*E,P*E,P*E)}else p=new bt("#5e5e5e"),f.scale.set(1,1,1),d.scale.set(1*E,1*E,1*E);else if(g.length>0)if(v.length===0||v.includes(s[k].clusters)){let T,P;x?(T=Ka(_[k],x[k]),P=(_[k]+x[k])/2*M+M/1.5):(T=Ka(_[k]),P=_[k]*M+M/1.5),p=new bt(T),f.scale.set(P,P,P),d.scale.set(P*E,P*E,P*E)}else p=new bt("#5e5e5e"),f.scale.set(1,1,1),d.scale.set(1*E,1*E,1*E);else v.includes(s[k].clusters)||v.length==0?(p=new bt(n[s[k].clusters]),f.scale.set(M,M,M),d.scale.set(M*E,M*E,M*E)):(p=new bt("#5e5e5e"),f.scale.set(C,C,C),d.scale.set(C*E,C*E,C*E));let he=1;St.value.prefix=="6s"&&(he=-1),f.position.set(s[k].X_spatial0_norm*S,s[k].X_spatial1_norm*he*S,s[k].X_spatial2_norm*S),f.updateMatrix(),this.instancedMesh.setMatrixAt(k,f.matrix),this.instancedMesh.setColorAt(k,p),t.push(p)}_m==0?(_m+=1,XR(s,t)):WR(t),I.length>0?(vu("atac",I),I.length>1?(Qa(),el(),yu()):(gm(),Qa(),el())):g.length>0?(vu("gene",g),g.length>1?(FR(),BR(),yu()):(gm(),Qa(),el())):(vu("celltype"),yu(),Qa(),el()),mm(),hm(),xu(),this.scene.add(this.instancedMesh),this.scene.add(this.instancedMeshUmap)}}const Ml=St.value.prefix;async function $R(){const i=St.value.palleteColumn;try{const e=await qs(i,Ml);let t={};e.forEach(n=>{let[s,a]=n.split(":");s=s.replace(/'/g,"").trim(),a=a.replace(/'/g,"").trim(),t[s]=a}),eR(t)}catch(e){console.error("Failed to load items:",e)}}async function ZR(){try{const i=await qs("genes",Ml);tR(i)}catch(i){console.error("Failed to load items:",i)}}async function KR(){try{const e=(await qs("genes",Ml,!0)).map(t=>ER(t)).filter(t=>t!==null);nR(e)}catch(i){console.error("Failed to load items:",i)}}async function JR(){const i=St.value.columns;let e={},t=[];try{const n=await Promise.all(i.map(s=>qs(s,Ml)));i.forEach((s,a)=>{e[s]=n[a]});for(let s=0;s<e.clusters.length;s++){let a={};for(let c in e)a[c]=e[c][s];t.push(a)}J1(t)}catch(n){console.error("Error combining data:",n)}}function jR(){const i=document.createElement("div");i.id="loadingIndicator";const e=document.createElement("ul");e.setAttribute("helix","");for(let t=0;t<10;t++){const n=document.createElement("li");for(let a=0;a<2;a++){const c=document.createElement("div");n.appendChild(c)}const s=document.createElement("span");n.appendChild(s),e.appendChild(n)}return i.appendChild(e),i}document.addEventListener("DOMContentLoaded",async()=>{xg();const i=jR();document.body.appendChild(i),Jn(!0);try{await $R(),await JR(),await ZR(),await KR();const e=new URL(window.location),t=new URLSearchParams(e.search);if(t.has("celltype")){const a=JSON.parse(decodeURIComponent(t.get("celltype"))).filter(c=>Object.keys(St.value.pallete).includes(c));ks(a)}if(t.has("gene")){const a=JSON.parse(decodeURIComponent(t.get("gene"))).filter(c=>St.value.genes.includes(c));kr(a)}ml(St.value.listPalette),pR(),hR(),ku(St.value.genes.slice(0,1e3)),gg(),TR(),Hu(St.value.atacs.slice(0,1e3)),ih(),xR(),_R();const n=document.body;new YR(n)}catch(e){console.error("Failed to load data:",e)}finally{Jn(!1)}});function QR(){const i=St.value.prefixOptions,e=document.querySelector("#prefix-dropdown-container .dropdown-menu");for(let t=0;t<i.length;t++){const n=document.createElement("p");n.innerHTML=`<a class="dropdown-item">${i[t]}</a>`,e.appendChild(n)}}function eL(){const i=document.getElementById("dropdownMenuButton"),e=document.getElementsByClassName("dropdown-item");for(let t=0;t<e.length;t++)e.item(t).addEventListener("click",()=>{const n=new URLSearchParams("");n.append("prefix",e.item(t).innerText),yo(n),e.item(t).innerText!==St.value.prefix&&(i.innerHTML=St.value.prefix,window.location.reload())})}const tL=()=>{const i=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("atacRadioContainer"),n=document.getElementById("violinContainer"),s=document.getElementById("noViolinContainer"),a=document.getElementById("toggleCellCheckbox"),c=document.getElementById("toggleGeneRadio"),l=document.getElementById("toggleATACRadio"),h=document.getElementById("toggleViolinRadio");a.addEventListener("click",()=>{console.log(i.style.display),i.style.display=i.style.display==="none"?"block":"none",console.log(i.style.display),a.style.backgroundColor="white",a.style.color="black",c.style.backgroundColor="#282828",c.style.color="white",l.style.backgroundColor="#282828",l.style.color="white",h.style.backgroundColor="#282828",h.style.color="white",h.style.backgroundColor="#282828",h.style.color="white",e.style.display==="block"&&(e.style.display="none"),t.style.display==="block"&&(t.style.display="none"),(n.style.display==="block"||s.style.display==="block")&&(n.style.display="none",s.style.display="none"),i.style.display==="none"&&(a.style.backgroundColor="#282828",a.style.color="white")})},nL=()=>{const i=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("atacRadioContainer"),n=document.getElementById("violinContainer"),s=document.getElementById("noViolinContainer"),a=document.getElementById("toggleCellCheckbox"),c=document.getElementById("toggleGeneRadio"),l=document.getElementById("toggleATACRadio"),h=document.getElementById("toggleViolinRadio");c.addEventListener("click",()=>{e.style.display=e.style.display==="none"?"block":"none",c.style.backgroundColor="white",c.style.color="black",a.style.backgroundColor="#282828",a.style.color="white",l.style.backgroundColor="#282828",l.style.color="white",h.style.backgroundColor="#282828",h.style.color="white",i.style.display==="block"&&(i.style.display="none"),t.style.display==="block"&&(t.style.display="none"),(n.style.display==="block"||s.style.display==="block")&&(n.style.display="none",s.style.display="none"),e.style.display==="none"&&(c.style.backgroundColor="#282828",c.style.color="white")})},iL=()=>{const i=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("atacRadioContainer"),n=document.getElementById("violinContainer"),s=document.getElementById("noViolinContainer"),a=document.getElementById("toggleCellCheckbox"),c=document.getElementById("toggleGeneRadio"),l=document.getElementById("toggleATACRadio"),h=document.getElementById("toggleViolinRadio");l.addEventListener("click",()=>{console.log("halo atac clicked"),t.style.display=t.style.display==="none"?"block":"none",l.style.backgroundColor="white",l.style.color="black",a.style.backgroundColor="#282828",a.style.color="white",c.style.backgroundColor="#282828",c.style.color="white",h.style.backgroundColor="#282828",h.style.color="white",i.style.display==="block"&&(i.style.display="none"),e.style.display==="block"&&(e.style.display="none"),(n.style.display==="block"||s.style.display==="block")&&(n.style.display="none",s.style.display="none"),t.style.display==="none"&&(l.style.backgroundColor="#282828",l.style.color="white")})};function rL(i){const t=i.getContext("2d").getImageData(0,0,i.width,i.height);for(let n=0;n<t.data.length;n+=4)if(t.data[n+3]!==0)return!1;return!0}const sL=()=>{const i=document.getElementById("toggleViolinRadio"),e=document.getElementById("violinContainer"),t=document.getElementById("noViolinContainer"),n=document.getElementById("cellCheckbox"),s=document.getElementById("geneRadioContainer"),a=document.getElementById("atacRadioContainer"),c=document.getElementById("toggleCellCheckbox"),l=document.getElementById("toggleGeneRadio"),h=document.getElementById("toggleATACRadio");document.getElementById("violin-image"),i.addEventListener("click",()=>{console.log("violin clicked"),i.style.backgroundColor=i.style.backgroundColor==="white"?"#282828":"white",i.style.color=i.style.color==="black"?"white":"black";const f=document.getElementById("violin-canvas");i.style.backgroundColor=="white"?rL(f)?(console.log("RETURNED TREU"),t.style.display="block"):(console.log("RETURNED FALSE CANVAS NOT EMPTY"),e.style.display="block"):(console.log("TURN OFF"),e.style.display="none",t.style.display="none"),c.style.backgroundColor="#282828",c.style.color="white",l.style.backgroundColor="#282828",l.style.color="white",h.style.backgroundColor="#282828",h.style.color="white",n.style.display==="block"&&(n.style.display="none"),s.style.display==="block"&&(s.style.display="none"),a.style.display==="block"&&(a.style.display="none")})},oL=()=>{const i=document.querySelectorAll(".iconBtn,.toggles"),e=document.getElementById("togglePointSize"),t=document.getElementById("pointSizeSliderBox"),n=document.getElementById("pointSizeSlider"),s=document.getElementById("pointSizeSliderValue"),a=document.getElementById("toggleGenePercentile"),c=document.getElementById("geneSliderBox"),l=document.getElementById("geneSlider"),h=document.getElementById("geneSliderValue"),f=document.getElementById("cellCheckbox"),d=document.getElementById("geneRadioContainer"),p=document.getElementById("toggleCellCheckbox"),_=document.getElementById("toggleGeneRadio");i.forEach(x=>{const S=()=>{const v=x.dataset.target,g=document.getElementById(v);g.style.display="block"},E=()=>{const v=x.dataset.target,g=document.getElementById(v);g.style.display="none"};["mouseenter"].forEach(v=>{x.addEventListener(v,function(){S()})}),["mouseleave"].forEach(v=>{x.addEventListener(v,function(){E()})})}),e.addEventListener("click",()=>{f.style.display==="block"&&(f.style.display="none",p.style.backgroundColor="#282828",p.style.color="white"),d.style.display==="block"&&(d.style.display="none",_.style.backgroundColor="#282828",_.style.color="white"),c.style.display==="block"&&(c.style.display="none"),t.style.display=t.style.display==="none"?"block":"none"}),n.onchange=function(){s.value=parseFloat(this.value).toFixed(2),_u(parseFloat(this.value).toFixed(2))},n.addEventListener("mouseup",function(){s.value=parseFloat(this.value).toFixed(2),_u(parseFloat(this.value).toFixed(2))}),s.onchange=function(){this.value<.1?this.value=.1:this.value>15&&(this.value=15),n.value=parseFloat(this.value).toFixed(2),_u(parseFloat(this.value).toFixed(2))},s.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()},a.addEventListener("click",()=>{f.style.display==="block"&&(f.style.display="none",p.style.backgroundColor="#282828",p.style.color="white"),d.style.display==="block"&&(d.style.display="none",_.style.backgroundColor="#282828",_.style.color="white"),t.style.display==="block"&&(t.style.display="none"),c.style.display=c.style.display==="none"?"block":"none"}),l.addEventListener("mouseup",function(){h.value=parseFloat(this.value).toFixed(2),cm(parseFloat(this.value).toFixed(2))}),h.onchange=function(){this.value<80?this.value=80:this.value>99.99&&(this.value=99.99),l.value=parseFloat(this.value).toFixed(2),cm(parseFloat(this.value).toFixed(2))},h.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()}};$(function(){$(".navbar").load("/src/ui/Navbar/navbar.html",()=>{QR(),eL()})});$(function(){$(".colorbar-wrapper").load("/src/ui/ColorBar/colorBar.html",()=>{})});$(function(){$(".colorbar-wrapper2").load("/src/ui/ColorBar/colorBarGreen.html",()=>{})});$(function(){$(".colorbar-wrapper3").load("/src/ui/ColorBar/colorBarMagenta.html",()=>{})});$(function(){$(".showing-container").load("/src/ui/Showing/showing.html",()=>{})});$(function(){$(".filter").load("/src/ui/Filters/filters.html",()=>{tL(),nL(),iL(),sL(),oL(),AR()})});setInterval(()=>{document.querySelectorAll("body *").forEach(function(i){i.style.visibility="visible"})},0);
