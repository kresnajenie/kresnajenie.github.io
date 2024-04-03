var nS=Object.defineProperty;var iS=(r,e,t)=>e in r?nS(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ch=(r,e,t)=>(iS(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nu="161",Zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rS=0,Rh=1,sS=2,dp=1,oS=2,Di=3,ir=0,Cn=1,Ii=2,er=0,xs=1,Lh=2,Ph=3,Dh=4,aS=5,Sr=100,lS=101,cS=102,Ih=103,Uh=104,uS=200,fS=201,hS=202,dS=203,Gc=204,Hc=205,pS=206,mS=207,gS=208,_S=209,vS=210,xS=211,MS=212,SS=213,ES=214,yS=0,bS=1,TS=2,La=3,AS=4,wS=5,CS=6,RS=7,pp=0,LS=1,PS=2,tr=0,DS=1,IS=2,US=3,NS=4,OS=5,FS=6,mp=300,Es=301,ys=302,Vc=303,Wc=304,Ga=306,kc=1e3,si=1001,Xc=1002,Mn=1003,Nh=1004,qs=1005,wn=1006,sc=1007,yr=1008,nr=1009,BS=1010,zS=1011,iu=1012,gp=1013,Qi=1014,Ui=1015,ao=1016,_p=1017,vp=1018,br=1020,GS=1021,oi=1023,HS=1024,VS=1025,Tr=1026,bs=1027,WS=1028,xp=1029,kS=1030,Mp=1031,Sp=1033,oc=33776,ac=33777,lc=33778,cc=33779,Oh=35840,Fh=35841,Bh=35842,zh=35843,Ep=36196,Gh=37492,Hh=37496,Vh=37808,Wh=37809,kh=37810,Xh=37811,Yh=37812,qh=37813,Kh=37814,Zh=37815,$h=37816,jh=37817,Jh=37818,Qh=37819,ed=37820,td=37821,uc=36492,nd=36494,id=36495,XS=36283,rd=36284,sd=36285,od=36286,yp=3e3,Ar=3001,YS=3200,qS=3201,KS=0,ZS=1,$n="",an="srgb",Oi="srgb-linear",ru="display-p3",Ha="display-p3-linear",Pa="linear",Ft="srgb",Da="rec709",Ia="p3",jr=7680,ad=519,$S=512,jS=513,JS=514,bp=515,QS=516,eE=517,tE=518,nE=519,ld=35044,cd="300 es",Yc=1035,Ni=2e3,Ua=2001;class Cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ud=1234567;const ro=Math.PI/180,lo=180/Math.PI;function As(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function pn(r,e,t){return Math.max(e,Math.min(t,r))}function su(r,e){return(r%e+e)%e}function iE(r,e,t,i,o){return i+(r-e)*(o-i)/(t-e)}function rE(r,e,t){return r!==e?(t-r)/(e-r):0}function so(r,e,t){return(1-t)*r+t*e}function sE(r,e,t,i){return so(r,e,1-Math.exp(-t*i))}function oE(r,e=1){return e-Math.abs(su(r,e*2)-e)}function aE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function lE(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function cE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function uE(r,e){return r+Math.random()*(e-r)}function fE(r){return r*(.5-Math.random())}function hE(r){r!==void 0&&(ud=r);let e=ud+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dE(r){return r*ro}function pE(r){return r*lo}function qc(r){return(r&r-1)===0&&r!==0}function mE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Na(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function gE(r,e,t,i,o){const a=Math.cos,u=Math.sin,c=a(t/2),f=u(t/2),d=a((e+i)/2),p=u((e+i)/2),_=a((e-i)/2),v=u((e-i)/2),M=a((i-e)/2),b=u((i-e)/2);switch(o){case"XYX":r.set(c*p,f*_,f*v,c*d);break;case"YZY":r.set(f*v,c*p,f*_,c*d);break;case"ZXZ":r.set(f*_,f*v,c*p,c*d);break;case"XZX":r.set(c*p,f*b,f*M,c*d);break;case"YXY":r.set(f*M,c*p,f*b,c*d);break;case"ZYZ":r.set(f*b,f*M,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ps(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const _E={DEG2RAD:ro,RAD2DEG:lo,generateUUID:As,clamp:pn,euclideanModulo:su,mapLinear:iE,inverseLerp:rE,lerp:so,damp:sE,pingpong:oE,smoothstep:aE,smootherstep:lE,randInt:cE,randFloat:uE,randFloatSpread:fE,seededRandom:hE,degToRad:dE,radToDeg:pE,isPowerOfTwo:qc,ceilPowerOfTwo:mE,floorPowerOfTwo:Na,setQuaternionFromProperEuler:gE,normalize:vn,denormalize:ps};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*o+e.x,this.y=a*o+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(e,t,i,o,a,u,c,f,d){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,f,d)}set(e,t,i,o,a,u,c,f,d){const p=this.elements;return p[0]=e,p[1]=o,p[2]=c,p[3]=t,p[4]=a,p[5]=f,p[6]=i,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[3],f=i[6],d=i[1],p=i[4],_=i[7],v=i[2],M=i[5],b=i[8],A=o[0],m=o[3],g=o[6],D=o[1],C=o[4],I=o[7],V=o[2],B=o[5],O=o[8];return a[0]=u*A+c*D+f*V,a[3]=u*m+c*C+f*B,a[6]=u*g+c*I+f*O,a[1]=d*A+p*D+_*V,a[4]=d*m+p*C+_*B,a[7]=d*g+p*I+_*O,a[2]=v*A+M*D+b*V,a[5]=v*m+M*C+b*B,a[8]=v*g+M*I+b*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8];return t*u*p-t*c*d-i*a*p+i*c*f+o*a*d-o*u*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],_=p*u-c*d,v=c*f-p*a,M=d*a-u*f,b=t*_+i*v+o*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=_*A,e[1]=(o*d-p*i)*A,e[2]=(c*i-o*u)*A,e[3]=v*A,e[4]=(p*t-o*f)*A,e[5]=(o*a-c*t)*A,e[6]=M*A,e[7]=(i*f-d*t)*A,e[8]=(u*t-i*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,u,c){const f=Math.cos(a),d=Math.sin(a);return this.set(i*f,i*d,-i*(f*u+d*c)+u+e,-o*d,o*f,-o*(-d*u+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(fc.makeScale(e,t)),this}rotate(e){return this.premultiply(fc.makeRotation(-e)),this}translate(e,t){return this.premultiply(fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fc=new mt;function Tp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Oa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function vE(){const r=Oa("canvas");return r.style.display="block",r}const fd={};function Ms(r){r in fd||(fd[r]=!0,console.warn(r))}const hd=new mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dd=new mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ia={[Oi]:{transfer:Pa,primaries:Da,toReference:r=>r,fromReference:r=>r},[an]:{transfer:Ft,primaries:Da,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ha]:{transfer:Pa,primaries:Ia,toReference:r=>r.applyMatrix3(dd),fromReference:r=>r.applyMatrix3(hd)},[ru]:{transfer:Ft,primaries:Ia,toReference:r=>r.convertSRGBToLinear().applyMatrix3(dd),fromReference:r=>r.applyMatrix3(hd).convertLinearToSRGB()}},xE=new Set([Oi,Ha]),Lt={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!xE.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=ia[e].toReference,o=ia[t].fromReference;return o(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ia[r].primaries},getTransfer:function(r){return r===$n?Pa:ia[r].transfer}};function Ss(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function hc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Jr;class Ap{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jr===void 0&&(Jr=Oa("canvas")),Jr.width=e.width,Jr.height=e.height;const i=Jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Jr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=Ss(a[u]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ss(t[i]/255)*255):t[i]=Ss(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ME=0;class wp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=As(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?a.push(dc(o[u].image)):a.push(dc(o[u]))}else a=dc(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function dc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ap.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SE=0;class Rn extends Cr{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,i=si,o=si,a=wn,u=yr,c=oi,f=nr,d=Rn.DEFAULT_ANISOTROPY,p=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=As(),this.name="",this.source=new wp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=f,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===Ar?an:$n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kc:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kc:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===an?Ar:yp}set encoding(e){Ms("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ar?an:$n}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=mp;Rn.DEFAULT_ANISOTROPY=1;class ln{constructor(e=0,t=0,i=0,o=1){ln.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*o+u[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const f=e.elements,d=f[0],p=f[4],_=f[8],v=f[1],M=f[5],b=f[9],A=f[2],m=f[6],g=f[10];if(Math.abs(p-v)<.01&&Math.abs(_-A)<.01&&Math.abs(b-m)<.01){if(Math.abs(p+v)<.1&&Math.abs(_+A)<.1&&Math.abs(b+m)<.1&&Math.abs(d+M+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(d+1)/2,I=(M+1)/2,V=(g+1)/2,B=(p+v)/4,O=(_+A)/4,se=(b+m)/4;return C>I&&C>V?C<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(C),o=B/i,a=O/i):I>V?I<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(I),i=B/o,a=se/o):V<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(V),i=O/a,o=se/a),this.set(i,o,a,t),this}let D=Math.sqrt((m-b)*(m-b)+(_-A)*(_-A)+(v-p)*(v-p));return Math.abs(D)<.001&&(D=1),this.x=(m-b)/D,this.y=(_-A)/D,this.z=(v-p)/D,this.w=Math.acos((d+M+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EE extends Cr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ln(0,0,e,t),this.scissorTest=!1,this.viewport=new ln(0,0,e,t);const o={width:e,height:t,depth:1};i.encoding!==void 0&&(Ms("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ar?an:$n),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Rn(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends EE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Cp extends Rn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yE extends Rn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rr{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,u,c){let f=i[o+0],d=i[o+1],p=i[o+2],_=i[o+3];const v=a[u+0],M=a[u+1],b=a[u+2],A=a[u+3];if(c===0){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(c===1){e[t+0]=v,e[t+1]=M,e[t+2]=b,e[t+3]=A;return}if(_!==A||f!==v||d!==M||p!==b){let m=1-c;const g=f*v+d*M+p*b+_*A,D=g>=0?1:-1,C=1-g*g;if(C>Number.EPSILON){const V=Math.sqrt(C),B=Math.atan2(V,g*D);m=Math.sin(m*B)/V,c=Math.sin(c*B)/V}const I=c*D;if(f=f*m+v*I,d=d*m+M*I,p=p*m+b*I,_=_*m+A*I,m===1-c){const V=1/Math.sqrt(f*f+d*d+p*p+_*_);f*=V,d*=V,p*=V,_*=V}}e[t]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,o,a,u){const c=i[o],f=i[o+1],d=i[o+2],p=i[o+3],_=a[u],v=a[u+1],M=a[u+2],b=a[u+3];return e[t]=c*b+p*_+f*M-d*v,e[t+1]=f*b+p*v+d*_-c*M,e[t+2]=d*b+p*M+c*v-f*_,e[t+3]=p*b-c*_-f*v-d*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,u=e._order,c=Math.cos,f=Math.sin,d=c(i/2),p=c(o/2),_=c(a/2),v=f(i/2),M=f(o/2),b=f(a/2);switch(u){case"XYZ":this._x=v*p*_+d*M*b,this._y=d*M*_-v*p*b,this._z=d*p*b+v*M*_,this._w=d*p*_-v*M*b;break;case"YXZ":this._x=v*p*_+d*M*b,this._y=d*M*_-v*p*b,this._z=d*p*b-v*M*_,this._w=d*p*_+v*M*b;break;case"ZXY":this._x=v*p*_-d*M*b,this._y=d*M*_+v*p*b,this._z=d*p*b+v*M*_,this._w=d*p*_-v*M*b;break;case"ZYX":this._x=v*p*_-d*M*b,this._y=d*M*_+v*p*b,this._z=d*p*b-v*M*_,this._w=d*p*_+v*M*b;break;case"YZX":this._x=v*p*_+d*M*b,this._y=d*M*_+v*p*b,this._z=d*p*b-v*M*_,this._w=d*p*_-v*M*b;break;case"XZY":this._x=v*p*_-d*M*b,this._y=d*M*_-v*p*b,this._z=d*p*b+v*M*_,this._w=d*p*_+v*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],u=t[1],c=t[5],f=t[9],d=t[2],p=t[6],_=t[10],v=i+c+_;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(p-f)*M,this._y=(a-d)*M,this._z=(u-o)*M}else if(i>c&&i>_){const M=2*Math.sqrt(1+i-c-_);this._w=(p-f)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(a+d)/M}else if(c>_){const M=2*Math.sqrt(1+c-i-_);this._w=(a-d)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(f+p)/M}else{const M=2*Math.sqrt(1+_-i-c);this._w=(u-o)/M,this._x=(a+d)/M,this._y=(f+p)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,u=e._w,c=t._x,f=t._y,d=t._z,p=t._w;return this._x=i*p+u*c+o*d-a*f,this._y=o*p+u*f+a*c-i*d,this._z=a*p+u*d+i*f-o*c,this._w=u*p-i*c-o*f-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,u=this._w;let c=u*e._w+i*e._x+o*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=i,this._y=o,this._z=a,this;const f=1-c*c;if(f<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*i+t*this._x,this._y=M*o+t*this._y,this._z=M*a+t*this._z,this.normalize(),this}const d=Math.sqrt(f),p=Math.atan2(d,c),_=Math.sin((1-t)*p)/d,v=Math.sin(t*p)/d;return this._w=u*_+this._w*v,this._x=i*_+this._x*v,this._y=o*_+this._y*v,this._z=a*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),o=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(o),i*Math.sin(a),i*Math.cos(a),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,u=e.y,c=e.z,f=e.w,d=2*(u*o-c*i),p=2*(c*t-a*o),_=2*(a*i-u*t);return this.x=t+f*d+u*_-c*p,this.y=i+f*p+c*d-a*_,this.z=o+f*_+a*p-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,u=t.x,c=t.y,f=t.z;return this.x=o*f-a*c,this.y=a*u-i*f,this.z=i*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pc=new Y,pd=new rr;class Rr{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,ni):ni.fromBufferAttribute(a,u),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ra.copy(i.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),sa.subVectors(this.max,Ks),Qr.subVectors(e.a,Ks),es.subVectors(e.b,Ks),ts.subVectors(e.c,Ks),Yi.subVectors(es,Qr),qi.subVectors(ts,es),gr.subVectors(Qr,ts);let t=[0,-Yi.z,Yi.y,0,-qi.z,qi.y,0,-gr.z,gr.y,Yi.z,0,-Yi.x,qi.z,0,-qi.x,gr.z,0,-gr.x,-Yi.y,Yi.x,0,-qi.y,qi.x,0,-gr.y,gr.x,0];return!mc(t,Qr,es,ts,sa)||(t=[1,0,0,0,1,0,0,0,1],!mc(t,Qr,es,ts,sa))?!1:(oa.crossVectors(Yi,qi),t=[oa.x,oa.y,oa.z],mc(t,Qr,es,ts,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ni=new Y,ra=new Rr,Qr=new Y,es=new Y,ts=new Y,Yi=new Y,qi=new Y,gr=new Y,Ks=new Y,sa=new Y,oa=new Y,_r=new Y;function mc(r,e,t,i,o){for(let a=0,u=r.length-3;a<=u;a+=3){_r.fromArray(r,a);const c=o.x*Math.abs(_r.x)+o.y*Math.abs(_r.y)+o.z*Math.abs(_r.z),f=e.dot(_r),d=t.dot(_r),p=i.dot(_r);if(Math.max(-Math.max(f,d,p),Math.min(f,d,p))>c)return!1}return!0}const bE=new Rr,Zs=new Y,gc=new Y;class co{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bE.setFromPoints(e).getCenter(i);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(Zs,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(gc)),this.expandByPoint(Zs.copy(e.center).sub(gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new Y,_c=new Y,aa=new Y,Ki=new Y,vc=new Y,la=new Y,xc=new Y;class Rp{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){_c.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(_c);const a=e.distanceTo(t)*.5,u=-this.direction.dot(aa),c=Ki.dot(this.direction),f=-Ki.dot(aa),d=Ki.lengthSq(),p=Math.abs(1-u*u);let _,v,M,b;if(p>0)if(_=u*f-c,v=u*c-f,b=a*p,_>=0)if(v>=-b)if(v<=b){const A=1/p;_*=A,v*=A,M=_*(_+u*v+2*c)+v*(u*_+v+2*f)+d}else v=a,_=Math.max(0,-(u*v+c)),M=-_*_+v*(v+2*f)+d;else v=-a,_=Math.max(0,-(u*v+c)),M=-_*_+v*(v+2*f)+d;else v<=-b?(_=Math.max(0,-(-u*a+c)),v=_>0?-a:Math.min(Math.max(-a,-f),a),M=-_*_+v*(v+2*f)+d):v<=b?(_=0,v=Math.min(Math.max(-a,-f),a),M=v*(v+2*f)+d):(_=Math.max(0,-(u*a+c)),v=_>0?a:Math.min(Math.max(-a,-f),a),M=-_*_+v*(v+2*f)+d);else v=u>0?-a:a,_=Math.max(0,-(u*v+c)),M=-_*_+v*(v+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(_c).addScaledVector(aa,v),M}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),o=Ci.dot(Ci)-i*i,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),c=i-u,f=i+u;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,u,c,f;const d=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(i=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(i=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),p>=0?(a=(e.min.y-v.y)*p,u=(e.max.y-v.y)*p):(a=(e.max.y-v.y)*p,u=(e.min.y-v.y)*p),i>u||a>o||((a>i||isNaN(i))&&(i=a),(u<o||isNaN(o))&&(o=u),_>=0?(c=(e.min.z-v.z)*_,f=(e.max.z-v.z)*_):(c=(e.max.z-v.z)*_,f=(e.min.z-v.z)*_),i>f||c>o)||((c>i||i!==i)&&(i=c),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,o,a){vc.subVectors(t,e),la.subVectors(i,e),xc.crossVectors(vc,la);let u=this.direction.dot(xc),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Ki.subVectors(this.origin,e);const f=c*this.direction.dot(la.crossVectors(Ki,la));if(f<0)return null;const d=c*this.direction.dot(vc.cross(Ki));if(d<0||f+d>u)return null;const p=-c*Ki.dot(xc);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,i,o,a,u,c,f,d,p,_,v,M,b,A,m){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,c,f,d,p,_,v,M,b,A,m)}set(e,t,i,o,a,u,c,f,d,p,_,v,M,b,A,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=o,g[1]=a,g[5]=u,g[9]=c,g[13]=f,g[2]=d,g[6]=p,g[10]=_,g[14]=v,g[3]=M,g[7]=b,g[11]=A,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/ns.setFromMatrixColumn(e,0).length(),a=1/ns.setFromMatrixColumn(e,1).length(),u=1/ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,u=Math.cos(i),c=Math.sin(i),f=Math.cos(o),d=Math.sin(o),p=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const v=u*p,M=u*_,b=c*p,A=c*_;t[0]=f*p,t[4]=-f*_,t[8]=d,t[1]=M+b*d,t[5]=v-A*d,t[9]=-c*f,t[2]=A-v*d,t[6]=b+M*d,t[10]=u*f}else if(e.order==="YXZ"){const v=f*p,M=f*_,b=d*p,A=d*_;t[0]=v+A*c,t[4]=b*c-M,t[8]=u*d,t[1]=u*_,t[5]=u*p,t[9]=-c,t[2]=M*c-b,t[6]=A+v*c,t[10]=u*f}else if(e.order==="ZXY"){const v=f*p,M=f*_,b=d*p,A=d*_;t[0]=v-A*c,t[4]=-u*_,t[8]=b+M*c,t[1]=M+b*c,t[5]=u*p,t[9]=A-v*c,t[2]=-u*d,t[6]=c,t[10]=u*f}else if(e.order==="ZYX"){const v=u*p,M=u*_,b=c*p,A=c*_;t[0]=f*p,t[4]=b*d-M,t[8]=v*d+A,t[1]=f*_,t[5]=A*d+v,t[9]=M*d-b,t[2]=-d,t[6]=c*f,t[10]=u*f}else if(e.order==="YZX"){const v=u*f,M=u*d,b=c*f,A=c*d;t[0]=f*p,t[4]=A-v*_,t[8]=b*_+M,t[1]=_,t[5]=u*p,t[9]=-c*p,t[2]=-d*p,t[6]=M*_+b,t[10]=v-A*_}else if(e.order==="XZY"){const v=u*f,M=u*d,b=c*f,A=c*d;t[0]=f*p,t[4]=-_,t[8]=d*p,t[1]=v*_+A,t[5]=u*p,t[9]=M*_-b,t[2]=b*_-M,t[6]=c*p,t[10]=A*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TE,e,AE)}lookAt(e,t,i){const o=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),Zi.crossVectors(i,On),Zi.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Zi.crossVectors(i,On)),Zi.normalize(),ca.crossVectors(On,Zi),o[0]=Zi.x,o[4]=ca.x,o[8]=On.x,o[1]=Zi.y,o[5]=ca.y,o[9]=On.y,o[2]=Zi.z,o[6]=ca.z,o[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],c=i[4],f=i[8],d=i[12],p=i[1],_=i[5],v=i[9],M=i[13],b=i[2],A=i[6],m=i[10],g=i[14],D=i[3],C=i[7],I=i[11],V=i[15],B=o[0],O=o[4],se=o[8],Me=o[12],y=o[1],N=o[5],re=o[9],ve=o[13],G=o[2],Q=o[6],$=o[10],oe=o[14],te=o[3],le=o[7],ae=o[11],de=o[15];return a[0]=u*B+c*y+f*G+d*te,a[4]=u*O+c*N+f*Q+d*le,a[8]=u*se+c*re+f*$+d*ae,a[12]=u*Me+c*ve+f*oe+d*de,a[1]=p*B+_*y+v*G+M*te,a[5]=p*O+_*N+v*Q+M*le,a[9]=p*se+_*re+v*$+M*ae,a[13]=p*Me+_*ve+v*oe+M*de,a[2]=b*B+A*y+m*G+g*te,a[6]=b*O+A*N+m*Q+g*le,a[10]=b*se+A*re+m*$+g*ae,a[14]=b*Me+A*ve+m*oe+g*de,a[3]=D*B+C*y+I*G+V*te,a[7]=D*O+C*N+I*Q+V*le,a[11]=D*se+C*re+I*$+V*ae,a[15]=D*Me+C*ve+I*oe+V*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],u=e[1],c=e[5],f=e[9],d=e[13],p=e[2],_=e[6],v=e[10],M=e[14],b=e[3],A=e[7],m=e[11],g=e[15];return b*(+a*f*_-o*d*_-a*c*v+i*d*v+o*c*M-i*f*M)+A*(+t*f*M-t*d*v+a*u*v-o*u*M+o*d*p-a*f*p)+m*(+t*d*_-t*c*M-a*u*_+i*u*M+a*c*p-i*d*p)+g*(-o*c*p-t*f*_+t*c*v+o*u*_-i*u*v+i*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],c=e[5],f=e[6],d=e[7],p=e[8],_=e[9],v=e[10],M=e[11],b=e[12],A=e[13],m=e[14],g=e[15],D=_*m*d-A*v*d+A*f*M-c*m*M-_*f*g+c*v*g,C=b*v*d-p*m*d-b*f*M+u*m*M+p*f*g-u*v*g,I=p*A*d-b*_*d+b*c*M-u*A*M-p*c*g+u*_*g,V=b*_*f-p*A*f-b*c*v+u*A*v+p*c*m-u*_*m,B=t*D+i*C+o*I+a*V;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return e[0]=D*O,e[1]=(A*v*a-_*m*a-A*o*M+i*m*M+_*o*g-i*v*g)*O,e[2]=(c*m*a-A*f*a+A*o*d-i*m*d-c*o*g+i*f*g)*O,e[3]=(_*f*a-c*v*a-_*o*d+i*v*d+c*o*M-i*f*M)*O,e[4]=C*O,e[5]=(p*m*a-b*v*a+b*o*M-t*m*M-p*o*g+t*v*g)*O,e[6]=(b*f*a-u*m*a-b*o*d+t*m*d+u*o*g-t*f*g)*O,e[7]=(u*v*a-p*f*a+p*o*d-t*v*d-u*o*M+t*f*M)*O,e[8]=I*O,e[9]=(b*_*a-p*A*a-b*i*M+t*A*M+p*i*g-t*_*g)*O,e[10]=(u*A*a-b*c*a+b*i*d-t*A*d-u*i*g+t*c*g)*O,e[11]=(p*c*a-u*_*a-p*i*d+t*_*d+u*i*M-t*c*M)*O,e[12]=V*O,e[13]=(p*A*o-b*_*o+b*i*v-t*A*v-p*i*m+t*_*m)*O,e[14]=(b*c*o-u*A*o-b*i*f+t*A*f+u*i*m-t*c*m)*O,e[15]=(u*_*o-p*c*o+p*i*f-t*_*f-u*i*v+t*c*v)*O,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,u=e.x,c=e.y,f=e.z,d=a*u,p=a*c;return this.set(d*u+i,d*c-o*f,d*f+o*c,0,d*c+o*f,p*c+i,p*f-o*u,0,d*f-o*c,p*f+o*u,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,u){return this.set(1,i,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,u=t._y,c=t._z,f=t._w,d=a+a,p=u+u,_=c+c,v=a*d,M=a*p,b=a*_,A=u*p,m=u*_,g=c*_,D=f*d,C=f*p,I=f*_,V=i.x,B=i.y,O=i.z;return o[0]=(1-(A+g))*V,o[1]=(M+I)*V,o[2]=(b-C)*V,o[3]=0,o[4]=(M-I)*B,o[5]=(1-(v+g))*B,o[6]=(m+D)*B,o[7]=0,o[8]=(b+C)*O,o[9]=(m-D)*O,o[10]=(1-(v+A))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=ns.set(o[0],o[1],o[2]).length();const u=ns.set(o[4],o[5],o[6]).length(),c=ns.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],ii.copy(this);const d=1/a,p=1/u,_=1/c;return ii.elements[0]*=d,ii.elements[1]*=d,ii.elements[2]*=d,ii.elements[4]*=p,ii.elements[5]*=p,ii.elements[6]*=p,ii.elements[8]*=_,ii.elements[9]*=_,ii.elements[10]*=_,t.setFromRotationMatrix(ii),i.x=a,i.y=u,i.z=c,this}makePerspective(e,t,i,o,a,u,c=Ni){const f=this.elements,d=2*a/(t-e),p=2*a/(i-o),_=(t+e)/(t-e),v=(i+o)/(i-o);let M,b;if(c===Ni)M=-(u+a)/(u-a),b=-2*u*a/(u-a);else if(c===Ua)M=-u/(u-a),b=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=d,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=p,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=M,f[14]=b,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,o,a,u,c=Ni){const f=this.elements,d=1/(t-e),p=1/(i-o),_=1/(u-a),v=(t+e)*d,M=(i+o)*p;let b,A;if(c===Ni)b=(u+a)*_,A=-2*_;else if(c===Ua)b=a*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*p,f[9]=0,f[13]=-M,f[2]=0,f[6]=0,f[10]=A,f[14]=-b,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ns=new Y,ii=new qt,TE=new Y(0,0,0),AE=new Y(1,1,1),Zi=new Y,ca=new Y,On=new Y,md=new qt,gd=new rr;class Va{constructor(e=0,t=0,i=0,o=Va.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],u=o[4],c=o[8],f=o[1],d=o[5],p=o[9],_=o[2],v=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(pn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,M),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(pn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-pn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return md.makeRotationFromQuaternion(e),this.setFromRotationMatrix(md,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gd.setFromEuler(this),this.setFromQuaternion(gd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Va.DEFAULT_ORDER="XYZ";class Lp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wE=0;const _d=new Y,is=new rr,Ri=new qt,ua=new Y,$s=new Y,CE=new Y,RE=new rr,vd=new Y(1,0,0),xd=new Y(0,1,0),Md=new Y(0,0,1),LE={type:"added"},PE={type:"removed"};class Sn extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new Y,t=new Va,i=new rr,o=new Y(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new qt},normalMatrix:{value:new mt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(vd,e)}rotateY(e){return this.rotateOnAxis(xd,e)}rotateZ(e){return this.rotateOnAxis(Md,e)}translateOnAxis(e,t){return _d.copy(e).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vd,e)}translateY(e){return this.translateOnAxis(xd,e)}translateZ(e){return this.translateOnAxis(Md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ua.copy(e):ua.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt($s,ua,this.up):Ri.lookAt(ua,$s,this.up),this.quaternion.setFromRotationMatrix(Ri),o&&(Ri.extractRotation(o.matrixWorld),is.setFromRotationMatrix(Ri),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(LE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(PE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,CE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,RE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++){const c=o[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let d=0,p=f.length;d<p;d++){const _=f[d];a(e.shapes,_)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,d=this.material.length;f<d;f++)c.push(a(e.materials,this.material[f]));o.material=c}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];o.animations.push(a(e.animations,f))}}if(t){const c=u(e.geometries),f=u(e.materials),d=u(e.textures),p=u(e.images),_=u(e.shapes),v=u(e.skeletons),M=u(e.animations),b=u(e.nodes);c.length>0&&(i.geometries=c),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),M.length>0&&(i.animations=M),b.length>0&&(i.nodes=b)}return i.object=o,i;function u(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}Sn.DEFAULT_UP=new Y(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new Y,Li=new Y,Mc=new Y,Pi=new Y,rs=new Y,ss=new Y,Sd=new Y,Sc=new Y,Ec=new Y,yc=new Y;class pi{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),ri.subVectors(e,t),o.cross(ri);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){ri.subVectors(o,t),Li.subVectors(i,t),Mc.subVectors(e,t);const u=ri.dot(ri),c=ri.dot(Li),f=ri.dot(Mc),d=Li.dot(Li),p=Li.dot(Mc),_=u*d-c*c;if(_===0)return a.set(0,0,0),null;const v=1/_,M=(d*f-c*p)*v,b=(u*p-c*f)*v;return a.set(1-M-b,b,M)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,i,o,a,u,c,f){return this.getBarycoord(e,t,i,o,Pi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Pi.x),f.addScaledVector(u,Pi.y),f.addScaledVector(c,Pi.z),f)}static isFrontFacing(e,t,i,o){return ri.subVectors(i,t),Li.subVectors(e,t),ri.cross(Li).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ri.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return pi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let u,c;rs.subVectors(o,i),ss.subVectors(a,i),Sc.subVectors(e,i);const f=rs.dot(Sc),d=ss.dot(Sc);if(f<=0&&d<=0)return t.copy(i);Ec.subVectors(e,o);const p=rs.dot(Ec),_=ss.dot(Ec);if(p>=0&&_<=p)return t.copy(o);const v=f*_-p*d;if(v<=0&&f>=0&&p<=0)return u=f/(f-p),t.copy(i).addScaledVector(rs,u);yc.subVectors(e,a);const M=rs.dot(yc),b=ss.dot(yc);if(b>=0&&M<=b)return t.copy(a);const A=M*d-f*b;if(A<=0&&d>=0&&b<=0)return c=d/(d-b),t.copy(i).addScaledVector(ss,c);const m=p*b-M*_;if(m<=0&&_-p>=0&&M-b>=0)return Sd.subVectors(a,o),c=(_-p)/(_-p+(M-b)),t.copy(o).addScaledVector(Sd,c);const g=1/(m+A+v);return u=A*g,c=v*g,t.copy(i).addScaledVector(rs,u).addScaledVector(ss,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},fa={h:0,s:0,l:0};function bc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class bt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Lt.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=Lt.workingColorSpace){if(e=su(e,1),t=pn(t,0,1),i=pn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=bc(u,a,e+1/3),this.g=bc(u,a,e),this.b=bc(u,a,e-1/3)}return Lt.toWorkingColorSpace(this,o),this}setStyle(e,t=an){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const i=Pp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=hc(e.r),this.g=hc(e.g),this.b=hc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return Lt.fromWorkingColorSpace(dn.copy(this),e),Math.round(pn(dn.r*255,0,255))*65536+Math.round(pn(dn.g*255,0,255))*256+Math.round(pn(dn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(dn.copy(this),t);const i=dn.r,o=dn.g,a=dn.b,u=Math.max(i,o,a),c=Math.min(i,o,a);let f,d;const p=(c+u)/2;if(c===u)f=0,d=0;else{const _=u-c;switch(d=p<=.5?_/(u+c):_/(2-u-c),u){case i:f=(o-a)/_+(o<a?6:0);break;case o:f=(a-i)/_+2;break;case a:f=(i-o)/_+4;break}f/=6}return e.h=f,e.s=d,e.l=p,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=an){Lt.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,i=dn.g,o=dn.b;return e!==an?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(fa);const i=so($i.h,fa.h,t),o=so($i.s,fa.s,t),a=so($i.l,fa.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new bt;bt.NAMES=Pp;let DE=0;class Wa extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DE++}),this.uuid=As(),this.name="",this.type="Material",this.blending=xs,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Hc,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gc&&(i.blendSrc=this.blendSrc),this.blendDst!==Hc&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==La&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ad&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const u=[];for(const c in a){const f=a[c];delete f.metadata,u.push(f)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ou extends Wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new Y,ha=new at;class li{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ld,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ms("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ps(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),i=vn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),i=vn(i,this.array),o=vn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),i=vn(i,this.array),o=vn(o,this.array),a=vn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ld&&(e.usage=this.usage),e}}class Dp extends li{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ip extends li{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mi extends li{constructor(e,t,i){super(new Float32Array(e),t,i)}}let IE=0;const Kn=new qt,Tc=new Sn,os=new Y,Fn=new Rr,js=new Rr,nn=new Y;class or extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tp(e)?Ip:Dp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new mt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,i){return Kn.makeTranslation(e,t,i),this.applyMatrix4(Kn),this}scale(e,t,i){return Kn.makeScale(e,t,i),this.applyMatrix4(Kn),this}lookAt(e){return Tc.lookAt(e),Tc.updateMatrix(),this.applyMatrix4(Tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=[];for(let i=0,o=e.length;i<o;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new mi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];Fn.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];js.setFromBufferAttribute(c),this.morphTargetsRelative?(nn.addVectors(Fn.min,js.min),Fn.expandByPoint(nn),nn.addVectors(Fn.max,js.max),Fn.expandByPoint(nn)):(Fn.expandByPoint(js.min),Fn.expandByPoint(js.max))}Fn.getCenter(i);let o=0;for(let a=0,u=e.count;a<u;a++)nn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(nn));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],f=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)nn.fromBufferAttribute(c,d),f&&(os.fromBufferAttribute(e,d),nn.add(os)),o=Math.max(o,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,o=t.position.array,a=t.normal.array,u=t.uv.array,c=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*c),4));const f=this.getAttribute("tangent").array,d=[],p=[];for(let y=0;y<c;y++)d[y]=new Y,p[y]=new Y;const _=new Y,v=new Y,M=new Y,b=new at,A=new at,m=new at,g=new Y,D=new Y;function C(y,N,re){_.fromArray(o,y*3),v.fromArray(o,N*3),M.fromArray(o,re*3),b.fromArray(u,y*2),A.fromArray(u,N*2),m.fromArray(u,re*2),v.sub(_),M.sub(_),A.sub(b),m.sub(b);const ve=1/(A.x*m.y-m.x*A.y);isFinite(ve)&&(g.copy(v).multiplyScalar(m.y).addScaledVector(M,-A.y).multiplyScalar(ve),D.copy(M).multiplyScalar(A.x).addScaledVector(v,-m.x).multiplyScalar(ve),d[y].add(g),d[N].add(g),d[re].add(g),p[y].add(D),p[N].add(D),p[re].add(D))}let I=this.groups;I.length===0&&(I=[{start:0,count:i.length}]);for(let y=0,N=I.length;y<N;++y){const re=I[y],ve=re.start,G=re.count;for(let Q=ve,$=ve+G;Q<$;Q+=3)C(i[Q+0],i[Q+1],i[Q+2])}const V=new Y,B=new Y,O=new Y,se=new Y;function Me(y){O.fromArray(a,y*3),se.copy(O);const N=d[y];V.copy(N),V.sub(O.multiplyScalar(O.dot(N))).normalize(),B.crossVectors(se,N);const ve=B.dot(p[y])<0?-1:1;f[y*4]=V.x,f[y*4+1]=V.y,f[y*4+2]=V.z,f[y*4+3]=ve}for(let y=0,N=I.length;y<N;++y){const re=I[y],ve=re.start,G=re.count;for(let Q=ve,$=ve+G;Q<$;Q+=3)Me(i[Q+0]),Me(i[Q+1]),Me(i[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new li(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,M=i.count;v<M;v++)i.setXYZ(v,0,0,0);const o=new Y,a=new Y,u=new Y,c=new Y,f=new Y,d=new Y,p=new Y,_=new Y;if(e)for(let v=0,M=e.count;v<M;v+=3){const b=e.getX(v+0),A=e.getX(v+1),m=e.getX(v+2);o.fromBufferAttribute(t,b),a.fromBufferAttribute(t,A),u.fromBufferAttribute(t,m),p.subVectors(u,a),_.subVectors(o,a),p.cross(_),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,A),d.fromBufferAttribute(i,m),c.add(p),f.add(p),d.add(p),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(A,f.x,f.y,f.z),i.setXYZ(m,d.x,d.y,d.z)}else for(let v=0,M=t.count;v<M;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),p.subVectors(u,a),_.subVectors(o,a),p.cross(_),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(c,f){const d=c.array,p=c.itemSize,_=c.normalized,v=new d.constructor(f.length*p);let M=0,b=0;for(let A=0,m=f.length;A<m;A++){c.isInterleavedBufferAttribute?M=f[A]*c.data.stride+c.offset:M=f[A]*p;for(let g=0;g<p;g++)v[b++]=d[M++]}return new li(v,p,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new or,i=this.index.array,o=this.attributes;for(const c in o){const f=o[c],d=e(f,i);t.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const f=[],d=a[c];for(let p=0,_=d.length;p<_;p++){const v=d[p],M=e(v,i);f.push(M)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,f=u.length;c<f;c++){const d=u[c];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const o={};let a=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],p=[];for(let _=0,v=d.length;_<v;_++){const M=d[_];p.push(M.toJSON(e.data))}p.length>0&&(o[f]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const d in o){const p=o[d];this.setAttribute(d,p.clone(t))}const a=e.morphAttributes;for(const d in a){const p=[],_=a[d];for(let v=0,M=_.length;v<M;v++)p.push(_[v].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,p=u.length;d<p;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ed=new qt,vr=new Rp,da=new co,yd=new Y,as=new Y,ls=new Y,cs=new Y,Ac=new Y,pa=new Y,ma=new at,ga=new at,_a=new at,bd=new Y,Td=new Y,Ad=new Y,va=new Y,xa=new Y;class ai extends Sn{constructor(e=new or,t=new ou){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(a&&c){pa.set(0,0,0);for(let f=0,d=a.length;f<d;f++){const p=c[f],_=a[f];p!==0&&(Ac.fromBufferAttribute(_,e),u?pa.addScaledVector(Ac,p):pa.addScaledVector(Ac.sub(t),p))}t.add(pa)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(a),vr.copy(e.ray).recast(e.near),!(da.containsPoint(vr.origin)===!1&&(vr.intersectSphere(da,yd)===null||vr.origin.distanceToSquared(yd)>(e.far-e.near)**2))&&(Ed.copy(a).invert(),vr.copy(e.ray).applyMatrix4(Ed),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vr)))}_computeIntersections(e,t,i){let o;const a=this.geometry,u=this.material,c=a.index,f=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,v=a.groups,M=a.drawRange;if(c!==null)if(Array.isArray(u))for(let b=0,A=v.length;b<A;b++){const m=v[b],g=u[m.materialIndex],D=Math.max(m.start,M.start),C=Math.min(c.count,Math.min(m.start+m.count,M.start+M.count));for(let I=D,V=C;I<V;I+=3){const B=c.getX(I),O=c.getX(I+1),se=c.getX(I+2);o=Ma(this,g,e,i,d,p,_,B,O,se),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const b=Math.max(0,M.start),A=Math.min(c.count,M.start+M.count);for(let m=b,g=A;m<g;m+=3){const D=c.getX(m),C=c.getX(m+1),I=c.getX(m+2);o=Ma(this,u,e,i,d,p,_,D,C,I),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let b=0,A=v.length;b<A;b++){const m=v[b],g=u[m.materialIndex],D=Math.max(m.start,M.start),C=Math.min(f.count,Math.min(m.start+m.count,M.start+M.count));for(let I=D,V=C;I<V;I+=3){const B=I,O=I+1,se=I+2;o=Ma(this,g,e,i,d,p,_,B,O,se),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const b=Math.max(0,M.start),A=Math.min(f.count,M.start+M.count);for(let m=b,g=A;m<g;m+=3){const D=m,C=m+1,I=m+2;o=Ma(this,u,e,i,d,p,_,D,C,I),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function UE(r,e,t,i,o,a,u,c){let f;if(e.side===Cn?f=i.intersectTriangle(u,a,o,!0,c):f=i.intersectTriangle(o,a,u,e.side===ir,c),f===null)return null;xa.copy(c),xa.applyMatrix4(r.matrixWorld);const d=t.ray.origin.distanceTo(xa);return d<t.near||d>t.far?null:{distance:d,point:xa.clone(),object:r}}function Ma(r,e,t,i,o,a,u,c,f,d){r.getVertexPosition(c,as),r.getVertexPosition(f,ls),r.getVertexPosition(d,cs);const p=UE(r,e,t,i,as,ls,cs,va);if(p){o&&(ma.fromBufferAttribute(o,c),ga.fromBufferAttribute(o,f),_a.fromBufferAttribute(o,d),p.uv=pi.getInterpolation(va,as,ls,cs,ma,ga,_a,new at)),a&&(ma.fromBufferAttribute(a,c),ga.fromBufferAttribute(a,f),_a.fromBufferAttribute(a,d),p.uv1=pi.getInterpolation(va,as,ls,cs,ma,ga,_a,new at),p.uv2=p.uv1),u&&(bd.fromBufferAttribute(u,c),Td.fromBufferAttribute(u,f),Ad.fromBufferAttribute(u,d),p.normal=pi.getInterpolation(va,as,ls,cs,bd,Td,Ad,new Y),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:f,c:d,normal:new Y,materialIndex:0};pi.getNormal(as,ls,cs,_.normal),p.face=_}return p}class uo extends or{constructor(e=1,t=1,i=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:u};const c=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const f=[],d=[],p=[],_=[];let v=0,M=0;b("z","y","x",-1,-1,i,t,e,u,a,0),b("z","y","x",1,-1,i,t,-e,u,a,1),b("x","z","y",1,1,e,i,t,o,u,2),b("x","z","y",1,-1,e,i,-t,o,u,3),b("x","y","z",1,-1,e,t,i,o,a,4),b("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(f),this.setAttribute("position",new mi(d,3)),this.setAttribute("normal",new mi(p,3)),this.setAttribute("uv",new mi(_,2));function b(A,m,g,D,C,I,V,B,O,se,Me){const y=I/O,N=V/se,re=I/2,ve=V/2,G=B/2,Q=O+1,$=se+1;let oe=0,te=0;const le=new Y;for(let ae=0;ae<$;ae++){const de=ae*N-ve;for(let Ee=0;Ee<Q;Ee++){const $e=Ee*y-re;le[A]=$e*D,le[m]=de*C,le[g]=G,d.push(le.x,le.y,le.z),le[A]=0,le[m]=0,le[g]=B>0?1:-1,p.push(le.x,le.y,le.z),_.push(Ee/O),_.push(1-ae/se),oe+=1}}for(let ae=0;ae<se;ae++)for(let de=0;de<O;de++){const Ee=v+de+Q*ae,$e=v+de+Q*(ae+1),J=v+(de+1)+Q*(ae+1),fe=v+(de+1)+Q*ae;f.push(Ee,$e,fe),f.push($e,J,fe),te+=6}c.addGroup(M,te,Me),M+=te,v+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const o=r[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function xn(r){const e={};for(let t=0;t<r.length;t++){const i=Ts(r[t]);for(const o in i)e[o]=i[o]}return e}function NE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Up(r){return r.getRenderTarget()===null?r.outputColorSpace:Lt.workingColorSpace}const OE={clone:Ts,merge:xn};var FE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends Wa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FE,this.fragmentShader=BE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=NE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Np extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new Y,wd=new at,Cd=new at;class Bn extends Np{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,wd,Cd),t.subVectors(Cd,wd)}setViewOffset(e,t,i,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ro*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,d=u.fullHeight;a+=u.offsetX*o/f,t-=u.offsetY*i/d,o*=u.width/f,i*=u.height/d}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,fs=1;class zE extends Sn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Bn(us,fs,e,t);o.layers=this.layers,this.add(o);const a=new Bn(us,fs,e,t);a.layers=this.layers,this.add(a);const u=new Bn(us,fs,e,t);u.layers=this.layers,this.add(u);const c=new Bn(us,fs,e,t);c.layers=this.layers,this.add(c);const f=new Bn(us,fs,e,t);f.layers=this.layers,this.add(f);const d=new Bn(us,fs,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,u,c,f]=t;for(const d of t)this.remove(d);if(e===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,f,d,p]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,u),e.setRenderTarget(i,2,o),e.render(t,c),e.setRenderTarget(i,3,o),e.render(t,f),e.setRenderTarget(i,4,o),e.render(t,d),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,o),e.render(t,p),e.setRenderTarget(_,v,M),e.xr.enabled=b,i.texture.needsPMREMUpdate=!0}}class Op extends Rn{constructor(e,t,i,o,a,u,c,f,d,p){e=e!==void 0?e:[],t=t!==void 0?t:Es,super(e,t,i,o,a,u,c,f,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class GE extends wr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];t.encoding!==void 0&&(Ms("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ar?an:$n),this.texture=new Op(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new uo(5,5,5),a=new sr({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:er});a.uniforms.tEquirect.value=t;const u=new ai(o,a),c=t.minFilter;return t.minFilter===yr&&(t.minFilter=wn),new zE(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,o){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,o);e.setRenderTarget(a)}}const wc=new Y,HE=new Y,VE=new mt;class Ji{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=wc.subVectors(i,t).cross(HE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wc),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||VE.getNormalMatrix(e),o=this.coplanarPoint(wc).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new co,Sa=new Y;class Fp{constructor(e=new Ji,t=new Ji,i=new Ji,o=new Ji,a=new Ji,u=new Ji){this.planes=[e,t,i,o,a,u]}set(e,t,i,o,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(o),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ni){const i=this.planes,o=e.elements,a=o[0],u=o[1],c=o[2],f=o[3],d=o[4],p=o[5],_=o[6],v=o[7],M=o[8],b=o[9],A=o[10],m=o[11],g=o[12],D=o[13],C=o[14],I=o[15];if(i[0].setComponents(f-a,v-d,m-M,I-g).normalize(),i[1].setComponents(f+a,v+d,m+M,I+g).normalize(),i[2].setComponents(f+u,v+p,m+b,I+D).normalize(),i[3].setComponents(f-u,v-p,m-b,I-D).normalize(),i[4].setComponents(f-c,v-_,m-A,I-C).normalize(),t===Ni)i[5].setComponents(f+c,v+_,m+A,I+C).normalize();else if(t===Ua)i[5].setComponents(c,_,A,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(Sa.x=o.normal.x>0?e.max.x:e.min.x,Sa.y=o.normal.y>0?e.max.y:e.min.y,Sa.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bp(){let r=null,e=!1,t=null,i=null;function o(a,u){t(a,u),i=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function WE(r,e){const t=e.isWebGL2,i=new WeakMap;function o(d,p){const _=d.array,v=d.usage,M=_.byteLength,b=r.createBuffer();r.bindBuffer(p,b),r.bufferData(p,_,v),d.onUploadCallback();let A;if(_ instanceof Float32Array)A=r.FLOAT;else if(_ instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(t)A=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=r.UNSIGNED_SHORT;else if(_ instanceof Int16Array)A=r.SHORT;else if(_ instanceof Uint32Array)A=r.UNSIGNED_INT;else if(_ instanceof Int32Array)A=r.INT;else if(_ instanceof Int8Array)A=r.BYTE;else if(_ instanceof Uint8Array)A=r.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)A=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:b,type:A,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version,size:M}}function a(d,p,_){const v=p.array,M=p._updateRange,b=p.updateRanges;if(r.bindBuffer(_,d),M.count===-1&&b.length===0&&r.bufferSubData(_,0,v),b.length!==0){for(let A=0,m=b.length;A<m;A++){const g=b[A];t?r.bufferSubData(_,g.start*v.BYTES_PER_ELEMENT,v,g.start,g.count):r.bufferSubData(_,g.start*v.BYTES_PER_ELEMENT,v.subarray(g.start,g.start+g.count))}p.clearUpdateRanges()}M.count!==-1&&(t?r.bufferSubData(_,M.offset*v.BYTES_PER_ELEMENT,v,M.offset,M.count):r.bufferSubData(_,M.offset*v.BYTES_PER_ELEMENT,v.subarray(M.offset,M.offset+M.count)),M.count=-1),p.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);p&&(r.deleteBuffer(p.buffer),i.delete(d))}function f(d,p){if(d.isGLBufferAttribute){const v=i.get(d);(!v||v.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const _=i.get(d);if(_===void 0)i.set(d,o(d,p));else if(_.version<d.version){if(_.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(_.buffer,d,p),_.version=d.version}}return{get:u,remove:c,update:f}}class ka extends or{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,u=t/2,c=Math.floor(i),f=Math.floor(o),d=c+1,p=f+1,_=e/c,v=t/f,M=[],b=[],A=[],m=[];for(let g=0;g<p;g++){const D=g*v-u;for(let C=0;C<d;C++){const I=C*_-a;b.push(I,-D,0),A.push(0,0,1),m.push(C/c),m.push(1-g/f)}}for(let g=0;g<f;g++)for(let D=0;D<c;D++){const C=D+d*g,I=D+d*(g+1),V=D+1+d*(g+1),B=D+1+d*g;M.push(C,I,B),M.push(I,V,B)}this.setIndex(M),this.setAttribute("position",new mi(b,3)),this.setAttribute("normal",new mi(A,3)),this.setAttribute("uv",new mi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.widthSegments,e.heightSegments)}}var kE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XE=`#ifdef USE_ALPHAHASH
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
#endif`,YE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$E=`#ifdef USE_AOMAP
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
#endif`,jE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JE=`#ifdef USE_BATCHING
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
#endif`,QE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ny=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iy=`#ifdef USE_IRIDESCENCE
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
#endif`,ry=`#ifdef USE_BUMPMAP
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
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dy=`#define PI 3.141592653589793
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
} // validated`,py=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,my=`vec3 transformedNormal = objectNormal;
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
#endif`,gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,My="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sy=`
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
}`,Ey=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,yy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,by=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ry=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Py=`#ifdef USE_GRADIENTMAP
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
}`,Dy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Oy=`uniform bool receiveShadow;
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
#endif`,Fy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,By=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vy=`PhysicalMaterial material;
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
#endif`,Wy=`struct PhysicalMaterial {
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
}`,ky=`
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
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ky=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$y=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eb=`#if defined( USE_POINTS_UV )
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
#endif`,tb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ib=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rb=`#ifdef USE_MORPHNORMALS
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
#endif`,sb=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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
#endif`,ob=`#ifdef USE_MORPHTARGETS
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
#endif`,ab=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hb=`#ifdef USE_NORMALMAP
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
#endif`,db=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cb=`float getShadowMask() {
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
}`,Rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lb=`#ifdef USE_SKINNING
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
#endif`,Pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Db=`#ifdef USE_SKINNING
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
#endif`,Ib=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ub=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ob=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fb=`#ifdef USE_TRANSMISSION
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
#endif`,Bb=`#ifdef USE_TRANSMISSION
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
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kb=`uniform sampler2D t2D;
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
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`#include <common>
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
}`,$b=`#if DEPTH_PACKING == 3200
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
}`,jb=`#define DISTANCE
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
}`,Jb=`#define DISTANCE
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
}`,Qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
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
}`,iT=`#include <common>
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
}`,rT=`uniform vec3 diffuse;
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
}`,sT=`#define LAMBERT
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
}`,oT=`#define LAMBERT
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
}`,aT=`#define MATCAP
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
}`,lT=`#define MATCAP
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
}`,cT=`#define NORMAL
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
}`,uT=`#define NORMAL
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
}`,fT=`#define PHONG
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
}`,hT=`#define PHONG
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
}`,dT=`#define STANDARD
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
}`,pT=`#define STANDARD
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
}`,mT=`#define TOON
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
}`,gT=`#define TOON
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
}`,_T=`uniform float size;
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
}`,vT=`uniform vec3 diffuse;
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
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,MT=`uniform vec3 color;
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
}`,ST=`uniform float rotation;
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
}`,ET=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:kE,alphahash_pars_fragment:XE,alphamap_fragment:YE,alphamap_pars_fragment:qE,alphatest_fragment:KE,alphatest_pars_fragment:ZE,aomap_fragment:$E,aomap_pars_fragment:jE,batching_pars_vertex:JE,batching_vertex:QE,begin_vertex:ey,beginnormal_vertex:ty,bsdfs:ny,iridescence_fragment:iy,bumpmap_pars_fragment:ry,clipping_planes_fragment:sy,clipping_planes_pars_fragment:oy,clipping_planes_pars_vertex:ay,clipping_planes_vertex:ly,color_fragment:cy,color_pars_fragment:uy,color_pars_vertex:fy,color_vertex:hy,common:dy,cube_uv_reflection_fragment:py,defaultnormal_vertex:my,displacementmap_pars_vertex:gy,displacementmap_vertex:_y,emissivemap_fragment:vy,emissivemap_pars_fragment:xy,colorspace_fragment:My,colorspace_pars_fragment:Sy,envmap_fragment:Ey,envmap_common_pars_fragment:yy,envmap_pars_fragment:by,envmap_pars_vertex:Ty,envmap_physical_pars_fragment:Fy,envmap_vertex:Ay,fog_vertex:wy,fog_pars_vertex:Cy,fog_fragment:Ry,fog_pars_fragment:Ly,gradientmap_pars_fragment:Py,lightmap_fragment:Dy,lightmap_pars_fragment:Iy,lights_lambert_fragment:Uy,lights_lambert_pars_fragment:Ny,lights_pars_begin:Oy,lights_toon_fragment:By,lights_toon_pars_fragment:zy,lights_phong_fragment:Gy,lights_phong_pars_fragment:Hy,lights_physical_fragment:Vy,lights_physical_pars_fragment:Wy,lights_fragment_begin:ky,lights_fragment_maps:Xy,lights_fragment_end:Yy,logdepthbuf_fragment:qy,logdepthbuf_pars_fragment:Ky,logdepthbuf_pars_vertex:Zy,logdepthbuf_vertex:$y,map_fragment:jy,map_pars_fragment:Jy,map_particle_fragment:Qy,map_particle_pars_fragment:eb,metalnessmap_fragment:tb,metalnessmap_pars_fragment:nb,morphcolor_vertex:ib,morphnormal_vertex:rb,morphtarget_pars_vertex:sb,morphtarget_vertex:ob,normal_fragment_begin:ab,normal_fragment_maps:lb,normal_pars_fragment:cb,normal_pars_vertex:ub,normal_vertex:fb,normalmap_pars_fragment:hb,clearcoat_normal_fragment_begin:db,clearcoat_normal_fragment_maps:pb,clearcoat_pars_fragment:mb,iridescence_pars_fragment:gb,opaque_fragment:_b,packing:vb,premultiplied_alpha_fragment:xb,project_vertex:Mb,dithering_fragment:Sb,dithering_pars_fragment:Eb,roughnessmap_fragment:yb,roughnessmap_pars_fragment:bb,shadowmap_pars_fragment:Tb,shadowmap_pars_vertex:Ab,shadowmap_vertex:wb,shadowmask_pars_fragment:Cb,skinbase_vertex:Rb,skinning_pars_vertex:Lb,skinning_vertex:Pb,skinnormal_vertex:Db,specularmap_fragment:Ib,specularmap_pars_fragment:Ub,tonemapping_fragment:Nb,tonemapping_pars_fragment:Ob,transmission_fragment:Fb,transmission_pars_fragment:Bb,uv_pars_fragment:zb,uv_pars_vertex:Gb,uv_vertex:Hb,worldpos_vertex:Vb,background_vert:Wb,background_frag:kb,backgroundCube_vert:Xb,backgroundCube_frag:Yb,cube_vert:qb,cube_frag:Kb,depth_vert:Zb,depth_frag:$b,distanceRGBA_vert:jb,distanceRGBA_frag:Jb,equirect_vert:Qb,equirect_frag:eT,linedashed_vert:tT,linedashed_frag:nT,meshbasic_vert:iT,meshbasic_frag:rT,meshlambert_vert:sT,meshlambert_frag:oT,meshmatcap_vert:aT,meshmatcap_frag:lT,meshnormal_vert:cT,meshnormal_frag:uT,meshphong_vert:fT,meshphong_frag:hT,meshphysical_vert:dT,meshphysical_frag:pT,meshtoon_vert:mT,meshtoon_frag:gT,points_vert:_T,points_frag:vT,shadow_vert:xT,shadow_frag:MT,sprite_vert:ST,sprite_frag:ET},Se={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},di={basic:{uniforms:xn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:xn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new bt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:xn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:xn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:xn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new bt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:xn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:xn([Se.points,Se.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:xn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:xn([Se.common,Se.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:xn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:xn([Se.sprite,Se.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:xn([Se.common,Se.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:xn([Se.lights,Se.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};di.physical={uniforms:xn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Ea={r:0,b:0,g:0};function yT(r,e,t,i,o,a,u){const c=new bt(0);let f=a===!0?0:1,d,p,_=null,v=0,M=null;function b(m,g){let D=!1,C=g.isScene===!0?g.background:null;C&&C.isTexture&&(C=(g.backgroundBlurriness>0?t:e).get(C)),C===null?A(c,f):C&&C.isColor&&(A(C,1),D=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(r.autoClear||D)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),C&&(C.isCubeTexture||C.mapping===Ga)?(p===void 0&&(p=new ai(new uo(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:Ts(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(V,B,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,p.material.toneMapped=Lt.getTransfer(C.colorSpace)!==Ft,(_!==C||v!==C.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,_=C,v=C.version,M=r.toneMapping),p.layers.enableAll(),m.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new ai(new ka(2,2),new sr({name:"BackgroundMaterial",uniforms:Ts(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.toneMapped=Lt.getTransfer(C.colorSpace)!==Ft,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||v!==C.version||M!==r.toneMapping)&&(d.material.needsUpdate=!0,_=C,v=C.version,M=r.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null))}function A(m,g){m.getRGB(Ea,Up(r)),i.buffers.color.setClear(Ea.r,Ea.g,Ea.b,g,u)}return{getClearColor:function(){return c},setClearColor:function(m,g=1){c.set(m),f=g,A(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(m){f=m,A(c,f)},render:b}}function bT(r,e,t,i){const o=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),u=i.isWebGL2||a!==null,c={},f=m(null);let d=f,p=!1;function _(G,Q,$,oe,te){let le=!1;if(u){const ae=A(oe,$,Q);d!==ae&&(d=ae,M(d.object)),le=g(G,oe,$,te),le&&D(G,oe,$,te)}else{const ae=Q.wireframe===!0;(d.geometry!==oe.id||d.program!==$.id||d.wireframe!==ae)&&(d.geometry=oe.id,d.program=$.id,d.wireframe=ae,le=!0)}te!==null&&t.update(te,r.ELEMENT_ARRAY_BUFFER),(le||p)&&(p=!1,se(G,Q,$,oe),te!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function v(){return i.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function M(G){return i.isWebGL2?r.bindVertexArray(G):a.bindVertexArrayOES(G)}function b(G){return i.isWebGL2?r.deleteVertexArray(G):a.deleteVertexArrayOES(G)}function A(G,Q,$){const oe=$.wireframe===!0;let te=c[G.id];te===void 0&&(te={},c[G.id]=te);let le=te[Q.id];le===void 0&&(le={},te[Q.id]=le);let ae=le[oe];return ae===void 0&&(ae=m(v()),le[oe]=ae),ae}function m(G){const Q=[],$=[],oe=[];for(let te=0;te<o;te++)Q[te]=0,$[te]=0,oe[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:$,attributeDivisors:oe,object:G,attributes:{},index:null}}function g(G,Q,$,oe){const te=d.attributes,le=Q.attributes;let ae=0;const de=$.getAttributes();for(const Ee in de)if(de[Ee].location>=0){const J=te[Ee];let fe=le[Ee];if(fe===void 0&&(Ee==="instanceMatrix"&&G.instanceMatrix&&(fe=G.instanceMatrix),Ee==="instanceColor"&&G.instanceColor&&(fe=G.instanceColor)),J===void 0||J.attribute!==fe||fe&&J.data!==fe.data)return!0;ae++}return d.attributesNum!==ae||d.index!==oe}function D(G,Q,$,oe){const te={},le=Q.attributes;let ae=0;const de=$.getAttributes();for(const Ee in de)if(de[Ee].location>=0){let J=le[Ee];J===void 0&&(Ee==="instanceMatrix"&&G.instanceMatrix&&(J=G.instanceMatrix),Ee==="instanceColor"&&G.instanceColor&&(J=G.instanceColor));const fe={};fe.attribute=J,J&&J.data&&(fe.data=J.data),te[Ee]=fe,ae++}d.attributes=te,d.attributesNum=ae,d.index=oe}function C(){const G=d.newAttributes;for(let Q=0,$=G.length;Q<$;Q++)G[Q]=0}function I(G){V(G,0)}function V(G,Q){const $=d.newAttributes,oe=d.enabledAttributes,te=d.attributeDivisors;$[G]=1,oe[G]===0&&(r.enableVertexAttribArray(G),oe[G]=1),te[G]!==Q&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,Q),te[G]=Q)}function B(){const G=d.newAttributes,Q=d.enabledAttributes;for(let $=0,oe=Q.length;$<oe;$++)Q[$]!==G[$]&&(r.disableVertexAttribArray($),Q[$]=0)}function O(G,Q,$,oe,te,le,ae){ae===!0?r.vertexAttribIPointer(G,Q,$,te,le):r.vertexAttribPointer(G,Q,$,oe,te,le)}function se(G,Q,$,oe){if(i.isWebGL2===!1&&(G.isInstancedMesh||oe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const te=oe.attributes,le=$.getAttributes(),ae=Q.defaultAttributeValues;for(const de in le){const Ee=le[de];if(Ee.location>=0){let $e=te[de];if($e===void 0&&(de==="instanceMatrix"&&G.instanceMatrix&&($e=G.instanceMatrix),de==="instanceColor"&&G.instanceColor&&($e=G.instanceColor)),$e!==void 0){const J=$e.normalized,fe=$e.itemSize,Ce=t.get($e);if(Ce===void 0)continue;const We=Ce.buffer,Ge=Ce.type,Pe=Ce.bytesPerElement,_t=i.isWebGL2===!0&&(Ge===r.INT||Ge===r.UNSIGNED_INT||$e.gpuType===gp);if($e.isInterleavedBufferAttribute){const je=$e.data,W=je.stride,Ht=$e.offset;if(je.isInstancedInterleavedBuffer){for(let De=0;De<Ee.locationSize;De++)V(Ee.location+De,je.meshPerAttribute);G.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let De=0;De<Ee.locationSize;De++)I(Ee.location+De);r.bindBuffer(r.ARRAY_BUFFER,We);for(let De=0;De<Ee.locationSize;De++)O(Ee.location+De,fe/Ee.locationSize,Ge,J,W*Pe,(Ht+fe/Ee.locationSize*De)*Pe,_t)}else{if($e.isInstancedBufferAttribute){for(let je=0;je<Ee.locationSize;je++)V(Ee.location+je,$e.meshPerAttribute);G.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let je=0;je<Ee.locationSize;je++)I(Ee.location+je);r.bindBuffer(r.ARRAY_BUFFER,We);for(let je=0;je<Ee.locationSize;je++)O(Ee.location+je,fe/Ee.locationSize,Ge,J,fe*Pe,fe/Ee.locationSize*je*Pe,_t)}}else if(ae!==void 0){const J=ae[de];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(Ee.location,J);break;case 3:r.vertexAttrib3fv(Ee.location,J);break;case 4:r.vertexAttrib4fv(Ee.location,J);break;default:r.vertexAttrib1fv(Ee.location,J)}}}}B()}function Me(){re();for(const G in c){const Q=c[G];for(const $ in Q){const oe=Q[$];for(const te in oe)b(oe[te].object),delete oe[te];delete Q[$]}delete c[G]}}function y(G){if(c[G.id]===void 0)return;const Q=c[G.id];for(const $ in Q){const oe=Q[$];for(const te in oe)b(oe[te].object),delete oe[te];delete Q[$]}delete c[G.id]}function N(G){for(const Q in c){const $=c[Q];if($[G.id]===void 0)continue;const oe=$[G.id];for(const te in oe)b(oe[te].object),delete oe[te];delete $[G.id]}}function re(){ve(),p=!0,d!==f&&(d=f,M(d.object))}function ve(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:_,reset:re,resetDefaultState:ve,dispose:Me,releaseStatesOfGeometry:y,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:I,disableUnusedAttributes:B}}function TT(r,e,t,i){const o=i.isWebGL2;let a;function u(p){a=p}function c(p,_){r.drawArrays(a,p,_),t.update(_,a,1)}function f(p,_,v){if(v===0)return;let M,b;if(o)M=r,b="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[b](a,p,_,v),t.update(_,a,v)}function d(p,_,v){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<v;b++)this.render(p[b],_[b]);else{M.multiDrawArraysWEBGL(a,p,0,_,0,v);let b=0;for(let A=0;A<v;A++)b+=_[A];t.update(b,a,1)}}this.setMode=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function AT(r,e,t){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const f=a(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=u||e.has("WEBGL_draw_buffers"),p=t.logarithmicDepthBuffer===!0,_=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),A=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,I=u||e.has("OES_texture_float"),V=C&&I,B=u?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:d,getMaxAnisotropy:o,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:p,maxTextures:_,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:b,maxAttributes:A,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:D,vertexTextures:C,floatFragmentTextures:I,floatVertexTextures:V,maxSamples:B}}function wT(r){const e=this;let t=null,i=0,o=!1,a=!1;const u=new Ji,c=new mt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const M=_.length!==0||v||i!==0||o;return o=v,i=_.length,M},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,v){t=p(_,v,0)},this.setState=function(_,v,M){const b=_.clippingPlanes,A=_.clipIntersection,m=_.clipShadows,g=r.get(_);if(!o||b===null||b.length===0||a&&!m)a?p(null):d();else{const D=a?0:i,C=D*4;let I=g.clippingState||null;f.value=I,I=p(b,v,C,M);for(let V=0;V!==C;++V)I[V]=t[V];g.clippingState=I,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(_,v,M,b){const A=_!==null?_.length:0;let m=null;if(A!==0){if(m=f.value,b!==!0||m===null){const g=M+A*4,D=v.matrixWorldInverse;c.getNormalMatrix(D),(m===null||m.length<g)&&(m=new Float32Array(g));for(let C=0,I=M;C!==A;++C,I+=4)u.copy(_[C]).applyMatrix4(D,c),u.normal.toArray(m,I),m[I+3]=u.constant}f.value=m,f.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,m}}function CT(r){let e=new WeakMap;function t(u,c){return c===Vc?u.mapping=Es:c===Wc&&(u.mapping=ys),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===Vc||c===Wc)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const d=new GE(f.height);return d.fromEquirectangularTexture(r,u),e.set(u,d),u.addEventListener("dispose",o),t(d.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class RT extends Np{constructor(e=-1,t=1,i=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,u=i+e,c=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,u=a+d*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ms=4,Rd=[.125,.215,.35,.446,.526,.582],Er=20,Cc=new RT,Ld=new bt;let Rc=null,Lc=0,Pc=0;const Mr=(1+Math.sqrt(5))/2,hs=1/Mr,Pd=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,Mr,hs),new Y(0,Mr,-hs),new Y(hs,0,Mr),new Y(-hs,0,Mr),new Y(Mr,hs,0),new Y(-Mr,hs,0)];class Dd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){Rc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rc,Lc,Pc),e.scissorTest=!1,ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:ao,format:oi,colorSpace:Oi,depthBuffer:!1},o=Id(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Id(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LT(a)),this._blurMaterial=PT(a,e,t)}return o}_compileMaterial(e){const t=new ai(this._lodPlanes[0],e);this._renderer.compile(t,Cc)}_sceneToCubeUV(e,t,i,o){const c=new Bn(90,1,t,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,_=p.autoClear,v=p.toneMapping;p.getClearColor(Ld),p.toneMapping=tr,p.autoClear=!1;const M=new ou({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),b=new ai(new uo,M);let A=!1;const m=e.background;m?m.isColor&&(M.color.copy(m),e.background=null,A=!0):(M.color.copy(Ld),A=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(c.up.set(0,f[g],0),c.lookAt(d[g],0,0)):D===1?(c.up.set(0,0,f[g]),c.lookAt(0,d[g],0)):(c.up.set(0,f[g],0),c.lookAt(0,0,d[g]));const C=this._cubeSize;ya(o,D*C,g>2?C:0,C,C),p.setRenderTarget(o),A&&p.render(b,c),p.render(e,c)}b.geometry.dispose(),b.material.dispose(),p.toneMapping=v,p.autoClear=_,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===Es||e.mapping===ys;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ud());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new ai(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;ya(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(u,Cc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=Pd[(o-1)%Pd.length];this._blur(e,o-1,o,a,u)}t.autoClear=i}_blur(e,t,i,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,o,"latitudinal",a),this._halfBlur(u,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,u,c){const f=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,_=new ai(this._lodPlanes[o],d),v=d.uniforms,M=this._sizeLods[i]-1,b=isFinite(a)?Math.PI/(2*M):2*Math.PI/(2*Er-1),A=a/b,m=isFinite(a)?1+Math.floor(p*A):Er;m>Er&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Er}`);const g=[];let D=0;for(let O=0;O<Er;++O){const se=O/A,Me=Math.exp(-se*se/2);g.push(Me),O===0?D+=Me:O<m&&(D+=2*Me)}for(let O=0;O<g.length;O++)g[O]=g[O]/D;v.envMap.value=e.texture,v.samples.value=m,v.weights.value=g,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:C}=this;v.dTheta.value=b,v.mipInt.value=C-i;const I=this._sizeLods[o],V=3*I*(o>C-ms?o-C+ms:0),B=4*(this._cubeSize-I);ya(t,V,B,3*I,2*I),f.setRenderTarget(t),f.render(_,Cc)}}function LT(r){const e=[],t=[],i=[];let o=r;const a=r-ms+1+Rd.length;for(let u=0;u<a;u++){const c=Math.pow(2,o);t.push(c);let f=1/c;u>r-ms?f=Rd[u-r+ms-1]:u===0&&(f=0),i.push(f);const d=1/(c-2),p=-d,_=1+d,v=[p,p,_,p,_,_,p,p,_,_,p,_],M=6,b=6,A=3,m=2,g=1,D=new Float32Array(A*b*M),C=new Float32Array(m*b*M),I=new Float32Array(g*b*M);for(let B=0;B<M;B++){const O=B%3*2/3-1,se=B>2?0:-1,Me=[O,se,0,O+2/3,se,0,O+2/3,se+1,0,O,se,0,O+2/3,se+1,0,O,se+1,0];D.set(Me,A*b*B),C.set(v,m*b*B);const y=[B,B,B,B,B,B];I.set(y,g*b*B)}const V=new or;V.setAttribute("position",new li(D,A)),V.setAttribute("uv",new li(C,m)),V.setAttribute("faceIndex",new li(I,g)),e.push(V),o>ms&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Id(r,e,t){const i=new wr(r,e,t);return i.texture.mapping=Ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ya(r,e,t,i,o){r.viewport.set(e,t,i,o),r.scissor.set(e,t,i,o)}function PT(r,e,t){const i=new Float32Array(Er),o=new Y(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:au(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Ud(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Nd(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function au(){return`

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
	`}function DT(r){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const f=c.mapping,d=f===Vc||f===Wc,p=f===Es||f===ys;if(d||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let _=e.get(c);return t===null&&(t=new Dd(r)),_=d?t.fromEquirectangular(c,_):t.fromCubemap(c,_),e.set(c,_),_.texture}else{if(e.has(c))return e.get(c).texture;{const _=c.image;if(d&&_&&_.height>0||p&&_&&o(_)){t===null&&(t=new Dd(r));const v=d?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,v),c.addEventListener("dispose",a),v.texture}else return null}}}return c}function o(c){let f=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&f++;return f===d}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function IT(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const o=t(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function UT(r,e,t,i){const o={},a=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);for(const b in v.morphAttributes){const A=v.morphAttributes[b];for(let m=0,g=A.length;m<g;m++)e.remove(A[m])}v.removeEventListener("dispose",u),delete o[v.id];const M=a.get(v);M&&(e.remove(M),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function f(_){const v=_.attributes;for(const b in v)e.update(v[b],r.ARRAY_BUFFER);const M=_.morphAttributes;for(const b in M){const A=M[b];for(let m=0,g=A.length;m<g;m++)e.update(A[m],r.ARRAY_BUFFER)}}function d(_){const v=[],M=_.index,b=_.attributes.position;let A=0;if(M!==null){const D=M.array;A=M.version;for(let C=0,I=D.length;C<I;C+=3){const V=D[C+0],B=D[C+1],O=D[C+2];v.push(V,B,B,O,O,V)}}else if(b!==void 0){const D=b.array;A=b.version;for(let C=0,I=D.length/3-1;C<I;C+=3){const V=C+0,B=C+1,O=C+2;v.push(V,B,B,O,O,V)}}else return;const m=new(Tp(v)?Ip:Dp)(v,1);m.version=A;const g=a.get(_);g&&e.remove(g),a.set(_,m)}function p(_){const v=a.get(_);if(v){const M=_.index;M!==null&&v.version<M.version&&d(_)}else d(_);return a.get(_)}return{get:c,update:f,getWireframeAttribute:p}}function NT(r,e,t,i){const o=i.isWebGL2;let a;function u(M){a=M}let c,f;function d(M){c=M.type,f=M.bytesPerElement}function p(M,b){r.drawElements(a,b,c,M*f),t.update(b,a,1)}function _(M,b,A){if(A===0)return;let m,g;if(o)m=r,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](a,b,c,M*f,A),t.update(b,a,A)}function v(M,b,A){if(A===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<A;g++)this.render(M[g]/f,b[g]);else{m.multiDrawElementsWEBGL(a,b,0,c,M,0,A);let g=0;for(let D=0;D<A;D++)g+=b[D];t.update(g,a,1)}}this.setMode=u,this.setIndex=d,this.render=p,this.renderInstances=_,this.renderMultiDraw=v}function OT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,c){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=c*(a/3);break;case r.LINES:t.lines+=c*(a/2);break;case r.LINE_STRIP:t.lines+=c*(a-1);break;case r.LINE_LOOP:t.lines+=c*a;break;case r.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function FT(r,e){return r[0]-e[0]}function BT(r,e){return Math.abs(e[1])-Math.abs(r[1])}function zT(r,e,t){const i={},o=new Float32Array(8),a=new WeakMap,u=new ln,c=[];for(let d=0;d<8;d++)c[d]=[d,0];function f(d,p,_){const v=d.morphTargetInfluences;if(e.isWebGL2===!0){const b=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,A=b!==void 0?b.length:0;let m=a.get(p);if(m===void 0||m.count!==A){let Q=function(){ve.dispose(),a.delete(p),p.removeEventListener("dispose",Q)};var M=Q;m!==void 0&&m.texture.dispose();const C=p.morphAttributes.position!==void 0,I=p.morphAttributes.normal!==void 0,V=p.morphAttributes.color!==void 0,B=p.morphAttributes.position||[],O=p.morphAttributes.normal||[],se=p.morphAttributes.color||[];let Me=0;C===!0&&(Me=1),I===!0&&(Me=2),V===!0&&(Me=3);let y=p.attributes.position.count*Me,N=1;y>e.maxTextureSize&&(N=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const re=new Float32Array(y*N*4*A),ve=new Cp(re,y,N,A);ve.type=Ui,ve.needsUpdate=!0;const G=Me*4;for(let $=0;$<A;$++){const oe=B[$],te=O[$],le=se[$],ae=y*N*4*$;for(let de=0;de<oe.count;de++){const Ee=de*G;C===!0&&(u.fromBufferAttribute(oe,de),re[ae+Ee+0]=u.x,re[ae+Ee+1]=u.y,re[ae+Ee+2]=u.z,re[ae+Ee+3]=0),I===!0&&(u.fromBufferAttribute(te,de),re[ae+Ee+4]=u.x,re[ae+Ee+5]=u.y,re[ae+Ee+6]=u.z,re[ae+Ee+7]=0),V===!0&&(u.fromBufferAttribute(le,de),re[ae+Ee+8]=u.x,re[ae+Ee+9]=u.y,re[ae+Ee+10]=u.z,re[ae+Ee+11]=le.itemSize===4?u.w:1)}}m={count:A,texture:ve,size:new at(y,N)},a.set(p,m),p.addEventListener("dispose",Q)}let g=0;for(let C=0;C<v.length;C++)g+=v[C];const D=p.morphTargetsRelative?1:1-g;_.getUniforms().setValue(r,"morphTargetBaseInfluence",D),_.getUniforms().setValue(r,"morphTargetInfluences",v),_.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),_.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const b=v===void 0?0:v.length;let A=i[p.id];if(A===void 0||A.length!==b){A=[];for(let I=0;I<b;I++)A[I]=[I,0];i[p.id]=A}for(let I=0;I<b;I++){const V=A[I];V[0]=I,V[1]=v[I]}A.sort(BT);for(let I=0;I<8;I++)I<b&&A[I][1]?(c[I][0]=A[I][0],c[I][1]=A[I][1]):(c[I][0]=Number.MAX_SAFE_INTEGER,c[I][1]=0);c.sort(FT);const m=p.morphAttributes.position,g=p.morphAttributes.normal;let D=0;for(let I=0;I<8;I++){const V=c[I],B=V[0],O=V[1];B!==Number.MAX_SAFE_INTEGER&&O?(m&&p.getAttribute("morphTarget"+I)!==m[B]&&p.setAttribute("morphTarget"+I,m[B]),g&&p.getAttribute("morphNormal"+I)!==g[B]&&p.setAttribute("morphNormal"+I,g[B]),o[I]=O,D+=O):(m&&p.hasAttribute("morphTarget"+I)===!0&&p.deleteAttribute("morphTarget"+I),g&&p.hasAttribute("morphNormal"+I)===!0&&p.deleteAttribute("morphNormal"+I),o[I]=0)}const C=p.morphTargetsRelative?1:1-D;_.getUniforms().setValue(r,"morphTargetBaseInfluence",C),_.getUniforms().setValue(r,"morphTargetInfluences",o)}}return{update:f}}function GT(r,e,t,i){let o=new WeakMap;function a(f){const d=i.render.frame,p=f.geometry,_=e.get(f,p);if(o.get(_)!==d&&(e.update(_),o.set(_,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),o.get(f)!==d&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),o.set(f,d))),f.isSkinnedMesh){const v=f.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return _}function u(){o=new WeakMap}function c(f){const d=f.target;d.removeEventListener("dispose",c),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:u}}class zp extends Rn{constructor(e,t,i,o,a,u,c,f,d,p){if(p=p!==void 0?p:Tr,p!==Tr&&p!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Tr&&(i=Qi),i===void 0&&p===bs&&(i=br),super(null,o,a,u,c,f,p,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Mn,this.minFilter=f!==void 0?f:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gp=new Rn,Hp=new zp(1,1);Hp.compareFunction=bp;const Vp=new Cp,Wp=new yE,kp=new Op,Od=[],Fd=[],Bd=new Float32Array(16),zd=new Float32Array(9),Gd=new Float32Array(4);function ws(r,e,t){const i=r[0];if(i<=0||i>0)return r;const o=e*t;let a=Od[o];if(a===void 0&&(a=new Float32Array(o),Od[o]=a),e!==0){i.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,r[u].toArray(a,c)}return a}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function en(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Xa(r,e){let t=Fd[e];t===void 0&&(t=new Int32Array(e),Fd[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function HT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function VT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),en(t,e)}}function WT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),en(t,e)}}function kT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),en(t,e)}}function XT(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Gd.set(i),r.uniformMatrix2fv(this.addr,!1,Gd),en(t,i)}}function YT(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;zd.set(i),r.uniformMatrix3fv(this.addr,!1,zd),en(t,i)}}function qT(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Bd.set(i),r.uniformMatrix4fv(this.addr,!1,Bd),en(t,i)}}function KT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ZT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),en(t,e)}}function $T(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),en(t,e)}}function jT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),en(t,e)}}function JT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function QT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),en(t,e)}}function eA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),en(t,e)}}function tA(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),en(t,e)}}function nA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o);const a=this.type===r.SAMPLER_2D_SHADOW?Hp:Gp;t.setTexture2D(e||a,o)}function iA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||Wp,o)}function rA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||kp,o)}function sA(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||Vp,o)}function oA(r){switch(r){case 5126:return HT;case 35664:return VT;case 35665:return WT;case 35666:return kT;case 35674:return XT;case 35675:return YT;case 35676:return qT;case 5124:case 35670:return KT;case 35667:case 35671:return ZT;case 35668:case 35672:return $T;case 35669:case 35673:return jT;case 5125:return JT;case 36294:return QT;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return sA}}function aA(r,e){r.uniform1fv(this.addr,e)}function lA(r,e){const t=ws(e,this.size,2);r.uniform2fv(this.addr,t)}function cA(r,e){const t=ws(e,this.size,3);r.uniform3fv(this.addr,t)}function uA(r,e){const t=ws(e,this.size,4);r.uniform4fv(this.addr,t)}function fA(r,e){const t=ws(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function hA(r,e){const t=ws(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function dA(r,e){const t=ws(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function pA(r,e){r.uniform1iv(this.addr,e)}function mA(r,e){r.uniform2iv(this.addr,e)}function gA(r,e){r.uniform3iv(this.addr,e)}function _A(r,e){r.uniform4iv(this.addr,e)}function vA(r,e){r.uniform1uiv(this.addr,e)}function xA(r,e){r.uniform2uiv(this.addr,e)}function MA(r,e){r.uniform3uiv(this.addr,e)}function SA(r,e){r.uniform4uiv(this.addr,e)}function EA(r,e,t){const i=this.cache,o=e.length,a=Xa(t,o);Qt(i,a)||(r.uniform1iv(this.addr,a),en(i,a));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Gp,a[u])}function yA(r,e,t){const i=this.cache,o=e.length,a=Xa(t,o);Qt(i,a)||(r.uniform1iv(this.addr,a),en(i,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Wp,a[u])}function bA(r,e,t){const i=this.cache,o=e.length,a=Xa(t,o);Qt(i,a)||(r.uniform1iv(this.addr,a),en(i,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||kp,a[u])}function TA(r,e,t){const i=this.cache,o=e.length,a=Xa(t,o);Qt(i,a)||(r.uniform1iv(this.addr,a),en(i,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Vp,a[u])}function AA(r){switch(r){case 5126:return aA;case 35664:return lA;case 35665:return cA;case 35666:return uA;case 35674:return fA;case 35675:return hA;case 35676:return dA;case 5124:case 35670:return pA;case 35667:case 35671:return mA;case 35668:case 35672:return gA;case 35669:case 35673:return _A;case 5125:return vA;case 36294:return xA;case 36295:return MA;case 36296:return SA;case 35678:case 36198:case 36298:case 36306:case 35682:return EA;case 35679:case 36299:case 36307:return yA;case 35680:case 36300:case 36308:case 36293:return bA;case 36289:case 36303:case 36311:case 36292:return TA}}class wA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=oA(t.type)}}class CA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AA(t.type)}}class RA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const c=o[a];c.setValue(e,t[c.id],i)}}}const Dc=/(\w+)(\])?(\[|\.)?/g;function Hd(r,e){r.seq.push(e),r.map[e.id]=e}function LA(r,e,t){const i=r.name,o=i.length;for(Dc.lastIndex=0;;){const a=Dc.exec(i),u=Dc.lastIndex;let c=a[1];const f=a[2]==="]",d=a[3];if(f&&(c=c|0),d===void 0||d==="["&&u+2===o){Hd(t,d===void 0?new wA(c,r,e):new CA(c,r,e));break}else{let _=t.map[c];_===void 0&&(_=new RA(c),Hd(t,_)),t=_}}}class Ca{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);LA(a,u,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,u=t.length;a!==u;++a){const c=t[a],f=i[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&i.push(u)}return i}}function Vd(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const PA=37297;let DA=0;function IA(r,e){const t=r.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}function UA(r){const e=Lt.getPrimaries(Lt.workingColorSpace),t=Lt.getPrimaries(r);let i;switch(e===t?i="":e===Ia&&t===Da?i="LinearDisplayP3ToLinearSRGB":e===Da&&t===Ia&&(i="LinearSRGBToLinearDisplayP3"),r){case Oi:case Ha:return[i,"LinearTransferOETF"];case an:case ru:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function Wd(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+IA(r.getShaderSource(e),u)}else return o}function NA(r,e){const t=UA(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function OA(r,e){let t;switch(e){case DS:t="Linear";break;case IS:t="Reinhard";break;case US:t="OptimizedCineon";break;case NS:t="ACESFilmic";break;case FS:t="AgX";break;case OS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function FA(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.alphaToCoverage||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gs).join(`
`)}function BA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function zA(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function GA(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=r.getActiveAttrib(e,o),u=a.name;let c=1;a.type===r.FLOAT_MAT2&&(c=2),a.type===r.FLOAT_MAT3&&(c=3),a.type===r.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:r.getAttribLocation(e,u),locationSize:c}}return t}function gs(r){return r!==""}function kd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(r){return r.replace(HA,WA)}const VA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function WA(r,e){let t=ht[e];if(t===void 0){const i=VA.get(e);if(i!==void 0)t=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kc(t)}const kA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yd(r){return r.replace(kA,XA)}function XA(r,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function qd(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function YA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===dp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===oS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function qA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Es:case ys:e="ENVMAP_TYPE_CUBE";break;case Ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function ZA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case pp:e="ENVMAP_BLENDING_MULTIPLY";break;case LS:e="ENVMAP_BLENDING_MIX";break;case PS:e="ENVMAP_BLENDING_ADD";break}return e}function $A(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function jA(r,e,t,i){const o=r.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const f=YA(t),d=qA(t),p=KA(t),_=ZA(t),v=$A(t),M=t.isWebGL2?"":FA(t),b=BA(t),A=zA(a),m=o.createProgram();let g,D,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(gs).join(`
`),g.length>0&&(g+=`
`),D=[M,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(gs).join(`
`),D.length>0&&(D+=`
`)):(g=[qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),D=[M,qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?ht.tonemapping_pars_fragment:"",t.toneMapping!==tr?OA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,NA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),u=Kc(u),u=kd(u,t),u=Xd(u,t),c=Kc(c),c=kd(c,t),c=Xd(c,t),u=Yd(u),c=Yd(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,D=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D);const I=C+g+u,V=C+D+c,B=Vd(o,o.VERTEX_SHADER,I),O=Vd(o,o.FRAGMENT_SHADER,V);o.attachShader(m,B),o.attachShader(m,O),t.index0AttributeName!==void 0?o.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(m,0,"position"),o.linkProgram(m);function se(re){if(r.debug.checkShaderErrors){const ve=o.getProgramInfoLog(m).trim(),G=o.getShaderInfoLog(B).trim(),Q=o.getShaderInfoLog(O).trim();let $=!0,oe=!0;if(o.getProgramParameter(m,o.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,m,B,O);else{const te=Wd(o,B,"vertex"),le=Wd(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(m,o.VALIDATE_STATUS)+`

Material Name: `+re.name+`
Material Type: `+re.type+`

Program Info Log: `+ve+`
`+te+`
`+le)}else ve!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ve):(G===""||Q==="")&&(oe=!1);oe&&(re.diagnostics={runnable:$,programLog:ve,vertexShader:{log:G,prefix:g},fragmentShader:{log:Q,prefix:D}})}o.deleteShader(B),o.deleteShader(O),Me=new Ca(o,m),y=GA(o,m)}let Me;this.getUniforms=function(){return Me===void 0&&se(this),Me};let y;this.getAttributes=function(){return y===void 0&&se(this),y};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=o.getProgramParameter(m,PA)),N},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DA++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=B,this.fragmentShader=O,this}let JA=0;class QA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new e1(e),t.set(e,i)),i}}class e1{constructor(e){this.id=JA++,this.code=e,this.usedTimes=0}}function t1(r,e,t,i,o,a,u){const c=new Lp,f=new QA,d=new Set,p=[],_=o.isWebGL2,v=o.logarithmicDepthBuffer,M=o.vertexTextures;let b=o.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return d.add(y),y===0?"uv":`uv${y}`}function g(y,N,re,ve,G){const Q=ve.fog,$=G.geometry,oe=y.isMeshStandardMaterial?ve.environment:null,te=(y.isMeshStandardMaterial?t:e).get(y.envMap||oe),le=te&&te.mapping===Ga?te.image.height:null,ae=A[y.type];y.precision!==null&&(b=o.getMaxPrecision(y.precision),b!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",b,"instead."));const de=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ee=de!==void 0?de.length:0;let $e=0;$.morphAttributes.position!==void 0&&($e=1),$.morphAttributes.normal!==void 0&&($e=2),$.morphAttributes.color!==void 0&&($e=3);let J,fe,Ce,We;if(ae){const dt=di[ae];J=dt.vertexShader,fe=dt.fragmentShader}else J=y.vertexShader,fe=y.fragmentShader,f.update(y),Ce=f.getVertexShaderID(y),We=f.getFragmentShaderID(y);const Ge=r.getRenderTarget(),Pe=G.isInstancedMesh===!0,_t=G.isBatchedMesh===!0,je=!!y.map,W=!!y.matcap,Ht=!!te,De=!!y.aoMap,ke=!!y.lightMap,Fe=!!y.bumpMap,xt=!!y.normalMap,et=!!y.displacementMap,R=!!y.emissiveMap,E=!!y.metalnessMap,X=!!y.roughnessMap,me=y.anisotropy>0,ue=y.clearcoat>0,ge=y.iridescence>0,Ie=y.sheen>0,ye=y.transmission>0,we=me&&!!y.anisotropyMap,Be=ue&&!!y.clearcoatMap,Qe=ue&&!!y.clearcoatNormalMap,he=ue&&!!y.clearcoatRoughnessMap,Mt=ge&&!!y.iridescenceMap,rt=ge&&!!y.iridescenceThicknessMap,Je=Ie&&!!y.sheenColorMap,ze=Ie&&!!y.sheenRoughnessMap,Ae=!!y.specularMap,tt=!!y.specularColorMap,U=!!y.specularIntensityMap,xe=ye&&!!y.transmissionMap,be=ye&&!!y.thicknessMap,He=!!y.gradientMap,L=!!y.alphaMap,_e=y.alphaTest>0,pe=!!y.alphaHash,Ue=!!y.extensions;let Ve=tr;y.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(Ve=r.toneMapping);const Et={isWebGL2:_,shaderID:ae,shaderType:y.type,shaderName:y.name,vertexShader:J,fragmentShader:fe,defines:y.defines,customVertexShaderID:Ce,customFragmentShaderID:We,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:b,batching:_t,instancing:Pe,instancingColor:Pe&&G.instanceColor!==null,supportsVertexTextures:M,outputColorSpace:Ge===null?r.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:Oi,alphaToCoverage:!!y.alphaToCoverage,map:je,matcap:W,envMap:Ht,envMapMode:Ht&&te.mapping,envMapCubeUVHeight:le,aoMap:De,lightMap:ke,bumpMap:Fe,normalMap:xt,displacementMap:M&&et,emissiveMap:R,normalMapObjectSpace:xt&&y.normalMapType===ZS,normalMapTangentSpace:xt&&y.normalMapType===KS,metalnessMap:E,roughnessMap:X,anisotropy:me,anisotropyMap:we,clearcoat:ue,clearcoatMap:Be,clearcoatNormalMap:Qe,clearcoatRoughnessMap:he,iridescence:ge,iridescenceMap:Mt,iridescenceThicknessMap:rt,sheen:Ie,sheenColorMap:Je,sheenRoughnessMap:ze,specularMap:Ae,specularColorMap:tt,specularIntensityMap:U,transmission:ye,transmissionMap:xe,thicknessMap:be,gradientMap:He,opaque:y.transparent===!1&&y.blending===xs&&y.alphaToCoverage===!1,alphaMap:L,alphaTest:_e,alphaHash:pe,combine:y.combine,mapUv:je&&m(y.map.channel),aoMapUv:De&&m(y.aoMap.channel),lightMapUv:ke&&m(y.lightMap.channel),bumpMapUv:Fe&&m(y.bumpMap.channel),normalMapUv:xt&&m(y.normalMap.channel),displacementMapUv:et&&m(y.displacementMap.channel),emissiveMapUv:R&&m(y.emissiveMap.channel),metalnessMapUv:E&&m(y.metalnessMap.channel),roughnessMapUv:X&&m(y.roughnessMap.channel),anisotropyMapUv:we&&m(y.anisotropyMap.channel),clearcoatMapUv:Be&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ze&&m(y.sheenRoughnessMap.channel),specularMapUv:Ae&&m(y.specularMap.channel),specularColorMapUv:tt&&m(y.specularColorMap.channel),specularIntensityMapUv:U&&m(y.specularIntensityMap.channel),transmissionMapUv:xe&&m(y.transmissionMap.channel),thicknessMapUv:be&&m(y.thicknessMap.channel),alphaMapUv:L&&m(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(xt||me),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!$.attributes.uv&&(je||L),fog:!!Q,useFog:y.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:G.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:$e,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&re.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ve,useLegacyLights:r._useLegacyLights,decodeVideoTexture:je&&y.map.isVideoTexture===!0&&Lt.getTransfer(y.map.colorSpace)===Ft,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ii,flipSided:y.side===Cn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:Ue&&y.extensions.derivatives===!0,extensionFragDepth:Ue&&y.extensions.fragDepth===!0,extensionDrawBuffers:Ue&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ue&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ue&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ue&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:_||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Et.vertexUv1s=d.has(1),Et.vertexUv2s=d.has(2),Et.vertexUv3s=d.has(3),d.clear(),Et}function D(y){const N=[];if(y.shaderID?N.push(y.shaderID):(N.push(y.customVertexShaderID),N.push(y.customFragmentShaderID)),y.defines!==void 0)for(const re in y.defines)N.push(re),N.push(y.defines[re]);return y.isRawShaderMaterial===!1&&(C(N,y),I(N,y),N.push(r.outputColorSpace)),N.push(y.customProgramCacheKey),N.join()}function C(y,N){y.push(N.precision),y.push(N.outputColorSpace),y.push(N.envMapMode),y.push(N.envMapCubeUVHeight),y.push(N.mapUv),y.push(N.alphaMapUv),y.push(N.lightMapUv),y.push(N.aoMapUv),y.push(N.bumpMapUv),y.push(N.normalMapUv),y.push(N.displacementMapUv),y.push(N.emissiveMapUv),y.push(N.metalnessMapUv),y.push(N.roughnessMapUv),y.push(N.anisotropyMapUv),y.push(N.clearcoatMapUv),y.push(N.clearcoatNormalMapUv),y.push(N.clearcoatRoughnessMapUv),y.push(N.iridescenceMapUv),y.push(N.iridescenceThicknessMapUv),y.push(N.sheenColorMapUv),y.push(N.sheenRoughnessMapUv),y.push(N.specularMapUv),y.push(N.specularColorMapUv),y.push(N.specularIntensityMapUv),y.push(N.transmissionMapUv),y.push(N.thicknessMapUv),y.push(N.combine),y.push(N.fogExp2),y.push(N.sizeAttenuation),y.push(N.morphTargetsCount),y.push(N.morphAttributeCount),y.push(N.numDirLights),y.push(N.numPointLights),y.push(N.numSpotLights),y.push(N.numSpotLightMaps),y.push(N.numHemiLights),y.push(N.numRectAreaLights),y.push(N.numDirLightShadows),y.push(N.numPointLightShadows),y.push(N.numSpotLightShadows),y.push(N.numSpotLightShadowsWithMaps),y.push(N.numLightProbes),y.push(N.shadowMapType),y.push(N.toneMapping),y.push(N.numClippingPlanes),y.push(N.numClipIntersection),y.push(N.depthPacking)}function I(y,N){c.disableAll(),N.isWebGL2&&c.enable(0),N.supportsVertexTextures&&c.enable(1),N.instancing&&c.enable(2),N.instancingColor&&c.enable(3),N.matcap&&c.enable(4),N.envMap&&c.enable(5),N.normalMapObjectSpace&&c.enable(6),N.normalMapTangentSpace&&c.enable(7),N.clearcoat&&c.enable(8),N.iridescence&&c.enable(9),N.alphaTest&&c.enable(10),N.vertexColors&&c.enable(11),N.vertexAlphas&&c.enable(12),N.vertexUv1s&&c.enable(13),N.vertexUv2s&&c.enable(14),N.vertexUv3s&&c.enable(15),N.vertexTangents&&c.enable(16),N.anisotropy&&c.enable(17),N.alphaHash&&c.enable(18),N.batching&&c.enable(19),y.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.skinning&&c.enable(4),N.morphTargets&&c.enable(5),N.morphNormals&&c.enable(6),N.morphColors&&c.enable(7),N.premultipliedAlpha&&c.enable(8),N.shadowMapEnabled&&c.enable(9),N.useLegacyLights&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.alphaToCoverage&&c.enable(20),y.push(c.mask)}function V(y){const N=A[y.type];let re;if(N){const ve=di[N];re=OE.clone(ve.uniforms)}else re=y.uniforms;return re}function B(y,N){let re;for(let ve=0,G=p.length;ve<G;ve++){const Q=p[ve];if(Q.cacheKey===N){re=Q,++re.usedTimes;break}}return re===void 0&&(re=new jA(r,N,y,a),p.push(re)),re}function O(y){if(--y.usedTimes===0){const N=p.indexOf(y);p[N]=p[p.length-1],p.pop(),y.destroy()}}function se(y){f.remove(y)}function Me(){f.dispose()}return{getParameters:g,getProgramCacheKey:D,getUniforms:V,acquireProgram:B,releaseProgram:O,releaseShaderCache:se,programs:p,dispose:Me}}function n1(){let r=new WeakMap;function e(a){let u=r.get(a);return u===void 0&&(u={},r.set(a,u)),u}function t(a){r.delete(a)}function i(a,u,c){r.get(a)[u]=c}function o(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:o}}function i1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Kd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Zd(){const r=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function u(_,v,M,b,A,m){let g=r[e];return g===void 0?(g={id:_.id,object:_,geometry:v,material:M,groupOrder:b,renderOrder:_.renderOrder,z:A,group:m},r[e]=g):(g.id=_.id,g.object=_,g.geometry=v,g.material=M,g.groupOrder=b,g.renderOrder=_.renderOrder,g.z=A,g.group=m),e++,g}function c(_,v,M,b,A,m){const g=u(_,v,M,b,A,m);M.transmission>0?i.push(g):M.transparent===!0?o.push(g):t.push(g)}function f(_,v,M,b,A,m){const g=u(_,v,M,b,A,m);M.transmission>0?i.unshift(g):M.transparent===!0?o.unshift(g):t.unshift(g)}function d(_,v){t.length>1&&t.sort(_||i1),i.length>1&&i.sort(v||Kd),o.length>1&&o.sort(v||Kd)}function p(){for(let _=e,v=r.length;_<v;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:c,unshift:f,finish:p,sort:d}}function r1(){let r=new WeakMap;function e(i,o){const a=r.get(i);let u;return a===void 0?(u=new Zd,r.set(i,[u])):o>=a.length?(u=new Zd,a.push(u)):u=a[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function s1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new bt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function o1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let a1=0;function l1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function c1(r,e){const t=new s1,i=o1(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)o.probe.push(new Y);const a=new Y,u=new qt,c=new qt;function f(p,_){let v=0,M=0,b=0;for(let re=0;re<9;re++)o.probe[re].set(0,0,0);let A=0,m=0,g=0,D=0,C=0,I=0,V=0,B=0,O=0,se=0,Me=0;p.sort(l1);const y=_===!0?Math.PI:1;for(let re=0,ve=p.length;re<ve;re++){const G=p[re],Q=G.color,$=G.intensity,oe=G.distance,te=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=Q.r*$*y,M+=Q.g*$*y,b+=Q.b*$*y;else if(G.isLightProbe){for(let le=0;le<9;le++)o.probe[le].addScaledVector(G.sh.coefficients[le],$);Me++}else if(G.isDirectionalLight){const le=t.get(G);if(le.color.copy(G.color).multiplyScalar(G.intensity*y),G.castShadow){const ae=G.shadow,de=i.get(G);de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize=ae.mapSize,o.directionalShadow[A]=de,o.directionalShadowMap[A]=te,o.directionalShadowMatrix[A]=G.shadow.matrix,I++}o.directional[A]=le,A++}else if(G.isSpotLight){const le=t.get(G);le.position.setFromMatrixPosition(G.matrixWorld),le.color.copy(Q).multiplyScalar($*y),le.distance=oe,le.coneCos=Math.cos(G.angle),le.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),le.decay=G.decay,o.spot[g]=le;const ae=G.shadow;if(G.map&&(o.spotLightMap[O]=G.map,O++,ae.updateMatrices(G),G.castShadow&&se++),o.spotLightMatrix[g]=ae.matrix,G.castShadow){const de=i.get(G);de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize=ae.mapSize,o.spotShadow[g]=de,o.spotShadowMap[g]=te,B++}g++}else if(G.isRectAreaLight){const le=t.get(G);le.color.copy(Q).multiplyScalar($),le.halfWidth.set(G.width*.5,0,0),le.halfHeight.set(0,G.height*.5,0),o.rectArea[D]=le,D++}else if(G.isPointLight){const le=t.get(G);if(le.color.copy(G.color).multiplyScalar(G.intensity*y),le.distance=G.distance,le.decay=G.decay,G.castShadow){const ae=G.shadow,de=i.get(G);de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize=ae.mapSize,de.shadowCameraNear=ae.camera.near,de.shadowCameraFar=ae.camera.far,o.pointShadow[m]=de,o.pointShadowMap[m]=te,o.pointShadowMatrix[m]=G.shadow.matrix,V++}o.point[m]=le,m++}else if(G.isHemisphereLight){const le=t.get(G);le.skyColor.copy(G.color).multiplyScalar($*y),le.groundColor.copy(G.groundColor).multiplyScalar($*y),o.hemi[C]=le,C++}}D>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Se.LTC_FLOAT_1,o.rectAreaLTC2=Se.LTC_FLOAT_2):(o.rectAreaLTC1=Se.LTC_HALF_1,o.rectAreaLTC2=Se.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Se.LTC_FLOAT_1,o.rectAreaLTC2=Se.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Se.LTC_HALF_1,o.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=v,o.ambient[1]=M,o.ambient[2]=b;const N=o.hash;(N.directionalLength!==A||N.pointLength!==m||N.spotLength!==g||N.rectAreaLength!==D||N.hemiLength!==C||N.numDirectionalShadows!==I||N.numPointShadows!==V||N.numSpotShadows!==B||N.numSpotMaps!==O||N.numLightProbes!==Me)&&(o.directional.length=A,o.spot.length=g,o.rectArea.length=D,o.point.length=m,o.hemi.length=C,o.directionalShadow.length=I,o.directionalShadowMap.length=I,o.pointShadow.length=V,o.pointShadowMap.length=V,o.spotShadow.length=B,o.spotShadowMap.length=B,o.directionalShadowMatrix.length=I,o.pointShadowMatrix.length=V,o.spotLightMatrix.length=B+O-se,o.spotLightMap.length=O,o.numSpotLightShadowsWithMaps=se,o.numLightProbes=Me,N.directionalLength=A,N.pointLength=m,N.spotLength=g,N.rectAreaLength=D,N.hemiLength=C,N.numDirectionalShadows=I,N.numPointShadows=V,N.numSpotShadows=B,N.numSpotMaps=O,N.numLightProbes=Me,o.version=a1++)}function d(p,_){let v=0,M=0,b=0,A=0,m=0;const g=_.matrixWorldInverse;for(let D=0,C=p.length;D<C;D++){const I=p[D];if(I.isDirectionalLight){const V=o.directional[v];V.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),V.direction.sub(a),V.direction.transformDirection(g),v++}else if(I.isSpotLight){const V=o.spot[b];V.position.setFromMatrixPosition(I.matrixWorld),V.position.applyMatrix4(g),V.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),V.direction.sub(a),V.direction.transformDirection(g),b++}else if(I.isRectAreaLight){const V=o.rectArea[A];V.position.setFromMatrixPosition(I.matrixWorld),V.position.applyMatrix4(g),c.identity(),u.copy(I.matrixWorld),u.premultiply(g),c.extractRotation(u),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),V.halfWidth.applyMatrix4(c),V.halfHeight.applyMatrix4(c),A++}else if(I.isPointLight){const V=o.point[M];V.position.setFromMatrixPosition(I.matrixWorld),V.position.applyMatrix4(g),M++}else if(I.isHemisphereLight){const V=o.hemi[m];V.direction.setFromMatrixPosition(I.matrixWorld),V.direction.transformDirection(g),m++}}}return{setup:f,setupView:d,state:o}}function $d(r,e){const t=new c1(r,e),i=[],o=[];function a(){i.length=0,o.length=0}function u(_){i.push(_)}function c(_){o.push(_)}function f(_){t.setup(i,_)}function d(_){t.setupView(i,_)}return{init:a,state:{lightsArray:i,shadowsArray:o,lights:t},setupLights:f,setupLightsView:d,pushLight:u,pushShadow:c}}function u1(r,e){let t=new WeakMap;function i(a,u=0){const c=t.get(a);let f;return c===void 0?(f=new $d(r,e),t.set(a,[f])):u>=c.length?(f=new $d(r,e),c.push(f)):f=c[u],f}function o(){t=new WeakMap}return{get:i,dispose:o}}class f1 extends Wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class h1 extends Wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const d1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p1=`uniform sampler2D shadow_pass;
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
}`;function m1(r,e,t){let i=new Fp;const o=new at,a=new at,u=new ln,c=new f1({depthPacking:qS}),f=new h1,d={},p=t.maxTextureSize,_={[ir]:Cn,[Cn]:ir,[Ii]:Ii},v=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:d1,fragmentShader:p1}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const b=new or;b.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ai(b,v),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dp;let g=this.type;this.render=function(B,O,se){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||B.length===0)return;const Me=r.getRenderTarget(),y=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),re=r.state;re.setBlending(er),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const ve=g!==Di&&this.type===Di,G=g===Di&&this.type!==Di;for(let Q=0,$=B.length;Q<$;Q++){const oe=B[Q],te=oe.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;o.copy(te.mapSize);const le=te.getFrameExtents();if(o.multiply(le),a.copy(te.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/le.x),o.x=a.x*le.x,te.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/le.y),o.y=a.y*le.y,te.mapSize.y=a.y)),te.map===null||ve===!0||G===!0){const de=this.type!==Di?{minFilter:Mn,magFilter:Mn}:{};te.map!==null&&te.map.dispose(),te.map=new wr(o.x,o.y,de),te.map.texture.name=oe.name+".shadowMap",te.camera.updateProjectionMatrix()}r.setRenderTarget(te.map),r.clear();const ae=te.getViewportCount();for(let de=0;de<ae;de++){const Ee=te.getViewport(de);u.set(a.x*Ee.x,a.y*Ee.y,a.x*Ee.z,a.y*Ee.w),re.viewport(u),te.updateMatrices(oe,de),i=te.getFrustum(),I(O,se,te.camera,oe,this.type)}te.isPointLightShadow!==!0&&this.type===Di&&D(te,se),te.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(Me,y,N)};function D(B,O){const se=e.update(A);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new wr(o.x,o.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(O,null,se,v,A,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(O,null,se,M,A,null)}function C(B,O,se,Me){let y=null;const N=se.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(N!==void 0)y=N;else if(y=se.isPointLight===!0?f:c,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const re=y.uuid,ve=O.uuid;let G=d[re];G===void 0&&(G={},d[re]=G);let Q=G[ve];Q===void 0&&(Q=y.clone(),G[ve]=Q,O.addEventListener("dispose",V)),y=Q}if(y.visible=O.visible,y.wireframe=O.wireframe,Me===Di?y.side=O.shadowSide!==null?O.shadowSide:O.side:y.side=O.shadowSide!==null?O.shadowSide:_[O.side],y.alphaMap=O.alphaMap,y.alphaTest=O.alphaTest,y.map=O.map,y.clipShadows=O.clipShadows,y.clippingPlanes=O.clippingPlanes,y.clipIntersection=O.clipIntersection,y.displacementMap=O.displacementMap,y.displacementScale=O.displacementScale,y.displacementBias=O.displacementBias,y.wireframeLinewidth=O.wireframeLinewidth,y.linewidth=O.linewidth,se.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const re=r.properties.get(y);re.light=se}return y}function I(B,O,se,Me,y){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&y===Di)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,B.matrixWorld);const ve=e.update(B),G=B.material;if(Array.isArray(G)){const Q=ve.groups;for(let $=0,oe=Q.length;$<oe;$++){const te=Q[$],le=G[te.materialIndex];if(le&&le.visible){const ae=C(B,le,Me,y);B.onBeforeShadow(r,B,O,se,ve,ae,te),r.renderBufferDirect(se,null,ve,ae,B,te),B.onAfterShadow(r,B,O,se,ve,ae,te)}}}else if(G.visible){const Q=C(B,G,Me,y);B.onBeforeShadow(r,B,O,se,ve,Q,null),r.renderBufferDirect(se,null,ve,Q,B,null),B.onAfterShadow(r,B,O,se,ve,Q,null)}}const re=B.children;for(let ve=0,G=re.length;ve<G;ve++)I(re[ve],O,se,Me,y)}function V(B){B.target.removeEventListener("dispose",V);for(const se in d){const Me=d[se],y=B.target.uuid;y in Me&&(Me[y].dispose(),delete Me[y])}}}function g1(r,e,t){const i=t.isWebGL2;function o(){let L=!1;const _e=new ln;let pe=null;const Ue=new ln(0,0,0,0);return{setMask:function(Ve){pe!==Ve&&!L&&(r.colorMask(Ve,Ve,Ve,Ve),pe=Ve)},setLocked:function(Ve){L=Ve},setClear:function(Ve,Et,dt,Ct,Zt){Zt===!0&&(Ve*=Ct,Et*=Ct,dt*=Ct),_e.set(Ve,Et,dt,Ct),Ue.equals(_e)===!1&&(r.clearColor(Ve,Et,dt,Ct),Ue.copy(_e))},reset:function(){L=!1,pe=null,Ue.set(-1,0,0,0)}}}function a(){let L=!1,_e=null,pe=null,Ue=null;return{setTest:function(Ve){Ve?Pe(r.DEPTH_TEST):_t(r.DEPTH_TEST)},setMask:function(Ve){_e!==Ve&&!L&&(r.depthMask(Ve),_e=Ve)},setFunc:function(Ve){if(pe!==Ve){switch(Ve){case yS:r.depthFunc(r.NEVER);break;case bS:r.depthFunc(r.ALWAYS);break;case TS:r.depthFunc(r.LESS);break;case La:r.depthFunc(r.LEQUAL);break;case AS:r.depthFunc(r.EQUAL);break;case wS:r.depthFunc(r.GEQUAL);break;case CS:r.depthFunc(r.GREATER);break;case RS:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=Ve}},setLocked:function(Ve){L=Ve},setClear:function(Ve){Ue!==Ve&&(r.clearDepth(Ve),Ue=Ve)},reset:function(){L=!1,_e=null,pe=null,Ue=null}}}function u(){let L=!1,_e=null,pe=null,Ue=null,Ve=null,Et=null,dt=null,Ct=null,Zt=null;return{setTest:function(yt){L||(yt?Pe(r.STENCIL_TEST):_t(r.STENCIL_TEST))},setMask:function(yt){_e!==yt&&!L&&(r.stencilMask(yt),_e=yt)},setFunc:function(yt,It,rn){(pe!==yt||Ue!==It||Ve!==rn)&&(r.stencilFunc(yt,It,rn),pe=yt,Ue=It,Ve=rn)},setOp:function(yt,It,rn){(Et!==yt||dt!==It||Ct!==rn)&&(r.stencilOp(yt,It,rn),Et=yt,dt=It,Ct=rn)},setLocked:function(yt){L=yt},setClear:function(yt){Zt!==yt&&(r.clearStencil(yt),Zt=yt)},reset:function(){L=!1,_e=null,pe=null,Ue=null,Ve=null,Et=null,dt=null,Ct=null,Zt=null}}}const c=new o,f=new a,d=new u,p=new WeakMap,_=new WeakMap;let v={},M={},b=new WeakMap,A=[],m=null,g=!1,D=null,C=null,I=null,V=null,B=null,O=null,se=null,Me=new bt(0,0,0),y=0,N=!1,re=null,ve=null,G=null,Q=null,$=null;const oe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,le=0;const ae=r.getParameter(r.VERSION);ae.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(ae)[1]),te=le>=1):ae.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),te=le>=2);let de=null,Ee={};const $e=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),fe=new ln().fromArray($e),Ce=new ln().fromArray(J);function We(L,_e,pe,Ue){const Ve=new Uint8Array(4),Et=r.createTexture();r.bindTexture(L,Et),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let dt=0;dt<pe;dt++)i&&(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)?r.texImage3D(_e,0,r.RGBA,1,1,Ue,0,r.RGBA,r.UNSIGNED_BYTE,Ve):r.texImage2D(_e+dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ve);return Et}const Ge={};Ge[r.TEXTURE_2D]=We(r.TEXTURE_2D,r.TEXTURE_2D,1),Ge[r.TEXTURE_CUBE_MAP]=We(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ge[r.TEXTURE_2D_ARRAY]=We(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ge[r.TEXTURE_3D]=We(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Pe(r.DEPTH_TEST),f.setFunc(La),et(!1),R(Rh),Pe(r.CULL_FACE),Fe(er);function Pe(L){v[L]!==!0&&(r.enable(L),v[L]=!0)}function _t(L){v[L]!==!1&&(r.disable(L),v[L]=!1)}function je(L,_e){return M[L]!==_e?(r.bindFramebuffer(L,_e),M[L]=_e,i&&(L===r.DRAW_FRAMEBUFFER&&(M[r.FRAMEBUFFER]=_e),L===r.FRAMEBUFFER&&(M[r.DRAW_FRAMEBUFFER]=_e)),!0):!1}function W(L,_e){let pe=A,Ue=!1;if(L)if(pe=b.get(_e),pe===void 0&&(pe=[],b.set(_e,pe)),L.isWebGLMultipleRenderTargets){const Ve=L.texture;if(pe.length!==Ve.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let Et=0,dt=Ve.length;Et<dt;Et++)pe[Et]=r.COLOR_ATTACHMENT0+Et;pe.length=Ve.length,Ue=!0}}else pe[0]!==r.COLOR_ATTACHMENT0&&(pe[0]=r.COLOR_ATTACHMENT0,Ue=!0);else pe[0]!==r.BACK&&(pe[0]=r.BACK,Ue=!0);Ue&&(t.isWebGL2?r.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Ht(L){return m!==L?(r.useProgram(L),m=L,!0):!1}const De={[Sr]:r.FUNC_ADD,[lS]:r.FUNC_SUBTRACT,[cS]:r.FUNC_REVERSE_SUBTRACT};if(i)De[Ih]=r.MIN,De[Uh]=r.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(De[Ih]=L.MIN_EXT,De[Uh]=L.MAX_EXT)}const ke={[uS]:r.ZERO,[fS]:r.ONE,[hS]:r.SRC_COLOR,[Gc]:r.SRC_ALPHA,[vS]:r.SRC_ALPHA_SATURATE,[gS]:r.DST_COLOR,[pS]:r.DST_ALPHA,[dS]:r.ONE_MINUS_SRC_COLOR,[Hc]:r.ONE_MINUS_SRC_ALPHA,[_S]:r.ONE_MINUS_DST_COLOR,[mS]:r.ONE_MINUS_DST_ALPHA,[xS]:r.CONSTANT_COLOR,[MS]:r.ONE_MINUS_CONSTANT_COLOR,[SS]:r.CONSTANT_ALPHA,[ES]:r.ONE_MINUS_CONSTANT_ALPHA};function Fe(L,_e,pe,Ue,Ve,Et,dt,Ct,Zt,yt){if(L===er){g===!0&&(_t(r.BLEND),g=!1);return}if(g===!1&&(Pe(r.BLEND),g=!0),L!==aS){if(L!==D||yt!==N){if((C!==Sr||B!==Sr)&&(r.blendEquation(r.FUNC_ADD),C=Sr,B=Sr),yt)switch(L){case xs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Lh:r.blendFunc(r.ONE,r.ONE);break;case Ph:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case xs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Lh:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ph:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}I=null,V=null,O=null,se=null,Me.set(0,0,0),y=0,D=L,N=yt}return}Ve=Ve||_e,Et=Et||pe,dt=dt||Ue,(_e!==C||Ve!==B)&&(r.blendEquationSeparate(De[_e],De[Ve]),C=_e,B=Ve),(pe!==I||Ue!==V||Et!==O||dt!==se)&&(r.blendFuncSeparate(ke[pe],ke[Ue],ke[Et],ke[dt]),I=pe,V=Ue,O=Et,se=dt),(Ct.equals(Me)===!1||Zt!==y)&&(r.blendColor(Ct.r,Ct.g,Ct.b,Zt),Me.copy(Ct),y=Zt),D=L,N=!1}function xt(L,_e){L.side===Ii?_t(r.CULL_FACE):Pe(r.CULL_FACE);let pe=L.side===Cn;_e&&(pe=!pe),et(pe),L.blending===xs&&L.transparent===!1?Fe(er):Fe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),f.setFunc(L.depthFunc),f.setTest(L.depthTest),f.setMask(L.depthWrite),c.setMask(L.colorWrite);const Ue=L.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(L.stencilWriteMask),d.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),d.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),X(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pe(r.SAMPLE_ALPHA_TO_COVERAGE):_t(r.SAMPLE_ALPHA_TO_COVERAGE)}function et(L){re!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),re=L)}function R(L){L!==rS?(Pe(r.CULL_FACE),L!==ve&&(L===Rh?r.cullFace(r.BACK):L===sS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_t(r.CULL_FACE),ve=L}function E(L){L!==G&&(te&&r.lineWidth(L),G=L)}function X(L,_e,pe){L?(Pe(r.POLYGON_OFFSET_FILL),(Q!==_e||$!==pe)&&(r.polygonOffset(_e,pe),Q=_e,$=pe)):_t(r.POLYGON_OFFSET_FILL)}function me(L){L?Pe(r.SCISSOR_TEST):_t(r.SCISSOR_TEST)}function ue(L){L===void 0&&(L=r.TEXTURE0+oe-1),de!==L&&(r.activeTexture(L),de=L)}function ge(L,_e,pe){pe===void 0&&(de===null?pe=r.TEXTURE0+oe-1:pe=de);let Ue=Ee[pe];Ue===void 0&&(Ue={type:void 0,texture:void 0},Ee[pe]=Ue),(Ue.type!==L||Ue.texture!==_e)&&(de!==pe&&(r.activeTexture(pe),de=pe),r.bindTexture(L,_e||Ge[L]),Ue.type=L,Ue.texture=_e)}function Ie(){const L=Ee[de];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ye(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Qe(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Je(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(L){fe.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),fe.copy(L))}function U(L){Ce.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Ce.copy(L))}function xe(L,_e){let pe=_.get(_e);pe===void 0&&(pe=new WeakMap,_.set(_e,pe));let Ue=pe.get(L);Ue===void 0&&(Ue=r.getUniformBlockIndex(_e,L.name),pe.set(L,Ue))}function be(L,_e){const Ue=_.get(_e).get(L);p.get(_e)!==Ue&&(r.uniformBlockBinding(_e,Ue,L.__bindingPointIndex),p.set(_e,Ue))}function He(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},de=null,Ee={},M={},b=new WeakMap,A=[],m=null,g=!1,D=null,C=null,I=null,V=null,B=null,O=null,se=null,Me=new bt(0,0,0),y=0,N=!1,re=null,ve=null,G=null,Q=null,$=null,fe.set(0,0,r.canvas.width,r.canvas.height),Ce.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Pe,disable:_t,bindFramebuffer:je,drawBuffers:W,useProgram:Ht,setBlending:Fe,setMaterial:xt,setFlipSided:et,setCullFace:R,setLineWidth:E,setPolygonOffset:X,setScissorTest:me,activeTexture:ue,bindTexture:ge,unbindTexture:Ie,compressedTexImage2D:ye,compressedTexImage3D:we,texImage2D:ze,texImage3D:Ae,updateUBOMapping:xe,uniformBlockBinding:be,texStorage2D:rt,texStorage3D:Je,texSubImage2D:Be,texSubImage3D:Qe,compressedTexSubImage2D:he,compressedTexSubImage3D:Mt,scissor:tt,viewport:U,reset:He}}function _1(r,e,t,i,o,a,u){const c=o.isWebGL2,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let _;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,E){return M?new OffscreenCanvas(R,E):Oa("canvas")}function A(R,E,X,me){let ue=1;if((R.width>me||R.height>me)&&(ue=me/Math.max(R.width,R.height)),ue<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ge=E?Na:Math.floor,Ie=ge(ue*R.width),ye=ge(ue*R.height);_===void 0&&(_=b(Ie,ye));const we=X?b(Ie,ye):_;return we.width=Ie,we.height=ye,we.getContext("2d").drawImage(R,0,0,Ie,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ie+"x"+ye+")."),we}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return qc(R.width)&&qc(R.height)}function g(R){return c?!1:R.wrapS!==si||R.wrapT!==si||R.minFilter!==Mn&&R.minFilter!==wn}function D(R,E){return R.generateMipmaps&&E&&R.minFilter!==Mn&&R.minFilter!==wn}function C(R){r.generateMipmap(R)}function I(R,E,X,me,ue=!1){if(c===!1)return E;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ge=E;if(E===r.RED&&(X===r.FLOAT&&(ge=r.R32F),X===r.HALF_FLOAT&&(ge=r.R16F),X===r.UNSIGNED_BYTE&&(ge=r.R8)),E===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(ge=r.R8UI),X===r.UNSIGNED_SHORT&&(ge=r.R16UI),X===r.UNSIGNED_INT&&(ge=r.R32UI),X===r.BYTE&&(ge=r.R8I),X===r.SHORT&&(ge=r.R16I),X===r.INT&&(ge=r.R32I)),E===r.RG&&(X===r.FLOAT&&(ge=r.RG32F),X===r.HALF_FLOAT&&(ge=r.RG16F),X===r.UNSIGNED_BYTE&&(ge=r.RG8)),E===r.RGBA){const Ie=ue?Pa:Lt.getTransfer(me);X===r.FLOAT&&(ge=r.RGBA32F),X===r.HALF_FLOAT&&(ge=r.RGBA16F),X===r.UNSIGNED_BYTE&&(ge=Ie===Ft?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(ge=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(ge=r.RGB5_A1)}return(ge===r.R16F||ge===r.R32F||ge===r.RG16F||ge===r.RG32F||ge===r.RGBA16F||ge===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function V(R,E,X){return D(R,X)===!0||R.isFramebufferTexture&&R.minFilter!==Mn&&R.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function B(R){return R===Mn||R===Nh||R===qs?r.NEAREST:r.LINEAR}function O(R){const E=R.target;E.removeEventListener("dispose",O),Me(E),E.isVideoTexture&&p.delete(E)}function se(R){const E=R.target;E.removeEventListener("dispose",se),N(E)}function Me(R){const E=i.get(R);if(E.__webglInit===void 0)return;const X=R.source,me=v.get(X);if(me){const ue=me[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&y(R),Object.keys(me).length===0&&v.delete(X)}i.remove(R)}function y(R){const E=i.get(R);r.deleteTexture(E.__webglTexture);const X=R.source,me=v.get(X);delete me[E.__cacheKey],u.memory.textures--}function N(R){const E=R.texture,X=i.get(R),me=i.get(E);if(me.__webglTexture!==void 0&&(r.deleteTexture(me.__webglTexture),u.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(X.__webglFramebuffer[ue]))for(let ge=0;ge<X.__webglFramebuffer[ue].length;ge++)r.deleteFramebuffer(X.__webglFramebuffer[ue][ge]);else r.deleteFramebuffer(X.__webglFramebuffer[ue]);X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[ue])}else{if(Array.isArray(X.__webglFramebuffer))for(let ue=0;ue<X.__webglFramebuffer.length;ue++)r.deleteFramebuffer(X.__webglFramebuffer[ue]);else r.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ue=0;ue<X.__webglColorRenderbuffer.length;ue++)X.__webglColorRenderbuffer[ue]&&r.deleteRenderbuffer(X.__webglColorRenderbuffer[ue]);X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ue=0,ge=E.length;ue<ge;ue++){const Ie=i.get(E[ue]);Ie.__webglTexture&&(r.deleteTexture(Ie.__webglTexture),u.memory.textures--),i.remove(E[ue])}i.remove(E),i.remove(R)}let re=0;function ve(){re=0}function G(){const R=re;return R>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),re+=1,R}function Q(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function $(R,E){const X=i.get(R);if(R.isVideoTexture&&xt(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const me=R.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(X,R,E);return}}t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+E)}function oe(R,E){const X=i.get(R);if(R.version>0&&X.__version!==R.version){fe(X,R,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+E)}function te(R,E){const X=i.get(R);if(R.version>0&&X.__version!==R.version){fe(X,R,E);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+E)}function le(R,E){const X=i.get(R);if(R.version>0&&X.__version!==R.version){Ce(X,R,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+E)}const ae={[kc]:r.REPEAT,[si]:r.CLAMP_TO_EDGE,[Xc]:r.MIRRORED_REPEAT},de={[Mn]:r.NEAREST,[Nh]:r.NEAREST_MIPMAP_NEAREST,[qs]:r.NEAREST_MIPMAP_LINEAR,[wn]:r.LINEAR,[sc]:r.LINEAR_MIPMAP_NEAREST,[yr]:r.LINEAR_MIPMAP_LINEAR},Ee={[$S]:r.NEVER,[nE]:r.ALWAYS,[jS]:r.LESS,[bp]:r.LEQUAL,[JS]:r.EQUAL,[tE]:r.GEQUAL,[QS]:r.GREATER,[eE]:r.NOTEQUAL};function $e(R,E,X){if(E.type===Ui&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===wn||E.magFilter===sc||E.magFilter===qs||E.magFilter===yr||E.minFilter===wn||E.minFilter===sc||E.minFilter===qs||E.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(r.texParameteri(R,r.TEXTURE_WRAP_S,ae[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ae[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ae[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,de[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,de[E.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==si||E.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,B(E.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,B(E.minFilter)),E.minFilter!==Mn&&E.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Ee[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Mn||E.minFilter!==qs&&E.minFilter!==yr||E.type===Ui&&e.has("OES_texture_float_linear")===!1||c===!1&&E.type===ao&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(r.texParameterf(R,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function J(R,E){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",O));const me=E.source;let ue=v.get(me);ue===void 0&&(ue={},v.set(me,ue));const ge=Q(E);if(ge!==R.__cacheKey){ue[ge]===void 0&&(ue[ge]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,X=!0),ue[ge].usedTimes++;const Ie=ue[R.__cacheKey];Ie!==void 0&&(ue[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&y(E)),R.__cacheKey=ge,R.__webglTexture=ue[ge].texture}return X}function fe(R,E,X){let me=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(me=r.TEXTURE_3D);const ue=J(R,E),ge=E.source;t.bindTexture(me,R.__webglTexture,r.TEXTURE0+X);const Ie=i.get(ge);if(ge.version!==Ie.__version||ue===!0){t.activeTexture(r.TEXTURE0+X);const ye=Lt.getPrimaries(Lt.workingColorSpace),we=E.colorSpace===$n?null:Lt.getPrimaries(E.colorSpace),Be=E.colorSpace===$n||ye===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const Qe=g(E)&&m(E.image)===!1;let he=A(E.image,Qe,!1,o.maxTextureSize);he=et(E,he);const Mt=m(he)||c,rt=a.convert(E.format,E.colorSpace);let Je=a.convert(E.type),ze=I(E.internalFormat,rt,Je,E.colorSpace,E.isVideoTexture);$e(me,E,Mt);let Ae;const tt=E.mipmaps,U=c&&E.isVideoTexture!==!0&&ze!==Ep,xe=Ie.__version===void 0||ue===!0,be=ge.dataReady,He=V(E,he,Mt);if(E.isDepthTexture)ze=r.DEPTH_COMPONENT,c?E.type===Ui?ze=r.DEPTH_COMPONENT32F:E.type===Qi?ze=r.DEPTH_COMPONENT24:E.type===br?ze=r.DEPTH24_STENCIL8:ze=r.DEPTH_COMPONENT16:E.type===Ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Tr&&ze===r.DEPTH_COMPONENT&&E.type!==iu&&E.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Qi,Je=a.convert(E.type)),E.format===bs&&ze===r.DEPTH_COMPONENT&&(ze=r.DEPTH_STENCIL,E.type!==br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=br,Je=a.convert(E.type))),xe&&(U?t.texStorage2D(r.TEXTURE_2D,1,ze,he.width,he.height):t.texImage2D(r.TEXTURE_2D,0,ze,he.width,he.height,0,rt,Je,null));else if(E.isDataTexture)if(tt.length>0&&Mt){U&&xe&&t.texStorage2D(r.TEXTURE_2D,He,ze,tt[0].width,tt[0].height);for(let L=0,_e=tt.length;L<_e;L++)Ae=tt[L],U?be&&t.texSubImage2D(r.TEXTURE_2D,L,0,0,Ae.width,Ae.height,rt,Je,Ae.data):t.texImage2D(r.TEXTURE_2D,L,ze,Ae.width,Ae.height,0,rt,Je,Ae.data);E.generateMipmaps=!1}else U?(xe&&t.texStorage2D(r.TEXTURE_2D,He,ze,he.width,he.height),be&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he.width,he.height,rt,Je,he.data)):t.texImage2D(r.TEXTURE_2D,0,ze,he.width,he.height,0,rt,Je,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){U&&xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,He,ze,tt[0].width,tt[0].height,he.depth);for(let L=0,_e=tt.length;L<_e;L++)Ae=tt[L],E.format!==oi?rt!==null?U?be&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,L,0,0,0,Ae.width,Ae.height,he.depth,rt,Ae.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,L,ze,Ae.width,Ae.height,he.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?be&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,L,0,0,0,Ae.width,Ae.height,he.depth,rt,Je,Ae.data):t.texImage3D(r.TEXTURE_2D_ARRAY,L,ze,Ae.width,Ae.height,he.depth,0,rt,Je,Ae.data)}else{U&&xe&&t.texStorage2D(r.TEXTURE_2D,He,ze,tt[0].width,tt[0].height);for(let L=0,_e=tt.length;L<_e;L++)Ae=tt[L],E.format!==oi?rt!==null?U?be&&t.compressedTexSubImage2D(r.TEXTURE_2D,L,0,0,Ae.width,Ae.height,rt,Ae.data):t.compressedTexImage2D(r.TEXTURE_2D,L,ze,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?be&&t.texSubImage2D(r.TEXTURE_2D,L,0,0,Ae.width,Ae.height,rt,Je,Ae.data):t.texImage2D(r.TEXTURE_2D,L,ze,Ae.width,Ae.height,0,rt,Je,Ae.data)}else if(E.isDataArrayTexture)U?(xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,He,ze,he.width,he.height,he.depth),be&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,rt,Je,he.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,he.width,he.height,he.depth,0,rt,Je,he.data);else if(E.isData3DTexture)U?(xe&&t.texStorage3D(r.TEXTURE_3D,He,ze,he.width,he.height,he.depth),be&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,rt,Je,he.data)):t.texImage3D(r.TEXTURE_3D,0,ze,he.width,he.height,he.depth,0,rt,Je,he.data);else if(E.isFramebufferTexture){if(xe)if(U)t.texStorage2D(r.TEXTURE_2D,He,ze,he.width,he.height);else{let L=he.width,_e=he.height;for(let pe=0;pe<He;pe++)t.texImage2D(r.TEXTURE_2D,pe,ze,L,_e,0,rt,Je,null),L>>=1,_e>>=1}}else if(tt.length>0&&Mt){U&&xe&&t.texStorage2D(r.TEXTURE_2D,He,ze,tt[0].width,tt[0].height);for(let L=0,_e=tt.length;L<_e;L++)Ae=tt[L],U?be&&t.texSubImage2D(r.TEXTURE_2D,L,0,0,rt,Je,Ae):t.texImage2D(r.TEXTURE_2D,L,ze,rt,Je,Ae);E.generateMipmaps=!1}else U?(xe&&t.texStorage2D(r.TEXTURE_2D,He,ze,he.width,he.height),be&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,rt,Je,he)):t.texImage2D(r.TEXTURE_2D,0,ze,rt,Je,he);D(E,Mt)&&C(me),Ie.__version=ge.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Ce(R,E,X){if(E.image.length!==6)return;const me=J(R,E),ue=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+X);const ge=i.get(ue);if(ue.version!==ge.__version||me===!0){t.activeTexture(r.TEXTURE0+X);const Ie=Lt.getPrimaries(Lt.workingColorSpace),ye=E.colorSpace===$n?null:Lt.getPrimaries(E.colorSpace),we=E.colorSpace===$n||Ie===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Be=E.isCompressedTexture||E.image[0].isCompressedTexture,Qe=E.image[0]&&E.image[0].isDataTexture,he=[];for(let L=0;L<6;L++)!Be&&!Qe?he[L]=A(E.image[L],!1,!0,o.maxCubemapSize):he[L]=Qe?E.image[L].image:E.image[L],he[L]=et(E,he[L]);const Mt=he[0],rt=m(Mt)||c,Je=a.convert(E.format,E.colorSpace),ze=a.convert(E.type),Ae=I(E.internalFormat,Je,ze,E.colorSpace),tt=c&&E.isVideoTexture!==!0,U=ge.__version===void 0||me===!0,xe=ue.dataReady;let be=V(E,Mt,rt);$e(r.TEXTURE_CUBE_MAP,E,rt);let He;if(Be){tt&&U&&t.texStorage2D(r.TEXTURE_CUBE_MAP,be,Ae,Mt.width,Mt.height);for(let L=0;L<6;L++){He=he[L].mipmaps;for(let _e=0;_e<He.length;_e++){const pe=He[_e];E.format!==oi?Je!==null?tt?xe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,_e,0,0,pe.width,pe.height,Je,pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,_e,Ae,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,_e,0,0,pe.width,pe.height,Je,ze,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,_e,Ae,pe.width,pe.height,0,Je,ze,pe.data)}}}else{He=E.mipmaps,tt&&U&&(He.length>0&&be++,t.texStorage2D(r.TEXTURE_CUBE_MAP,be,Ae,he[0].width,he[0].height));for(let L=0;L<6;L++)if(Qe){tt?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,he[L].width,he[L].height,Je,ze,he[L].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,Ae,he[L].width,he[L].height,0,Je,ze,he[L].data);for(let _e=0;_e<He.length;_e++){const Ue=He[_e].image[L].image;tt?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,_e+1,0,0,Ue.width,Ue.height,Je,ze,Ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,_e+1,Ae,Ue.width,Ue.height,0,Je,ze,Ue.data)}}else{tt?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,Je,ze,he[L]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,Ae,Je,ze,he[L]);for(let _e=0;_e<He.length;_e++){const pe=He[_e];tt?xe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,_e+1,0,0,Je,ze,pe.image[L]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,_e+1,Ae,Je,ze,pe.image[L])}}}D(E,rt)&&C(r.TEXTURE_CUBE_MAP),ge.__version=ue.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function We(R,E,X,me,ue,ge){const Ie=a.convert(X.format,X.colorSpace),ye=a.convert(X.type),we=I(X.internalFormat,Ie,ye,X.colorSpace);if(!i.get(E).__hasExternalTextures){const Qe=Math.max(1,E.width>>ge),he=Math.max(1,E.height>>ge);ue===r.TEXTURE_3D||ue===r.TEXTURE_2D_ARRAY?t.texImage3D(ue,ge,we,Qe,he,E.depth,0,Ie,ye,null):t.texImage2D(ue,ge,we,Qe,he,0,Ie,ye,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Fe(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ue,i.get(X).__webglTexture,0,ke(E)):(ue===r.TEXTURE_2D||ue>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,ue,i.get(X).__webglTexture,ge),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ge(R,E,X){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let me=c===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(X||Fe(E)){const ue=E.depthTexture;ue&&ue.isDepthTexture&&(ue.type===Ui?me=r.DEPTH_COMPONENT32F:ue.type===Qi&&(me=r.DEPTH_COMPONENT24));const ge=ke(E);Fe(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,me,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,me,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,me,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const me=ke(E);X&&Fe(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,me,r.DEPTH24_STENCIL8,E.width,E.height):Fe(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,me,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const me=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ue=0;ue<me.length;ue++){const ge=me[ue],Ie=a.convert(ge.format,ge.colorSpace),ye=a.convert(ge.type),we=I(ge.internalFormat,Ie,ye,ge.colorSpace),Be=ke(E);X&&Fe(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,we,E.width,E.height):Fe(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Be,we,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,we,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const me=i.get(E.depthTexture).__webglTexture,ue=ke(E);if(E.depthTexture.format===Tr)Fe(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,me,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,me,0);else if(E.depthTexture.format===bs)Fe(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,me,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function _t(R){const E=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Pe(E.__webglFramebuffer,R)}else if(X){E.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[me]),E.__webglDepthbuffer[me]=r.createRenderbuffer(),Ge(E.__webglDepthbuffer[me],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),Ge(E.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function je(R,E,X){const me=i.get(R);E!==void 0&&We(me.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&_t(R)}function W(R){const E=R.texture,X=i.get(R),me=i.get(E);R.addEventListener("dispose",se),R.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=E.version,u.memory.textures++);const ue=R.isWebGLCubeRenderTarget===!0,ge=R.isWebGLMultipleRenderTargets===!0,Ie=m(R)||c;if(ue){X.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(c&&E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[ye]=[];for(let we=0;we<E.mipmaps.length;we++)X.__webglFramebuffer[ye][we]=r.createFramebuffer()}else X.__webglFramebuffer[ye]=r.createFramebuffer()}else{if(c&&E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let ye=0;ye<E.mipmaps.length;ye++)X.__webglFramebuffer[ye]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(ge)if(o.drawBuffers){const ye=R.texture;for(let we=0,Be=ye.length;we<Be;we++){const Qe=i.get(ye[we]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=r.createTexture(),u.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&R.samples>0&&Fe(R)===!1){const ye=ge?E:[E];X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let we=0;we<ye.length;we++){const Be=ye[we];X.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[we]);const Qe=a.convert(Be.format,Be.colorSpace),he=a.convert(Be.type),Mt=I(Be.internalFormat,Qe,he,Be.colorSpace,R.isXRRenderTarget===!0),rt=ke(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,rt,Mt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,X.__webglColorRenderbuffer[we])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),Ge(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),$e(r.TEXTURE_CUBE_MAP,E,Ie);for(let ye=0;ye<6;ye++)if(c&&E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)We(X.__webglFramebuffer[ye][we],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we);else We(X.__webglFramebuffer[ye],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);D(E,Ie)&&C(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){const ye=R.texture;for(let we=0,Be=ye.length;we<Be;we++){const Qe=ye[we],he=i.get(Qe);t.bindTexture(r.TEXTURE_2D,he.__webglTexture),$e(r.TEXTURE_2D,Qe,Ie),We(X.__webglFramebuffer,R,Qe,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,0),D(Qe,Ie)&&C(r.TEXTURE_2D)}t.unbindTexture()}else{let ye=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(c?ye=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,me.__webglTexture),$e(ye,E,Ie),c&&E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)We(X.__webglFramebuffer[we],R,E,r.COLOR_ATTACHMENT0,ye,we);else We(X.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,ye,0);D(E,Ie)&&C(ye),t.unbindTexture()}R.depthBuffer&&_t(R)}function Ht(R){const E=m(R)||c,X=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let me=0,ue=X.length;me<ue;me++){const ge=X[me];if(D(ge,E)){const Ie=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ye=i.get(ge).__webglTexture;t.bindTexture(Ie,ye),C(Ie),t.unbindTexture()}}}function De(R){if(c&&R.samples>0&&Fe(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],X=R.width,me=R.height;let ue=r.COLOR_BUFFER_BIT;const ge=[],Ie=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=i.get(R),we=R.isWebGLMultipleRenderTargets===!0;if(we)for(let Be=0;Be<E.length;Be++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Be=0;Be<E.length;Be++){ge.push(r.COLOR_ATTACHMENT0+Be),R.depthBuffer&&ge.push(Ie);const Qe=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Qe===!1&&(R.depthBuffer&&(ue|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ue|=r.STENCIL_BUFFER_BIT)),we&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Be]),Qe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ie]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ie])),we){const he=i.get(E[Be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,he,0)}r.blitFramebuffer(0,0,X,me,0,0,X,me,ue,r.NEAREST),d&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ge)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),we)for(let Be=0;Be<E.length;Be++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Be]);const Qe=i.get(E[Be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Be,r.TEXTURE_2D,Qe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function ke(R){return Math.min(o.maxSamples,R.samples)}function Fe(R){const E=i.get(R);return c&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xt(R){const E=u.render.frame;p.get(R)!==E&&(p.set(R,E),R.update())}function et(R,E){const X=R.colorSpace,me=R.format,ue=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Yc||X!==Oi&&X!==$n&&(Lt.getTransfer(X)===Ft?c===!1?e.has("EXT_sRGB")===!0&&me===oi?(R.format=Yc,R.minFilter=wn,R.generateMipmaps=!1):E=Ap.sRGBToLinear(E):(me!==oi||ue!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}this.allocateTextureUnit=G,this.resetTextureUnits=ve,this.setTexture2D=$,this.setTexture2DArray=oe,this.setTexture3D=te,this.setTextureCube=le,this.rebindTextures=je,this.setupRenderTarget=W,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=We,this.useMultisampledRTT=Fe}function v1(r,e,t){const i=t.isWebGL2;function o(a,u=$n){let c;const f=Lt.getTransfer(u);if(a===nr)return r.UNSIGNED_BYTE;if(a===_p)return r.UNSIGNED_SHORT_4_4_4_4;if(a===vp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===BS)return r.BYTE;if(a===zS)return r.SHORT;if(a===iu)return r.UNSIGNED_SHORT;if(a===gp)return r.INT;if(a===Qi)return r.UNSIGNED_INT;if(a===Ui)return r.FLOAT;if(a===ao)return i?r.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===GS)return r.ALPHA;if(a===oi)return r.RGBA;if(a===HS)return r.LUMINANCE;if(a===VS)return r.LUMINANCE_ALPHA;if(a===Tr)return r.DEPTH_COMPONENT;if(a===bs)return r.DEPTH_STENCIL;if(a===Yc)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===WS)return r.RED;if(a===xp)return r.RED_INTEGER;if(a===kS)return r.RG;if(a===Mp)return r.RG_INTEGER;if(a===Sp)return r.RGBA_INTEGER;if(a===oc||a===ac||a===lc||a===cc)if(f===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===oc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ac)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===oc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ac)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===lc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===cc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Oh||a===Fh||a===Bh||a===zh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Oh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Fh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Bh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===zh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ep)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Gh||a===Hh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Gh)return f===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Hh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Vh||a===Wh||a===kh||a===Xh||a===Yh||a===qh||a===Kh||a===Zh||a===$h||a===jh||a===Jh||a===Qh||a===ed||a===td)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Vh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Wh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===kh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Xh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Yh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===qh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Kh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Zh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===$h)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===jh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Jh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Qh)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ed)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===td)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===uc||a===nd||a===id)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===uc)return f===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===nd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===id)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===XS||a===rd||a===sd||a===od)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===uc)return c.COMPRESSED_RED_RGTC1_EXT;if(a===rd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===sd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===od)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===br?i?r.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:o}}class x1 extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ba extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M1={type:"move"};class Ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,u=null;const c=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const A of e.hand.values()){const m=t.getJointPose(A,i),g=this._getHandJoint(d,A);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const p=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=p.position.distanceTo(_.position),M=.02,b=.005;d.inputState.pinching&&v>M+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=M-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(M1)))}return c!==null&&(c.visible=o!==null),f!==null&&(f.visible=a!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ba;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const S1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E1=`
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

}`;class y1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new Rn,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,o=new sr({extensions:{fragDepth:!0},vertexShader:S1,fragmentShader:E1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ai(new ka(20,20),o)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class b1 extends Cr{constructor(e,t){super();const i=this;let o=null,a=1,u=null,c="local-floor",f=1,d=null,p=null,_=null,v=null,M=null,b=null;const A=new y1,m=t.getContextAttributes();let g=null,D=null;const C=[],I=[],V=new at;let B=null;const O=new Bn;O.layers.enable(1),O.viewport=new ln;const se=new Bn;se.layers.enable(2),se.viewport=new ln;const Me=[O,se],y=new x1;y.layers.enable(1),y.layers.enable(2);let N=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=C[J];return fe===void 0&&(fe=new Ic,C[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=C[J];return fe===void 0&&(fe=new Ic,C[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=C[J];return fe===void 0&&(fe=new Ic,C[J]=fe),fe.getHandSpace()};function ve(J){const fe=I.indexOf(J.inputSource);if(fe===-1)return;const Ce=C[fe];Ce!==void 0&&(Ce.update(J.inputSource,J.frame,d||u),Ce.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){o.removeEventListener("select",ve),o.removeEventListener("selectstart",ve),o.removeEventListener("selectend",ve),o.removeEventListener("squeeze",ve),o.removeEventListener("squeezestart",ve),o.removeEventListener("squeezeend",ve),o.removeEventListener("end",G),o.removeEventListener("inputsourceschange",Q);for(let J=0;J<C.length;J++){const fe=I[J];fe!==null&&(I[J]=null,C[J].disconnect(fe))}N=null,re=null,A.reset(),e.setRenderTarget(g),M=null,v=null,_=null,o=null,D=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(B),e.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){c=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(J){d=J},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(g=e.getRenderTarget(),o.addEventListener("select",ve),o.addEventListener("selectstart",ve),o.addEventListener("selectend",ve),o.addEventListener("squeeze",ve),o.addEventListener("squeezestart",ve),o.addEventListener("squeezeend",ve),o.addEventListener("end",G),o.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(V),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:o.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};M=new XRWebGLLayer(o,t,fe),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new wr(M.framebufferWidth,M.framebufferHeight,{format:oi,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,Ce=null,We=null;m.depth&&(We=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?bs:Tr,Ce=m.stencil?br:Qi);const Ge={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:a};_=new XRWebGLBinding(o,t),v=_.createProjectionLayer(Ge),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new wr(v.textureWidth,v.textureHeight,{format:oi,type:nr,depthTexture:new zp(v.textureWidth,v.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Pe=e.properties.get(D);Pe.__ignoreDepthValues=v.ignoreDepthValues}D.isXRRenderTarget=!0,this.setFoveation(f),d=null,u=await o.requestReferenceSpace(c),$e.setContext(o),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function Q(J){for(let fe=0;fe<J.removed.length;fe++){const Ce=J.removed[fe],We=I.indexOf(Ce);We>=0&&(I[We]=null,C[We].disconnect(Ce))}for(let fe=0;fe<J.added.length;fe++){const Ce=J.added[fe];let We=I.indexOf(Ce);if(We===-1){for(let Pe=0;Pe<C.length;Pe++)if(Pe>=I.length){I.push(Ce),We=Pe;break}else if(I[Pe]===null){I[Pe]=Ce,We=Pe;break}if(We===-1)break}const Ge=C[We];Ge&&Ge.connect(Ce)}}const $=new Y,oe=new Y;function te(J,fe,Ce){$.setFromMatrixPosition(fe.matrixWorld),oe.setFromMatrixPosition(Ce.matrixWorld);const We=$.distanceTo(oe),Ge=fe.projectionMatrix.elements,Pe=Ce.projectionMatrix.elements,_t=Ge[14]/(Ge[10]-1),je=Ge[14]/(Ge[10]+1),W=(Ge[9]+1)/Ge[5],Ht=(Ge[9]-1)/Ge[5],De=(Ge[8]-1)/Ge[0],ke=(Pe[8]+1)/Pe[0],Fe=_t*De,xt=_t*ke,et=We/(-De+ke),R=et*-De;fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(R),J.translateZ(et),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const E=_t+et,X=je+et,me=Fe-R,ue=xt+(We-R),ge=W*je/X*E,Ie=Ht*je/X*E;J.projectionMatrix.makePerspective(me,ue,ge,Ie,E,X),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function le(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;A.texture!==null&&(J.near=A.depthNear,J.far=A.depthFar),y.near=se.near=O.near=J.near,y.far=se.far=O.far=J.far,(N!==y.near||re!==y.far)&&(o.updateRenderState({depthNear:y.near,depthFar:y.far}),N=y.near,re=y.far,O.near=N,O.far=re,se.near=N,se.far=re,O.updateProjectionMatrix(),se.updateProjectionMatrix(),J.updateProjectionMatrix());const fe=J.parent,Ce=y.cameras;le(y,fe);for(let We=0;We<Ce.length;We++)le(Ce[We],fe);Ce.length===2?te(y,O,se):y.projectionMatrix.copy(O.projectionMatrix),ae(J,y,fe)};function ae(J,fe,Ce){Ce===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(Ce.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=lo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(v===null&&M===null))return f},this.setFoveation=function(J){f=J,v!==null&&(v.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return A.texture!==null};let de=null;function Ee(J,fe){if(p=fe.getViewerPose(d||u),b=fe,p!==null){const Ce=p.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let We=!1;Ce.length!==y.cameras.length&&(y.cameras.length=0,We=!0);for(let Pe=0;Pe<Ce.length;Pe++){const _t=Ce[Pe];let je=null;if(M!==null)je=M.getViewport(_t);else{const Ht=_.getViewSubImage(v,_t);je=Ht.viewport,Pe===0&&(e.setRenderTargetTextures(D,Ht.colorTexture,v.ignoreDepthValues?void 0:Ht.depthStencilTexture),e.setRenderTarget(D))}let W=Me[Pe];W===void 0&&(W=new Bn,W.layers.enable(Pe),W.viewport=new ln,Me[Pe]=W),W.matrix.fromArray(_t.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(_t.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(je.x,je.y,je.width,je.height),Pe===0&&(y.matrix.copy(W.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),We===!0&&y.cameras.push(W)}const Ge=o.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")){const Pe=_.getDepthInformation(Ce[0]);Pe&&Pe.isValid&&Pe.texture&&A.init(e,Pe,o.renderState)}}for(let Ce=0;Ce<C.length;Ce++){const We=I[Ce],Ge=C[Ce];We!==null&&Ge!==void 0&&Ge.update(We,fe,d||u)}A.render(e,y),de&&de(J,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),b=null}const $e=new Bp;$e.setAnimationLoop(Ee),this.setAnimationLoop=function(J){de=J},this.dispose=function(){}}}function T1(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Up(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function o(m,g,D,C,I){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(m,g):g.isMeshToonMaterial?(a(m,g),_(m,g)):g.isMeshPhongMaterial?(a(m,g),p(m,g)):g.isMeshStandardMaterial?(a(m,g),v(m,g),g.isMeshPhysicalMaterial&&M(m,g,I)):g.isMeshMatcapMaterial?(a(m,g),b(m,g)):g.isMeshDepthMaterial?a(m,g):g.isMeshDistanceMaterial?(a(m,g),A(m,g)):g.isMeshNormalMaterial?a(m,g):g.isLineBasicMaterial?(u(m,g),g.isLineDashedMaterial&&c(m,g)):g.isPointsMaterial?f(m,g,D,C):g.isSpriteMaterial?d(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Cn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Cn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const D=e.get(g).envMap;if(D&&(m.envMap.value=D,m.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;const C=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*C,t(g.lightMap,m.lightMapTransform)}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function u(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function c(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function f(m,g,D,C){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*D,m.scale.value=C*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function p(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function _(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function v(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),e.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function M(m,g,D){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Cn&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=D.texture,m.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function b(m,g){g.matcap&&(m.matcap.value=g.matcap)}function A(m,g){const D=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(D.matrixWorld),m.nearDistance.value=D.shadow.camera.near,m.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function A1(r,e,t,i){let o={},a={},u=[];const c=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(D,C){const I=C.program;i.uniformBlockBinding(D,I)}function d(D,C){let I=o[D.id];I===void 0&&(b(D),I=p(D),o[D.id]=I,D.addEventListener("dispose",m));const V=C.program;i.updateUBOMapping(D,V);const B=e.render.frame;a[D.id]!==B&&(v(D),a[D.id]=B)}function p(D){const C=_();D.__bindingPointIndex=C;const I=r.createBuffer(),V=D.__size,B=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,I),r.bufferData(r.UNIFORM_BUFFER,V,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,I),I}function _(){for(let D=0;D<c;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const C=o[D.id],I=D.uniforms,V=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let B=0,O=I.length;B<O;B++){const se=Array.isArray(I[B])?I[B]:[I[B]];for(let Me=0,y=se.length;Me<y;Me++){const N=se[Me];if(M(N,B,Me,V)===!0){const re=N.__offset,ve=Array.isArray(N.value)?N.value:[N.value];let G=0;for(let Q=0;Q<ve.length;Q++){const $=ve[Q],oe=A($);typeof $=="number"||typeof $=="boolean"?(N.__data[0]=$,r.bufferSubData(r.UNIFORM_BUFFER,re+G,N.__data)):$.isMatrix3?(N.__data[0]=$.elements[0],N.__data[1]=$.elements[1],N.__data[2]=$.elements[2],N.__data[3]=0,N.__data[4]=$.elements[3],N.__data[5]=$.elements[4],N.__data[6]=$.elements[5],N.__data[7]=0,N.__data[8]=$.elements[6],N.__data[9]=$.elements[7],N.__data[10]=$.elements[8],N.__data[11]=0):($.toArray(N.__data,G),G+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,re,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(D,C,I,V){const B=D.value,O=C+"_"+I;if(V[O]===void 0)return typeof B=="number"||typeof B=="boolean"?V[O]=B:V[O]=B.clone(),!0;{const se=V[O];if(typeof B=="number"||typeof B=="boolean"){if(se!==B)return V[O]=B,!0}else if(se.equals(B)===!1)return se.copy(B),!0}return!1}function b(D){const C=D.uniforms;let I=0;const V=16;for(let O=0,se=C.length;O<se;O++){const Me=Array.isArray(C[O])?C[O]:[C[O]];for(let y=0,N=Me.length;y<N;y++){const re=Me[y],ve=Array.isArray(re.value)?re.value:[re.value];for(let G=0,Q=ve.length;G<Q;G++){const $=ve[G],oe=A($),te=I%V;te!==0&&V-te<oe.boundary&&(I+=V-te),re.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=I,I+=oe.storage}}}const B=I%V;return B>0&&(I+=V-B),D.__size=I,D.__cache={},this}function A(D){const C={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(C.boundary=4,C.storage=4):D.isVector2?(C.boundary=8,C.storage=8):D.isVector3||D.isColor?(C.boundary=16,C.storage=12):D.isVector4?(C.boundary=16,C.storage=16):D.isMatrix3?(C.boundary=48,C.storage=48):D.isMatrix4?(C.boundary=64,C.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),C}function m(D){const C=D.target;C.removeEventListener("dispose",m);const I=u.indexOf(C.__bindingPointIndex);u.splice(I,1),r.deleteBuffer(o[C.id]),delete o[C.id],delete a[C.id]}function g(){for(const D in o)r.deleteBuffer(o[D]);u=[],o={},a={}}return{bind:f,update:d,dispose:g}}class lu{constructor(e={}){const{canvas:t=vE(),context:i=null,depth:o=!0,stencil:a=!0,alpha:u=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=u;const M=new Uint32Array(4),b=new Int32Array(4);let A=null,m=null;const g=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this._useLegacyLights=!1,this.toneMapping=tr,this.toneMappingExposure=1;const C=this;let I=!1,V=0,B=0,O=null,se=-1,Me=null;const y=new ln,N=new ln;let re=null;const ve=new bt(0);let G=0,Q=t.width,$=t.height,oe=1,te=null,le=null;const ae=new ln(0,0,Q,$),de=new ln(0,0,Q,$);let Ee=!1;const $e=new Fp;let J=!1,fe=!1,Ce=null;const We=new qt,Ge=new at,Pe=new Y,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return O===null?oe:1}let W=i;function Ht(w,k){for(let K=0;K<w.length;K++){const j=w[K],q=t.getContext(j,k);if(q!==null)return q}return null}try{const w={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nu}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",_e,!1),W===null){const k=["webgl2","webgl","experimental-webgl"];if(C.isWebGL1Renderer===!0&&k.shift(),W=Ht(k,w),W===null)throw Ht(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let De,ke,Fe,xt,et,R,E,X,me,ue,ge,Ie,ye,we,Be,Qe,he,Mt,rt,Je,ze,Ae,tt,U;function xe(){De=new IT(W),ke=new AT(W,De,e),De.init(ke),Ae=new v1(W,De,ke),Fe=new g1(W,De,ke),xt=new OT(W),et=new n1,R=new _1(W,De,Fe,et,ke,Ae,xt),E=new CT(C),X=new DT(C),me=new WE(W,ke),tt=new bT(W,De,me,ke),ue=new UT(W,me,xt,tt),ge=new GT(W,ue,me,xt),rt=new zT(W,ke,R),Qe=new wT(et),Ie=new t1(C,E,X,De,ke,tt,Qe),ye=new T1(C,et),we=new r1,Be=new u1(De,ke),Mt=new yT(C,E,X,Fe,ge,v,f),he=new m1(C,ge,ke),U=new A1(W,xt,ke,Fe),Je=new TT(W,De,xt,ke),ze=new NT(W,De,xt,ke),xt.programs=Ie.programs,C.capabilities=ke,C.extensions=De,C.properties=et,C.renderLists=we,C.shadowMap=he,C.state=Fe,C.info=xt}xe();const be=new b1(C,W);this.xr=be,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const w=De.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=De.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(w){w!==void 0&&(oe=w,this.setSize(Q,$,!1))},this.getSize=function(w){return w.set(Q,$)},this.setSize=function(w,k,K=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=w,$=k,t.width=Math.floor(w*oe),t.height=Math.floor(k*oe),K===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(Q*oe,$*oe).floor()},this.setDrawingBufferSize=function(w,k,K){Q=w,$=k,oe=K,t.width=Math.floor(w*K),t.height=Math.floor(k*K),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(ae)},this.setViewport=function(w,k,K,j){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,k,K,j),Fe.viewport(y.copy(ae).multiplyScalar(oe).floor())},this.getScissor=function(w){return w.copy(de)},this.setScissor=function(w,k,K,j){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,k,K,j),Fe.scissor(N.copy(de).multiplyScalar(oe).floor())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(w){Fe.setScissorTest(Ee=w)},this.setOpaqueSort=function(w){te=w},this.setTransparentSort=function(w){le=w},this.getClearColor=function(w){return w.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(w=!0,k=!0,K=!0){let j=0;if(w){let q=!1;if(O!==null){const Re=O.texture.format;q=Re===Sp||Re===Mp||Re===xp}if(q){const Re=O.texture.type,Ne=Re===nr||Re===Qi||Re===iu||Re===br||Re===_p||Re===vp,Ye=Mt.getClearColor(),qe=Mt.getClearAlpha(),lt=Ye.r,nt=Ye.g,st=Ye.b;Ne?(M[0]=lt,M[1]=nt,M[2]=st,M[3]=qe,W.clearBufferuiv(W.COLOR,0,M)):(b[0]=lt,b[1]=nt,b[2]=st,b[3]=qe,W.clearBufferiv(W.COLOR,0,b))}else j|=W.COLOR_BUFFER_BIT}k&&(j|=W.DEPTH_BUFFER_BIT),K&&(j|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),we.dispose(),Be.dispose(),et.dispose(),E.dispose(),X.dispose(),ge.dispose(),tt.dispose(),U.dispose(),Ie.dispose(),be.dispose(),be.removeEventListener("sessionstart",Zt),be.removeEventListener("sessionend",yt),Ce&&(Ce.dispose(),Ce=null),It.stop()};function He(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const w=xt.autoReset,k=he.enabled,K=he.autoUpdate,j=he.needsUpdate,q=he.type;xe(),xt.autoReset=w,he.enabled=k,he.autoUpdate=K,he.needsUpdate=j,he.type=q}function _e(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function pe(w){const k=w.target;k.removeEventListener("dispose",pe),Ue(k)}function Ue(w){Ve(w),et.remove(w)}function Ve(w){const k=et.get(w).programs;k!==void 0&&(k.forEach(function(K){Ie.releaseProgram(K)}),w.isShaderMaterial&&Ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,K,j,q,Re){k===null&&(k=_t);const Ne=q.isMesh&&q.matrixWorld.determinant()<0,Ye=Za(w,k,K,j,q);Fe.setMaterial(j,Ne);let qe=K.index,lt=1;if(j.wireframe===!0){if(qe=ue.getWireframeAttribute(K),qe===void 0)return;lt=2}const nt=K.drawRange,st=K.attributes.position;let Bt=nt.start*lt,cn=(nt.start+nt.count)*lt;Re!==null&&(Bt=Math.max(Bt,Re.start*lt),cn=Math.min(cn,(Re.start+Re.count)*lt)),qe!==null?(Bt=Math.max(Bt,0),cn=Math.min(cn,qe.count)):st!=null&&(Bt=Math.max(Bt,0),cn=Math.min(cn,st.count));const kt=cn-Bt;if(kt<0||kt===1/0)return;tt.setup(q,j,Ye,K,qe);let jn,Ut=Je;if(qe!==null&&(jn=me.get(qe),Ut=ze,Ut.setIndex(jn)),q.isMesh)j.wireframe===!0?(Fe.setLineWidth(j.wireframeLinewidth*je()),Ut.setMode(W.LINES)):Ut.setMode(W.TRIANGLES);else if(q.isLine){let ut=j.linewidth;ut===void 0&&(ut=1),Fe.setLineWidth(ut*je()),q.isLineSegments?Ut.setMode(W.LINES):q.isLineLoop?Ut.setMode(W.LINE_LOOP):Ut.setMode(W.LINE_STRIP)}else q.isPoints?Ut.setMode(W.POINTS):q.isSprite&&Ut.setMode(W.TRIANGLES);if(q.isBatchedMesh)Ut.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Ut.renderInstances(Bt,kt,q.count);else if(K.isInstancedBufferGeometry){const ut=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Rs=Math.min(K.instanceCount,ut);Ut.renderInstances(Bt,kt,Rs)}else Ut.render(Bt,kt)};function Et(w,k,K){w.transparent===!0&&w.side===Ii&&w.forceSinglePass===!1?(w.side=Cn,w.needsUpdate=!0,Dr(w,k,K),w.side=ir,w.needsUpdate=!0,Dr(w,k,K),w.side=Ii):Dr(w,k,K)}this.compile=function(w,k,K=null){K===null&&(K=w),m=Be.get(K),m.init(),D.push(m),K.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),w!==K&&w.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(C._useLegacyLights);const j=new Set;return w.traverse(function(q){const Re=q.material;if(Re)if(Array.isArray(Re))for(let Ne=0;Ne<Re.length;Ne++){const Ye=Re[Ne];Et(Ye,K,q),j.add(Ye)}else Et(Re,K,q),j.add(Re)}),D.pop(),m=null,j},this.compileAsync=function(w,k,K=null){const j=this.compile(w,k,K);return new Promise(q=>{function Re(){if(j.forEach(function(Ne){et.get(Ne).currentProgram.isReady()&&j.delete(Ne)}),j.size===0){q(w);return}setTimeout(Re,10)}De.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let dt=null;function Ct(w){dt&&dt(w)}function Zt(){It.stop()}function yt(){It.start()}const It=new Bp;It.setAnimationLoop(Ct),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(w){dt=w,be.setAnimationLoop(w),w===null?It.stop():It.start()},be.addEventListener("sessionstart",Zt),be.addEventListener("sessionend",yt),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(k),k=be.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,k,O),m=Be.get(w,D.length),m.init(),D.push(m),We.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),$e.setFromProjectionMatrix(We),fe=this.localClippingEnabled,J=Qe.init(this.clippingPlanes,fe),A=we.get(w,g.length),A.init(),g.push(A),rn(w,k,0,C.sortObjects),A.finish(),C.sortObjects===!0&&A.sort(te,le),this.info.render.frame++,J===!0&&Qe.beginShadows();const K=m.state.shadowsArray;if(he.render(K,w,k),J===!0&&Qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1)&&Mt.render(A,w),m.setupLights(C._useLegacyLights),k.isArrayCamera){const j=k.cameras;for(let q=0,Re=j.length;q<Re;q++){const Ne=j[q];Lr(A,w,Ne,Ne.viewport)}}else Lr(A,w,k);O!==null&&(R.updateMultisampleRenderTarget(O),R.updateRenderTargetMipmap(O)),w.isScene===!0&&w.onAfterRender(C,w,k),tt.resetDefaultState(),se=-1,Me=null,D.pop(),D.length>0?m=D[D.length-1]:m=null,g.pop(),g.length>0?A=g[g.length-1]:A=null};function rn(w,k,K,j){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$e.intersectsSprite(w)){j&&Pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(We);const Ne=ge.update(w),Ye=w.material;Ye.visible&&A.push(w,Ne,Ye,K,Pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$e.intersectsObject(w))){const Ne=ge.update(w),Ye=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pe.copy(w.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Pe.copy(Ne.boundingSphere.center)),Pe.applyMatrix4(w.matrixWorld).applyMatrix4(We)),Array.isArray(Ye)){const qe=Ne.groups;for(let lt=0,nt=qe.length;lt<nt;lt++){const st=qe[lt],Bt=Ye[st.materialIndex];Bt&&Bt.visible&&A.push(w,Ne,Bt,K,Pe.z,st)}}else Ye.visible&&A.push(w,Ne,Ye,K,Pe.z,null)}}const Re=w.children;for(let Ne=0,Ye=Re.length;Ne<Ye;Ne++)rn(Re[Ne],k,K,j)}function Lr(w,k,K,j){const q=w.opaque,Re=w.transmissive,Ne=w.transparent;m.setupLightsView(K),J===!0&&Qe.setGlobalState(C.clippingPlanes,K),Re.length>0&&Ka(q,Re,k,K),j&&Fe.viewport(y.copy(j)),q.length>0&&Pr(q,k,K),Re.length>0&&Pr(Re,k,K),Ne.length>0&&Pr(Ne,k,K),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Ka(w,k,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const Re=ke.isWebGL2;Ce===null&&(Ce=new wr(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")?ao:nr,minFilter:yr,samples:Re?4:0})),C.getDrawingBufferSize(Ge),Re?Ce.setSize(Ge.x,Ge.y):Ce.setSize(Na(Ge.x),Na(Ge.y));const Ne=C.getRenderTarget();C.setRenderTarget(Ce),C.getClearColor(ve),G=C.getClearAlpha(),G<1&&C.setClearColor(16777215,.5),C.clear();const Ye=C.toneMapping;C.toneMapping=tr,Pr(w,K,j),R.updateMultisampleRenderTarget(Ce),R.updateRenderTargetMipmap(Ce);let qe=!1;for(let lt=0,nt=k.length;lt<nt;lt++){const st=k[lt],Bt=st.object,cn=st.geometry,kt=st.material,jn=st.group;if(kt.side===Ii&&Bt.layers.test(j.layers)){const Ut=kt.side;kt.side=Cn,kt.needsUpdate=!0,ho(Bt,K,j,cn,kt,jn),kt.side=Ut,kt.needsUpdate=!0,qe=!0}}qe===!0&&(R.updateMultisampleRenderTarget(Ce),R.updateRenderTargetMipmap(Ce)),C.setRenderTarget(Ne),C.setClearColor(ve,G),C.toneMapping=Ye}function Pr(w,k,K){const j=k.isScene===!0?k.overrideMaterial:null;for(let q=0,Re=w.length;q<Re;q++){const Ne=w[q],Ye=Ne.object,qe=Ne.geometry,lt=j===null?Ne.material:j,nt=Ne.group;Ye.layers.test(K.layers)&&ho(Ye,k,K,qe,lt,nt)}}function ho(w,k,K,j,q,Re){w.onBeforeRender(C,k,K,j,q,Re),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(C,k,K,j,w,Re),q.transparent===!0&&q.side===Ii&&q.forceSinglePass===!1?(q.side=Cn,q.needsUpdate=!0,C.renderBufferDirect(K,k,j,q,w,Re),q.side=ir,q.needsUpdate=!0,C.renderBufferDirect(K,k,j,q,w,Re),q.side=Ii):C.renderBufferDirect(K,k,j,q,w,Re),w.onAfterRender(C,k,K,j,q,Re)}function Dr(w,k,K){k.isScene!==!0&&(k=_t);const j=et.get(w),q=m.state.lights,Re=m.state.shadowsArray,Ne=q.state.version,Ye=Ie.getParameters(w,q.state,Re,k,K),qe=Ie.getProgramCacheKey(Ye);let lt=j.programs;j.environment=w.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(w.isMeshStandardMaterial?X:E).get(w.envMap||j.environment),lt===void 0&&(w.addEventListener("dispose",pe),lt=new Map,j.programs=lt);let nt=lt.get(qe);if(nt!==void 0){if(j.currentProgram===nt&&j.lightsStateVersion===Ne)return mo(w,Ye),nt}else Ye.uniforms=Ie.getUniforms(w),w.onBuild(K,Ye,C),w.onBeforeCompile(Ye,C),nt=Ie.acquireProgram(Ye,qe),lt.set(qe,nt),j.uniforms=Ye.uniforms;const st=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(st.clippingPlanes=Qe.uniform),mo(w,Ye),j.needsLights=go(w),j.lightsStateVersion=Ne,j.needsLights&&(st.ambientLightColor.value=q.state.ambient,st.lightProbe.value=q.state.probe,st.directionalLights.value=q.state.directional,st.directionalLightShadows.value=q.state.directionalShadow,st.spotLights.value=q.state.spot,st.spotLightShadows.value=q.state.spotShadow,st.rectAreaLights.value=q.state.rectArea,st.ltc_1.value=q.state.rectAreaLTC1,st.ltc_2.value=q.state.rectAreaLTC2,st.pointLights.value=q.state.point,st.pointLightShadows.value=q.state.pointShadow,st.hemisphereLights.value=q.state.hemi,st.directionalShadowMap.value=q.state.directionalShadowMap,st.directionalShadowMatrix.value=q.state.directionalShadowMatrix,st.spotShadowMap.value=q.state.spotShadowMap,st.spotLightMatrix.value=q.state.spotLightMatrix,st.spotLightMap.value=q.state.spotLightMap,st.pointShadowMap.value=q.state.pointShadowMap,st.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=nt,j.uniformsList=null,nt}function po(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=Ca.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function mo(w,k){const K=et.get(w);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function Za(w,k,K,j,q){k.isScene!==!0&&(k=_t),R.resetTextureUnits();const Re=k.fog,Ne=j.isMeshStandardMaterial?k.environment:null,Ye=O===null?C.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Oi,qe=(j.isMeshStandardMaterial?X:E).get(j.envMap||Ne),lt=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,nt=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),st=!!K.morphAttributes.position,Bt=!!K.morphAttributes.normal,cn=!!K.morphAttributes.color;let kt=tr;j.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(kt=C.toneMapping);const jn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ut=jn!==void 0?jn.length:0,ut=et.get(j),Rs=m.state.lights;if(J===!0&&(fe===!0||w!==Me)){const En=w===Me&&j.id===se;Qe.setState(j,w,En)}let Nt=!1;j.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==Rs.state.version||ut.outputColorSpace!==Ye||q.isBatchedMesh&&ut.batching===!1||!q.isBatchedMesh&&ut.batching===!0||q.isInstancedMesh&&ut.instancing===!1||!q.isInstancedMesh&&ut.instancing===!0||q.isSkinnedMesh&&ut.skinning===!1||!q.isSkinnedMesh&&ut.skinning===!0||q.isInstancedMesh&&ut.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&ut.instancingColor===!1&&q.instanceColor!==null||ut.envMap!==qe||j.fog===!0&&ut.fog!==Re||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==Qe.numPlanes||ut.numIntersection!==Qe.numIntersection)||ut.vertexAlphas!==lt||ut.vertexTangents!==nt||ut.morphTargets!==st||ut.morphNormals!==Bt||ut.morphColors!==cn||ut.toneMapping!==kt||ke.isWebGL2===!0&&ut.morphTargetsCount!==Ut)&&(Nt=!0):(Nt=!0,ut.__version=j.version);let ci=ut.currentProgram;Nt===!0&&(ci=Dr(j,k,q));let Ls=!1,_i=!1,Ps=!1;const $t=ci.getUniforms(),zn=ut.uniforms;if(Fe.useProgram(ci.program)&&(Ls=!0,_i=!0,Ps=!0),j.id!==se&&(se=j.id,_i=!0),Ls||Me!==w){$t.setValue(W,"projectionMatrix",w.projectionMatrix),$t.setValue(W,"viewMatrix",w.matrixWorldInverse);const En=$t.map.cameraPosition;En!==void 0&&En.setValue(W,Pe.setFromMatrixPosition(w.matrixWorld)),ke.logarithmicDepthBuffer&&$t.setValue(W,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&$t.setValue(W,"isOrthographic",w.isOrthographicCamera===!0),Me!==w&&(Me=w,_i=!0,Ps=!0)}if(q.isSkinnedMesh){$t.setOptional(W,q,"bindMatrix"),$t.setOptional(W,q,"bindMatrixInverse");const En=q.skeleton;En&&(ke.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),$t.setValue(W,"boneTexture",En.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&($t.setOptional(W,q,"batchingTexture"),$t.setValue(W,"batchingTexture",q._matricesTexture,R));const Ir=K.morphAttributes;if((Ir.position!==void 0||Ir.normal!==void 0||Ir.color!==void 0&&ke.isWebGL2===!0)&&rt.update(q,K,ci),(_i||ut.receiveShadow!==q.receiveShadow)&&(ut.receiveShadow=q.receiveShadow,$t.setValue(W,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(zn.envMap.value=qe,zn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),_i&&($t.setValue(W,"toneMappingExposure",C.toneMappingExposure),ut.needsLights&&$a(zn,Ps),Re&&j.fog===!0&&ye.refreshFogUniforms(zn,Re),ye.refreshMaterialUniforms(zn,j,oe,$,Ce),Ca.upload(W,po(ut),zn,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ca.upload(W,po(ut),zn,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&$t.setValue(W,"center",q.center),$t.setValue(W,"modelViewMatrix",q.modelViewMatrix),$t.setValue(W,"normalMatrix",q.normalMatrix),$t.setValue(W,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const En=j.uniformsGroups;for(let Ur=0,_o=En.length;Ur<_o;Ur++)if(ke.isWebGL2){const Nr=En[Ur];U.update(Nr,ci),U.bind(Nr,ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ci}function $a(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function go(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(w,k,K){et.get(w.texture).__webglTexture=k,et.get(w.depthTexture).__webglTexture=K;const j=et.get(w);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=K===void 0,j.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){const K=et.get(w);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,K=0){O=w,V=k,B=K;let j=!0,q=null,Re=!1,Ne=!1;if(w){const qe=et.get(w);qe.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(W.FRAMEBUFFER,null),j=!1):qe.__webglFramebuffer===void 0?R.setupRenderTarget(w):qe.__hasExternalTextures&&R.rebindTextures(w,et.get(w.texture).__webglTexture,et.get(w.depthTexture).__webglTexture);const lt=w.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Ne=!0);const nt=et.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(nt[k])?q=nt[k][K]:q=nt[k],Re=!0):ke.isWebGL2&&w.samples>0&&R.useMultisampledRTT(w)===!1?q=et.get(w).__webglMultisampledFramebuffer:Array.isArray(nt)?q=nt[K]:q=nt,y.copy(w.viewport),N.copy(w.scissor),re=w.scissorTest}else y.copy(ae).multiplyScalar(oe).floor(),N.copy(de).multiplyScalar(oe).floor(),re=Ee;if(Fe.bindFramebuffer(W.FRAMEBUFFER,q)&&ke.drawBuffers&&j&&Fe.drawBuffers(w,q),Fe.viewport(y),Fe.scissor(N),Fe.setScissorTest(re),Re){const qe=et.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+k,qe.__webglTexture,K)}else if(Ne){const qe=et.get(w.texture),lt=k||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,qe.__webglTexture,K||0,lt)}se=-1},this.readRenderTargetPixels=function(w,k,K,j,q,Re,Ne){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ye=Ye[Ne]),Ye){Fe.bindFramebuffer(W.FRAMEBUFFER,Ye);try{const qe=w.texture,lt=qe.format,nt=qe.type;if(lt!==oi&&Ae.convert(lt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const st=nt===ao&&(De.has("EXT_color_buffer_half_float")||ke.isWebGL2&&De.has("EXT_color_buffer_float"));if(nt!==nr&&Ae.convert(nt)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(nt===Ui&&(ke.isWebGL2||De.has("OES_texture_float")||De.has("WEBGL_color_buffer_float")))&&!st){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-j&&K>=0&&K<=w.height-q&&W.readPixels(k,K,j,q,Ae.convert(lt),Ae.convert(nt),Re)}finally{const qe=O!==null?et.get(O).__webglFramebuffer:null;Fe.bindFramebuffer(W.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(w,k,K=0){const j=Math.pow(2,-K),q=Math.floor(k.image.width*j),Re=Math.floor(k.image.height*j);R.setTexture2D(k,0),W.copyTexSubImage2D(W.TEXTURE_2D,K,0,0,w.x,w.y,q,Re),Fe.unbindTexture()},this.copyTextureToTexture=function(w,k,K,j=0){const q=k.image.width,Re=k.image.height,Ne=Ae.convert(K.format),Ye=Ae.convert(K.type);R.setTexture2D(K,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,K.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,K.unpackAlignment),k.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,j,w.x,w.y,q,Re,Ne,Ye,k.image.data):k.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,j,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,Ne,k.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,j,w.x,w.y,Ne,Ye,k.image),j===0&&K.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(w,k,K,j,q=0){if(C.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=w.max.x-w.min.x+1,Ne=w.max.y-w.min.y+1,Ye=w.max.z-w.min.z+1,qe=Ae.convert(j.format),lt=Ae.convert(j.type);let nt;if(j.isData3DTexture)R.setTexture3D(j,0),nt=W.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)R.setTexture2DArray(j,0),nt=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,j.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,j.unpackAlignment);const st=W.getParameter(W.UNPACK_ROW_LENGTH),Bt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),cn=W.getParameter(W.UNPACK_SKIP_PIXELS),kt=W.getParameter(W.UNPACK_SKIP_ROWS),jn=W.getParameter(W.UNPACK_SKIP_IMAGES),Ut=K.isCompressedTexture?K.mipmaps[q]:K.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,Ut.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ut.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,w.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,w.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,w.min.z),K.isDataTexture||K.isData3DTexture?W.texSubImage3D(nt,q,k.x,k.y,k.z,Re,Ne,Ye,qe,lt,Ut.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(nt,q,k.x,k.y,k.z,Re,Ne,Ye,qe,Ut.data)):W.texSubImage3D(nt,q,k.x,k.y,k.z,Re,Ne,Ye,qe,lt,Ut),W.pixelStorei(W.UNPACK_ROW_LENGTH,st),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Bt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,cn),W.pixelStorei(W.UNPACK_SKIP_ROWS,kt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,jn),q===0&&j.generateMipmaps&&W.generateMipmap(nt),Fe.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Fe.unbindTexture()},this.resetState=function(){V=0,B=0,O=null,Fe.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ru?"display-p3":"srgb",t.unpackColorSpace=Lt.workingColorSpace===Ha?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===an?Ar:yp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ar?an:Oi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class w1 extends lu{}w1.prototype.isWebGL1Renderer=!0;class C1 extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class jd extends li{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ds=new qt,Jd=new qt,Ta=[],Qd=new Rr,R1=new qt,Js=new ai,Qs=new co;class ep extends ai{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jd(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,R1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ds),Qd.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(Qd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new co),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ds),Qs.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,o=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(i),e.ray.intersectsSphere(Qs)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,ds),Jd.multiplyMatrices(i,ds),Js.matrixWorld=Jd,Js.raycast(e,Ta);for(let u=0,c=Ta.length;u<c;u++){const f=Ta[u];f.instanceId=a,f.object=this,t.push(f)}Ta.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jd(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class cu extends or{constructor(e=1,t=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:o},t=Math.max(3,t);const a=[],u=[],c=[],f=[],d=new Y,p=new at;u.push(0,0,0),c.push(0,0,1),f.push(.5,.5);for(let _=0,v=3;_<=t;_++,v+=3){const M=i+_/t*o;d.x=e*Math.cos(M),d.y=e*Math.sin(M),u.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(u[v]/e+1)/2,p.y=(u[v+1]/e+1)/2,f.push(p.x,p.y)}for(let _=1;_<=t;_++)a.push(_,_+1,0);this.setIndex(a),this.setAttribute("position",new mi(u,3)),this.setAttribute("normal",new mi(c,3)),this.setAttribute("uv",new mi(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class tp{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(pn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nu);var Zc=function(r,e){return Zc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])},Zc(r,e)};function Cs(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Zc(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function $c(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],i=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&i>=r.length&&(r=void 0),{value:r&&r[i++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function jc(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var i=t.call(r),o,a=[],u;try{for(;(e===void 0||e-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(c){u={error:c}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(u)throw u.error}}return a}function Jc(r,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,a;i<o;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return r.concat(a||Array.prototype.slice.call(e))}function gi(r){return typeof r=="function"}function Xp(r){var e=function(i){Error.call(i),i.stack=new Error().stack},t=r(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Uc=Xp(function(r){return function(t){r(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(i,o){return o+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function Qc(r,e){if(r){var t=r.indexOf(e);0<=t&&r.splice(t,1)}}var Ya=function(){function r(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return r.prototype.unsubscribe=function(){var e,t,i,o,a;if(!this.closed){this.closed=!0;var u=this._parentage;if(u)if(this._parentage=null,Array.isArray(u))try{for(var c=$c(u),f=c.next();!f.done;f=c.next()){var d=f.value;d.remove(this)}}catch(A){e={error:A}}finally{try{f&&!f.done&&(t=c.return)&&t.call(c)}finally{if(e)throw e.error}}else u.remove(this);var p=this.initialTeardown;if(gi(p))try{p()}catch(A){a=A instanceof Uc?A.errors:[A]}var _=this._finalizers;if(_){this._finalizers=null;try{for(var v=$c(_),M=v.next();!M.done;M=v.next()){var b=M.value;try{np(b)}catch(A){a=a??[],A instanceof Uc?a=Jc(Jc([],jc(a)),jc(A.errors)):a.push(A)}}}catch(A){i={error:A}}finally{try{M&&!M.done&&(o=v.return)&&o.call(v)}finally{if(i)throw i.error}}}if(a)throw new Uc(a)}},r.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)np(e);else{if(e instanceof r){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},r.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},r.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},r.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&Qc(t,e)},r.prototype.remove=function(e){var t=this._finalizers;t&&Qc(t,e),e instanceof r&&e._removeParent(this)},r.EMPTY=function(){var e=new r;return e.closed=!0,e}(),r}(),Yp=Ya.EMPTY;function qp(r){return r instanceof Ya||r&&"closed"in r&&gi(r.remove)&&gi(r.add)&&gi(r.unsubscribe)}function np(r){gi(r)?r():r.unsubscribe()}var Kp={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Zp={setTimeout:function(r,e){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout.apply(void 0,Jc([r,e],jc(t)))},clearTimeout:function(r){var e=Zp.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(r)},delegate:void 0};function L1(r){Zp.setTimeout(function(){throw r})}function ip(){}function Ra(r){r()}var uu=function(r){Cs(e,r);function e(t){var i=r.call(this)||this;return i.isStopped=!1,t?(i.destination=t,qp(t)&&t.add(i)):i.destination=U1,i}return e.create=function(t,i,o){return new eu(t,i,o)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Ya),P1=Function.prototype.bind;function Nc(r,e){return P1.call(r,e)}var D1=function(){function r(e){this.partialObserver=e}return r.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(i){Aa(i)}},r.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(i){Aa(i)}else Aa(e)},r.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){Aa(t)}},r}(),eu=function(r){Cs(e,r);function e(t,i,o){var a=r.call(this)||this,u;if(gi(t)||!t)u={next:t??void 0,error:i??void 0,complete:o??void 0};else{var c;a&&Kp.useDeprecatedNextContext?(c=Object.create(t),c.unsubscribe=function(){return a.unsubscribe()},u={next:t.next&&Nc(t.next,c),error:t.error&&Nc(t.error,c),complete:t.complete&&Nc(t.complete,c)}):u=t}return a.destination=new D1(u),a}return e}(uu);function Aa(r){L1(r)}function I1(r){throw r}var U1={closed:!0,next:ip,error:I1,complete:ip},N1=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function $p(r){return r}function O1(r){return r.length===0?$p:r.length===1?r[0]:function(t){return r.reduce(function(i,o){return o(i)},t)}}var rp=function(){function r(e){e&&(this._subscribe=e)}return r.prototype.lift=function(e){var t=new r;return t.source=this,t.operator=e,t},r.prototype.subscribe=function(e,t,i){var o=this,a=B1(e)?e:new eu(e,t,i);return Ra(function(){var u=o,c=u.operator,f=u.source;a.add(c?c.call(a,f):f?o._subscribe(a):o._trySubscribe(a))}),a},r.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},r.prototype.forEach=function(e,t){var i=this;return t=sp(t),new t(function(o,a){var u=new eu({next:function(c){try{e(c)}catch(f){a(f),u.unsubscribe()}},error:a,complete:o});i.subscribe(u)})},r.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},r.prototype[N1]=function(){return this},r.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return O1(e)(this)},r.prototype.toPromise=function(e){var t=this;return e=sp(e),new e(function(i,o){var a;t.subscribe(function(u){return a=u},function(u){return o(u)},function(){return i(a)})})},r.create=function(e){return new r(e)},r}();function sp(r){var e;return(e=r??Kp.Promise)!==null&&e!==void 0?e:Promise}function F1(r){return r&&gi(r.next)&&gi(r.error)&&gi(r.complete)}function B1(r){return r&&r instanceof uu||F1(r)&&qp(r)}function z1(r){return gi(r==null?void 0:r.lift)}function jp(r){return function(e){if(z1(e))return e.lift(function(t){try{return r(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Jp(r,e,t,i,o){return new G1(r,e,t,i,o)}var G1=function(r){Cs(e,r);function e(t,i,o,a,u,c){var f=r.call(this,t)||this;return f.onFinalize=u,f.shouldUnsubscribe=c,f._next=i?function(d){try{i(d)}catch(p){t.error(p)}}:r.prototype._next,f._error=a?function(d){try{a(d)}catch(p){t.error(p)}finally{this.unsubscribe()}}:r.prototype._error,f._complete=o?function(){try{o()}catch(d){t.error(d)}finally{this.unsubscribe()}}:r.prototype._complete,f}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var i=this.closed;r.prototype.unsubscribe.call(this),!i&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(uu),H1=Xp(function(r){return function(){r(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Qp=function(r){Cs(e,r);function e(){var t=r.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var i=new op(this,this);return i.operator=t,i},e.prototype._throwIfClosed=function(){if(this.closed)throw new H1},e.prototype.next=function(t){var i=this;Ra(function(){var o,a;if(i._throwIfClosed(),!i.isStopped){i.currentObservers||(i.currentObservers=Array.from(i.observers));try{for(var u=$c(i.currentObservers),c=u.next();!c.done;c=u.next()){var f=c.value;f.next(t)}}catch(d){o={error:d}}finally{try{c&&!c.done&&(a=u.return)&&a.call(u)}finally{if(o)throw o.error}}}})},e.prototype.error=function(t){var i=this;Ra(function(){if(i._throwIfClosed(),!i.isStopped){i.hasError=i.isStopped=!0,i.thrownError=t;for(var o=i.observers;o.length;)o.shift().error(t)}})},e.prototype.complete=function(){var t=this;Ra(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var i=t.observers;i.length;)i.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),r.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var i=this,o=this,a=o.hasError,u=o.isStopped,c=o.observers;return a||u?Yp:(this.currentObservers=null,c.push(t),new Ya(function(){i.currentObservers=null,Qc(c,t)}))},e.prototype._checkFinalizedStatuses=function(t){var i=this,o=i.hasError,a=i.thrownError,u=i.isStopped;o?t.error(a):u&&t.complete()},e.prototype.asObservable=function(){var t=new rp;return t.source=this,t},e.create=function(t,i){return new op(t,i)},e}(rp),op=function(r){Cs(e,r);function e(t,i){var o=r.call(this)||this;return o.destination=t,o.source=i,o}return e.prototype.next=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.next)===null||o===void 0||o.call(i,t)},e.prototype.error=function(t){var i,o;(o=(i=this.destination)===null||i===void 0?void 0:i.error)===null||o===void 0||o.call(i,t)},e.prototype.complete=function(){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||i===void 0||i.call(t)},e.prototype._subscribe=function(t){var i,o;return(o=(i=this.source)===null||i===void 0?void 0:i.subscribe(t))!==null&&o!==void 0?o:Yp},e}(Qp),fo=function(r){Cs(e,r);function e(t){var i=r.call(this)||this;return i._value=t,i}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var i=r.prototype._subscribe.call(this,t);return!i.closed&&t.next(this._value),i},e.prototype.getValue=function(){var t=this,i=t.hasError,o=t.thrownError,a=t._value;if(i)throw o;return this._throwIfClosed(),a},e.prototype.next=function(t){r.prototype.next.call(this,this._value=t)},e}(Qp);function eo(r,e){return jp(function(t,i){var o=0;t.subscribe(Jp(i,function(a){i.next(r.call(e,a,o++))}))})}function to(r,e){return e===void 0&&(e=$p),r=r??V1,jp(function(t,i){var o,a=!0;t.subscribe(Jp(i,function(u){var c=e(u);(a||!r(o,c))&&(a=!1,o=c,i.next(u))}))})}function V1(r,e){return r===e}const W1={items:[]},_s=new fo(W1);function k1(r){const t={..._s.getValue(),items:r};_s.next(t)}const ap=window.location.hash.replace("#",""),X1={columns:["X_umap0_norm","X_umap1_norm","global_sphere0_norm","global_sphere1_norm","global_sphere2_norm","clusters"],prefix:ap||"50pe",pallete:{},listPalette:[],palleteColumn:"clusters_pal",genes:[],items:[]},wt=new fo(X1);function Y1(r){const e=wt.getValue(),t=Object.keys(r).map(o=>[o,r[o]]),i={...e,pallete:r,listPalette:t};wt.next(i)}function q1(r){const t={...wt.getValue(),genes:r};wt.next(t)}function K1(r){const t={...wt.getValue(),prefix:r};wt.next(t)}const Z1={scene:new C1,selectedGenes:[]},em=new fo(Z1),$1={isLoading:!0,theme:"light"},oo=new fo($1);function vs(r){const t={...oo.getValue(),isLoading:r};oo.next(t)}const j1={selectedCelltypes:[],selectedGenes:[]},Wt=new fo(j1);function tu(r){const t={...Wt.getValue(),selectedCelltypes:r};Wt.next(t)}function tm(r){const t={...Wt.getValue(),selectedGenes:r};Wt.next(t)}const lp={type:"change"},Oc={type:"start"},cp={type:"end"},wa=new Rp,up=new Ji,J1=Math.cos(70*_E.DEG2RAD);class nm extends Cr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zn.ROTATE,MIDDLE:Zn.DOLLY,RIGHT:Zn.PAN},this.touches={ONE:$r.ROTATE,TWO:$r.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",Be),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Be),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(lp),i.update(),a=o.NONE},this.update=function(){const U=new Y,xe=new rr().setFromUnitVectors(e.up,new Y(0,1,0)),be=xe.clone().invert(),He=new Y,L=new rr,_e=new Y,pe=2*Math.PI;return function(Ve=null){const Et=i.object.position;U.copy(Et).sub(i.target),U.applyQuaternion(xe),c.setFromVector3(U),i.autoRotate&&a===o.NONE&&re(y(Ve)),i.enableDamping?(c.theta+=f.theta*i.dampingFactor,c.phi+=f.phi*i.dampingFactor):(c.theta+=f.theta,c.phi+=f.phi);let dt=i.minAzimuthAngle,Ct=i.maxAzimuthAngle;isFinite(dt)&&isFinite(Ct)&&(dt<-Math.PI?dt+=pe:dt>Math.PI&&(dt-=pe),Ct<-Math.PI?Ct+=pe:Ct>Math.PI&&(Ct-=pe),dt<=Ct?c.theta=Math.max(dt,Math.min(Ct,c.theta)):c.theta=c.theta>(dt+Ct)/2?Math.max(dt,c.theta):Math.min(Ct,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&B||i.object.isOrthographicCamera?c.radius=ae(c.radius):c.radius=ae(c.radius*d),U.setFromSpherical(c),U.applyQuaternion(be),Et.copy(i.target).add(U),i.object.lookAt(i.target),i.enableDamping===!0?(f.theta*=1-i.dampingFactor,f.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(f.set(0,0,0),p.set(0,0,0));let Zt=!1;if(i.zoomToCursor&&B){let yt=null;if(i.object.isPerspectiveCamera){const It=U.length();yt=ae(It*d);const rn=It-yt;i.object.position.addScaledVector(I,rn),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const It=new Y(V.x,V.y,0);It.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),Zt=!0;const rn=new Y(V.x,V.y,0);rn.unproject(i.object),i.object.position.sub(rn).add(It),i.object.updateMatrixWorld(),yt=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;yt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(yt).add(i.object.position):(wa.origin.copy(i.object.position),wa.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(wa.direction))<J1?e.lookAt(i.target):(up.setFromNormalAndCoplanarPoint(i.object.up,i.target),wa.intersectPlane(up,i.target))))}else i.object.isOrthographicCamera&&(Zt=d!==1,Zt&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix()));return d=1,B=!1,Zt||He.distanceToSquared(i.object.position)>u||8*(1-L.dot(i.object.quaternion))>u||_e.distanceToSquared(i.target)>0?(i.dispatchEvent(lp),He.copy(i.object.position),L.copy(i.object.quaternion),_e.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Mt),i.domElement.removeEventListener("pointerdown",R),i.domElement.removeEventListener("pointercancel",X),i.domElement.removeEventListener("wheel",ge),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",X),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Be),i._domElementKeyEvents=null)};const i=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const u=1e-6,c=new tp,f=new tp;let d=1;const p=new Y,_=new at,v=new at,M=new at,b=new at,A=new at,m=new at,g=new at,D=new at,C=new at,I=new Y,V=new at;let B=!1;const O=[],se={};let Me=!1;function y(U){return U!==null?2*Math.PI/60*i.autoRotateSpeed*U:2*Math.PI/60/60*i.autoRotateSpeed}function N(U){const xe=Math.abs(U*.01);return Math.pow(.95,i.zoomSpeed*xe)}function re(U){f.theta-=U}function ve(U){f.phi-=U}const G=function(){const U=new Y;return function(be,He){U.setFromMatrixColumn(He,0),U.multiplyScalar(-be),p.add(U)}}(),Q=function(){const U=new Y;return function(be,He){i.screenSpacePanning===!0?U.setFromMatrixColumn(He,1):(U.setFromMatrixColumn(He,0),U.crossVectors(i.object.up,U)),U.multiplyScalar(be),p.add(U)}}(),$=function(){const U=new Y;return function(be,He){const L=i.domElement;if(i.object.isPerspectiveCamera){const _e=i.object.position;U.copy(_e).sub(i.target);let pe=U.length();pe*=Math.tan(i.object.fov/2*Math.PI/180),G(2*be*pe/L.clientHeight,i.object.matrix),Q(2*He*pe/L.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(G(be*(i.object.right-i.object.left)/i.object.zoom/L.clientWidth,i.object.matrix),Q(He*(i.object.top-i.object.bottom)/i.object.zoom/L.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function oe(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function te(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function le(U,xe){if(!i.zoomToCursor)return;B=!0;const be=i.domElement.getBoundingClientRect(),He=U-be.left,L=xe-be.top,_e=be.width,pe=be.height;V.x=He/_e*2-1,V.y=-(L/pe)*2+1,I.set(V.x,V.y,1).unproject(i.object).sub(i.object.position).normalize()}function ae(U){return Math.max(i.minDistance,Math.min(i.maxDistance,U))}function de(U){_.set(U.clientX,U.clientY)}function Ee(U){le(U.clientX,U.clientX),g.set(U.clientX,U.clientY)}function $e(U){b.set(U.clientX,U.clientY)}function J(U){v.set(U.clientX,U.clientY),M.subVectors(v,_).multiplyScalar(i.rotateSpeed);const xe=i.domElement;re(2*Math.PI*M.x/xe.clientHeight),ve(2*Math.PI*M.y/xe.clientHeight),_.copy(v),i.update()}function fe(U){D.set(U.clientX,U.clientY),C.subVectors(D,g),C.y>0?oe(N(C.y)):C.y<0&&te(N(C.y)),g.copy(D),i.update()}function Ce(U){A.set(U.clientX,U.clientY),m.subVectors(A,b).multiplyScalar(i.panSpeed),$(m.x,m.y),b.copy(A),i.update()}function We(U){le(U.clientX,U.clientY),U.deltaY<0?te(N(U.deltaY)):U.deltaY>0&&oe(N(U.deltaY)),i.update()}function Ge(U){let xe=!1;switch(U.code){case i.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?ve(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,i.keyPanSpeed),xe=!0;break;case i.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?ve(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,-i.keyPanSpeed),xe=!0;break;case i.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?re(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(i.keyPanSpeed,0),xe=!0;break;case i.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?re(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(-i.keyPanSpeed,0),xe=!0;break}xe&&(U.preventDefault(),i.update())}function Pe(U){if(O.length===1)_.set(U.pageX,U.pageY);else{const xe=Ae(U),be=.5*(U.pageX+xe.x),He=.5*(U.pageY+xe.y);_.set(be,He)}}function _t(U){if(O.length===1)b.set(U.pageX,U.pageY);else{const xe=Ae(U),be=.5*(U.pageX+xe.x),He=.5*(U.pageY+xe.y);b.set(be,He)}}function je(U){const xe=Ae(U),be=U.pageX-xe.x,He=U.pageY-xe.y,L=Math.sqrt(be*be+He*He);g.set(0,L)}function W(U){i.enableZoom&&je(U),i.enablePan&&_t(U)}function Ht(U){i.enableZoom&&je(U),i.enableRotate&&Pe(U)}function De(U){if(O.length==1)v.set(U.pageX,U.pageY);else{const be=Ae(U),He=.5*(U.pageX+be.x),L=.5*(U.pageY+be.y);v.set(He,L)}M.subVectors(v,_).multiplyScalar(i.rotateSpeed);const xe=i.domElement;re(2*Math.PI*M.x/xe.clientHeight),ve(2*Math.PI*M.y/xe.clientHeight),_.copy(v)}function ke(U){if(O.length===1)A.set(U.pageX,U.pageY);else{const xe=Ae(U),be=.5*(U.pageX+xe.x),He=.5*(U.pageY+xe.y);A.set(be,He)}m.subVectors(A,b).multiplyScalar(i.panSpeed),$(m.x,m.y),b.copy(A)}function Fe(U){const xe=Ae(U),be=U.pageX-xe.x,He=U.pageY-xe.y,L=Math.sqrt(be*be+He*He);D.set(0,L),C.set(0,Math.pow(D.y/g.y,i.zoomSpeed)),oe(C.y),g.copy(D);const _e=(U.pageX+xe.x)*.5,pe=(U.pageY+xe.y)*.5;le(_e,pe)}function xt(U){i.enableZoom&&Fe(U),i.enablePan&&ke(U)}function et(U){i.enableZoom&&Fe(U),i.enableRotate&&De(U)}function R(U){i.enabled!==!1&&(O.length===0&&(i.domElement.setPointerCapture(U.pointerId),i.domElement.addEventListener("pointermove",E),i.domElement.addEventListener("pointerup",X)),rt(U),U.pointerType==="touch"?Qe(U):me(U))}function E(U){i.enabled!==!1&&(U.pointerType==="touch"?he(U):ue(U))}function X(U){switch(Je(U),O.length){case 0:i.domElement.releasePointerCapture(U.pointerId),i.domElement.removeEventListener("pointermove",E),i.domElement.removeEventListener("pointerup",X),i.dispatchEvent(cp),a=o.NONE;break;case 1:const xe=O[0],be=se[xe];Qe({pointerId:xe,pageX:be.x,pageY:be.y});break}}function me(U){let xe;switch(U.button){case 0:xe=i.mouseButtons.LEFT;break;case 1:xe=i.mouseButtons.MIDDLE;break;case 2:xe=i.mouseButtons.RIGHT;break;default:xe=-1}switch(xe){case Zn.DOLLY:if(i.enableZoom===!1)return;Ee(U),a=o.DOLLY;break;case Zn.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enablePan===!1)return;$e(U),a=o.PAN}else{if(i.enableRotate===!1)return;de(U),a=o.ROTATE}break;case Zn.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enableRotate===!1)return;de(U),a=o.ROTATE}else{if(i.enablePan===!1)return;$e(U),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(Oc)}function ue(U){switch(a){case o.ROTATE:if(i.enableRotate===!1)return;J(U);break;case o.DOLLY:if(i.enableZoom===!1)return;fe(U);break;case o.PAN:if(i.enablePan===!1)return;Ce(U);break}}function ge(U){i.enabled===!1||i.enableZoom===!1||a!==o.NONE||(U.preventDefault(),i.dispatchEvent(Oc),We(Ie(U)),i.dispatchEvent(cp))}function Ie(U){const xe=U.deltaMode,be={clientX:U.clientX,clientY:U.clientY,deltaY:U.deltaY};switch(xe){case 1:be.deltaY*=16;break;case 2:be.deltaY*=100;break}return U.ctrlKey&&!Me&&(be.deltaY*=10),be}function ye(U){U.key==="Control"&&(Me=!0,i.domElement.getRootNode().addEventListener("keyup",we,{passive:!0,capture:!0}))}function we(U){U.key==="Control"&&(Me=!1,i.domElement.getRootNode().removeEventListener("keyup",we,{passive:!0,capture:!0}))}function Be(U){i.enabled===!1||i.enablePan===!1||Ge(U)}function Qe(U){switch(ze(U),O.length){case 1:switch(i.touches.ONE){case $r.ROTATE:if(i.enableRotate===!1)return;Pe(U),a=o.TOUCH_ROTATE;break;case $r.PAN:if(i.enablePan===!1)return;_t(U),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(i.touches.TWO){case $r.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;W(U),a=o.TOUCH_DOLLY_PAN;break;case $r.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ht(U),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(Oc)}function he(U){switch(ze(U),a){case o.TOUCH_ROTATE:if(i.enableRotate===!1)return;De(U),i.update();break;case o.TOUCH_PAN:if(i.enablePan===!1)return;ke(U),i.update();break;case o.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;xt(U),i.update();break;case o.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;et(U),i.update();break;default:a=o.NONE}}function Mt(U){i.enabled!==!1&&U.preventDefault()}function rt(U){O.push(U.pointerId)}function Je(U){delete se[U.pointerId];for(let xe=0;xe<O.length;xe++)if(O[xe]==U.pointerId){O.splice(xe,1);return}}function ze(U){let xe=se[U.pointerId];xe===void 0&&(xe=new at,se[U.pointerId]=xe),xe.set(U.pageX,U.pageY)}function Ae(U){const xe=U.pointerId===O[0]?O[1]:O[0];return se[xe]}i.domElement.addEventListener("contextmenu",Mt),i.domElement.addEventListener("pointerdown",R),i.domElement.addEventListener("pointercancel",X),i.domElement.addEventListener("wheel",ge,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ye,{passive:!0,capture:!0}),this.update()}}var no=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Fa={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Fa.exports;(function(r,e){(function(){var t,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",d=500,p="__lodash_placeholder__",_=1,v=2,M=4,b=1,A=2,m=1,g=2,D=4,C=8,I=16,V=32,B=64,O=128,se=256,Me=512,y=30,N="...",re=800,ve=16,G=1,Q=2,$=3,oe=1/0,te=9007199254740991,le=17976931348623157e292,ae=NaN,de=4294967295,Ee=de-1,$e=de>>>1,J=[["ary",O],["bind",m],["bindKey",g],["curry",C],["curryRight",I],["flip",Me],["partial",V],["partialRight",B],["rearg",se]],fe="[object Arguments]",Ce="[object Array]",We="[object AsyncFunction]",Ge="[object Boolean]",Pe="[object Date]",_t="[object DOMException]",je="[object Error]",W="[object Function]",Ht="[object GeneratorFunction]",De="[object Map]",ke="[object Number]",Fe="[object Null]",xt="[object Object]",et="[object Promise]",R="[object Proxy]",E="[object RegExp]",X="[object Set]",me="[object String]",ue="[object Symbol]",ge="[object Undefined]",Ie="[object WeakMap]",ye="[object WeakSet]",we="[object ArrayBuffer]",Be="[object DataView]",Qe="[object Float32Array]",he="[object Float64Array]",Mt="[object Int8Array]",rt="[object Int16Array]",Je="[object Int32Array]",ze="[object Uint8Array]",Ae="[object Uint8ClampedArray]",tt="[object Uint16Array]",U="[object Uint32Array]",xe=/\b__p \+= '';/g,be=/\b(__p \+=) '' \+/g,He=/(__e\(.*?\)|\b__t\)) \+\n'';/g,L=/&(?:amp|lt|gt|quot|#39);/g,_e=/[&<>"']/g,pe=RegExp(L.source),Ue=RegExp(_e.source),Ve=/<%-([\s\S]+?)%>/g,Et=/<%([\s\S]+?)%>/g,dt=/<%=([\s\S]+?)%>/g,Ct=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Zt=/^\w*$/,yt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,It=/[\\^$.*+?()[\]{}|]/g,rn=RegExp(It.source),Lr=/^\s+/,Ka=/\s/,Pr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ho=/\{\n\/\* \[wrapped with (.+)\] \*/,Dr=/,? & /,po=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,mo=/[()=,{}\[\]\/\s]/,Za=/\\(\\)?/g,$a=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,go=/\w*$/,w=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,K=/^\[object .+?Constructor\]$/,j=/^0o[0-7]+$/i,q=/^(?:0|[1-9]\d*)$/,Re=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ne=/($^)/,Ye=/['\n\r\u2028\u2029\\]/g,qe="\\ud800-\\udfff",lt="\\u0300-\\u036f",nt="\\ufe20-\\ufe2f",st="\\u20d0-\\u20ff",Bt=lt+nt+st,cn="\\u2700-\\u27bf",kt="a-z\\xdf-\\xf6\\xf8-\\xff",jn="\\xac\\xb1\\xd7\\xf7",Ut="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ut="\\u2000-\\u206f",Rs=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Nt="A-Z\\xc0-\\xd6\\xd8-\\xde",ci="\\ufe0e\\ufe0f",Ls=jn+Ut+ut+Rs,_i="['’]",Ps="["+qe+"]",$t="["+Ls+"]",zn="["+Bt+"]",Ir="\\d+",En="["+cn+"]",Ur="["+kt+"]",_o="[^"+qe+Ls+Ir+cn+kt+Nt+"]",Nr="\\ud83c[\\udffb-\\udfff]",rm="(?:"+zn+"|"+Nr+")",hu="[^"+qe+"]",ja="(?:\\ud83c[\\udde6-\\uddff]){2}",Ja="[\\ud800-\\udbff][\\udc00-\\udfff]",Or="["+Nt+"]",du="\\u200d",pu="(?:"+Ur+"|"+_o+")",sm="(?:"+Or+"|"+_o+")",mu="(?:"+_i+"(?:d|ll|m|re|s|t|ve))?",gu="(?:"+_i+"(?:D|LL|M|RE|S|T|VE))?",_u=rm+"?",vu="["+ci+"]?",om="(?:"+du+"(?:"+[hu,ja,Ja].join("|")+")"+vu+_u+")*",am="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",lm="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",xu=vu+_u+om,cm="(?:"+[En,ja,Ja].join("|")+")"+xu,um="(?:"+[hu+zn+"?",zn,ja,Ja,Ps].join("|")+")",fm=RegExp(_i,"g"),hm=RegExp(zn,"g"),Qa=RegExp(Nr+"(?="+Nr+")|"+um+xu,"g"),dm=RegExp([Or+"?"+Ur+"+"+mu+"(?="+[$t,Or,"$"].join("|")+")",sm+"+"+gu+"(?="+[$t,Or+pu,"$"].join("|")+")",Or+"?"+pu+"+"+mu,Or+"+"+gu,lm,am,Ir,cm].join("|"),"g"),pm=RegExp("["+du+qe+Bt+ci+"]"),mm=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,gm=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],_m=-1,Ot={};Ot[Qe]=Ot[he]=Ot[Mt]=Ot[rt]=Ot[Je]=Ot[ze]=Ot[Ae]=Ot[tt]=Ot[U]=!0,Ot[fe]=Ot[Ce]=Ot[we]=Ot[Ge]=Ot[Be]=Ot[Pe]=Ot[je]=Ot[W]=Ot[De]=Ot[ke]=Ot[xt]=Ot[E]=Ot[X]=Ot[me]=Ot[Ie]=!1;var Dt={};Dt[fe]=Dt[Ce]=Dt[we]=Dt[Be]=Dt[Ge]=Dt[Pe]=Dt[Qe]=Dt[he]=Dt[Mt]=Dt[rt]=Dt[Je]=Dt[De]=Dt[ke]=Dt[xt]=Dt[E]=Dt[X]=Dt[me]=Dt[ue]=Dt[ze]=Dt[Ae]=Dt[tt]=Dt[U]=!0,Dt[je]=Dt[W]=Dt[Ie]=!1;var vm={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},xm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Mm={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Sm={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Em=parseFloat,ym=parseInt,Mu=typeof no=="object"&&no&&no.Object===Object&&no,bm=typeof self=="object"&&self&&self.Object===Object&&self,sn=Mu||bm||Function("return this")(),el=e&&!e.nodeType&&e,ar=el&&!0&&r&&!r.nodeType&&r,Su=ar&&ar.exports===el,tl=Su&&Mu.process,Gn=function(){try{var z=ar&&ar.require&&ar.require("util").types;return z||tl&&tl.binding&&tl.binding("util")}catch{}}(),Eu=Gn&&Gn.isArrayBuffer,yu=Gn&&Gn.isDate,bu=Gn&&Gn.isMap,Tu=Gn&&Gn.isRegExp,Au=Gn&&Gn.isSet,wu=Gn&&Gn.isTypedArray;function Ln(z,ee,Z){switch(Z.length){case 0:return z.call(ee);case 1:return z.call(ee,Z[0]);case 2:return z.call(ee,Z[0],Z[1]);case 3:return z.call(ee,Z[0],Z[1],Z[2])}return z.apply(ee,Z)}function Tm(z,ee,Z,Le){for(var it=-1,Tt=z==null?0:z.length;++it<Tt;){var jt=z[it];ee(Le,jt,Z(jt),z)}return Le}function Hn(z,ee){for(var Z=-1,Le=z==null?0:z.length;++Z<Le&&ee(z[Z],Z,z)!==!1;);return z}function Am(z,ee){for(var Z=z==null?0:z.length;Z--&&ee(z[Z],Z,z)!==!1;);return z}function Cu(z,ee){for(var Z=-1,Le=z==null?0:z.length;++Z<Le;)if(!ee(z[Z],Z,z))return!1;return!0}function Fi(z,ee){for(var Z=-1,Le=z==null?0:z.length,it=0,Tt=[];++Z<Le;){var jt=z[Z];ee(jt,Z,z)&&(Tt[it++]=jt)}return Tt}function vo(z,ee){var Z=z==null?0:z.length;return!!Z&&Fr(z,ee,0)>-1}function nl(z,ee,Z){for(var Le=-1,it=z==null?0:z.length;++Le<it;)if(Z(ee,z[Le]))return!0;return!1}function zt(z,ee){for(var Z=-1,Le=z==null?0:z.length,it=Array(Le);++Z<Le;)it[Z]=ee(z[Z],Z,z);return it}function Bi(z,ee){for(var Z=-1,Le=ee.length,it=z.length;++Z<Le;)z[it+Z]=ee[Z];return z}function il(z,ee,Z,Le){var it=-1,Tt=z==null?0:z.length;for(Le&&Tt&&(Z=z[++it]);++it<Tt;)Z=ee(Z,z[it],it,z);return Z}function wm(z,ee,Z,Le){var it=z==null?0:z.length;for(Le&&it&&(Z=z[--it]);it--;)Z=ee(Z,z[it],it,z);return Z}function rl(z,ee){for(var Z=-1,Le=z==null?0:z.length;++Z<Le;)if(ee(z[Z],Z,z))return!0;return!1}var Cm=sl("length");function Rm(z){return z.split("")}function Lm(z){return z.match(po)||[]}function Ru(z,ee,Z){var Le;return Z(z,function(it,Tt,jt){if(ee(it,Tt,jt))return Le=Tt,!1}),Le}function xo(z,ee,Z,Le){for(var it=z.length,Tt=Z+(Le?1:-1);Le?Tt--:++Tt<it;)if(ee(z[Tt],Tt,z))return Tt;return-1}function Fr(z,ee,Z){return ee===ee?Vm(z,ee,Z):xo(z,Lu,Z)}function Pm(z,ee,Z,Le){for(var it=Z-1,Tt=z.length;++it<Tt;)if(Le(z[it],ee))return it;return-1}function Lu(z){return z!==z}function Pu(z,ee){var Z=z==null?0:z.length;return Z?al(z,ee)/Z:ae}function sl(z){return function(ee){return ee==null?t:ee[z]}}function ol(z){return function(ee){return z==null?t:z[ee]}}function Du(z,ee,Z,Le,it){return it(z,function(Tt,jt,Pt){Z=Le?(Le=!1,Tt):ee(Z,Tt,jt,Pt)}),Z}function Dm(z,ee){var Z=z.length;for(z.sort(ee);Z--;)z[Z]=z[Z].value;return z}function al(z,ee){for(var Z,Le=-1,it=z.length;++Le<it;){var Tt=ee(z[Le]);Tt!==t&&(Z=Z===t?Tt:Z+Tt)}return Z}function ll(z,ee){for(var Z=-1,Le=Array(z);++Z<z;)Le[Z]=ee(Z);return Le}function Im(z,ee){return zt(ee,function(Z){return[Z,z[Z]]})}function Iu(z){return z&&z.slice(0,Fu(z)+1).replace(Lr,"")}function Pn(z){return function(ee){return z(ee)}}function cl(z,ee){return zt(ee,function(Z){return z[Z]})}function Ds(z,ee){return z.has(ee)}function Uu(z,ee){for(var Z=-1,Le=z.length;++Z<Le&&Fr(ee,z[Z],0)>-1;);return Z}function Nu(z,ee){for(var Z=z.length;Z--&&Fr(ee,z[Z],0)>-1;);return Z}function Um(z,ee){for(var Z=z.length,Le=0;Z--;)z[Z]===ee&&++Le;return Le}var Nm=ol(vm),Om=ol(xm);function Fm(z){return"\\"+Sm[z]}function Bm(z,ee){return z==null?t:z[ee]}function Br(z){return pm.test(z)}function zm(z){return mm.test(z)}function Gm(z){for(var ee,Z=[];!(ee=z.next()).done;)Z.push(ee.value);return Z}function ul(z){var ee=-1,Z=Array(z.size);return z.forEach(function(Le,it){Z[++ee]=[it,Le]}),Z}function Ou(z,ee){return function(Z){return z(ee(Z))}}function zi(z,ee){for(var Z=-1,Le=z.length,it=0,Tt=[];++Z<Le;){var jt=z[Z];(jt===ee||jt===p)&&(z[Z]=p,Tt[it++]=Z)}return Tt}function Mo(z){var ee=-1,Z=Array(z.size);return z.forEach(function(Le){Z[++ee]=Le}),Z}function Hm(z){var ee=-1,Z=Array(z.size);return z.forEach(function(Le){Z[++ee]=[Le,Le]}),Z}function Vm(z,ee,Z){for(var Le=Z-1,it=z.length;++Le<it;)if(z[Le]===ee)return Le;return-1}function Wm(z,ee,Z){for(var Le=Z+1;Le--;)if(z[Le]===ee)return Le;return Le}function zr(z){return Br(z)?Xm(z):Cm(z)}function Jn(z){return Br(z)?Ym(z):Rm(z)}function Fu(z){for(var ee=z.length;ee--&&Ka.test(z.charAt(ee)););return ee}var km=ol(Mm);function Xm(z){for(var ee=Qa.lastIndex=0;Qa.test(z);)++ee;return ee}function Ym(z){return z.match(Qa)||[]}function qm(z){return z.match(dm)||[]}var Km=function z(ee){ee=ee==null?sn:Gr.defaults(sn.Object(),ee,Gr.pick(sn,gm));var Z=ee.Array,Le=ee.Date,it=ee.Error,Tt=ee.Function,jt=ee.Math,Pt=ee.Object,fl=ee.RegExp,Zm=ee.String,Vn=ee.TypeError,So=Z.prototype,$m=Tt.prototype,Hr=Pt.prototype,Eo=ee["__core-js_shared__"],yo=$m.toString,Rt=Hr.hasOwnProperty,jm=0,Bu=function(){var n=/[^.]+$/.exec(Eo&&Eo.keys&&Eo.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),bo=Hr.toString,Jm=yo.call(Pt),Qm=sn._,eg=fl("^"+yo.call(Rt).replace(It,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),To=Su?ee.Buffer:t,Gi=ee.Symbol,Ao=ee.Uint8Array,zu=To?To.allocUnsafe:t,wo=Ou(Pt.getPrototypeOf,Pt),Gu=Pt.create,Hu=Hr.propertyIsEnumerable,Co=So.splice,Vu=Gi?Gi.isConcatSpreadable:t,Is=Gi?Gi.iterator:t,lr=Gi?Gi.toStringTag:t,Ro=function(){try{var n=dr(Pt,"defineProperty");return n({},"",{}),n}catch{}}(),tg=ee.clearTimeout!==sn.clearTimeout&&ee.clearTimeout,ng=Le&&Le.now!==sn.Date.now&&Le.now,ig=ee.setTimeout!==sn.setTimeout&&ee.setTimeout,Lo=jt.ceil,Po=jt.floor,hl=Pt.getOwnPropertySymbols,rg=To?To.isBuffer:t,Wu=ee.isFinite,sg=So.join,og=Ou(Pt.keys,Pt),Jt=jt.max,un=jt.min,ag=Le.now,lg=ee.parseInt,ku=jt.random,cg=So.reverse,dl=dr(ee,"DataView"),Us=dr(ee,"Map"),pl=dr(ee,"Promise"),Vr=dr(ee,"Set"),Ns=dr(ee,"WeakMap"),Os=dr(Pt,"create"),Do=Ns&&new Ns,Wr={},ug=pr(dl),fg=pr(Us),hg=pr(pl),dg=pr(Vr),pg=pr(Ns),Io=Gi?Gi.prototype:t,Fs=Io?Io.valueOf:t,Xu=Io?Io.toString:t;function S(n){if(Vt(n)&&!ot(n)&&!(n instanceof vt)){if(n instanceof Wn)return n;if(Rt.call(n,"__wrapped__"))return qf(n)}return new Wn(n)}var kr=function(){function n(){}return function(s){if(!Gt(s))return{};if(Gu)return Gu(s);n.prototype=s;var l=new n;return n.prototype=t,l}}();function Uo(){}function Wn(n,s){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=t}S.templateSettings={escape:Ve,evaluate:Et,interpolate:dt,variable:"",imports:{_:S}},S.prototype=Uo.prototype,S.prototype.constructor=S,Wn.prototype=kr(Uo.prototype),Wn.prototype.constructor=Wn;function vt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=de,this.__views__=[]}function mg(){var n=new vt(this.__wrapped__);return n.__actions__=yn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=yn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=yn(this.__views__),n}function gg(){if(this.__filtered__){var n=new vt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function _g(){var n=this.__wrapped__.value(),s=this.__dir__,l=ot(n),h=s<0,x=l?n.length:0,T=R_(0,x,this.__views__),P=T.start,F=T.end,H=F-P,ne=h?F:P-1,ie=this.__iteratees__,ce=ie.length,Te=0,Oe=un(H,this.__takeCount__);if(!l||!h&&x==H&&Oe==H)return gf(n,this.__actions__);var Ke=[];e:for(;H--&&Te<Oe;){ne+=s;for(var ft=-1,Ze=n[ne];++ft<ce;){var gt=ie[ft],St=gt.iteratee,Un=gt.type,_n=St(Ze);if(Un==Q)Ze=_n;else if(!_n){if(Un==G)continue e;break e}}Ke[Te++]=Ze}return Ke}vt.prototype=kr(Uo.prototype),vt.prototype.constructor=vt;function cr(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function vg(){this.__data__=Os?Os(null):{},this.size=0}function xg(n){var s=this.has(n)&&delete this.__data__[n];return this.size-=s?1:0,s}function Mg(n){var s=this.__data__;if(Os){var l=s[n];return l===f?t:l}return Rt.call(s,n)?s[n]:t}function Sg(n){var s=this.__data__;return Os?s[n]!==t:Rt.call(s,n)}function Eg(n,s){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Os&&s===t?f:s,this}cr.prototype.clear=vg,cr.prototype.delete=xg,cr.prototype.get=Mg,cr.prototype.has=Sg,cr.prototype.set=Eg;function vi(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function yg(){this.__data__=[],this.size=0}function bg(n){var s=this.__data__,l=No(s,n);if(l<0)return!1;var h=s.length-1;return l==h?s.pop():Co.call(s,l,1),--this.size,!0}function Tg(n){var s=this.__data__,l=No(s,n);return l<0?t:s[l][1]}function Ag(n){return No(this.__data__,n)>-1}function wg(n,s){var l=this.__data__,h=No(l,n);return h<0?(++this.size,l.push([n,s])):l[h][1]=s,this}vi.prototype.clear=yg,vi.prototype.delete=bg,vi.prototype.get=Tg,vi.prototype.has=Ag,vi.prototype.set=wg;function xi(n){var s=-1,l=n==null?0:n.length;for(this.clear();++s<l;){var h=n[s];this.set(h[0],h[1])}}function Cg(){this.size=0,this.__data__={hash:new cr,map:new(Us||vi),string:new cr}}function Rg(n){var s=qo(this,n).delete(n);return this.size-=s?1:0,s}function Lg(n){return qo(this,n).get(n)}function Pg(n){return qo(this,n).has(n)}function Dg(n,s){var l=qo(this,n),h=l.size;return l.set(n,s),this.size+=l.size==h?0:1,this}xi.prototype.clear=Cg,xi.prototype.delete=Rg,xi.prototype.get=Lg,xi.prototype.has=Pg,xi.prototype.set=Dg;function ur(n){var s=-1,l=n==null?0:n.length;for(this.__data__=new xi;++s<l;)this.add(n[s])}function Ig(n){return this.__data__.set(n,f),this}function Ug(n){return this.__data__.has(n)}ur.prototype.add=ur.prototype.push=Ig,ur.prototype.has=Ug;function Qn(n){var s=this.__data__=new vi(n);this.size=s.size}function Ng(){this.__data__=new vi,this.size=0}function Og(n){var s=this.__data__,l=s.delete(n);return this.size=s.size,l}function Fg(n){return this.__data__.get(n)}function Bg(n){return this.__data__.has(n)}function zg(n,s){var l=this.__data__;if(l instanceof vi){var h=l.__data__;if(!Us||h.length<o-1)return h.push([n,s]),this.size=++l.size,this;l=this.__data__=new xi(h)}return l.set(n,s),this.size=l.size,this}Qn.prototype.clear=Ng,Qn.prototype.delete=Og,Qn.prototype.get=Fg,Qn.prototype.has=Bg,Qn.prototype.set=zg;function Yu(n,s){var l=ot(n),h=!l&&mr(n),x=!l&&!h&&Xi(n),T=!l&&!h&&!x&&Kr(n),P=l||h||x||T,F=P?ll(n.length,Zm):[],H=F.length;for(var ne in n)(s||Rt.call(n,ne))&&!(P&&(ne=="length"||x&&(ne=="offset"||ne=="parent")||T&&(ne=="buffer"||ne=="byteLength"||ne=="byteOffset")||yi(ne,H)))&&F.push(ne);return F}function qu(n){var s=n.length;return s?n[Tl(0,s-1)]:t}function Gg(n,s){return Ko(yn(n),fr(s,0,n.length))}function Hg(n){return Ko(yn(n))}function ml(n,s,l){(l!==t&&!ei(n[s],l)||l===t&&!(s in n))&&Mi(n,s,l)}function Bs(n,s,l){var h=n[s];(!(Rt.call(n,s)&&ei(h,l))||l===t&&!(s in n))&&Mi(n,s,l)}function No(n,s){for(var l=n.length;l--;)if(ei(n[l][0],s))return l;return-1}function Vg(n,s,l,h){return Hi(n,function(x,T,P){s(h,x,l(x),P)}),h}function Ku(n,s){return n&&fi(s,tn(s),n)}function Wg(n,s){return n&&fi(s,Tn(s),n)}function Mi(n,s,l){s=="__proto__"&&Ro?Ro(n,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[s]=l}function gl(n,s){for(var l=-1,h=s.length,x=Z(h),T=n==null;++l<h;)x[l]=T?t:$l(n,s[l]);return x}function fr(n,s,l){return n===n&&(l!==t&&(n=n<=l?n:l),s!==t&&(n=n>=s?n:s)),n}function kn(n,s,l,h,x,T){var P,F=s&_,H=s&v,ne=s&M;if(l&&(P=x?l(n,h,x,T):l(n)),P!==t)return P;if(!Gt(n))return n;var ie=ot(n);if(ie){if(P=P_(n),!F)return yn(n,P)}else{var ce=fn(n),Te=ce==W||ce==Ht;if(Xi(n))return xf(n,F);if(ce==xt||ce==fe||Te&&!x){if(P=H||Te?{}:Bf(n),!F)return H?M_(n,Wg(P,n)):x_(n,Ku(P,n))}else{if(!Dt[ce])return x?n:{};P=D_(n,ce,F)}}T||(T=new Qn);var Oe=T.get(n);if(Oe)return Oe;T.set(n,P),dh(n)?n.forEach(function(Ze){P.add(kn(Ze,s,l,Ze,n,T))}):fh(n)&&n.forEach(function(Ze,gt){P.set(gt,kn(Ze,s,l,gt,n,T))});var Ke=ne?H?Ol:Nl:H?Tn:tn,ft=ie?t:Ke(n);return Hn(ft||n,function(Ze,gt){ft&&(gt=Ze,Ze=n[gt]),Bs(P,gt,kn(Ze,s,l,gt,n,T))}),P}function kg(n){var s=tn(n);return function(l){return Zu(l,n,s)}}function Zu(n,s,l){var h=l.length;if(n==null)return!h;for(n=Pt(n);h--;){var x=l[h],T=s[x],P=n[x];if(P===t&&!(x in n)||!T(P))return!1}return!0}function $u(n,s,l){if(typeof n!="function")throw new Vn(u);return Xs(function(){n.apply(t,l)},s)}function zs(n,s,l,h){var x=-1,T=vo,P=!0,F=n.length,H=[],ne=s.length;if(!F)return H;l&&(s=zt(s,Pn(l))),h?(T=nl,P=!1):s.length>=o&&(T=Ds,P=!1,s=new ur(s));e:for(;++x<F;){var ie=n[x],ce=l==null?ie:l(ie);if(ie=h||ie!==0?ie:0,P&&ce===ce){for(var Te=ne;Te--;)if(s[Te]===ce)continue e;H.push(ie)}else T(s,ce,h)||H.push(ie)}return H}var Hi=bf(ui),ju=bf(vl,!0);function Xg(n,s){var l=!0;return Hi(n,function(h,x,T){return l=!!s(h,x,T),l}),l}function Oo(n,s,l){for(var h=-1,x=n.length;++h<x;){var T=n[h],P=s(T);if(P!=null&&(F===t?P===P&&!In(P):l(P,F)))var F=P,H=T}return H}function Yg(n,s,l,h){var x=n.length;for(l=ct(l),l<0&&(l=-l>x?0:x+l),h=h===t||h>x?x:ct(h),h<0&&(h+=x),h=l>h?0:mh(h);l<h;)n[l++]=s;return n}function Ju(n,s){var l=[];return Hi(n,function(h,x,T){s(h,x,T)&&l.push(h)}),l}function on(n,s,l,h,x){var T=-1,P=n.length;for(l||(l=U_),x||(x=[]);++T<P;){var F=n[T];s>0&&l(F)?s>1?on(F,s-1,l,h,x):Bi(x,F):h||(x[x.length]=F)}return x}var _l=Tf(),Qu=Tf(!0);function ui(n,s){return n&&_l(n,s,tn)}function vl(n,s){return n&&Qu(n,s,tn)}function Fo(n,s){return Fi(s,function(l){return bi(n[l])})}function hr(n,s){s=Wi(s,n);for(var l=0,h=s.length;n!=null&&l<h;)n=n[hi(s[l++])];return l&&l==h?n:t}function ef(n,s,l){var h=s(n);return ot(n)?h:Bi(h,l(n))}function mn(n){return n==null?n===t?ge:Fe:lr&&lr in Pt(n)?C_(n):H_(n)}function xl(n,s){return n>s}function qg(n,s){return n!=null&&Rt.call(n,s)}function Kg(n,s){return n!=null&&s in Pt(n)}function Zg(n,s,l){return n>=un(s,l)&&n<Jt(s,l)}function Ml(n,s,l){for(var h=l?nl:vo,x=n[0].length,T=n.length,P=T,F=Z(T),H=1/0,ne=[];P--;){var ie=n[P];P&&s&&(ie=zt(ie,Pn(s))),H=un(ie.length,H),F[P]=!l&&(s||x>=120&&ie.length>=120)?new ur(P&&ie):t}ie=n[0];var ce=-1,Te=F[0];e:for(;++ce<x&&ne.length<H;){var Oe=ie[ce],Ke=s?s(Oe):Oe;if(Oe=l||Oe!==0?Oe:0,!(Te?Ds(Te,Ke):h(ne,Ke,l))){for(P=T;--P;){var ft=F[P];if(!(ft?Ds(ft,Ke):h(n[P],Ke,l)))continue e}Te&&Te.push(Ke),ne.push(Oe)}}return ne}function $g(n,s,l,h){return ui(n,function(x,T,P){s(h,l(x),T,P)}),h}function Gs(n,s,l){s=Wi(s,n),n=Vf(n,s);var h=n==null?n:n[hi(Yn(s))];return h==null?t:Ln(h,n,l)}function tf(n){return Vt(n)&&mn(n)==fe}function jg(n){return Vt(n)&&mn(n)==we}function Jg(n){return Vt(n)&&mn(n)==Pe}function Hs(n,s,l,h,x){return n===s?!0:n==null||s==null||!Vt(n)&&!Vt(s)?n!==n&&s!==s:Qg(n,s,l,h,Hs,x)}function Qg(n,s,l,h,x,T){var P=ot(n),F=ot(s),H=P?Ce:fn(n),ne=F?Ce:fn(s);H=H==fe?xt:H,ne=ne==fe?xt:ne;var ie=H==xt,ce=ne==xt,Te=H==ne;if(Te&&Xi(n)){if(!Xi(s))return!1;P=!0,ie=!1}if(Te&&!ie)return T||(T=new Qn),P||Kr(n)?Nf(n,s,l,h,x,T):A_(n,s,H,l,h,x,T);if(!(l&b)){var Oe=ie&&Rt.call(n,"__wrapped__"),Ke=ce&&Rt.call(s,"__wrapped__");if(Oe||Ke){var ft=Oe?n.value():n,Ze=Ke?s.value():s;return T||(T=new Qn),x(ft,Ze,l,h,T)}}return Te?(T||(T=new Qn),w_(n,s,l,h,x,T)):!1}function e_(n){return Vt(n)&&fn(n)==De}function Sl(n,s,l,h){var x=l.length,T=x,P=!h;if(n==null)return!T;for(n=Pt(n);x--;){var F=l[x];if(P&&F[2]?F[1]!==n[F[0]]:!(F[0]in n))return!1}for(;++x<T;){F=l[x];var H=F[0],ne=n[H],ie=F[1];if(P&&F[2]){if(ne===t&&!(H in n))return!1}else{var ce=new Qn;if(h)var Te=h(ne,ie,H,n,s,ce);if(!(Te===t?Hs(ie,ne,b|A,h,ce):Te))return!1}}return!0}function nf(n){if(!Gt(n)||O_(n))return!1;var s=bi(n)?eg:K;return s.test(pr(n))}function t_(n){return Vt(n)&&mn(n)==E}function n_(n){return Vt(n)&&fn(n)==X}function i_(n){return Vt(n)&&ea(n.length)&&!!Ot[mn(n)]}function rf(n){return typeof n=="function"?n:n==null?An:typeof n=="object"?ot(n)?af(n[0],n[1]):of(n):Ah(n)}function El(n){if(!ks(n))return og(n);var s=[];for(var l in Pt(n))Rt.call(n,l)&&l!="constructor"&&s.push(l);return s}function r_(n){if(!Gt(n))return G_(n);var s=ks(n),l=[];for(var h in n)h=="constructor"&&(s||!Rt.call(n,h))||l.push(h);return l}function yl(n,s){return n<s}function sf(n,s){var l=-1,h=bn(n)?Z(n.length):[];return Hi(n,function(x,T,P){h[++l]=s(x,T,P)}),h}function of(n){var s=Bl(n);return s.length==1&&s[0][2]?Gf(s[0][0],s[0][1]):function(l){return l===n||Sl(l,n,s)}}function af(n,s){return Gl(n)&&zf(s)?Gf(hi(n),s):function(l){var h=$l(l,n);return h===t&&h===s?jl(l,n):Hs(s,h,b|A)}}function Bo(n,s,l,h,x){n!==s&&_l(s,function(T,P){if(x||(x=new Qn),Gt(T))s_(n,s,P,l,Bo,h,x);else{var F=h?h(Vl(n,P),T,P+"",n,s,x):t;F===t&&(F=T),ml(n,P,F)}},Tn)}function s_(n,s,l,h,x,T,P){var F=Vl(n,l),H=Vl(s,l),ne=P.get(H);if(ne){ml(n,l,ne);return}var ie=T?T(F,H,l+"",n,s,P):t,ce=ie===t;if(ce){var Te=ot(H),Oe=!Te&&Xi(H),Ke=!Te&&!Oe&&Kr(H);ie=H,Te||Oe||Ke?ot(F)?ie=F:Xt(F)?ie=yn(F):Oe?(ce=!1,ie=xf(H,!0)):Ke?(ce=!1,ie=Mf(H,!0)):ie=[]:Ys(H)||mr(H)?(ie=F,mr(F)?ie=gh(F):(!Gt(F)||bi(F))&&(ie=Bf(H))):ce=!1}ce&&(P.set(H,ie),x(ie,H,h,T,P),P.delete(H)),ml(n,l,ie)}function lf(n,s){var l=n.length;if(l)return s+=s<0?l:0,yi(s,l)?n[s]:t}function cf(n,s,l){s.length?s=zt(s,function(T){return ot(T)?function(P){return hr(P,T.length===1?T[0]:T)}:T}):s=[An];var h=-1;s=zt(s,Pn(Xe()));var x=sf(n,function(T,P,F){var H=zt(s,function(ne){return ne(T)});return{criteria:H,index:++h,value:T}});return Dm(x,function(T,P){return v_(T,P,l)})}function o_(n,s){return uf(n,s,function(l,h){return jl(n,h)})}function uf(n,s,l){for(var h=-1,x=s.length,T={};++h<x;){var P=s[h],F=hr(n,P);l(F,P)&&Vs(T,Wi(P,n),F)}return T}function a_(n){return function(s){return hr(s,n)}}function bl(n,s,l,h){var x=h?Pm:Fr,T=-1,P=s.length,F=n;for(n===s&&(s=yn(s)),l&&(F=zt(n,Pn(l)));++T<P;)for(var H=0,ne=s[T],ie=l?l(ne):ne;(H=x(F,ie,H,h))>-1;)F!==n&&Co.call(F,H,1),Co.call(n,H,1);return n}function ff(n,s){for(var l=n?s.length:0,h=l-1;l--;){var x=s[l];if(l==h||x!==T){var T=x;yi(x)?Co.call(n,x,1):Cl(n,x)}}return n}function Tl(n,s){return n+Po(ku()*(s-n+1))}function l_(n,s,l,h){for(var x=-1,T=Jt(Lo((s-n)/(l||1)),0),P=Z(T);T--;)P[h?T:++x]=n,n+=l;return P}function Al(n,s){var l="";if(!n||s<1||s>te)return l;do s%2&&(l+=n),s=Po(s/2),s&&(n+=n);while(s);return l}function pt(n,s){return Wl(Hf(n,s,An),n+"")}function c_(n){return qu(Zr(n))}function u_(n,s){var l=Zr(n);return Ko(l,fr(s,0,l.length))}function Vs(n,s,l,h){if(!Gt(n))return n;s=Wi(s,n);for(var x=-1,T=s.length,P=T-1,F=n;F!=null&&++x<T;){var H=hi(s[x]),ne=l;if(H==="__proto__"||H==="constructor"||H==="prototype")return n;if(x!=P){var ie=F[H];ne=h?h(ie,H,F):t,ne===t&&(ne=Gt(ie)?ie:yi(s[x+1])?[]:{})}Bs(F,H,ne),F=F[H]}return n}var hf=Do?function(n,s){return Do.set(n,s),n}:An,f_=Ro?function(n,s){return Ro(n,"toString",{configurable:!0,enumerable:!1,value:Ql(s),writable:!0})}:An;function h_(n){return Ko(Zr(n))}function Xn(n,s,l){var h=-1,x=n.length;s<0&&(s=-s>x?0:x+s),l=l>x?x:l,l<0&&(l+=x),x=s>l?0:l-s>>>0,s>>>=0;for(var T=Z(x);++h<x;)T[h]=n[h+s];return T}function d_(n,s){var l;return Hi(n,function(h,x,T){return l=s(h,x,T),!l}),!!l}function zo(n,s,l){var h=0,x=n==null?h:n.length;if(typeof s=="number"&&s===s&&x<=$e){for(;h<x;){var T=h+x>>>1,P=n[T];P!==null&&!In(P)&&(l?P<=s:P<s)?h=T+1:x=T}return x}return wl(n,s,An,l)}function wl(n,s,l,h){var x=0,T=n==null?0:n.length;if(T===0)return 0;s=l(s);for(var P=s!==s,F=s===null,H=In(s),ne=s===t;x<T;){var ie=Po((x+T)/2),ce=l(n[ie]),Te=ce!==t,Oe=ce===null,Ke=ce===ce,ft=In(ce);if(P)var Ze=h||Ke;else ne?Ze=Ke&&(h||Te):F?Ze=Ke&&Te&&(h||!Oe):H?Ze=Ke&&Te&&!Oe&&(h||!ft):Oe||ft?Ze=!1:Ze=h?ce<=s:ce<s;Ze?x=ie+1:T=ie}return un(T,Ee)}function df(n,s){for(var l=-1,h=n.length,x=0,T=[];++l<h;){var P=n[l],F=s?s(P):P;if(!l||!ei(F,H)){var H=F;T[x++]=P===0?0:P}}return T}function pf(n){return typeof n=="number"?n:In(n)?ae:+n}function Dn(n){if(typeof n=="string")return n;if(ot(n))return zt(n,Dn)+"";if(In(n))return Xu?Xu.call(n):"";var s=n+"";return s=="0"&&1/n==-oe?"-0":s}function Vi(n,s,l){var h=-1,x=vo,T=n.length,P=!0,F=[],H=F;if(l)P=!1,x=nl;else if(T>=o){var ne=s?null:b_(n);if(ne)return Mo(ne);P=!1,x=Ds,H=new ur}else H=s?[]:F;e:for(;++h<T;){var ie=n[h],ce=s?s(ie):ie;if(ie=l||ie!==0?ie:0,P&&ce===ce){for(var Te=H.length;Te--;)if(H[Te]===ce)continue e;s&&H.push(ce),F.push(ie)}else x(H,ce,l)||(H!==F&&H.push(ce),F.push(ie))}return F}function Cl(n,s){return s=Wi(s,n),n=Vf(n,s),n==null||delete n[hi(Yn(s))]}function mf(n,s,l,h){return Vs(n,s,l(hr(n,s)),h)}function Go(n,s,l,h){for(var x=n.length,T=h?x:-1;(h?T--:++T<x)&&s(n[T],T,n););return l?Xn(n,h?0:T,h?T+1:x):Xn(n,h?T+1:0,h?x:T)}function gf(n,s){var l=n;return l instanceof vt&&(l=l.value()),il(s,function(h,x){return x.func.apply(x.thisArg,Bi([h],x.args))},l)}function Rl(n,s,l){var h=n.length;if(h<2)return h?Vi(n[0]):[];for(var x=-1,T=Z(h);++x<h;)for(var P=n[x],F=-1;++F<h;)F!=x&&(T[x]=zs(T[x]||P,n[F],s,l));return Vi(on(T,1),s,l)}function _f(n,s,l){for(var h=-1,x=n.length,T=s.length,P={};++h<x;){var F=h<T?s[h]:t;l(P,n[h],F)}return P}function Ll(n){return Xt(n)?n:[]}function Pl(n){return typeof n=="function"?n:An}function Wi(n,s){return ot(n)?n:Gl(n,s)?[n]:Yf(At(n))}var p_=pt;function ki(n,s,l){var h=n.length;return l=l===t?h:l,!s&&l>=h?n:Xn(n,s,l)}var vf=tg||function(n){return sn.clearTimeout(n)};function xf(n,s){if(s)return n.slice();var l=n.length,h=zu?zu(l):new n.constructor(l);return n.copy(h),h}function Dl(n){var s=new n.constructor(n.byteLength);return new Ao(s).set(new Ao(n)),s}function m_(n,s){var l=s?Dl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function g_(n){var s=new n.constructor(n.source,go.exec(n));return s.lastIndex=n.lastIndex,s}function __(n){return Fs?Pt(Fs.call(n)):{}}function Mf(n,s){var l=s?Dl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function Sf(n,s){if(n!==s){var l=n!==t,h=n===null,x=n===n,T=In(n),P=s!==t,F=s===null,H=s===s,ne=In(s);if(!F&&!ne&&!T&&n>s||T&&P&&H&&!F&&!ne||h&&P&&H||!l&&H||!x)return 1;if(!h&&!T&&!ne&&n<s||ne&&l&&x&&!h&&!T||F&&l&&x||!P&&x||!H)return-1}return 0}function v_(n,s,l){for(var h=-1,x=n.criteria,T=s.criteria,P=x.length,F=l.length;++h<P;){var H=Sf(x[h],T[h]);if(H){if(h>=F)return H;var ne=l[h];return H*(ne=="desc"?-1:1)}}return n.index-s.index}function Ef(n,s,l,h){for(var x=-1,T=n.length,P=l.length,F=-1,H=s.length,ne=Jt(T-P,0),ie=Z(H+ne),ce=!h;++F<H;)ie[F]=s[F];for(;++x<P;)(ce||x<T)&&(ie[l[x]]=n[x]);for(;ne--;)ie[F++]=n[x++];return ie}function yf(n,s,l,h){for(var x=-1,T=n.length,P=-1,F=l.length,H=-1,ne=s.length,ie=Jt(T-F,0),ce=Z(ie+ne),Te=!h;++x<ie;)ce[x]=n[x];for(var Oe=x;++H<ne;)ce[Oe+H]=s[H];for(;++P<F;)(Te||x<T)&&(ce[Oe+l[P]]=n[x++]);return ce}function yn(n,s){var l=-1,h=n.length;for(s||(s=Z(h));++l<h;)s[l]=n[l];return s}function fi(n,s,l,h){var x=!l;l||(l={});for(var T=-1,P=s.length;++T<P;){var F=s[T],H=h?h(l[F],n[F],F,l,n):t;H===t&&(H=n[F]),x?Mi(l,F,H):Bs(l,F,H)}return l}function x_(n,s){return fi(n,zl(n),s)}function M_(n,s){return fi(n,Of(n),s)}function Ho(n,s){return function(l,h){var x=ot(l)?Tm:Vg,T=s?s():{};return x(l,n,Xe(h,2),T)}}function Xr(n){return pt(function(s,l){var h=-1,x=l.length,T=x>1?l[x-1]:t,P=x>2?l[2]:t;for(T=n.length>3&&typeof T=="function"?(x--,T):t,P&&gn(l[0],l[1],P)&&(T=x<3?t:T,x=1),s=Pt(s);++h<x;){var F=l[h];F&&n(s,F,h,T)}return s})}function bf(n,s){return function(l,h){if(l==null)return l;if(!bn(l))return n(l,h);for(var x=l.length,T=s?x:-1,P=Pt(l);(s?T--:++T<x)&&h(P[T],T,P)!==!1;);return l}}function Tf(n){return function(s,l,h){for(var x=-1,T=Pt(s),P=h(s),F=P.length;F--;){var H=P[n?F:++x];if(l(T[H],H,T)===!1)break}return s}}function S_(n,s,l){var h=s&m,x=Ws(n);function T(){var P=this&&this!==sn&&this instanceof T?x:n;return P.apply(h?l:this,arguments)}return T}function Af(n){return function(s){s=At(s);var l=Br(s)?Jn(s):t,h=l?l[0]:s.charAt(0),x=l?ki(l,1).join(""):s.slice(1);return h[n]()+x}}function Yr(n){return function(s){return il(bh(yh(s).replace(fm,"")),n,"")}}function Ws(n){return function(){var s=arguments;switch(s.length){case 0:return new n;case 1:return new n(s[0]);case 2:return new n(s[0],s[1]);case 3:return new n(s[0],s[1],s[2]);case 4:return new n(s[0],s[1],s[2],s[3]);case 5:return new n(s[0],s[1],s[2],s[3],s[4]);case 6:return new n(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new n(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=kr(n.prototype),h=n.apply(l,s);return Gt(h)?h:l}}function E_(n,s,l){var h=Ws(n);function x(){for(var T=arguments.length,P=Z(T),F=T,H=qr(x);F--;)P[F]=arguments[F];var ne=T<3&&P[0]!==H&&P[T-1]!==H?[]:zi(P,H);if(T-=ne.length,T<l)return Pf(n,s,Vo,x.placeholder,t,P,ne,t,t,l-T);var ie=this&&this!==sn&&this instanceof x?h:n;return Ln(ie,this,P)}return x}function wf(n){return function(s,l,h){var x=Pt(s);if(!bn(s)){var T=Xe(l,3);s=tn(s),l=function(F){return T(x[F],F,x)}}var P=n(s,l,h);return P>-1?x[T?s[P]:P]:t}}function Cf(n){return Ei(function(s){var l=s.length,h=l,x=Wn.prototype.thru;for(n&&s.reverse();h--;){var T=s[h];if(typeof T!="function")throw new Vn(u);if(x&&!P&&Yo(T)=="wrapper")var P=new Wn([],!0)}for(h=P?h:l;++h<l;){T=s[h];var F=Yo(T),H=F=="wrapper"?Fl(T):t;H&&Hl(H[0])&&H[1]==(O|C|V|se)&&!H[4].length&&H[9]==1?P=P[Yo(H[0])].apply(P,H[3]):P=T.length==1&&Hl(T)?P[F]():P.thru(T)}return function(){var ne=arguments,ie=ne[0];if(P&&ne.length==1&&ot(ie))return P.plant(ie).value();for(var ce=0,Te=l?s[ce].apply(this,ne):ie;++ce<l;)Te=s[ce].call(this,Te);return Te}})}function Vo(n,s,l,h,x,T,P,F,H,ne){var ie=s&O,ce=s&m,Te=s&g,Oe=s&(C|I),Ke=s&Me,ft=Te?t:Ws(n);function Ze(){for(var gt=arguments.length,St=Z(gt),Un=gt;Un--;)St[Un]=arguments[Un];if(Oe)var _n=qr(Ze),Nn=Um(St,_n);if(h&&(St=Ef(St,h,x,Oe)),T&&(St=yf(St,T,P,Oe)),gt-=Nn,Oe&&gt<ne){var Yt=zi(St,_n);return Pf(n,s,Vo,Ze.placeholder,l,St,Yt,F,H,ne-gt)}var ti=ce?l:this,Ai=Te?ti[n]:n;return gt=St.length,F?St=V_(St,F):Ke&&gt>1&&St.reverse(),ie&&H<gt&&(St.length=H),this&&this!==sn&&this instanceof Ze&&(Ai=ft||Ws(Ai)),Ai.apply(ti,St)}return Ze}function Rf(n,s){return function(l,h){return $g(l,n,s(h),{})}}function Wo(n,s){return function(l,h){var x;if(l===t&&h===t)return s;if(l!==t&&(x=l),h!==t){if(x===t)return h;typeof l=="string"||typeof h=="string"?(l=Dn(l),h=Dn(h)):(l=pf(l),h=pf(h)),x=n(l,h)}return x}}function Il(n){return Ei(function(s){return s=zt(s,Pn(Xe())),pt(function(l){var h=this;return n(s,function(x){return Ln(x,h,l)})})})}function ko(n,s){s=s===t?" ":Dn(s);var l=s.length;if(l<2)return l?Al(s,n):s;var h=Al(s,Lo(n/zr(s)));return Br(s)?ki(Jn(h),0,n).join(""):h.slice(0,n)}function y_(n,s,l,h){var x=s&m,T=Ws(n);function P(){for(var F=-1,H=arguments.length,ne=-1,ie=h.length,ce=Z(ie+H),Te=this&&this!==sn&&this instanceof P?T:n;++ne<ie;)ce[ne]=h[ne];for(;H--;)ce[ne++]=arguments[++F];return Ln(Te,x?l:this,ce)}return P}function Lf(n){return function(s,l,h){return h&&typeof h!="number"&&gn(s,l,h)&&(l=h=t),s=Ti(s),l===t?(l=s,s=0):l=Ti(l),h=h===t?s<l?1:-1:Ti(h),l_(s,l,h,n)}}function Xo(n){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=qn(s),l=qn(l)),n(s,l)}}function Pf(n,s,l,h,x,T,P,F,H,ne){var ie=s&C,ce=ie?P:t,Te=ie?t:P,Oe=ie?T:t,Ke=ie?t:T;s|=ie?V:B,s&=~(ie?B:V),s&D||(s&=~(m|g));var ft=[n,s,x,Oe,ce,Ke,Te,F,H,ne],Ze=l.apply(t,ft);return Hl(n)&&Wf(Ze,ft),Ze.placeholder=h,kf(Ze,n,s)}function Ul(n){var s=jt[n];return function(l,h){if(l=qn(l),h=h==null?0:un(ct(h),292),h&&Wu(l)){var x=(At(l)+"e").split("e"),T=s(x[0]+"e"+(+x[1]+h));return x=(At(T)+"e").split("e"),+(x[0]+"e"+(+x[1]-h))}return s(l)}}var b_=Vr&&1/Mo(new Vr([,-0]))[1]==oe?function(n){return new Vr(n)}:nc;function Df(n){return function(s){var l=fn(s);return l==De?ul(s):l==X?Hm(s):Im(s,n(s))}}function Si(n,s,l,h,x,T,P,F){var H=s&g;if(!H&&typeof n!="function")throw new Vn(u);var ne=h?h.length:0;if(ne||(s&=~(V|B),h=x=t),P=P===t?P:Jt(ct(P),0),F=F===t?F:ct(F),ne-=x?x.length:0,s&B){var ie=h,ce=x;h=x=t}var Te=H?t:Fl(n),Oe=[n,s,l,h,x,ie,ce,T,P,F];if(Te&&z_(Oe,Te),n=Oe[0],s=Oe[1],l=Oe[2],h=Oe[3],x=Oe[4],F=Oe[9]=Oe[9]===t?H?0:n.length:Jt(Oe[9]-ne,0),!F&&s&(C|I)&&(s&=~(C|I)),!s||s==m)var Ke=S_(n,s,l);else s==C||s==I?Ke=E_(n,s,F):(s==V||s==(m|V))&&!x.length?Ke=y_(n,s,l,h):Ke=Vo.apply(t,Oe);var ft=Te?hf:Wf;return kf(ft(Ke,Oe),n,s)}function If(n,s,l,h){return n===t||ei(n,Hr[l])&&!Rt.call(h,l)?s:n}function Uf(n,s,l,h,x,T){return Gt(n)&&Gt(s)&&(T.set(s,n),Bo(n,s,t,Uf,T),T.delete(s)),n}function T_(n){return Ys(n)?t:n}function Nf(n,s,l,h,x,T){var P=l&b,F=n.length,H=s.length;if(F!=H&&!(P&&H>F))return!1;var ne=T.get(n),ie=T.get(s);if(ne&&ie)return ne==s&&ie==n;var ce=-1,Te=!0,Oe=l&A?new ur:t;for(T.set(n,s),T.set(s,n);++ce<F;){var Ke=n[ce],ft=s[ce];if(h)var Ze=P?h(ft,Ke,ce,s,n,T):h(Ke,ft,ce,n,s,T);if(Ze!==t){if(Ze)continue;Te=!1;break}if(Oe){if(!rl(s,function(gt,St){if(!Ds(Oe,St)&&(Ke===gt||x(Ke,gt,l,h,T)))return Oe.push(St)})){Te=!1;break}}else if(!(Ke===ft||x(Ke,ft,l,h,T))){Te=!1;break}}return T.delete(n),T.delete(s),Te}function A_(n,s,l,h,x,T,P){switch(l){case Be:if(n.byteLength!=s.byteLength||n.byteOffset!=s.byteOffset)return!1;n=n.buffer,s=s.buffer;case we:return!(n.byteLength!=s.byteLength||!T(new Ao(n),new Ao(s)));case Ge:case Pe:case ke:return ei(+n,+s);case je:return n.name==s.name&&n.message==s.message;case E:case me:return n==s+"";case De:var F=ul;case X:var H=h&b;if(F||(F=Mo),n.size!=s.size&&!H)return!1;var ne=P.get(n);if(ne)return ne==s;h|=A,P.set(n,s);var ie=Nf(F(n),F(s),h,x,T,P);return P.delete(n),ie;case ue:if(Fs)return Fs.call(n)==Fs.call(s)}return!1}function w_(n,s,l,h,x,T){var P=l&b,F=Nl(n),H=F.length,ne=Nl(s),ie=ne.length;if(H!=ie&&!P)return!1;for(var ce=H;ce--;){var Te=F[ce];if(!(P?Te in s:Rt.call(s,Te)))return!1}var Oe=T.get(n),Ke=T.get(s);if(Oe&&Ke)return Oe==s&&Ke==n;var ft=!0;T.set(n,s),T.set(s,n);for(var Ze=P;++ce<H;){Te=F[ce];var gt=n[Te],St=s[Te];if(h)var Un=P?h(St,gt,Te,s,n,T):h(gt,St,Te,n,s,T);if(!(Un===t?gt===St||x(gt,St,l,h,T):Un)){ft=!1;break}Ze||(Ze=Te=="constructor")}if(ft&&!Ze){var _n=n.constructor,Nn=s.constructor;_n!=Nn&&"constructor"in n&&"constructor"in s&&!(typeof _n=="function"&&_n instanceof _n&&typeof Nn=="function"&&Nn instanceof Nn)&&(ft=!1)}return T.delete(n),T.delete(s),ft}function Ei(n){return Wl(Hf(n,t,$f),n+"")}function Nl(n){return ef(n,tn,zl)}function Ol(n){return ef(n,Tn,Of)}var Fl=Do?function(n){return Do.get(n)}:nc;function Yo(n){for(var s=n.name+"",l=Wr[s],h=Rt.call(Wr,s)?l.length:0;h--;){var x=l[h],T=x.func;if(T==null||T==n)return x.name}return s}function qr(n){var s=Rt.call(S,"placeholder")?S:n;return s.placeholder}function Xe(){var n=S.iteratee||ec;return n=n===ec?rf:n,arguments.length?n(arguments[0],arguments[1]):n}function qo(n,s){var l=n.__data__;return N_(s)?l[typeof s=="string"?"string":"hash"]:l.map}function Bl(n){for(var s=tn(n),l=s.length;l--;){var h=s[l],x=n[h];s[l]=[h,x,zf(x)]}return s}function dr(n,s){var l=Bm(n,s);return nf(l)?l:t}function C_(n){var s=Rt.call(n,lr),l=n[lr];try{n[lr]=t;var h=!0}catch{}var x=bo.call(n);return h&&(s?n[lr]=l:delete n[lr]),x}var zl=hl?function(n){return n==null?[]:(n=Pt(n),Fi(hl(n),function(s){return Hu.call(n,s)}))}:ic,Of=hl?function(n){for(var s=[];n;)Bi(s,zl(n)),n=wo(n);return s}:ic,fn=mn;(dl&&fn(new dl(new ArrayBuffer(1)))!=Be||Us&&fn(new Us)!=De||pl&&fn(pl.resolve())!=et||Vr&&fn(new Vr)!=X||Ns&&fn(new Ns)!=Ie)&&(fn=function(n){var s=mn(n),l=s==xt?n.constructor:t,h=l?pr(l):"";if(h)switch(h){case ug:return Be;case fg:return De;case hg:return et;case dg:return X;case pg:return Ie}return s});function R_(n,s,l){for(var h=-1,x=l.length;++h<x;){var T=l[h],P=T.size;switch(T.type){case"drop":n+=P;break;case"dropRight":s-=P;break;case"take":s=un(s,n+P);break;case"takeRight":n=Jt(n,s-P);break}}return{start:n,end:s}}function L_(n){var s=n.match(ho);return s?s[1].split(Dr):[]}function Ff(n,s,l){s=Wi(s,n);for(var h=-1,x=s.length,T=!1;++h<x;){var P=hi(s[h]);if(!(T=n!=null&&l(n,P)))break;n=n[P]}return T||++h!=x?T:(x=n==null?0:n.length,!!x&&ea(x)&&yi(P,x)&&(ot(n)||mr(n)))}function P_(n){var s=n.length,l=new n.constructor(s);return s&&typeof n[0]=="string"&&Rt.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function Bf(n){return typeof n.constructor=="function"&&!ks(n)?kr(wo(n)):{}}function D_(n,s,l){var h=n.constructor;switch(s){case we:return Dl(n);case Ge:case Pe:return new h(+n);case Be:return m_(n,l);case Qe:case he:case Mt:case rt:case Je:case ze:case Ae:case tt:case U:return Mf(n,l);case De:return new h;case ke:case me:return new h(n);case E:return g_(n);case X:return new h;case ue:return __(n)}}function I_(n,s){var l=s.length;if(!l)return n;var h=l-1;return s[h]=(l>1?"& ":"")+s[h],s=s.join(l>2?", ":" "),n.replace(Pr,`{
/* [wrapped with `+s+`] */
`)}function U_(n){return ot(n)||mr(n)||!!(Vu&&n&&n[Vu])}function yi(n,s){var l=typeof n;return s=s??te,!!s&&(l=="number"||l!="symbol"&&q.test(n))&&n>-1&&n%1==0&&n<s}function gn(n,s,l){if(!Gt(l))return!1;var h=typeof s;return(h=="number"?bn(l)&&yi(s,l.length):h=="string"&&s in l)?ei(l[s],n):!1}function Gl(n,s){if(ot(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||In(n)?!0:Zt.test(n)||!Ct.test(n)||s!=null&&n in Pt(s)}function N_(n){var s=typeof n;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?n!=="__proto__":n===null}function Hl(n){var s=Yo(n),l=S[s];if(typeof l!="function"||!(s in vt.prototype))return!1;if(n===l)return!0;var h=Fl(l);return!!h&&n===h[0]}function O_(n){return!!Bu&&Bu in n}var F_=Eo?bi:rc;function ks(n){var s=n&&n.constructor,l=typeof s=="function"&&s.prototype||Hr;return n===l}function zf(n){return n===n&&!Gt(n)}function Gf(n,s){return function(l){return l==null?!1:l[n]===s&&(s!==t||n in Pt(l))}}function B_(n){var s=Jo(n,function(h){return l.size===d&&l.clear(),h}),l=s.cache;return s}function z_(n,s){var l=n[1],h=s[1],x=l|h,T=x<(m|g|O),P=h==O&&l==C||h==O&&l==se&&n[7].length<=s[8]||h==(O|se)&&s[7].length<=s[8]&&l==C;if(!(T||P))return n;h&m&&(n[2]=s[2],x|=l&m?0:D);var F=s[3];if(F){var H=n[3];n[3]=H?Ef(H,F,s[4]):F,n[4]=H?zi(n[3],p):s[4]}return F=s[5],F&&(H=n[5],n[5]=H?yf(H,F,s[6]):F,n[6]=H?zi(n[5],p):s[6]),F=s[7],F&&(n[7]=F),h&O&&(n[8]=n[8]==null?s[8]:un(n[8],s[8])),n[9]==null&&(n[9]=s[9]),n[0]=s[0],n[1]=x,n}function G_(n){var s=[];if(n!=null)for(var l in Pt(n))s.push(l);return s}function H_(n){return bo.call(n)}function Hf(n,s,l){return s=Jt(s===t?n.length-1:s,0),function(){for(var h=arguments,x=-1,T=Jt(h.length-s,0),P=Z(T);++x<T;)P[x]=h[s+x];x=-1;for(var F=Z(s+1);++x<s;)F[x]=h[x];return F[s]=l(P),Ln(n,this,F)}}function Vf(n,s){return s.length<2?n:hr(n,Xn(s,0,-1))}function V_(n,s){for(var l=n.length,h=un(s.length,l),x=yn(n);h--;){var T=s[h];n[h]=yi(T,l)?x[T]:t}return n}function Vl(n,s){if(!(s==="constructor"&&typeof n[s]=="function")&&s!="__proto__")return n[s]}var Wf=Xf(hf),Xs=ig||function(n,s){return sn.setTimeout(n,s)},Wl=Xf(f_);function kf(n,s,l){var h=s+"";return Wl(n,I_(h,W_(L_(h),l)))}function Xf(n){var s=0,l=0;return function(){var h=ag(),x=ve-(h-l);if(l=h,x>0){if(++s>=re)return arguments[0]}else s=0;return n.apply(t,arguments)}}function Ko(n,s){var l=-1,h=n.length,x=h-1;for(s=s===t?h:s;++l<s;){var T=Tl(l,x),P=n[T];n[T]=n[l],n[l]=P}return n.length=s,n}var Yf=B_(function(n){var s=[];return n.charCodeAt(0)===46&&s.push(""),n.replace(yt,function(l,h,x,T){s.push(x?T.replace(Za,"$1"):h||l)}),s});function hi(n){if(typeof n=="string"||In(n))return n;var s=n+"";return s=="0"&&1/n==-oe?"-0":s}function pr(n){if(n!=null){try{return yo.call(n)}catch{}try{return n+""}catch{}}return""}function W_(n,s){return Hn(J,function(l){var h="_."+l[0];s&l[1]&&!vo(n,h)&&n.push(h)}),n.sort()}function qf(n){if(n instanceof vt)return n.clone();var s=new Wn(n.__wrapped__,n.__chain__);return s.__actions__=yn(n.__actions__),s.__index__=n.__index__,s.__values__=n.__values__,s}function k_(n,s,l){(l?gn(n,s,l):s===t)?s=1:s=Jt(ct(s),0);var h=n==null?0:n.length;if(!h||s<1)return[];for(var x=0,T=0,P=Z(Lo(h/s));x<h;)P[T++]=Xn(n,x,x+=s);return P}function X_(n){for(var s=-1,l=n==null?0:n.length,h=0,x=[];++s<l;){var T=n[s];T&&(x[h++]=T)}return x}function Y_(){var n=arguments.length;if(!n)return[];for(var s=Z(n-1),l=arguments[0],h=n;h--;)s[h-1]=arguments[h];return Bi(ot(l)?yn(l):[l],on(s,1))}var q_=pt(function(n,s){return Xt(n)?zs(n,on(s,1,Xt,!0)):[]}),K_=pt(function(n,s){var l=Yn(s);return Xt(l)&&(l=t),Xt(n)?zs(n,on(s,1,Xt,!0),Xe(l,2)):[]}),Z_=pt(function(n,s){var l=Yn(s);return Xt(l)&&(l=t),Xt(n)?zs(n,on(s,1,Xt,!0),t,l):[]});function $_(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ct(s),Xn(n,s<0?0:s,h)):[]}function j_(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ct(s),s=h-s,Xn(n,0,s<0?0:s)):[]}function J_(n,s){return n&&n.length?Go(n,Xe(s,3),!0,!0):[]}function Q_(n,s){return n&&n.length?Go(n,Xe(s,3),!0):[]}function ev(n,s,l,h){var x=n==null?0:n.length;return x?(l&&typeof l!="number"&&gn(n,s,l)&&(l=0,h=x),Yg(n,s,l,h)):[]}function Kf(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var x=l==null?0:ct(l);return x<0&&(x=Jt(h+x,0)),xo(n,Xe(s,3),x)}function Zf(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var x=h-1;return l!==t&&(x=ct(l),x=l<0?Jt(h+x,0):un(x,h-1)),xo(n,Xe(s,3),x,!0)}function $f(n){var s=n==null?0:n.length;return s?on(n,1):[]}function tv(n){var s=n==null?0:n.length;return s?on(n,oe):[]}function nv(n,s){var l=n==null?0:n.length;return l?(s=s===t?1:ct(s),on(n,s)):[]}function iv(n){for(var s=-1,l=n==null?0:n.length,h={};++s<l;){var x=n[s];h[x[0]]=x[1]}return h}function jf(n){return n&&n.length?n[0]:t}function rv(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var x=l==null?0:ct(l);return x<0&&(x=Jt(h+x,0)),Fr(n,s,x)}function sv(n){var s=n==null?0:n.length;return s?Xn(n,0,-1):[]}var ov=pt(function(n){var s=zt(n,Ll);return s.length&&s[0]===n[0]?Ml(s):[]}),av=pt(function(n){var s=Yn(n),l=zt(n,Ll);return s===Yn(l)?s=t:l.pop(),l.length&&l[0]===n[0]?Ml(l,Xe(s,2)):[]}),lv=pt(function(n){var s=Yn(n),l=zt(n,Ll);return s=typeof s=="function"?s:t,s&&l.pop(),l.length&&l[0]===n[0]?Ml(l,t,s):[]});function cv(n,s){return n==null?"":sg.call(n,s)}function Yn(n){var s=n==null?0:n.length;return s?n[s-1]:t}function uv(n,s,l){var h=n==null?0:n.length;if(!h)return-1;var x=h;return l!==t&&(x=ct(l),x=x<0?Jt(h+x,0):un(x,h-1)),s===s?Wm(n,s,x):xo(n,Lu,x,!0)}function fv(n,s){return n&&n.length?lf(n,ct(s)):t}var hv=pt(Jf);function Jf(n,s){return n&&n.length&&s&&s.length?bl(n,s):n}function dv(n,s,l){return n&&n.length&&s&&s.length?bl(n,s,Xe(l,2)):n}function pv(n,s,l){return n&&n.length&&s&&s.length?bl(n,s,t,l):n}var mv=Ei(function(n,s){var l=n==null?0:n.length,h=gl(n,s);return ff(n,zt(s,function(x){return yi(x,l)?+x:x}).sort(Sf)),h});function gv(n,s){var l=[];if(!(n&&n.length))return l;var h=-1,x=[],T=n.length;for(s=Xe(s,3);++h<T;){var P=n[h];s(P,h,n)&&(l.push(P),x.push(h))}return ff(n,x),l}function kl(n){return n==null?n:cg.call(n)}function _v(n,s,l){var h=n==null?0:n.length;return h?(l&&typeof l!="number"&&gn(n,s,l)?(s=0,l=h):(s=s==null?0:ct(s),l=l===t?h:ct(l)),Xn(n,s,l)):[]}function vv(n,s){return zo(n,s)}function xv(n,s,l){return wl(n,s,Xe(l,2))}function Mv(n,s){var l=n==null?0:n.length;if(l){var h=zo(n,s);if(h<l&&ei(n[h],s))return h}return-1}function Sv(n,s){return zo(n,s,!0)}function Ev(n,s,l){return wl(n,s,Xe(l,2),!0)}function yv(n,s){var l=n==null?0:n.length;if(l){var h=zo(n,s,!0)-1;if(ei(n[h],s))return h}return-1}function bv(n){return n&&n.length?df(n):[]}function Tv(n,s){return n&&n.length?df(n,Xe(s,2)):[]}function Av(n){var s=n==null?0:n.length;return s?Xn(n,1,s):[]}function wv(n,s,l){return n&&n.length?(s=l||s===t?1:ct(s),Xn(n,0,s<0?0:s)):[]}function Cv(n,s,l){var h=n==null?0:n.length;return h?(s=l||s===t?1:ct(s),s=h-s,Xn(n,s<0?0:s,h)):[]}function Rv(n,s){return n&&n.length?Go(n,Xe(s,3),!1,!0):[]}function Lv(n,s){return n&&n.length?Go(n,Xe(s,3)):[]}var Pv=pt(function(n){return Vi(on(n,1,Xt,!0))}),Dv=pt(function(n){var s=Yn(n);return Xt(s)&&(s=t),Vi(on(n,1,Xt,!0),Xe(s,2))}),Iv=pt(function(n){var s=Yn(n);return s=typeof s=="function"?s:t,Vi(on(n,1,Xt,!0),t,s)});function Uv(n){return n&&n.length?Vi(n):[]}function Nv(n,s){return n&&n.length?Vi(n,Xe(s,2)):[]}function Ov(n,s){return s=typeof s=="function"?s:t,n&&n.length?Vi(n,t,s):[]}function Xl(n){if(!(n&&n.length))return[];var s=0;return n=Fi(n,function(l){if(Xt(l))return s=Jt(l.length,s),!0}),ll(s,function(l){return zt(n,sl(l))})}function Qf(n,s){if(!(n&&n.length))return[];var l=Xl(n);return s==null?l:zt(l,function(h){return Ln(s,t,h)})}var Fv=pt(function(n,s){return Xt(n)?zs(n,s):[]}),Bv=pt(function(n){return Rl(Fi(n,Xt))}),zv=pt(function(n){var s=Yn(n);return Xt(s)&&(s=t),Rl(Fi(n,Xt),Xe(s,2))}),Gv=pt(function(n){var s=Yn(n);return s=typeof s=="function"?s:t,Rl(Fi(n,Xt),t,s)}),Hv=pt(Xl);function Vv(n,s){return _f(n||[],s||[],Bs)}function Wv(n,s){return _f(n||[],s||[],Vs)}var kv=pt(function(n){var s=n.length,l=s>1?n[s-1]:t;return l=typeof l=="function"?(n.pop(),l):t,Qf(n,l)});function eh(n){var s=S(n);return s.__chain__=!0,s}function Xv(n,s){return s(n),n}function Zo(n,s){return s(n)}var Yv=Ei(function(n){var s=n.length,l=s?n[0]:0,h=this.__wrapped__,x=function(T){return gl(T,n)};return s>1||this.__actions__.length||!(h instanceof vt)||!yi(l)?this.thru(x):(h=h.slice(l,+l+(s?1:0)),h.__actions__.push({func:Zo,args:[x],thisArg:t}),new Wn(h,this.__chain__).thru(function(T){return s&&!T.length&&T.push(t),T}))});function qv(){return eh(this)}function Kv(){return new Wn(this.value(),this.__chain__)}function Zv(){this.__values__===t&&(this.__values__=ph(this.value()));var n=this.__index__>=this.__values__.length,s=n?t:this.__values__[this.__index__++];return{done:n,value:s}}function $v(){return this}function jv(n){for(var s,l=this;l instanceof Uo;){var h=qf(l);h.__index__=0,h.__values__=t,s?x.__wrapped__=h:s=h;var x=h;l=l.__wrapped__}return x.__wrapped__=n,s}function Jv(){var n=this.__wrapped__;if(n instanceof vt){var s=n;return this.__actions__.length&&(s=new vt(this)),s=s.reverse(),s.__actions__.push({func:Zo,args:[kl],thisArg:t}),new Wn(s,this.__chain__)}return this.thru(kl)}function Qv(){return gf(this.__wrapped__,this.__actions__)}var e0=Ho(function(n,s,l){Rt.call(n,l)?++n[l]:Mi(n,l,1)});function t0(n,s,l){var h=ot(n)?Cu:Xg;return l&&gn(n,s,l)&&(s=t),h(n,Xe(s,3))}function n0(n,s){var l=ot(n)?Fi:Ju;return l(n,Xe(s,3))}var i0=wf(Kf),r0=wf(Zf);function s0(n,s){return on($o(n,s),1)}function o0(n,s){return on($o(n,s),oe)}function a0(n,s,l){return l=l===t?1:ct(l),on($o(n,s),l)}function th(n,s){var l=ot(n)?Hn:Hi;return l(n,Xe(s,3))}function nh(n,s){var l=ot(n)?Am:ju;return l(n,Xe(s,3))}var l0=Ho(function(n,s,l){Rt.call(n,l)?n[l].push(s):Mi(n,l,[s])});function c0(n,s,l,h){n=bn(n)?n:Zr(n),l=l&&!h?ct(l):0;var x=n.length;return l<0&&(l=Jt(x+l,0)),ta(n)?l<=x&&n.indexOf(s,l)>-1:!!x&&Fr(n,s,l)>-1}var u0=pt(function(n,s,l){var h=-1,x=typeof s=="function",T=bn(n)?Z(n.length):[];return Hi(n,function(P){T[++h]=x?Ln(s,P,l):Gs(P,s,l)}),T}),f0=Ho(function(n,s,l){Mi(n,l,s)});function $o(n,s){var l=ot(n)?zt:sf;return l(n,Xe(s,3))}function h0(n,s,l,h){return n==null?[]:(ot(s)||(s=s==null?[]:[s]),l=h?t:l,ot(l)||(l=l==null?[]:[l]),cf(n,s,l))}var d0=Ho(function(n,s,l){n[l?0:1].push(s)},function(){return[[],[]]});function p0(n,s,l){var h=ot(n)?il:Du,x=arguments.length<3;return h(n,Xe(s,4),l,x,Hi)}function m0(n,s,l){var h=ot(n)?wm:Du,x=arguments.length<3;return h(n,Xe(s,4),l,x,ju)}function g0(n,s){var l=ot(n)?Fi:Ju;return l(n,Qo(Xe(s,3)))}function _0(n){var s=ot(n)?qu:c_;return s(n)}function v0(n,s,l){(l?gn(n,s,l):s===t)?s=1:s=ct(s);var h=ot(n)?Gg:u_;return h(n,s)}function x0(n){var s=ot(n)?Hg:h_;return s(n)}function M0(n){if(n==null)return 0;if(bn(n))return ta(n)?zr(n):n.length;var s=fn(n);return s==De||s==X?n.size:El(n).length}function S0(n,s,l){var h=ot(n)?rl:d_;return l&&gn(n,s,l)&&(s=t),h(n,Xe(s,3))}var E0=pt(function(n,s){if(n==null)return[];var l=s.length;return l>1&&gn(n,s[0],s[1])?s=[]:l>2&&gn(s[0],s[1],s[2])&&(s=[s[0]]),cf(n,on(s,1),[])}),jo=ng||function(){return sn.Date.now()};function y0(n,s){if(typeof s!="function")throw new Vn(u);return n=ct(n),function(){if(--n<1)return s.apply(this,arguments)}}function ih(n,s,l){return s=l?t:s,s=n&&s==null?n.length:s,Si(n,O,t,t,t,t,s)}function rh(n,s){var l;if(typeof s!="function")throw new Vn(u);return n=ct(n),function(){return--n>0&&(l=s.apply(this,arguments)),n<=1&&(s=t),l}}var Yl=pt(function(n,s,l){var h=m;if(l.length){var x=zi(l,qr(Yl));h|=V}return Si(n,h,s,l,x)}),sh=pt(function(n,s,l){var h=m|g;if(l.length){var x=zi(l,qr(sh));h|=V}return Si(s,h,n,l,x)});function oh(n,s,l){s=l?t:s;var h=Si(n,C,t,t,t,t,t,s);return h.placeholder=oh.placeholder,h}function ah(n,s,l){s=l?t:s;var h=Si(n,I,t,t,t,t,t,s);return h.placeholder=ah.placeholder,h}function lh(n,s,l){var h,x,T,P,F,H,ne=0,ie=!1,ce=!1,Te=!0;if(typeof n!="function")throw new Vn(u);s=qn(s)||0,Gt(l)&&(ie=!!l.leading,ce="maxWait"in l,T=ce?Jt(qn(l.maxWait)||0,s):T,Te="trailing"in l?!!l.trailing:Te);function Oe(Yt){var ti=h,Ai=x;return h=x=t,ne=Yt,P=n.apply(Ai,ti),P}function Ke(Yt){return ne=Yt,F=Xs(gt,s),ie?Oe(Yt):P}function ft(Yt){var ti=Yt-H,Ai=Yt-ne,wh=s-ti;return ce?un(wh,T-Ai):wh}function Ze(Yt){var ti=Yt-H,Ai=Yt-ne;return H===t||ti>=s||ti<0||ce&&Ai>=T}function gt(){var Yt=jo();if(Ze(Yt))return St(Yt);F=Xs(gt,ft(Yt))}function St(Yt){return F=t,Te&&h?Oe(Yt):(h=x=t,P)}function Un(){F!==t&&vf(F),ne=0,h=H=x=F=t}function _n(){return F===t?P:St(jo())}function Nn(){var Yt=jo(),ti=Ze(Yt);if(h=arguments,x=this,H=Yt,ti){if(F===t)return Ke(H);if(ce)return vf(F),F=Xs(gt,s),Oe(H)}return F===t&&(F=Xs(gt,s)),P}return Nn.cancel=Un,Nn.flush=_n,Nn}var b0=pt(function(n,s){return $u(n,1,s)}),T0=pt(function(n,s,l){return $u(n,qn(s)||0,l)});function A0(n){return Si(n,Me)}function Jo(n,s){if(typeof n!="function"||s!=null&&typeof s!="function")throw new Vn(u);var l=function(){var h=arguments,x=s?s.apply(this,h):h[0],T=l.cache;if(T.has(x))return T.get(x);var P=n.apply(this,h);return l.cache=T.set(x,P)||T,P};return l.cache=new(Jo.Cache||xi),l}Jo.Cache=xi;function Qo(n){if(typeof n!="function")throw new Vn(u);return function(){var s=arguments;switch(s.length){case 0:return!n.call(this);case 1:return!n.call(this,s[0]);case 2:return!n.call(this,s[0],s[1]);case 3:return!n.call(this,s[0],s[1],s[2])}return!n.apply(this,s)}}function w0(n){return rh(2,n)}var C0=p_(function(n,s){s=s.length==1&&ot(s[0])?zt(s[0],Pn(Xe())):zt(on(s,1),Pn(Xe()));var l=s.length;return pt(function(h){for(var x=-1,T=un(h.length,l);++x<T;)h[x]=s[x].call(this,h[x]);return Ln(n,this,h)})}),ql=pt(function(n,s){var l=zi(s,qr(ql));return Si(n,V,t,s,l)}),ch=pt(function(n,s){var l=zi(s,qr(ch));return Si(n,B,t,s,l)}),R0=Ei(function(n,s){return Si(n,se,t,t,t,s)});function L0(n,s){if(typeof n!="function")throw new Vn(u);return s=s===t?s:ct(s),pt(n,s)}function P0(n,s){if(typeof n!="function")throw new Vn(u);return s=s==null?0:Jt(ct(s),0),pt(function(l){var h=l[s],x=ki(l,0,s);return h&&Bi(x,h),Ln(n,this,x)})}function D0(n,s,l){var h=!0,x=!0;if(typeof n!="function")throw new Vn(u);return Gt(l)&&(h="leading"in l?!!l.leading:h,x="trailing"in l?!!l.trailing:x),lh(n,s,{leading:h,maxWait:s,trailing:x})}function I0(n){return ih(n,1)}function U0(n,s){return ql(Pl(s),n)}function N0(){if(!arguments.length)return[];var n=arguments[0];return ot(n)?n:[n]}function O0(n){return kn(n,M)}function F0(n,s){return s=typeof s=="function"?s:t,kn(n,M,s)}function B0(n){return kn(n,_|M)}function z0(n,s){return s=typeof s=="function"?s:t,kn(n,_|M,s)}function G0(n,s){return s==null||Zu(n,s,tn(s))}function ei(n,s){return n===s||n!==n&&s!==s}var H0=Xo(xl),V0=Xo(function(n,s){return n>=s}),mr=tf(function(){return arguments}())?tf:function(n){return Vt(n)&&Rt.call(n,"callee")&&!Hu.call(n,"callee")},ot=Z.isArray,W0=Eu?Pn(Eu):jg;function bn(n){return n!=null&&ea(n.length)&&!bi(n)}function Xt(n){return Vt(n)&&bn(n)}function k0(n){return n===!0||n===!1||Vt(n)&&mn(n)==Ge}var Xi=rg||rc,X0=yu?Pn(yu):Jg;function Y0(n){return Vt(n)&&n.nodeType===1&&!Ys(n)}function q0(n){if(n==null)return!0;if(bn(n)&&(ot(n)||typeof n=="string"||typeof n.splice=="function"||Xi(n)||Kr(n)||mr(n)))return!n.length;var s=fn(n);if(s==De||s==X)return!n.size;if(ks(n))return!El(n).length;for(var l in n)if(Rt.call(n,l))return!1;return!0}function K0(n,s){return Hs(n,s)}function Z0(n,s,l){l=typeof l=="function"?l:t;var h=l?l(n,s):t;return h===t?Hs(n,s,t,l):!!h}function Kl(n){if(!Vt(n))return!1;var s=mn(n);return s==je||s==_t||typeof n.message=="string"&&typeof n.name=="string"&&!Ys(n)}function $0(n){return typeof n=="number"&&Wu(n)}function bi(n){if(!Gt(n))return!1;var s=mn(n);return s==W||s==Ht||s==We||s==R}function uh(n){return typeof n=="number"&&n==ct(n)}function ea(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=te}function Gt(n){var s=typeof n;return n!=null&&(s=="object"||s=="function")}function Vt(n){return n!=null&&typeof n=="object"}var fh=bu?Pn(bu):e_;function j0(n,s){return n===s||Sl(n,s,Bl(s))}function J0(n,s,l){return l=typeof l=="function"?l:t,Sl(n,s,Bl(s),l)}function Q0(n){return hh(n)&&n!=+n}function ex(n){if(F_(n))throw new it(a);return nf(n)}function tx(n){return n===null}function nx(n){return n==null}function hh(n){return typeof n=="number"||Vt(n)&&mn(n)==ke}function Ys(n){if(!Vt(n)||mn(n)!=xt)return!1;var s=wo(n);if(s===null)return!0;var l=Rt.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&yo.call(l)==Jm}var Zl=Tu?Pn(Tu):t_;function ix(n){return uh(n)&&n>=-te&&n<=te}var dh=Au?Pn(Au):n_;function ta(n){return typeof n=="string"||!ot(n)&&Vt(n)&&mn(n)==me}function In(n){return typeof n=="symbol"||Vt(n)&&mn(n)==ue}var Kr=wu?Pn(wu):i_;function rx(n){return n===t}function sx(n){return Vt(n)&&fn(n)==Ie}function ox(n){return Vt(n)&&mn(n)==ye}var ax=Xo(yl),lx=Xo(function(n,s){return n<=s});function ph(n){if(!n)return[];if(bn(n))return ta(n)?Jn(n):yn(n);if(Is&&n[Is])return Gm(n[Is]());var s=fn(n),l=s==De?ul:s==X?Mo:Zr;return l(n)}function Ti(n){if(!n)return n===0?n:0;if(n=qn(n),n===oe||n===-oe){var s=n<0?-1:1;return s*le}return n===n?n:0}function ct(n){var s=Ti(n),l=s%1;return s===s?l?s-l:s:0}function mh(n){return n?fr(ct(n),0,de):0}function qn(n){if(typeof n=="number")return n;if(In(n))return ae;if(Gt(n)){var s=typeof n.valueOf=="function"?n.valueOf():n;n=Gt(s)?s+"":s}if(typeof n!="string")return n===0?n:+n;n=Iu(n);var l=k.test(n);return l||j.test(n)?ym(n.slice(2),l?2:8):w.test(n)?ae:+n}function gh(n){return fi(n,Tn(n))}function cx(n){return n?fr(ct(n),-te,te):n===0?n:0}function At(n){return n==null?"":Dn(n)}var ux=Xr(function(n,s){if(ks(s)||bn(s)){fi(s,tn(s),n);return}for(var l in s)Rt.call(s,l)&&Bs(n,l,s[l])}),_h=Xr(function(n,s){fi(s,Tn(s),n)}),na=Xr(function(n,s,l,h){fi(s,Tn(s),n,h)}),fx=Xr(function(n,s,l,h){fi(s,tn(s),n,h)}),hx=Ei(gl);function dx(n,s){var l=kr(n);return s==null?l:Ku(l,s)}var px=pt(function(n,s){n=Pt(n);var l=-1,h=s.length,x=h>2?s[2]:t;for(x&&gn(s[0],s[1],x)&&(h=1);++l<h;)for(var T=s[l],P=Tn(T),F=-1,H=P.length;++F<H;){var ne=P[F],ie=n[ne];(ie===t||ei(ie,Hr[ne])&&!Rt.call(n,ne))&&(n[ne]=T[ne])}return n}),mx=pt(function(n){return n.push(t,Uf),Ln(vh,t,n)});function gx(n,s){return Ru(n,Xe(s,3),ui)}function _x(n,s){return Ru(n,Xe(s,3),vl)}function vx(n,s){return n==null?n:_l(n,Xe(s,3),Tn)}function xx(n,s){return n==null?n:Qu(n,Xe(s,3),Tn)}function Mx(n,s){return n&&ui(n,Xe(s,3))}function Sx(n,s){return n&&vl(n,Xe(s,3))}function Ex(n){return n==null?[]:Fo(n,tn(n))}function yx(n){return n==null?[]:Fo(n,Tn(n))}function $l(n,s,l){var h=n==null?t:hr(n,s);return h===t?l:h}function bx(n,s){return n!=null&&Ff(n,s,qg)}function jl(n,s){return n!=null&&Ff(n,s,Kg)}var Tx=Rf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=bo.call(s)),n[s]=l},Ql(An)),Ax=Rf(function(n,s,l){s!=null&&typeof s.toString!="function"&&(s=bo.call(s)),Rt.call(n,s)?n[s].push(l):n[s]=[l]},Xe),wx=pt(Gs);function tn(n){return bn(n)?Yu(n):El(n)}function Tn(n){return bn(n)?Yu(n,!0):r_(n)}function Cx(n,s){var l={};return s=Xe(s,3),ui(n,function(h,x,T){Mi(l,s(h,x,T),h)}),l}function Rx(n,s){var l={};return s=Xe(s,3),ui(n,function(h,x,T){Mi(l,x,s(h,x,T))}),l}var Lx=Xr(function(n,s,l){Bo(n,s,l)}),vh=Xr(function(n,s,l,h){Bo(n,s,l,h)}),Px=Ei(function(n,s){var l={};if(n==null)return l;var h=!1;s=zt(s,function(T){return T=Wi(T,n),h||(h=T.length>1),T}),fi(n,Ol(n),l),h&&(l=kn(l,_|v|M,T_));for(var x=s.length;x--;)Cl(l,s[x]);return l});function Dx(n,s){return xh(n,Qo(Xe(s)))}var Ix=Ei(function(n,s){return n==null?{}:o_(n,s)});function xh(n,s){if(n==null)return{};var l=zt(Ol(n),function(h){return[h]});return s=Xe(s),uf(n,l,function(h,x){return s(h,x[0])})}function Ux(n,s,l){s=Wi(s,n);var h=-1,x=s.length;for(x||(x=1,n=t);++h<x;){var T=n==null?t:n[hi(s[h])];T===t&&(h=x,T=l),n=bi(T)?T.call(n):T}return n}function Nx(n,s,l){return n==null?n:Vs(n,s,l)}function Ox(n,s,l,h){return h=typeof h=="function"?h:t,n==null?n:Vs(n,s,l,h)}var Mh=Df(tn),Sh=Df(Tn);function Fx(n,s,l){var h=ot(n),x=h||Xi(n)||Kr(n);if(s=Xe(s,4),l==null){var T=n&&n.constructor;x?l=h?new T:[]:Gt(n)?l=bi(T)?kr(wo(n)):{}:l={}}return(x?Hn:ui)(n,function(P,F,H){return s(l,P,F,H)}),l}function Bx(n,s){return n==null?!0:Cl(n,s)}function zx(n,s,l){return n==null?n:mf(n,s,Pl(l))}function Gx(n,s,l,h){return h=typeof h=="function"?h:t,n==null?n:mf(n,s,Pl(l),h)}function Zr(n){return n==null?[]:cl(n,tn(n))}function Hx(n){return n==null?[]:cl(n,Tn(n))}function Vx(n,s,l){return l===t&&(l=s,s=t),l!==t&&(l=qn(l),l=l===l?l:0),s!==t&&(s=qn(s),s=s===s?s:0),fr(qn(n),s,l)}function Wx(n,s,l){return s=Ti(s),l===t?(l=s,s=0):l=Ti(l),n=qn(n),Zg(n,s,l)}function kx(n,s,l){if(l&&typeof l!="boolean"&&gn(n,s,l)&&(s=l=t),l===t&&(typeof s=="boolean"?(l=s,s=t):typeof n=="boolean"&&(l=n,n=t)),n===t&&s===t?(n=0,s=1):(n=Ti(n),s===t?(s=n,n=0):s=Ti(s)),n>s){var h=n;n=s,s=h}if(l||n%1||s%1){var x=ku();return un(n+x*(s-n+Em("1e-"+((x+"").length-1))),s)}return Tl(n,s)}var Xx=Yr(function(n,s,l){return s=s.toLowerCase(),n+(l?Eh(s):s)});function Eh(n){return Jl(At(n).toLowerCase())}function yh(n){return n=At(n),n&&n.replace(Re,Nm).replace(hm,"")}function Yx(n,s,l){n=At(n),s=Dn(s);var h=n.length;l=l===t?h:fr(ct(l),0,h);var x=l;return l-=s.length,l>=0&&n.slice(l,x)==s}function qx(n){return n=At(n),n&&Ue.test(n)?n.replace(_e,Om):n}function Kx(n){return n=At(n),n&&rn.test(n)?n.replace(It,"\\$&"):n}var Zx=Yr(function(n,s,l){return n+(l?"-":"")+s.toLowerCase()}),$x=Yr(function(n,s,l){return n+(l?" ":"")+s.toLowerCase()}),jx=Af("toLowerCase");function Jx(n,s,l){n=At(n),s=ct(s);var h=s?zr(n):0;if(!s||h>=s)return n;var x=(s-h)/2;return ko(Po(x),l)+n+ko(Lo(x),l)}function Qx(n,s,l){n=At(n),s=ct(s);var h=s?zr(n):0;return s&&h<s?n+ko(s-h,l):n}function eM(n,s,l){n=At(n),s=ct(s);var h=s?zr(n):0;return s&&h<s?ko(s-h,l)+n:n}function tM(n,s,l){return l||s==null?s=0:s&&(s=+s),lg(At(n).replace(Lr,""),s||0)}function nM(n,s,l){return(l?gn(n,s,l):s===t)?s=1:s=ct(s),Al(At(n),s)}function iM(){var n=arguments,s=At(n[0]);return n.length<3?s:s.replace(n[1],n[2])}var rM=Yr(function(n,s,l){return n+(l?"_":"")+s.toLowerCase()});function sM(n,s,l){return l&&typeof l!="number"&&gn(n,s,l)&&(s=l=t),l=l===t?de:l>>>0,l?(n=At(n),n&&(typeof s=="string"||s!=null&&!Zl(s))&&(s=Dn(s),!s&&Br(n))?ki(Jn(n),0,l):n.split(s,l)):[]}var oM=Yr(function(n,s,l){return n+(l?" ":"")+Jl(s)});function aM(n,s,l){return n=At(n),l=l==null?0:fr(ct(l),0,n.length),s=Dn(s),n.slice(l,l+s.length)==s}function lM(n,s,l){var h=S.templateSettings;l&&gn(n,s,l)&&(s=t),n=At(n),s=na({},s,h,If);var x=na({},s.imports,h.imports,If),T=tn(x),P=cl(x,T),F,H,ne=0,ie=s.interpolate||Ne,ce="__p += '",Te=fl((s.escape||Ne).source+"|"+ie.source+"|"+(ie===dt?$a:Ne).source+"|"+(s.evaluate||Ne).source+"|$","g"),Oe="//# sourceURL="+(Rt.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++_m+"]")+`
`;n.replace(Te,function(Ze,gt,St,Un,_n,Nn){return St||(St=Un),ce+=n.slice(ne,Nn).replace(Ye,Fm),gt&&(F=!0,ce+=`' +
__e(`+gt+`) +
'`),_n&&(H=!0,ce+=`';
`+_n+`;
__p += '`),St&&(ce+=`' +
((__t = (`+St+`)) == null ? '' : __t) +
'`),ne=Nn+Ze.length,Ze}),ce+=`';
`;var Ke=Rt.call(s,"variable")&&s.variable;if(!Ke)ce=`with (obj) {
`+ce+`
}
`;else if(mo.test(Ke))throw new it(c);ce=(H?ce.replace(xe,""):ce).replace(be,"$1").replace(He,"$1;"),ce="function("+(Ke||"obj")+`) {
`+(Ke?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(F?", __e = _.escape":"")+(H?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ce+`return __p
}`;var ft=Th(function(){return Tt(T,Oe+"return "+ce).apply(t,P)});if(ft.source=ce,Kl(ft))throw ft;return ft}function cM(n){return At(n).toLowerCase()}function uM(n){return At(n).toUpperCase()}function fM(n,s,l){if(n=At(n),n&&(l||s===t))return Iu(n);if(!n||!(s=Dn(s)))return n;var h=Jn(n),x=Jn(s),T=Uu(h,x),P=Nu(h,x)+1;return ki(h,T,P).join("")}function hM(n,s,l){if(n=At(n),n&&(l||s===t))return n.slice(0,Fu(n)+1);if(!n||!(s=Dn(s)))return n;var h=Jn(n),x=Nu(h,Jn(s))+1;return ki(h,0,x).join("")}function dM(n,s,l){if(n=At(n),n&&(l||s===t))return n.replace(Lr,"");if(!n||!(s=Dn(s)))return n;var h=Jn(n),x=Uu(h,Jn(s));return ki(h,x).join("")}function pM(n,s){var l=y,h=N;if(Gt(s)){var x="separator"in s?s.separator:x;l="length"in s?ct(s.length):l,h="omission"in s?Dn(s.omission):h}n=At(n);var T=n.length;if(Br(n)){var P=Jn(n);T=P.length}if(l>=T)return n;var F=l-zr(h);if(F<1)return h;var H=P?ki(P,0,F).join(""):n.slice(0,F);if(x===t)return H+h;if(P&&(F+=H.length-F),Zl(x)){if(n.slice(F).search(x)){var ne,ie=H;for(x.global||(x=fl(x.source,At(go.exec(x))+"g")),x.lastIndex=0;ne=x.exec(ie);)var ce=ne.index;H=H.slice(0,ce===t?F:ce)}}else if(n.indexOf(Dn(x),F)!=F){var Te=H.lastIndexOf(x);Te>-1&&(H=H.slice(0,Te))}return H+h}function mM(n){return n=At(n),n&&pe.test(n)?n.replace(L,km):n}var gM=Yr(function(n,s,l){return n+(l?" ":"")+s.toUpperCase()}),Jl=Af("toUpperCase");function bh(n,s,l){return n=At(n),s=l?t:s,s===t?zm(n)?qm(n):Lm(n):n.match(s)||[]}var Th=pt(function(n,s){try{return Ln(n,t,s)}catch(l){return Kl(l)?l:new it(l)}}),_M=Ei(function(n,s){return Hn(s,function(l){l=hi(l),Mi(n,l,Yl(n[l],n))}),n});function vM(n){var s=n==null?0:n.length,l=Xe();return n=s?zt(n,function(h){if(typeof h[1]!="function")throw new Vn(u);return[l(h[0]),h[1]]}):[],pt(function(h){for(var x=-1;++x<s;){var T=n[x];if(Ln(T[0],this,h))return Ln(T[1],this,h)}})}function xM(n){return kg(kn(n,_))}function Ql(n){return function(){return n}}function MM(n,s){return n==null||n!==n?s:n}var SM=Cf(),EM=Cf(!0);function An(n){return n}function ec(n){return rf(typeof n=="function"?n:kn(n,_))}function yM(n){return of(kn(n,_))}function bM(n,s){return af(n,kn(s,_))}var TM=pt(function(n,s){return function(l){return Gs(l,n,s)}}),AM=pt(function(n,s){return function(l){return Gs(n,l,s)}});function tc(n,s,l){var h=tn(s),x=Fo(s,h);l==null&&!(Gt(s)&&(x.length||!h.length))&&(l=s,s=n,n=this,x=Fo(s,tn(s)));var T=!(Gt(l)&&"chain"in l)||!!l.chain,P=bi(n);return Hn(x,function(F){var H=s[F];n[F]=H,P&&(n.prototype[F]=function(){var ne=this.__chain__;if(T||ne){var ie=n(this.__wrapped__),ce=ie.__actions__=yn(this.__actions__);return ce.push({func:H,args:arguments,thisArg:n}),ie.__chain__=ne,ie}return H.apply(n,Bi([this.value()],arguments))})}),n}function wM(){return sn._===this&&(sn._=Qm),this}function nc(){}function CM(n){return n=ct(n),pt(function(s){return lf(s,n)})}var RM=Il(zt),LM=Il(Cu),PM=Il(rl);function Ah(n){return Gl(n)?sl(hi(n)):a_(n)}function DM(n){return function(s){return n==null?t:hr(n,s)}}var IM=Lf(),UM=Lf(!0);function ic(){return[]}function rc(){return!1}function NM(){return{}}function OM(){return""}function FM(){return!0}function BM(n,s){if(n=ct(n),n<1||n>te)return[];var l=de,h=un(n,de);s=Xe(s),n-=de;for(var x=ll(h,s);++l<n;)s(l);return x}function zM(n){return ot(n)?zt(n,hi):In(n)?[n]:yn(Yf(At(n)))}function GM(n){var s=++jm;return At(n)+s}var HM=Wo(function(n,s){return n+s},0),VM=Ul("ceil"),WM=Wo(function(n,s){return n/s},1),kM=Ul("floor");function XM(n){return n&&n.length?Oo(n,An,xl):t}function YM(n,s){return n&&n.length?Oo(n,Xe(s,2),xl):t}function qM(n){return Pu(n,An)}function KM(n,s){return Pu(n,Xe(s,2))}function ZM(n){return n&&n.length?Oo(n,An,yl):t}function $M(n,s){return n&&n.length?Oo(n,Xe(s,2),yl):t}var jM=Wo(function(n,s){return n*s},1),JM=Ul("round"),QM=Wo(function(n,s){return n-s},0);function eS(n){return n&&n.length?al(n,An):0}function tS(n,s){return n&&n.length?al(n,Xe(s,2)):0}return S.after=y0,S.ary=ih,S.assign=ux,S.assignIn=_h,S.assignInWith=na,S.assignWith=fx,S.at=hx,S.before=rh,S.bind=Yl,S.bindAll=_M,S.bindKey=sh,S.castArray=N0,S.chain=eh,S.chunk=k_,S.compact=X_,S.concat=Y_,S.cond=vM,S.conforms=xM,S.constant=Ql,S.countBy=e0,S.create=dx,S.curry=oh,S.curryRight=ah,S.debounce=lh,S.defaults=px,S.defaultsDeep=mx,S.defer=b0,S.delay=T0,S.difference=q_,S.differenceBy=K_,S.differenceWith=Z_,S.drop=$_,S.dropRight=j_,S.dropRightWhile=J_,S.dropWhile=Q_,S.fill=ev,S.filter=n0,S.flatMap=s0,S.flatMapDeep=o0,S.flatMapDepth=a0,S.flatten=$f,S.flattenDeep=tv,S.flattenDepth=nv,S.flip=A0,S.flow=SM,S.flowRight=EM,S.fromPairs=iv,S.functions=Ex,S.functionsIn=yx,S.groupBy=l0,S.initial=sv,S.intersection=ov,S.intersectionBy=av,S.intersectionWith=lv,S.invert=Tx,S.invertBy=Ax,S.invokeMap=u0,S.iteratee=ec,S.keyBy=f0,S.keys=tn,S.keysIn=Tn,S.map=$o,S.mapKeys=Cx,S.mapValues=Rx,S.matches=yM,S.matchesProperty=bM,S.memoize=Jo,S.merge=Lx,S.mergeWith=vh,S.method=TM,S.methodOf=AM,S.mixin=tc,S.negate=Qo,S.nthArg=CM,S.omit=Px,S.omitBy=Dx,S.once=w0,S.orderBy=h0,S.over=RM,S.overArgs=C0,S.overEvery=LM,S.overSome=PM,S.partial=ql,S.partialRight=ch,S.partition=d0,S.pick=Ix,S.pickBy=xh,S.property=Ah,S.propertyOf=DM,S.pull=hv,S.pullAll=Jf,S.pullAllBy=dv,S.pullAllWith=pv,S.pullAt=mv,S.range=IM,S.rangeRight=UM,S.rearg=R0,S.reject=g0,S.remove=gv,S.rest=L0,S.reverse=kl,S.sampleSize=v0,S.set=Nx,S.setWith=Ox,S.shuffle=x0,S.slice=_v,S.sortBy=E0,S.sortedUniq=bv,S.sortedUniqBy=Tv,S.split=sM,S.spread=P0,S.tail=Av,S.take=wv,S.takeRight=Cv,S.takeRightWhile=Rv,S.takeWhile=Lv,S.tap=Xv,S.throttle=D0,S.thru=Zo,S.toArray=ph,S.toPairs=Mh,S.toPairsIn=Sh,S.toPath=zM,S.toPlainObject=gh,S.transform=Fx,S.unary=I0,S.union=Pv,S.unionBy=Dv,S.unionWith=Iv,S.uniq=Uv,S.uniqBy=Nv,S.uniqWith=Ov,S.unset=Bx,S.unzip=Xl,S.unzipWith=Qf,S.update=zx,S.updateWith=Gx,S.values=Zr,S.valuesIn=Hx,S.without=Fv,S.words=bh,S.wrap=U0,S.xor=Bv,S.xorBy=zv,S.xorWith=Gv,S.zip=Hv,S.zipObject=Vv,S.zipObjectDeep=Wv,S.zipWith=kv,S.entries=Mh,S.entriesIn=Sh,S.extend=_h,S.extendWith=na,tc(S,S),S.add=HM,S.attempt=Th,S.camelCase=Xx,S.capitalize=Eh,S.ceil=VM,S.clamp=Vx,S.clone=O0,S.cloneDeep=B0,S.cloneDeepWith=z0,S.cloneWith=F0,S.conformsTo=G0,S.deburr=yh,S.defaultTo=MM,S.divide=WM,S.endsWith=Yx,S.eq=ei,S.escape=qx,S.escapeRegExp=Kx,S.every=t0,S.find=i0,S.findIndex=Kf,S.findKey=gx,S.findLast=r0,S.findLastIndex=Zf,S.findLastKey=_x,S.floor=kM,S.forEach=th,S.forEachRight=nh,S.forIn=vx,S.forInRight=xx,S.forOwn=Mx,S.forOwnRight=Sx,S.get=$l,S.gt=H0,S.gte=V0,S.has=bx,S.hasIn=jl,S.head=jf,S.identity=An,S.includes=c0,S.indexOf=rv,S.inRange=Wx,S.invoke=wx,S.isArguments=mr,S.isArray=ot,S.isArrayBuffer=W0,S.isArrayLike=bn,S.isArrayLikeObject=Xt,S.isBoolean=k0,S.isBuffer=Xi,S.isDate=X0,S.isElement=Y0,S.isEmpty=q0,S.isEqual=K0,S.isEqualWith=Z0,S.isError=Kl,S.isFinite=$0,S.isFunction=bi,S.isInteger=uh,S.isLength=ea,S.isMap=fh,S.isMatch=j0,S.isMatchWith=J0,S.isNaN=Q0,S.isNative=ex,S.isNil=nx,S.isNull=tx,S.isNumber=hh,S.isObject=Gt,S.isObjectLike=Vt,S.isPlainObject=Ys,S.isRegExp=Zl,S.isSafeInteger=ix,S.isSet=dh,S.isString=ta,S.isSymbol=In,S.isTypedArray=Kr,S.isUndefined=rx,S.isWeakMap=sx,S.isWeakSet=ox,S.join=cv,S.kebabCase=Zx,S.last=Yn,S.lastIndexOf=uv,S.lowerCase=$x,S.lowerFirst=jx,S.lt=ax,S.lte=lx,S.max=XM,S.maxBy=YM,S.mean=qM,S.meanBy=KM,S.min=ZM,S.minBy=$M,S.stubArray=ic,S.stubFalse=rc,S.stubObject=NM,S.stubString=OM,S.stubTrue=FM,S.multiply=jM,S.nth=fv,S.noConflict=wM,S.noop=nc,S.now=jo,S.pad=Jx,S.padEnd=Qx,S.padStart=eM,S.parseInt=tM,S.random=kx,S.reduce=p0,S.reduceRight=m0,S.repeat=nM,S.replace=iM,S.result=Ux,S.round=JM,S.runInContext=z,S.sample=_0,S.size=M0,S.snakeCase=rM,S.some=S0,S.sortedIndex=vv,S.sortedIndexBy=xv,S.sortedIndexOf=Mv,S.sortedLastIndex=Sv,S.sortedLastIndexBy=Ev,S.sortedLastIndexOf=yv,S.startCase=oM,S.startsWith=aM,S.subtract=QM,S.sum=eS,S.sumBy=tS,S.template=lM,S.times=BM,S.toFinite=Ti,S.toInteger=ct,S.toLength=mh,S.toLower=cM,S.toNumber=qn,S.toSafeInteger=cx,S.toString=At,S.toUpper=uM,S.trim=fM,S.trimEnd=hM,S.trimStart=dM,S.truncate=pM,S.unescape=mM,S.uniqueId=GM,S.upperCase=gM,S.upperFirst=Jl,S.each=th,S.eachRight=nh,S.first=jf,tc(S,function(){var n={};return ui(S,function(s,l){Rt.call(S.prototype,l)||(n[l]=s)}),n}(),{chain:!1}),S.VERSION=i,Hn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){S[n].placeholder=S}),Hn(["drop","take"],function(n,s){vt.prototype[n]=function(l){l=l===t?1:Jt(ct(l),0);var h=this.__filtered__&&!s?new vt(this):this.clone();return h.__filtered__?h.__takeCount__=un(l,h.__takeCount__):h.__views__.push({size:un(l,de),type:n+(h.__dir__<0?"Right":"")}),h},vt.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Hn(["filter","map","takeWhile"],function(n,s){var l=s+1,h=l==G||l==$;vt.prototype[n]=function(x){var T=this.clone();return T.__iteratees__.push({iteratee:Xe(x,3),type:l}),T.__filtered__=T.__filtered__||h,T}}),Hn(["head","last"],function(n,s){var l="take"+(s?"Right":"");vt.prototype[n]=function(){return this[l](1).value()[0]}}),Hn(["initial","tail"],function(n,s){var l="drop"+(s?"":"Right");vt.prototype[n]=function(){return this.__filtered__?new vt(this):this[l](1)}}),vt.prototype.compact=function(){return this.filter(An)},vt.prototype.find=function(n){return this.filter(n).head()},vt.prototype.findLast=function(n){return this.reverse().find(n)},vt.prototype.invokeMap=pt(function(n,s){return typeof n=="function"?new vt(this):this.map(function(l){return Gs(l,n,s)})}),vt.prototype.reject=function(n){return this.filter(Qo(Xe(n)))},vt.prototype.slice=function(n,s){n=ct(n);var l=this;return l.__filtered__&&(n>0||s<0)?new vt(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),s!==t&&(s=ct(s),l=s<0?l.dropRight(-s):l.take(s-n)),l)},vt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},vt.prototype.toArray=function(){return this.take(de)},ui(vt.prototype,function(n,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),h=/^(?:head|last)$/.test(s),x=S[h?"take"+(s=="last"?"Right":""):s],T=h||/^find/.test(s);x&&(S.prototype[s]=function(){var P=this.__wrapped__,F=h?[1]:arguments,H=P instanceof vt,ne=F[0],ie=H||ot(P),ce=function(gt){var St=x.apply(S,Bi([gt],F));return h&&Te?St[0]:St};ie&&l&&typeof ne=="function"&&ne.length!=1&&(H=ie=!1);var Te=this.__chain__,Oe=!!this.__actions__.length,Ke=T&&!Te,ft=H&&!Oe;if(!T&&ie){P=ft?P:new vt(this);var Ze=n.apply(P,F);return Ze.__actions__.push({func:Zo,args:[ce],thisArg:t}),new Wn(Ze,Te)}return Ke&&ft?n.apply(this,F):(Ze=this.thru(ce),Ke?h?Ze.value()[0]:Ze.value():Ze)})}),Hn(["pop","push","shift","sort","splice","unshift"],function(n){var s=So[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",h=/^(?:pop|shift)$/.test(n);S.prototype[n]=function(){var x=arguments;if(h&&!this.__chain__){var T=this.value();return s.apply(ot(T)?T:[],x)}return this[l](function(P){return s.apply(ot(P)?P:[],x)})}}),ui(vt.prototype,function(n,s){var l=S[s];if(l){var h=l.name+"";Rt.call(Wr,h)||(Wr[h]=[]),Wr[h].push({name:s,func:l})}}),Wr[Vo(t,g).name]=[{name:"wrapper",func:t}],vt.prototype.clone=mg,vt.prototype.reverse=gg,vt.prototype.value=_g,S.prototype.at=Yv,S.prototype.chain=qv,S.prototype.commit=Kv,S.prototype.next=Zv,S.prototype.plant=jv,S.prototype.reverse=Jv,S.prototype.toJSON=S.prototype.valueOf=S.prototype.value=Qv,S.prototype.first=S.prototype.head,Is&&(S.prototype[Is]=$v),S},Gr=Km();ar?((ar.exports=Gr)._=Gr,el._=Gr):sn._=Gr}).call(no)})(Fa,Fa.exports);var Fc=Fa.exports;const Q1=r=>{const e=document.getElementById("loadingIndicator");r?e.style.display="flex":e.style.display="none"},ew=()=>{document.getElementById("cellTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),tw(t)})};function tw(r){const e=document.getElementById("cellNotFound");let t=wt.value.listPalette;r?(t=wt.value.listPalette.filter(([i,o])=>i.toLowerCase().startsWith(r)),console.log(t),Ba(t)):Ba(wt.value.listPalette),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}function Ba(r){const e=document.getElementById("cellCheckboxes");e.innerHTML="",r.sort((t,i)=>t[0].toLowerCase()<i[0].toLowerCase()?-1:t[0].toLowerCase()>i[0].toLowerCase()?1:0),r.forEach(([t,i])=>{const o=document.createElement("input");o.type="checkbox",o.className="box",o.id=t,o.value=t,Wt.value.selectedCelltypes.includes(t)&&(o.checked=!0);const a=document.createElement("label");a.htmlFor=t,a.textContent=t,a.style.color=i;const u=document.createElement("checkboxGroup");u.appendChild(o),u.appendChild(a),u.appendChild(document.createElement("br")),e.appendChild(u),o.addEventListener("change",c=>{nw(t,c.target.checked)})})}async function nw(r,e){let t=Wt.value.selectedCelltypes.map(i=>i);e?(t.push(r),tu(t)):(t=t.filter(i=>i!==r),tu(t)),console.log(Wt.value.selectedCelltypes)}const iw=()=>{document.getElementById("cellClearButton").addEventListener("click",()=>{tu([]),Ba(wt.value.listPalette),cellTextbox.value=""})},rw=()=>{const r=document.getElementById("cellFilters");r.innerHTML="",Wt.value.selectedCelltypes.length!==0?Wt.value.selectedCelltypes.forEach(e=>{const t=document.createElement("p");t.style.color=wt.value.pallete[e],t.style.fontStyle="italic",t.innerHTML=e,r.appendChild(t)}):r.innerHTML="No celltype filters selected"};async function qa(r,e){const t=await fetch(`https://fisheyes.techkyra.com/getdata?col=${e}-${r}`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const i=await t.json();return JSON.parse(i.data)}function sw(r){return qa(r,wt.value.prefix)}function ow(r){const e={r:0,g:0,b:255},t={r:255,g:255,b:255},i={r:255,g:0,b:0};return r<.5?`rgb(${Math.floor(t.r*r*2)}, ${Math.floor(t.g*r*2)}, ${e.b})`:r===.5?`rgb(${t.r}, ${t.g}, ${t.b})`:`rgb(${i.r}, ${Math.floor(t.g-t.g*(r-.5)*2)}, ${Math.floor(t.b-t.b*(r-.5)*2)})`}function aw(r){const e=r.slice().sort((i,o)=>i-o),t=Math.floor(e.length*.99)-1;return e[t]}function lw(r,e){return r.map(t=>Math.min(t/e,1))}const cw=()=>{document.getElementById("geneTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),uw(t)})};function uw(r){const e=document.getElementById("geneNotFound");if(r){const t=wt.value.genes.filter(i=>i.toLowerCase().startsWith(r));console.log(t),za(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else za(wt.value.genes)}function za(r){const e=document.getElementById("geneRadio");e.innerHTML="",r.sort((t,i)=>t[0].toLowerCase()<i[0].toLowerCase()?-1:t[0].toLowerCase()>i[0].toLowerCase()?1:0),r.forEach(t=>{const i=document.createElement("input");i.type="radio",i.className="box",i.id=t,i.value=t,i.name="radio";const o=document.createElement("label");o.htmlFor=t,o.textContent=t,o.style.color="white";const a=document.createElement("geneRadioGroup");a.appendChild(i),a.appendChild(o),a.appendChild(document.createElement("br")),e.appendChild(a),i.addEventListener("change",u=>{fw(t,u.target.checked)})})}function fw(r,e){e&&tm([r]),console.log(r),console.log(Wt.value.selectedGenes)}const hw=()=>{document.getElementById("geneClearButton").addEventListener("click",()=>{tm([]),za(wt.value.genes),geneTextbox.value=""})},dw=()=>{const r=document.getElementById("geneFilters");r.innerHTML="",Wt.value.selectedGenes.length!==0?Wt.value.selectedGenes.forEach(e=>{const t=document.createElement("p");t.style.color="white",t.style.fontStyle="italic",t.innerHTML=e,r.appendChild(t)}):r.innerHTML="No gene filters selected"};class pw{constructor(e){Ch(this,"animate",()=>{requestAnimationFrame(this.animate),this.controls.update();const e=this.camera.quaternion;let t=_s.value.items;for(let i=0;i<t.length*2;i++){const o=new qt,a=new Y,u=new Y;this.instancedMesh.getMatrixAt(i,o),o.decompose(a,new rr,u),o.compose(a,e,u),this.instancedMesh.setMatrixAt(i,o)}this.instancedMesh.instanceMatrix.needsUpdate=!0,this.renderer.render(this.scene,this.camera)});this.container=e,this.instancedMesh,this.instancedMeshUmap,this.initScene(),this.subscribeToStateChanges()}initScene(){this.scene=em.value.scene,this.camera=new Bn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new lu,this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),this.camera.position.z=200,this.controls=new nm(this.camera,this.renderer.domElement),wt.value.prefix=="6s"&&(this.controls.enableRotate=!1,this.controls.mouseButtons={LEFT:Zn.PAN,MIDDLE:Zn.DOLLY,RIGHT:Zn.ROTATE}),this.controls.enableDamping=!0,this.controls.dampingFactor=.25,this.controls.update(),this.updateInstancedMesh(),this.animate()}subscribeToStateChanges(){_s.pipe(eo(e=>e.items),to((e,t)=>Fc.isEqual(e,t))).subscribe(e=>{console.log("Items have updated:",e),console.log(_s.value.items)}),wt.pipe(eo(e=>e.prefix),to((e,t)=>Fc.isEqual(e,t))).subscribe(e=>{console.log("Prefix changed:",e),console.log(wt.value.prefix)}),oo.pipe(eo(e=>e.isLoading),to((e,t)=>Fc.isEqual(e,t))).subscribe(e=>{console.log("Loading changed:",e),console.log(oo.value.isLoading),Q1(oo.value.isLoading)}),Wt.pipe(eo(e=>e.selectedCelltypes),to((e,t)=>e.join()===t.join())).subscribe(async e=>{console.log("Selected celltypes changed:",e),console.log(Wt.value.selectedCelltypes),vs(!0),Wt.value.selectedCelltypes?await this.updateInstancedMesh(Wt.value.selectedCelltypes):await this.updateInstancedMesh([]),rw(),vs(!1)}),Wt.pipe(eo(e=>e.selectedGenes),to((e,t)=>e.join()===t.join())).subscribe(async e=>{console.log("Selected genes changed:",e),console.log(Wt.value.selectedGenes),vs(!0),Wt.value.selectedGenes?await this.updateInstancedMesh(Wt.value.selectedGenes):await this.updateInstancedMesh([]),dw(),vs(!1)})}async updateInstancedMesh(e=[]){this.instancedMesh&&(this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.scene.remove(this.instancedMesh)),this.instancedMeshUmap&&(this.instancedMeshUmap.geometry.dispose(),this.instancedMeshUmap.material.dispose(),this.scene.remove(this.instancedMeshUmap));let t=wt.value.pallete,i=_s.value.items;console.log(t),console.log(i);const o=new cu(.1,32,32),a=new ou,u=i.length;console.log(u),this.instancedMesh=new ep(o,a,u),this.instancedMeshUmap=new ep(o,a,u);const c=new Sn,f=new Sn;let d,p,_,v=100,M=.5,b=Wt.value.selectedCelltypes,A=Wt.value.selectedGenes;if(A.length>0){i.map(m=>m[e]);try{let m=await sw(A[0]);_=aw(m),p=lw(m,_)}catch(m){console.error("Error fetching data:",m)}}for(let m=0;m<u;m++){if(A.length>0)if(b.length===0||b.includes(i[m].clusters)){let D=ow(p[m]);d=new bt(D);let C=p[m]*5+1;c.scale.set(C,C,C),f.scale.set(C*M,C*M,C*M)}else d=new bt("#5e5e5e"),c.scale.set(1,1,1),f.scale.set(1*M,1*M,1*M);else b.includes(i[m].clusters)||b.length==0?(d=new bt(t[i[m].clusters]),c.scale.set(5,5,5),f.scale.set(5*M,5*M,5*M)):(d=new bt("#5e5e5e"),c.scale.set(1,1,1),f.scale.set(1*M,1*M,1*M));wt.value.prefix=="6s"?c.position.set(i[m].global_sphere0_norm*v,i[m].global_sphere1_norm*v,0):c.position.set(i[m].global_sphere0_norm*v,i[m].global_sphere1_norm*v,i[m].global_sphere2_norm*v),c.updateMatrix(),this.instancedMesh.setMatrixAt(m,c.matrix),this.instancedMesh.setColorAt(m,d);let g=1e4;wt.value.prefix=="75pe"?f.position.set(i[m].X_umap0_norm*80+g,i[m].X_umap1_norm*80,10):f.position.set(i[m].X_umap0_norm*60+g-25,i[m].X_umap1_norm*60,10),f.updateMatrix(),this.instancedMeshUmap.setMatrixAt(m,f.matrix),this.instancedMeshUmap.setColorAt(m,d)}this.scene.add(this.instancedMesh),this.scene.add(this.instancedMeshUmap)}}const fu=wt.value.prefix;async function mw(){const r=wt.value.palleteColumn;try{const e=await qa(r,fu);Y1(e)}catch(e){console.error("Failed to load items:",e)}}async function gw(){try{const r=await qa("genes",fu);q1(r)}catch(r){console.error("Failed to load items:",r)}}async function _w(){const r=wt.value.columns;let e={},t=[];try{const i=await Promise.all(r.map(o=>qa(o,fu)));console.log(i),r.forEach((o,a)=>{console.log(o),e[o]=i[a]}),console.log("trfdata"),console.log(e);for(let o=0;o<e.clusters.length;o++){let a={};for(let u in e)a[u]=e[u][o];t.push(a)}k1(t)}catch(i){console.error("Error combining data:",i)}}const vw=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("toggleCellCheckbox"),i=document.getElementById("toggleGeneRadio");t.addEventListener("click",()=>{r.style.display=r.style.display==="none"?"block":"none",t.style.backgroundColor="white",t.style.color="black",i.style.backgroundColor="rgb(97, 97, 97)",i.style.color="white",e.style.display==="block"&&(e.style.display="none"),r.style.display==="none"&&(t.style.backgroundColor="rgb(97, 97, 97)",t.style.color="white")})},xw=()=>{const r=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("toggleCellCheckbox"),i=document.getElementById("toggleGeneRadio");i.addEventListener("click",()=>{e.style.display=e.style.display==="none"?"block":"none",i.style.backgroundColor="white",i.style.color="black",t.style.backgroundColor="rgb(97, 97, 97)",t.style.color="white",r.style.display==="block"&&(r.style.display="none"),e.style.display==="none"&&(i.style.backgroundColor="rgb(97, 97, 97)",i.style.color="white")})},Mw=()=>{document.querySelectorAll(".iconBtn").forEach(e=>{e.addEventListener("mouseenter",function(){const t=this.dataset.target,i=document.getElementById(t);i.style.display="block"}),e.addEventListener("mouseleave",function(){const t=this.dataset.target,i=document.getElementById(t);i.style.display="none"})})};function Sw(){const r=document.createElement("div");r.className="filter";const e=fp("toggleCellCheckbox","Celltype");r.appendChild(e);const t=Ew();r.appendChild(t);const i=fp("toggleGeneRadio","Gene");r.appendChild(i);const o=yw();r.appendChild(o);const a=bw();return r.appendChild(a),r}function fp(r,e){const t=document.createElement("button");return t.setAttribute("type","button"),t.classList.add("toggles","btn"),t.id=r,t.textContent=e,t}function Ew(){const r=document.createElement("div");r.classList.add("checkbox-container"),r.id="cellCheckbox",r.style.display="none";const e=document.createElement("div");e.classList.add("input-elements");const t=document.createElement("input");t.setAttribute("type","text"),t.classList.add("textInput"),t.id="cellTextbox",t.placeholder="Search celltype";const i=document.createElement("button");i.setAttribute("type","button"),i.classList.add("clearButton","btn","btn-danger"),i.id="cellClearButton",i.textContent="Clear",e.appendChild(t),e.appendChild(i);const o=document.createElement("div");o.classList.add("checkboxes"),o.id="cellCheckboxes";const a=document.createElement("div");return a.classList.add("notfound","alert","alert-danger","alert-dismissible","fade","show"),a.id="cellNotFound",a.textContent="No cell types of that name found.",r.appendChild(e),r.appendChild(o),r.appendChild(a),r}function yw(){const r=document.createElement("div");r.classList.add("checkbox-container"),r.id="geneRadioContainer",r.style.display="none";const e=document.createElement("div");e.classList.add("input-elements");const t=document.createElement("input");t.setAttribute("type","text"),t.classList.add("textInput"),t.id="geneTextbox",t.placeholder="Search gene";const i=document.createElement("button");i.setAttribute("type","button"),i.classList.add("clearButton","btn","btn-danger"),i.id="geneClearButton",i.textContent="Clear",e.appendChild(t),e.appendChild(i);const o=document.createElement("div");o.classList.add("checkboxes"),o.id="geneRadio";const a=document.createElement("div");return a.classList.add("notfound","alert","alert-danger","alert-dismissible","fade","show"),a.id="geneNotFound",a.textContent="No genes of that name found.",r.appendChild(e),r.appendChild(o),r.appendChild(a),r}function bw(){const r=document.createElement("div");r.classList.add("icon");const e=hp("toggleZoomIn","zoomInBox","M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z"),t=io("zoomInBox","Click to zoom in."),i=hp("toggleZoomOut","zoomOutBox","M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM7.10052 10V12H15.1005V10L7.10052 10Z"),o=io("zoomOutBox","Click to zoom out."),a=Bc("togglePointSize","pointSizeBox","M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z","M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z"),u=io("pointSizeBox","Click to change point size."),c=Bc("toggleGenePercentile","genePercentileBox","M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z","M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z"),f=io("genePercentileBox","Click to change the gene percentile."),d=Bc("toggleDownload","downloadBox","M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z","M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z"),p=io("downloadBox","Click to download an image of the projection and umap.");return r.appendChild(e),r.appendChild(t),r.appendChild(i),r.appendChild(o),r.appendChild(a),r.appendChild(u),r.appendChild(c),r.appendChild(f),r.appendChild(d),r.appendChild(p),r}function io(r,e){const t=document.createElement("div");return t.classList.add("descBox"),t.id=r,t.textContent=e,t.style.display="none",t}function hp(r,e,t){const i=document.createElement("button");i.setAttribute("type","button"),i.setAttribute("data-target",e),i.classList.add("iconBtn","btn"),i.id=r;const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("width","24"),o.setAttribute("height","24"),o.setAttribute("viewBox","0 0 24 24"),o.setAttribute("fill","none");const a=document.createElementNS("http://www.w3.org/2000/svg","path");return a.setAttribute("fill-rule","evenodd"),a.setAttribute("clip-rule","evenodd"),a.setAttribute("d",t),a.setAttribute("fill","currentColor"),o.appendChild(a),i.appendChild(o),i}function Bc(r,e,t,i){const o=document.createElement("button");o.setAttribute("type","button"),o.setAttribute("data-target",e),o.classList.add("iconBtn","btn"),o.id=r;const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("width","24"),a.setAttribute("height","24"),a.setAttribute("viewBox","0 0 24 24"),a.setAttribute("fill","none");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("fill-rule","evenodd"),u.setAttribute("clip-rule","evenodd"),u.setAttribute("d",t),u.setAttribute("fill","currentColor");const c=document.createElementNS("http://www.w3.org/2000/svg","path");return c.setAttribute("fill-rule","evenodd"),c.setAttribute("clip-rule","evenodd"),c.setAttribute("d",i),c.setAttribute("fill","currentColor"),a.appendChild(u),a.appendChild(c),o.appendChild(a),o}function Tw(){const r=document.createElement("div");r.id="loadingIndicator";const e=document.createElement("ul");e.setAttribute("helix","");for(let t=0;t<10;t++){const i=document.createElement("li");for(let a=0;a<2;a++){const u=document.createElement("div");i.appendChild(u)}const o=document.createElement("span");i.appendChild(o),e.appendChild(i)}return r.appendChild(e),r}const Aw=r=>{const e=document.getElementById("dropdownMenuButton");K1(r),e.innerHTML=wt.value.prefix};function ww(){const r=document.createElement("li");r.className="nav-item";const e=document.createElement("div");e.className="dropdown";const t=document.createElement("button");t.className="btn btn-secondary dropdown-toggle",t.type="button",t.id="dropdownMenuButton",t.dataset.bsToggle="dropdown",t.setAttribute("aria-expanded","false"),t.innerHTML=wt.value.prefix;const i=document.createElement("ul");return i.className="dropdown-menu",i.setAttribute("aria-labelledby","dropdownMenuButton"),i.appendChild(zc("#50pe","50pe")),i.appendChild(zc("#75pe","75pe")),i.appendChild(zc("#6s","6s")),e.appendChild(t),e.appendChild(i),r.appendChild(e),r}function zc(r,e){const t=document.createElement("li"),i=document.createElement("a");return i.className="dropdown-item",i.href=r,i.innerHTML=e,i.onclick=()=>{Aw(e)},t.appendChild(i),t}function Cw(){const r=document.createElement("div");r.classList.add("dropdown","dropdown-center"),r.id="filter-container";const e=document.createElement("button");e.classList.add("btn","btn-secondary","dropdown-toggle"),e.type="button",e.dataset.bsToggle="dropdown",e.setAttribute("aria-expanded","false"),e.textContent="Show Gene / Celltype Filters";const t=document.createElement("ul");t.classList.add("dropdown-menu","list");const i=document.createElement("div"),o=document.createElement("b");o.textContent="Celltype Filters: ";const a=document.createElement("div");a.classList.add("listFilters"),a.id="cellFilters",a.textContent="No celltype filters selected",i.appendChild(o),i.appendChild(a);const u=document.createElement("hr"),c=document.createElement("div"),f=document.createElement("b");f.textContent="Gene Filter: ";const d=document.createElement("p");return d.classList.add("listFilters"),d.id="geneFilters",d.textContent="No gene filters selected",c.appendChild(f),c.appendChild(d),t.appendChild(i),t.appendChild(u),t.appendChild(c),r.appendChild(e),r.appendChild(t),r}function Rw(){const r=document.createElement("nav");r.className="navbar navbar-expand-lg navbar-dark bg-dark";const e=document.createElement("div");return e.className="container-fluid nav-container",e.appendChild(Lw()),e.appendChild(Cw()),e.appendChild(Pw()),r.appendChild(e),r}function Lw(){const r=document.createElement("div");r.id="title";const e=document.createElement("a");e.className="navbar-brand",e.href="/#",e.innerHTML="<b>FISHEYES</b>";const t=document.createElement("p");return t.innerHTML="by <i>Bintu Lab</i>, data by <i>Schier Lab</i>",r.appendChild(e),r.appendChild(t),r}function Pw(){const r=document.createElement("div");r.className="collapse navbar-collapse",r.id="navbarNav";const e=document.createElement("ul");return e.className="navbar-nav ml-auto",e.appendChild(ww()),e.appendChild(Dw()),e.appendChild(Iw()),r.appendChild(e),r}function Dw(){const r=document.createElement("li");r.className="nav-item";const e=document.createElement("a");return e.className="nav-link active",e.href="#",e.innerHTML="Upload",r.appendChild(e),r}function Iw(){const r=document.createElement("li");r.className="nav-item";const e=document.createElement("a");return e.className="nav-link",e.id="loginPageButton",e.href="login",e.innerHTML="Login",r.appendChild(e),r}function im(){const r=document.createElement("div");r.id="overlay",r.className="overlay";const e=document.createElement("div");e.className="top-controls";const t=document.createElement("button");t.id="dragButton",t.textContent="Drag",t.className="btn btn-primary";const i=document.createElement("div");i.id="resizeHandle",i.className="resize-handle",e.appendChild(t),e.appendChild(i),r.appendChild(e);let o=!1,a=0,u=0;t.addEventListener("mousedown",D=>{o=!0,a=D.offsetX,u=D.offsetY}),document.addEventListener("mousemove",D=>{o&&(r.style.left=`${D.clientX-a}px`,r.style.top=`${D.clientY-u}px`)}),document.addEventListener("mouseup",()=>{o=!1}),i.addEventListener("mousedown",c);function c(D){window.addEventListener("mousemove",f),window.addEventListener("mouseup",d),D.preventDefault()}function f(D){const C=r.offsetWidth+(r.offsetLeft-D.clientX),I=r.offsetHeight+(r.offsetTop-D.clientY),V=100,B=100;r.style.width=`${Math.max(C,V)}px`,r.style.height=`${Math.max(I,B)}px`,r.style.left=`${D.clientX}px`,r.style.top=`${D.clientY}px`,v.aspect=C/I,v.updateProjectionMatrix(),M.setSize(C,I)}function d(){window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",d)}const p=document.createElement("div");p.id="overlayScene",p.style.width="100%",p.style.height="100%",r.appendChild(p);const _=em.value.scene,v=new Bn(75,p.offsetWidth/p.offsetHeight,.1,1e3),M=new lu,b=window.innerWidth*.25,A=window.innerHeight*.5;M.setSize(b,A),console.log("halo"),v.aspect=b/A,v.updateProjectionMatrix(),M.render(_,v),p.appendChild(M.domElement),v.position.x=1e4,v.position.z=150;const m=new nm(v,M.domElement);m.enableRotate=!1,m.mouseButtons={LEFT:Zn.PAN,MIDDLE:Zn.DOLLY,RIGHT:Zn.ROTATE},v.lookAt(1e4,0,10),m.target.set(1e4,0,10),m.update(),M.render(_,v);function g(){requestAnimationFrame(g),M.render(_,v)}return g(),r}document.body.appendChild(im());window.addEventListener("hashchange",()=>{window.location.reload()});document.addEventListener("DOMContentLoaded",async()=>{const r=Rw();im();const e=Tw(),t=Sw();document.body.insertBefore(r,document.body.firstChild),document.body.appendChild(e),document.body.appendChild(t),vw(),xw(),Mw(),vs(!0);try{await mw(),console.log(wt.value.pallete),await _w(),await gw(),console.log(wt.value.genes),Ba(wt.value.listPalette),iw(),ew(),za(wt.value.genes),hw(),cw();const i=document.body;new pw(i)}catch(i){console.error("Failed to load data:",i)}finally{vs(!1)}});
