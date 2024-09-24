var EE=Object.defineProperty;var ME=(i,e,t)=>e in i?EE(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Ad=(i,e,t)=>(ME(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ku="162",ps={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bE=0,wd=1,TE=2,Mm=1,AE=2,Wi=3,_r=0,In=1,Mi=2,pr=0,Bs=1,Cd=2,Rd=3,Pd=4,wE=5,Or=100,CE=101,RE=102,Ld=103,Id=104,PE=200,LE=201,IE=202,DE=203,Pu=204,Lu=205,UE=206,NE=207,OE=208,FE=209,BE=210,zE=211,GE=212,kE=213,HE=214,VE=0,WE=1,XE=2,fl=3,qE=4,YE=5,$E=6,ZE=7,bm=0,KE=1,JE=2,mr=0,jE=1,QE=2,eM=3,tM=4,nM=5,iM=6,rM=7,Tm=300,Hs=301,Vs=302,Iu=303,Du=304,Ml=306,Uu=1e3,hi=1001,Nu=1002,fn=1003,Dd=1004,_o=1005,bn=1006,Hc=1007,Br=1008,sM=1008,gr=1009,oM=1010,aM=1011,Ju=1012,Am=1013,dr=1014,bi=1015,Lo=1016,wm=1017,Cm=1018,zr=1020,lM=1021,di=1023,cM=1024,uM=1025,Gr=1026,Ws=1027,Rm=1028,Pm=1029,fM=1030,Lm=1031,Im=1033,Vc=33776,Wc=33777,Xc=33778,qc=33779,Ud=35840,Nd=35841,Od=35842,Fd=35843,Dm=36196,Bd=37492,zd=37496,Gd=37808,kd=37809,Hd=37810,Vd=37811,Wd=37812,Xd=37813,qd=37814,Yd=37815,$d=37816,Zd=37817,Kd=37818,Jd=37819,jd=37820,Qd=37821,Yc=36492,ep=36494,tp=36495,hM=36283,np=36284,ip=36285,rp=36286,dM=3200,pM=3201,mM=0,gM=1,hr="",fi="srgb",xr="srgb-linear",ju="display-p3",bl="display-p3-linear",hl="linear",Gt="srgb",dl="rec709",pl="p3",gs=7680,sp=519,_M=512,vM=513,xM=514,Um=515,yM=516,SM=517,EM=518,MM=519,op=35044,ap="300 es",Ou=1035,Xi=2e3,ml=2001;class Xr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lp=1234567;const wo=Math.PI/180,Io=180/Math.PI;function qr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function ln(i,e,t){return Math.max(e,Math.min(t,i))}function Qu(i,e){return(i%e+e)%e}function bM(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function TM(i,e,t){return i!==e?(t-i)/(e-i):0}function Co(i,e,t){return(1-t)*i+t*e}function AM(i,e,t,n){return Co(i,e,1-Math.exp(-t*n))}function wM(i,e=1){return e-Math.abs(Qu(i,e*2)-e)}function CM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function RM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function PM(i,e){return i+Math.floor(Math.random()*(e-i+1))}function LM(i,e){return i+Math.random()*(e-i)}function IM(i){return i*(.5-Math.random())}function DM(i){i!==void 0&&(lp=i);let e=lp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function UM(i){return i*wo}function NM(i){return i*Io}function Fu(i){return(i&i-1)===0&&i!==0}function OM(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function FM(i,e,t,n,s){const a=Math.cos,c=Math.sin,l=a(t/2),f=c(t/2),h=a((e+n)/2),d=c((e+n)/2),p=a((e-n)/2),v=c((e-n)/2),x=a((n-e)/2),S=c((n-e)/2);switch(s){case"XYX":i.set(l*d,f*p,f*v,l*h);break;case"YZY":i.set(f*v,l*d,f*p,l*h);break;case"ZXZ":i.set(f*p,f*v,l*d,l*h);break;case"XZX":i.set(l*d,f*S,f*x,l*h);break;case"YXY":i.set(f*x,l*d,f*S,l*h);break;case"ZYZ":i.set(f*S,f*x,l*d,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ds(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function En(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const BM={DEG2RAD:wo,RAD2DEG:Io,generateUUID:qr,clamp:ln,euclideanModulo:Qu,mapLinear:bM,inverseLerp:TM,lerp:Co,damp:AM,pingpong:wM,smoothstep:CM,smootherstep:RM,randInt:PM,randFloat:LM,randFloatSpread:IM,seededRandom:DM,degToRad:UM,radToDeg:NM,isPowerOfTwo:Fu,ceilPowerOfTwo:OM,floorPowerOfTwo:gl,setQuaternionFromProperEuler:FM,normalize:En,denormalize:Ds};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*s+e.x,this.y=a*s+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,n,s,a,c,l,f,h){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,l,f,h)}set(e,t,n,s,a,c,l,f,h){const d=this.elements;return d[0]=e,d[1]=s,d[2]=l,d[3]=t,d[4]=a,d[5]=f,d[6]=n,d[7]=c,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,c=n[0],l=n[3],f=n[6],h=n[1],d=n[4],p=n[7],v=n[2],x=n[5],S=n[8],E=s[0],m=s[3],g=s[6],P=s[1],y=s[4],A=s[7],k=s[2],G=s[5],U=s[8];return a[0]=c*E+l*P+f*k,a[3]=c*m+l*y+f*G,a[6]=c*g+l*A+f*U,a[1]=h*E+d*P+p*k,a[4]=h*m+d*y+p*G,a[7]=h*g+d*A+p*U,a[2]=v*E+x*P+S*k,a[5]=v*m+x*y+S*G,a[8]=v*g+x*A+S*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],l=e[5],f=e[6],h=e[7],d=e[8];return t*c*d-t*l*h-n*a*d+n*l*f+s*a*h-s*c*f}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],l=e[5],f=e[6],h=e[7],d=e[8],p=d*c-l*h,v=l*f-d*a,x=h*a-c*f,S=t*p+n*v+s*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=p*E,e[1]=(s*h-d*n)*E,e[2]=(l*n-s*c)*E,e[3]=v*E,e[4]=(d*t-s*f)*E,e[5]=(s*a-l*t)*E,e[6]=x*E,e[7]=(n*f-h*t)*E,e[8]=(c*t-n*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,c,l){const f=Math.cos(a),h=Math.sin(a);return this.set(n*f,n*h,-n*(f*c+h*l)+c+e,-s*h,s*f,-s*(-h*c+f*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply($c.makeScale(e,t)),this}rotate(e){return this.premultiply($c.makeRotation(-e)),this}translate(e,t){return this.premultiply($c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $c=new lt;function Nm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Do(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zM(){const i=Do("canvas");return i.style.display="block",i}const cp={};function GM(i){i in cp||(cp[i]=!0,console.warn(i))}const up=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fp=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pa={[xr]:{transfer:hl,primaries:dl,toReference:i=>i,fromReference:i=>i},[fi]:{transfer:Gt,primaries:dl,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[bl]:{transfer:hl,primaries:pl,toReference:i=>i.applyMatrix3(fp),fromReference:i=>i.applyMatrix3(up)},[ju]:{transfer:Gt,primaries:pl,toReference:i=>i.convertSRGBToLinear().applyMatrix3(fp),fromReference:i=>i.applyMatrix3(up).convertLinearToSRGB()}},kM=new Set([xr,bl]),Ut={enabled:!0,_workingColorSpace:xr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!kM.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Pa[e].toReference,s=Pa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Pa[i].primaries},getTransfer:function(i){return i===hr?hl:Pa[i].transfer}};function zs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _s;class Om{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_s===void 0&&(_s=Do("canvas")),_s.width=e.width,_s.height=e.height;const n=_s.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Do("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=zs(a[c]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zs(t[n]/255)*255):t[n]=zs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HM=0;class Fm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=qr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,l=s.length;c<l;c++)s[c].isDataTexture?a.push(Kc(s[c].image)):a.push(Kc(s[c]))}else a=Kc(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function Kc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Om.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VM=0;class vn extends Xr{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,n=hi,s=hi,a=bn,c=Br,l=di,f=gr,h=vn.DEFAULT_ANISOTROPY,d=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=qr(),this.name="",this.source=new Fm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=f,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Uu:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case Nu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Uu:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case Nu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Tm;vn.DEFAULT_ANISOTROPY=1;class hn{constructor(e=0,t=0,n=0,s=1){hn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*s+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const f=e.elements,h=f[0],d=f[4],p=f[8],v=f[1],x=f[5],S=f[9],E=f[2],m=f[6],g=f[10];if(Math.abs(d-v)<.01&&Math.abs(p-E)<.01&&Math.abs(S-m)<.01){if(Math.abs(d+v)<.1&&Math.abs(p+E)<.1&&Math.abs(S+m)<.1&&Math.abs(h+x+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(h+1)/2,A=(x+1)/2,k=(g+1)/2,G=(d+v)/4,U=(p+E)/4,W=(S+m)/4;return y>A&&y>k?y<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(y),s=G/n,a=U/n):A>k?A<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(A),n=G/s,a=W/s):k<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(k),n=U/a,s=W/a),this.set(n,s,a,t),this}let P=Math.sqrt((m-S)*(m-S)+(p-E)*(p-E)+(v-d)*(v-d));return Math.abs(P)<.001&&(P=1),this.x=(m-S)/P,this.y=(p-E)/P,this.z=(v-d)/P,this.w=Math.acos((h+x+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WM extends Xr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const a=new vn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let l=0;l<c;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends WM{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bm extends vn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class XM extends vn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,c,l){let f=n[s+0],h=n[s+1],d=n[s+2],p=n[s+3];const v=a[c+0],x=a[c+1],S=a[c+2],E=a[c+3];if(l===0){e[t+0]=f,e[t+1]=h,e[t+2]=d,e[t+3]=p;return}if(l===1){e[t+0]=v,e[t+1]=x,e[t+2]=S,e[t+3]=E;return}if(p!==E||f!==v||h!==x||d!==S){let m=1-l;const g=f*v+h*x+d*S+p*E,P=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const k=Math.sqrt(y),G=Math.atan2(k,g*P);m=Math.sin(m*G)/k,l=Math.sin(l*G)/k}const A=l*P;if(f=f*m+v*A,h=h*m+x*A,d=d*m+S*A,p=p*m+E*A,m===1-l){const k=1/Math.sqrt(f*f+h*h+d*d+p*p);f*=k,h*=k,d*=k,p*=k}}e[t]=f,e[t+1]=h,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,a,c){const l=n[s],f=n[s+1],h=n[s+2],d=n[s+3],p=a[c],v=a[c+1],x=a[c+2],S=a[c+3];return e[t]=l*S+d*p+f*x-h*v,e[t+1]=f*S+d*v+h*p-l*x,e[t+2]=h*S+d*x+l*v-f*p,e[t+3]=d*S-l*p-f*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,c=e._order,l=Math.cos,f=Math.sin,h=l(n/2),d=l(s/2),p=l(a/2),v=f(n/2),x=f(s/2),S=f(a/2);switch(c){case"XYZ":this._x=v*d*p+h*x*S,this._y=h*x*p-v*d*S,this._z=h*d*S+v*x*p,this._w=h*d*p-v*x*S;break;case"YXZ":this._x=v*d*p+h*x*S,this._y=h*x*p-v*d*S,this._z=h*d*S-v*x*p,this._w=h*d*p+v*x*S;break;case"ZXY":this._x=v*d*p-h*x*S,this._y=h*x*p+v*d*S,this._z=h*d*S+v*x*p,this._w=h*d*p-v*x*S;break;case"ZYX":this._x=v*d*p-h*x*S,this._y=h*x*p+v*d*S,this._z=h*d*S-v*x*p,this._w=h*d*p+v*x*S;break;case"YZX":this._x=v*d*p+h*x*S,this._y=h*x*p+v*d*S,this._z=h*d*S-v*x*p,this._w=h*d*p-v*x*S;break;case"XZY":this._x=v*d*p-h*x*S,this._y=h*x*p-v*d*S,this._z=h*d*S+v*x*p,this._w=h*d*p+v*x*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],c=t[1],l=t[5],f=t[9],h=t[2],d=t[6],p=t[10],v=n+l+p;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(d-f)*x,this._y=(a-h)*x,this._z=(c-s)*x}else if(n>l&&n>p){const x=2*Math.sqrt(1+n-l-p);this._w=(d-f)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(a+h)/x}else if(l>p){const x=2*Math.sqrt(1+l-n-p);this._w=(a-h)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(f+d)/x}else{const x=2*Math.sqrt(1+p-n-l);this._w=(c-s)/x,this._x=(a+h)/x,this._y=(f+d)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,c=e._w,l=t._x,f=t._y,h=t._z,d=t._w;return this._x=n*d+c*l+s*h-a*f,this._y=s*d+c*f+a*l-n*h,this._z=a*d+c*h+n*f-s*l,this._w=c*d-n*l-s*f-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,c=this._w;let l=c*e._w+n*e._x+s*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=s,this._z=a,this;const f=1-l*l;if(f<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*n+t*this._x,this._y=x*s+t*this._y,this._z=x*a+t*this._z,this.normalize(),this}const h=Math.sqrt(f),d=Math.atan2(h,l),p=Math.sin((1-t)*d)/h,v=Math.sin(t*d)/h;return this._w=c*p+this._w*v,this._x=n*p+this._x*v,this._y=s*p+this._y*v,this._z=a*p+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,n=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,c=e.y,l=e.z,f=e.w,h=2*(c*s-l*n),d=2*(l*t-a*s),p=2*(a*n-c*t);return this.x=t+f*h+c*p-l*d,this.y=n+f*d+l*h-a*p,this.z=s+f*p+a*d-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,c=t.x,l=t.y,f=t.z;return this.x=s*f-a*l,this.y=a*c-n*f,this.z=n*l-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jc=new Q,hp=new Hr;class Yr{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=a.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,ai):ai.fromBufferAttribute(a,c),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),La.copy(n.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),Ia.subVectors(this.max,vo),vs.subVectors(e.a,vo),xs.subVectors(e.b,vo),ys.subVectors(e.c,vo),ir.subVectors(xs,vs),rr.subVectors(ys,xs),Rr.subVectors(vs,ys);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Rr.z,Rr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Rr.z,0,-Rr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Rr.y,Rr.x,0];return!jc(t,vs,xs,ys,Ia)||(t=[1,0,0,0,1,0,0,0,1],!jc(t,vs,xs,ys,Ia))?!1:(Da.crossVectors(ir,rr),t=[Da.x,Da.y,Da.z],jc(t,vs,xs,ys,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ai=new Q,La=new Yr,vs=new Q,xs=new Q,ys=new Q,ir=new Q,rr=new Q,Rr=new Q,vo=new Q,Ia=new Q,Da=new Q,Pr=new Q;function jc(i,e,t,n,s){for(let a=0,c=i.length-3;a<=c;a+=3){Pr.fromArray(i,a);const l=s.x*Math.abs(Pr.x)+s.y*Math.abs(Pr.y)+s.z*Math.abs(Pr.z),f=e.dot(Pr),h=t.dot(Pr),d=n.dot(Pr);if(Math.max(-Math.max(f,h,d),Math.min(f,h,d))>l)return!1}return!0}const qM=new Yr,xo=new Q,Qc=new Q;class Fo{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qM.setFromPoints(e).getCenter(n);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);const t=xo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(Qc)),this.expandByPoint(xo.copy(e.center).sub(Qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new Q,eu=new Q,Ua=new Q,sr=new Q,tu=new Q,Na=new Q,nu=new Q;class zm{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){eu.copy(e).add(t).multiplyScalar(.5),Ua.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(eu);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Ua),l=sr.dot(this.direction),f=-sr.dot(Ua),h=sr.lengthSq(),d=Math.abs(1-c*c);let p,v,x,S;if(d>0)if(p=c*f-l,v=c*l-f,S=a*d,p>=0)if(v>=-S)if(v<=S){const E=1/d;p*=E,v*=E,x=p*(p+c*v+2*l)+v*(c*p+v+2*f)+h}else v=a,p=Math.max(0,-(c*v+l)),x=-p*p+v*(v+2*f)+h;else v=-a,p=Math.max(0,-(c*v+l)),x=-p*p+v*(v+2*f)+h;else v<=-S?(p=Math.max(0,-(-c*a+l)),v=p>0?-a:Math.min(Math.max(-a,-f),a),x=-p*p+v*(v+2*f)+h):v<=S?(p=0,v=Math.min(Math.max(-a,-f),a),x=v*(v+2*f)+h):(p=Math.max(0,-(c*a+l)),v=p>0?a:Math.min(Math.max(-a,-f),a),x=-p*p+v*(v+2*f)+h);else v=c>0?-a:a,p=Math.max(0,-(c*v+l)),x=-p*p+v*(v+2*f)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(eu).addScaledVector(Ua,v),x}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const n=zi.dot(this.direction),s=zi.dot(zi)-n*n,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),l=n-c,f=n+c;return f<0?null:l<0?this.at(f,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,c,l,f;const h=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,v=this.origin;return h>=0?(n=(e.min.x-v.x)*h,s=(e.max.x-v.x)*h):(n=(e.max.x-v.x)*h,s=(e.min.x-v.x)*h),d>=0?(a=(e.min.y-v.y)*d,c=(e.max.y-v.y)*d):(a=(e.max.y-v.y)*d,c=(e.min.y-v.y)*d),n>c||a>s||((a>n||isNaN(n))&&(n=a),(c<s||isNaN(s))&&(s=c),p>=0?(l=(e.min.z-v.z)*p,f=(e.max.z-v.z)*p):(l=(e.max.z-v.z)*p,f=(e.min.z-v.z)*p),n>f||l>s)||((l>n||n!==n)&&(n=l),(f<s||s!==s)&&(s=f),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,n,s,a){tu.subVectors(t,e),Na.subVectors(n,e),nu.crossVectors(tu,Na);let c=this.direction.dot(nu),l;if(c>0){if(s)return null;l=1}else if(c<0)l=-1,c=-c;else return null;sr.subVectors(this.origin,e);const f=l*this.direction.dot(Na.crossVectors(sr,Na));if(f<0)return null;const h=l*this.direction.dot(tu.cross(sr));if(h<0||f+h>c)return null;const d=-l*sr.dot(nu);return d<0?null:this.at(d/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,n,s,a,c,l,f,h,d,p,v,x,S,E,m){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,l,f,h,d,p,v,x,S,E,m)}set(e,t,n,s,a,c,l,f,h,d,p,v,x,S,E,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=a,g[5]=c,g[9]=l,g[13]=f,g[2]=h,g[6]=d,g[10]=p,g[14]=v,g[3]=x,g[7]=S,g[11]=E,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ss.setFromMatrixColumn(e,0).length(),a=1/Ss.setFromMatrixColumn(e,1).length(),c=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,c=Math.cos(n),l=Math.sin(n),f=Math.cos(s),h=Math.sin(s),d=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const v=c*d,x=c*p,S=l*d,E=l*p;t[0]=f*d,t[4]=-f*p,t[8]=h,t[1]=x+S*h,t[5]=v-E*h,t[9]=-l*f,t[2]=E-v*h,t[6]=S+x*h,t[10]=c*f}else if(e.order==="YXZ"){const v=f*d,x=f*p,S=h*d,E=h*p;t[0]=v+E*l,t[4]=S*l-x,t[8]=c*h,t[1]=c*p,t[5]=c*d,t[9]=-l,t[2]=x*l-S,t[6]=E+v*l,t[10]=c*f}else if(e.order==="ZXY"){const v=f*d,x=f*p,S=h*d,E=h*p;t[0]=v-E*l,t[4]=-c*p,t[8]=S+x*l,t[1]=x+S*l,t[5]=c*d,t[9]=E-v*l,t[2]=-c*h,t[6]=l,t[10]=c*f}else if(e.order==="ZYX"){const v=c*d,x=c*p,S=l*d,E=l*p;t[0]=f*d,t[4]=S*h-x,t[8]=v*h+E,t[1]=f*p,t[5]=E*h+v,t[9]=x*h-S,t[2]=-h,t[6]=l*f,t[10]=c*f}else if(e.order==="YZX"){const v=c*f,x=c*h,S=l*f,E=l*h;t[0]=f*d,t[4]=E-v*p,t[8]=S*p+x,t[1]=p,t[5]=c*d,t[9]=-l*d,t[2]=-h*d,t[6]=x*p+S,t[10]=v-E*p}else if(e.order==="XZY"){const v=c*f,x=c*h,S=l*f,E=l*h;t[0]=f*d,t[4]=-p,t[8]=h*d,t[1]=v*p+E,t[5]=c*d,t[9]=x*p-S,t[2]=S*p-x,t[6]=l*d,t[10]=E*p+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YM,e,$M)}lookAt(e,t,n){const s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),or.crossVectors(n,zn),or.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),or.crossVectors(n,zn)),or.normalize(),Oa.crossVectors(zn,or),s[0]=or.x,s[4]=Oa.x,s[8]=zn.x,s[1]=or.y,s[5]=Oa.y,s[9]=zn.y,s[2]=or.z,s[6]=Oa.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,c=n[0],l=n[4],f=n[8],h=n[12],d=n[1],p=n[5],v=n[9],x=n[13],S=n[2],E=n[6],m=n[10],g=n[14],P=n[3],y=n[7],A=n[11],k=n[15],G=s[0],U=s[4],W=s[8],fe=s[12],b=s[1],O=s[5],pe=s[9],Te=s[13],Y=s[2],xe=s[6],oe=s[10],ae=s[14],K=s[3],Ee=s[7],Me=s[11],Re=s[15];return a[0]=c*G+l*b+f*Y+h*K,a[4]=c*U+l*O+f*xe+h*Ee,a[8]=c*W+l*pe+f*oe+h*Me,a[12]=c*fe+l*Te+f*ae+h*Re,a[1]=d*G+p*b+v*Y+x*K,a[5]=d*U+p*O+v*xe+x*Ee,a[9]=d*W+p*pe+v*oe+x*Me,a[13]=d*fe+p*Te+v*ae+x*Re,a[2]=S*G+E*b+m*Y+g*K,a[6]=S*U+E*O+m*xe+g*Ee,a[10]=S*W+E*pe+m*oe+g*Me,a[14]=S*fe+E*Te+m*ae+g*Re,a[3]=P*G+y*b+A*Y+k*K,a[7]=P*U+y*O+A*xe+k*Ee,a[11]=P*W+y*pe+A*oe+k*Me,a[15]=P*fe+y*Te+A*ae+k*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],c=e[1],l=e[5],f=e[9],h=e[13],d=e[2],p=e[6],v=e[10],x=e[14],S=e[3],E=e[7],m=e[11],g=e[15];return S*(+a*f*p-s*h*p-a*l*v+n*h*v+s*l*x-n*f*x)+E*(+t*f*x-t*h*v+a*c*v-s*c*x+s*h*d-a*f*d)+m*(+t*h*p-t*l*x-a*c*p+n*c*x+a*l*d-n*h*d)+g*(-s*l*d-t*f*p+t*l*v+s*c*p-n*c*v+n*f*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],l=e[5],f=e[6],h=e[7],d=e[8],p=e[9],v=e[10],x=e[11],S=e[12],E=e[13],m=e[14],g=e[15],P=p*m*h-E*v*h+E*f*x-l*m*x-p*f*g+l*v*g,y=S*v*h-d*m*h-S*f*x+c*m*x+d*f*g-c*v*g,A=d*E*h-S*p*h+S*l*x-c*E*x-d*l*g+c*p*g,k=S*p*f-d*E*f-S*l*v+c*E*v+d*l*m-c*p*m,G=t*P+n*y+s*A+a*k;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/G;return e[0]=P*U,e[1]=(E*v*a-p*m*a-E*s*x+n*m*x+p*s*g-n*v*g)*U,e[2]=(l*m*a-E*f*a+E*s*h-n*m*h-l*s*g+n*f*g)*U,e[3]=(p*f*a-l*v*a-p*s*h+n*v*h+l*s*x-n*f*x)*U,e[4]=y*U,e[5]=(d*m*a-S*v*a+S*s*x-t*m*x-d*s*g+t*v*g)*U,e[6]=(S*f*a-c*m*a-S*s*h+t*m*h+c*s*g-t*f*g)*U,e[7]=(c*v*a-d*f*a+d*s*h-t*v*h-c*s*x+t*f*x)*U,e[8]=A*U,e[9]=(S*p*a-d*E*a-S*n*x+t*E*x+d*n*g-t*p*g)*U,e[10]=(c*E*a-S*l*a+S*n*h-t*E*h-c*n*g+t*l*g)*U,e[11]=(d*l*a-c*p*a-d*n*h+t*p*h+c*n*x-t*l*x)*U,e[12]=k*U,e[13]=(d*E*s-S*p*s+S*n*v-t*E*v-d*n*m+t*p*m)*U,e[14]=(S*l*s-c*E*s-S*n*f+t*E*f+c*n*m-t*l*m)*U,e[15]=(c*p*s-d*l*s+d*n*f-t*p*f-c*n*v+t*l*v)*U,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,c=e.x,l=e.y,f=e.z,h=a*c,d=a*l;return this.set(h*c+n,h*l-s*f,h*f+s*l,0,h*l+s*f,d*l+n,d*f-s*c,0,h*f-s*l,d*f+s*c,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,c){return this.set(1,n,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,c=t._y,l=t._z,f=t._w,h=a+a,d=c+c,p=l+l,v=a*h,x=a*d,S=a*p,E=c*d,m=c*p,g=l*p,P=f*h,y=f*d,A=f*p,k=n.x,G=n.y,U=n.z;return s[0]=(1-(E+g))*k,s[1]=(x+A)*k,s[2]=(S-y)*k,s[3]=0,s[4]=(x-A)*G,s[5]=(1-(v+g))*G,s[6]=(m+P)*G,s[7]=0,s[8]=(S+y)*U,s[9]=(m-P)*U,s[10]=(1-(v+E))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=Ss.set(s[0],s[1],s[2]).length();const c=Ss.set(s[4],s[5],s[6]).length(),l=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],li.copy(this);const h=1/a,d=1/c,p=1/l;return li.elements[0]*=h,li.elements[1]*=h,li.elements[2]*=h,li.elements[4]*=d,li.elements[5]*=d,li.elements[6]*=d,li.elements[8]*=p,li.elements[9]*=p,li.elements[10]*=p,t.setFromRotationMatrix(li),n.x=a,n.y=c,n.z=l,this}makePerspective(e,t,n,s,a,c,l=Xi){const f=this.elements,h=2*a/(t-e),d=2*a/(n-s),p=(t+e)/(t-e),v=(n+s)/(n-s);let x,S;if(l===Xi)x=-(c+a)/(c-a),S=-2*c*a/(c-a);else if(l===ml)x=-c/(c-a),S=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return f[0]=h,f[4]=0,f[8]=p,f[12]=0,f[1]=0,f[5]=d,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=S,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,s,a,c,l=Xi){const f=this.elements,h=1/(t-e),d=1/(n-s),p=1/(c-a),v=(t+e)*h,x=(n+s)*d;let S,E;if(l===Xi)S=(c+a)*p,E=-2*p;else if(l===ml)S=a*p,E=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*d,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=E,f[14]=-S,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ss=new Q,li=new qt,YM=new Q(0,0,0),$M=new Q(1,1,1),or=new Q,Oa=new Q,zn=new Q,dp=new qt,pp=new Hr;class qi{constructor(e=0,t=0,n=0,s=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],c=s[4],l=s[8],f=s[1],h=s[5],d=s[9],p=s[2],v=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,x),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(ln(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-p,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-ln(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(ln(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(l,x));break;case"XZY":this._z=Math.asin(-ln(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-d,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pp.setFromEuler(this),this.setFromQuaternion(pp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class Gm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZM=0;const mp=new Q,Es=new Hr,Gi=new qt,Fa=new Q,yo=new Q,KM=new Q,JM=new Hr,gp=new Q(1,0,0),_p=new Q(0,1,0),vp=new Q(0,0,1),jM={type:"added"},QM={type:"removed"},iu={type:"childadded",child:null},ru={type:"childremoved",child:null};class An extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new Q,t=new qi,n=new Hr,s=new Q(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new lt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(gp,e)}rotateY(e){return this.rotateOnAxis(_p,e)}rotateZ(e){return this.rotateOnAxis(vp,e)}translateOnAxis(e,t){return mp.copy(e).applyQuaternion(this.quaternion),this.position.add(mp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gp,e)}translateY(e){return this.translateOnAxis(_p,e)}translateZ(e){return this.translateOnAxis(vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fa.copy(e):Fa.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(yo,Fa,this.up):Gi.lookAt(Fa,yo,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(Gi),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jM),iu.child=e,this.dispatchEvent(iu),iu.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(QM),ru.child=e,this.dispatchEvent(ru),ru.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,e,KM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,JM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++){const l=s[a];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(l,f){return l[f.uuid]===void 0&&(l[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const f=l.shapes;if(Array.isArray(f))for(let h=0,d=f.length;h<d;h++){const p=f[h];a(e.shapes,p)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let f=0,h=this.material.length;f<h;f++)l.push(a(e.materials,this.material[f]));s.material=l}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const f=this.animations[l];s.animations.push(a(e.animations,f))}}if(t){const l=c(e.geometries),f=c(e.materials),h=c(e.textures),d=c(e.images),p=c(e.shapes),v=c(e.skeletons),x=c(e.animations),S=c(e.nodes);l.length>0&&(n.geometries=l),f.length>0&&(n.materials=f),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),v.length>0&&(n.skeletons=v),x.length>0&&(n.animations=x),S.length>0&&(n.nodes=S)}return n.object=s,n;function c(l){const f=[];for(const h in l){const d=l[h];delete d.metadata,f.push(d)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}An.DEFAULT_UP=new Q(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new Q,ki=new Q,su=new Q,Hi=new Q,Ms=new Q,bs=new Q,xp=new Q,ou=new Q,au=new Q,lu=new Q;class Ti{constructor(e=new Q,t=new Q,n=new Q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ci.subVectors(e,t),s.cross(ci);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){ci.subVectors(s,t),ki.subVectors(n,t),su.subVectors(e,t);const c=ci.dot(ci),l=ci.dot(ki),f=ci.dot(su),h=ki.dot(ki),d=ki.dot(su),p=c*h-l*l;if(p===0)return a.set(0,0,0),null;const v=1/p,x=(h*f-l*d)*v,S=(c*d-l*f)*v;return a.set(1-x-S,S,x)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,n,s,a,c,l,f){return this.getBarycoord(e,t,n,s,Hi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Hi.x),f.addScaledVector(c,Hi.y),f.addScaledVector(l,Hi.z),f)}static isFrontFacing(e,t,n,s){return ci.subVectors(n,t),ki.subVectors(e,t),ci.cross(ki).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ci.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return Ti.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let c,l;Ms.subVectors(s,n),bs.subVectors(a,n),ou.subVectors(e,n);const f=Ms.dot(ou),h=bs.dot(ou);if(f<=0&&h<=0)return t.copy(n);au.subVectors(e,s);const d=Ms.dot(au),p=bs.dot(au);if(d>=0&&p<=d)return t.copy(s);const v=f*p-d*h;if(v<=0&&f>=0&&d<=0)return c=f/(f-d),t.copy(n).addScaledVector(Ms,c);lu.subVectors(e,a);const x=Ms.dot(lu),S=bs.dot(lu);if(S>=0&&x<=S)return t.copy(a);const E=x*h-f*S;if(E<=0&&h>=0&&S<=0)return l=h/(h-S),t.copy(n).addScaledVector(bs,l);const m=d*S-x*p;if(m<=0&&p-d>=0&&x-S>=0)return xp.subVectors(a,s),l=(p-d)/(p-d+(x-S)),t.copy(s).addScaledVector(xp,l);const g=1/(m+E+v);return c=E*g,l=v*g,t.copy(n).addScaledVector(Ms,c).addScaledVector(bs,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function cu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class bt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ut.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ut.workingColorSpace){if(e=Qu(e,1),t=ln(t,0,1),n=ln(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=cu(c,a,e+1/3),this.g=cu(c,a,e),this.b=cu(c,a,e-1/3)}return Ut.toWorkingColorSpace(this,s),this}setStyle(e,t=fi){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],l=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const n=km[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=Zc(e.r),this.g=Zc(e.g),this.b=Zc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return Ut.fromWorkingColorSpace(_n.copy(this),e),Math.round(ln(_n.r*255,0,255))*65536+Math.round(ln(_n.g*255,0,255))*256+Math.round(ln(_n.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.fromWorkingColorSpace(_n.copy(this),t);const n=_n.r,s=_n.g,a=_n.b,c=Math.max(n,s,a),l=Math.min(n,s,a);let f,h;const d=(l+c)/2;if(l===c)f=0,h=0;else{const p=c-l;switch(h=d<=.5?p/(c+l):p/(2-c-l),c){case n:f=(s-a)/p+(s<a?6:0);break;case s:f=(a-n)/p+2;break;case a:f=(n-s)/p+4;break}f/=6}return e.h=f,e.s=h,e.l=d,e}getRGB(e,t=Ut.workingColorSpace){return Ut.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=fi){Ut.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,s=_n.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(Ba);const n=Co(ar.h,Ba.h,t),s=Co(ar.s,Ba.s,t),a=Co(ar.l,Ba.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new bt;bt.NAMES=km;let eb=0;class Tl extends Xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=Bs,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pu,this.blendDst=Lu,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(n.blending=this.blending),this.side!==_r&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pu&&(n.blendSrc=this.blendSrc),this.blendDst!==Lu&&(n.blendDst=this.blendDst),this.blendEquation!==Or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const c=[];for(const l in a){const f=a[l];delete f.metadata,c.push(f)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Us extends Tl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new Q,za=new Ae;class pi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=op,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return GM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)za.fromBufferAttribute(this,t),za.applyMatrix3(e),this.setXY(t,za.x,za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ds(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ds(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ds(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ds(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ds(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),s=En(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),s=En(s,this.array),a=En(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==op&&(e.usage=this.usage),e}}class Hm extends pi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vm extends pi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Jt extends pi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let tb=0;const Kn=new qt,uu=new An,Ts=new Q,Gn=new Yr,So=new Yr,an=new Q;class ei extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nm(e)?Vm:Hm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new lt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return uu.lookAt(e),uu.updateMatrix(),this.applyMatrix4(uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Gn.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const l=t[a];So.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(Gn.min,So.min),Gn.expandByPoint(an),an.addVectors(Gn.max,So.max),Gn.expandByPoint(an)):(Gn.expandByPoint(So.min),Gn.expandByPoint(So.max))}Gn.getCenter(n);let s=0;for(let a=0,c=e.count;a<c;a++)an.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(an));if(t)for(let a=0,c=t.length;a<c;a++){const l=t[a],f=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)an.fromBufferAttribute(l,h),f&&(Ts.fromBufferAttribute(e,h),an.add(Ts)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),l=[],f=[];for(let W=0;W<n.count;W++)l[W]=new Q,f[W]=new Q;const h=new Q,d=new Q,p=new Q,v=new Ae,x=new Ae,S=new Ae,E=new Q,m=new Q;function g(W,fe,b){h.fromBufferAttribute(n,W),d.fromBufferAttribute(n,fe),p.fromBufferAttribute(n,b),v.fromBufferAttribute(a,W),x.fromBufferAttribute(a,fe),S.fromBufferAttribute(a,b),d.sub(h),p.sub(h),x.sub(v),S.sub(v);const O=1/(x.x*S.y-S.x*x.y);isFinite(O)&&(E.copy(d).multiplyScalar(S.y).addScaledVector(p,-x.y).multiplyScalar(O),m.copy(p).multiplyScalar(x.x).addScaledVector(d,-S.x).multiplyScalar(O),l[W].add(E),l[fe].add(E),l[b].add(E),f[W].add(m),f[fe].add(m),f[b].add(m))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let W=0,fe=P.length;W<fe;++W){const b=P[W],O=b.start,pe=b.count;for(let Te=O,Y=O+pe;Te<Y;Te+=3)g(e.getX(Te+0),e.getX(Te+1),e.getX(Te+2))}const y=new Q,A=new Q,k=new Q,G=new Q;function U(W){k.fromBufferAttribute(s,W),G.copy(k);const fe=l[W];y.copy(fe),y.sub(k.multiplyScalar(k.dot(fe))).normalize(),A.crossVectors(G,fe);const O=A.dot(f[W])<0?-1:1;c.setXYZW(W,y.x,y.y,y.z,O)}for(let W=0,fe=P.length;W<fe;++W){const b=P[W],O=b.start,pe=b.count;for(let Te=O,Y=O+pe;Te<Y;Te+=3)U(e.getX(Te+0)),U(e.getX(Te+1)),U(e.getX(Te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,x=n.count;v<x;v++)n.setXYZ(v,0,0,0);const s=new Q,a=new Q,c=new Q,l=new Q,f=new Q,h=new Q,d=new Q,p=new Q;if(e)for(let v=0,x=e.count;v<x;v+=3){const S=e.getX(v+0),E=e.getX(v+1),m=e.getX(v+2);s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,m),d.subVectors(c,a),p.subVectors(s,a),d.cross(p),l.fromBufferAttribute(n,S),f.fromBufferAttribute(n,E),h.fromBufferAttribute(n,m),l.add(d),f.add(d),h.add(d),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(E,f.x,f.y,f.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)s.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),d.subVectors(c,a),p.subVectors(s,a),d.cross(p),n.setXYZ(v+0,d.x,d.y,d.z),n.setXYZ(v+1,d.x,d.y,d.z),n.setXYZ(v+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(l,f){const h=l.array,d=l.itemSize,p=l.normalized,v=new h.constructor(f.length*d);let x=0,S=0;for(let E=0,m=f.length;E<m;E++){l.isInterleavedBufferAttribute?x=f[E]*l.data.stride+l.offset:x=f[E]*d;for(let g=0;g<d;g++)v[S++]=h[x++]}return new pi(v,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,n=this.index.array,s=this.attributes;for(const l in s){const f=s[l],h=e(f,n);t.setAttribute(l,h)}const a=this.morphAttributes;for(const l in a){const f=[],h=a[l];for(let d=0,p=h.length;d<p;d++){const v=h[d],x=e(v,n);f.push(x)}t.morphAttributes[l]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,f=c.length;l<f;l++){const h=c[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const h=n[f];e.data.attributes[f]=h.toJSON(e.data)}const s={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],d=[];for(let p=0,v=h.length;p<v;p++){const x=h[p];d.push(x.toJSON(e.data))}d.length>0&&(s[f]=d,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const h in s){const d=s[h];this.setAttribute(h,d.clone(t))}const a=e.morphAttributes;for(const h in a){const d=[],p=a[h];for(let v=0,x=p.length;v<x;v++)d.push(p[v].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,d=c.length;h<d;h++){const p=c[h];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yp=new qt,Lr=new zm,Ga=new Fo,Sp=new Q,As=new Q,ws=new Q,Cs=new Q,fu=new Q,ka=new Q,Ha=new Ae,Va=new Ae,Wa=new Ae,Ep=new Q,Mp=new Q,bp=new Q,Xa=new Q,qa=new Q;class Tn extends An{constructor(e=new ei,t=new Us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(a&&l){ka.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const d=l[f],p=a[f];d!==0&&(fu.fromBufferAttribute(p,e),c?ka.addScaledVector(fu,d):ka.addScaledVector(fu.sub(t),d))}t.add(ka)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(a),Lr.copy(e.ray).recast(e.near),!(Ga.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Ga,Sp)===null||Lr.origin.distanceToSquared(Sp)>(e.far-e.near)**2))&&(yp.copy(a).invert(),Lr.copy(e.ray).applyMatrix4(yp),!(n.boundingBox!==null&&Lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,n){let s;const a=this.geometry,c=this.material,l=a.index,f=a.attributes.position,h=a.attributes.uv,d=a.attributes.uv1,p=a.attributes.normal,v=a.groups,x=a.drawRange;if(l!==null)if(Array.isArray(c))for(let S=0,E=v.length;S<E;S++){const m=v[S],g=c[m.materialIndex],P=Math.max(m.start,x.start),y=Math.min(l.count,Math.min(m.start+m.count,x.start+x.count));for(let A=P,k=y;A<k;A+=3){const G=l.getX(A),U=l.getX(A+1),W=l.getX(A+2);s=Ya(this,g,e,n,h,d,p,G,U,W),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const S=Math.max(0,x.start),E=Math.min(l.count,x.start+x.count);for(let m=S,g=E;m<g;m+=3){const P=l.getX(m),y=l.getX(m+1),A=l.getX(m+2);s=Ya(this,c,e,n,h,d,p,P,y,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(c))for(let S=0,E=v.length;S<E;S++){const m=v[S],g=c[m.materialIndex],P=Math.max(m.start,x.start),y=Math.min(f.count,Math.min(m.start+m.count,x.start+x.count));for(let A=P,k=y;A<k;A+=3){const G=A,U=A+1,W=A+2;s=Ya(this,g,e,n,h,d,p,G,U,W),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const S=Math.max(0,x.start),E=Math.min(f.count,x.start+x.count);for(let m=S,g=E;m<g;m+=3){const P=m,y=m+1,A=m+2;s=Ya(this,c,e,n,h,d,p,P,y,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function nb(i,e,t,n,s,a,c,l){let f;if(e.side===In?f=n.intersectTriangle(c,a,s,!0,l):f=n.intersectTriangle(s,a,c,e.side===_r,l),f===null)return null;qa.copy(l),qa.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(qa);return h<t.near||h>t.far?null:{distance:h,point:qa.clone(),object:i}}function Ya(i,e,t,n,s,a,c,l,f,h){i.getVertexPosition(l,As),i.getVertexPosition(f,ws),i.getVertexPosition(h,Cs);const d=nb(i,e,t,n,As,ws,Cs,Xa);if(d){s&&(Ha.fromBufferAttribute(s,l),Va.fromBufferAttribute(s,f),Wa.fromBufferAttribute(s,h),d.uv=Ti.getInterpolation(Xa,As,ws,Cs,Ha,Va,Wa,new Ae)),a&&(Ha.fromBufferAttribute(a,l),Va.fromBufferAttribute(a,f),Wa.fromBufferAttribute(a,h),d.uv1=Ti.getInterpolation(Xa,As,ws,Cs,Ha,Va,Wa,new Ae)),c&&(Ep.fromBufferAttribute(c,l),Mp.fromBufferAttribute(c,f),bp.fromBufferAttribute(c,h),d.normal=Ti.getInterpolation(Xa,As,ws,Cs,Ep,Mp,bp,new Q),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:l,b:f,c:h,normal:new Q,materialIndex:0};Ti.getNormal(As,ws,Cs,p.normal),d.face=p}return d}class Bo extends ei{constructor(e=1,t=1,n=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:c};const l=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const f=[],h=[],d=[],p=[];let v=0,x=0;S("z","y","x",-1,-1,n,t,e,c,a,0),S("z","y","x",1,-1,n,t,-e,c,a,1),S("x","z","y",1,1,e,n,t,s,c,2),S("x","z","y",1,-1,e,n,-t,s,c,3),S("x","y","z",1,-1,e,t,n,s,a,4),S("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(f),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(p,2));function S(E,m,g,P,y,A,k,G,U,W,fe){const b=A/U,O=k/W,pe=A/2,Te=k/2,Y=G/2,xe=U+1,oe=W+1;let ae=0,K=0;const Ee=new Q;for(let Me=0;Me<oe;Me++){const Re=Me*O-Te;for(let ke=0;ke<xe;ke++){const nt=ke*b-pe;Ee[E]=nt*P,Ee[m]=Re*y,Ee[g]=Y,h.push(Ee.x,Ee.y,Ee.z),Ee[E]=0,Ee[m]=0,Ee[g]=G>0?1:-1,d.push(Ee.x,Ee.y,Ee.z),p.push(ke/U),p.push(1-Me/W),ae+=1}}for(let Me=0;Me<W;Me++)for(let Re=0;Re<U;Re++){const ke=v+Re+xe*Me,nt=v+Re+xe*(Me+1),z=v+(Re+1)+xe*(Me+1),B=v+(Re+1)+xe*Me;f.push(ke,nt,B),f.push(nt,z,B),K+=6}l.addGroup(x,K,fe),x+=K,v+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Mn(i){const e={};for(let t=0;t<i.length;t++){const n=Xs(i[t]);for(const s in n)e[s]=n[s]}return e}function ib(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wm(i){return i.getRenderTarget()===null?i.outputColorSpace:Ut.workingColorSpace}const rb={clone:Xs,merge:Mn};var sb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ob=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends Tl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sb,this.fragmentShader=ob,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=ib(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xm extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new Q,Tp=new Ae,Ap=new Ae;class Qn extends Xm{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,Tp,Ap),t.subVectors(Ap,Tp)}setViewOffset(e,t,n,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;a+=c.offsetX*s/f,t-=c.offsetY*n/h,s*=c.width/f,n*=c.height/h}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Rs=-90,Ps=1;class ab extends An{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qn(Rs,Ps,e,t);s.layers=this.layers,this.add(s);const a=new Qn(Rs,Ps,e,t);a.layers=this.layers,this.add(a);const c=new Qn(Rs,Ps,e,t);c.layers=this.layers,this.add(c);const l=new Qn(Rs,Ps,e,t);l.layers=this.layers,this.add(l);const f=new Qn(Rs,Ps,e,t);f.layers=this.layers,this.add(f);const h=new Qn(Rs,Ps,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,c,l,f]=t;for(const h of t)this.remove(h);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===ml)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,l,f,h,d]=this.children,p=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,c),e.setRenderTarget(n,2,s),e.render(t,l),e.setRenderTarget(n,3,s),e.render(t,f),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(p,v,x),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class qm extends vn{constructor(e,t,n,s,a,c,l,f,h,d){e=e!==void 0?e:[],t=t!==void 0?t:Hs,super(e,t,n,s,a,c,l,f,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lb extends kr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new qm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bo(5,5,5),a=new vr({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:pr});a.uniforms.tEquirect.value=t;const c=new Tn(s,a),l=t.minFilter;return t.minFilter===Br&&(t.minFilter=bn),new ab(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,s);e.setRenderTarget(a)}}const hu=new Q,cb=new Q,ub=new lt;class fr{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=hu.subVectors(n,t).cross(cb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(hu),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ub.getNormalMatrix(e),s=this.coplanarPoint(hu).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Fo,$a=new Q;class Ym{constructor(e=new fr,t=new fr,n=new fr,s=new fr,a=new fr,c=new fr){this.planes=[e,t,n,s,a,c]}set(e,t,n,s,a,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(a),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xi){const n=this.planes,s=e.elements,a=s[0],c=s[1],l=s[2],f=s[3],h=s[4],d=s[5],p=s[6],v=s[7],x=s[8],S=s[9],E=s[10],m=s[11],g=s[12],P=s[13],y=s[14],A=s[15];if(n[0].setComponents(f-a,v-h,m-x,A-g).normalize(),n[1].setComponents(f+a,v+h,m+x,A+g).normalize(),n[2].setComponents(f+c,v+d,m+S,A+P).normalize(),n[3].setComponents(f-c,v-d,m-S,A-P).normalize(),n[4].setComponents(f-l,v-p,m-E,A-y).normalize(),t===Xi)n[5].setComponents(f+l,v+p,m+E,A+y).normalize();else if(t===ml)n[5].setComponents(l,p,E,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if($a.x=s.normal.x>0?e.max.x:e.min.x,$a.y=s.normal.y>0?e.max.y:e.min.y,$a.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $m(){let i=null,e=!1,t=null,n=null;function s(a,c){t(a,c),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function fb(i,e){const t=e.isWebGL2,n=new WeakMap;function s(h,d){const p=h.array,v=h.usage,x=p.byteLength,S=i.createBuffer();i.bindBuffer(d,S),i.bufferData(d,p,v),h.onUploadCallback();let E;if(p instanceof Float32Array)E=i.FLOAT;else if(p instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)E=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=i.SHORT;else if(p instanceof Uint32Array)E=i.UNSIGNED_INT;else if(p instanceof Int32Array)E=i.INT;else if(p instanceof Int8Array)E=i.BYTE;else if(p instanceof Uint8Array)E=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function a(h,d,p){const v=d.array,x=d._updateRange,S=d.updateRanges;if(i.bindBuffer(p,h),x.count===-1&&S.length===0&&i.bufferSubData(p,0,v),S.length!==0){for(let E=0,m=S.length;E<m;E++){const g=S[E];t?i.bufferSubData(p,g.start*v.BYTES_PER_ELEMENT,v,g.start,g.count):i.bufferSubData(p,g.start*v.BYTES_PER_ELEMENT,v.subarray(g.start,g.start+g.count))}d.clearUpdateRanges()}x.count!==-1&&(t?i.bufferSubData(p,x.offset*v.BYTES_PER_ELEMENT,v,x.offset,x.count):i.bufferSubData(p,x.offset*v.BYTES_PER_ELEMENT,v.subarray(x.offset,x.offset+x.count)),x.count=-1),d.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d&&(i.deleteBuffer(d.buffer),n.delete(h))}function f(h,d){if(h.isGLBufferAttribute){const v=n.get(h);(!v||v.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const p=n.get(h);if(p===void 0)n.set(h,s(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,d),p.version=h.version}}return{get:c,remove:l,update:f}}class zo extends ei{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,c=t/2,l=Math.floor(n),f=Math.floor(s),h=l+1,d=f+1,p=e/l,v=t/f,x=[],S=[],E=[],m=[];for(let g=0;g<d;g++){const P=g*v-c;for(let y=0;y<h;y++){const A=y*p-a;S.push(A,-P,0),E.push(0,0,1),m.push(y/l),m.push(1-g/f)}}for(let g=0;g<f;g++)for(let P=0;P<l;P++){const y=P+h*g,A=P+h*(g+1),k=P+1+h*(g+1),G=P+1+h*g;x.push(y,A,G),x.push(A,k,G)}this.setIndex(x),this.setAttribute("position",new Jt(S,3)),this.setAttribute("normal",new Jt(E,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.widthSegments,e.heightSegments)}}var hb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,db=`#ifdef USE_ALPHAHASH
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
#endif`,pb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_b=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vb=`#ifdef USE_AOMAP
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
#endif`,xb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yb=`#ifdef USE_BATCHING
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
#endif`,Sb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Eb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tb=`#ifdef USE_IRIDESCENCE
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
#endif`,Ab=`#ifdef USE_BUMPMAP
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
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ib=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ub=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Nb=`#define PI 3.141592653589793
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
} // validated`,Ob=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fb=`vec3 transformedNormal = objectNormal;
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
#endif`,Bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vb=`
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
}`,Wb=`#ifdef USE_ENVMAP
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
#endif`,Xb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qb=`#ifdef USE_ENVMAP
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
#endif`,Yb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$b=`#ifdef USE_ENVMAP
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
#endif`,Zb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qb=`#ifdef USE_GRADIENTMAP
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
}`,eT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rT=`uniform bool receiveShadow;
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
#endif`,sT=`#ifdef USE_ENVMAP
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
#endif`,oT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uT=`PhysicalMaterial material;
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
#endif`,fT=`struct PhysicalMaterial {
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
}`,hT=`
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
#endif`,dT=`#if defined( RE_IndirectDiffuse )
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
#endif`,pT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_T=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ST=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ET=`#if defined( USE_POINTS_UV )
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
#endif`,MT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wT=`#ifdef USE_MORPHNORMALS
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
#endif`,CT=`#ifdef USE_MORPHTARGETS
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
#endif`,RT=`#ifdef USE_MORPHTARGETS
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
#endif`,PT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,IT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NT=`#ifdef USE_NORMALMAP
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
#endif`,OT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$T=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JT=`float getShadowMask() {
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
}`,jT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QT=`#ifdef USE_SKINNING
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
#endif`,eA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tA=`#ifdef USE_SKINNING
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
#endif`,nA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oA=`#ifdef USE_TRANSMISSION
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
#endif`,aA=`#ifdef USE_TRANSMISSION
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
#endif`,lA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dA=`uniform sampler2D t2D;
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
}`,pA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_A=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vA=`#include <common>
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
}`,xA=`#if DEPTH_PACKING == 3200
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
}`,yA=`#define DISTANCE
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
}`,SA=`#define DISTANCE
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
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bA=`uniform float scale;
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
}`,TA=`uniform vec3 diffuse;
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
}`,AA=`#include <common>
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
}`,wA=`uniform vec3 diffuse;
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
}`,CA=`#define LAMBERT
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
}`,RA=`#define LAMBERT
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
}`,PA=`#define MATCAP
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
}`,LA=`#define MATCAP
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
}`,IA=`#define NORMAL
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
}`,DA=`#define NORMAL
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
}`,UA=`#define PHONG
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
}`,NA=`#define PHONG
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
}`,OA=`#define STANDARD
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
}`,FA=`#define STANDARD
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
}`,BA=`#define TOON
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
}`,zA=`#define TOON
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
}`,GA=`uniform float size;
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
}`,kA=`uniform vec3 diffuse;
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
}`,HA=`#include <common>
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
}`,VA=`uniform vec3 color;
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
}`,WA=`uniform float rotation;
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
}`,XA=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:hb,alphahash_pars_fragment:db,alphamap_fragment:pb,alphamap_pars_fragment:mb,alphatest_fragment:gb,alphatest_pars_fragment:_b,aomap_fragment:vb,aomap_pars_fragment:xb,batching_pars_vertex:yb,batching_vertex:Sb,begin_vertex:Eb,beginnormal_vertex:Mb,bsdfs:bb,iridescence_fragment:Tb,bumpmap_pars_fragment:Ab,clipping_planes_fragment:wb,clipping_planes_pars_fragment:Cb,clipping_planes_pars_vertex:Rb,clipping_planes_vertex:Pb,color_fragment:Lb,color_pars_fragment:Ib,color_pars_vertex:Db,color_vertex:Ub,common:Nb,cube_uv_reflection_fragment:Ob,defaultnormal_vertex:Fb,displacementmap_pars_vertex:Bb,displacementmap_vertex:zb,emissivemap_fragment:Gb,emissivemap_pars_fragment:kb,colorspace_fragment:Hb,colorspace_pars_fragment:Vb,envmap_fragment:Wb,envmap_common_pars_fragment:Xb,envmap_pars_fragment:qb,envmap_pars_vertex:Yb,envmap_physical_pars_fragment:sT,envmap_vertex:$b,fog_vertex:Zb,fog_pars_vertex:Kb,fog_fragment:Jb,fog_pars_fragment:jb,gradientmap_pars_fragment:Qb,lightmap_fragment:eT,lightmap_pars_fragment:tT,lights_lambert_fragment:nT,lights_lambert_pars_fragment:iT,lights_pars_begin:rT,lights_toon_fragment:oT,lights_toon_pars_fragment:aT,lights_phong_fragment:lT,lights_phong_pars_fragment:cT,lights_physical_fragment:uT,lights_physical_pars_fragment:fT,lights_fragment_begin:hT,lights_fragment_maps:dT,lights_fragment_end:pT,logdepthbuf_fragment:mT,logdepthbuf_pars_fragment:gT,logdepthbuf_pars_vertex:_T,logdepthbuf_vertex:vT,map_fragment:xT,map_pars_fragment:yT,map_particle_fragment:ST,map_particle_pars_fragment:ET,metalnessmap_fragment:MT,metalnessmap_pars_fragment:bT,morphinstance_vertex:TT,morphcolor_vertex:AT,morphnormal_vertex:wT,morphtarget_pars_vertex:CT,morphtarget_vertex:RT,normal_fragment_begin:PT,normal_fragment_maps:LT,normal_pars_fragment:IT,normal_pars_vertex:DT,normal_vertex:UT,normalmap_pars_fragment:NT,clearcoat_normal_fragment_begin:OT,clearcoat_normal_fragment_maps:FT,clearcoat_pars_fragment:BT,iridescence_pars_fragment:zT,opaque_fragment:GT,packing:kT,premultiplied_alpha_fragment:HT,project_vertex:VT,dithering_fragment:WT,dithering_pars_fragment:XT,roughnessmap_fragment:qT,roughnessmap_pars_fragment:YT,shadowmap_pars_fragment:$T,shadowmap_pars_vertex:ZT,shadowmap_vertex:KT,shadowmask_pars_fragment:JT,skinbase_vertex:jT,skinning_pars_vertex:QT,skinning_vertex:eA,skinnormal_vertex:tA,specularmap_fragment:nA,specularmap_pars_fragment:iA,tonemapping_fragment:rA,tonemapping_pars_fragment:sA,transmission_fragment:oA,transmission_pars_fragment:aA,uv_pars_fragment:lA,uv_pars_vertex:cA,uv_vertex:uA,worldpos_vertex:fA,background_vert:hA,background_frag:dA,backgroundCube_vert:pA,backgroundCube_frag:mA,cube_vert:gA,cube_frag:_A,depth_vert:vA,depth_frag:xA,distanceRGBA_vert:yA,distanceRGBA_frag:SA,equirect_vert:EA,equirect_frag:MA,linedashed_vert:bA,linedashed_frag:TA,meshbasic_vert:AA,meshbasic_frag:wA,meshlambert_vert:CA,meshlambert_frag:RA,meshmatcap_vert:PA,meshmatcap_frag:LA,meshnormal_vert:IA,meshnormal_frag:DA,meshphong_vert:UA,meshphong_frag:NA,meshphysical_vert:OA,meshphysical_frag:FA,meshtoon_vert:BA,meshtoon_frag:zA,points_vert:GA,points_frag:kA,shadow_vert:HA,shadow_frag:VA,sprite_vert:WA,sprite_frag:XA},Ge={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ei={basic:{uniforms:Mn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Mn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new bt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Mn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Mn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Mn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new bt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Mn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Mn([Ge.points,Ge.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Mn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Mn([Ge.common,Ge.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Mn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Mn([Ge.sprite,Ge.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Mn([Ge.common,Ge.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Mn([Ge.lights,Ge.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Ei.physical={uniforms:Mn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Za={r:0,b:0,g:0},Dr=new qi,qA=new qt;function YA(i,e,t,n,s,a,c){const l=new bt(0);let f=a===!0?0:1,h,d,p=null,v=0,x=null;function S(m,g){let P=!1,y=g.isScene===!0?g.background:null;y&&y.isTexture&&(y=(g.backgroundBlurriness>0?t:e).get(y)),y===null?E(l,f):y&&y.isColor&&(E(y,1),P=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,c):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||P)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ml)?(d===void 0&&(d=new Tn(new Bo(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:Xs(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(k,G,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Dr.copy(g.backgroundRotation),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(qA.makeRotationFromEuler(Dr)),d.material.toneMapped=Ut.getTransfer(y.colorSpace)!==Gt,(p!==y||v!==y.version||x!==i.toneMapping)&&(d.material.needsUpdate=!0,p=y,v=y.version,x=i.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new Tn(new zo(2,2),new vr({name:"BackgroundMaterial",uniforms:Xs(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=Ut.getTransfer(y.colorSpace)!==Gt,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||v!==y.version||x!==i.toneMapping)&&(h.material.needsUpdate=!0,p=y,v=y.version,x=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function E(m,g){m.getRGB(Za,Wm(i)),n.buffers.color.setClear(Za.r,Za.g,Za.b,g,c)}return{getClearColor:function(){return l},setClearColor:function(m,g=1){l.set(m),f=g,E(l,f)},getClearAlpha:function(){return f},setClearAlpha:function(m){f=m,E(l,f)},render:S}}function $A(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),c=n.isWebGL2||a!==null,l={},f=m(null);let h=f,d=!1;function p(Y,xe,oe,ae,K){let Ee=!1;if(c){const Me=E(ae,oe,xe);h!==Me&&(h=Me,x(h.object)),Ee=g(Y,ae,oe,K),Ee&&P(Y,ae,oe,K)}else{const Me=xe.wireframe===!0;(h.geometry!==ae.id||h.program!==oe.id||h.wireframe!==Me)&&(h.geometry=ae.id,h.program=oe.id,h.wireframe=Me,Ee=!0)}K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(Ee||d)&&(d=!1,W(Y,xe,oe,ae),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function v(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function x(Y){return n.isWebGL2?i.bindVertexArray(Y):a.bindVertexArrayOES(Y)}function S(Y){return n.isWebGL2?i.deleteVertexArray(Y):a.deleteVertexArrayOES(Y)}function E(Y,xe,oe){const ae=oe.wireframe===!0;let K=l[Y.id];K===void 0&&(K={},l[Y.id]=K);let Ee=K[xe.id];Ee===void 0&&(Ee={},K[xe.id]=Ee);let Me=Ee[ae];return Me===void 0&&(Me=m(v()),Ee[ae]=Me),Me}function m(Y){const xe=[],oe=[],ae=[];for(let K=0;K<s;K++)xe[K]=0,oe[K]=0,ae[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:xe,enabledAttributes:oe,attributeDivisors:ae,object:Y,attributes:{},index:null}}function g(Y,xe,oe,ae){const K=h.attributes,Ee=xe.attributes;let Me=0;const Re=oe.getAttributes();for(const ke in Re)if(Re[ke].location>=0){const z=K[ke];let B=Ee[ke];if(B===void 0&&(ke==="instanceMatrix"&&Y.instanceMatrix&&(B=Y.instanceMatrix),ke==="instanceColor"&&Y.instanceColor&&(B=Y.instanceColor)),z===void 0||z.attribute!==B||B&&z.data!==B.data)return!0;Me++}return h.attributesNum!==Me||h.index!==ae}function P(Y,xe,oe,ae){const K={},Ee=xe.attributes;let Me=0;const Re=oe.getAttributes();for(const ke in Re)if(Re[ke].location>=0){let z=Ee[ke];z===void 0&&(ke==="instanceMatrix"&&Y.instanceMatrix&&(z=Y.instanceMatrix),ke==="instanceColor"&&Y.instanceColor&&(z=Y.instanceColor));const B={};B.attribute=z,z&&z.data&&(B.data=z.data),K[ke]=B,Me++}h.attributes=K,h.attributesNum=Me,h.index=ae}function y(){const Y=h.newAttributes;for(let xe=0,oe=Y.length;xe<oe;xe++)Y[xe]=0}function A(Y){k(Y,0)}function k(Y,xe){const oe=h.newAttributes,ae=h.enabledAttributes,K=h.attributeDivisors;oe[Y]=1,ae[Y]===0&&(i.enableVertexAttribArray(Y),ae[Y]=1),K[Y]!==xe&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,xe),K[Y]=xe)}function G(){const Y=h.newAttributes,xe=h.enabledAttributes;for(let oe=0,ae=xe.length;oe<ae;oe++)xe[oe]!==Y[oe]&&(i.disableVertexAttribArray(oe),xe[oe]=0)}function U(Y,xe,oe,ae,K,Ee,Me){Me===!0?i.vertexAttribIPointer(Y,xe,oe,K,Ee):i.vertexAttribPointer(Y,xe,oe,ae,K,Ee)}function W(Y,xe,oe,ae){if(n.isWebGL2===!1&&(Y.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const K=ae.attributes,Ee=oe.getAttributes(),Me=xe.defaultAttributeValues;for(const Re in Ee){const ke=Ee[Re];if(ke.location>=0){let nt=K[Re];if(nt===void 0&&(Re==="instanceMatrix"&&Y.instanceMatrix&&(nt=Y.instanceMatrix),Re==="instanceColor"&&Y.instanceColor&&(nt=Y.instanceColor)),nt!==void 0){const z=nt.normalized,B=nt.itemSize,I=t.get(nt);if(I===void 0)continue;const L=I.buffer,ie=I.type,de=I.bytesPerElement,se=n.isWebGL2===!0&&(ie===i.INT||ie===i.UNSIGNED_INT||nt.gpuType===Am);if(nt.isInterleavedBufferAttribute){const Se=nt.data,D=Se.stride,ce=nt.offset;if(Se.isInstancedInterleavedBuffer){for(let X=0;X<ke.locationSize;X++)k(ke.location+X,Se.meshPerAttribute);Y.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let X=0;X<ke.locationSize;X++)A(ke.location+X);i.bindBuffer(i.ARRAY_BUFFER,L);for(let X=0;X<ke.locationSize;X++)U(ke.location+X,B/ke.locationSize,ie,z,D*de,(ce+B/ke.locationSize*X)*de,se)}else{if(nt.isInstancedBufferAttribute){for(let Se=0;Se<ke.locationSize;Se++)k(ke.location+Se,nt.meshPerAttribute);Y.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Se=0;Se<ke.locationSize;Se++)A(ke.location+Se);i.bindBuffer(i.ARRAY_BUFFER,L);for(let Se=0;Se<ke.locationSize;Se++)U(ke.location+Se,B/ke.locationSize,ie,z,B*de,B/ke.locationSize*Se*de,se)}}else if(Me!==void 0){const z=Me[Re];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(ke.location,z);break;case 3:i.vertexAttrib3fv(ke.location,z);break;case 4:i.vertexAttrib4fv(ke.location,z);break;default:i.vertexAttrib1fv(ke.location,z)}}}}G()}function fe(){pe();for(const Y in l){const xe=l[Y];for(const oe in xe){const ae=xe[oe];for(const K in ae)S(ae[K].object),delete ae[K];delete xe[oe]}delete l[Y]}}function b(Y){if(l[Y.id]===void 0)return;const xe=l[Y.id];for(const oe in xe){const ae=xe[oe];for(const K in ae)S(ae[K].object),delete ae[K];delete xe[oe]}delete l[Y.id]}function O(Y){for(const xe in l){const oe=l[xe];if(oe[Y.id]===void 0)continue;const ae=oe[Y.id];for(const K in ae)S(ae[K].object),delete ae[K];delete oe[Y.id]}}function pe(){Te(),d=!0,h!==f&&(h=f,x(h.object))}function Te(){f.geometry=null,f.program=null,f.wireframe=!1}return{setup:p,reset:pe,resetDefaultState:Te,dispose:fe,releaseStatesOfGeometry:b,releaseStatesOfProgram:O,initAttributes:y,enableAttribute:A,disableUnusedAttributes:G}}function ZA(i,e,t,n){const s=n.isWebGL2;let a;function c(d){a=d}function l(d,p){i.drawArrays(a,d,p),t.update(p,a,1)}function f(d,p,v){if(v===0)return;let x,S;if(s)x=i,S="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[S](a,d,p,v),t.update(p,a,v)}function h(d,p,v){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<v;S++)this.render(d[S],p[S]);else{x.multiDrawArraysWEBGL(a,d,0,p,0,v);let S=0;for(let E=0;E<v;E++)S+=p[E];t.update(S,a,1)}}this.setMode=c,this.render=l,this.renderInstances=f,this.renderMultiDraw=h}function KA(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const f=a(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const h=c||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),E=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=v>0,A=c||e.has("OES_texture_float"),k=y&&A,G=c?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:c,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:a,precision:l,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:S,maxAttributes:E,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:P,vertexTextures:y,floatFragmentTextures:A,floatVertexTextures:k,maxSamples:G}}function JA(i){const e=this;let t=null,n=0,s=!1,a=!1;const c=new fr,l=new lt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(p,v){const x=p.length!==0||v||n!==0||s;return s=v,n=p.length,x},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,v){t=d(p,v,0)},this.setState=function(p,v,x){const S=p.clippingPlanes,E=p.clipIntersection,m=p.clipShadows,g=i.get(p);if(!s||S===null||S.length===0||a&&!m)a?d(null):h();else{const P=a?0:n,y=P*4;let A=g.clippingState||null;f.value=A,A=d(S,v,y,x);for(let k=0;k!==y;++k)A[k]=t[k];g.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=P}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,v,x,S){const E=p!==null?p.length:0;let m=null;if(E!==0){if(m=f.value,S!==!0||m===null){const g=x+E*4,P=v.matrixWorldInverse;l.getNormalMatrix(P),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,A=x;y!==E;++y,A+=4)c.copy(p[y]).applyMatrix4(P,l),c.normal.toArray(m,A),m[A+3]=c.constant}f.value=m,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}function jA(i){let e=new WeakMap;function t(c,l){return l===Iu?c.mapping=Hs:l===Du&&(c.mapping=Vs),c}function n(c){if(c&&c.isTexture){const l=c.mapping;if(l===Iu||l===Du)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new lb(f.height);return h.fromEquirectangularTexture(i,c),e.set(c,h),c.addEventListener("dispose",s),t(h.texture,c.mapping)}else return null}}return c}function s(c){const l=c.target;l.removeEventListener("dispose",s);const f=e.get(l);f!==void 0&&(e.delete(l),f.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class QA extends Xm{constructor(e=-1,t=1,n=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,c=n+e,l=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,l-=d*this.view.offsetY,f=l-d*this.view.height}this.projectionMatrix.makeOrthographic(a,c,l,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ns=4,wp=[.125,.215,.35,.446,.526,.582],Fr=20,du=new QA,Cp=new bt;let pu=null,mu=0,gu=0;const Nr=(1+Math.sqrt(5))/2,Ls=1/Nr,Rp=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,Nr,Ls),new Q(0,Nr,-Ls),new Q(Ls,0,Nr),new Q(-Ls,0,Nr),new Q(Nr,Ls,0),new Q(-Nr,Ls,0)];class Pp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pu,mu,gu),e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Lo,format:di,colorSpace:xr,depthBuffer:!1},s=Lp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ew(a)),this._blurMaterial=tw(a,e,t)}return s}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,du)}_sceneToCubeUV(e,t,n,s){const l=new Qn(90,1,t,n),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,v=d.toneMapping;d.getClearColor(Cp),d.toneMapping=mr,d.autoClear=!1;const x=new Us({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),S=new Tn(new Bo,x);let E=!1;const m=e.background;m?m.isColor&&(x.color.copy(m),e.background=null,E=!0):(x.color.copy(Cp),E=!0);for(let g=0;g<6;g++){const P=g%3;P===0?(l.up.set(0,f[g],0),l.lookAt(h[g],0,0)):P===1?(l.up.set(0,0,f[g]),l.lookAt(0,h[g],0)):(l.up.set(0,f[g],0),l.lookAt(0,0,h[g]));const y=this._cubeSize;Ka(s,P*y,g>2?y:0,y,y),d.setRenderTarget(s),E&&d.render(S,l),d.render(e,l)}S.geometry.dispose(),S.material.dispose(),d.toneMapping=v,d.autoClear=p,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Hs||e.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ip());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new Tn(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=e;const f=this._cubeSize;Ka(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(c,du)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),c=Rp[(s-1)%Rp.length];this._blur(e,s-1,s,a,c)}t.autoClear=n}_blur(e,t,n,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,s,"latitudinal",a),this._halfBlur(c,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,c,l){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Tn(this._lodPlanes[s],h),v=h.uniforms,x=this._sizeLods[n]-1,S=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Fr-1),E=a/S,m=isFinite(a)?1+Math.floor(d*E):Fr;m>Fr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fr}`);const g=[];let P=0;for(let U=0;U<Fr;++U){const W=U/E,fe=Math.exp(-W*W/2);g.push(fe),U===0?P+=fe:U<m&&(P+=2*fe)}for(let U=0;U<g.length;U++)g[U]=g[U]/P;v.envMap.value=e.texture,v.samples.value=m,v.weights.value=g,v.latitudinal.value=c==="latitudinal",l&&(v.poleAxis.value=l);const{_lodMax:y}=this;v.dTheta.value=S,v.mipInt.value=y-n;const A=this._sizeLods[s],k=3*A*(s>y-Ns?s-y+Ns:0),G=4*(this._cubeSize-A);Ka(t,k,G,3*A,2*A),f.setRenderTarget(t),f.render(p,du)}}function ew(i){const e=[],t=[],n=[];let s=i;const a=i-Ns+1+wp.length;for(let c=0;c<a;c++){const l=Math.pow(2,s);t.push(l);let f=1/l;c>i-Ns?f=wp[c-i+Ns-1]:c===0&&(f=0),n.push(f);const h=1/(l-2),d=-h,p=1+h,v=[d,d,p,d,p,p,d,d,p,p,d,p],x=6,S=6,E=3,m=2,g=1,P=new Float32Array(E*S*x),y=new Float32Array(m*S*x),A=new Float32Array(g*S*x);for(let G=0;G<x;G++){const U=G%3*2/3-1,W=G>2?0:-1,fe=[U,W,0,U+2/3,W,0,U+2/3,W+1,0,U,W,0,U+2/3,W+1,0,U,W+1,0];P.set(fe,E*S*G),y.set(v,m*S*G);const b=[G,G,G,G,G,G];A.set(b,g*S*G)}const k=new ei;k.setAttribute("position",new pi(P,E)),k.setAttribute("uv",new pi(y,m)),k.setAttribute("faceIndex",new pi(A,g)),e.push(k),s>Ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lp(i,e,t){const n=new kr(i,e,t);return n.texture.mapping=Ml,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ka(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function tw(i,e,t){const n=new Float32Array(Fr),s=new Q(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ef(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Ip(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ef(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Dp(){return new vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function ef(){return`

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
	`}function nw(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const f=l.mapping,h=f===Iu||f===Du,d=f===Hs||f===Vs;if(h||d)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let p=e.get(l);return t===null&&(t=new Pp(i)),p=h?t.fromEquirectangular(l,p):t.fromCubemap(l,p),e.set(l,p),p.texture}else{if(e.has(l))return e.get(l).texture;{const p=l.image;if(h&&p&&p.height>0||d&&p&&s(p)){t===null&&(t=new Pp(i));const v=h?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,v),l.addEventListener("dispose",a),v.texture}else return null}}}return l}function s(l){let f=0;const h=6;for(let d=0;d<h;d++)l[d]!==void 0&&f++;return f===h}function a(l){const f=l.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function iw(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rw(i,e,t,n){const s={},a=new WeakMap;function c(p){const v=p.target;v.index!==null&&e.remove(v.index);for(const S in v.attributes)e.remove(v.attributes[S]);for(const S in v.morphAttributes){const E=v.morphAttributes[S];for(let m=0,g=E.length;m<g;m++)e.remove(E[m])}v.removeEventListener("dispose",c),delete s[v.id];const x=a.get(v);x&&(e.remove(x),a.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(p,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,t.memory.geometries++),v}function f(p){const v=p.attributes;for(const S in v)e.update(v[S],i.ARRAY_BUFFER);const x=p.morphAttributes;for(const S in x){const E=x[S];for(let m=0,g=E.length;m<g;m++)e.update(E[m],i.ARRAY_BUFFER)}}function h(p){const v=[],x=p.index,S=p.attributes.position;let E=0;if(x!==null){const P=x.array;E=x.version;for(let y=0,A=P.length;y<A;y+=3){const k=P[y+0],G=P[y+1],U=P[y+2];v.push(k,G,G,U,U,k)}}else if(S!==void 0){const P=S.array;E=S.version;for(let y=0,A=P.length/3-1;y<A;y+=3){const k=y+0,G=y+1,U=y+2;v.push(k,G,G,U,U,k)}}else return;const m=new(Nm(v)?Vm:Hm)(v,1);m.version=E;const g=a.get(p);g&&e.remove(g),a.set(p,m)}function d(p){const v=a.get(p);if(v){const x=p.index;x!==null&&v.version<x.version&&h(p)}else h(p);return a.get(p)}return{get:l,update:f,getWireframeAttribute:d}}function sw(i,e,t,n){const s=n.isWebGL2;let a;function c(x){a=x}let l,f;function h(x){l=x.type,f=x.bytesPerElement}function d(x,S){i.drawElements(a,S,l,x*f),t.update(S,a,1)}function p(x,S,E){if(E===0)return;let m,g;if(s)m=i,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](a,S,l,x*f,E),t.update(S,a,E)}function v(x,S,E){if(E===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<E;g++)this.render(x[g]/f,S[g]);else{m.multiDrawElementsWEBGL(a,S,0,l,x,0,E);let g=0;for(let P=0;P<E;P++)g+=S[P];t.update(g,a,1)}}this.setMode=c,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=v}function ow(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,l){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=l*(a/3);break;case i.LINES:t.lines+=l*(a/2);break;case i.LINE_STRIP:t.lines+=l*(a-1);break;case i.LINE_LOOP:t.lines+=l*a;break;case i.POINTS:t.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function aw(i,e){return i[0]-e[0]}function lw(i,e){return Math.abs(e[1])-Math.abs(i[1])}function cw(i,e,t){const n={},s=new Float32Array(8),a=new WeakMap,c=new hn,l=[];for(let h=0;h<8;h++)l[h]=[h,0];function f(h,d,p){const v=h.morphTargetInfluences;if(e.isWebGL2===!0){const S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,E=S!==void 0?S.length:0;let m=a.get(d);if(m===void 0||m.count!==E){let Te=function(){O.dispose(),a.delete(d),d.removeEventListener("dispose",Te)};var x=Te;m!==void 0&&m.texture.dispose();const g=d.morphAttributes.position!==void 0,P=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],k=d.morphAttributes.normal||[],G=d.morphAttributes.color||[];let U=0;g===!0&&(U=1),P===!0&&(U=2),y===!0&&(U=3);let W=d.attributes.position.count*U,fe=1;W>e.maxTextureSize&&(fe=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const b=new Float32Array(W*fe*4*E),O=new Bm(b,W,fe,E);O.type=bi,O.needsUpdate=!0;const pe=U*4;for(let Y=0;Y<E;Y++){const xe=A[Y],oe=k[Y],ae=G[Y],K=W*fe*4*Y;for(let Ee=0;Ee<xe.count;Ee++){const Me=Ee*pe;g===!0&&(c.fromBufferAttribute(xe,Ee),b[K+Me+0]=c.x,b[K+Me+1]=c.y,b[K+Me+2]=c.z,b[K+Me+3]=0),P===!0&&(c.fromBufferAttribute(oe,Ee),b[K+Me+4]=c.x,b[K+Me+5]=c.y,b[K+Me+6]=c.z,b[K+Me+7]=0),y===!0&&(c.fromBufferAttribute(ae,Ee),b[K+Me+8]=c.x,b[K+Me+9]=c.y,b[K+Me+10]=c.z,b[K+Me+11]=ae.itemSize===4?c.w:1)}}m={count:E,texture:O,size:new Ae(W,fe)},a.set(d,m),d.addEventListener("dispose",Te)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",h.morphTexture,t);else{let g=0;for(let y=0;y<v.length;y++)g+=v[y];const P=d.morphTargetsRelative?1:1-g;p.getUniforms().setValue(i,"morphTargetBaseInfluence",P),p.getUniforms().setValue(i,"morphTargetInfluences",v)}p.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const S=v===void 0?0:v.length;let E=n[d.id];if(E===void 0||E.length!==S){E=[];for(let A=0;A<S;A++)E[A]=[A,0];n[d.id]=E}for(let A=0;A<S;A++){const k=E[A];k[0]=A,k[1]=v[A]}E.sort(lw);for(let A=0;A<8;A++)A<S&&E[A][1]?(l[A][0]=E[A][0],l[A][1]=E[A][1]):(l[A][0]=Number.MAX_SAFE_INTEGER,l[A][1]=0);l.sort(aw);const m=d.morphAttributes.position,g=d.morphAttributes.normal;let P=0;for(let A=0;A<8;A++){const k=l[A],G=k[0],U=k[1];G!==Number.MAX_SAFE_INTEGER&&U?(m&&d.getAttribute("morphTarget"+A)!==m[G]&&d.setAttribute("morphTarget"+A,m[G]),g&&d.getAttribute("morphNormal"+A)!==g[G]&&d.setAttribute("morphNormal"+A,g[G]),s[A]=U,P+=U):(m&&d.hasAttribute("morphTarget"+A)===!0&&d.deleteAttribute("morphTarget"+A),g&&d.hasAttribute("morphNormal"+A)===!0&&d.deleteAttribute("morphNormal"+A),s[A]=0)}const y=d.morphTargetsRelative?1:1-P;p.getUniforms().setValue(i,"morphTargetBaseInfluence",y),p.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:f}}function uw(i,e,t,n){let s=new WeakMap;function a(f){const h=n.render.frame,d=f.geometry,p=e.get(f,d);if(s.get(p)!==h&&(e.update(p),s.set(p,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",l)===!1&&f.addEventListener("dispose",l),s.get(f)!==h&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),s.set(f,h))),f.isSkinnedMesh){const v=f.skeleton;s.get(v)!==h&&(v.update(),s.set(v,h))}return p}function c(){s=new WeakMap}function l(f){const h=f.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:c}}class Zm extends vn{constructor(e,t,n,s,a,c,l,f,h,d){if(d=d!==void 0?d:Gr,d!==Gr&&d!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Gr&&(n=dr),n===void 0&&d===Ws&&(n=zr),super(null,s,a,c,l,f,d,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:fn,this.minFilter=f!==void 0?f:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Km=new vn,Jm=new Zm(1,1);Jm.compareFunction=Um;const jm=new Bm,Qm=new XM,eg=new qm,Up=[],Np=[],Op=new Float32Array(16),Fp=new Float32Array(9),Bp=new Float32Array(4);function Ys(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Up[s];if(a===void 0&&(a=new Float32Array(s),Up[s]=a),e!==0){n.toArray(a,0);for(let c=1,l=0;c!==e;++c)l+=t,i[c].toArray(a,l)}return a}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Al(i,e){let t=Np[e];t===void 0&&(t=new Int32Array(e),Np[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function dw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function pw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function mw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;Bp.set(n),i.uniformMatrix2fv(this.addr,!1,Bp),rn(t,n)}}function gw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;Fp.set(n),i.uniformMatrix3fv(this.addr,!1,Fp),rn(t,n)}}function _w(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;Op.set(n),i.uniformMatrix4fv(this.addr,!1,Op),rn(t,n)}}function vw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function yw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function Sw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function Ew(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function bw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function Tw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function Aw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const a=this.type===i.SAMPLER_2D_SHADOW?Jm:Km;t.setTexture2D(e||a,s)}function ww(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qm,s)}function Cw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||eg,s)}function Rw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||jm,s)}function Pw(i){switch(i){case 5126:return fw;case 35664:return hw;case 35665:return dw;case 35666:return pw;case 35674:return mw;case 35675:return gw;case 35676:return _w;case 5124:case 35670:return vw;case 35667:case 35671:return xw;case 35668:case 35672:return yw;case 35669:case 35673:return Sw;case 5125:return Ew;case 36294:return Mw;case 36295:return bw;case 36296:return Tw;case 35678:case 36198:case 36298:case 36306:case 35682:return Aw;case 35679:case 36299:case 36307:return ww;case 35680:case 36300:case 36308:case 36293:return Cw;case 36289:case 36303:case 36311:case 36292:return Rw}}function Lw(i,e){i.uniform1fv(this.addr,e)}function Iw(i,e){const t=Ys(e,this.size,2);i.uniform2fv(this.addr,t)}function Dw(i,e){const t=Ys(e,this.size,3);i.uniform3fv(this.addr,t)}function Uw(i,e){const t=Ys(e,this.size,4);i.uniform4fv(this.addr,t)}function Nw(i,e){const t=Ys(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ow(i,e){const t=Ys(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fw(i,e){const t=Ys(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bw(i,e){i.uniform1iv(this.addr,e)}function zw(i,e){i.uniform2iv(this.addr,e)}function Gw(i,e){i.uniform3iv(this.addr,e)}function kw(i,e){i.uniform4iv(this.addr,e)}function Hw(i,e){i.uniform1uiv(this.addr,e)}function Vw(i,e){i.uniform2uiv(this.addr,e)}function Ww(i,e){i.uniform3uiv(this.addr,e)}function Xw(i,e){i.uniform4uiv(this.addr,e)}function qw(i,e,t){const n=this.cache,s=e.length,a=Al(t,s);nn(n,a)||(i.uniform1iv(this.addr,a),rn(n,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||Km,a[c])}function Yw(i,e,t){const n=this.cache,s=e.length,a=Al(t,s);nn(n,a)||(i.uniform1iv(this.addr,a),rn(n,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||Qm,a[c])}function $w(i,e,t){const n=this.cache,s=e.length,a=Al(t,s);nn(n,a)||(i.uniform1iv(this.addr,a),rn(n,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||eg,a[c])}function Zw(i,e,t){const n=this.cache,s=e.length,a=Al(t,s);nn(n,a)||(i.uniform1iv(this.addr,a),rn(n,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||jm,a[c])}function Kw(i){switch(i){case 5126:return Lw;case 35664:return Iw;case 35665:return Dw;case 35666:return Uw;case 35674:return Nw;case 35675:return Ow;case 35676:return Fw;case 5124:case 35670:return Bw;case 35667:case 35671:return zw;case 35668:case 35672:return Gw;case 35669:case 35673:return kw;case 5125:return Hw;case 36294:return Vw;case 36295:return Ww;case 36296:return Xw;case 35678:case 36198:case 36298:case 36306:case 35682:return qw;case 35679:case 36299:case 36307:return Yw;case 35680:case 36300:case 36308:case 36293:return $w;case 36289:case 36303:case 36311:case 36292:return Zw}}class Jw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pw(t.type)}}class jw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kw(t.type)}}class Qw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const l=s[a];l.setValue(e,t[l.id],n)}}}const _u=/(\w+)(\])?(\[|\.)?/g;function zp(i,e){i.seq.push(e),i.map[e.id]=e}function e1(i,e,t){const n=i.name,s=n.length;for(_u.lastIndex=0;;){const a=_u.exec(n),c=_u.lastIndex;let l=a[1];const f=a[2]==="]",h=a[3];if(f&&(l=l|0),h===void 0||h==="["&&c+2===s){zp(t,h===void 0?new Jw(l,i,e):new jw(l,i,e));break}else{let p=t.map[l];p===void 0&&(p=new Qw(l),zp(t,p)),t=p}}}class cl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);e1(a,c,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,c=t.length;a!==c;++a){const l=t[a],f=n[l.id];f.needsUpdate!==!1&&l.setValue(e,f.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&n.push(c)}return n}}function Gp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const t1=37297;let n1=0;function i1(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}function r1(i){const e=Ut.getPrimaries(Ut.workingColorSpace),t=Ut.getPrimaries(i);let n;switch(e===t?n="":e===pl&&t===dl?n="LinearDisplayP3ToLinearSRGB":e===dl&&t===pl&&(n="LinearSRGBToLinearDisplayP3"),i){case xr:case bl:return[n,"LinearTransferOETF"];case fi:case ju:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function kp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+i1(i.getShaderSource(e),c)}else return s}function s1(i,e){const t=r1(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function o1(i,e){let t;switch(e){case jE:t="Linear";break;case QE:t="Reinhard";break;case eM:t="OptimizedCineon";break;case tM:t="ACESFilmic";break;case iM:t="AgX";break;case rM:t="Neutral";break;case nM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function a1(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Os).join(`
`)}function l1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function c1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function u1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),c=a.name;let l=1;a.type===i.FLOAT_MAT2&&(l=2),a.type===i.FLOAT_MAT3&&(l=3),a.type===i.FLOAT_MAT4&&(l=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:l}}return t}function Os(i){return i!==""}function Hp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bu(i){return i.replace(f1,d1)}const h1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function d1(i,e){let t=xt[e];if(t===void 0){const n=h1.get(e);if(n!==void 0)t=xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Bu(t)}const p1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wp(i){return i.replace(p1,m1)}function m1(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Xp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function g1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===AE?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function _1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hs:case Vs:e="ENVMAP_TYPE_CUBE";break;case Ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function x1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bm:e="ENVMAP_BLENDING_MULTIPLY";break;case KE:e="ENVMAP_BLENDING_MIX";break;case JE:e="ENVMAP_BLENDING_ADD";break}return e}function y1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function S1(i,e,t,n){const s=i.getContext(),a=t.defines;let c=t.vertexShader,l=t.fragmentShader;const f=g1(t),h=_1(t),d=v1(t),p=x1(t),v=y1(t),x=t.isWebGL2?"":a1(t),S=l1(t),E=c1(a),m=s.createProgram();let g,P,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Os).join(`
`),g.length>0&&(g+=`
`),P=[x,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Os).join(`
`),P.length>0&&(P+=`
`)):(g=[Xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),P=[x,Xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mr?"#define TONE_MAPPING":"",t.toneMapping!==mr?xt.tonemapping_pars_fragment:"",t.toneMapping!==mr?o1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,s1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Os).join(`
`)),c=Bu(c),c=Hp(c,t),c=Vp(c,t),l=Bu(l),l=Hp(l,t),l=Vp(l,t),c=Wp(c),l=Wp(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,P=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const A=y+g+c,k=y+P+l,G=Gp(s,s.VERTEX_SHADER,A),U=Gp(s,s.FRAGMENT_SHADER,k);s.attachShader(m,G),s.attachShader(m,U),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function W(pe){if(i.debug.checkShaderErrors){const Te=s.getProgramInfoLog(m).trim(),Y=s.getShaderInfoLog(G).trim(),xe=s.getShaderInfoLog(U).trim();let oe=!0,ae=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,G,U);else{const K=kp(s,G,"vertex"),Ee=kp(s,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+pe.name+`
Material Type: `+pe.type+`

Program Info Log: `+Te+`
`+K+`
`+Ee)}else Te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Te):(Y===""||xe==="")&&(ae=!1);ae&&(pe.diagnostics={runnable:oe,programLog:Te,vertexShader:{log:Y,prefix:g},fragmentShader:{log:xe,prefix:P}})}s.deleteShader(G),s.deleteShader(U),fe=new cl(s,m),b=u1(s,m)}let fe;this.getUniforms=function(){return fe===void 0&&W(this),fe};let b;this.getAttributes=function(){return b===void 0&&W(this),b};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(m,t1)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=n1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=G,this.fragmentShader=U,this}let E1=0;class M1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new b1(e),t.set(e,n)),n}}class b1{constructor(e){this.id=E1++,this.code=e,this.usedTimes=0}}function T1(i,e,t,n,s,a,c){const l=new Gm,f=new M1,h=new Set,d=[],p=s.isWebGL2,v=s.logarithmicDepthBuffer,x=s.vertexTextures;let S=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return h.add(b),b===0?"uv":`uv${b}`}function g(b,O,pe,Te,Y){const xe=Te.fog,oe=Y.geometry,ae=b.isMeshStandardMaterial?Te.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||ae),Ee=K&&K.mapping===Ml?K.image.height:null,Me=E[b.type];b.precision!==null&&(S=s.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const Re=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,ke=Re!==void 0?Re.length:0;let nt=0;oe.morphAttributes.position!==void 0&&(nt=1),oe.morphAttributes.normal!==void 0&&(nt=2),oe.morphAttributes.color!==void 0&&(nt=3);let z,B,I,L;if(Me){const wt=Ei[Me];z=wt.vertexShader,B=wt.fragmentShader}else z=b.vertexShader,B=b.fragmentShader,f.update(b),I=f.getVertexShaderID(b),L=f.getFragmentShaderID(b);const ie=i.getRenderTarget(),de=Y.isInstancedMesh===!0,se=Y.isBatchedMesh===!0,Se=!!b.map,D=!!b.matcap,ce=!!K,X=!!b.aoMap,te=!!b.lightMap,ne=!!b.bumpMap,ye=!!b.normalMap,q=!!b.displacementMap,F=!!b.emissiveMap,De=!!b.metalnessMap,R=!!b.roughnessMap,T=b.anisotropy>0,ue=b.clearcoat>0,me=b.iridescence>0,Le=b.sheen>0,Ie=b.transmission>0,et=T&&!!b.anisotropyMap,$e=ue&&!!b.clearcoatMap,Be=ue&&!!b.clearcoatNormalMap,ze=ue&&!!b.clearcoatRoughnessMap,tt=me&&!!b.iridescenceMap,Oe=me&&!!b.iridescenceThicknessMap,Dt=Le&&!!b.sheenColorMap,ct=Le&&!!b.sheenRoughnessMap,Qe=!!b.specularMap,qe=!!b.specularColorMap,Ke=!!b.specularIntensityMap,H=Ie&&!!b.transmissionMap,Pe=Ie&&!!b.thicknessMap,Ze=!!b.gradientMap,Z=!!b.alphaMap,Fe=b.alphaTest>0,le=!!b.alphaHash,Ne=!!b.extensions;let Ve=mr;b.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ve=i.toneMapping);const _t={isWebGL2:p,shaderID:Me,shaderType:b.type,shaderName:b.name,vertexShader:z,fragmentShader:B,defines:b.defines,customVertexShaderID:I,customFragmentShaderID:L,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:se,instancing:de,instancingColor:de&&Y.instanceColor!==null,instancingMorph:de&&Y.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:xr,alphaToCoverage:!!b.alphaToCoverage,map:Se,matcap:D,envMap:ce,envMapMode:ce&&K.mapping,envMapCubeUVHeight:Ee,aoMap:X,lightMap:te,bumpMap:ne,normalMap:ye,displacementMap:x&&q,emissiveMap:F,normalMapObjectSpace:ye&&b.normalMapType===gM,normalMapTangentSpace:ye&&b.normalMapType===mM,metalnessMap:De,roughnessMap:R,anisotropy:T,anisotropyMap:et,clearcoat:ue,clearcoatMap:$e,clearcoatNormalMap:Be,clearcoatRoughnessMap:ze,iridescence:me,iridescenceMap:tt,iridescenceThicknessMap:Oe,sheen:Le,sheenColorMap:Dt,sheenRoughnessMap:ct,specularMap:Qe,specularColorMap:qe,specularIntensityMap:Ke,transmission:Ie,transmissionMap:H,thicknessMap:Pe,gradientMap:Ze,opaque:b.transparent===!1&&b.blending===Bs&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:Fe,alphaHash:le,combine:b.combine,mapUv:Se&&m(b.map.channel),aoMapUv:X&&m(b.aoMap.channel),lightMapUv:te&&m(b.lightMap.channel),bumpMapUv:ne&&m(b.bumpMap.channel),normalMapUv:ye&&m(b.normalMap.channel),displacementMapUv:q&&m(b.displacementMap.channel),emissiveMapUv:F&&m(b.emissiveMap.channel),metalnessMapUv:De&&m(b.metalnessMap.channel),roughnessMapUv:R&&m(b.roughnessMap.channel),anisotropyMapUv:et&&m(b.anisotropyMap.channel),clearcoatMapUv:$e&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:Be&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:ct&&m(b.sheenRoughnessMap.channel),specularMapUv:Qe&&m(b.specularMap.channel),specularColorMapUv:qe&&m(b.specularColorMap.channel),specularIntensityMapUv:Ke&&m(b.specularIntensityMap.channel),transmissionMapUv:H&&m(b.transmissionMap.channel),thicknessMapUv:Pe&&m(b.thicknessMap.channel),alphaMapUv:Z&&m(b.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(ye||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!oe.attributes.uv&&(Se||Z),fog:!!xe,useFog:b.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:Y.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:nt,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&pe.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Se&&b.map.isVideoTexture===!0&&Ut.getTransfer(b.map.colorSpace)===Gt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Mi,flipSided:b.side===In,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Ne&&b.extensions.derivatives===!0,extensionFragDepth:Ne&&b.extensions.fragDepth===!0,extensionDrawBuffers:Ne&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ne&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ne&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ne&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return _t.vertexUv1s=h.has(1),_t.vertexUv2s=h.has(2),_t.vertexUv3s=h.has(3),h.clear(),_t}function P(b){const O=[];if(b.shaderID?O.push(b.shaderID):(O.push(b.customVertexShaderID),O.push(b.customFragmentShaderID)),b.defines!==void 0)for(const pe in b.defines)O.push(pe),O.push(b.defines[pe]);return b.isRawShaderMaterial===!1&&(y(O,b),A(O,b),O.push(i.outputColorSpace)),O.push(b.customProgramCacheKey),O.join()}function y(b,O){b.push(O.precision),b.push(O.outputColorSpace),b.push(O.envMapMode),b.push(O.envMapCubeUVHeight),b.push(O.mapUv),b.push(O.alphaMapUv),b.push(O.lightMapUv),b.push(O.aoMapUv),b.push(O.bumpMapUv),b.push(O.normalMapUv),b.push(O.displacementMapUv),b.push(O.emissiveMapUv),b.push(O.metalnessMapUv),b.push(O.roughnessMapUv),b.push(O.anisotropyMapUv),b.push(O.clearcoatMapUv),b.push(O.clearcoatNormalMapUv),b.push(O.clearcoatRoughnessMapUv),b.push(O.iridescenceMapUv),b.push(O.iridescenceThicknessMapUv),b.push(O.sheenColorMapUv),b.push(O.sheenRoughnessMapUv),b.push(O.specularMapUv),b.push(O.specularColorMapUv),b.push(O.specularIntensityMapUv),b.push(O.transmissionMapUv),b.push(O.thicknessMapUv),b.push(O.combine),b.push(O.fogExp2),b.push(O.sizeAttenuation),b.push(O.morphTargetsCount),b.push(O.morphAttributeCount),b.push(O.numDirLights),b.push(O.numPointLights),b.push(O.numSpotLights),b.push(O.numSpotLightMaps),b.push(O.numHemiLights),b.push(O.numRectAreaLights),b.push(O.numDirLightShadows),b.push(O.numPointLightShadows),b.push(O.numSpotLightShadows),b.push(O.numSpotLightShadowsWithMaps),b.push(O.numLightProbes),b.push(O.shadowMapType),b.push(O.toneMapping),b.push(O.numClippingPlanes),b.push(O.numClipIntersection),b.push(O.depthPacking)}function A(b,O){l.disableAll(),O.isWebGL2&&l.enable(0),O.supportsVertexTextures&&l.enable(1),O.instancing&&l.enable(2),O.instancingColor&&l.enable(3),O.instancingMorph&&l.enable(4),O.matcap&&l.enable(5),O.envMap&&l.enable(6),O.normalMapObjectSpace&&l.enable(7),O.normalMapTangentSpace&&l.enable(8),O.clearcoat&&l.enable(9),O.iridescence&&l.enable(10),O.alphaTest&&l.enable(11),O.vertexColors&&l.enable(12),O.vertexAlphas&&l.enable(13),O.vertexUv1s&&l.enable(14),O.vertexUv2s&&l.enable(15),O.vertexUv3s&&l.enable(16),O.vertexTangents&&l.enable(17),O.anisotropy&&l.enable(18),O.alphaHash&&l.enable(19),O.batching&&l.enable(20),b.push(l.mask),l.disableAll(),O.fog&&l.enable(0),O.useFog&&l.enable(1),O.flatShading&&l.enable(2),O.logarithmicDepthBuffer&&l.enable(3),O.skinning&&l.enable(4),O.morphTargets&&l.enable(5),O.morphNormals&&l.enable(6),O.morphColors&&l.enable(7),O.premultipliedAlpha&&l.enable(8),O.shadowMapEnabled&&l.enable(9),O.useLegacyLights&&l.enable(10),O.doubleSided&&l.enable(11),O.flipSided&&l.enable(12),O.useDepthPacking&&l.enable(13),O.dithering&&l.enable(14),O.transmission&&l.enable(15),O.sheen&&l.enable(16),O.opaque&&l.enable(17),O.pointsUvs&&l.enable(18),O.decodeVideoTexture&&l.enable(19),O.alphaToCoverage&&l.enable(20),b.push(l.mask)}function k(b){const O=E[b.type];let pe;if(O){const Te=Ei[O];pe=rb.clone(Te.uniforms)}else pe=b.uniforms;return pe}function G(b,O){let pe;for(let Te=0,Y=d.length;Te<Y;Te++){const xe=d[Te];if(xe.cacheKey===O){pe=xe,++pe.usedTimes;break}}return pe===void 0&&(pe=new S1(i,O,b,a),d.push(pe)),pe}function U(b){if(--b.usedTimes===0){const O=d.indexOf(b);d[O]=d[d.length-1],d.pop(),b.destroy()}}function W(b){f.remove(b)}function fe(){f.dispose()}return{getParameters:g,getProgramCacheKey:P,getUniforms:k,acquireProgram:G,releaseProgram:U,releaseShaderCache:W,programs:d,dispose:fe}}function A1(){let i=new WeakMap;function e(a){let c=i.get(a);return c===void 0&&(c={},i.set(a,c)),c}function t(a){i.delete(a)}function n(a,c,l){i.get(a)[c]=l}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function w1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yp(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function c(p,v,x,S,E,m){let g=i[e];return g===void 0?(g={id:p.id,object:p,geometry:v,material:x,groupOrder:S,renderOrder:p.renderOrder,z:E,group:m},i[e]=g):(g.id=p.id,g.object=p,g.geometry=v,g.material=x,g.groupOrder=S,g.renderOrder=p.renderOrder,g.z=E,g.group=m),e++,g}function l(p,v,x,S,E,m){const g=c(p,v,x,S,E,m);x.transmission>0?n.push(g):x.transparent===!0?s.push(g):t.push(g)}function f(p,v,x,S,E,m){const g=c(p,v,x,S,E,m);x.transmission>0?n.unshift(g):x.transparent===!0?s.unshift(g):t.unshift(g)}function h(p,v){t.length>1&&t.sort(p||w1),n.length>1&&n.sort(v||qp),s.length>1&&s.sort(v||qp)}function d(){for(let p=e,v=i.length;p<v;p++){const x=i[p];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:l,unshift:f,finish:d,sort:h}}function C1(){let i=new WeakMap;function e(n,s){const a=i.get(n);let c;return a===void 0?(c=new Yp,i.set(n,[c])):s>=a.length?(c=new Yp,a.push(c)):c=a[s],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function R1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new bt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return i[e.id]=t,t}}}function P1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let L1=0;function I1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function D1(i,e){const t=new R1,n=P1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new Q);const a=new Q,c=new qt,l=new qt;function f(d,p){let v=0,x=0,S=0;for(let pe=0;pe<9;pe++)s.probe[pe].set(0,0,0);let E=0,m=0,g=0,P=0,y=0,A=0,k=0,G=0,U=0,W=0,fe=0;d.sort(I1);const b=p===!0?Math.PI:1;for(let pe=0,Te=d.length;pe<Te;pe++){const Y=d[pe],xe=Y.color,oe=Y.intensity,ae=Y.distance,K=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)v+=xe.r*oe*b,x+=xe.g*oe*b,S+=xe.b*oe*b;else if(Y.isLightProbe){for(let Ee=0;Ee<9;Ee++)s.probe[Ee].addScaledVector(Y.sh.coefficients[Ee],oe);fe++}else if(Y.isDirectionalLight){const Ee=t.get(Y);if(Ee.color.copy(Y.color).multiplyScalar(Y.intensity*b),Y.castShadow){const Me=Y.shadow,Re=n.get(Y);Re.shadowBias=Me.bias,Re.shadowNormalBias=Me.normalBias,Re.shadowRadius=Me.radius,Re.shadowMapSize=Me.mapSize,s.directionalShadow[E]=Re,s.directionalShadowMap[E]=K,s.directionalShadowMatrix[E]=Y.shadow.matrix,A++}s.directional[E]=Ee,E++}else if(Y.isSpotLight){const Ee=t.get(Y);Ee.position.setFromMatrixPosition(Y.matrixWorld),Ee.color.copy(xe).multiplyScalar(oe*b),Ee.distance=ae,Ee.coneCos=Math.cos(Y.angle),Ee.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),Ee.decay=Y.decay,s.spot[g]=Ee;const Me=Y.shadow;if(Y.map&&(s.spotLightMap[U]=Y.map,U++,Me.updateMatrices(Y),Y.castShadow&&W++),s.spotLightMatrix[g]=Me.matrix,Y.castShadow){const Re=n.get(Y);Re.shadowBias=Me.bias,Re.shadowNormalBias=Me.normalBias,Re.shadowRadius=Me.radius,Re.shadowMapSize=Me.mapSize,s.spotShadow[g]=Re,s.spotShadowMap[g]=K,G++}g++}else if(Y.isRectAreaLight){const Ee=t.get(Y);Ee.color.copy(xe).multiplyScalar(oe),Ee.halfWidth.set(Y.width*.5,0,0),Ee.halfHeight.set(0,Y.height*.5,0),s.rectArea[P]=Ee,P++}else if(Y.isPointLight){const Ee=t.get(Y);if(Ee.color.copy(Y.color).multiplyScalar(Y.intensity*b),Ee.distance=Y.distance,Ee.decay=Y.decay,Y.castShadow){const Me=Y.shadow,Re=n.get(Y);Re.shadowBias=Me.bias,Re.shadowNormalBias=Me.normalBias,Re.shadowRadius=Me.radius,Re.shadowMapSize=Me.mapSize,Re.shadowCameraNear=Me.camera.near,Re.shadowCameraFar=Me.camera.far,s.pointShadow[m]=Re,s.pointShadowMap[m]=K,s.pointShadowMatrix[m]=Y.shadow.matrix,k++}s.point[m]=Ee,m++}else if(Y.isHemisphereLight){const Ee=t.get(Y);Ee.skyColor.copy(Y.color).multiplyScalar(oe*b),Ee.groundColor.copy(Y.groundColor).multiplyScalar(oe*b),s.hemi[y]=Ee,y++}}P>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ge.LTC_FLOAT_1,s.rectAreaLTC2=Ge.LTC_FLOAT_2):(s.rectAreaLTC1=Ge.LTC_HALF_1,s.rectAreaLTC2=Ge.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ge.LTC_FLOAT_1,s.rectAreaLTC2=Ge.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ge.LTC_HALF_1,s.rectAreaLTC2=Ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=S;const O=s.hash;(O.directionalLength!==E||O.pointLength!==m||O.spotLength!==g||O.rectAreaLength!==P||O.hemiLength!==y||O.numDirectionalShadows!==A||O.numPointShadows!==k||O.numSpotShadows!==G||O.numSpotMaps!==U||O.numLightProbes!==fe)&&(s.directional.length=E,s.spot.length=g,s.rectArea.length=P,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=k,s.pointShadowMap.length=k,s.spotShadow.length=G,s.spotShadowMap.length=G,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=k,s.spotLightMatrix.length=G+U-W,s.spotLightMap.length=U,s.numSpotLightShadowsWithMaps=W,s.numLightProbes=fe,O.directionalLength=E,O.pointLength=m,O.spotLength=g,O.rectAreaLength=P,O.hemiLength=y,O.numDirectionalShadows=A,O.numPointShadows=k,O.numSpotShadows=G,O.numSpotMaps=U,O.numLightProbes=fe,s.version=L1++)}function h(d,p){let v=0,x=0,S=0,E=0,m=0;const g=p.matrixWorldInverse;for(let P=0,y=d.length;P<y;P++){const A=d[P];if(A.isDirectionalLight){const k=s.directional[v];k.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),k.direction.sub(a),k.direction.transformDirection(g),v++}else if(A.isSpotLight){const k=s.spot[S];k.position.setFromMatrixPosition(A.matrixWorld),k.position.applyMatrix4(g),k.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),k.direction.sub(a),k.direction.transformDirection(g),S++}else if(A.isRectAreaLight){const k=s.rectArea[E];k.position.setFromMatrixPosition(A.matrixWorld),k.position.applyMatrix4(g),l.identity(),c.copy(A.matrixWorld),c.premultiply(g),l.extractRotation(c),k.halfWidth.set(A.width*.5,0,0),k.halfHeight.set(0,A.height*.5,0),k.halfWidth.applyMatrix4(l),k.halfHeight.applyMatrix4(l),E++}else if(A.isPointLight){const k=s.point[x];k.position.setFromMatrixPosition(A.matrixWorld),k.position.applyMatrix4(g),x++}else if(A.isHemisphereLight){const k=s.hemi[m];k.direction.setFromMatrixPosition(A.matrixWorld),k.direction.transformDirection(g),m++}}}return{setup:f,setupView:h,state:s}}function $p(i,e){const t=new D1(i,e),n=[],s=[];function a(){n.length=0,s.length=0}function c(p){n.push(p)}function l(p){s.push(p)}function f(p){t.setup(n,p)}function h(p){t.setupView(n,p)}return{init:a,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:f,setupLightsView:h,pushLight:c,pushShadow:l}}function U1(i,e){let t=new WeakMap;function n(a,c=0){const l=t.get(a);let f;return l===void 0?(f=new $p(i,e),t.set(a,[f])):c>=l.length?(f=new $p(i,e),l.push(f)):f=l[c],f}function s(){t=new WeakMap}return{get:n,dispose:s}}class N1 extends Tl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class O1 extends Tl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const F1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B1=`uniform sampler2D shadow_pass;
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
}`;function z1(i,e,t){let n=new Ym;const s=new Ae,a=new Ae,c=new hn,l=new N1({depthPacking:pM}),f=new O1,h={},d=t.maxTextureSize,p={[_r]:In,[In]:_r,[Mi]:Mi},v=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:F1,fragmentShader:B1}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const S=new ei;S.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Tn(S,v),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mm;let g=this.type;this.render=function(G,U,W){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||G.length===0)return;const fe=i.getRenderTarget(),b=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),pe=i.state;pe.setBlending(pr),pe.buffers.color.setClear(1,1,1,1),pe.buffers.depth.setTest(!0),pe.setScissorTest(!1);const Te=g!==Wi&&this.type===Wi,Y=g===Wi&&this.type!==Wi;for(let xe=0,oe=G.length;xe<oe;xe++){const ae=G[xe],K=ae.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const Ee=K.getFrameExtents();if(s.multiply(Ee),a.copy(K.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/Ee.x),s.x=a.x*Ee.x,K.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/Ee.y),s.y=a.y*Ee.y,K.mapSize.y=a.y)),K.map===null||Te===!0||Y===!0){const Re=this.type!==Wi?{minFilter:fn,magFilter:fn}:{};K.map!==null&&K.map.dispose(),K.map=new kr(s.x,s.y,Re),K.map.texture.name=ae.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const Me=K.getViewportCount();for(let Re=0;Re<Me;Re++){const ke=K.getViewport(Re);c.set(a.x*ke.x,a.y*ke.y,a.x*ke.z,a.y*ke.w),pe.viewport(c),K.updateMatrices(ae,Re),n=K.getFrustum(),A(U,W,K.camera,ae,this.type)}K.isPointLightShadow!==!0&&this.type===Wi&&P(K,W),K.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(fe,b,O)};function P(G,U){const W=e.update(E);v.defines.VSM_SAMPLES!==G.blurSamples&&(v.defines.VSM_SAMPLES=G.blurSamples,x.defines.VSM_SAMPLES=G.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new kr(s.x,s.y)),v.uniforms.shadow_pass.value=G.map.texture,v.uniforms.resolution.value=G.mapSize,v.uniforms.radius.value=G.radius,i.setRenderTarget(G.mapPass),i.clear(),i.renderBufferDirect(U,null,W,v,E,null),x.uniforms.shadow_pass.value=G.mapPass.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,i.setRenderTarget(G.map),i.clear(),i.renderBufferDirect(U,null,W,x,E,null)}function y(G,U,W,fe){let b=null;const O=W.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(O!==void 0)b=O;else if(b=W.isPointLight===!0?f:l,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const pe=b.uuid,Te=U.uuid;let Y=h[pe];Y===void 0&&(Y={},h[pe]=Y);let xe=Y[Te];xe===void 0&&(xe=b.clone(),Y[Te]=xe,U.addEventListener("dispose",k)),b=xe}if(b.visible=U.visible,b.wireframe=U.wireframe,fe===Wi?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:p[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,W.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const pe=i.properties.get(b);pe.light=W}return b}function A(G,U,W,fe,b){if(G.visible===!1)return;if(G.layers.test(U.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&b===Wi)&&(!G.frustumCulled||n.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,G.matrixWorld);const Te=e.update(G),Y=G.material;if(Array.isArray(Y)){const xe=Te.groups;for(let oe=0,ae=xe.length;oe<ae;oe++){const K=xe[oe],Ee=Y[K.materialIndex];if(Ee&&Ee.visible){const Me=y(G,Ee,fe,b);G.onBeforeShadow(i,G,U,W,Te,Me,K),i.renderBufferDirect(W,null,Te,Me,G,K),G.onAfterShadow(i,G,U,W,Te,Me,K)}}}else if(Y.visible){const xe=y(G,Y,fe,b);G.onBeforeShadow(i,G,U,W,Te,xe,null),i.renderBufferDirect(W,null,Te,xe,G,null),G.onAfterShadow(i,G,U,W,Te,xe,null)}}const pe=G.children;for(let Te=0,Y=pe.length;Te<Y;Te++)A(pe[Te],U,W,fe,b)}function k(G){G.target.removeEventListener("dispose",k);for(const W in h){const fe=h[W],b=G.target.uuid;b in fe&&(fe[b].dispose(),delete fe[b])}}}function G1(i,e,t){const n=t.isWebGL2;function s(){let Z=!1;const Fe=new hn;let le=null;const Ne=new hn(0,0,0,0);return{setMask:function(Ve){le!==Ve&&!Z&&(i.colorMask(Ve,Ve,Ve,Ve),le=Ve)},setLocked:function(Ve){Z=Ve},setClear:function(Ve,_t,wt,Pt,kt){kt===!0&&(Ve*=Pt,_t*=Pt,wt*=Pt),Fe.set(Ve,_t,wt,Pt),Ne.equals(Fe)===!1&&(i.clearColor(Ve,_t,wt,Pt),Ne.copy(Fe))},reset:function(){Z=!1,le=null,Ne.set(-1,0,0,0)}}}function a(){let Z=!1,Fe=null,le=null,Ne=null;return{setTest:function(Ve){Ve?de(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(Ve){Fe!==Ve&&!Z&&(i.depthMask(Ve),Fe=Ve)},setFunc:function(Ve){if(le!==Ve){switch(Ve){case VE:i.depthFunc(i.NEVER);break;case WE:i.depthFunc(i.ALWAYS);break;case XE:i.depthFunc(i.LESS);break;case fl:i.depthFunc(i.LEQUAL);break;case qE:i.depthFunc(i.EQUAL);break;case YE:i.depthFunc(i.GEQUAL);break;case $E:i.depthFunc(i.GREATER);break;case ZE:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Ve}},setLocked:function(Ve){Z=Ve},setClear:function(Ve){Ne!==Ve&&(i.clearDepth(Ve),Ne=Ve)},reset:function(){Z=!1,Fe=null,le=null,Ne=null}}}function c(){let Z=!1,Fe=null,le=null,Ne=null,Ve=null,_t=null,wt=null,Pt=null,kt=null;return{setTest:function(At){Z||(At?de(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(At){Fe!==At&&!Z&&(i.stencilMask(At),Fe=At)},setFunc:function(At,Lt,sn){(le!==At||Ne!==Lt||Ve!==sn)&&(i.stencilFunc(At,Lt,sn),le=At,Ne=Lt,Ve=sn)},setOp:function(At,Lt,sn){(_t!==At||wt!==Lt||Pt!==sn)&&(i.stencilOp(At,Lt,sn),_t=At,wt=Lt,Pt=sn)},setLocked:function(At){Z=At},setClear:function(At){kt!==At&&(i.clearStencil(At),kt=At)},reset:function(){Z=!1,Fe=null,le=null,Ne=null,Ve=null,_t=null,wt=null,Pt=null,kt=null}}}const l=new s,f=new a,h=new c,d=new WeakMap,p=new WeakMap;let v={},x={},S=new WeakMap,E=[],m=null,g=!1,P=null,y=null,A=null,k=null,G=null,U=null,W=null,fe=new bt(0,0,0),b=0,O=!1,pe=null,Te=null,Y=null,xe=null,oe=null;const ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Ee=0;const Me=i.getParameter(i.VERSION);Me.indexOf("WebGL")!==-1?(Ee=parseFloat(/^WebGL (\d)/.exec(Me)[1]),K=Ee>=1):Me.indexOf("OpenGL ES")!==-1&&(Ee=parseFloat(/^OpenGL ES (\d)/.exec(Me)[1]),K=Ee>=2);let Re=null,ke={};const nt=i.getParameter(i.SCISSOR_BOX),z=i.getParameter(i.VIEWPORT),B=new hn().fromArray(nt),I=new hn().fromArray(z);function L(Z,Fe,le,Ne){const Ve=new Uint8Array(4),_t=i.createTexture();i.bindTexture(Z,_t),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<le;wt++)n&&(Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY)?i.texImage3D(Fe,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,Ve):i.texImage2D(Fe+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ve);return _t}const ie={};ie[i.TEXTURE_2D]=L(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=L(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ie[i.TEXTURE_2D_ARRAY]=L(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=L(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),f.setClear(1),h.setClear(0),de(i.DEPTH_TEST),f.setFunc(fl),q(!1),F(wd),de(i.CULL_FACE),ne(pr);function de(Z){v[Z]!==!0&&(i.enable(Z),v[Z]=!0)}function se(Z){v[Z]!==!1&&(i.disable(Z),v[Z]=!1)}function Se(Z,Fe){return x[Z]!==Fe?(i.bindFramebuffer(Z,Fe),x[Z]=Fe,n&&(Z===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=Fe),Z===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=Fe)),!0):!1}function D(Z,Fe){let le=E,Ne=!1;if(Z){le=S.get(Fe),le===void 0&&(le=[],S.set(Fe,le));const Ve=Z.textures;if(le.length!==Ve.length||le[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,wt=Ve.length;_t<wt;_t++)le[_t]=i.COLOR_ATTACHMENT0+_t;le.length=Ve.length,Ne=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,Ne=!0);if(Ne)if(t.isWebGL2)i.drawBuffers(le);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ce(Z){return m!==Z?(i.useProgram(Z),m=Z,!0):!1}const X={[Or]:i.FUNC_ADD,[CE]:i.FUNC_SUBTRACT,[RE]:i.FUNC_REVERSE_SUBTRACT};if(n)X[Ld]=i.MIN,X[Id]=i.MAX;else{const Z=e.get("EXT_blend_minmax");Z!==null&&(X[Ld]=Z.MIN_EXT,X[Id]=Z.MAX_EXT)}const te={[PE]:i.ZERO,[LE]:i.ONE,[IE]:i.SRC_COLOR,[Pu]:i.SRC_ALPHA,[BE]:i.SRC_ALPHA_SATURATE,[OE]:i.DST_COLOR,[UE]:i.DST_ALPHA,[DE]:i.ONE_MINUS_SRC_COLOR,[Lu]:i.ONE_MINUS_SRC_ALPHA,[FE]:i.ONE_MINUS_DST_COLOR,[NE]:i.ONE_MINUS_DST_ALPHA,[zE]:i.CONSTANT_COLOR,[GE]:i.ONE_MINUS_CONSTANT_COLOR,[kE]:i.CONSTANT_ALPHA,[HE]:i.ONE_MINUS_CONSTANT_ALPHA};function ne(Z,Fe,le,Ne,Ve,_t,wt,Pt,kt,At){if(Z===pr){g===!0&&(se(i.BLEND),g=!1);return}if(g===!1&&(de(i.BLEND),g=!0),Z!==wE){if(Z!==P||At!==O){if((y!==Or||G!==Or)&&(i.blendEquation(i.FUNC_ADD),y=Or,G=Or),At)switch(Z){case Bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cd:i.blendFunc(i.ONE,i.ONE);break;case Rd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case Bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}A=null,k=null,U=null,W=null,fe.set(0,0,0),b=0,P=Z,O=At}return}Ve=Ve||Fe,_t=_t||le,wt=wt||Ne,(Fe!==y||Ve!==G)&&(i.blendEquationSeparate(X[Fe],X[Ve]),y=Fe,G=Ve),(le!==A||Ne!==k||_t!==U||wt!==W)&&(i.blendFuncSeparate(te[le],te[Ne],te[_t],te[wt]),A=le,k=Ne,U=_t,W=wt),(Pt.equals(fe)===!1||kt!==b)&&(i.blendColor(Pt.r,Pt.g,Pt.b,kt),fe.copy(Pt),b=kt),P=Z,O=!1}function ye(Z,Fe){Z.side===Mi?se(i.CULL_FACE):de(i.CULL_FACE);let le=Z.side===In;Fe&&(le=!le),q(le),Z.blending===Bs&&Z.transparent===!1?ne(pr):ne(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),f.setFunc(Z.depthFunc),f.setTest(Z.depthTest),f.setMask(Z.depthWrite),l.setMask(Z.colorWrite);const Ne=Z.stencilWrite;h.setTest(Ne),Ne&&(h.setMask(Z.stencilWriteMask),h.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),h.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),R(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function q(Z){pe!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),pe=Z)}function F(Z){Z!==bE?(de(i.CULL_FACE),Z!==Te&&(Z===wd?i.cullFace(i.BACK):Z===TE?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),Te=Z}function De(Z){Z!==Y&&(K&&i.lineWidth(Z),Y=Z)}function R(Z,Fe,le){Z?(de(i.POLYGON_OFFSET_FILL),(xe!==Fe||oe!==le)&&(i.polygonOffset(Fe,le),xe=Fe,oe=le)):se(i.POLYGON_OFFSET_FILL)}function T(Z){Z?de(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function ue(Z){Z===void 0&&(Z=i.TEXTURE0+ae-1),Re!==Z&&(i.activeTexture(Z),Re=Z)}function me(Z,Fe,le){le===void 0&&(Re===null?le=i.TEXTURE0+ae-1:le=Re);let Ne=ke[le];Ne===void 0&&(Ne={type:void 0,texture:void 0},ke[le]=Ne),(Ne.type!==Z||Ne.texture!==Fe)&&(Re!==le&&(i.activeTexture(le),Re=le),i.bindTexture(Z,Fe||ie[Z]),Ne.type=Z,Ne.texture=Fe)}function Le(){const Z=ke[Re];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function Ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function $e(){try{i.texSubImage2D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Be(){try{i.texSubImage3D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ze(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Oe(){try{i.texStorage2D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Dt(){try{i.texStorage3D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ct(){try{i.texImage2D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Qe(){try{i.texImage3D.apply(i,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function qe(Z){B.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),B.copy(Z))}function Ke(Z){I.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),I.copy(Z))}function H(Z,Fe){let le=p.get(Fe);le===void 0&&(le=new WeakMap,p.set(Fe,le));let Ne=le.get(Z);Ne===void 0&&(Ne=i.getUniformBlockIndex(Fe,Z.name),le.set(Z,Ne))}function Pe(Z,Fe){const Ne=p.get(Fe).get(Z);d.get(Fe)!==Ne&&(i.uniformBlockBinding(Fe,Ne,Z.__bindingPointIndex),d.set(Fe,Ne))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),v={},Re=null,ke={},x={},S=new WeakMap,E=[],m=null,g=!1,P=null,y=null,A=null,k=null,G=null,U=null,W=null,fe=new bt(0,0,0),b=0,O=!1,pe=null,Te=null,Y=null,xe=null,oe=null,B.set(0,0,i.canvas.width,i.canvas.height),I.set(0,0,i.canvas.width,i.canvas.height),l.reset(),f.reset(),h.reset()}return{buffers:{color:l,depth:f,stencil:h},enable:de,disable:se,bindFramebuffer:Se,drawBuffers:D,useProgram:ce,setBlending:ne,setMaterial:ye,setFlipSided:q,setCullFace:F,setLineWidth:De,setPolygonOffset:R,setScissorTest:T,activeTexture:ue,bindTexture:me,unbindTexture:Le,compressedTexImage2D:Ie,compressedTexImage3D:et,texImage2D:ct,texImage3D:Qe,updateUBOMapping:H,uniformBlockBinding:Pe,texStorage2D:Oe,texStorage3D:Dt,texSubImage2D:$e,texSubImage3D:Be,compressedTexSubImage2D:ze,compressedTexSubImage3D:tt,scissor:qe,viewport:Ke,reset:Ze}}function k1(i,e,t,n,s,a,c){const l=s.isWebGL2,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ae,p=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,T){return S?new OffscreenCanvas(R,T):Do("canvas")}function m(R,T,ue,me){let Le=1;const Ie=De(R);if((Ie.width>me||Ie.height>me)&&(Le=me/Math.max(Ie.width,Ie.height)),Le<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const et=T?gl:Math.floor,$e=et(Le*Ie.width),Be=et(Le*Ie.height);v===void 0&&(v=E($e,Be));const ze=ue?E($e,Be):v;return ze.width=$e,ze.height=Be,ze.getContext("2d").drawImage(R,0,0,$e,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ie.width+"x"+Ie.height+") to ("+$e+"x"+Be+")."),ze}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ie.width+"x"+Ie.height+")."),R;return R}function g(R){const T=De(R);return Fu(T.width)&&Fu(T.height)}function P(R){return l?!1:R.wrapS!==hi||R.wrapT!==hi||R.minFilter!==fn&&R.minFilter!==bn}function y(R,T){return R.generateMipmaps&&T&&R.minFilter!==fn&&R.minFilter!==bn}function A(R){i.generateMipmap(R)}function k(R,T,ue,me,Le=!1){if(l===!1)return T;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Ie=T;if(T===i.RED&&(ue===i.FLOAT&&(Ie=i.R32F),ue===i.HALF_FLOAT&&(Ie=i.R16F),ue===i.UNSIGNED_BYTE&&(Ie=i.R8)),T===i.RED_INTEGER&&(ue===i.UNSIGNED_BYTE&&(Ie=i.R8UI),ue===i.UNSIGNED_SHORT&&(Ie=i.R16UI),ue===i.UNSIGNED_INT&&(Ie=i.R32UI),ue===i.BYTE&&(Ie=i.R8I),ue===i.SHORT&&(Ie=i.R16I),ue===i.INT&&(Ie=i.R32I)),T===i.RG&&(ue===i.FLOAT&&(Ie=i.RG32F),ue===i.HALF_FLOAT&&(Ie=i.RG16F),ue===i.UNSIGNED_BYTE&&(Ie=i.RG8)),T===i.RG_INTEGER&&(ue===i.UNSIGNED_BYTE&&(Ie=i.RG8UI),ue===i.UNSIGNED_SHORT&&(Ie=i.RG16UI),ue===i.UNSIGNED_INT&&(Ie=i.RG32UI),ue===i.BYTE&&(Ie=i.RG8I),ue===i.SHORT&&(Ie=i.RG16I),ue===i.INT&&(Ie=i.RG32I)),T===i.RGBA){const et=Le?hl:Ut.getTransfer(me);ue===i.FLOAT&&(Ie=i.RGBA32F),ue===i.HALF_FLOAT&&(Ie=i.RGBA16F),ue===i.UNSIGNED_BYTE&&(Ie=et===Gt?i.SRGB8_ALPHA8:i.RGBA8),ue===i.UNSIGNED_SHORT_4_4_4_4&&(Ie=i.RGBA4),ue===i.UNSIGNED_SHORT_5_5_5_1&&(Ie=i.RGB5_A1)}return(Ie===i.R16F||Ie===i.R32F||Ie===i.RG16F||Ie===i.RG32F||Ie===i.RGBA16F||Ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Ie}function G(R,T,ue){return y(R,ue)===!0||R.isFramebufferTexture&&R.minFilter!==fn&&R.minFilter!==bn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function U(R){return R===fn||R===Dd||R===_o?i.NEAREST:i.LINEAR}function W(R){const T=R.target;T.removeEventListener("dispose",W),b(T),T.isVideoTexture&&p.delete(T)}function fe(R){const T=R.target;T.removeEventListener("dispose",fe),pe(T)}function b(R){const T=n.get(R);if(T.__webglInit===void 0)return;const ue=R.source,me=x.get(ue);if(me){const Le=me[T.__cacheKey];Le.usedTimes--,Le.usedTimes===0&&O(R),Object.keys(me).length===0&&x.delete(ue)}n.remove(R)}function O(R){const T=n.get(R);i.deleteTexture(T.__webglTexture);const ue=R.source,me=x.get(ue);delete me[T.__cacheKey],c.memory.textures--}function pe(R){const T=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let Le=0;Le<T.__webglFramebuffer[me].length;Le++)i.deleteFramebuffer(T.__webglFramebuffer[me][Le]);else i.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)i.deleteFramebuffer(T.__webglFramebuffer[me]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ue=R.textures;for(let me=0,Le=ue.length;me<Le;me++){const Ie=n.get(ue[me]);Ie.__webglTexture&&(i.deleteTexture(Ie.__webglTexture),c.memory.textures--),n.remove(ue[me])}n.remove(R)}let Te=0;function Y(){Te=0}function xe(){const R=Te;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),Te+=1,R}function oe(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function ae(R,T){const ue=n.get(R);if(R.isVideoTexture&&q(R),R.isRenderTargetTexture===!1&&R.version>0&&ue.__version!==R.version){const me=R.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(ue,R,T);return}}t.bindTexture(i.TEXTURE_2D,ue.__webglTexture,i.TEXTURE0+T)}function K(R,T){const ue=n.get(R);if(R.version>0&&ue.__version!==R.version){I(ue,R,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ue.__webglTexture,i.TEXTURE0+T)}function Ee(R,T){const ue=n.get(R);if(R.version>0&&ue.__version!==R.version){I(ue,R,T);return}t.bindTexture(i.TEXTURE_3D,ue.__webglTexture,i.TEXTURE0+T)}function Me(R,T){const ue=n.get(R);if(R.version>0&&ue.__version!==R.version){L(ue,R,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture,i.TEXTURE0+T)}const Re={[Uu]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[Nu]:i.MIRRORED_REPEAT},ke={[fn]:i.NEAREST,[Dd]:i.NEAREST_MIPMAP_NEAREST,[_o]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[Hc]:i.LINEAR_MIPMAP_NEAREST,[Br]:i.LINEAR_MIPMAP_LINEAR},nt={[_M]:i.NEVER,[MM]:i.ALWAYS,[vM]:i.LESS,[Um]:i.LEQUAL,[xM]:i.EQUAL,[EM]:i.GEQUAL,[yM]:i.GREATER,[SM]:i.NOTEQUAL};function z(R,T,ue){if(T.type===bi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===bn||T.magFilter===Hc||T.magFilter===_o||T.magFilter===Br||T.minFilter===bn||T.minFilter===Hc||T.minFilter===_o||T.minFilter===Br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),ue?(i.texParameteri(R,i.TEXTURE_WRAP_S,Re[T.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Re[T.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Re[T.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ke[T.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ke[T.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==hi||T.wrapT!==hi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,U(T.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,U(T.minFilter)),T.minFilter!==fn&&T.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,nt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fn||T.minFilter!==_o&&T.minFilter!==Br||T.type===bi&&e.has("OES_texture_float_linear")===!1||l===!1&&T.type===Lo&&e.has("OES_texture_half_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const me=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function B(R,T){let ue=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",W));const me=T.source;let Le=x.get(me);Le===void 0&&(Le={},x.set(me,Le));const Ie=oe(T);if(Ie!==R.__cacheKey){Le[Ie]===void 0&&(Le[Ie]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,ue=!0),Le[Ie].usedTimes++;const et=Le[R.__cacheKey];et!==void 0&&(Le[R.__cacheKey].usedTimes--,et.usedTimes===0&&O(T)),R.__cacheKey=Ie,R.__webglTexture=Le[Ie].texture}return ue}function I(R,T,ue){let me=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=i.TEXTURE_3D);const Le=B(R,T),Ie=T.source;t.bindTexture(me,R.__webglTexture,i.TEXTURE0+ue);const et=n.get(Ie);if(Ie.version!==et.__version||Le===!0){t.activeTexture(i.TEXTURE0+ue);const $e=Ut.getPrimaries(Ut.workingColorSpace),Be=T.colorSpace===hr?null:Ut.getPrimaries(T.colorSpace),ze=T.colorSpace===hr||$e===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const tt=P(T)&&g(T.image)===!1;let Oe=m(T.image,tt,!1,s.maxTextureSize);Oe=F(T,Oe);const Dt=g(Oe)||l,ct=a.convert(T.format,T.colorSpace);let Qe=a.convert(T.type),qe=k(T.internalFormat,ct,Qe,T.colorSpace,T.isVideoTexture);z(me,T,Dt);let Ke;const H=T.mipmaps,Pe=l&&T.isVideoTexture!==!0&&qe!==Dm,Ze=et.__version===void 0||Le===!0,Z=Ie.dataReady,Fe=G(T,Oe,Dt);if(T.isDepthTexture)qe=i.DEPTH_COMPONENT,l?T.type===bi?qe=i.DEPTH_COMPONENT32F:T.type===dr?qe=i.DEPTH_COMPONENT24:T.type===zr?qe=i.DEPTH24_STENCIL8:qe=i.DEPTH_COMPONENT16:T.type===bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Gr&&qe===i.DEPTH_COMPONENT&&T.type!==Ju&&T.type!==dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=dr,Qe=a.convert(T.type)),T.format===Ws&&qe===i.DEPTH_COMPONENT&&(qe=i.DEPTH_STENCIL,T.type!==zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=zr,Qe=a.convert(T.type))),Ze&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,qe,Oe.width,Oe.height):t.texImage2D(i.TEXTURE_2D,0,qe,Oe.width,Oe.height,0,ct,Qe,null));else if(T.isDataTexture)if(H.length>0&&Dt){Pe&&Ze&&t.texStorage2D(i.TEXTURE_2D,Fe,qe,H[0].width,H[0].height);for(let le=0,Ne=H.length;le<Ne;le++)Ke=H[le],Pe?Z&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Ke.width,Ke.height,ct,Qe,Ke.data):t.texImage2D(i.TEXTURE_2D,le,qe,Ke.width,Ke.height,0,ct,Qe,Ke.data);T.generateMipmaps=!1}else Pe?(Ze&&t.texStorage2D(i.TEXTURE_2D,Fe,qe,Oe.width,Oe.height),Z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Oe.width,Oe.height,ct,Qe,Oe.data)):t.texImage2D(i.TEXTURE_2D,0,qe,Oe.width,Oe.height,0,ct,Qe,Oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Pe&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,qe,H[0].width,H[0].height,Oe.depth);for(let le=0,Ne=H.length;le<Ne;le++)Ke=H[le],T.format!==di?ct!==null?Pe?Z&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Ke.width,Ke.height,Oe.depth,ct,Ke.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,qe,Ke.width,Ke.height,Oe.depth,0,Ke.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?Z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Ke.width,Ke.height,Oe.depth,ct,Qe,Ke.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,qe,Ke.width,Ke.height,Oe.depth,0,ct,Qe,Ke.data)}else{Pe&&Ze&&t.texStorage2D(i.TEXTURE_2D,Fe,qe,H[0].width,H[0].height);for(let le=0,Ne=H.length;le<Ne;le++)Ke=H[le],T.format!==di?ct!==null?Pe?Z&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,Ke.width,Ke.height,ct,Ke.data):t.compressedTexImage2D(i.TEXTURE_2D,le,qe,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?Z&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Ke.width,Ke.height,ct,Qe,Ke.data):t.texImage2D(i.TEXTURE_2D,le,qe,Ke.width,Ke.height,0,ct,Qe,Ke.data)}else if(T.isDataArrayTexture)Pe?(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,qe,Oe.width,Oe.height,Oe.depth),Z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Oe.width,Oe.height,Oe.depth,ct,Qe,Oe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,qe,Oe.width,Oe.height,Oe.depth,0,ct,Qe,Oe.data);else if(T.isData3DTexture)Pe?(Ze&&t.texStorage3D(i.TEXTURE_3D,Fe,qe,Oe.width,Oe.height,Oe.depth),Z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Oe.width,Oe.height,Oe.depth,ct,Qe,Oe.data)):t.texImage3D(i.TEXTURE_3D,0,qe,Oe.width,Oe.height,Oe.depth,0,ct,Qe,Oe.data);else if(T.isFramebufferTexture){if(Ze)if(Pe)t.texStorage2D(i.TEXTURE_2D,Fe,qe,Oe.width,Oe.height);else{let le=Oe.width,Ne=Oe.height;for(let Ve=0;Ve<Fe;Ve++)t.texImage2D(i.TEXTURE_2D,Ve,qe,le,Ne,0,ct,Qe,null),le>>=1,Ne>>=1}}else if(H.length>0&&Dt){if(Pe&&Ze){const le=De(H[0]);t.texStorage2D(i.TEXTURE_2D,Fe,qe,le.width,le.height)}for(let le=0,Ne=H.length;le<Ne;le++)Ke=H[le],Pe?Z&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,ct,Qe,Ke):t.texImage2D(i.TEXTURE_2D,le,qe,ct,Qe,Ke);T.generateMipmaps=!1}else if(Pe){if(Ze){const le=De(Oe);t.texStorage2D(i.TEXTURE_2D,Fe,qe,le.width,le.height)}Z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,Qe,Oe)}else t.texImage2D(i.TEXTURE_2D,0,qe,ct,Qe,Oe);y(T,Dt)&&A(me),et.__version=Ie.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function L(R,T,ue){if(T.image.length!==6)return;const me=B(R,T),Le=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+ue);const Ie=n.get(Le);if(Le.version!==Ie.__version||me===!0){t.activeTexture(i.TEXTURE0+ue);const et=Ut.getPrimaries(Ut.workingColorSpace),$e=T.colorSpace===hr?null:Ut.getPrimaries(T.colorSpace),Be=T.colorSpace===hr||et===$e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const ze=T.isCompressedTexture||T.image[0].isCompressedTexture,tt=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let le=0;le<6;le++)!ze&&!tt?Oe[le]=m(T.image[le],!1,!0,s.maxCubemapSize):Oe[le]=tt?T.image[le].image:T.image[le],Oe[le]=F(T,Oe[le]);const Dt=Oe[0],ct=g(Dt)||l,Qe=a.convert(T.format,T.colorSpace),qe=a.convert(T.type),Ke=k(T.internalFormat,Qe,qe,T.colorSpace),H=l&&T.isVideoTexture!==!0,Pe=Ie.__version===void 0||me===!0,Ze=Le.dataReady;let Z=G(T,Dt,ct);z(i.TEXTURE_CUBE_MAP,T,ct);let Fe;if(ze){H&&Pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Z,Ke,Dt.width,Dt.height);for(let le=0;le<6;le++){Fe=Oe[le].mipmaps;for(let Ne=0;Ne<Fe.length;Ne++){const Ve=Fe[Ne];T.format!==di?Qe!==null?H?Ze&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,0,0,Ve.width,Ve.height,Qe,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,Ke,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,0,0,Ve.width,Ve.height,Qe,qe,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne,Ke,Ve.width,Ve.height,0,Qe,qe,Ve.data)}}}else{if(Fe=T.mipmaps,H&&Pe){Fe.length>0&&Z++;const le=De(Oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Z,Ke,le.width,le.height)}for(let le=0;le<6;le++)if(tt){H?Ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Oe[le].width,Oe[le].height,Qe,qe,Oe[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ke,Oe[le].width,Oe[le].height,0,Qe,qe,Oe[le].data);for(let Ne=0;Ne<Fe.length;Ne++){const _t=Fe[Ne].image[le].image;H?Ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,0,0,_t.width,_t.height,Qe,qe,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,Ke,_t.width,_t.height,0,Qe,qe,_t.data)}}else{H?Ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Qe,qe,Oe[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ke,Qe,qe,Oe[le]);for(let Ne=0;Ne<Fe.length;Ne++){const Ve=Fe[Ne];H?Ze&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,0,0,Qe,qe,Ve.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ne+1,Ke,Qe,qe,Ve.image[le])}}}y(T,ct)&&A(i.TEXTURE_CUBE_MAP),Ie.__version=Le.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ie(R,T,ue,me,Le,Ie){const et=a.convert(ue.format,ue.colorSpace),$e=a.convert(ue.type),Be=k(ue.internalFormat,et,$e,ue.colorSpace);if(!n.get(T).__hasExternalTextures){const tt=Math.max(1,T.width>>Ie),Oe=Math.max(1,T.height>>Ie);Le===i.TEXTURE_3D||Le===i.TEXTURE_2D_ARRAY?t.texImage3D(Le,Ie,Be,tt,Oe,T.depth,0,et,$e,null):t.texImage2D(Le,Ie,Be,tt,Oe,0,et,$e,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ye(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,Le,n.get(ue).__webglTexture,0,ne(T)):(Le===i.TEXTURE_2D||Le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,me,Le,n.get(ue).__webglTexture,Ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(R,T,ue){if(i.bindRenderbuffer(i.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let me=l===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ue||ye(T)){const Le=T.depthTexture;Le&&Le.isDepthTexture&&(Le.type===bi?me=i.DEPTH_COMPONENT32F:Le.type===dr&&(me=i.DEPTH_COMPONENT24));const Ie=ne(T);ye(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,me,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,me,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,me,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const me=ne(T);ue&&ye(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,i.DEPTH24_STENCIL8,T.width,T.height):ye(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const me=T.textures;for(let Le=0;Le<me.length;Le++){const Ie=me[Le],et=a.convert(Ie.format,Ie.colorSpace),$e=a.convert(Ie.type),Be=k(Ie.internalFormat,et,$e,Ie.colorSpace),ze=ne(T);ue&&ye(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Be,T.width,T.height):ye(T)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ze,Be,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Be,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ae(T.depthTexture,0);const me=n.get(T.depthTexture).__webglTexture,Le=ne(T);if(T.depthTexture.format===Gr)ye(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0,Le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0);else if(T.depthTexture.format===Ws)ye(T)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0,Le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Se(R){const T=n.get(R),ue=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(ue)throw new Error("target.depthTexture not supported in Cube render targets");se(T.__webglFramebuffer,R)}else if(ue){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]=i.createRenderbuffer(),de(T.__webglDepthbuffer[me],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),de(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function D(R,T,ue){const me=n.get(R);T!==void 0&&ie(me.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ue!==void 0&&Se(R)}function ce(R){const T=R.texture,ue=n.get(R),me=n.get(T);R.addEventListener("dispose",fe);const Le=R.textures,Ie=R.isWebGLCubeRenderTarget===!0,et=Le.length>1,$e=g(R)||l;if(et||(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=T.version,c.memory.textures++),Ie){ue.__webglFramebuffer=[];for(let Be=0;Be<6;Be++)if(l&&T.mipmaps&&T.mipmaps.length>0){ue.__webglFramebuffer[Be]=[];for(let ze=0;ze<T.mipmaps.length;ze++)ue.__webglFramebuffer[Be][ze]=i.createFramebuffer()}else ue.__webglFramebuffer[Be]=i.createFramebuffer()}else{if(l&&T.mipmaps&&T.mipmaps.length>0){ue.__webglFramebuffer=[];for(let Be=0;Be<T.mipmaps.length;Be++)ue.__webglFramebuffer[Be]=i.createFramebuffer()}else ue.__webglFramebuffer=i.createFramebuffer();if(et)if(s.drawBuffers)for(let Be=0,ze=Le.length;Be<ze;Be++){const tt=n.get(Le[Be]);tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture(),c.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&R.samples>0&&ye(R)===!1){ue.__webglMultisampledFramebuffer=i.createFramebuffer(),ue.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer);for(let Be=0;Be<Le.length;Be++){const ze=Le[Be];ue.__webglColorRenderbuffer[Be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ue.__webglColorRenderbuffer[Be]);const tt=a.convert(ze.format,ze.colorSpace),Oe=a.convert(ze.type),Dt=k(ze.internalFormat,tt,Oe,ze.colorSpace,R.isXRRenderTarget===!0),ct=ne(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Dt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,ue.__webglColorRenderbuffer[Be])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(ue.__webglDepthRenderbuffer=i.createRenderbuffer(),de(ue.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ie){t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),z(i.TEXTURE_CUBE_MAP,T,$e);for(let Be=0;Be<6;Be++)if(l&&T.mipmaps&&T.mipmaps.length>0)for(let ze=0;ze<T.mipmaps.length;ze++)ie(ue.__webglFramebuffer[Be][ze],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,ze);else ie(ue.__webglFramebuffer[Be],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0);y(T,$e)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(et){for(let Be=0,ze=Le.length;Be<ze;Be++){const tt=Le[Be],Oe=n.get(tt);t.bindTexture(i.TEXTURE_2D,Oe.__webglTexture),z(i.TEXTURE_2D,tt,$e),ie(ue.__webglFramebuffer,R,tt,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,0),y(tt,$e)&&A(i.TEXTURE_2D)}t.unbindTexture()}else{let Be=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(l?Be=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Be,me.__webglTexture),z(Be,T,$e),l&&T.mipmaps&&T.mipmaps.length>0)for(let ze=0;ze<T.mipmaps.length;ze++)ie(ue.__webglFramebuffer[ze],R,T,i.COLOR_ATTACHMENT0,Be,ze);else ie(ue.__webglFramebuffer,R,T,i.COLOR_ATTACHMENT0,Be,0);y(T,$e)&&A(Be),t.unbindTexture()}R.depthBuffer&&Se(R)}function X(R){const T=g(R)||l,ue=R.textures;for(let me=0,Le=ue.length;me<Le;me++){const Ie=ue[me];if(y(Ie,T)){const et=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,$e=n.get(Ie).__webglTexture;t.bindTexture(et,$e),A(et),t.unbindTexture()}}}function te(R){if(l&&R.samples>0&&ye(R)===!1){const T=R.textures,ue=R.width,me=R.height;let Le=i.COLOR_BUFFER_BIT;const Ie=[],et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$e=n.get(R),Be=T.length>1;if(Be)for(let ze=0;ze<T.length;ze++)t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let ze=0;ze<T.length;ze++){Ie.push(i.COLOR_ATTACHMENT0+ze),R.depthBuffer&&Ie.push(et);const tt=$e.__ignoreDepthValues!==void 0?$e.__ignoreDepthValues:!1;if(tt===!1&&(R.depthBuffer&&(Le|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(Le|=i.STENCIL_BUFFER_BIT)),Be&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$e.__webglColorRenderbuffer[ze]),tt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[et]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[et])),Be){const Oe=n.get(T[ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Oe,0)}i.blitFramebuffer(0,0,ue,me,0,0,ue,me,Le,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ie)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Be)for(let ze=0;ze<T.length;ze++){t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.RENDERBUFFER,$e.__webglColorRenderbuffer[ze]);const tt=n.get(T[ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,$e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ze,i.TEXTURE_2D,tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}}function ne(R){return Math.min(s.maxSamples,R.samples)}function ye(R){const T=n.get(R);return l&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function q(R){const T=c.render.frame;p.get(R)!==T&&(p.set(R,T),R.update())}function F(R,T){const ue=R.colorSpace,me=R.format,Le=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Ou||ue!==xr&&ue!==hr&&(Ut.getTransfer(ue)===Gt?l===!1?e.has("EXT_sRGB")===!0&&me===di?(R.format=Ou,R.minFilter=bn,R.generateMipmaps=!1):T=Om.sRGBToLinear(T):(me!==di||Le!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ue)),T}function De(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(d.width=R.naturalWidth||R.width,d.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(d.width=R.displayWidth,d.height=R.displayHeight):(d.width=R.width,d.height=R.height),d}this.allocateTextureUnit=xe,this.resetTextureUnits=Y,this.setTexture2D=ae,this.setTexture2DArray=K,this.setTexture3D=Ee,this.setTextureCube=Me,this.rebindTextures=D,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ye}function H1(i,e,t){const n=t.isWebGL2;function s(a,c=hr){let l;const f=Ut.getTransfer(c);if(a===gr)return i.UNSIGNED_BYTE;if(a===wm)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Cm)return i.UNSIGNED_SHORT_5_5_5_1;if(a===oM)return i.BYTE;if(a===aM)return i.SHORT;if(a===Ju)return i.UNSIGNED_SHORT;if(a===Am)return i.INT;if(a===dr)return i.UNSIGNED_INT;if(a===bi)return i.FLOAT;if(a===Lo)return n?i.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(a===lM)return i.ALPHA;if(a===di)return i.RGBA;if(a===cM)return i.LUMINANCE;if(a===uM)return i.LUMINANCE_ALPHA;if(a===Gr)return i.DEPTH_COMPONENT;if(a===Ws)return i.DEPTH_STENCIL;if(a===Ou)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(a===Rm)return i.RED;if(a===Pm)return i.RED_INTEGER;if(a===fM)return i.RG;if(a===Lm)return i.RG_INTEGER;if(a===Im)return i.RGBA_INTEGER;if(a===Vc||a===Wc||a===Xc||a===qc)if(f===Gt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Vc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Wc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Xc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===qc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Vc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Wc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Xc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===qc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ud||a===Nd||a===Od||a===Fd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Ud)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Nd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Od)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Fd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Dm)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Bd||a===zd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Bd)return f===Gt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===zd)return f===Gt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Gd||a===kd||a===Hd||a===Vd||a===Wd||a===Xd||a===qd||a===Yd||a===$d||a===Zd||a===Kd||a===Jd||a===jd||a===Qd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Gd)return f===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===kd)return f===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Hd)return f===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Vd)return f===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Wd)return f===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Xd)return f===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===qd)return f===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Yd)return f===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===$d)return f===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Zd)return f===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Kd)return f===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Jd)return f===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===jd)return f===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Qd)return f===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Yc||a===ep||a===tp)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===Yc)return f===Gt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ep)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===tp)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===hM||a===np||a===ip||a===rp)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===Yc)return l.COMPRESSED_RED_RGTC1_EXT;if(a===np)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ip)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===rp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===zr?n?i.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:s}}class V1 extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class To extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W1={type:"move"};class vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new To,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new To,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new To,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,c=null;const l=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const m=t.getJointPose(E,n),g=this._getHandJoint(h,E);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const d=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],v=d.position.distanceTo(p.position),x=.02,S=.005;h.inputState.pinching&&v>x+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(W1)))}return l!==null&&(l.visible=s!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new To;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const X1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q1=`
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

}`;class Y1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new vn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new vr({extensions:{fragDepth:!0},vertexShader:X1,fragmentShader:q1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Tn(new zo(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class $1 extends Xr{constructor(e,t){super();const n=this;let s=null,a=1,c=null,l="local-floor",f=1,h=null,d=null,p=null,v=null,x=null,S=null;const E=new Y1,m=t.getContextAttributes();let g=null,P=null;const y=[],A=[],k=new Ae;let G=null;const U=new Qn;U.layers.enable(1),U.viewport=new hn;const W=new Qn;W.layers.enable(2),W.viewport=new hn;const fe=[U,W],b=new V1;b.layers.enable(1),b.layers.enable(2);let O=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let B=y[z];return B===void 0&&(B=new vu,y[z]=B),B.getTargetRaySpace()},this.getControllerGrip=function(z){let B=y[z];return B===void 0&&(B=new vu,y[z]=B),B.getGripSpace()},this.getHand=function(z){let B=y[z];return B===void 0&&(B=new vu,y[z]=B),B.getHandSpace()};function Te(z){const B=A.indexOf(z.inputSource);if(B===-1)return;const I=y[B];I!==void 0&&(I.update(z.inputSource,z.frame,h||c),I.dispatchEvent({type:z.type,data:z.inputSource}))}function Y(){s.removeEventListener("select",Te),s.removeEventListener("selectstart",Te),s.removeEventListener("selectend",Te),s.removeEventListener("squeeze",Te),s.removeEventListener("squeezestart",Te),s.removeEventListener("squeezeend",Te),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",xe);for(let z=0;z<y.length;z++){const B=A[z];B!==null&&(A[z]=null,y[z].disconnect(B))}O=null,pe=null,E.reset(),e.setRenderTarget(g),x=null,v=null,p=null,s=null,P=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(G),e.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){l=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(z){h=z},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return p},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",Te),s.addEventListener("selectstart",Te),s.addEventListener("selectend",Te),s.addEventListener("squeeze",Te),s.addEventListener("squeezestart",Te),s.addEventListener("squeezeend",Te),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",xe),m.xrCompatible!==!0&&await t.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(k),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:s.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,t,B),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),P=new kr(x.framebufferWidth,x.framebufferHeight,{format:di,type:gr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let B=null,I=null,L=null;m.depth&&(L=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=m.stencil?Ws:Gr,I=m.stencil?zr:dr);const ie={colorFormat:t.RGBA8,depthFormat:L,scaleFactor:a};p=new XRWebGLBinding(s,t),v=p.createProjectionLayer(ie),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new kr(v.textureWidth,v.textureHeight,{format:di,type:gr,depthTexture:new Zm(v.textureWidth,v.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const de=e.properties.get(P);de.__ignoreDepthValues=v.ignoreDepthValues}P.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await s.requestReferenceSpace(l),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function xe(z){for(let B=0;B<z.removed.length;B++){const I=z.removed[B],L=A.indexOf(I);L>=0&&(A[L]=null,y[L].disconnect(I))}for(let B=0;B<z.added.length;B++){const I=z.added[B];let L=A.indexOf(I);if(L===-1){for(let de=0;de<y.length;de++)if(de>=A.length){A.push(I),L=de;break}else if(A[de]===null){A[de]=I,L=de;break}if(L===-1)break}const ie=y[L];ie&&ie.connect(I)}}const oe=new Q,ae=new Q;function K(z,B,I){oe.setFromMatrixPosition(B.matrixWorld),ae.setFromMatrixPosition(I.matrixWorld);const L=oe.distanceTo(ae),ie=B.projectionMatrix.elements,de=I.projectionMatrix.elements,se=ie[14]/(ie[10]-1),Se=ie[14]/(ie[10]+1),D=(ie[9]+1)/ie[5],ce=(ie[9]-1)/ie[5],X=(ie[8]-1)/ie[0],te=(de[8]+1)/de[0],ne=se*X,ye=se*te,q=L/(-X+te),F=q*-X;B.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(F),z.translateZ(q),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const De=se+q,R=Se+q,T=ne-F,ue=ye+(L-F),me=D*Se/R*De,Le=ce*Se/R*De;z.projectionMatrix.makePerspective(T,ue,me,Le,De,R),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function Ee(z,B){B===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(B.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;E.texture!==null&&(z.near=E.depthNear,z.far=E.depthFar),b.near=W.near=U.near=z.near,b.far=W.far=U.far=z.far,(O!==b.near||pe!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),O=b.near,pe=b.far,U.near=O,U.far=pe,W.near=O,W.far=pe,U.updateProjectionMatrix(),W.updateProjectionMatrix(),z.updateProjectionMatrix());const B=z.parent,I=b.cameras;Ee(b,B);for(let L=0;L<I.length;L++)Ee(I[L],B);I.length===2?K(b,U,W):b.projectionMatrix.copy(U.projectionMatrix),Me(z,b,B)};function Me(z,B,I){I===null?z.matrix.copy(B.matrixWorld):(z.matrix.copy(I.matrixWorld),z.matrix.invert(),z.matrix.multiply(B.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(B.projectionMatrix),z.projectionMatrixInverse.copy(B.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Io*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(v===null&&x===null))return f},this.setFoveation=function(z){f=z,v!==null&&(v.fixedFoveation=z),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=z)},this.hasDepthSensing=function(){return E.texture!==null};let Re=null;function ke(z,B){if(d=B.getViewerPose(h||c),S=B,d!==null){const I=d.views;x!==null&&(e.setRenderTargetFramebuffer(P,x.framebuffer),e.setRenderTarget(P));let L=!1;I.length!==b.cameras.length&&(b.cameras.length=0,L=!0);for(let de=0;de<I.length;de++){const se=I[de];let Se=null;if(x!==null)Se=x.getViewport(se);else{const ce=p.getViewSubImage(v,se);Se=ce.viewport,de===0&&(e.setRenderTargetTextures(P,ce.colorTexture,v.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(P))}let D=fe[de];D===void 0&&(D=new Qn,D.layers.enable(de),D.viewport=new hn,fe[de]=D),D.matrix.fromArray(se.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(se.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Se.x,Se.y,Se.width,Se.height),de===0&&(b.matrix.copy(D.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),L===!0&&b.cameras.push(D)}const ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")){const de=p.getDepthInformation(I[0]);de&&de.isValid&&de.texture&&E.init(e,de,s.renderState)}}for(let I=0;I<y.length;I++){const L=A[I],ie=y[I];L!==null&&ie!==void 0&&ie.update(L,B,h||c)}E.render(e,b),Re&&Re(z,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),S=null}const nt=new $m;nt.setAnimationLoop(ke),this.setAnimationLoop=function(z){Re=z},this.dispose=function(){}}}const Ur=new qi,Z1=new qt;function K1(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Wm(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,P,y,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(m,g):g.isMeshToonMaterial?(a(m,g),p(m,g)):g.isMeshPhongMaterial?(a(m,g),d(m,g)):g.isMeshStandardMaterial?(a(m,g),v(m,g),g.isMeshPhysicalMaterial&&x(m,g,A)):g.isMeshMatcapMaterial?(a(m,g),S(m,g)):g.isMeshDepthMaterial?a(m,g):g.isMeshDistanceMaterial?(a(m,g),E(m,g)):g.isMeshNormalMaterial?a(m,g):g.isLineBasicMaterial?(c(m,g),g.isLineDashedMaterial&&l(m,g)):g.isPointsMaterial?f(m,g,P,y):g.isSpriteMaterial?h(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===In&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===In&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const P=e.get(g),y=P.envMap,A=P.envMapRotation;if(y&&(m.envMap.value=y,Ur.copy(A),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),m.envMapRotation.value.setFromMatrix4(Z1.makeRotationFromEuler(Ur)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;const k=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*k,t(g.lightMap,m.lightMapTransform)}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function l(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function f(m,g,P,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*P,m.scale.value=y*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function p(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function v(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),e.get(g).envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function x(m,g,P){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===In&&m.clearcoatNormalScale.value.negate())),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=P.texture,m.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function S(m,g){g.matcap&&(m.matcap.value=g.matcap)}function E(m,g){const P=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(P.matrixWorld),m.nearDistance.value=P.shadow.camera.near,m.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function J1(i,e,t,n){let s={},a={},c=[];const l=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function f(P,y){const A=y.program;n.uniformBlockBinding(P,A)}function h(P,y){let A=s[P.id];A===void 0&&(S(P),A=d(P),s[P.id]=A,P.addEventListener("dispose",m));const k=y.program;n.updateUBOMapping(P,k);const G=e.render.frame;a[P.id]!==G&&(v(P),a[P.id]=G)}function d(P){const y=p();P.__bindingPointIndex=y;const A=i.createBuffer(),k=P.__size,G=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,k,G),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,A),A}function p(){for(let P=0;P<l;P++)if(c.indexOf(P)===-1)return c.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const y=s[P.id],A=P.uniforms,k=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let G=0,U=A.length;G<U;G++){const W=Array.isArray(A[G])?A[G]:[A[G]];for(let fe=0,b=W.length;fe<b;fe++){const O=W[fe];if(x(O,G,fe,k)===!0){const pe=O.__offset,Te=Array.isArray(O.value)?O.value:[O.value];let Y=0;for(let xe=0;xe<Te.length;xe++){const oe=Te[xe],ae=E(oe);typeof oe=="number"||typeof oe=="boolean"?(O.__data[0]=oe,i.bufferSubData(i.UNIFORM_BUFFER,pe+Y,O.__data)):oe.isMatrix3?(O.__data[0]=oe.elements[0],O.__data[1]=oe.elements[1],O.__data[2]=oe.elements[2],O.__data[3]=0,O.__data[4]=oe.elements[3],O.__data[5]=oe.elements[4],O.__data[6]=oe.elements[5],O.__data[7]=0,O.__data[8]=oe.elements[6],O.__data[9]=oe.elements[7],O.__data[10]=oe.elements[8],O.__data[11]=0):(oe.toArray(O.__data,Y),Y+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,pe,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function x(P,y,A,k){const G=P.value,U=y+"_"+A;if(k[U]===void 0)return typeof G=="number"||typeof G=="boolean"?k[U]=G:k[U]=G.clone(),!0;{const W=k[U];if(typeof G=="number"||typeof G=="boolean"){if(W!==G)return k[U]=G,!0}else if(W.equals(G)===!1)return W.copy(G),!0}return!1}function S(P){const y=P.uniforms;let A=0;const k=16;for(let U=0,W=y.length;U<W;U++){const fe=Array.isArray(y[U])?y[U]:[y[U]];for(let b=0,O=fe.length;b<O;b++){const pe=fe[b],Te=Array.isArray(pe.value)?pe.value:[pe.value];for(let Y=0,xe=Te.length;Y<xe;Y++){const oe=Te[Y],ae=E(oe),K=A%k;K!==0&&k-K<ae.boundary&&(A+=k-K),pe.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=A,A+=ae.storage}}}const G=A%k;return G>0&&(A+=k-G),P.__size=A,P.__cache={},this}function E(P){const y={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(y.boundary=4,y.storage=4):P.isVector2?(y.boundary=8,y.storage=8):P.isVector3||P.isColor?(y.boundary=16,y.storage=12):P.isVector4?(y.boundary=16,y.storage=16):P.isMatrix3?(y.boundary=48,y.storage=48):P.isMatrix4?(y.boundary=64,y.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),y}function m(P){const y=P.target;y.removeEventListener("dispose",m);const A=c.indexOf(y.__bindingPointIndex);c.splice(A,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function g(){for(const P in s)i.deleteBuffer(s[P]);c=[],s={},a={}}return{bind:f,update:h,dispose:g}}class tg{constructor(e={}){const{canvas:t=zM(),context:n=null,depth:s=!0,stencil:a=!0,alpha:c=!1,antialias:l=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let v;n!==null?v=n.getContextAttributes().alpha:v=c;const x=new Uint32Array(4),S=new Int32Array(4);let E=null,m=null;const g=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fi,this._useLegacyLights=!1,this.toneMapping=mr,this.toneMappingExposure=1;const y=this;let A=!1,k=0,G=0,U=null,W=-1,fe=null;const b=new hn,O=new hn;let pe=null;const Te=new bt(0);let Y=0,xe=t.width,oe=t.height,ae=1,K=null,Ee=null;const Me=new hn(0,0,xe,oe),Re=new hn(0,0,xe,oe);let ke=!1;const nt=new Ym;let z=!1,B=!1,I=null;const L=new qt,ie=new Ae,de=new Q,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return U===null?ae:1}let D=n;function ce(N,re){for(let ge=0;ge<N.length;ge++){const ve=N[ge],he=t.getContext(ve,re);if(he!==null)return he}return null}try{const N={alpha:!0,depth:s,stencil:a,antialias:l,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ku}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),D===null){const re=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&re.shift(),D=ce(re,N),D===null)throw ce(re)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let X,te,ne,ye,q,F,De,R,T,ue,me,Le,Ie,et,$e,Be,ze,tt,Oe,Dt,ct,Qe,qe,Ke;function H(){X=new iw(D),te=new KA(D,X,e),X.init(te),Qe=new H1(D,X,te),ne=new G1(D,X,te),ye=new ow(D),q=new A1,F=new k1(D,X,ne,q,te,Qe,ye),De=new jA(y),R=new nw(y),T=new fb(D,te),qe=new $A(D,X,T,te),ue=new rw(D,T,ye,qe),me=new uw(D,ue,T,ye),Oe=new cw(D,te,F),Be=new JA(q),Le=new T1(y,De,R,X,te,qe,Be),Ie=new K1(y,q),et=new C1,$e=new U1(X,te),tt=new YA(y,De,R,ne,me,v,f),ze=new z1(y,me,te),Ke=new J1(D,ye,te,ne),Dt=new ZA(D,X,ye,te),ct=new sw(D,X,ye,te),ye.programs=Le.programs,y.capabilities=te,y.extensions=X,y.properties=q,y.renderLists=et,y.shadowMap=ze,y.state=ne,y.info=ye}H();const Pe=new $1(y,D);this.xr=Pe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const N=X.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=X.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(N){N!==void 0&&(ae=N,this.setSize(xe,oe,!1))},this.getSize=function(N){return N.set(xe,oe)},this.setSize=function(N,re,ge=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}xe=N,oe=re,t.width=Math.floor(N*ae),t.height=Math.floor(re*ae),ge===!0&&(t.style.width=N+"px",t.style.height=re+"px"),this.setViewport(0,0,N,re)},this.getDrawingBufferSize=function(N){return N.set(xe*ae,oe*ae).floor()},this.setDrawingBufferSize=function(N,re,ge){xe=N,oe=re,ae=ge,t.width=Math.floor(N*ge),t.height=Math.floor(re*ge),this.setViewport(0,0,N,re)},this.getCurrentViewport=function(N){return N.copy(b)},this.getViewport=function(N){return N.copy(Me)},this.setViewport=function(N,re,ge,ve){N.isVector4?Me.set(N.x,N.y,N.z,N.w):Me.set(N,re,ge,ve),ne.viewport(b.copy(Me).multiplyScalar(ae).round())},this.getScissor=function(N){return N.copy(Re)},this.setScissor=function(N,re,ge,ve){N.isVector4?Re.set(N.x,N.y,N.z,N.w):Re.set(N,re,ge,ve),ne.scissor(O.copy(Re).multiplyScalar(ae).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(N){ne.setScissorTest(ke=N)},this.setOpaqueSort=function(N){K=N},this.setTransparentSort=function(N){Ee=N},this.getClearColor=function(N){return N.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(N=!0,re=!0,ge=!0){let ve=0;if(N){let he=!1;if(U!==null){const Xe=U.texture.format;he=Xe===Im||Xe===Lm||Xe===Pm}if(he){const Xe=U.texture.type,Je=Xe===gr||Xe===dr||Xe===Ju||Xe===zr||Xe===wm||Xe===Cm,rt=tt.getClearColor(),st=tt.getClearAlpha(),mt=rt.r,ut=rt.g,ht=rt.b;Je?(x[0]=mt,x[1]=ut,x[2]=ht,x[3]=st,D.clearBufferuiv(D.COLOR,0,x)):(S[0]=mt,S[1]=ut,S[2]=ht,S[3]=st,D.clearBufferiv(D.COLOR,0,S))}else ve|=D.COLOR_BUFFER_BIT}re&&(ve|=D.DEPTH_BUFFER_BIT),ge&&(ve|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(ve)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),et.dispose(),$e.dispose(),q.dispose(),De.dispose(),R.dispose(),me.dispose(),qe.dispose(),Ke.dispose(),Le.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",kt),Pe.removeEventListener("sessionend",At),I&&(I.dispose(),I=null),Lt.stop()};function Ze(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const N=ye.autoReset,re=ze.enabled,ge=ze.autoUpdate,ve=ze.needsUpdate,he=ze.type;H(),ye.autoReset=N,ze.enabled=re,ze.autoUpdate=ge,ze.needsUpdate=ve,ze.type=he}function Fe(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function le(N){const re=N.target;re.removeEventListener("dispose",le),Ne(re)}function Ne(N){Ve(N),q.remove(N)}function Ve(N){const re=q.get(N).programs;re!==void 0&&(re.forEach(function(ge){Le.releaseProgram(ge)}),N.isShaderMaterial&&Le.releaseShaderCache(N))}this.renderBufferDirect=function(N,re,ge,ve,he,Xe){re===null&&(re=se);const Je=he.isMesh&&he.matrixWorld.determinant()<0,rt=Il(N,re,ge,ve,he);ne.setMaterial(ve,Je);let st=ge.index,mt=1;if(ve.wireframe===!0){if(st=ue.getWireframeAttribute(ge),st===void 0)return;mt=2}const ut=ge.drawRange,ht=ge.attributes.position;let Ht=ut.start*mt,dn=(ut.start+ut.count)*mt;Xe!==null&&(Ht=Math.max(Ht,Xe.start*mt),dn=Math.min(dn,(Xe.start+Xe.count)*mt)),st!==null?(Ht=Math.max(Ht,0),dn=Math.min(dn,st.count)):ht!=null&&(Ht=Math.max(Ht,0),dn=Math.min(dn,ht.count));const $t=dn-Ht;if($t<0||$t===1/0)return;qe.setup(he,ve,rt,ge,st);let ni,Bt=Dt;if(st!==null&&(ni=T.get(st),Bt=ct,Bt.setIndex(ni)),he.isMesh)ve.wireframe===!0?(ne.setLineWidth(ve.wireframeLinewidth*Se()),Bt.setMode(D.LINES)):Bt.setMode(D.TRIANGLES);else if(he.isLine){let pt=ve.linewidth;pt===void 0&&(pt=1),ne.setLineWidth(pt*Se()),he.isLineSegments?Bt.setMode(D.LINES):he.isLineLoop?Bt.setMode(D.LINE_LOOP):Bt.setMode(D.LINE_STRIP)}else he.isPoints?Bt.setMode(D.POINTS):he.isSprite&&Bt.setMode(D.TRIANGLES);if(he.isBatchedMesh)Bt.renderMultiDraw(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount);else if(he.isInstancedMesh)Bt.renderInstances(Ht,$t,he.count);else if(ge.isInstancedBufferGeometry){const pt=ge._maxInstanceCount!==void 0?ge._maxInstanceCount:1/0,js=Math.min(ge.instanceCount,pt);Bt.renderInstances(Ht,$t,js)}else Bt.render(Ht,$t)};function _t(N,re,ge){N.transparent===!0&&N.side===Mi&&N.forceSinglePass===!1?(N.side=In,N.needsUpdate=!0,Kr(N,re,ge),N.side=_r,N.needsUpdate=!0,Kr(N,re,ge),N.side=Mi):Kr(N,re,ge)}this.compile=function(N,re,ge=null){ge===null&&(ge=N),m=$e.get(ge),m.init(),P.push(m),ge.traverseVisible(function(he){he.isLight&&he.layers.test(re.layers)&&(m.pushLight(he),he.castShadow&&m.pushShadow(he))}),N!==ge&&N.traverseVisible(function(he){he.isLight&&he.layers.test(re.layers)&&(m.pushLight(he),he.castShadow&&m.pushShadow(he))}),m.setupLights(y._useLegacyLights);const ve=new Set;return N.traverse(function(he){const Xe=he.material;if(Xe)if(Array.isArray(Xe))for(let Je=0;Je<Xe.length;Je++){const rt=Xe[Je];_t(rt,ge,he),ve.add(rt)}else _t(Xe,ge,he),ve.add(Xe)}),P.pop(),m=null,ve},this.compileAsync=function(N,re,ge=null){const ve=this.compile(N,re,ge);return new Promise(he=>{function Xe(){if(ve.forEach(function(Je){q.get(Je).currentProgram.isReady()&&ve.delete(Je)}),ve.size===0){he(N);return}setTimeout(Xe,10)}X.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let wt=null;function Pt(N){wt&&wt(N)}function kt(){Lt.stop()}function At(){Lt.start()}const Lt=new $m;Lt.setAnimationLoop(Pt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(N){wt=N,Pe.setAnimationLoop(N),N===null?Lt.stop():Lt.start()},Pe.addEventListener("sessionstart",kt),Pe.addEventListener("sessionend",At),this.render=function(N,re){if(re!==void 0&&re.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(re),re=Pe.getCamera()),N.isScene===!0&&N.onBeforeRender(y,N,re,U),m=$e.get(N,P.length),m.init(),P.push(m),L.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),nt.setFromProjectionMatrix(L),B=this.localClippingEnabled,z=Be.init(this.clippingPlanes,B),E=et.get(N,g.length),E.init(),g.push(E),sn(N,re,0,y.sortObjects),E.finish(),y.sortObjects===!0&&E.sort(K,Ee),this.info.render.frame++,z===!0&&Be.beginShadows();const ge=m.state.shadowsArray;if(ze.render(ge,N,re),z===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1)&&tt.render(E,N),m.setupLights(y._useLegacyLights),re.isArrayCamera){const ve=re.cameras;for(let he=0,Xe=ve.length;he<Xe;he++){const Je=ve[he];ti(E,N,Je,Je.viewport)}}else ti(E,N,re);U!==null&&(F.updateMultisampleRenderTarget(U),F.updateRenderTargetMipmap(U)),N.isScene===!0&&N.onAfterRender(y,N,re),qe.resetDefaultState(),W=-1,fe=null,P.pop(),P.length>0?m=P[P.length-1]:m=null,g.pop(),g.length>0?E=g[g.length-1]:E=null};function sn(N,re,ge,ve){if(N.visible===!1)return;if(N.layers.test(re.layers)){if(N.isGroup)ge=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(re);else if(N.isLight)m.pushLight(N),N.castShadow&&m.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||nt.intersectsSprite(N)){ve&&de.setFromMatrixPosition(N.matrixWorld).applyMatrix4(L);const Je=me.update(N),rt=N.material;rt.visible&&E.push(N,Je,rt,ge,de.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||nt.intersectsObject(N))){const Je=me.update(N),rt=N.material;if(ve&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),de.copy(N.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),de.copy(Je.boundingSphere.center)),de.applyMatrix4(N.matrixWorld).applyMatrix4(L)),Array.isArray(rt)){const st=Je.groups;for(let mt=0,ut=st.length;mt<ut;mt++){const ht=st[mt],Ht=rt[ht.materialIndex];Ht&&Ht.visible&&E.push(N,Je,Ht,ge,de.z,ht)}}else rt.visible&&E.push(N,Je,rt,ge,de.z,null)}}const Xe=N.children;for(let Je=0,rt=Xe.length;Je<rt;Je++)sn(Xe[Je],re,ge,ve)}function ti(N,re,ge,ve){const he=N.opaque,Xe=N.transmissive,Je=N.transparent;m.setupLightsView(ge),z===!0&&Be.setGlobalState(y.clippingPlanes,ge),Xe.length>0&&$r(he,Xe,re,ge),ve&&ne.viewport(b.copy(ve)),he.length>0&&Zr(he,re,ge),Xe.length>0&&Zr(Xe,re,ge),Je.length>0&&Zr(Je,re,ge),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function $r(N,re,ge,ve){if((ge.isScene===!0?ge.overrideMaterial:null)!==null)return;const Xe=te.isWebGL2;I===null&&(I=new kr(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?Lo:gr,minFilter:Br,samples:Xe?4:0})),y.getDrawingBufferSize(ie),Xe?I.setSize(ie.x,ie.y):I.setSize(gl(ie.x),gl(ie.y));const Je=y.getRenderTarget();y.setRenderTarget(I),y.getClearColor(Te),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear();const rt=y.toneMapping;y.toneMapping=mr,Zr(N,ge,ve),F.updateMultisampleRenderTarget(I),F.updateRenderTargetMipmap(I);let st=!1;for(let mt=0,ut=re.length;mt<ut;mt++){const ht=re[mt],Ht=ht.object,dn=ht.geometry,$t=ht.material,ni=ht.group;if($t.side===Mi&&Ht.layers.test(ve.layers)){const Bt=$t.side;$t.side=In,$t.needsUpdate=!0,Go(Ht,ge,ve,dn,$t,ni),$t.side=Bt,$t.needsUpdate=!0,st=!0}}st===!0&&(F.updateMultisampleRenderTarget(I),F.updateRenderTargetMipmap(I)),y.setRenderTarget(Je),y.setClearColor(Te,Y),y.toneMapping=rt}function Zr(N,re,ge){const ve=re.isScene===!0?re.overrideMaterial:null;for(let he=0,Xe=N.length;he<Xe;he++){const Je=N[he],rt=Je.object,st=Je.geometry,mt=ve===null?Je.material:ve,ut=Je.group;rt.layers.test(ge.layers)&&Go(rt,re,ge,st,mt,ut)}}function Go(N,re,ge,ve,he,Xe){N.onBeforeRender(y,re,ge,ve,he,Xe),N.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),he.onBeforeRender(y,re,ge,ve,N,Xe),he.transparent===!0&&he.side===Mi&&he.forceSinglePass===!1?(he.side=In,he.needsUpdate=!0,y.renderBufferDirect(ge,re,ve,he,N,Xe),he.side=_r,he.needsUpdate=!0,y.renderBufferDirect(ge,re,ve,he,N,Xe),he.side=Mi):y.renderBufferDirect(ge,re,ve,he,N,Xe),N.onAfterRender(y,re,ge,ve,he,Xe)}function Kr(N,re,ge){re.isScene!==!0&&(re=se);const ve=q.get(N),he=m.state.lights,Xe=m.state.shadowsArray,Je=he.state.version,rt=Le.getParameters(N,he.state,Xe,re,ge),st=Le.getProgramCacheKey(rt);let mt=ve.programs;ve.environment=N.isMeshStandardMaterial?re.environment:null,ve.fog=re.fog,ve.envMap=(N.isMeshStandardMaterial?R:De).get(N.envMap||ve.environment),ve.envMapRotation=ve.environment!==null&&N.envMap===null?re.environmentRotation:N.envMapRotation,mt===void 0&&(N.addEventListener("dispose",le),mt=new Map,ve.programs=mt);let ut=mt.get(st);if(ut!==void 0){if(ve.currentProgram===ut&&ve.lightsStateVersion===Je)return Ho(N,rt),ut}else rt.uniforms=Le.getUniforms(N),N.onBuild(ge,rt,y),N.onBeforeCompile(rt,y),ut=Le.acquireProgram(rt,st),mt.set(st,ut),ve.uniforms=rt.uniforms;const ht=ve.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(ht.clippingPlanes=Be.uniform),Ho(N,rt),ve.needsLights=Vo(N),ve.lightsStateVersion=Je,ve.needsLights&&(ht.ambientLightColor.value=he.state.ambient,ht.lightProbe.value=he.state.probe,ht.directionalLights.value=he.state.directional,ht.directionalLightShadows.value=he.state.directionalShadow,ht.spotLights.value=he.state.spot,ht.spotLightShadows.value=he.state.spotShadow,ht.rectAreaLights.value=he.state.rectArea,ht.ltc_1.value=he.state.rectAreaLTC1,ht.ltc_2.value=he.state.rectAreaLTC2,ht.pointLights.value=he.state.point,ht.pointLightShadows.value=he.state.pointShadow,ht.hemisphereLights.value=he.state.hemi,ht.directionalShadowMap.value=he.state.directionalShadowMap,ht.directionalShadowMatrix.value=he.state.directionalShadowMatrix,ht.spotShadowMap.value=he.state.spotShadowMap,ht.spotLightMatrix.value=he.state.spotLightMatrix,ht.spotLightMap.value=he.state.spotLightMap,ht.pointShadowMap.value=he.state.pointShadowMap,ht.pointShadowMatrix.value=he.state.pointShadowMatrix),ve.currentProgram=ut,ve.uniformsList=null,ut}function ko(N){if(N.uniformsList===null){const re=N.currentProgram.getUniforms();N.uniformsList=cl.seqWithValue(re.seq,N.uniforms)}return N.uniformsList}function Ho(N,re){const ge=q.get(N);ge.outputColorSpace=re.outputColorSpace,ge.batching=re.batching,ge.instancing=re.instancing,ge.instancingColor=re.instancingColor,ge.instancingMorph=re.instancingMorph,ge.skinning=re.skinning,ge.morphTargets=re.morphTargets,ge.morphNormals=re.morphNormals,ge.morphColors=re.morphColors,ge.morphTargetsCount=re.morphTargetsCount,ge.numClippingPlanes=re.numClippingPlanes,ge.numIntersection=re.numClipIntersection,ge.vertexAlphas=re.vertexAlphas,ge.vertexTangents=re.vertexTangents,ge.toneMapping=re.toneMapping}function Il(N,re,ge,ve,he){re.isScene!==!0&&(re=se),F.resetTextureUnits();const Xe=re.fog,Je=ve.isMeshStandardMaterial?re.environment:null,rt=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:xr,st=(ve.isMeshStandardMaterial?R:De).get(ve.envMap||Je),mt=ve.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,ut=!!ge.attributes.tangent&&(!!ve.normalMap||ve.anisotropy>0),ht=!!ge.morphAttributes.position,Ht=!!ge.morphAttributes.normal,dn=!!ge.morphAttributes.color;let $t=mr;ve.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&($t=y.toneMapping);const ni=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,Bt=ni!==void 0?ni.length:0,pt=q.get(ve),js=m.state.lights;if(z===!0&&(B===!0||N!==fe)){const wn=N===fe&&ve.id===W;Be.setState(ve,N,wn)}let Nt=!1;ve.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==js.state.version||pt.outputColorSpace!==rt||he.isBatchedMesh&&pt.batching===!1||!he.isBatchedMesh&&pt.batching===!0||he.isInstancedMesh&&pt.instancing===!1||!he.isInstancedMesh&&pt.instancing===!0||he.isSkinnedMesh&&pt.skinning===!1||!he.isSkinnedMesh&&pt.skinning===!0||he.isInstancedMesh&&pt.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&pt.instancingColor===!1&&he.instanceColor!==null||he.isInstancedMesh&&pt.instancingMorph===!0&&he.morphTexture===null||he.isInstancedMesh&&pt.instancingMorph===!1&&he.morphTexture!==null||pt.envMap!==st||ve.fog===!0&&pt.fog!==Xe||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==Be.numPlanes||pt.numIntersection!==Be.numIntersection)||pt.vertexAlphas!==mt||pt.vertexTangents!==ut||pt.morphTargets!==ht||pt.morphNormals!==Ht||pt.morphColors!==dn||pt.toneMapping!==$t||te.isWebGL2===!0&&pt.morphTargetsCount!==Bt)&&(Nt=!0):(Nt=!0,pt.__version=ve.version);let gi=pt.currentProgram;Nt===!0&&(gi=Kr(ve,re,he));let Qs=!1,Ci=!1,eo=!1;const Qt=gi.getUniforms(),kn=pt.uniforms;if(ne.useProgram(gi.program)&&(Qs=!0,Ci=!0,eo=!0),ve.id!==W&&(W=ve.id,Ci=!0),Qs||fe!==N){Qt.setValue(D,"projectionMatrix",N.projectionMatrix),Qt.setValue(D,"viewMatrix",N.matrixWorldInverse);const wn=Qt.map.cameraPosition;wn!==void 0&&wn.setValue(D,de.setFromMatrixPosition(N.matrixWorld)),te.logarithmicDepthBuffer&&Qt.setValue(D,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ve.isMeshPhongMaterial||ve.isMeshToonMaterial||ve.isMeshLambertMaterial||ve.isMeshBasicMaterial||ve.isMeshStandardMaterial||ve.isShaderMaterial)&&Qt.setValue(D,"isOrthographic",N.isOrthographicCamera===!0),fe!==N&&(fe=N,Ci=!0,eo=!0)}if(he.isSkinnedMesh){Qt.setOptional(D,he,"bindMatrix"),Qt.setOptional(D,he,"bindMatrixInverse");const wn=he.skeleton;wn&&(te.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Qt.setValue(D,"boneTexture",wn.boneTexture,F)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}he.isBatchedMesh&&(Qt.setOptional(D,he,"batchingTexture"),Qt.setValue(D,"batchingTexture",he._matricesTexture,F));const Jr=ge.morphAttributes;if((Jr.position!==void 0||Jr.normal!==void 0||Jr.color!==void 0&&te.isWebGL2===!0)&&Oe.update(he,ge,gi),(Ci||pt.receiveShadow!==he.receiveShadow)&&(pt.receiveShadow=he.receiveShadow,Qt.setValue(D,"receiveShadow",he.receiveShadow)),ve.isMeshGouraudMaterial&&ve.envMap!==null&&(kn.envMap.value=st,kn.flipEnvMap.value=st.isCubeTexture&&st.isRenderTargetTexture===!1?-1:1),Ci&&(Qt.setValue(D,"toneMappingExposure",y.toneMappingExposure),pt.needsLights&&Dl(kn,eo),Xe&&ve.fog===!0&&Ie.refreshFogUniforms(kn,Xe),Ie.refreshMaterialUniforms(kn,ve,ae,oe,I),cl.upload(D,ko(pt),kn,F)),ve.isShaderMaterial&&ve.uniformsNeedUpdate===!0&&(cl.upload(D,ko(pt),kn,F),ve.uniformsNeedUpdate=!1),ve.isSpriteMaterial&&Qt.setValue(D,"center",he.center),Qt.setValue(D,"modelViewMatrix",he.modelViewMatrix),Qt.setValue(D,"normalMatrix",he.normalMatrix),Qt.setValue(D,"modelMatrix",he.matrixWorld),ve.isShaderMaterial||ve.isRawShaderMaterial){const wn=ve.uniformsGroups;for(let jr=0,Wo=wn.length;jr<Wo;jr++)if(te.isWebGL2){const Qr=wn[jr];Ke.update(Qr,gi),Ke.bind(Qr,gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gi}function Dl(N,re){N.ambientLightColor.needsUpdate=re,N.lightProbe.needsUpdate=re,N.directionalLights.needsUpdate=re,N.directionalLightShadows.needsUpdate=re,N.pointLights.needsUpdate=re,N.pointLightShadows.needsUpdate=re,N.spotLights.needsUpdate=re,N.spotLightShadows.needsUpdate=re,N.rectAreaLights.needsUpdate=re,N.hemisphereLights.needsUpdate=re}function Vo(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(N,re,ge){q.get(N.texture).__webglTexture=re,q.get(N.depthTexture).__webglTexture=ge;const ve=q.get(N);ve.__hasExternalTextures=!0,ve.__autoAllocateDepthBuffer=ge===void 0,ve.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ve.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,re){const ge=q.get(N);ge.__webglFramebuffer=re,ge.__useDefaultFramebuffer=re===void 0},this.setRenderTarget=function(N,re=0,ge=0){U=N,k=re,G=ge;let ve=!0,he=null,Xe=!1,Je=!1;if(N){const st=q.get(N);st.__useDefaultFramebuffer!==void 0?(ne.bindFramebuffer(D.FRAMEBUFFER,null),ve=!1):st.__webglFramebuffer===void 0?F.setupRenderTarget(N):st.__hasExternalTextures&&F.rebindTextures(N,q.get(N.texture).__webglTexture,q.get(N.depthTexture).__webglTexture);const mt=N.texture;(mt.isData3DTexture||mt.isDataArrayTexture||mt.isCompressedArrayTexture)&&(Je=!0);const ut=q.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ut[re])?he=ut[re][ge]:he=ut[re],Xe=!0):te.isWebGL2&&N.samples>0&&F.useMultisampledRTT(N)===!1?he=q.get(N).__webglMultisampledFramebuffer:Array.isArray(ut)?he=ut[ge]:he=ut,b.copy(N.viewport),O.copy(N.scissor),pe=N.scissorTest}else b.copy(Me).multiplyScalar(ae).floor(),O.copy(Re).multiplyScalar(ae).floor(),pe=ke;if(ne.bindFramebuffer(D.FRAMEBUFFER,he)&&te.drawBuffers&&ve&&ne.drawBuffers(N,he),ne.viewport(b),ne.scissor(O),ne.setScissorTest(pe),Xe){const st=q.get(N.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+re,st.__webglTexture,ge)}else if(Je){const st=q.get(N.texture),mt=re||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,st.__webglTexture,ge||0,mt)}W=-1},this.readRenderTargetPixels=function(N,re,ge,ve,he,Xe,Je){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let rt=q.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Je!==void 0&&(rt=rt[Je]),rt){ne.bindFramebuffer(D.FRAMEBUFFER,rt);try{const st=N.texture,mt=st.format,ut=st.type;if(mt!==di&&Qe.convert(mt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ht=ut===Lo&&(X.has("EXT_color_buffer_half_float")||te.isWebGL2&&X.has("EXT_color_buffer_float"));if(ut!==gr&&Qe.convert(ut)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ut===bi&&(te.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=N.width-ve&&ge>=0&&ge<=N.height-he&&D.readPixels(re,ge,ve,he,Qe.convert(mt),Qe.convert(ut),Xe)}finally{const st=U!==null?q.get(U).__webglFramebuffer:null;ne.bindFramebuffer(D.FRAMEBUFFER,st)}}},this.copyFramebufferToTexture=function(N,re,ge=0){const ve=Math.pow(2,-ge),he=Math.floor(re.image.width*ve),Xe=Math.floor(re.image.height*ve);F.setTexture2D(re,0),D.copyTexSubImage2D(D.TEXTURE_2D,ge,0,0,N.x,N.y,he,Xe),ne.unbindTexture()},this.copyTextureToTexture=function(N,re,ge,ve=0){const he=re.image.width,Xe=re.image.height,Je=Qe.convert(ge.format),rt=Qe.convert(ge.type);F.setTexture2D(ge,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,ge.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ge.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,ge.unpackAlignment),re.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ve,N.x,N.y,he,Xe,Je,rt,re.image.data):re.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ve,N.x,N.y,re.mipmaps[0].width,re.mipmaps[0].height,Je,re.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,ve,N.x,N.y,Je,rt,re.image),ve===0&&ge.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ne.unbindTexture()},this.copyTextureToTexture3D=function(N,re,ge,ve,he=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Xe=Math.round(N.max.x-N.min.x),Je=Math.round(N.max.y-N.min.y),rt=N.max.z-N.min.z+1,st=Qe.convert(ve.format),mt=Qe.convert(ve.type);let ut;if(ve.isData3DTexture)F.setTexture3D(ve,0),ut=D.TEXTURE_3D;else if(ve.isDataArrayTexture||ve.isCompressedArrayTexture)F.setTexture2DArray(ve,0),ut=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,ve.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ve.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,ve.unpackAlignment);const ht=D.getParameter(D.UNPACK_ROW_LENGTH),Ht=D.getParameter(D.UNPACK_IMAGE_HEIGHT),dn=D.getParameter(D.UNPACK_SKIP_PIXELS),$t=D.getParameter(D.UNPACK_SKIP_ROWS),ni=D.getParameter(D.UNPACK_SKIP_IMAGES),Bt=ge.isCompressedTexture?ge.mipmaps[he]:ge.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Bt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Bt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,N.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,N.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,N.min.z),ge.isDataTexture||ge.isData3DTexture?D.texSubImage3D(ut,he,re.x,re.y,re.z,Xe,Je,rt,st,mt,Bt.data):ve.isCompressedArrayTexture?D.compressedTexSubImage3D(ut,he,re.x,re.y,re.z,Xe,Je,rt,st,Bt.data):D.texSubImage3D(ut,he,re.x,re.y,re.z,Xe,Je,rt,st,mt,Bt),D.pixelStorei(D.UNPACK_ROW_LENGTH,ht),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ht),D.pixelStorei(D.UNPACK_SKIP_PIXELS,dn),D.pixelStorei(D.UNPACK_SKIP_ROWS,$t),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ni),he===0&&ve.generateMipmaps&&D.generateMipmap(ut),ne.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?F.setTextureCube(N,0):N.isData3DTexture?F.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?F.setTexture2DArray(N,0):F.setTexture2D(N,0),ne.unbindTexture()},this.resetState=function(){k=0,G=0,U=null,ne.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ju?"display-p3":"srgb",t.unpackColorSpace=Ut.workingColorSpace===bl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class j1 extends tg{}j1.prototype.isWebGL1Renderer=!0;class Q1 extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class eC extends vn{constructor(e=null,t=1,n=1,s,a,c,l,f,h=fn,d=fn,p,v){super(null,c,l,f,h,d,s,a,p,v),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zp extends pi{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Is=new qt,Kp=new qt,Ja=[],Jp=new Yr,tC=new qt,Eo=new Tn,Mo=new Fo;class jp extends Tn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zp(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tC)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),Jp.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(Jp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),Mo.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(Mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,c=e*a+1;for(let l=0;l<n.length;l++)n[l]=s[c+l]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Eo.geometry=this.geometry,Eo.material=this.material,Eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(n),e.ray.intersectsSphere(Mo)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Is),Kp.multiplyMatrices(n,Is),Eo.matrixWorld=Kp,Eo.raycast(e,Ja);for(let c=0,l=Ja.length;c<l;c++){const f=Ja[c];f.instanceId=a,f.object=this,t.push(f)}Ja.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zp(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new eC(new Float32Array(s*this.count),s,this.count,Rm,bi));const a=this.morphTexture.source.data.data;let c=0;for(let h=0;h<n.length;h++)c+=n[h];const l=this.geometry.morphTargetsRelative?1:1-c,f=s*e;a[f]=l,a.set(n,f+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class wi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),a=0;t.push(0);for(let c=1;c<=e;c++)n=this.getPoint(c/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const a=n.length;let c;t?c=t:c=e*n[a-1];let l=0,f=a-1,h;for(;l<=f;)if(s=Math.floor(l+(f-l)/2),h=n[s]-c,h<0)l=s+1;else if(h>0)f=s-1;else{f=s;break}if(s=f,n[s]===c)return s/(a-1);const d=n[s],v=n[s+1]-d,x=(c-d)/v;return(s+x)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const c=this.getPoint(s),l=this.getPoint(a),f=t||(c.isVector2?new Ae:new Q);return f.copy(l).sub(c).normalize(),f}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new Q,s=[],a=[],c=[],l=new Q,f=new qt;for(let x=0;x<=e;x++){const S=x/e;s[x]=this.getTangentAt(S,new Q)}a[0]=new Q,c[0]=new Q;let h=Number.MAX_VALUE;const d=Math.abs(s[0].x),p=Math.abs(s[0].y),v=Math.abs(s[0].z);d<=h&&(h=d,n.set(1,0,0)),p<=h&&(h=p,n.set(0,1,0)),v<=h&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],l),c[0].crossVectors(s[0],a[0]);for(let x=1;x<=e;x++){if(a[x]=a[x-1].clone(),c[x]=c[x-1].clone(),l.crossVectors(s[x-1],s[x]),l.length()>Number.EPSILON){l.normalize();const S=Math.acos(ln(s[x-1].dot(s[x]),-1,1));a[x].applyMatrix4(f.makeRotationAxis(l,S))}c[x].crossVectors(s[x],a[x])}if(t===!0){let x=Math.acos(ln(a[0].dot(a[e]),-1,1));x/=e,s[0].dot(l.crossVectors(a[0],a[e]))>0&&(x=-x);for(let S=1;S<=e;S++)a[S].applyMatrix4(f.makeRotationAxis(s[S],x*S)),c[S].crossVectors(s[S],a[S])}return{tangents:s,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class tf extends wi{constructor(e=0,t=0,n=1,s=1,a=0,c=Math.PI*2,l=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=c,this.aClockwise=l,this.aRotation=f}getPoint(e,t=new Ae){const n=t,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const c=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(c?a=0:a=s),this.aClockwise===!0&&!c&&(a===s?a=-s:a=a-s);const l=this.aStartAngle+e*a;let f=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const d=Math.cos(this.aRotation),p=Math.sin(this.aRotation),v=f-this.aX,x=h-this.aY;f=v*d-x*p+this.aX,h=v*p+x*d+this.aY}return n.set(f,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class nC extends tf{constructor(e,t,n,s,a,c){super(e,t,n,n,s,a,c),this.isArcCurve=!0,this.type="ArcCurve"}}function nf(){let i=0,e=0,t=0,n=0;function s(a,c,l,f){i=a,e=l,t=-3*a+3*c-2*l-f,n=2*a-2*c+l+f}return{initCatmullRom:function(a,c,l,f,h){s(c,l,h*(l-a),h*(f-c))},initNonuniformCatmullRom:function(a,c,l,f,h,d,p){let v=(c-a)/h-(l-a)/(h+d)+(l-c)/d,x=(l-c)/d-(f-c)/(d+p)+(f-l)/p;v*=d,x*=d,s(c,l,v,x)},calc:function(a){const c=a*a,l=c*a;return i+e*a+t*c+n*l}}}const ja=new Q,xu=new nf,yu=new nf,Su=new nf;class iC extends wi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new Q){const n=t,s=this.points,a=s.length,c=(a-(this.closed?0:1))*e;let l=Math.floor(c),f=c-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/a)+1)*a:f===0&&l===a-1&&(l=a-2,f=1);let h,d;this.closed||l>0?h=s[(l-1)%a]:(ja.subVectors(s[0],s[1]).add(s[0]),h=ja);const p=s[l%a],v=s[(l+1)%a];if(this.closed||l+2<a?d=s[(l+2)%a]:(ja.subVectors(s[a-1],s[a-2]).add(s[a-1]),d=ja),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let S=Math.pow(h.distanceToSquared(p),x),E=Math.pow(p.distanceToSquared(v),x),m=Math.pow(v.distanceToSquared(d),x);E<1e-4&&(E=1),S<1e-4&&(S=E),m<1e-4&&(m=E),xu.initNonuniformCatmullRom(h.x,p.x,v.x,d.x,S,E,m),yu.initNonuniformCatmullRom(h.y,p.y,v.y,d.y,S,E,m),Su.initNonuniformCatmullRom(h.z,p.z,v.z,d.z,S,E,m)}else this.curveType==="catmullrom"&&(xu.initCatmullRom(h.x,p.x,v.x,d.x,this.tension),yu.initCatmullRom(h.y,p.y,v.y,d.y,this.tension),Su.initCatmullRom(h.z,p.z,v.z,d.z,this.tension));return n.set(xu.calc(f),yu.calc(f),Su.calc(f)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Q().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Qp(i,e,t,n,s){const a=(n-e)*.5,c=(s-t)*.5,l=i*i,f=i*l;return(2*t-2*n+a+c)*f+(-3*t+3*n-2*a-c)*l+a*i+t}function rC(i,e){const t=1-i;return t*t*e}function sC(i,e){return 2*(1-i)*i*e}function oC(i,e){return i*i*e}function Ro(i,e,t,n){return rC(i,e)+sC(i,t)+oC(i,n)}function aC(i,e){const t=1-i;return t*t*t*e}function lC(i,e){const t=1-i;return 3*t*t*i*e}function cC(i,e){return 3*(1-i)*i*i*e}function uC(i,e){return i*i*i*e}function Po(i,e,t,n,s){return aC(i,e)+lC(i,t)+cC(i,n)+uC(i,s)}class ng extends wi{constructor(e=new Ae,t=new Ae,n=new Ae,s=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ae){const n=t,s=this.v0,a=this.v1,c=this.v2,l=this.v3;return n.set(Po(e,s.x,a.x,c.x,l.x),Po(e,s.y,a.y,c.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fC extends wi{constructor(e=new Q,t=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Q){const n=t,s=this.v0,a=this.v1,c=this.v2,l=this.v3;return n.set(Po(e,s.x,a.x,c.x,l.x),Po(e,s.y,a.y,c.y,l.y),Po(e,s.z,a.z,c.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ig extends wi{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hC extends wi{constructor(e=new Q,t=new Q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Q){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rg extends wi{constructor(e=new Ae,t=new Ae,n=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ae){const n=t,s=this.v0,a=this.v1,c=this.v2;return n.set(Ro(e,s.x,a.x,c.x),Ro(e,s.y,a.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dC extends wi{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){const n=t,s=this.v0,a=this.v1,c=this.v2;return n.set(Ro(e,s.x,a.x,c.x),Ro(e,s.y,a.y,c.y),Ro(e,s.z,a.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sg extends wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const n=t,s=this.points,a=(s.length-1)*e,c=Math.floor(a),l=a-c,f=s[c===0?c:c-1],h=s[c],d=s[c>s.length-2?s.length-1:c+1],p=s[c>s.length-3?s.length-1:c+2];return n.set(Qp(l,f.x,h.x,d.x,p.x),Qp(l,f.y,h.y,d.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Ae().fromArray(s))}return this}}var zu=Object.freeze({__proto__:null,ArcCurve:nC,CatmullRomCurve3:iC,CubicBezierCurve:ng,CubicBezierCurve3:fC,EllipseCurve:tf,LineCurve:ig,LineCurve3:hC,QuadraticBezierCurve:rg,QuadraticBezierCurve3:dC,SplineCurve:sg});class pC extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const c=s[a]-n,l=this.curves[a],f=l.getLength(),h=f===0?0:1-c/f;return l.getPointAt(h,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const c=a[s],l=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,f=c.getPoints(l);for(let h=0;h<f.length;h++){const d=f[h];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new zu[s.type]().fromJSON(s))}return this}}class Gs extends pC{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ig(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const a=new rg(this.currentPoint.clone(),new Ae(e,t),new Ae(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,a,c){const l=new ng(this.currentPoint.clone(),new Ae(e,t),new Ae(n,s),new Ae(a,c));return this.curves.push(l),this.currentPoint.set(a,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new sg(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,a,c){const l=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+l,t+f,n,s,a,c),this}absarc(e,t,n,s,a,c){return this.absellipse(e,t,n,n,s,a,c),this}ellipse(e,t,n,s,a,c,l,f){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+h,t+d,n,s,a,c,l,f),this}absellipse(e,t,n,s,a,c,l,f){const h=new tf(e,t,n,s,a,c,l,f);if(this.curves.length>0){const p=h.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(h);const d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class rf extends ei{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],c=[],l=[],f=[],h=new Q,d=new Ae;c.push(0,0,0),l.push(0,0,1),f.push(.5,.5);for(let p=0,v=3;p<=t;p++,v+=3){const x=n+p/t*s;h.x=e*Math.cos(x),h.y=e*Math.sin(x),c.push(h.x,h.y,h.z),l.push(0,0,1),d.x=(c[v]/e+1)/2,d.y=(c[v+1]/e+1)/2,f.push(d.x,d.y)}for(let p=1;p<=t;p++)a.push(p,p+1,0);this.setIndex(a),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ks extends Gs{constructor(e){super(e),this.uuid=qr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Gs().fromJSON(s))}return this}}const mC={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let a=og(i,0,s,t,!0);const c=[];if(!a||a.next===a.prev)return c;let l,f,h,d,p,v,x;if(n&&(a=yC(i,e,a,t)),i.length>80*t){l=h=i[0],f=d=i[1];for(let S=t;S<s;S+=t)p=i[S],v=i[S+1],p<l&&(l=p),v<f&&(f=v),p>h&&(h=p),v>d&&(d=v);x=Math.max(h-l,d-f),x=x!==0?32767/x:0}return Uo(a,c,t,l,f,x,0),c}};function og(i,e,t,n,s){let a,c;if(s===LC(i,e,t,n)>0)for(a=e;a<t;a+=n)c=em(a,i[a],i[a+1],c);else for(a=t-n;a>=e;a-=n)c=em(a,i[a],i[a+1],c);return c&&wl(c,c.next)&&(Oo(c),c=c.next),c}function Vr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(wl(t,t.next)||Xt(t.prev,t,t.next)===0)){if(Oo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Uo(i,e,t,n,s,a,c){if(!i)return;!c&&a&&TC(i,n,s,a);let l=i,f,h;for(;i.prev!==i.next;){if(f=i.prev,h=i.next,a?_C(i,n,s,a):gC(i)){e.push(f.i/t|0),e.push(i.i/t|0),e.push(h.i/t|0),Oo(i),i=h.next,l=h.next;continue}if(i=h,i===l){c?c===1?(i=vC(Vr(i),e,t),Uo(i,e,t,n,s,a,2)):c===2&&xC(i,e,t,n,s,a):Uo(Vr(i),e,t,n,s,a,1);break}}}function gC(i){const e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;const s=e.x,a=t.x,c=n.x,l=e.y,f=t.y,h=n.y,d=s<a?s<c?s:c:a<c?a:c,p=l<f?l<h?l:h:f<h?f:h,v=s>a?s>c?s:c:a>c?a:c,x=l>f?l>h?l:h:f>h?f:h;let S=n.next;for(;S!==e;){if(S.x>=d&&S.x<=v&&S.y>=p&&S.y<=x&&Fs(s,l,a,f,c,h,S.x,S.y)&&Xt(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function _C(i,e,t,n){const s=i.prev,a=i,c=i.next;if(Xt(s,a,c)>=0)return!1;const l=s.x,f=a.x,h=c.x,d=s.y,p=a.y,v=c.y,x=l<f?l<h?l:h:f<h?f:h,S=d<p?d<v?d:v:p<v?p:v,E=l>f?l>h?l:h:f>h?f:h,m=d>p?d>v?d:v:p>v?p:v,g=Gu(x,S,e,t,n),P=Gu(E,m,e,t,n);let y=i.prevZ,A=i.nextZ;for(;y&&y.z>=g&&A&&A.z<=P;){if(y.x>=x&&y.x<=E&&y.y>=S&&y.y<=m&&y!==s&&y!==c&&Fs(l,d,f,p,h,v,y.x,y.y)&&Xt(y.prev,y,y.next)>=0||(y=y.prevZ,A.x>=x&&A.x<=E&&A.y>=S&&A.y<=m&&A!==s&&A!==c&&Fs(l,d,f,p,h,v,A.x,A.y)&&Xt(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;y&&y.z>=g;){if(y.x>=x&&y.x<=E&&y.y>=S&&y.y<=m&&y!==s&&y!==c&&Fs(l,d,f,p,h,v,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;A&&A.z<=P;){if(A.x>=x&&A.x<=E&&A.y>=S&&A.y<=m&&A!==s&&A!==c&&Fs(l,d,f,p,h,v,A.x,A.y)&&Xt(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function vC(i,e,t){let n=i;do{const s=n.prev,a=n.next.next;!wl(s,a)&&ag(s,n,n.next,a)&&No(s,a)&&No(a,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),Oo(n),Oo(n.next),n=i=a),n=n.next}while(n!==i);return Vr(n)}function xC(i,e,t,n,s,a){let c=i;do{let l=c.next.next;for(;l!==c.prev;){if(c.i!==l.i&&CC(c,l)){let f=lg(c,l);c=Vr(c,c.next),f=Vr(f,f.next),Uo(c,e,t,n,s,a,0),Uo(f,e,t,n,s,a,0);return}l=l.next}c=c.next}while(c!==i)}function yC(i,e,t,n){const s=[];let a,c,l,f,h;for(a=0,c=e.length;a<c;a++)l=e[a]*n,f=a<c-1?e[a+1]*n:i.length,h=og(i,l,f,n,!1),h===h.next&&(h.steiner=!0),s.push(wC(h));for(s.sort(SC),a=0;a<s.length;a++)t=EC(s[a],t);return t}function SC(i,e){return i.x-e.x}function EC(i,e){const t=MC(i,e);if(!t)return e;const n=lg(t,i);return Vr(n,n.next),Vr(t,t.next)}function MC(i,e){let t=e,n=-1/0,s;const a=i.x,c=i.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const v=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=a&&v>n&&(n=v,s=t.x<t.next.x?t:t.next,v===a))return s}t=t.next}while(t!==e);if(!s)return null;const l=s,f=s.x,h=s.y;let d=1/0,p;t=s;do a>=t.x&&t.x>=f&&a!==t.x&&Fs(c<h?a:n,c,f,h,c<h?n:a,c,t.x,t.y)&&(p=Math.abs(c-t.y)/(a-t.x),No(t,i)&&(p<d||p===d&&(t.x>s.x||t.x===s.x&&bC(s,t)))&&(s=t,d=p)),t=t.next;while(t!==l);return s}function bC(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function TC(i,e,t,n){let s=i;do s.z===0&&(s.z=Gu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,AC(s)}function AC(i){let e,t,n,s,a,c,l,f,h=1;do{for(t=i,i=null,a=null,c=0;t;){for(c++,n=t,l=0,e=0;e<h&&(l++,n=n.nextZ,!!n);e++);for(f=h;l>0||f>0&&n;)l!==0&&(f===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,l--):(s=n,n=n.nextZ,f--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;t=n}a.nextZ=null,h*=2}while(c>1);return i}function Gu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function wC(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Fs(i,e,t,n,s,a,c,l){return(s-c)*(e-l)>=(i-c)*(a-l)&&(i-c)*(n-l)>=(t-c)*(e-l)&&(t-c)*(a-l)>=(s-c)*(n-l)}function CC(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!RC(i,e)&&(No(i,e)&&No(e,i)&&PC(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||wl(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function wl(i,e){return i.x===e.x&&i.y===e.y}function ag(i,e,t,n){const s=el(Xt(i,e,t)),a=el(Xt(i,e,n)),c=el(Xt(t,n,i)),l=el(Xt(t,n,e));return!!(s!==a&&c!==l||s===0&&Qa(i,t,e)||a===0&&Qa(i,n,e)||c===0&&Qa(t,i,n)||l===0&&Qa(t,e,n))}function Qa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function el(i){return i>0?1:i<0?-1:0}function RC(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ag(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function No(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function PC(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function lg(i,e){const t=new ku(i.i,i.x,i.y),n=new ku(e.i,e.x,e.y),s=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function em(i,e,t,n){const s=new ku(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Oo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ku(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function LC(i,e,t,n){let s=0;for(let a=e,c=t-n;a<t;a+=n)s+=(i[c]-i[a])*(i[a+1]+i[c+1]),c=a;return s}class Ai{static area(e){const t=e.length;let n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return Ai.area(e)<0}static triangulateShape(e,t){const n=[],s=[],a=[];tm(e),nm(n,e);let c=e.length;t.forEach(tm);for(let f=0;f<t.length;f++)s.push(c),c+=t[f].length,nm(n,t[f]);const l=mC.triangulate(n,s);for(let f=0;f<l.length;f+=3)a.push(l.slice(f,f+3));return a}}function tm(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function nm(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class sf extends ei{constructor(e=new ks([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],a=[];for(let l=0,f=e.length;l<f;l++){const h=e[l];c(h)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(a,2)),this.computeVertexNormals();function c(l){const f=[],h=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let v=t.bevelEnabled!==void 0?t.bevelEnabled:!0,x=t.bevelThickness!==void 0?t.bevelThickness:.2,S=t.bevelSize!==void 0?t.bevelSize:x-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,P=t.UVGenerator!==void 0?t.UVGenerator:IC;let y,A=!1,k,G,U,W;g&&(y=g.getSpacedPoints(d),A=!0,v=!1,k=g.computeFrenetFrames(d,!1),G=new Q,U=new Q,W=new Q),v||(m=0,x=0,S=0,E=0);const fe=l.extractPoints(h);let b=fe.shape;const O=fe.holes;if(!Ai.isClockWise(b)){b=b.reverse();for(let D=0,ce=O.length;D<ce;D++){const X=O[D];Ai.isClockWise(X)&&(O[D]=X.reverse())}}const Te=Ai.triangulateShape(b,O),Y=b;for(let D=0,ce=O.length;D<ce;D++){const X=O[D];b=b.concat(X)}function xe(D,ce,X){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(ce,X)}const oe=b.length,ae=Te.length;function K(D,ce,X){let te,ne,ye;const q=D.x-ce.x,F=D.y-ce.y,De=X.x-D.x,R=X.y-D.y,T=q*q+F*F,ue=q*R-F*De;if(Math.abs(ue)>Number.EPSILON){const me=Math.sqrt(T),Le=Math.sqrt(De*De+R*R),Ie=ce.x-F/me,et=ce.y+q/me,$e=X.x-R/Le,Be=X.y+De/Le,ze=(($e-Ie)*R-(Be-et)*De)/(q*R-F*De);te=Ie+q*ze-D.x,ne=et+F*ze-D.y;const tt=te*te+ne*ne;if(tt<=2)return new Ae(te,ne);ye=Math.sqrt(tt/2)}else{let me=!1;q>Number.EPSILON?De>Number.EPSILON&&(me=!0):q<-Number.EPSILON?De<-Number.EPSILON&&(me=!0):Math.sign(F)===Math.sign(R)&&(me=!0),me?(te=-F,ne=q,ye=Math.sqrt(T)):(te=q,ne=F,ye=Math.sqrt(T/2))}return new Ae(te/ye,ne/ye)}const Ee=[];for(let D=0,ce=Y.length,X=ce-1,te=D+1;D<ce;D++,X++,te++)X===ce&&(X=0),te===ce&&(te=0),Ee[D]=K(Y[D],Y[X],Y[te]);const Me=[];let Re,ke=Ee.concat();for(let D=0,ce=O.length;D<ce;D++){const X=O[D];Re=[];for(let te=0,ne=X.length,ye=ne-1,q=te+1;te<ne;te++,ye++,q++)ye===ne&&(ye=0),q===ne&&(q=0),Re[te]=K(X[te],X[ye],X[q]);Me.push(Re),ke=ke.concat(Re)}for(let D=0;D<m;D++){const ce=D/m,X=x*Math.cos(ce*Math.PI/2),te=S*Math.sin(ce*Math.PI/2)+E;for(let ne=0,ye=Y.length;ne<ye;ne++){const q=xe(Y[ne],Ee[ne],te);L(q.x,q.y,-X)}for(let ne=0,ye=O.length;ne<ye;ne++){const q=O[ne];Re=Me[ne];for(let F=0,De=q.length;F<De;F++){const R=xe(q[F],Re[F],te);L(R.x,R.y,-X)}}}const nt=S+E;for(let D=0;D<oe;D++){const ce=v?xe(b[D],ke[D],nt):b[D];A?(U.copy(k.normals[0]).multiplyScalar(ce.x),G.copy(k.binormals[0]).multiplyScalar(ce.y),W.copy(y[0]).add(U).add(G),L(W.x,W.y,W.z)):L(ce.x,ce.y,0)}for(let D=1;D<=d;D++)for(let ce=0;ce<oe;ce++){const X=v?xe(b[ce],ke[ce],nt):b[ce];A?(U.copy(k.normals[D]).multiplyScalar(X.x),G.copy(k.binormals[D]).multiplyScalar(X.y),W.copy(y[D]).add(U).add(G),L(W.x,W.y,W.z)):L(X.x,X.y,p/d*D)}for(let D=m-1;D>=0;D--){const ce=D/m,X=x*Math.cos(ce*Math.PI/2),te=S*Math.sin(ce*Math.PI/2)+E;for(let ne=0,ye=Y.length;ne<ye;ne++){const q=xe(Y[ne],Ee[ne],te);L(q.x,q.y,p+X)}for(let ne=0,ye=O.length;ne<ye;ne++){const q=O[ne];Re=Me[ne];for(let F=0,De=q.length;F<De;F++){const R=xe(q[F],Re[F],te);A?L(R.x,R.y+y[d-1].y,y[d-1].x+X):L(R.x,R.y,p+X)}}}z(),B();function z(){const D=s.length/3;if(v){let ce=0,X=oe*ce;for(let te=0;te<ae;te++){const ne=Te[te];ie(ne[2]+X,ne[1]+X,ne[0]+X)}ce=d+m*2,X=oe*ce;for(let te=0;te<ae;te++){const ne=Te[te];ie(ne[0]+X,ne[1]+X,ne[2]+X)}}else{for(let ce=0;ce<ae;ce++){const X=Te[ce];ie(X[2],X[1],X[0])}for(let ce=0;ce<ae;ce++){const X=Te[ce];ie(X[0]+oe*d,X[1]+oe*d,X[2]+oe*d)}}n.addGroup(D,s.length/3-D,0)}function B(){const D=s.length/3;let ce=0;I(Y,ce),ce+=Y.length;for(let X=0,te=O.length;X<te;X++){const ne=O[X];I(ne,ce),ce+=ne.length}n.addGroup(D,s.length/3-D,1)}function I(D,ce){let X=D.length;for(;--X>=0;){const te=X;let ne=X-1;ne<0&&(ne=D.length-1);for(let ye=0,q=d+m*2;ye<q;ye++){const F=oe*ye,De=oe*(ye+1),R=ce+te+F,T=ce+ne+F,ue=ce+ne+De,me=ce+te+De;de(R,T,ue,me)}}}function L(D,ce,X){f.push(D),f.push(ce),f.push(X)}function ie(D,ce,X){se(D),se(ce),se(X);const te=s.length/3,ne=P.generateTopUV(n,s,te-3,te-2,te-1);Se(ne[0]),Se(ne[1]),Se(ne[2])}function de(D,ce,X,te){se(D),se(ce),se(te),se(ce),se(X),se(te);const ne=s.length/3,ye=P.generateSideWallUV(n,s,ne-6,ne-3,ne-2,ne-1);Se(ye[0]),Se(ye[1]),Se(ye[3]),Se(ye[1]),Se(ye[2]),Se(ye[3])}function se(D){s.push(f[D*3+0]),s.push(f[D*3+1]),s.push(f[D*3+2])}function Se(D){a.push(D.x),a.push(D.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return DC(t,n,e)}static fromJSON(e,t){const n=[];for(let a=0,c=e.shapes.length;a<c;a++){const l=t[e.shapes[a]];n.push(l)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new zu[s.type]().fromJSON(s)),new sf(n,e.options)}}const IC={generateTopUV:function(i,e,t,n,s){const a=e[t*3],c=e[t*3+1],l=e[n*3],f=e[n*3+1],h=e[s*3],d=e[s*3+1];return[new Ae(a,c),new Ae(l,f),new Ae(h,d)]},generateSideWallUV:function(i,e,t,n,s,a){const c=e[t*3],l=e[t*3+1],f=e[t*3+2],h=e[n*3],d=e[n*3+1],p=e[n*3+2],v=e[s*3],x=e[s*3+1],S=e[s*3+2],E=e[a*3],m=e[a*3+1],g=e[a*3+2];return Math.abs(l-d)<Math.abs(c-h)?[new Ae(c,1-f),new Ae(h,1-p),new Ae(v,1-S),new Ae(E,1-g)]:[new Ae(l,1-f),new Ae(d,1-p),new Ae(x,1-S),new Ae(m,1-g)]}};function DC(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const a=i[n];t.shapes.push(a.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class of extends ei{constructor(e=new ks([new Ae(0,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],a=[],c=[];let l=0,f=0;if(Array.isArray(e)===!1)h(e);else for(let d=0;d<e.length;d++)h(e[d]),this.addGroup(l,f,d),l+=f,f=0;this.setIndex(n),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(c,2));function h(d){const p=s.length/3,v=d.extractPoints(t);let x=v.shape;const S=v.holes;Ai.isClockWise(x)===!1&&(x=x.reverse());for(let m=0,g=S.length;m<g;m++){const P=S[m];Ai.isClockWise(P)===!0&&(S[m]=P.reverse())}const E=Ai.triangulateShape(x,S);for(let m=0,g=S.length;m<g;m++){const P=S[m];x=x.concat(P)}for(let m=0,g=x.length;m<g;m++){const P=x[m];s.push(P.x,P.y,0),a.push(0,0,1),c.push(P.x,P.y)}for(let m=0,g=E.length;m<g;m++){const P=E[m],y=P[0]+p,A=P[1]+p,k=P[2]+p;n.push(y,A,k),f+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return UC(t,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const c=t[e.shapes[s]];n.push(c)}return new of(n,e.curveSegments)}}function UC(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class af extends ei{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,c=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:c,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(c+l,Math.PI);let h=0;const d=[],p=new Q,v=new Q,x=[],S=[],E=[],m=[];for(let g=0;g<=n;g++){const P=[],y=g/n;let A=0;g===0&&c===0?A=.5/t:g===n&&f===Math.PI&&(A=-.5/t);for(let k=0;k<=t;k++){const G=k/t;p.x=-e*Math.cos(s+G*a)*Math.sin(c+y*l),p.y=e*Math.cos(c+y*l),p.z=e*Math.sin(s+G*a)*Math.sin(c+y*l),S.push(p.x,p.y,p.z),v.copy(p).normalize(),E.push(v.x,v.y,v.z),m.push(G+A,1-y),P.push(h++)}d.push(P)}for(let g=0;g<n;g++)for(let P=0;P<t;P++){const y=d[g][P+1],A=d[g][P],k=d[g+1][P],G=d[g+1][P+1];(g!==0||c>0)&&x.push(y,A,G),(g!==n-1||f<Math.PI)&&x.push(A,k,G)}this.setIndex(x),this.setAttribute("position",new Jt(S,3)),this.setAttribute("normal",new Jt(E,3)),this.setAttribute("uv",new Jt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new af(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const _l={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class NC{constructor(e,t,n){const s=this;let a=!1,c=0,l=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){l++,a===!1&&s.onStart!==void 0&&s.onStart(d,c,l),a=!0},this.itemEnd=function(d){c++,s.onProgress!==void 0&&s.onProgress(d,c,l),c===l&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return f?f(d):d},this.setURLModifier=function(d){return f=d,this},this.addHandler=function(d,p){return h.push(d,p),this},this.removeHandler=function(d){const p=h.indexOf(d);return p!==-1&&h.splice(p,2),this},this.getHandler=function(d){for(let p=0,v=h.length;p<v;p+=2){const x=h[p],S=h[p+1];if(x.global&&(x.lastIndex=0),x.test(d))return S}return null}}}const OC=new NC;class $s{constructor(e){this.manager=e!==void 0?e:OC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}$s.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vi={};class FC extends Error{constructor(e,t){super(e),this.response=t}}class cg extends $s{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=_l.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:n,onError:s});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:n,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,f=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const d=Vi[e],p=h.body.getReader(),v=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),x=v?parseInt(v):0,S=x!==0;let E=0;const m=new ReadableStream({start(g){P();function P(){p.read().then(({done:y,value:A})=>{if(y)g.close();else{E+=A.byteLength;const k=new ProgressEvent("progress",{lengthComputable:S,loaded:E,total:x});for(let G=0,U=d.length;G<U;G++){const W=d[G];W.onProgress&&W.onProgress(k)}g.enqueue(A),P()}})}}});return new Response(m)}else throw new FC(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(f){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(d=>new DOMParser().parseFromString(d,l));case"json":return h.json();default:if(l===void 0)return h.text();{const p=/charset="?([^;"\s]*)"?/i.exec(l),v=p&&p[1]?p[1].toLowerCase():void 0,x=new TextDecoder(v);return h.arrayBuffer().then(S=>x.decode(S))}}}).then(h=>{_l.add(e,h);const d=Vi[e];delete Vi[e];for(let p=0,v=d.length;p<v;p++){const x=d[p];x.onLoad&&x.onLoad(h)}}).catch(h=>{const d=Vi[e];if(d===void 0)throw this.manager.itemError(e),h;delete Vi[e];for(let p=0,v=d.length;p<v;p++){const x=d[p];x.onError&&x.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class BC extends $s{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=_l.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const l=Do("img");function f(){d(),_l.add(e,this),t&&t(this),a.manager.itemEnd(e)}function h(p){d(),s&&s(p),a.manager.itemError(e),a.manager.itemEnd(e)}function d(){l.removeEventListener("load",f,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",f,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),a.manager.itemStart(e),l.src=e,l}}class zC extends $s{constructor(e){super(e)}load(e,t,n,s){const a=new vn,c=new BC(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(l){a.image=l,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class im{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ln(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const rm=new Ae;class GC{constructor(e=new Ae(1/0,1/0),t=new Ae(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rm).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class ur{constructor(){this.type="ShapePath",this.color=new bt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Gs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,a,c){return this.currentPath.bezierCurveTo(e,t,n,s,a,c),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const P=[];for(let y=0,A=g.length;y<A;y++){const k=g[y],G=new ks;G.curves=k.curves,P.push(G)}return P}function n(g,P){const y=P.length;let A=!1;for(let k=y-1,G=0;G<y;k=G++){let U=P[k],W=P[G],fe=W.x-U.x,b=W.y-U.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(U=P[G],fe=-fe,W=P[k],b=-b),g.y<U.y||g.y>W.y)continue;if(g.y===U.y){if(g.x===U.x)return!0}else{const O=b*(g.x-U.x)-fe*(g.y-U.y);if(O===0)return!0;if(O<0)continue;A=!A}}else{if(g.y!==U.y)continue;if(W.x<=g.x&&g.x<=U.x||U.x<=g.x&&g.x<=W.x)return!0}}return A}const s=Ai.isClockWise,a=this.subPaths;if(a.length===0)return[];let c,l,f;const h=[];if(a.length===1)return l=a[0],f=new ks,f.curves=l.curves,h.push(f),h;let d=!s(a[0].getPoints());d=e?!d:d;const p=[],v=[];let x=[],S=0,E;v[S]=void 0,x[S]=[];for(let g=0,P=a.length;g<P;g++)l=a[g],E=l.getPoints(),c=s(E),c=e?!c:c,c?(!d&&v[S]&&S++,v[S]={s:new ks,p:E},v[S].s.curves=l.curves,d&&S++,x[S]=[]):x[S].push({h:l,p:E[0]});if(!v[0])return t(a);if(v.length>1){let g=!1,P=0;for(let y=0,A=v.length;y<A;y++)p[y]=[];for(let y=0,A=v.length;y<A;y++){const k=x[y];for(let G=0;G<k.length;G++){const U=k[G];let W=!0;for(let fe=0;fe<v.length;fe++)n(U.p,v[fe].p)&&(y!==fe&&P++,W?(W=!1,p[fe].push(U)):g=!0);W&&p[y].push(U)}}P>0&&g===!1&&(x=p)}let m;for(let g=0,P=v.length;g<P;g++){f=v[g].s,h.push(f),m=x[g];for(let y=0,A=m.length;y<A;y++)f.holes.push(m[y].h)}return h}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ku}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ku);const kC=fi;class vl extends $s{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,s){const a=this,c=new cg(a.manager);c.setPath(a.path),c.setRequestHeader(a.requestHeader),c.setWithCredentials(a.withCredentials),c.load(e,function(l){try{t(a.parse(l))}catch(f){s?s(f):console.error(f),a.manager.itemError(e)}},n,s)}parse(e){const t=this;function n(z,B){if(z.nodeType!==1)return;const I=A(z);let L=!1,ie=null;switch(z.nodeName){case"svg":B=S(z,B);break;case"style":a(z);break;case"g":B=S(z,B);break;case"path":B=S(z,B),z.hasAttribute("d")&&(ie=s(z));break;case"rect":B=S(z,B),ie=f(z);break;case"polygon":B=S(z,B),ie=h(z);break;case"polyline":B=S(z,B),ie=d(z);break;case"circle":B=S(z,B),ie=p(z);break;case"ellipse":B=S(z,B),ie=v(z);break;case"line":B=S(z,B),ie=x(z);break;case"defs":L=!0;break;case"use":B=S(z,B);const Se=(z.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),D=z.viewportElement.getElementById(Se);D?n(D,B):console.warn("SVGLoader: 'use node' references non-existent node id: "+Se);break}ie&&(B.fill!==void 0&&B.fill!=="none"&&ie.color.setStyle(B.fill,kC),G(ie,Re),pe.push(ie),ie.userData={node:z,style:B});const de=z.childNodes;for(let se=0;se<de.length;se++){const Se=de[se];L&&Se.nodeName!=="style"&&Se.nodeName!=="defs"||n(Se,B)}I&&(Y.pop(),Y.length>0?Re.copy(Y[Y.length-1]):Re.identity())}function s(z){const B=new ur,I=new Ae,L=new Ae,ie=new Ae;let de=!0,se=!1;const Se=z.getAttribute("d");if(Se===""||Se==="none")return null;const D=Se.match(/[a-df-z][^a-df-z]*/ig);for(let ce=0,X=D.length;ce<X;ce++){const te=D[ce],ne=te.charAt(0),ye=te.slice(1).trim();de===!0&&(se=!0,de=!1);let q;switch(ne){case"M":q=m(ye);for(let F=0,De=q.length;F<De;F+=2)I.x=q[F+0],I.y=q[F+1],L.x=I.x,L.y=I.y,F===0?B.moveTo(I.x,I.y):B.lineTo(I.x,I.y),F===0&&ie.copy(I);break;case"H":q=m(ye);for(let F=0,De=q.length;F<De;F++)I.x=q[F],L.x=I.x,L.y=I.y,B.lineTo(I.x,I.y),F===0&&se===!0&&ie.copy(I);break;case"V":q=m(ye);for(let F=0,De=q.length;F<De;F++)I.y=q[F],L.x=I.x,L.y=I.y,B.lineTo(I.x,I.y),F===0&&se===!0&&ie.copy(I);break;case"L":q=m(ye);for(let F=0,De=q.length;F<De;F+=2)I.x=q[F+0],I.y=q[F+1],L.x=I.x,L.y=I.y,B.lineTo(I.x,I.y),F===0&&se===!0&&ie.copy(I);break;case"C":q=m(ye);for(let F=0,De=q.length;F<De;F+=6)B.bezierCurveTo(q[F+0],q[F+1],q[F+2],q[F+3],q[F+4],q[F+5]),L.x=q[F+2],L.y=q[F+3],I.x=q[F+4],I.y=q[F+5],F===0&&se===!0&&ie.copy(I);break;case"S":q=m(ye);for(let F=0,De=q.length;F<De;F+=4)B.bezierCurveTo(E(I.x,L.x),E(I.y,L.y),q[F+0],q[F+1],q[F+2],q[F+3]),L.x=q[F+0],L.y=q[F+1],I.x=q[F+2],I.y=q[F+3],F===0&&se===!0&&ie.copy(I);break;case"Q":q=m(ye);for(let F=0,De=q.length;F<De;F+=4)B.quadraticCurveTo(q[F+0],q[F+1],q[F+2],q[F+3]),L.x=q[F+0],L.y=q[F+1],I.x=q[F+2],I.y=q[F+3],F===0&&se===!0&&ie.copy(I);break;case"T":q=m(ye);for(let F=0,De=q.length;F<De;F+=2){const R=E(I.x,L.x),T=E(I.y,L.y);B.quadraticCurveTo(R,T,q[F+0],q[F+1]),L.x=R,L.y=T,I.x=q[F+0],I.y=q[F+1],F===0&&se===!0&&ie.copy(I)}break;case"A":q=m(ye,[3,4],7);for(let F=0,De=q.length;F<De;F+=7){if(q[F+5]==I.x&&q[F+6]==I.y)continue;const R=I.clone();I.x=q[F+5],I.y=q[F+6],L.x=I.x,L.y=I.y,c(B,q[F],q[F+1],q[F+2],q[F+3],q[F+4],R,I),F===0&&se===!0&&ie.copy(I)}break;case"m":q=m(ye);for(let F=0,De=q.length;F<De;F+=2)I.x+=q[F+0],I.y+=q[F+1],L.x=I.x,L.y=I.y,F===0?B.moveTo(I.x,I.y):B.lineTo(I.x,I.y),F===0&&ie.copy(I);break;case"h":q=m(ye);for(let F=0,De=q.length;F<De;F++)I.x+=q[F],L.x=I.x,L.y=I.y,B.lineTo(I.x,I.y),F===0&&se===!0&&ie.copy(I);break;case"v":q=m(ye);for(let F=0,De=q.length;F<De;F++)I.y+=q[F],L.x=I.x,L.y=I.y,B.lineTo(I.x,I.y),F===0&&se===!0&&ie.copy(I);break;case"l":q=m(ye);for(let F=0,De=q.length;F<De;F+=2)I.x+=q[F+0],I.y+=q[F+1],L.x=I.x,L.y=I.y,B.lineTo(I.x,I.y),F===0&&se===!0&&ie.copy(I);break;case"c":q=m(ye);for(let F=0,De=q.length;F<De;F+=6)B.bezierCurveTo(I.x+q[F+0],I.y+q[F+1],I.x+q[F+2],I.y+q[F+3],I.x+q[F+4],I.y+q[F+5]),L.x=I.x+q[F+2],L.y=I.y+q[F+3],I.x+=q[F+4],I.y+=q[F+5],F===0&&se===!0&&ie.copy(I);break;case"s":q=m(ye);for(let F=0,De=q.length;F<De;F+=4)B.bezierCurveTo(E(I.x,L.x),E(I.y,L.y),I.x+q[F+0],I.y+q[F+1],I.x+q[F+2],I.y+q[F+3]),L.x=I.x+q[F+0],L.y=I.y+q[F+1],I.x+=q[F+2],I.y+=q[F+3],F===0&&se===!0&&ie.copy(I);break;case"q":q=m(ye);for(let F=0,De=q.length;F<De;F+=4)B.quadraticCurveTo(I.x+q[F+0],I.y+q[F+1],I.x+q[F+2],I.y+q[F+3]),L.x=I.x+q[F+0],L.y=I.y+q[F+1],I.x+=q[F+2],I.y+=q[F+3],F===0&&se===!0&&ie.copy(I);break;case"t":q=m(ye);for(let F=0,De=q.length;F<De;F+=2){const R=E(I.x,L.x),T=E(I.y,L.y);B.quadraticCurveTo(R,T,I.x+q[F+0],I.y+q[F+1]),L.x=R,L.y=T,I.x=I.x+q[F+0],I.y=I.y+q[F+1],F===0&&se===!0&&ie.copy(I)}break;case"a":q=m(ye,[3,4],7);for(let F=0,De=q.length;F<De;F+=7){if(q[F+5]==0&&q[F+6]==0)continue;const R=I.clone();I.x+=q[F+5],I.y+=q[F+6],L.x=I.x,L.y=I.y,c(B,q[F],q[F+1],q[F+2],q[F+3],q[F+4],R,I),F===0&&se===!0&&ie.copy(I)}break;case"Z":case"z":B.currentPath.autoClose=!0,B.currentPath.curves.length>0&&(I.copy(ie),B.currentPath.currentPoint.copy(I),de=!0);break;default:console.warn(te)}se=!1}return B}function a(z){if(!(!z.sheet||!z.sheet.cssRules||!z.sheet.cssRules.length))for(let B=0;B<z.sheet.cssRules.length;B++){const I=z.sheet.cssRules[B];if(I.type!==1)continue;const L=I.selectorText.split(/,/gm).filter(Boolean).map(ie=>ie.trim());for(let ie=0;ie<L.length;ie++){const de=Object.fromEntries(Object.entries(I.style).filter(([,se])=>se!==""));Te[L[ie]]=Object.assign(Te[L[ie]]||{},de)}}}function c(z,B,I,L,ie,de,se,Se){if(B==0||I==0){z.lineTo(Se.x,Se.y);return}L=L*Math.PI/180,B=Math.abs(B),I=Math.abs(I);const D=(se.x-Se.x)/2,ce=(se.y-Se.y)/2,X=Math.cos(L)*D+Math.sin(L)*ce,te=-Math.sin(L)*D+Math.cos(L)*ce;let ne=B*B,ye=I*I;const q=X*X,F=te*te,De=q/ne+F/ye;if(De>1){const ze=Math.sqrt(De);B=ze*B,I=ze*I,ne=B*B,ye=I*I}const R=ne*F+ye*q,T=(ne*ye-R)/R;let ue=Math.sqrt(Math.max(0,T));ie===de&&(ue=-ue);const me=ue*B*te/I,Le=-ue*I*X/B,Ie=Math.cos(L)*me-Math.sin(L)*Le+(se.x+Se.x)/2,et=Math.sin(L)*me+Math.cos(L)*Le+(se.y+Se.y)/2,$e=l(1,0,(X-me)/B,(te-Le)/I),Be=l((X-me)/B,(te-Le)/I,(-X-me)/B,(-te-Le)/I)%(Math.PI*2);z.currentPath.absellipse(Ie,et,B,I,$e,$e+Be,de===0,L)}function l(z,B,I,L){const ie=z*I+B*L,de=Math.sqrt(z*z+B*B)*Math.sqrt(I*I+L*L);let se=Math.acos(Math.max(-1,Math.min(1,ie/de)));return z*L-B*I<0&&(se=-se),se}function f(z){const B=y(z.getAttribute("x")||0),I=y(z.getAttribute("y")||0),L=y(z.getAttribute("rx")||z.getAttribute("ry")||0),ie=y(z.getAttribute("ry")||z.getAttribute("rx")||0),de=y(z.getAttribute("width")),se=y(z.getAttribute("height")),Se=1-.551915024494,D=new ur;return D.moveTo(B+L,I),D.lineTo(B+de-L,I),(L!==0||ie!==0)&&D.bezierCurveTo(B+de-L*Se,I,B+de,I+ie*Se,B+de,I+ie),D.lineTo(B+de,I+se-ie),(L!==0||ie!==0)&&D.bezierCurveTo(B+de,I+se-ie*Se,B+de-L*Se,I+se,B+de-L,I+se),D.lineTo(B+L,I+se),(L!==0||ie!==0)&&D.bezierCurveTo(B+L*Se,I+se,B,I+se-ie*Se,B,I+se-ie),D.lineTo(B,I+ie),(L!==0||ie!==0)&&D.bezierCurveTo(B,I+ie*Se,B+L*Se,I,B+L,I),D}function h(z){function B(de,se,Se){const D=y(se),ce=y(Se);ie===0?L.moveTo(D,ce):L.lineTo(D,ce),ie++}const I=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,L=new ur;let ie=0;return z.getAttribute("points").replace(I,B),L.currentPath.autoClose=!0,L}function d(z){function B(de,se,Se){const D=y(se),ce=y(Se);ie===0?L.moveTo(D,ce):L.lineTo(D,ce),ie++}const I=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,L=new ur;let ie=0;return z.getAttribute("points").replace(I,B),L.currentPath.autoClose=!1,L}function p(z){const B=y(z.getAttribute("cx")||0),I=y(z.getAttribute("cy")||0),L=y(z.getAttribute("r")||0),ie=new Gs;ie.absarc(B,I,L,0,Math.PI*2);const de=new ur;return de.subPaths.push(ie),de}function v(z){const B=y(z.getAttribute("cx")||0),I=y(z.getAttribute("cy")||0),L=y(z.getAttribute("rx")||0),ie=y(z.getAttribute("ry")||0),de=new Gs;de.absellipse(B,I,L,ie,0,Math.PI*2);const se=new ur;return se.subPaths.push(de),se}function x(z){const B=y(z.getAttribute("x1")||0),I=y(z.getAttribute("y1")||0),L=y(z.getAttribute("x2")||0),ie=y(z.getAttribute("y2")||0),de=new ur;return de.moveTo(B,I),de.lineTo(L,ie),de.currentPath.autoClose=!1,de}function S(z,B){B=Object.assign({},B);let I={};if(z.hasAttribute("class")){const se=z.getAttribute("class").split(/\s/).filter(Boolean).map(Se=>Se.trim());for(let Se=0;Se<se.length;Se++)I=Object.assign(I,Te["."+se[Se]])}z.hasAttribute("id")&&(I=Object.assign(I,Te["#"+z.getAttribute("id")]));function L(se,Se,D){D===void 0&&(D=function(X){return X.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),X}),z.hasAttribute(se)&&(B[Se]=D(z.getAttribute(se))),I[se]&&(B[Se]=D(I[se])),z.style&&z.style[se]!==""&&(B[Se]=D(z.style[se]))}function ie(se){return Math.max(0,Math.min(1,y(se)))}function de(se){return Math.max(0,y(se))}return L("fill","fill"),L("fill-opacity","fillOpacity",ie),L("fill-rule","fillRule"),L("opacity","opacity",ie),L("stroke","stroke"),L("stroke-opacity","strokeOpacity",ie),L("stroke-width","strokeWidth",de),L("stroke-linejoin","strokeLineJoin"),L("stroke-linecap","strokeLineCap"),L("stroke-miterlimit","strokeMiterLimit",de),L("visibility","visibility"),B}function E(z,B){return z-(B-z)}function m(z,B,I){if(typeof z!="string")throw new TypeError("Invalid input: "+typeof z);const L={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},ie=0,de=1,se=2,Se=3;let D=ie,ce=!0,X="",te="";const ne=[];function ye(R,T,ue){const me=new SyntaxError('Unexpected character "'+R+'" at index '+T+".");throw me.partial=ue,me}function q(){X!==""&&(te===""?ne.push(Number(X)):ne.push(Number(X)*Math.pow(10,Number(te)))),X="",te=""}let F;const De=z.length;for(let R=0;R<De;R++){if(F=z[R],Array.isArray(B)&&B.includes(ne.length%I)&&L.FLAGS.test(F)){D=de,X=F,q();continue}if(D===ie){if(L.WHITESPACE.test(F))continue;if(L.DIGIT.test(F)||L.SIGN.test(F)){D=de,X=F;continue}if(L.POINT.test(F)){D=se,X=F;continue}L.COMMA.test(F)&&(ce&&ye(F,R,ne),ce=!0)}if(D===de){if(L.DIGIT.test(F)){X+=F;continue}if(L.POINT.test(F)){X+=F,D=se;continue}if(L.EXP.test(F)){D=Se;continue}L.SIGN.test(F)&&X.length===1&&L.SIGN.test(X[0])&&ye(F,R,ne)}if(D===se){if(L.DIGIT.test(F)){X+=F;continue}if(L.EXP.test(F)){D=Se;continue}L.POINT.test(F)&&X[X.length-1]==="."&&ye(F,R,ne)}if(D===Se){if(L.DIGIT.test(F)){te+=F;continue}if(L.SIGN.test(F)){if(te===""){te+=F;continue}te.length===1&&L.SIGN.test(te)&&ye(F,R,ne)}}L.WHITESPACE.test(F)?(q(),D=ie,ce=!1):L.COMMA.test(F)?(q(),D=ie,ce=!0):L.SIGN.test(F)?(q(),D=de,X=F):L.POINT.test(F)?(q(),D=se,X=F):ye(F,R,ne)}return q(),ne}const g=["mm","cm","in","pt","pc","px"],P={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function y(z){let B="px";if(typeof z=="string"||z instanceof String)for(let L=0,ie=g.length;L<ie;L++){const de=g[L];if(z.endsWith(de)){B=de,z=z.substring(0,z.length-de.length);break}}let I;return B==="px"&&t.defaultUnit!=="px"?I=P.in[t.defaultUnit]/t.defaultDPI:(I=P[B][t.defaultUnit],I<0&&(I=P[B].in*t.defaultDPI)),I*parseFloat(z)}function A(z){if(!(z.hasAttribute("transform")||z.nodeName==="use"&&(z.hasAttribute("x")||z.hasAttribute("y"))))return null;const B=k(z);return Y.length>0&&B.premultiply(Y[Y.length-1]),Re.copy(B),Y.push(B),B}function k(z){const B=new lt,I=xe;if(z.nodeName==="use"&&(z.hasAttribute("x")||z.hasAttribute("y"))){const L=y(z.getAttribute("x")),ie=y(z.getAttribute("y"));B.translate(L,ie)}if(z.hasAttribute("transform")){const L=z.getAttribute("transform").split(")");for(let ie=L.length-1;ie>=0;ie--){const de=L[ie].trim();if(de==="")continue;const se=de.indexOf("("),Se=de.length;if(se>0&&se<Se){const D=de.slice(0,se),ce=m(de.slice(se+1));switch(I.identity(),D){case"translate":if(ce.length>=1){const X=ce[0];let te=0;ce.length>=2&&(te=ce[1]),I.translate(X,te)}break;case"rotate":if(ce.length>=1){let X=0,te=0,ne=0;X=ce[0]*Math.PI/180,ce.length>=3&&(te=ce[1],ne=ce[2]),oe.makeTranslation(-te,-ne),ae.makeRotation(X),K.multiplyMatrices(ae,oe),oe.makeTranslation(te,ne),I.multiplyMatrices(oe,K)}break;case"scale":if(ce.length>=1){const X=ce[0];let te=X;ce.length>=2&&(te=ce[1]),I.scale(X,te)}break;case"skewX":ce.length===1&&I.set(1,Math.tan(ce[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":ce.length===1&&I.set(1,0,0,Math.tan(ce[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":ce.length===6&&I.set(ce[0],ce[2],ce[4],ce[1],ce[3],ce[5],0,0,1);break}}B.premultiply(I)}}return B}function G(z,B){function I(se){Me.set(se.x,se.y,1).applyMatrix3(B),se.set(Me.x,Me.y)}function L(se){const Se=se.xRadius,D=se.yRadius,ce=Math.cos(se.aRotation),X=Math.sin(se.aRotation),te=new Q(Se*ce,Se*X,0),ne=new Q(-D*X,D*ce,0),ye=te.applyMatrix3(B),q=ne.applyMatrix3(B),F=xe.set(ye.x,q.x,0,ye.y,q.y,0,0,0,1),De=oe.copy(F).invert(),ue=ae.copy(De).transpose().multiply(De).elements,me=O(ue[0],ue[1],ue[4]),Le=Math.sqrt(me.rt1),Ie=Math.sqrt(me.rt2);if(se.xRadius=1/Le,se.yRadius=1/Ie,se.aRotation=Math.atan2(me.sn,me.cs),!((se.aEndAngle-se.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const $e=oe.set(Le,0,0,0,Ie,0,0,0,1),Be=ae.set(me.cs,me.sn,0,-me.sn,me.cs,0,0,0,1),ze=$e.multiply(Be).multiply(F),tt=Oe=>{const{x:Dt,y:ct}=new Q(Math.cos(Oe),Math.sin(Oe),0).applyMatrix3(ze);return Math.atan2(ct,Dt)};se.aStartAngle=tt(se.aStartAngle),se.aEndAngle=tt(se.aEndAngle),U(B)&&(se.aClockwise=!se.aClockwise)}}function ie(se){const Se=fe(B),D=b(B);se.xRadius*=Se,se.yRadius*=D;const ce=Se>Number.EPSILON?Math.atan2(B.elements[1],B.elements[0]):Math.atan2(-B.elements[3],B.elements[4]);se.aRotation+=ce,U(B)&&(se.aStartAngle*=-1,se.aEndAngle*=-1,se.aClockwise=!se.aClockwise)}const de=z.subPaths;for(let se=0,Se=de.length;se<Se;se++){const ce=de[se].curves;for(let X=0;X<ce.length;X++){const te=ce[X];te.isLineCurve?(I(te.v1),I(te.v2)):te.isCubicBezierCurve?(I(te.v0),I(te.v1),I(te.v2),I(te.v3)):te.isQuadraticBezierCurve?(I(te.v0),I(te.v1),I(te.v2)):te.isEllipseCurve&&(Ee.set(te.aX,te.aY),I(Ee),te.aX=Ee.x,te.aY=Ee.y,W(B)?L(te):ie(te))}}}function U(z){const B=z.elements;return B[0]*B[4]-B[1]*B[3]<0}function W(z){const B=z.elements,I=B[0]*B[3]+B[1]*B[4];if(I===0)return!1;const L=fe(z),ie=b(z);return Math.abs(I/(L*ie))>Number.EPSILON}function fe(z){const B=z.elements;return Math.sqrt(B[0]*B[0]+B[1]*B[1])}function b(z){const B=z.elements;return Math.sqrt(B[3]*B[3]+B[4]*B[4])}function O(z,B,I){let L,ie,de,se,Se;const D=z+I,ce=z-I,X=Math.sqrt(ce*ce+4*B*B);return D>0?(L=.5*(D+X),Se=1/L,ie=z*Se*I-B*Se*B):D<0?ie=.5*(D-X):(L=.5*X,ie=-.5*X),ce>0?de=ce+X:de=ce-X,Math.abs(de)>2*Math.abs(B)?(Se=-2*B/de,se=1/Math.sqrt(1+Se*Se),de=Se*se):Math.abs(B)===0?(de=1,se=0):(Se=-.5*de/B,de=1/Math.sqrt(1+Se*Se),se=Se*de),ce>0&&(Se=de,de=-se,se=Se),{rt1:L,rt2:ie,cs:de,sn:se}}const pe=[],Te={},Y=[],xe=new lt,oe=new lt,ae=new lt,K=new lt,Ee=new Ae,Me=new Q,Re=new lt,ke=new DOMParser().parseFromString(e,"image/svg+xml");return n(ke.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:pe,xml:ke.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function a(E,m,g,P){const y=E.x,A=m.x,k=g.x,G=P.x,U=E.y,W=m.y,fe=g.y,b=P.y,O=(G-k)*(U-fe)-(b-fe)*(y-k),pe=(A-y)*(U-fe)-(W-U)*(y-k),Te=(b-fe)*(A-y)-(G-k)*(W-U),Y=O/Te,xe=pe/Te;if(Te===0&&O!==0||Y<=0||Y>=1||xe<0||xe>1)return null;if(O===0&&Te===0){for(let oe=0;oe<2;oe++)if(c(oe===0?g:P,E,m),s.loc==n.ORIGIN){const ae=oe===0?g:P;return{x:ae.x,y:ae.y,t:s.t}}else if(s.loc==n.BETWEEN){const ae=+(y+s.t*(A-y)).toPrecision(10),K=+(U+s.t*(W-U)).toPrecision(10);return{x:ae,y:K,t:s.t}}return null}else{for(let K=0;K<2;K++)if(c(K===0?g:P,E,m),s.loc==n.ORIGIN){const Ee=K===0?g:P;return{x:Ee.x,y:Ee.y,t:s.t}}const oe=+(y+Y*(A-y)).toPrecision(10),ae=+(U+Y*(W-U)).toPrecision(10);return{x:oe,y:ae,t:Y}}}function c(E,m,g){const P=g.x-m.x,y=g.y-m.y,A=E.x-m.x,k=E.y-m.y,G=P*k-A*y;if(E.x===m.x&&E.y===m.y){s.loc=n.ORIGIN,s.t=0;return}if(E.x===g.x&&E.y===g.y){s.loc=n.DESTINATION,s.t=1;return}if(G<-Number.EPSILON){s.loc=n.LEFT;return}if(G>Number.EPSILON){s.loc=n.RIGHT;return}if(P*A<0||y*k<0){s.loc=n.BEHIND;return}if(Math.sqrt(P*P+y*y)<Math.sqrt(A*A+k*k)){s.loc=n.BEYOND;return}let U;P!==0?U=A/P:U=k/y,s.loc=n.BETWEEN,s.t=U}function l(E,m){const g=[],P=[];for(let y=1;y<E.length;y++){const A=E[y-1],k=E[y];for(let G=1;G<m.length;G++){const U=m[G-1],W=m[G],fe=a(A,k,U,W);fe!==null&&g.find(b=>b.t<=fe.t+Number.EPSILON&&b.t>=fe.t-Number.EPSILON)===void 0&&(g.push(fe),P.push(new Ae(fe.x,fe.y)))}}return P}function f(E,m,g){const P=new Ae;m.getCenter(P);const y=[];return g.forEach(A=>{A.boundingBox.containsPoint(P)&&l(E,A.points).forEach(G=>{y.push({identifier:A.identifier,isCW:A.isCW,point:G})})}),y.sort((A,k)=>A.point.x-k.point.x),y}function h(E,m,g,P,y){(y==null||y==="")&&(y="nonzero");const A=new Ae;E.boundingBox.getCenter(A);const k=[new Ae(g,A.y),new Ae(P,A.y)],G=f(k,E.boundingBox,m);G.sort((pe,Te)=>pe.point.x-Te.point.x);const U=[],W=[];G.forEach(pe=>{pe.identifier===E.identifier?U.push(pe):W.push(pe)});const fe=U[0].point.x,b=[];let O=0;for(;O<W.length&&W[O].point.x<fe;)b.length>0&&b[b.length-1]===W[O].identifier?b.pop():b.push(W[O].identifier),O++;if(b.push(E.identifier),y==="evenodd"){const pe=b.length%2===0,Te=b[b.length-2];return{identifier:E.identifier,isHole:pe,for:Te}}else if(y==="nonzero"){let pe=!0,Te=null,Y=null;for(let xe=0;xe<b.length;xe++){const oe=b[xe];pe?(Y=m[oe].isCW,pe=!1,Te=oe):Y!==m[oe].isCW&&(Y=m[oe].isCW,pe=!0)}return{identifier:E.identifier,isHole:pe,for:Te}}else console.warn('fill-rule: "'+y+'" is currently not implemented.')}let d=999999999,p=-999999999,v=e.subPaths.map(E=>{const m=E.getPoints();let g=-999999999,P=999999999,y=-999999999,A=999999999;for(let k=0;k<m.length;k++){const G=m[k];G.y>g&&(g=G.y),G.y<P&&(P=G.y),G.x>y&&(y=G.x),G.x<A&&(A=G.x)}return p<=y&&(p=y+1),d>=A&&(d=A-1),{curves:E.curves,points:m,isCW:Ai.isClockWise(m),identifier:-1,boundingBox:new GC(new Ae(A,P),new Ae(y,g))}});v=v.filter(E=>E.points.length>1);for(let E=0;E<v.length;E++)v[E].identifier=E;const x=v.map(E=>h(E,v,d,p,e.userData?e.userData.style.fillRule:void 0)),S=[];return v.forEach(E=>{if(!x[E.identifier].isHole){const g=new ks;g.curves=E.curves,x.filter(y=>y.isHole&&y.for===E.identifier).forEach(y=>{const A=v[y.identifier],k=new Gs;k.curves=A.curves,g.holes.push(k)}),S.push(g)}}),S}static getStrokeStyle(e,t,n,s,a){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",a=a!==void 0?a:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:a}}static pointsToStroke(e,t,n,s){const a=[],c=[],l=[];if(vl.pointsToStrokeWithBuffers(e,t,n,s,a,c,l)===0)return null;const f=new ei;return f.setAttribute("position",new Jt(a,3)),f.setAttribute("normal",new Jt(c,3)),f.setAttribute("uv",new Jt(l,2)),f}static pointsToStrokeWithBuffers(e,t,n,s,a,c,l,f){const h=new Ae,d=new Ae,p=new Ae,v=new Ae,x=new Ae,S=new Ae,E=new Ae,m=new Ae,g=new Ae,P=new Ae,y=new Ae,A=new Ae,k=new Ae,G=new Ae,U=new Ae,W=new Ae,fe=new Ae;n=n!==void 0?n:12,s=s!==void 0?s:.001,f=f!==void 0?f:0,e=ce(e);const b=e.length;if(b<2)return 0;const O=e[0].equals(e[b-1]);let pe,Te=e[0],Y;const xe=t.strokeWidth/2,oe=1/(b-1);let ae=0,K,Ee,Me,Re,ke=!1,nt=0,z=f*3,B=f*2;I(e[0],e[1],h).multiplyScalar(xe),m.copy(e[0]).sub(h),g.copy(e[0]).add(h),P.copy(m),y.copy(g);for(let X=1;X<b;X++){pe=e[X],X===b-1?O?Y=e[1]:Y=void 0:Y=e[X+1];const te=h;if(I(Te,pe,te),p.copy(te).multiplyScalar(xe),A.copy(pe).sub(p),k.copy(pe).add(p),K=ae+oe,Ee=!1,Y!==void 0){I(pe,Y,d),p.copy(d).multiplyScalar(xe),G.copy(pe).sub(p),U.copy(pe).add(p),Me=!0,p.subVectors(Y,Te),te.dot(p)<0&&(Me=!1),X===1&&(ke=Me),p.subVectors(Y,pe),p.normalize();const ne=Math.abs(te.dot(p));if(ne>Number.EPSILON){const ye=xe/ne;p.multiplyScalar(-ye),v.subVectors(pe,Te),x.copy(v).setLength(ye).add(p),W.copy(x).negate();const q=x.length(),F=v.length();v.divideScalar(F),S.subVectors(Y,pe);const De=S.length();switch(S.divideScalar(De),v.dot(W)<F&&S.dot(W)<De&&(Ee=!0),fe.copy(x).add(pe),W.add(pe),Re=!1,Ee?Me?(U.copy(W),k.copy(W)):(G.copy(W),A.copy(W)):de(),t.strokeLineJoin){case"bevel":se(Me,Ee,K);break;case"round":Se(Me,Ee),Me?ie(pe,A,G,K,0):ie(pe,U,k,K,1);break;case"miter":case"miter-clip":default:const R=xe*t.strokeMiterLimit/q;if(R<1)if(t.strokeLineJoin!=="miter-clip"){se(Me,Ee,K);break}else Se(Me,Ee),Me?(S.subVectors(fe,A).multiplyScalar(R).add(A),E.subVectors(fe,G).multiplyScalar(R).add(G),L(A,K,0),L(S,K,0),L(pe,K,.5),L(pe,K,.5),L(S,K,0),L(E,K,0),L(pe,K,.5),L(E,K,0),L(G,K,0)):(S.subVectors(fe,k).multiplyScalar(R).add(k),E.subVectors(fe,U).multiplyScalar(R).add(U),L(k,K,1),L(S,K,1),L(pe,K,.5),L(pe,K,.5),L(S,K,1),L(E,K,1),L(pe,K,.5),L(E,K,1),L(U,K,1));else Ee?(Me?(L(g,ae,1),L(m,ae,0),L(fe,K,0),L(g,ae,1),L(fe,K,0),L(W,K,1)):(L(g,ae,1),L(m,ae,0),L(fe,K,1),L(m,ae,0),L(W,K,0),L(fe,K,1)),Me?G.copy(fe):U.copy(fe)):Me?(L(A,K,0),L(fe,K,0),L(pe,K,.5),L(pe,K,.5),L(fe,K,0),L(G,K,0)):(L(k,K,1),L(fe,K,1),L(pe,K,.5),L(pe,K,.5),L(fe,K,1),L(U,K,1)),Re=!0;break}}else de()}else de();!O&&X===b-1&&D(e[0],P,y,Me,!0,ae),ae=K,Te=pe,m.copy(G),g.copy(U)}if(!O)D(pe,A,k,Me,!1,K);else if(Ee&&a){let X=fe,te=W;ke!==Me&&(X=W,te=fe),Me?(Re||ke)&&(te.toArray(a,0*3),te.toArray(a,3*3),Re&&X.toArray(a,1*3)):(Re||!ke)&&(te.toArray(a,1*3),te.toArray(a,3*3),Re&&X.toArray(a,0*3))}return nt;function I(X,te,ne){return ne.subVectors(te,X),ne.set(-ne.y,ne.x).normalize()}function L(X,te,ne){a&&(a[z]=X.x,a[z+1]=X.y,a[z+2]=0,c&&(c[z]=0,c[z+1]=0,c[z+2]=1),z+=3,l&&(l[B]=te,l[B+1]=ne,B+=2)),nt+=3}function ie(X,te,ne,ye,q){h.copy(te).sub(X).normalize(),d.copy(ne).sub(X).normalize();let F=Math.PI;const De=h.dot(d);Math.abs(De)<1&&(F=Math.abs(Math.acos(De))),F/=n,p.copy(te);for(let R=0,T=n-1;R<T;R++)v.copy(p).rotateAround(X,F),L(p,ye,q),L(v,ye,q),L(X,ye,.5),p.copy(v);L(v,ye,q),L(ne,ye,q),L(X,ye,.5)}function de(){L(g,ae,1),L(m,ae,0),L(A,K,0),L(g,ae,1),L(A,K,0),L(k,K,1)}function se(X,te,ne){te?X?(L(g,ae,1),L(m,ae,0),L(A,K,0),L(g,ae,1),L(A,K,0),L(W,K,1),L(A,ne,0),L(G,ne,0),L(W,ne,.5)):(L(g,ae,1),L(m,ae,0),L(k,K,1),L(m,ae,0),L(W,K,0),L(k,K,1),L(k,ne,1),L(W,ne,0),L(U,ne,1)):X?(L(A,ne,0),L(G,ne,0),L(pe,ne,.5)):(L(k,ne,1),L(U,ne,0),L(pe,ne,.5))}function Se(X,te){te&&(X?(L(g,ae,1),L(m,ae,0),L(A,K,0),L(g,ae,1),L(A,K,0),L(W,K,1),L(A,ae,0),L(pe,K,.5),L(W,K,1),L(pe,K,.5),L(G,ae,0),L(W,K,1)):(L(g,ae,1),L(m,ae,0),L(k,K,1),L(m,ae,0),L(W,K,0),L(k,K,1),L(k,ae,1),L(W,K,0),L(pe,K,.5),L(pe,K,.5),L(W,K,0),L(U,ae,1)))}function D(X,te,ne,ye,q,F){switch(t.strokeLineCap){case"round":q?ie(X,ne,te,F,.5):ie(X,te,ne,F,.5);break;case"square":if(q)h.subVectors(te,X),d.set(h.y,-h.x),p.addVectors(h,d).add(X),v.subVectors(d,h).add(X),ye?(p.toArray(a,1*3),v.toArray(a,0*3),v.toArray(a,3*3)):(p.toArray(a,1*3),l[3*2+1]===1?v.toArray(a,3*3):p.toArray(a,3*3),v.toArray(a,0*3));else{h.subVectors(ne,X),d.set(h.y,-h.x),p.addVectors(h,d).add(X),v.subVectors(d,h).add(X);const De=a.length;ye?(p.toArray(a,De-1*3),v.toArray(a,De-2*3),v.toArray(a,De-4*3)):(v.toArray(a,De-2*3),p.toArray(a,De-1*3),v.toArray(a,De-4*3))}break}}function ce(X){let te=!1;for(let ye=1,q=X.length-1;ye<q;ye++)if(X[ye].distanceTo(X[ye+1])<s){te=!0;break}if(!te)return X;const ne=[];ne.push(X[0]);for(let ye=1,q=X.length-1;ye<q;ye++)X[ye].distanceTo(X[ye+1])>=s&&ne.push(X[ye]);return ne.push(X[X.length-1]),ne}}}var Hu=function(i,e){return Hu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])},Hu(i,e)};function Zs(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Hu(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Vu(i){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&i[e],n=0;if(t)return t.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&n>=i.length&&(i=void 0),{value:i&&i[n++],done:!i}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Wu(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),s,a=[],c;try{for(;(e===void 0||e-- >0)&&!(s=n.next()).done;)a.push(s.value)}catch(l){c={error:l}}finally{try{s&&!s.done&&(t=n.return)&&t.call(n)}finally{if(c)throw c.error}}return a}function Xu(i,e,t){if(t||arguments.length===2)for(var n=0,s=e.length,a;n<s;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return i.concat(a||Array.prototype.slice.call(e))}function mi(i){return typeof i=="function"}function ug(i){var e=function(n){Error.call(n),n.stack=new Error().stack},t=i(e);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Eu=ug(function(i){return function(t){i(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(n,s){return s+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function qu(i,e){if(i){var t=i.indexOf(e);0<=t&&i.splice(t,1)}}var Cl=function(){function i(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return i.prototype.unsubscribe=function(){var e,t,n,s,a;if(!this.closed){this.closed=!0;var c=this._parentage;if(c)if(this._parentage=null,Array.isArray(c))try{for(var l=Vu(c),f=l.next();!f.done;f=l.next()){var h=f.value;h.remove(this)}}catch(E){e={error:E}}finally{try{f&&!f.done&&(t=l.return)&&t.call(l)}finally{if(e)throw e.error}}else c.remove(this);var d=this.initialTeardown;if(mi(d))try{d()}catch(E){a=E instanceof Eu?E.errors:[E]}var p=this._finalizers;if(p){this._finalizers=null;try{for(var v=Vu(p),x=v.next();!x.done;x=v.next()){var S=x.value;try{sm(S)}catch(E){a=a??[],E instanceof Eu?a=Xu(Xu([],Wu(a)),Wu(E.errors)):a.push(E)}}}catch(E){n={error:E}}finally{try{x&&!x.done&&(s=v.return)&&s.call(v)}finally{if(n)throw n.error}}}if(a)throw new Eu(a)}},i.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)sm(e);else{if(e instanceof i){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}},i.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},i.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},i.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&qu(t,e)},i.prototype.remove=function(e){var t=this._finalizers;t&&qu(t,e),e instanceof i&&e._removeParent(this)},i.EMPTY=function(){var e=new i;return e.closed=!0,e}(),i}(),fg=Cl.EMPTY;function hg(i){return i instanceof Cl||i&&"closed"in i&&mi(i.remove)&&mi(i.add)&&mi(i.unsubscribe)}function sm(i){mi(i)?i():i.unsubscribe()}var dg={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},pg={setTimeout:function(i,e){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];return setTimeout.apply(void 0,Xu([i,e],Wu(t)))},clearTimeout:function(i){var e=pg.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(i)},delegate:void 0};function HC(i){pg.setTimeout(function(){throw i})}function om(){}function ul(i){i()}var lf=function(i){Zs(e,i);function e(t){var n=i.call(this)||this;return n.isStopped=!1,t?(n.destination=t,hg(t)&&t.add(n)):n.destination=qC,n}return e.create=function(t,n,s){return new Yu(t,n,s)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,i.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Cl),VC=Function.prototype.bind;function Mu(i,e){return VC.call(i,e)}var WC=function(){function i(e){this.partialObserver=e}return i.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(n){tl(n)}},i.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(n){tl(n)}else tl(e)},i.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(t){tl(t)}},i}(),Yu=function(i){Zs(e,i);function e(t,n,s){var a=i.call(this)||this,c;if(mi(t)||!t)c={next:t??void 0,error:n??void 0,complete:s??void 0};else{var l;a&&dg.useDeprecatedNextContext?(l=Object.create(t),l.unsubscribe=function(){return a.unsubscribe()},c={next:t.next&&Mu(t.next,l),error:t.error&&Mu(t.error,l),complete:t.complete&&Mu(t.complete,l)}):c=t}return a.destination=new WC(c),a}return e}(lf);function tl(i){HC(i)}function XC(i){throw i}var qC={closed:!0,next:om,error:XC,complete:om},YC=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function cf(i){return i}function $C(i){return i.length===0?cf:i.length===1?i[0]:function(t){return i.reduce(function(n,s){return s(n)},t)}}var am=function(){function i(e){e&&(this._subscribe=e)}return i.prototype.lift=function(e){var t=new i;return t.source=this,t.operator=e,t},i.prototype.subscribe=function(e,t,n){var s=this,a=KC(e)?e:new Yu(e,t,n);return ul(function(){var c=s,l=c.operator,f=c.source;a.add(l?l.call(a,f):f?s._subscribe(a):s._trySubscribe(a))}),a},i.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},i.prototype.forEach=function(e,t){var n=this;return t=lm(t),new t(function(s,a){var c=new Yu({next:function(l){try{e(l)}catch(f){a(f),c.unsubscribe()}},error:a,complete:s});n.subscribe(c)})},i.prototype._subscribe=function(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)},i.prototype[YC]=function(){return this},i.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return $C(e)(this)},i.prototype.toPromise=function(e){var t=this;return e=lm(e),new e(function(n,s){var a;t.subscribe(function(c){return a=c},function(c){return s(c)},function(){return n(a)})})},i.create=function(e){return new i(e)},i}();function lm(i){var e;return(e=i??dg.Promise)!==null&&e!==void 0?e:Promise}function ZC(i){return i&&mi(i.next)&&mi(i.error)&&mi(i.complete)}function KC(i){return i&&i instanceof lf||ZC(i)&&hg(i)}function JC(i){return mi(i==null?void 0:i.lift)}function Rl(i){return function(e){if(JC(e))return e.lift(function(t){try{return i(t,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function Pl(i,e,t,n,s){return new jC(i,e,t,n,s)}var jC=function(i){Zs(e,i);function e(t,n,s,a,c,l){var f=i.call(this,t)||this;return f.onFinalize=c,f.shouldUnsubscribe=l,f._next=n?function(h){try{n(h)}catch(d){t.error(d)}}:i.prototype._next,f._error=a?function(h){try{a(h)}catch(d){t.error(d)}finally{this.unsubscribe()}}:i.prototype._error,f._complete=s?function(){try{s()}catch(h){t.error(h)}finally{this.unsubscribe()}}:i.prototype._complete,f}return e.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;i.prototype.unsubscribe.call(this),!n&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},e}(lf),QC=ug(function(i){return function(){i(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),mg=function(i){Zs(e,i);function e(){var t=i.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return e.prototype.lift=function(t){var n=new cm(this,this);return n.operator=t,n},e.prototype._throwIfClosed=function(){if(this.closed)throw new QC},e.prototype.next=function(t){var n=this;ul(function(){var s,a;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var c=Vu(n.currentObservers),l=c.next();!l.done;l=c.next()){var f=l.value;f.next(t)}}catch(h){s={error:h}}finally{try{l&&!l.done&&(a=c.return)&&a.call(c)}finally{if(s)throw s.error}}}})},e.prototype.error=function(t){var n=this;ul(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=t;for(var s=n.observers;s.length;)s.shift().error(t)}})},e.prototype.complete=function(){var t=this;ul(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var n=t.observers;n.length;)n.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(t){return this._throwIfClosed(),i.prototype._trySubscribe.call(this,t)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var n=this,s=this,a=s.hasError,c=s.isStopped,l=s.observers;return a||c?fg:(this.currentObservers=null,l.push(t),new Cl(function(){n.currentObservers=null,qu(l,t)}))},e.prototype._checkFinalizedStatuses=function(t){var n=this,s=n.hasError,a=n.thrownError,c=n.isStopped;s?t.error(a):c&&t.complete()},e.prototype.asObservable=function(){var t=new am;return t.source=this,t},e.create=function(t,n){return new cm(t,n)},e}(am),cm=function(i){Zs(e,i);function e(t,n){var s=i.call(this)||this;return s.destination=t,s.source=n,s}return e.prototype.next=function(t){var n,s;(s=(n=this.destination)===null||n===void 0?void 0:n.next)===null||s===void 0||s.call(n,t)},e.prototype.error=function(t){var n,s;(s=(n=this.destination)===null||n===void 0?void 0:n.error)===null||s===void 0||s.call(n,t)},e.prototype.complete=function(){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||n===void 0||n.call(t)},e.prototype._subscribe=function(t){var n,s;return(s=(n=this.source)===null||n===void 0?void 0:n.subscribe(t))!==null&&s!==void 0?s:fg},e}(mg),Ks=function(i){Zs(e,i);function e(t){var n=i.call(this)||this;return n._value=t,n}return Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(t){var n=i.prototype._subscribe.call(this,t);return!n.closed&&t.next(this._value),n},e.prototype.getValue=function(){var t=this,n=t.hasError,s=t.thrownError,a=t._value;if(n)throw s;return this._throwIfClosed(),a},e.prototype.next=function(t){i.prototype.next.call(this,this._value=t)},e}(mg);function yi(i,e){return Rl(function(t,n){var s=0;t.subscribe(Pl(n,function(a){n.next(i.call(e,a,s++))}))})}function eR(i,e){return Rl(function(t,n){var s=0;t.subscribe(Pl(n,function(a){return i.call(e,a,s++)&&n.next(a)}))})}function Si(i,e){return e===void 0&&(e=cf),i=i??tR,Rl(function(t,n){var s,a=!0;t.subscribe(Pl(n,function(c){var l=e(c);(a||!i(s,l))&&(a=!1,s=l,n.next(c))}))})}function tR(i,e){return i===e}function cr(i){return eR(function(e,t){return i<=t})}function nR(i,e,t){var n=mi(i)||e||t?{next:i,error:e,complete:t}:i;return n?Rl(function(s,a){var c;(c=n.subscribe)===null||c===void 0||c.call(n);var l=!0;s.subscribe(Pl(a,function(f){var h;(h=n.next)===null||h===void 0||h.call(n,f),a.next(f)},function(){var f;l=!1,(f=n.complete)===null||f===void 0||f.call(n),a.complete()},function(f){var h;l=!1,(h=n.error)===null||h===void 0||h.call(n,f),a.error(f)},function(){var f,h;l&&((f=n.unsubscribe)===null||f===void 0||f.call(n)),(h=n.finalize)===null||h===void 0||h.call(n)}))}):cf}const iR={items:[]},xl=new Ks(iR);function rR(i){const t={...xl.getValue(),items:i};xl.next(t)}const sR=new URL(window.location),um=new URLSearchParams(sR.search),oR={columns:["X_umap0_norm","X_umap1_norm","X_spatial0_norm","X_spatial1_norm","X_spatial2_norm","clusters"],prefixOptions:["50pe","75pe","6s"],prefix:um.has("prefix")?um.get("prefix"):"6s",pallete:{},listPalette:[],palleteColumn:"clusters_pal",genes:[],atacs:[],items:[],groups:[]},St=new Ks(oR);function aR(i){const e=St.getValue(),t=Object.keys(i).map(s=>[s,i[s]]),n={...e,pallete:i,listPalette:t};St.next(n)}function lR(i){const t={...St.getValue(),genes:i};St.next(t)}function cR(i){const t={...St.getValue(),atacs:i};St.next(t)}const uR={scene:new Q1},fR=new Ks(uR),hR={isLoading:!0,theme:"light"},yl=new Ks(hR);function Jn(i,e=""){const n={...yl.getValue(),isLoading:i};yl.next(n)}const dR=new URL(window.location),fm=new URLSearchParams(dR.search),pR={selectedCelltypes:[],mode:fm.has("mode")?Number(fm.get("mode")):1,selectedSingleGene:"",selectedSingleAtac:"",selectedGenes:[],selectedAtacs:[],intervalsData:[],geneGenomeHover:!1,showing:"celltype",selectedGenesPrev:[]},We=new Ks(pR);function qs(i){const t={...We.getValue(),selectedCelltypes:[...new Set(i)]};We.next(t)}function gg(i){const e=We.getValue(),t=[...e.selectedCelltypes],n=t.indexOf(i);n>-1?t.splice(n,1):t.push(i);const s={...e,selectedCelltypes:t};We.next(s)}function _g(i){const t={...We.getValue(),intervalsData:[...new Set(i)]};We.next(t)}function mR(i){const t={...We.getValue(),mode:i};We.next(t)}function Wr(i){i.includes(void 0)&&(i=[]);const e=We.getValue(),t=e.selectedGenes;if(t.length>0){let s=document.getElementById(t[0]);s&&(s.checked=!1),s=document.getElementById(t[1]),s&&(s.checked=!1)}const n={...e,selectedGenes:i,selectedGenesPrev:t};if(i.length>0){const s=document.getElementById(i[0]);s&&(s.checked=!0)}We.next(n)}function Yi(i){i.includes(void 0)&&(i=[]),console.log(i);const e=We.getValue(),t=e.selectedAtacs;if(t.length>0){const a=document.getElementById(t[0]);console.log(a),a&&(a.checked=!1)}const n={...e,selectedAtacs:i},s=document.getElementById(i[0]);s&&(s.checked=!0),We.next(n)}const hm={type:"change"},bu={type:"start"},dm={type:"end"},nl=new zm,pm=new fr,gR=Math.cos(70*BM.DEG2RAD);class _R extends Xr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ps.ROTATE,MIDDLE:ps.DOLLY,RIGHT:ps.PAN},this.touches={ONE:ms.ROTATE,TWO:ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(H){H.addEventListener("keydown",$e),this._domElementKeyEvents=H},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",$e),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(hm),n.update(),a=s.NONE},this.update=function(){const H=new Q,Pe=new Hr().setFromUnitVectors(e.up,new Q(0,1,0)),Ze=Pe.clone().invert(),Z=new Q,Fe=new Hr,le=new Q,Ne=2*Math.PI;return function(_t=null){const wt=n.object.position;H.copy(wt).sub(n.target),H.applyQuaternion(Pe),l.setFromVector3(H),n.autoRotate&&a===s.NONE&&pe(b(_t)),n.enableDamping?(l.theta+=f.theta*n.dampingFactor,l.phi+=f.phi*n.dampingFactor):(l.theta+=f.theta,l.phi+=f.phi);let Pt=n.minAzimuthAngle,kt=n.maxAzimuthAngle;isFinite(Pt)&&isFinite(kt)&&(Pt<-Math.PI?Pt+=Ne:Pt>Math.PI&&(Pt-=Ne),kt<-Math.PI?kt+=Ne:kt>Math.PI&&(kt-=Ne),Pt<=kt?l.theta=Math.max(Pt,Math.min(kt,l.theta)):l.theta=l.theta>(Pt+kt)/2?Math.max(Pt,l.theta):Math.min(kt,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let At=!1;if(n.zoomToCursor&&G||n.object.isOrthographicCamera)l.radius=Me(l.radius);else{const Lt=l.radius;l.radius=Me(l.radius*h),At=Lt!=l.radius}if(H.setFromSpherical(l),H.applyQuaternion(Ze),wt.copy(n.target).add(H),n.object.lookAt(n.target),n.enableDamping===!0?(f.theta*=1-n.dampingFactor,f.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(f.set(0,0,0),d.set(0,0,0)),n.zoomToCursor&&G){let Lt=null;if(n.object.isPerspectiveCamera){const sn=H.length();Lt=Me(sn*h);const ti=sn-Lt;n.object.position.addScaledVector(A,ti),n.object.updateMatrixWorld(),At=!!ti}else if(n.object.isOrthographicCamera){const sn=new Q(k.x,k.y,0);sn.unproject(n.object);const ti=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),n.object.updateProjectionMatrix(),At=ti!==n.object.zoom;const $r=new Q(k.x,k.y,0);$r.unproject(n.object),n.object.position.sub($r).add(sn),n.object.updateMatrixWorld(),Lt=H.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Lt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Lt).add(n.object.position):(nl.origin.copy(n.object.position),nl.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(nl.direction))<gR?e.lookAt(n.target):(pm.setFromNormalAndCoplanarPoint(n.object.up,n.target),nl.intersectPlane(pm,n.target))))}else if(n.object.isOrthographicCamera){const Lt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/h)),Lt!==n.object.zoom&&(n.object.updateProjectionMatrix(),At=!0)}return h=1,G=!1,At||Z.distanceToSquared(n.object.position)>c||8*(1-Fe.dot(n.object.quaternion))>c||le.distanceToSquared(n.target)>c?(n.dispatchEvent(hm),Z.copy(n.object.position),Fe.copy(n.object.quaternion),le.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",tt),n.domElement.removeEventListener("pointerdown",F),n.domElement.removeEventListener("pointercancel",R),n.domElement.removeEventListener("wheel",me),n.domElement.removeEventListener("pointermove",De),n.domElement.removeEventListener("pointerup",R),n.domElement.getRootNode().removeEventListener("keydown",Ie,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",$e),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=s.NONE;const c=1e-6,l=new im,f=new im;let h=1;const d=new Q,p=new Ae,v=new Ae,x=new Ae,S=new Ae,E=new Ae,m=new Ae,g=new Ae,P=new Ae,y=new Ae,A=new Q,k=new Ae;let G=!1;const U=[],W={};let fe=!1;function b(H){return H!==null?2*Math.PI/60*n.autoRotateSpeed*H:2*Math.PI/60/60*n.autoRotateSpeed}function O(H){const Pe=Math.abs(H*.01);return Math.pow(.95,n.zoomSpeed*Pe)}function pe(H){f.theta-=H}function Te(H){f.phi-=H}const Y=function(){const H=new Q;return function(Ze,Z){H.setFromMatrixColumn(Z,0),H.multiplyScalar(-Ze),d.add(H)}}(),xe=function(){const H=new Q;return function(Ze,Z){n.screenSpacePanning===!0?H.setFromMatrixColumn(Z,1):(H.setFromMatrixColumn(Z,0),H.crossVectors(n.object.up,H)),H.multiplyScalar(Ze),d.add(H)}}(),oe=function(){const H=new Q;return function(Ze,Z){const Fe=n.domElement;if(n.object.isPerspectiveCamera){const le=n.object.position;H.copy(le).sub(n.target);let Ne=H.length();Ne*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*Ze*Ne/Fe.clientHeight,n.object.matrix),xe(2*Z*Ne/Fe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(Ze*(n.object.right-n.object.left)/n.object.zoom/Fe.clientWidth,n.object.matrix),xe(Z*(n.object.top-n.object.bottom)/n.object.zoom/Fe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function ae(H){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h/=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(H){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?h*=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Ee(H,Pe){if(!n.zoomToCursor)return;G=!0;const Ze=n.domElement.getBoundingClientRect(),Z=H-Ze.left,Fe=Pe-Ze.top,le=Ze.width,Ne=Ze.height;k.x=Z/le*2-1,k.y=-(Fe/Ne)*2+1,A.set(k.x,k.y,1).unproject(n.object).sub(n.object.position).normalize()}function Me(H){return Math.max(n.minDistance,Math.min(n.maxDistance,H))}function Re(H){p.set(H.clientX,H.clientY)}function ke(H){Ee(H.clientX,H.clientX),g.set(H.clientX,H.clientY)}function nt(H){S.set(H.clientX,H.clientY)}function z(H){v.set(H.clientX,H.clientY),x.subVectors(v,p).multiplyScalar(n.rotateSpeed);const Pe=n.domElement;pe(2*Math.PI*x.x/Pe.clientHeight),Te(2*Math.PI*x.y/Pe.clientHeight),p.copy(v),n.update()}function B(H){P.set(H.clientX,H.clientY),y.subVectors(P,g),y.y>0?ae(O(y.y)):y.y<0&&K(O(y.y)),g.copy(P),n.update()}function I(H){E.set(H.clientX,H.clientY),m.subVectors(E,S).multiplyScalar(n.panSpeed),oe(m.x,m.y),S.copy(E),n.update()}function L(H){Ee(H.clientX,H.clientY),H.deltaY<0?K(O(H.deltaY)):H.deltaY>0&&ae(O(H.deltaY)),n.update()}function ie(H){let Pe=!1;switch(H.code){case n.keys.UP:H.ctrlKey||H.metaKey||H.shiftKey?Te(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):oe(0,n.keyPanSpeed),Pe=!0;break;case n.keys.BOTTOM:H.ctrlKey||H.metaKey||H.shiftKey?Te(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):oe(0,-n.keyPanSpeed),Pe=!0;break;case n.keys.LEFT:H.ctrlKey||H.metaKey||H.shiftKey?pe(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):oe(n.keyPanSpeed,0),Pe=!0;break;case n.keys.RIGHT:H.ctrlKey||H.metaKey||H.shiftKey?pe(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):oe(-n.keyPanSpeed,0),Pe=!0;break}Pe&&(H.preventDefault(),n.update())}function de(H){if(U.length===1)p.set(H.pageX,H.pageY);else{const Pe=qe(H),Ze=.5*(H.pageX+Pe.x),Z=.5*(H.pageY+Pe.y);p.set(Ze,Z)}}function se(H){if(U.length===1)S.set(H.pageX,H.pageY);else{const Pe=qe(H),Ze=.5*(H.pageX+Pe.x),Z=.5*(H.pageY+Pe.y);S.set(Ze,Z)}}function Se(H){const Pe=qe(H),Ze=H.pageX-Pe.x,Z=H.pageY-Pe.y,Fe=Math.sqrt(Ze*Ze+Z*Z);g.set(0,Fe)}function D(H){n.enableZoom&&Se(H),n.enablePan&&se(H)}function ce(H){n.enableZoom&&Se(H),n.enableRotate&&de(H)}function X(H){if(U.length==1)v.set(H.pageX,H.pageY);else{const Ze=qe(H),Z=.5*(H.pageX+Ze.x),Fe=.5*(H.pageY+Ze.y);v.set(Z,Fe)}x.subVectors(v,p).multiplyScalar(n.rotateSpeed);const Pe=n.domElement;pe(2*Math.PI*x.x/Pe.clientHeight),Te(2*Math.PI*x.y/Pe.clientHeight),p.copy(v)}function te(H){if(U.length===1)E.set(H.pageX,H.pageY);else{const Pe=qe(H),Ze=.5*(H.pageX+Pe.x),Z=.5*(H.pageY+Pe.y);E.set(Ze,Z)}m.subVectors(E,S).multiplyScalar(n.panSpeed),oe(m.x,m.y),S.copy(E)}function ne(H){const Pe=qe(H),Ze=H.pageX-Pe.x,Z=H.pageY-Pe.y,Fe=Math.sqrt(Ze*Ze+Z*Z);P.set(0,Fe),y.set(0,Math.pow(P.y/g.y,n.zoomSpeed)),ae(y.y),g.copy(P);const le=(H.pageX+Pe.x)*.5,Ne=(H.pageY+Pe.y)*.5;Ee(le,Ne)}function ye(H){n.enableZoom&&ne(H),n.enablePan&&te(H)}function q(H){n.enableZoom&&ne(H),n.enableRotate&&X(H)}function F(H){n.enabled!==!1&&(U.length===0&&(n.domElement.setPointerCapture(H.pointerId),n.domElement.addEventListener("pointermove",De),n.domElement.addEventListener("pointerup",R)),!ct(H)&&(Oe(H),H.pointerType==="touch"?Be(H):T(H)))}function De(H){n.enabled!==!1&&(H.pointerType==="touch"?ze(H):ue(H))}function R(H){switch(Dt(H),U.length){case 0:n.domElement.releasePointerCapture(H.pointerId),n.domElement.removeEventListener("pointermove",De),n.domElement.removeEventListener("pointerup",R),n.dispatchEvent(dm),a=s.NONE;break;case 1:const Pe=U[0],Ze=W[Pe];Be({pointerId:Pe,pageX:Ze.x,pageY:Ze.y});break}}function T(H){let Pe;switch(H.button){case 0:Pe=n.mouseButtons.LEFT;break;case 1:Pe=n.mouseButtons.MIDDLE;break;case 2:Pe=n.mouseButtons.RIGHT;break;default:Pe=-1}switch(Pe){case ps.DOLLY:if(n.enableZoom===!1)return;ke(H),a=s.DOLLY;break;case ps.ROTATE:if(H.ctrlKey||H.metaKey||H.shiftKey){if(n.enablePan===!1)return;nt(H),a=s.PAN}else{if(n.enableRotate===!1)return;Re(H),a=s.ROTATE}break;case ps.PAN:if(H.ctrlKey||H.metaKey||H.shiftKey){if(n.enableRotate===!1)return;Re(H),a=s.ROTATE}else{if(n.enablePan===!1)return;nt(H),a=s.PAN}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(bu)}function ue(H){switch(a){case s.ROTATE:if(n.enableRotate===!1)return;z(H);break;case s.DOLLY:if(n.enableZoom===!1)return;B(H);break;case s.PAN:if(n.enablePan===!1)return;I(H);break}}function me(H){n.enabled===!1||n.enableZoom===!1||a!==s.NONE||(H.preventDefault(),n.dispatchEvent(bu),L(Le(H)),n.dispatchEvent(dm))}function Le(H){const Pe=H.deltaMode,Ze={clientX:H.clientX,clientY:H.clientY,deltaY:H.deltaY};switch(Pe){case 1:Ze.deltaY*=16;break;case 2:Ze.deltaY*=100;break}return H.ctrlKey&&!fe&&(Ze.deltaY*=10),Ze}function Ie(H){H.key==="Control"&&(fe=!0,n.domElement.getRootNode().addEventListener("keyup",et,{passive:!0,capture:!0}))}function et(H){H.key==="Control"&&(fe=!1,n.domElement.getRootNode().removeEventListener("keyup",et,{passive:!0,capture:!0}))}function $e(H){n.enabled===!1||n.enablePan===!1||ie(H)}function Be(H){switch(Qe(H),U.length){case 1:switch(n.touches.ONE){case ms.ROTATE:if(n.enableRotate===!1)return;de(H),a=s.TOUCH_ROTATE;break;case ms.PAN:if(n.enablePan===!1)return;se(H),a=s.TOUCH_PAN;break;default:a=s.NONE}break;case 2:switch(n.touches.TWO){case ms.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;D(H),a=s.TOUCH_DOLLY_PAN;break;case ms.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ce(H),a=s.TOUCH_DOLLY_ROTATE;break;default:a=s.NONE}break;default:a=s.NONE}a!==s.NONE&&n.dispatchEvent(bu)}function ze(H){switch(Qe(H),a){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;X(H),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;te(H),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ye(H),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;q(H),n.update();break;default:a=s.NONE}}function tt(H){n.enabled!==!1&&H.preventDefault()}function Oe(H){U.push(H.pointerId)}function Dt(H){delete W[H.pointerId];for(let Pe=0;Pe<U.length;Pe++)if(U[Pe]==H.pointerId){U.splice(Pe,1);return}}function ct(H){for(let Pe=0;Pe<U.length;Pe++)if(U[Pe]==H.pointerId)return!0;return!1}function Qe(H){let Pe=W[H.pointerId];Pe===void 0&&(Pe=new Ae,W[H.pointerId]=Pe),Pe.set(H.pageX,H.pageY)}function qe(H){const Pe=H.pointerId===U[0]?U[1]:U[0];return W[Pe]}n.domElement.addEventListener("contextmenu",tt),n.domElement.addEventListener("pointerdown",F),n.domElement.addEventListener("pointercancel",R),n.domElement.addEventListener("wheel",me,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Ie,{passive:!0,capture:!0}),this.update()}}var bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Sl={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Sl.exports;(function(i,e){(function(){var t,n="4.17.21",s=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",l="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",h=500,d="__lodash_placeholder__",p=1,v=2,x=4,S=1,E=2,m=1,g=2,P=4,y=8,A=16,k=32,G=64,U=128,W=256,fe=512,b=30,O="...",pe=800,Te=16,Y=1,xe=2,oe=3,ae=1/0,K=9007199254740991,Ee=17976931348623157e292,Me=NaN,Re=4294967295,ke=Re-1,nt=Re>>>1,z=[["ary",U],["bind",m],["bindKey",g],["curry",y],["curryRight",A],["flip",fe],["partial",k],["partialRight",G],["rearg",W]],B="[object Arguments]",I="[object Array]",L="[object AsyncFunction]",ie="[object Boolean]",de="[object Date]",se="[object DOMException]",Se="[object Error]",D="[object Function]",ce="[object GeneratorFunction]",X="[object Map]",te="[object Number]",ne="[object Null]",ye="[object Object]",q="[object Promise]",F="[object Proxy]",De="[object RegExp]",R="[object Set]",T="[object String]",ue="[object Symbol]",me="[object Undefined]",Le="[object WeakMap]",Ie="[object WeakSet]",et="[object ArrayBuffer]",$e="[object DataView]",Be="[object Float32Array]",ze="[object Float64Array]",tt="[object Int8Array]",Oe="[object Int16Array]",Dt="[object Int32Array]",ct="[object Uint8Array]",Qe="[object Uint8ClampedArray]",qe="[object Uint16Array]",Ke="[object Uint32Array]",H=/\b__p \+= '';/g,Pe=/\b(__p \+=) '' \+/g,Ze=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Z=/&(?:amp|lt|gt|quot|#39);/g,Fe=/[&<>"']/g,le=RegExp(Z.source),Ne=RegExp(Fe.source),Ve=/<%-([\s\S]+?)%>/g,_t=/<%([\s\S]+?)%>/g,wt=/<%=([\s\S]+?)%>/g,Pt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,kt=/^\w*$/,At=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Lt=/[\\^$.*+?()[\]{}|]/g,sn=RegExp(Lt.source),ti=/^\s+/,$r=/\s/,Zr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Go=/\{\n\/\* \[wrapped with (.+)\] \*/,Kr=/,? & /,ko=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ho=/[()=,{}\[\]\/\s]/,Il=/\\(\\)?/g,Dl=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Vo=/\w*$/,N=/^[-+]0x[0-9a-f]+$/i,re=/^0b[01]+$/i,ge=/^\[object .+?Constructor\]$/,ve=/^0o[0-7]+$/i,he=/^(?:0|[1-9]\d*)$/,Xe=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Je=/($^)/,rt=/['\n\r\u2028\u2029\\]/g,st="\\ud800-\\udfff",mt="\\u0300-\\u036f",ut="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",Ht=mt+ut+ht,dn="\\u2700-\\u27bf",$t="a-z\\xdf-\\xf6\\xf8-\\xff",ni="\\xac\\xb1\\xd7\\xf7",Bt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",pt="\\u2000-\\u206f",js=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Nt="A-Z\\xc0-\\xd6\\xd8-\\xde",gi="\\ufe0e\\ufe0f",Qs=ni+Bt+pt+js,Ci="['’]",eo="["+st+"]",Qt="["+Qs+"]",kn="["+Ht+"]",Jr="\\d+",wn="["+dn+"]",jr="["+$t+"]",Wo="[^"+st+Qs+Jr+dn+$t+Nt+"]",Qr="\\ud83c[\\udffb-\\udfff]",bg="(?:"+kn+"|"+Qr+")",ff="[^"+st+"]",Ul="(?:\\ud83c[\\udde6-\\uddff]){2}",Nl="[\\ud800-\\udbff][\\udc00-\\udfff]",es="["+Nt+"]",hf="\\u200d",df="(?:"+jr+"|"+Wo+")",Tg="(?:"+es+"|"+Wo+")",pf="(?:"+Ci+"(?:d|ll|m|re|s|t|ve))?",mf="(?:"+Ci+"(?:D|LL|M|RE|S|T|VE))?",gf=bg+"?",_f="["+gi+"]?",Ag="(?:"+hf+"(?:"+[ff,Ul,Nl].join("|")+")"+_f+gf+")*",wg="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Cg="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",vf=_f+gf+Ag,Rg="(?:"+[wn,Ul,Nl].join("|")+")"+vf,Pg="(?:"+[ff+kn+"?",kn,Ul,Nl,eo].join("|")+")",Lg=RegExp(Ci,"g"),Ig=RegExp(kn,"g"),Ol=RegExp(Qr+"(?="+Qr+")|"+Pg+vf,"g"),Dg=RegExp([es+"?"+jr+"+"+pf+"(?="+[Qt,es,"$"].join("|")+")",Tg+"+"+mf+"(?="+[Qt,es+df,"$"].join("|")+")",es+"?"+df+"+"+pf,es+"+"+mf,Cg,wg,Jr,Rg].join("|"),"g"),Ug=RegExp("["+hf+st+Ht+gi+"]"),Ng=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Og=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Fg=-1,zt={};zt[Be]=zt[ze]=zt[tt]=zt[Oe]=zt[Dt]=zt[ct]=zt[Qe]=zt[qe]=zt[Ke]=!0,zt[B]=zt[I]=zt[et]=zt[ie]=zt[$e]=zt[de]=zt[Se]=zt[D]=zt[X]=zt[te]=zt[ye]=zt[De]=zt[R]=zt[T]=zt[Le]=!1;var Ft={};Ft[B]=Ft[I]=Ft[et]=Ft[$e]=Ft[ie]=Ft[de]=Ft[Be]=Ft[ze]=Ft[tt]=Ft[Oe]=Ft[Dt]=Ft[X]=Ft[te]=Ft[ye]=Ft[De]=Ft[R]=Ft[T]=Ft[ue]=Ft[ct]=Ft[Qe]=Ft[qe]=Ft[Ke]=!0,Ft[Se]=Ft[D]=Ft[Le]=!1;var Bg={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},zg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Gg={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},kg={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Hg=parseFloat,Vg=parseInt,xf=typeof bo=="object"&&bo&&bo.Object===Object&&bo,Wg=typeof self=="object"&&self&&self.Object===Object&&self,cn=xf||Wg||Function("return this")(),Fl=e&&!e.nodeType&&e,yr=Fl&&!0&&i&&!i.nodeType&&i,yf=yr&&yr.exports===Fl,Bl=yf&&xf.process,Hn=function(){try{var j=yr&&yr.require&&yr.require("util").types;return j||Bl&&Bl.binding&&Bl.binding("util")}catch{}}(),Sf=Hn&&Hn.isArrayBuffer,Ef=Hn&&Hn.isDate,Mf=Hn&&Hn.isMap,bf=Hn&&Hn.isRegExp,Tf=Hn&&Hn.isSet,Af=Hn&&Hn.isTypedArray;function Dn(j,be,_e){switch(_e.length){case 0:return j.call(be);case 1:return j.call(be,_e[0]);case 2:return j.call(be,_e[0],_e[1]);case 3:return j.call(be,_e[0],_e[1],_e[2])}return j.apply(be,_e)}function Xg(j,be,_e,Ye){for(var ft=-1,Ct=j==null?0:j.length;++ft<Ct;){var en=j[ft];be(Ye,en,_e(en),j)}return Ye}function Vn(j,be){for(var _e=-1,Ye=j==null?0:j.length;++_e<Ye&&be(j[_e],_e,j)!==!1;);return j}function qg(j,be){for(var _e=j==null?0:j.length;_e--&&be(j[_e],_e,j)!==!1;);return j}function wf(j,be){for(var _e=-1,Ye=j==null?0:j.length;++_e<Ye;)if(!be(j[_e],_e,j))return!1;return!0}function $i(j,be){for(var _e=-1,Ye=j==null?0:j.length,ft=0,Ct=[];++_e<Ye;){var en=j[_e];be(en,_e,j)&&(Ct[ft++]=en)}return Ct}function Xo(j,be){var _e=j==null?0:j.length;return!!_e&&ts(j,be,0)>-1}function zl(j,be,_e){for(var Ye=-1,ft=j==null?0:j.length;++Ye<ft;)if(_e(be,j[Ye]))return!0;return!1}function Vt(j,be){for(var _e=-1,Ye=j==null?0:j.length,ft=Array(Ye);++_e<Ye;)ft[_e]=be(j[_e],_e,j);return ft}function Zi(j,be){for(var _e=-1,Ye=be.length,ft=j.length;++_e<Ye;)j[ft+_e]=be[_e];return j}function Gl(j,be,_e,Ye){var ft=-1,Ct=j==null?0:j.length;for(Ye&&Ct&&(_e=j[++ft]);++ft<Ct;)_e=be(_e,j[ft],ft,j);return _e}function Yg(j,be,_e,Ye){var ft=j==null?0:j.length;for(Ye&&ft&&(_e=j[--ft]);ft--;)_e=be(_e,j[ft],ft,j);return _e}function kl(j,be){for(var _e=-1,Ye=j==null?0:j.length;++_e<Ye;)if(be(j[_e],_e,j))return!0;return!1}var $g=Hl("length");function Zg(j){return j.split("")}function Kg(j){return j.match(ko)||[]}function Cf(j,be,_e){var Ye;return _e(j,function(ft,Ct,en){if(be(ft,Ct,en))return Ye=Ct,!1}),Ye}function qo(j,be,_e,Ye){for(var ft=j.length,Ct=_e+(Ye?1:-1);Ye?Ct--:++Ct<ft;)if(be(j[Ct],Ct,j))return Ct;return-1}function ts(j,be,_e){return be===be?l_(j,be,_e):qo(j,Rf,_e)}function Jg(j,be,_e,Ye){for(var ft=_e-1,Ct=j.length;++ft<Ct;)if(Ye(j[ft],be))return ft;return-1}function Rf(j){return j!==j}function Pf(j,be){var _e=j==null?0:j.length;return _e?Wl(j,be)/_e:Me}function Hl(j){return function(be){return be==null?t:be[j]}}function Vl(j){return function(be){return j==null?t:j[be]}}function Lf(j,be,_e,Ye,ft){return ft(j,function(Ct,en,Ot){_e=Ye?(Ye=!1,Ct):be(_e,Ct,en,Ot)}),_e}function jg(j,be){var _e=j.length;for(j.sort(be);_e--;)j[_e]=j[_e].value;return j}function Wl(j,be){for(var _e,Ye=-1,ft=j.length;++Ye<ft;){var Ct=be(j[Ye]);Ct!==t&&(_e=_e===t?Ct:_e+Ct)}return _e}function Xl(j,be){for(var _e=-1,Ye=Array(j);++_e<j;)Ye[_e]=be(_e);return Ye}function Qg(j,be){return Vt(be,function(_e){return[_e,j[_e]]})}function If(j){return j&&j.slice(0,Of(j)+1).replace(ti,"")}function Un(j){return function(be){return j(be)}}function ql(j,be){return Vt(be,function(_e){return j[_e]})}function to(j,be){return j.has(be)}function Df(j,be){for(var _e=-1,Ye=j.length;++_e<Ye&&ts(be,j[_e],0)>-1;);return _e}function Uf(j,be){for(var _e=j.length;_e--&&ts(be,j[_e],0)>-1;);return _e}function e_(j,be){for(var _e=j.length,Ye=0;_e--;)j[_e]===be&&++Ye;return Ye}var t_=Vl(Bg),n_=Vl(zg);function i_(j){return"\\"+kg[j]}function r_(j,be){return j==null?t:j[be]}function ns(j){return Ug.test(j)}function s_(j){return Ng.test(j)}function o_(j){for(var be,_e=[];!(be=j.next()).done;)_e.push(be.value);return _e}function Yl(j){var be=-1,_e=Array(j.size);return j.forEach(function(Ye,ft){_e[++be]=[ft,Ye]}),_e}function Nf(j,be){return function(_e){return j(be(_e))}}function Ki(j,be){for(var _e=-1,Ye=j.length,ft=0,Ct=[];++_e<Ye;){var en=j[_e];(en===be||en===d)&&(j[_e]=d,Ct[ft++]=_e)}return Ct}function Yo(j){var be=-1,_e=Array(j.size);return j.forEach(function(Ye){_e[++be]=Ye}),_e}function a_(j){var be=-1,_e=Array(j.size);return j.forEach(function(Ye){_e[++be]=[Ye,Ye]}),_e}function l_(j,be,_e){for(var Ye=_e-1,ft=j.length;++Ye<ft;)if(j[Ye]===be)return Ye;return-1}function c_(j,be,_e){for(var Ye=_e+1;Ye--;)if(j[Ye]===be)return Ye;return Ye}function is(j){return ns(j)?f_(j):$g(j)}function ii(j){return ns(j)?h_(j):Zg(j)}function Of(j){for(var be=j.length;be--&&$r.test(j.charAt(be)););return be}var u_=Vl(Gg);function f_(j){for(var be=Ol.lastIndex=0;Ol.test(j);)++be;return be}function h_(j){return j.match(Ol)||[]}function d_(j){return j.match(Dg)||[]}var p_=function j(be){be=be==null?cn:rs.defaults(cn.Object(),be,rs.pick(cn,Og));var _e=be.Array,Ye=be.Date,ft=be.Error,Ct=be.Function,en=be.Math,Ot=be.Object,$l=be.RegExp,m_=be.String,Wn=be.TypeError,$o=_e.prototype,g_=Ct.prototype,ss=Ot.prototype,Zo=be["__core-js_shared__"],Ko=g_.toString,It=ss.hasOwnProperty,__=0,Ff=function(){var r=/[^.]+$/.exec(Zo&&Zo.keys&&Zo.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Jo=ss.toString,v_=Ko.call(Ot),x_=cn._,y_=$l("^"+Ko.call(It).replace(Lt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),jo=yf?be.Buffer:t,Ji=be.Symbol,Qo=be.Uint8Array,Bf=jo?jo.allocUnsafe:t,ea=Nf(Ot.getPrototypeOf,Ot),zf=Ot.create,Gf=ss.propertyIsEnumerable,ta=$o.splice,kf=Ji?Ji.isConcatSpreadable:t,no=Ji?Ji.iterator:t,Sr=Ji?Ji.toStringTag:t,na=function(){try{var r=Ar(Ot,"defineProperty");return r({},"",{}),r}catch{}}(),S_=be.clearTimeout!==cn.clearTimeout&&be.clearTimeout,E_=Ye&&Ye.now!==cn.Date.now&&Ye.now,M_=be.setTimeout!==cn.setTimeout&&be.setTimeout,ia=en.ceil,ra=en.floor,Zl=Ot.getOwnPropertySymbols,b_=jo?jo.isBuffer:t,Hf=be.isFinite,T_=$o.join,A_=Nf(Ot.keys,Ot),tn=en.max,pn=en.min,w_=Ye.now,C_=be.parseInt,Vf=en.random,R_=$o.reverse,Kl=Ar(be,"DataView"),io=Ar(be,"Map"),Jl=Ar(be,"Promise"),os=Ar(be,"Set"),ro=Ar(be,"WeakMap"),so=Ar(Ot,"create"),sa=ro&&new ro,as={},P_=wr(Kl),L_=wr(io),I_=wr(Jl),D_=wr(os),U_=wr(ro),oa=Ji?Ji.prototype:t,oo=oa?oa.valueOf:t,Wf=oa?oa.toString:t;function w(r){if(Yt(r)&&!dt(r)&&!(r instanceof Mt)){if(r instanceof Xn)return r;if(It.call(r,"__wrapped__"))return Xh(r)}return new Xn(r)}var ls=function(){function r(){}return function(o){if(!Wt(o))return{};if(zf)return zf(o);r.prototype=o;var u=new r;return r.prototype=t,u}}();function aa(){}function Xn(r,o){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=t}w.templateSettings={escape:Ve,evaluate:_t,interpolate:wt,variable:"",imports:{_:w}},w.prototype=aa.prototype,w.prototype.constructor=w,Xn.prototype=ls(aa.prototype),Xn.prototype.constructor=Xn;function Mt(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Re,this.__views__=[]}function N_(){var r=new Mt(this.__wrapped__);return r.__actions__=Cn(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Cn(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Cn(this.__views__),r}function O_(){if(this.__filtered__){var r=new Mt(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function F_(){var r=this.__wrapped__.value(),o=this.__dir__,u=dt(r),_=o<0,M=u?r.length:0,C=Zv(0,M,this.__views__),V=C.start,J=C.end,ee=J-V,we=_?J:V-1,Ce=this.__iteratees__,Ue=Ce.length,He=0,je=pn(ee,this.__takeCount__);if(!u||!_&&M==ee&&je==ee)return ph(r,this.__actions__);var ot=[];e:for(;ee--&&He<je;){we+=o;for(var vt=-1,at=r[we];++vt<Ue;){var Et=Ce[vt],Tt=Et.iteratee,Fn=Et.type,Sn=Tt(at);if(Fn==xe)at=Sn;else if(!Sn){if(Fn==Y)continue e;break e}}ot[He++]=at}return ot}Mt.prototype=ls(aa.prototype),Mt.prototype.constructor=Mt;function Er(r){var o=-1,u=r==null?0:r.length;for(this.clear();++o<u;){var _=r[o];this.set(_[0],_[1])}}function B_(){this.__data__=so?so(null):{},this.size=0}function z_(r){var o=this.has(r)&&delete this.__data__[r];return this.size-=o?1:0,o}function G_(r){var o=this.__data__;if(so){var u=o[r];return u===f?t:u}return It.call(o,r)?o[r]:t}function k_(r){var o=this.__data__;return so?o[r]!==t:It.call(o,r)}function H_(r,o){var u=this.__data__;return this.size+=this.has(r)?0:1,u[r]=so&&o===t?f:o,this}Er.prototype.clear=B_,Er.prototype.delete=z_,Er.prototype.get=G_,Er.prototype.has=k_,Er.prototype.set=H_;function Ri(r){var o=-1,u=r==null?0:r.length;for(this.clear();++o<u;){var _=r[o];this.set(_[0],_[1])}}function V_(){this.__data__=[],this.size=0}function W_(r){var o=this.__data__,u=la(o,r);if(u<0)return!1;var _=o.length-1;return u==_?o.pop():ta.call(o,u,1),--this.size,!0}function X_(r){var o=this.__data__,u=la(o,r);return u<0?t:o[u][1]}function q_(r){return la(this.__data__,r)>-1}function Y_(r,o){var u=this.__data__,_=la(u,r);return _<0?(++this.size,u.push([r,o])):u[_][1]=o,this}Ri.prototype.clear=V_,Ri.prototype.delete=W_,Ri.prototype.get=X_,Ri.prototype.has=q_,Ri.prototype.set=Y_;function Pi(r){var o=-1,u=r==null?0:r.length;for(this.clear();++o<u;){var _=r[o];this.set(_[0],_[1])}}function $_(){this.size=0,this.__data__={hash:new Er,map:new(io||Ri),string:new Er}}function Z_(r){var o=ya(this,r).delete(r);return this.size-=o?1:0,o}function K_(r){return ya(this,r).get(r)}function J_(r){return ya(this,r).has(r)}function j_(r,o){var u=ya(this,r),_=u.size;return u.set(r,o),this.size+=u.size==_?0:1,this}Pi.prototype.clear=$_,Pi.prototype.delete=Z_,Pi.prototype.get=K_,Pi.prototype.has=J_,Pi.prototype.set=j_;function Mr(r){var o=-1,u=r==null?0:r.length;for(this.__data__=new Pi;++o<u;)this.add(r[o])}function Q_(r){return this.__data__.set(r,f),this}function ev(r){return this.__data__.has(r)}Mr.prototype.add=Mr.prototype.push=Q_,Mr.prototype.has=ev;function ri(r){var o=this.__data__=new Ri(r);this.size=o.size}function tv(){this.__data__=new Ri,this.size=0}function nv(r){var o=this.__data__,u=o.delete(r);return this.size=o.size,u}function iv(r){return this.__data__.get(r)}function rv(r){return this.__data__.has(r)}function sv(r,o){var u=this.__data__;if(u instanceof Ri){var _=u.__data__;if(!io||_.length<s-1)return _.push([r,o]),this.size=++u.size,this;u=this.__data__=new Pi(_)}return u.set(r,o),this.size=u.size,this}ri.prototype.clear=tv,ri.prototype.delete=nv,ri.prototype.get=iv,ri.prototype.has=rv,ri.prototype.set=sv;function Xf(r,o){var u=dt(r),_=!u&&Cr(r),M=!u&&!_&&nr(r),C=!u&&!_&&!M&&hs(r),V=u||_||M||C,J=V?Xl(r.length,m_):[],ee=J.length;for(var we in r)(o||It.call(r,we))&&!(V&&(we=="length"||M&&(we=="offset"||we=="parent")||C&&(we=="buffer"||we=="byteLength"||we=="byteOffset")||Ui(we,ee)))&&J.push(we);return J}function qf(r){var o=r.length;return o?r[lc(0,o-1)]:t}function ov(r,o){return Sa(Cn(r),br(o,0,r.length))}function av(r){return Sa(Cn(r))}function jl(r,o,u){(u!==t&&!si(r[o],u)||u===t&&!(o in r))&&Li(r,o,u)}function ao(r,o,u){var _=r[o];(!(It.call(r,o)&&si(_,u))||u===t&&!(o in r))&&Li(r,o,u)}function la(r,o){for(var u=r.length;u--;)if(si(r[u][0],o))return u;return-1}function lv(r,o,u,_){return ji(r,function(M,C,V){o(_,M,u(M),V)}),_}function Yf(r,o){return r&&vi(o,on(o),r)}function cv(r,o){return r&&vi(o,Pn(o),r)}function Li(r,o,u){o=="__proto__"&&na?na(r,o,{configurable:!0,enumerable:!0,value:u,writable:!0}):r[o]=u}function Ql(r,o){for(var u=-1,_=o.length,M=_e(_),C=r==null;++u<_;)M[u]=C?t:Dc(r,o[u]);return M}function br(r,o,u){return r===r&&(u!==t&&(r=r<=u?r:u),o!==t&&(r=r>=o?r:o)),r}function qn(r,o,u,_,M,C){var V,J=o&p,ee=o&v,we=o&x;if(u&&(V=M?u(r,_,M,C):u(r)),V!==t)return V;if(!Wt(r))return r;var Ce=dt(r);if(Ce){if(V=Jv(r),!J)return Cn(r,V)}else{var Ue=mn(r),He=Ue==D||Ue==ce;if(nr(r))return _h(r,J);if(Ue==ye||Ue==B||He&&!M){if(V=ee||He?{}:Oh(r),!J)return ee?Gv(r,cv(V,r)):zv(r,Yf(V,r))}else{if(!Ft[Ue])return M?r:{};V=jv(r,Ue,J)}}C||(C=new ri);var je=C.get(r);if(je)return je;C.set(r,V),fd(r)?r.forEach(function(at){V.add(qn(at,o,u,at,r,C))}):cd(r)&&r.forEach(function(at,Et){V.set(Et,qn(at,o,u,Et,r,C))});var ot=we?ee?xc:vc:ee?Pn:on,vt=Ce?t:ot(r);return Vn(vt||r,function(at,Et){vt&&(Et=at,at=r[Et]),ao(V,Et,qn(at,o,u,Et,r,C))}),V}function uv(r){var o=on(r);return function(u){return $f(u,r,o)}}function $f(r,o,u){var _=u.length;if(r==null)return!_;for(r=Ot(r);_--;){var M=u[_],C=o[M],V=r[M];if(V===t&&!(M in r)||!C(V))return!1}return!0}function Zf(r,o,u){if(typeof r!="function")throw new Wn(c);return mo(function(){r.apply(t,u)},o)}function lo(r,o,u,_){var M=-1,C=Xo,V=!0,J=r.length,ee=[],we=o.length;if(!J)return ee;u&&(o=Vt(o,Un(u))),_?(C=zl,V=!1):o.length>=s&&(C=to,V=!1,o=new Mr(o));e:for(;++M<J;){var Ce=r[M],Ue=u==null?Ce:u(Ce);if(Ce=_||Ce!==0?Ce:0,V&&Ue===Ue){for(var He=we;He--;)if(o[He]===Ue)continue e;ee.push(Ce)}else C(o,Ue,_)||ee.push(Ce)}return ee}var ji=Eh(_i),Kf=Eh(tc,!0);function fv(r,o){var u=!0;return ji(r,function(_,M,C){return u=!!o(_,M,C),u}),u}function ca(r,o,u){for(var _=-1,M=r.length;++_<M;){var C=r[_],V=o(C);if(V!=null&&(J===t?V===V&&!On(V):u(V,J)))var J=V,ee=C}return ee}function hv(r,o,u,_){var M=r.length;for(u=gt(u),u<0&&(u=-u>M?0:M+u),_=_===t||_>M?M:gt(_),_<0&&(_+=M),_=u>_?0:dd(_);u<_;)r[u++]=o;return r}function Jf(r,o){var u=[];return ji(r,function(_,M,C){o(_,M,C)&&u.push(_)}),u}function un(r,o,u,_,M){var C=-1,V=r.length;for(u||(u=e0),M||(M=[]);++C<V;){var J=r[C];o>0&&u(J)?o>1?un(J,o-1,u,_,M):Zi(M,J):_||(M[M.length]=J)}return M}var ec=Mh(),jf=Mh(!0);function _i(r,o){return r&&ec(r,o,on)}function tc(r,o){return r&&jf(r,o,on)}function ua(r,o){return $i(o,function(u){return Ni(r[u])})}function Tr(r,o){o=er(o,r);for(var u=0,_=o.length;r!=null&&u<_;)r=r[xi(o[u++])];return u&&u==_?r:t}function Qf(r,o,u){var _=o(r);return dt(r)?_:Zi(_,u(r))}function xn(r){return r==null?r===t?me:ne:Sr&&Sr in Ot(r)?$v(r):a0(r)}function nc(r,o){return r>o}function dv(r,o){return r!=null&&It.call(r,o)}function pv(r,o){return r!=null&&o in Ot(r)}function mv(r,o,u){return r>=pn(o,u)&&r<tn(o,u)}function ic(r,o,u){for(var _=u?zl:Xo,M=r[0].length,C=r.length,V=C,J=_e(C),ee=1/0,we=[];V--;){var Ce=r[V];V&&o&&(Ce=Vt(Ce,Un(o))),ee=pn(Ce.length,ee),J[V]=!u&&(o||M>=120&&Ce.length>=120)?new Mr(V&&Ce):t}Ce=r[0];var Ue=-1,He=J[0];e:for(;++Ue<M&&we.length<ee;){var je=Ce[Ue],ot=o?o(je):je;if(je=u||je!==0?je:0,!(He?to(He,ot):_(we,ot,u))){for(V=C;--V;){var vt=J[V];if(!(vt?to(vt,ot):_(r[V],ot,u)))continue e}He&&He.push(ot),we.push(je)}}return we}function gv(r,o,u,_){return _i(r,function(M,C,V){o(_,u(M),C,V)}),_}function co(r,o,u){o=er(o,r),r=Gh(r,o);var _=r==null?r:r[xi($n(o))];return _==null?t:Dn(_,r,u)}function eh(r){return Yt(r)&&xn(r)==B}function _v(r){return Yt(r)&&xn(r)==et}function vv(r){return Yt(r)&&xn(r)==de}function uo(r,o,u,_,M){return r===o?!0:r==null||o==null||!Yt(r)&&!Yt(o)?r!==r&&o!==o:xv(r,o,u,_,uo,M)}function xv(r,o,u,_,M,C){var V=dt(r),J=dt(o),ee=V?I:mn(r),we=J?I:mn(o);ee=ee==B?ye:ee,we=we==B?ye:we;var Ce=ee==ye,Ue=we==ye,He=ee==we;if(He&&nr(r)){if(!nr(o))return!1;V=!0,Ce=!1}if(He&&!Ce)return C||(C=new ri),V||hs(r)?Dh(r,o,u,_,M,C):qv(r,o,ee,u,_,M,C);if(!(u&S)){var je=Ce&&It.call(r,"__wrapped__"),ot=Ue&&It.call(o,"__wrapped__");if(je||ot){var vt=je?r.value():r,at=ot?o.value():o;return C||(C=new ri),M(vt,at,u,_,C)}}return He?(C||(C=new ri),Yv(r,o,u,_,M,C)):!1}function yv(r){return Yt(r)&&mn(r)==X}function rc(r,o,u,_){var M=u.length,C=M,V=!_;if(r==null)return!C;for(r=Ot(r);M--;){var J=u[M];if(V&&J[2]?J[1]!==r[J[0]]:!(J[0]in r))return!1}for(;++M<C;){J=u[M];var ee=J[0],we=r[ee],Ce=J[1];if(V&&J[2]){if(we===t&&!(ee in r))return!1}else{var Ue=new ri;if(_)var He=_(we,Ce,ee,r,o,Ue);if(!(He===t?uo(Ce,we,S|E,_,Ue):He))return!1}}return!0}function th(r){if(!Wt(r)||n0(r))return!1;var o=Ni(r)?y_:ge;return o.test(wr(r))}function Sv(r){return Yt(r)&&xn(r)==De}function Ev(r){return Yt(r)&&mn(r)==R}function Mv(r){return Yt(r)&&wa(r.length)&&!!zt[xn(r)]}function nh(r){return typeof r=="function"?r:r==null?Ln:typeof r=="object"?dt(r)?sh(r[0],r[1]):rh(r):bd(r)}function sc(r){if(!po(r))return A_(r);var o=[];for(var u in Ot(r))It.call(r,u)&&u!="constructor"&&o.push(u);return o}function bv(r){if(!Wt(r))return o0(r);var o=po(r),u=[];for(var _ in r)_=="constructor"&&(o||!It.call(r,_))||u.push(_);return u}function oc(r,o){return r<o}function ih(r,o){var u=-1,_=Rn(r)?_e(r.length):[];return ji(r,function(M,C,V){_[++u]=o(M,C,V)}),_}function rh(r){var o=Sc(r);return o.length==1&&o[0][2]?Bh(o[0][0],o[0][1]):function(u){return u===r||rc(u,r,o)}}function sh(r,o){return Mc(r)&&Fh(o)?Bh(xi(r),o):function(u){var _=Dc(u,r);return _===t&&_===o?Uc(u,r):uo(o,_,S|E)}}function fa(r,o,u,_,M){r!==o&&ec(o,function(C,V){if(M||(M=new ri),Wt(C))Tv(r,o,V,u,fa,_,M);else{var J=_?_(Tc(r,V),C,V+"",r,o,M):t;J===t&&(J=C),jl(r,V,J)}},Pn)}function Tv(r,o,u,_,M,C,V){var J=Tc(r,u),ee=Tc(o,u),we=V.get(ee);if(we){jl(r,u,we);return}var Ce=C?C(J,ee,u+"",r,o,V):t,Ue=Ce===t;if(Ue){var He=dt(ee),je=!He&&nr(ee),ot=!He&&!je&&hs(ee);Ce=ee,He||je||ot?dt(J)?Ce=J:Zt(J)?Ce=Cn(J):je?(Ue=!1,Ce=_h(ee,!0)):ot?(Ue=!1,Ce=vh(ee,!0)):Ce=[]:go(ee)||Cr(ee)?(Ce=J,Cr(J)?Ce=pd(J):(!Wt(J)||Ni(J))&&(Ce=Oh(ee))):Ue=!1}Ue&&(V.set(ee,Ce),M(Ce,ee,_,C,V),V.delete(ee)),jl(r,u,Ce)}function oh(r,o){var u=r.length;if(u)return o+=o<0?u:0,Ui(o,u)?r[o]:t}function ah(r,o,u){o.length?o=Vt(o,function(C){return dt(C)?function(V){return Tr(V,C.length===1?C[0]:C)}:C}):o=[Ln];var _=-1;o=Vt(o,Un(it()));var M=ih(r,function(C,V,J){var ee=Vt(o,function(we){return we(C)});return{criteria:ee,index:++_,value:C}});return jg(M,function(C,V){return Bv(C,V,u)})}function Av(r,o){return lh(r,o,function(u,_){return Uc(r,_)})}function lh(r,o,u){for(var _=-1,M=o.length,C={};++_<M;){var V=o[_],J=Tr(r,V);u(J,V)&&fo(C,er(V,r),J)}return C}function wv(r){return function(o){return Tr(o,r)}}function ac(r,o,u,_){var M=_?Jg:ts,C=-1,V=o.length,J=r;for(r===o&&(o=Cn(o)),u&&(J=Vt(r,Un(u)));++C<V;)for(var ee=0,we=o[C],Ce=u?u(we):we;(ee=M(J,Ce,ee,_))>-1;)J!==r&&ta.call(J,ee,1),ta.call(r,ee,1);return r}function ch(r,o){for(var u=r?o.length:0,_=u-1;u--;){var M=o[u];if(u==_||M!==C){var C=M;Ui(M)?ta.call(r,M,1):fc(r,M)}}return r}function lc(r,o){return r+ra(Vf()*(o-r+1))}function Cv(r,o,u,_){for(var M=-1,C=tn(ia((o-r)/(u||1)),0),V=_e(C);C--;)V[_?C:++M]=r,r+=u;return V}function cc(r,o){var u="";if(!r||o<1||o>K)return u;do o%2&&(u+=r),o=ra(o/2),o&&(r+=r);while(o);return u}function yt(r,o){return Ac(zh(r,o,Ln),r+"")}function Rv(r){return qf(ds(r))}function Pv(r,o){var u=ds(r);return Sa(u,br(o,0,u.length))}function fo(r,o,u,_){if(!Wt(r))return r;o=er(o,r);for(var M=-1,C=o.length,V=C-1,J=r;J!=null&&++M<C;){var ee=xi(o[M]),we=u;if(ee==="__proto__"||ee==="constructor"||ee==="prototype")return r;if(M!=V){var Ce=J[ee];we=_?_(Ce,ee,J):t,we===t&&(we=Wt(Ce)?Ce:Ui(o[M+1])?[]:{})}ao(J,ee,we),J=J[ee]}return r}var uh=sa?function(r,o){return sa.set(r,o),r}:Ln,Lv=na?function(r,o){return na(r,"toString",{configurable:!0,enumerable:!1,value:Oc(o),writable:!0})}:Ln;function Iv(r){return Sa(ds(r))}function Yn(r,o,u){var _=-1,M=r.length;o<0&&(o=-o>M?0:M+o),u=u>M?M:u,u<0&&(u+=M),M=o>u?0:u-o>>>0,o>>>=0;for(var C=_e(M);++_<M;)C[_]=r[_+o];return C}function Dv(r,o){var u;return ji(r,function(_,M,C){return u=o(_,M,C),!u}),!!u}function ha(r,o,u){var _=0,M=r==null?_:r.length;if(typeof o=="number"&&o===o&&M<=nt){for(;_<M;){var C=_+M>>>1,V=r[C];V!==null&&!On(V)&&(u?V<=o:V<o)?_=C+1:M=C}return M}return uc(r,o,Ln,u)}function uc(r,o,u,_){var M=0,C=r==null?0:r.length;if(C===0)return 0;o=u(o);for(var V=o!==o,J=o===null,ee=On(o),we=o===t;M<C;){var Ce=ra((M+C)/2),Ue=u(r[Ce]),He=Ue!==t,je=Ue===null,ot=Ue===Ue,vt=On(Ue);if(V)var at=_||ot;else we?at=ot&&(_||He):J?at=ot&&He&&(_||!je):ee?at=ot&&He&&!je&&(_||!vt):je||vt?at=!1:at=_?Ue<=o:Ue<o;at?M=Ce+1:C=Ce}return pn(C,ke)}function fh(r,o){for(var u=-1,_=r.length,M=0,C=[];++u<_;){var V=r[u],J=o?o(V):V;if(!u||!si(J,ee)){var ee=J;C[M++]=V===0?0:V}}return C}function hh(r){return typeof r=="number"?r:On(r)?Me:+r}function Nn(r){if(typeof r=="string")return r;if(dt(r))return Vt(r,Nn)+"";if(On(r))return Wf?Wf.call(r):"";var o=r+"";return o=="0"&&1/r==-ae?"-0":o}function Qi(r,o,u){var _=-1,M=Xo,C=r.length,V=!0,J=[],ee=J;if(u)V=!1,M=zl;else if(C>=s){var we=o?null:Wv(r);if(we)return Yo(we);V=!1,M=to,ee=new Mr}else ee=o?[]:J;e:for(;++_<C;){var Ce=r[_],Ue=o?o(Ce):Ce;if(Ce=u||Ce!==0?Ce:0,V&&Ue===Ue){for(var He=ee.length;He--;)if(ee[He]===Ue)continue e;o&&ee.push(Ue),J.push(Ce)}else M(ee,Ue,u)||(ee!==J&&ee.push(Ue),J.push(Ce))}return J}function fc(r,o){return o=er(o,r),r=Gh(r,o),r==null||delete r[xi($n(o))]}function dh(r,o,u,_){return fo(r,o,u(Tr(r,o)),_)}function da(r,o,u,_){for(var M=r.length,C=_?M:-1;(_?C--:++C<M)&&o(r[C],C,r););return u?Yn(r,_?0:C,_?C+1:M):Yn(r,_?C+1:0,_?M:C)}function ph(r,o){var u=r;return u instanceof Mt&&(u=u.value()),Gl(o,function(_,M){return M.func.apply(M.thisArg,Zi([_],M.args))},u)}function hc(r,o,u){var _=r.length;if(_<2)return _?Qi(r[0]):[];for(var M=-1,C=_e(_);++M<_;)for(var V=r[M],J=-1;++J<_;)J!=M&&(C[M]=lo(C[M]||V,r[J],o,u));return Qi(un(C,1),o,u)}function mh(r,o,u){for(var _=-1,M=r.length,C=o.length,V={};++_<M;){var J=_<C?o[_]:t;u(V,r[_],J)}return V}function dc(r){return Zt(r)?r:[]}function pc(r){return typeof r=="function"?r:Ln}function er(r,o){return dt(r)?r:Mc(r,o)?[r]:Wh(Rt(r))}var Uv=yt;function tr(r,o,u){var _=r.length;return u=u===t?_:u,!o&&u>=_?r:Yn(r,o,u)}var gh=S_||function(r){return cn.clearTimeout(r)};function _h(r,o){if(o)return r.slice();var u=r.length,_=Bf?Bf(u):new r.constructor(u);return r.copy(_),_}function mc(r){var o=new r.constructor(r.byteLength);return new Qo(o).set(new Qo(r)),o}function Nv(r,o){var u=o?mc(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.byteLength)}function Ov(r){var o=new r.constructor(r.source,Vo.exec(r));return o.lastIndex=r.lastIndex,o}function Fv(r){return oo?Ot(oo.call(r)):{}}function vh(r,o){var u=o?mc(r.buffer):r.buffer;return new r.constructor(u,r.byteOffset,r.length)}function xh(r,o){if(r!==o){var u=r!==t,_=r===null,M=r===r,C=On(r),V=o!==t,J=o===null,ee=o===o,we=On(o);if(!J&&!we&&!C&&r>o||C&&V&&ee&&!J&&!we||_&&V&&ee||!u&&ee||!M)return 1;if(!_&&!C&&!we&&r<o||we&&u&&M&&!_&&!C||J&&u&&M||!V&&M||!ee)return-1}return 0}function Bv(r,o,u){for(var _=-1,M=r.criteria,C=o.criteria,V=M.length,J=u.length;++_<V;){var ee=xh(M[_],C[_]);if(ee){if(_>=J)return ee;var we=u[_];return ee*(we=="desc"?-1:1)}}return r.index-o.index}function yh(r,o,u,_){for(var M=-1,C=r.length,V=u.length,J=-1,ee=o.length,we=tn(C-V,0),Ce=_e(ee+we),Ue=!_;++J<ee;)Ce[J]=o[J];for(;++M<V;)(Ue||M<C)&&(Ce[u[M]]=r[M]);for(;we--;)Ce[J++]=r[M++];return Ce}function Sh(r,o,u,_){for(var M=-1,C=r.length,V=-1,J=u.length,ee=-1,we=o.length,Ce=tn(C-J,0),Ue=_e(Ce+we),He=!_;++M<Ce;)Ue[M]=r[M];for(var je=M;++ee<we;)Ue[je+ee]=o[ee];for(;++V<J;)(He||M<C)&&(Ue[je+u[V]]=r[M++]);return Ue}function Cn(r,o){var u=-1,_=r.length;for(o||(o=_e(_));++u<_;)o[u]=r[u];return o}function vi(r,o,u,_){var M=!u;u||(u={});for(var C=-1,V=o.length;++C<V;){var J=o[C],ee=_?_(u[J],r[J],J,u,r):t;ee===t&&(ee=r[J]),M?Li(u,J,ee):ao(u,J,ee)}return u}function zv(r,o){return vi(r,Ec(r),o)}function Gv(r,o){return vi(r,Uh(r),o)}function pa(r,o){return function(u,_){var M=dt(u)?Xg:lv,C=o?o():{};return M(u,r,it(_,2),C)}}function cs(r){return yt(function(o,u){var _=-1,M=u.length,C=M>1?u[M-1]:t,V=M>2?u[2]:t;for(C=r.length>3&&typeof C=="function"?(M--,C):t,V&&yn(u[0],u[1],V)&&(C=M<3?t:C,M=1),o=Ot(o);++_<M;){var J=u[_];J&&r(o,J,_,C)}return o})}function Eh(r,o){return function(u,_){if(u==null)return u;if(!Rn(u))return r(u,_);for(var M=u.length,C=o?M:-1,V=Ot(u);(o?C--:++C<M)&&_(V[C],C,V)!==!1;);return u}}function Mh(r){return function(o,u,_){for(var M=-1,C=Ot(o),V=_(o),J=V.length;J--;){var ee=V[r?J:++M];if(u(C[ee],ee,C)===!1)break}return o}}function kv(r,o,u){var _=o&m,M=ho(r);function C(){var V=this&&this!==cn&&this instanceof C?M:r;return V.apply(_?u:this,arguments)}return C}function bh(r){return function(o){o=Rt(o);var u=ns(o)?ii(o):t,_=u?u[0]:o.charAt(0),M=u?tr(u,1).join(""):o.slice(1);return _[r]()+M}}function us(r){return function(o){return Gl(Ed(Sd(o).replace(Lg,"")),r,"")}}function ho(r){return function(){var o=arguments;switch(o.length){case 0:return new r;case 1:return new r(o[0]);case 2:return new r(o[0],o[1]);case 3:return new r(o[0],o[1],o[2]);case 4:return new r(o[0],o[1],o[2],o[3]);case 5:return new r(o[0],o[1],o[2],o[3],o[4]);case 6:return new r(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new r(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var u=ls(r.prototype),_=r.apply(u,o);return Wt(_)?_:u}}function Hv(r,o,u){var _=ho(r);function M(){for(var C=arguments.length,V=_e(C),J=C,ee=fs(M);J--;)V[J]=arguments[J];var we=C<3&&V[0]!==ee&&V[C-1]!==ee?[]:Ki(V,ee);if(C-=we.length,C<u)return Rh(r,o,ma,M.placeholder,t,V,we,t,t,u-C);var Ce=this&&this!==cn&&this instanceof M?_:r;return Dn(Ce,this,V)}return M}function Th(r){return function(o,u,_){var M=Ot(o);if(!Rn(o)){var C=it(u,3);o=on(o),u=function(J){return C(M[J],J,M)}}var V=r(o,u,_);return V>-1?M[C?o[V]:V]:t}}function Ah(r){return Di(function(o){var u=o.length,_=u,M=Xn.prototype.thru;for(r&&o.reverse();_--;){var C=o[_];if(typeof C!="function")throw new Wn(c);if(M&&!V&&xa(C)=="wrapper")var V=new Xn([],!0)}for(_=V?_:u;++_<u;){C=o[_];var J=xa(C),ee=J=="wrapper"?yc(C):t;ee&&bc(ee[0])&&ee[1]==(U|y|k|W)&&!ee[4].length&&ee[9]==1?V=V[xa(ee[0])].apply(V,ee[3]):V=C.length==1&&bc(C)?V[J]():V.thru(C)}return function(){var we=arguments,Ce=we[0];if(V&&we.length==1&&dt(Ce))return V.plant(Ce).value();for(var Ue=0,He=u?o[Ue].apply(this,we):Ce;++Ue<u;)He=o[Ue].call(this,He);return He}})}function ma(r,o,u,_,M,C,V,J,ee,we){var Ce=o&U,Ue=o&m,He=o&g,je=o&(y|A),ot=o&fe,vt=He?t:ho(r);function at(){for(var Et=arguments.length,Tt=_e(Et),Fn=Et;Fn--;)Tt[Fn]=arguments[Fn];if(je)var Sn=fs(at),Bn=e_(Tt,Sn);if(_&&(Tt=yh(Tt,_,M,je)),C&&(Tt=Sh(Tt,C,V,je)),Et-=Bn,je&&Et<we){var Kt=Ki(Tt,Sn);return Rh(r,o,ma,at.placeholder,u,Tt,Kt,J,ee,we-Et)}var oi=Ue?u:this,Fi=He?oi[r]:r;return Et=Tt.length,J?Tt=l0(Tt,J):ot&&Et>1&&Tt.reverse(),Ce&&ee<Et&&(Tt.length=ee),this&&this!==cn&&this instanceof at&&(Fi=vt||ho(Fi)),Fi.apply(oi,Tt)}return at}function wh(r,o){return function(u,_){return gv(u,r,o(_),{})}}function ga(r,o){return function(u,_){var M;if(u===t&&_===t)return o;if(u!==t&&(M=u),_!==t){if(M===t)return _;typeof u=="string"||typeof _=="string"?(u=Nn(u),_=Nn(_)):(u=hh(u),_=hh(_)),M=r(u,_)}return M}}function gc(r){return Di(function(o){return o=Vt(o,Un(it())),yt(function(u){var _=this;return r(o,function(M){return Dn(M,_,u)})})})}function _a(r,o){o=o===t?" ":Nn(o);var u=o.length;if(u<2)return u?cc(o,r):o;var _=cc(o,ia(r/is(o)));return ns(o)?tr(ii(_),0,r).join(""):_.slice(0,r)}function Vv(r,o,u,_){var M=o&m,C=ho(r);function V(){for(var J=-1,ee=arguments.length,we=-1,Ce=_.length,Ue=_e(Ce+ee),He=this&&this!==cn&&this instanceof V?C:r;++we<Ce;)Ue[we]=_[we];for(;ee--;)Ue[we++]=arguments[++J];return Dn(He,M?u:this,Ue)}return V}function Ch(r){return function(o,u,_){return _&&typeof _!="number"&&yn(o,u,_)&&(u=_=t),o=Oi(o),u===t?(u=o,o=0):u=Oi(u),_=_===t?o<u?1:-1:Oi(_),Cv(o,u,_,r)}}function va(r){return function(o,u){return typeof o=="string"&&typeof u=="string"||(o=Zn(o),u=Zn(u)),r(o,u)}}function Rh(r,o,u,_,M,C,V,J,ee,we){var Ce=o&y,Ue=Ce?V:t,He=Ce?t:V,je=Ce?C:t,ot=Ce?t:C;o|=Ce?k:G,o&=~(Ce?G:k),o&P||(o&=~(m|g));var vt=[r,o,M,je,Ue,ot,He,J,ee,we],at=u.apply(t,vt);return bc(r)&&kh(at,vt),at.placeholder=_,Hh(at,r,o)}function _c(r){var o=en[r];return function(u,_){if(u=Zn(u),_=_==null?0:pn(gt(_),292),_&&Hf(u)){var M=(Rt(u)+"e").split("e"),C=o(M[0]+"e"+(+M[1]+_));return M=(Rt(C)+"e").split("e"),+(M[0]+"e"+(+M[1]-_))}return o(u)}}var Wv=os&&1/Yo(new os([,-0]))[1]==ae?function(r){return new os(r)}:zc;function Ph(r){return function(o){var u=mn(o);return u==X?Yl(o):u==R?a_(o):Qg(o,r(o))}}function Ii(r,o,u,_,M,C,V,J){var ee=o&g;if(!ee&&typeof r!="function")throw new Wn(c);var we=_?_.length:0;if(we||(o&=~(k|G),_=M=t),V=V===t?V:tn(gt(V),0),J=J===t?J:gt(J),we-=M?M.length:0,o&G){var Ce=_,Ue=M;_=M=t}var He=ee?t:yc(r),je=[r,o,u,_,M,Ce,Ue,C,V,J];if(He&&s0(je,He),r=je[0],o=je[1],u=je[2],_=je[3],M=je[4],J=je[9]=je[9]===t?ee?0:r.length:tn(je[9]-we,0),!J&&o&(y|A)&&(o&=~(y|A)),!o||o==m)var ot=kv(r,o,u);else o==y||o==A?ot=Hv(r,o,J):(o==k||o==(m|k))&&!M.length?ot=Vv(r,o,u,_):ot=ma.apply(t,je);var vt=He?uh:kh;return Hh(vt(ot,je),r,o)}function Lh(r,o,u,_){return r===t||si(r,ss[u])&&!It.call(_,u)?o:r}function Ih(r,o,u,_,M,C){return Wt(r)&&Wt(o)&&(C.set(o,r),fa(r,o,t,Ih,C),C.delete(o)),r}function Xv(r){return go(r)?t:r}function Dh(r,o,u,_,M,C){var V=u&S,J=r.length,ee=o.length;if(J!=ee&&!(V&&ee>J))return!1;var we=C.get(r),Ce=C.get(o);if(we&&Ce)return we==o&&Ce==r;var Ue=-1,He=!0,je=u&E?new Mr:t;for(C.set(r,o),C.set(o,r);++Ue<J;){var ot=r[Ue],vt=o[Ue];if(_)var at=V?_(vt,ot,Ue,o,r,C):_(ot,vt,Ue,r,o,C);if(at!==t){if(at)continue;He=!1;break}if(je){if(!kl(o,function(Et,Tt){if(!to(je,Tt)&&(ot===Et||M(ot,Et,u,_,C)))return je.push(Tt)})){He=!1;break}}else if(!(ot===vt||M(ot,vt,u,_,C))){He=!1;break}}return C.delete(r),C.delete(o),He}function qv(r,o,u,_,M,C,V){switch(u){case $e:if(r.byteLength!=o.byteLength||r.byteOffset!=o.byteOffset)return!1;r=r.buffer,o=o.buffer;case et:return!(r.byteLength!=o.byteLength||!C(new Qo(r),new Qo(o)));case ie:case de:case te:return si(+r,+o);case Se:return r.name==o.name&&r.message==o.message;case De:case T:return r==o+"";case X:var J=Yl;case R:var ee=_&S;if(J||(J=Yo),r.size!=o.size&&!ee)return!1;var we=V.get(r);if(we)return we==o;_|=E,V.set(r,o);var Ce=Dh(J(r),J(o),_,M,C,V);return V.delete(r),Ce;case ue:if(oo)return oo.call(r)==oo.call(o)}return!1}function Yv(r,o,u,_,M,C){var V=u&S,J=vc(r),ee=J.length,we=vc(o),Ce=we.length;if(ee!=Ce&&!V)return!1;for(var Ue=ee;Ue--;){var He=J[Ue];if(!(V?He in o:It.call(o,He)))return!1}var je=C.get(r),ot=C.get(o);if(je&&ot)return je==o&&ot==r;var vt=!0;C.set(r,o),C.set(o,r);for(var at=V;++Ue<ee;){He=J[Ue];var Et=r[He],Tt=o[He];if(_)var Fn=V?_(Tt,Et,He,o,r,C):_(Et,Tt,He,r,o,C);if(!(Fn===t?Et===Tt||M(Et,Tt,u,_,C):Fn)){vt=!1;break}at||(at=He=="constructor")}if(vt&&!at){var Sn=r.constructor,Bn=o.constructor;Sn!=Bn&&"constructor"in r&&"constructor"in o&&!(typeof Sn=="function"&&Sn instanceof Sn&&typeof Bn=="function"&&Bn instanceof Bn)&&(vt=!1)}return C.delete(r),C.delete(o),vt}function Di(r){return Ac(zh(r,t,$h),r+"")}function vc(r){return Qf(r,on,Ec)}function xc(r){return Qf(r,Pn,Uh)}var yc=sa?function(r){return sa.get(r)}:zc;function xa(r){for(var o=r.name+"",u=as[o],_=It.call(as,o)?u.length:0;_--;){var M=u[_],C=M.func;if(C==null||C==r)return M.name}return o}function fs(r){var o=It.call(w,"placeholder")?w:r;return o.placeholder}function it(){var r=w.iteratee||Fc;return r=r===Fc?nh:r,arguments.length?r(arguments[0],arguments[1]):r}function ya(r,o){var u=r.__data__;return t0(o)?u[typeof o=="string"?"string":"hash"]:u.map}function Sc(r){for(var o=on(r),u=o.length;u--;){var _=o[u],M=r[_];o[u]=[_,M,Fh(M)]}return o}function Ar(r,o){var u=r_(r,o);return th(u)?u:t}function $v(r){var o=It.call(r,Sr),u=r[Sr];try{r[Sr]=t;var _=!0}catch{}var M=Jo.call(r);return _&&(o?r[Sr]=u:delete r[Sr]),M}var Ec=Zl?function(r){return r==null?[]:(r=Ot(r),$i(Zl(r),function(o){return Gf.call(r,o)}))}:Gc,Uh=Zl?function(r){for(var o=[];r;)Zi(o,Ec(r)),r=ea(r);return o}:Gc,mn=xn;(Kl&&mn(new Kl(new ArrayBuffer(1)))!=$e||io&&mn(new io)!=X||Jl&&mn(Jl.resolve())!=q||os&&mn(new os)!=R||ro&&mn(new ro)!=Le)&&(mn=function(r){var o=xn(r),u=o==ye?r.constructor:t,_=u?wr(u):"";if(_)switch(_){case P_:return $e;case L_:return X;case I_:return q;case D_:return R;case U_:return Le}return o});function Zv(r,o,u){for(var _=-1,M=u.length;++_<M;){var C=u[_],V=C.size;switch(C.type){case"drop":r+=V;break;case"dropRight":o-=V;break;case"take":o=pn(o,r+V);break;case"takeRight":r=tn(r,o-V);break}}return{start:r,end:o}}function Kv(r){var o=r.match(Go);return o?o[1].split(Kr):[]}function Nh(r,o,u){o=er(o,r);for(var _=-1,M=o.length,C=!1;++_<M;){var V=xi(o[_]);if(!(C=r!=null&&u(r,V)))break;r=r[V]}return C||++_!=M?C:(M=r==null?0:r.length,!!M&&wa(M)&&Ui(V,M)&&(dt(r)||Cr(r)))}function Jv(r){var o=r.length,u=new r.constructor(o);return o&&typeof r[0]=="string"&&It.call(r,"index")&&(u.index=r.index,u.input=r.input),u}function Oh(r){return typeof r.constructor=="function"&&!po(r)?ls(ea(r)):{}}function jv(r,o,u){var _=r.constructor;switch(o){case et:return mc(r);case ie:case de:return new _(+r);case $e:return Nv(r,u);case Be:case ze:case tt:case Oe:case Dt:case ct:case Qe:case qe:case Ke:return vh(r,u);case X:return new _;case te:case T:return new _(r);case De:return Ov(r);case R:return new _;case ue:return Fv(r)}}function Qv(r,o){var u=o.length;if(!u)return r;var _=u-1;return o[_]=(u>1?"& ":"")+o[_],o=o.join(u>2?", ":" "),r.replace(Zr,`{
/* [wrapped with `+o+`] */
`)}function e0(r){return dt(r)||Cr(r)||!!(kf&&r&&r[kf])}function Ui(r,o){var u=typeof r;return o=o??K,!!o&&(u=="number"||u!="symbol"&&he.test(r))&&r>-1&&r%1==0&&r<o}function yn(r,o,u){if(!Wt(u))return!1;var _=typeof o;return(_=="number"?Rn(u)&&Ui(o,u.length):_=="string"&&o in u)?si(u[o],r):!1}function Mc(r,o){if(dt(r))return!1;var u=typeof r;return u=="number"||u=="symbol"||u=="boolean"||r==null||On(r)?!0:kt.test(r)||!Pt.test(r)||o!=null&&r in Ot(o)}function t0(r){var o=typeof r;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?r!=="__proto__":r===null}function bc(r){var o=xa(r),u=w[o];if(typeof u!="function"||!(o in Mt.prototype))return!1;if(r===u)return!0;var _=yc(u);return!!_&&r===_[0]}function n0(r){return!!Ff&&Ff in r}var i0=Zo?Ni:kc;function po(r){var o=r&&r.constructor,u=typeof o=="function"&&o.prototype||ss;return r===u}function Fh(r){return r===r&&!Wt(r)}function Bh(r,o){return function(u){return u==null?!1:u[r]===o&&(o!==t||r in Ot(u))}}function r0(r){var o=Ta(r,function(_){return u.size===h&&u.clear(),_}),u=o.cache;return o}function s0(r,o){var u=r[1],_=o[1],M=u|_,C=M<(m|g|U),V=_==U&&u==y||_==U&&u==W&&r[7].length<=o[8]||_==(U|W)&&o[7].length<=o[8]&&u==y;if(!(C||V))return r;_&m&&(r[2]=o[2],M|=u&m?0:P);var J=o[3];if(J){var ee=r[3];r[3]=ee?yh(ee,J,o[4]):J,r[4]=ee?Ki(r[3],d):o[4]}return J=o[5],J&&(ee=r[5],r[5]=ee?Sh(ee,J,o[6]):J,r[6]=ee?Ki(r[5],d):o[6]),J=o[7],J&&(r[7]=J),_&U&&(r[8]=r[8]==null?o[8]:pn(r[8],o[8])),r[9]==null&&(r[9]=o[9]),r[0]=o[0],r[1]=M,r}function o0(r){var o=[];if(r!=null)for(var u in Ot(r))o.push(u);return o}function a0(r){return Jo.call(r)}function zh(r,o,u){return o=tn(o===t?r.length-1:o,0),function(){for(var _=arguments,M=-1,C=tn(_.length-o,0),V=_e(C);++M<C;)V[M]=_[o+M];M=-1;for(var J=_e(o+1);++M<o;)J[M]=_[M];return J[o]=u(V),Dn(r,this,J)}}function Gh(r,o){return o.length<2?r:Tr(r,Yn(o,0,-1))}function l0(r,o){for(var u=r.length,_=pn(o.length,u),M=Cn(r);_--;){var C=o[_];r[_]=Ui(C,u)?M[C]:t}return r}function Tc(r,o){if(!(o==="constructor"&&typeof r[o]=="function")&&o!="__proto__")return r[o]}var kh=Vh(uh),mo=M_||function(r,o){return cn.setTimeout(r,o)},Ac=Vh(Lv);function Hh(r,o,u){var _=o+"";return Ac(r,Qv(_,c0(Kv(_),u)))}function Vh(r){var o=0,u=0;return function(){var _=w_(),M=Te-(_-u);if(u=_,M>0){if(++o>=pe)return arguments[0]}else o=0;return r.apply(t,arguments)}}function Sa(r,o){var u=-1,_=r.length,M=_-1;for(o=o===t?_:o;++u<o;){var C=lc(u,M),V=r[C];r[C]=r[u],r[u]=V}return r.length=o,r}var Wh=r0(function(r){var o=[];return r.charCodeAt(0)===46&&o.push(""),r.replace(At,function(u,_,M,C){o.push(M?C.replace(Il,"$1"):_||u)}),o});function xi(r){if(typeof r=="string"||On(r))return r;var o=r+"";return o=="0"&&1/r==-ae?"-0":o}function wr(r){if(r!=null){try{return Ko.call(r)}catch{}try{return r+""}catch{}}return""}function c0(r,o){return Vn(z,function(u){var _="_."+u[0];o&u[1]&&!Xo(r,_)&&r.push(_)}),r.sort()}function Xh(r){if(r instanceof Mt)return r.clone();var o=new Xn(r.__wrapped__,r.__chain__);return o.__actions__=Cn(r.__actions__),o.__index__=r.__index__,o.__values__=r.__values__,o}function u0(r,o,u){(u?yn(r,o,u):o===t)?o=1:o=tn(gt(o),0);var _=r==null?0:r.length;if(!_||o<1)return[];for(var M=0,C=0,V=_e(ia(_/o));M<_;)V[C++]=Yn(r,M,M+=o);return V}function f0(r){for(var o=-1,u=r==null?0:r.length,_=0,M=[];++o<u;){var C=r[o];C&&(M[_++]=C)}return M}function h0(){var r=arguments.length;if(!r)return[];for(var o=_e(r-1),u=arguments[0],_=r;_--;)o[_-1]=arguments[_];return Zi(dt(u)?Cn(u):[u],un(o,1))}var d0=yt(function(r,o){return Zt(r)?lo(r,un(o,1,Zt,!0)):[]}),p0=yt(function(r,o){var u=$n(o);return Zt(u)&&(u=t),Zt(r)?lo(r,un(o,1,Zt,!0),it(u,2)):[]}),m0=yt(function(r,o){var u=$n(o);return Zt(u)&&(u=t),Zt(r)?lo(r,un(o,1,Zt,!0),t,u):[]});function g0(r,o,u){var _=r==null?0:r.length;return _?(o=u||o===t?1:gt(o),Yn(r,o<0?0:o,_)):[]}function _0(r,o,u){var _=r==null?0:r.length;return _?(o=u||o===t?1:gt(o),o=_-o,Yn(r,0,o<0?0:o)):[]}function v0(r,o){return r&&r.length?da(r,it(o,3),!0,!0):[]}function x0(r,o){return r&&r.length?da(r,it(o,3),!0):[]}function y0(r,o,u,_){var M=r==null?0:r.length;return M?(u&&typeof u!="number"&&yn(r,o,u)&&(u=0,_=M),hv(r,o,u,_)):[]}function qh(r,o,u){var _=r==null?0:r.length;if(!_)return-1;var M=u==null?0:gt(u);return M<0&&(M=tn(_+M,0)),qo(r,it(o,3),M)}function Yh(r,o,u){var _=r==null?0:r.length;if(!_)return-1;var M=_-1;return u!==t&&(M=gt(u),M=u<0?tn(_+M,0):pn(M,_-1)),qo(r,it(o,3),M,!0)}function $h(r){var o=r==null?0:r.length;return o?un(r,1):[]}function S0(r){var o=r==null?0:r.length;return o?un(r,ae):[]}function E0(r,o){var u=r==null?0:r.length;return u?(o=o===t?1:gt(o),un(r,o)):[]}function M0(r){for(var o=-1,u=r==null?0:r.length,_={};++o<u;){var M=r[o];_[M[0]]=M[1]}return _}function Zh(r){return r&&r.length?r[0]:t}function b0(r,o,u){var _=r==null?0:r.length;if(!_)return-1;var M=u==null?0:gt(u);return M<0&&(M=tn(_+M,0)),ts(r,o,M)}function T0(r){var o=r==null?0:r.length;return o?Yn(r,0,-1):[]}var A0=yt(function(r){var o=Vt(r,dc);return o.length&&o[0]===r[0]?ic(o):[]}),w0=yt(function(r){var o=$n(r),u=Vt(r,dc);return o===$n(u)?o=t:u.pop(),u.length&&u[0]===r[0]?ic(u,it(o,2)):[]}),C0=yt(function(r){var o=$n(r),u=Vt(r,dc);return o=typeof o=="function"?o:t,o&&u.pop(),u.length&&u[0]===r[0]?ic(u,t,o):[]});function R0(r,o){return r==null?"":T_.call(r,o)}function $n(r){var o=r==null?0:r.length;return o?r[o-1]:t}function P0(r,o,u){var _=r==null?0:r.length;if(!_)return-1;var M=_;return u!==t&&(M=gt(u),M=M<0?tn(_+M,0):pn(M,_-1)),o===o?c_(r,o,M):qo(r,Rf,M,!0)}function L0(r,o){return r&&r.length?oh(r,gt(o)):t}var I0=yt(Kh);function Kh(r,o){return r&&r.length&&o&&o.length?ac(r,o):r}function D0(r,o,u){return r&&r.length&&o&&o.length?ac(r,o,it(u,2)):r}function U0(r,o,u){return r&&r.length&&o&&o.length?ac(r,o,t,u):r}var N0=Di(function(r,o){var u=r==null?0:r.length,_=Ql(r,o);return ch(r,Vt(o,function(M){return Ui(M,u)?+M:M}).sort(xh)),_});function O0(r,o){var u=[];if(!(r&&r.length))return u;var _=-1,M=[],C=r.length;for(o=it(o,3);++_<C;){var V=r[_];o(V,_,r)&&(u.push(V),M.push(_))}return ch(r,M),u}function wc(r){return r==null?r:R_.call(r)}function F0(r,o,u){var _=r==null?0:r.length;return _?(u&&typeof u!="number"&&yn(r,o,u)?(o=0,u=_):(o=o==null?0:gt(o),u=u===t?_:gt(u)),Yn(r,o,u)):[]}function B0(r,o){return ha(r,o)}function z0(r,o,u){return uc(r,o,it(u,2))}function G0(r,o){var u=r==null?0:r.length;if(u){var _=ha(r,o);if(_<u&&si(r[_],o))return _}return-1}function k0(r,o){return ha(r,o,!0)}function H0(r,o,u){return uc(r,o,it(u,2),!0)}function V0(r,o){var u=r==null?0:r.length;if(u){var _=ha(r,o,!0)-1;if(si(r[_],o))return _}return-1}function W0(r){return r&&r.length?fh(r):[]}function X0(r,o){return r&&r.length?fh(r,it(o,2)):[]}function q0(r){var o=r==null?0:r.length;return o?Yn(r,1,o):[]}function Y0(r,o,u){return r&&r.length?(o=u||o===t?1:gt(o),Yn(r,0,o<0?0:o)):[]}function $0(r,o,u){var _=r==null?0:r.length;return _?(o=u||o===t?1:gt(o),o=_-o,Yn(r,o<0?0:o,_)):[]}function Z0(r,o){return r&&r.length?da(r,it(o,3),!1,!0):[]}function K0(r,o){return r&&r.length?da(r,it(o,3)):[]}var J0=yt(function(r){return Qi(un(r,1,Zt,!0))}),j0=yt(function(r){var o=$n(r);return Zt(o)&&(o=t),Qi(un(r,1,Zt,!0),it(o,2))}),Q0=yt(function(r){var o=$n(r);return o=typeof o=="function"?o:t,Qi(un(r,1,Zt,!0),t,o)});function ex(r){return r&&r.length?Qi(r):[]}function tx(r,o){return r&&r.length?Qi(r,it(o,2)):[]}function nx(r,o){return o=typeof o=="function"?o:t,r&&r.length?Qi(r,t,o):[]}function Cc(r){if(!(r&&r.length))return[];var o=0;return r=$i(r,function(u){if(Zt(u))return o=tn(u.length,o),!0}),Xl(o,function(u){return Vt(r,Hl(u))})}function Jh(r,o){if(!(r&&r.length))return[];var u=Cc(r);return o==null?u:Vt(u,function(_){return Dn(o,t,_)})}var ix=yt(function(r,o){return Zt(r)?lo(r,o):[]}),rx=yt(function(r){return hc($i(r,Zt))}),sx=yt(function(r){var o=$n(r);return Zt(o)&&(o=t),hc($i(r,Zt),it(o,2))}),ox=yt(function(r){var o=$n(r);return o=typeof o=="function"?o:t,hc($i(r,Zt),t,o)}),ax=yt(Cc);function lx(r,o){return mh(r||[],o||[],ao)}function cx(r,o){return mh(r||[],o||[],fo)}var ux=yt(function(r){var o=r.length,u=o>1?r[o-1]:t;return u=typeof u=="function"?(r.pop(),u):t,Jh(r,u)});function jh(r){var o=w(r);return o.__chain__=!0,o}function fx(r,o){return o(r),r}function Ea(r,o){return o(r)}var hx=Di(function(r){var o=r.length,u=o?r[0]:0,_=this.__wrapped__,M=function(C){return Ql(C,r)};return o>1||this.__actions__.length||!(_ instanceof Mt)||!Ui(u)?this.thru(M):(_=_.slice(u,+u+(o?1:0)),_.__actions__.push({func:Ea,args:[M],thisArg:t}),new Xn(_,this.__chain__).thru(function(C){return o&&!C.length&&C.push(t),C}))});function dx(){return jh(this)}function px(){return new Xn(this.value(),this.__chain__)}function mx(){this.__values__===t&&(this.__values__=hd(this.value()));var r=this.__index__>=this.__values__.length,o=r?t:this.__values__[this.__index__++];return{done:r,value:o}}function gx(){return this}function _x(r){for(var o,u=this;u instanceof aa;){var _=Xh(u);_.__index__=0,_.__values__=t,o?M.__wrapped__=_:o=_;var M=_;u=u.__wrapped__}return M.__wrapped__=r,o}function vx(){var r=this.__wrapped__;if(r instanceof Mt){var o=r;return this.__actions__.length&&(o=new Mt(this)),o=o.reverse(),o.__actions__.push({func:Ea,args:[wc],thisArg:t}),new Xn(o,this.__chain__)}return this.thru(wc)}function xx(){return ph(this.__wrapped__,this.__actions__)}var yx=pa(function(r,o,u){It.call(r,u)?++r[u]:Li(r,u,1)});function Sx(r,o,u){var _=dt(r)?wf:fv;return u&&yn(r,o,u)&&(o=t),_(r,it(o,3))}function Ex(r,o){var u=dt(r)?$i:Jf;return u(r,it(o,3))}var Mx=Th(qh),bx=Th(Yh);function Tx(r,o){return un(Ma(r,o),1)}function Ax(r,o){return un(Ma(r,o),ae)}function wx(r,o,u){return u=u===t?1:gt(u),un(Ma(r,o),u)}function Qh(r,o){var u=dt(r)?Vn:ji;return u(r,it(o,3))}function ed(r,o){var u=dt(r)?qg:Kf;return u(r,it(o,3))}var Cx=pa(function(r,o,u){It.call(r,u)?r[u].push(o):Li(r,u,[o])});function Rx(r,o,u,_){r=Rn(r)?r:ds(r),u=u&&!_?gt(u):0;var M=r.length;return u<0&&(u=tn(M+u,0)),Ca(r)?u<=M&&r.indexOf(o,u)>-1:!!M&&ts(r,o,u)>-1}var Px=yt(function(r,o,u){var _=-1,M=typeof o=="function",C=Rn(r)?_e(r.length):[];return ji(r,function(V){C[++_]=M?Dn(o,V,u):co(V,o,u)}),C}),Lx=pa(function(r,o,u){Li(r,u,o)});function Ma(r,o){var u=dt(r)?Vt:ih;return u(r,it(o,3))}function Ix(r,o,u,_){return r==null?[]:(dt(o)||(o=o==null?[]:[o]),u=_?t:u,dt(u)||(u=u==null?[]:[u]),ah(r,o,u))}var Dx=pa(function(r,o,u){r[u?0:1].push(o)},function(){return[[],[]]});function Ux(r,o,u){var _=dt(r)?Gl:Lf,M=arguments.length<3;return _(r,it(o,4),u,M,ji)}function Nx(r,o,u){var _=dt(r)?Yg:Lf,M=arguments.length<3;return _(r,it(o,4),u,M,Kf)}function Ox(r,o){var u=dt(r)?$i:Jf;return u(r,Aa(it(o,3)))}function Fx(r){var o=dt(r)?qf:Rv;return o(r)}function Bx(r,o,u){(u?yn(r,o,u):o===t)?o=1:o=gt(o);var _=dt(r)?ov:Pv;return _(r,o)}function zx(r){var o=dt(r)?av:Iv;return o(r)}function Gx(r){if(r==null)return 0;if(Rn(r))return Ca(r)?is(r):r.length;var o=mn(r);return o==X||o==R?r.size:sc(r).length}function kx(r,o,u){var _=dt(r)?kl:Dv;return u&&yn(r,o,u)&&(o=t),_(r,it(o,3))}var Hx=yt(function(r,o){if(r==null)return[];var u=o.length;return u>1&&yn(r,o[0],o[1])?o=[]:u>2&&yn(o[0],o[1],o[2])&&(o=[o[0]]),ah(r,un(o,1),[])}),ba=E_||function(){return cn.Date.now()};function Vx(r,o){if(typeof o!="function")throw new Wn(c);return r=gt(r),function(){if(--r<1)return o.apply(this,arguments)}}function td(r,o,u){return o=u?t:o,o=r&&o==null?r.length:o,Ii(r,U,t,t,t,t,o)}function nd(r,o){var u;if(typeof o!="function")throw new Wn(c);return r=gt(r),function(){return--r>0&&(u=o.apply(this,arguments)),r<=1&&(o=t),u}}var Rc=yt(function(r,o,u){var _=m;if(u.length){var M=Ki(u,fs(Rc));_|=k}return Ii(r,_,o,u,M)}),id=yt(function(r,o,u){var _=m|g;if(u.length){var M=Ki(u,fs(id));_|=k}return Ii(o,_,r,u,M)});function rd(r,o,u){o=u?t:o;var _=Ii(r,y,t,t,t,t,t,o);return _.placeholder=rd.placeholder,_}function sd(r,o,u){o=u?t:o;var _=Ii(r,A,t,t,t,t,t,o);return _.placeholder=sd.placeholder,_}function od(r,o,u){var _,M,C,V,J,ee,we=0,Ce=!1,Ue=!1,He=!0;if(typeof r!="function")throw new Wn(c);o=Zn(o)||0,Wt(u)&&(Ce=!!u.leading,Ue="maxWait"in u,C=Ue?tn(Zn(u.maxWait)||0,o):C,He="trailing"in u?!!u.trailing:He);function je(Kt){var oi=_,Fi=M;return _=M=t,we=Kt,V=r.apply(Fi,oi),V}function ot(Kt){return we=Kt,J=mo(Et,o),Ce?je(Kt):V}function vt(Kt){var oi=Kt-ee,Fi=Kt-we,Td=o-oi;return Ue?pn(Td,C-Fi):Td}function at(Kt){var oi=Kt-ee,Fi=Kt-we;return ee===t||oi>=o||oi<0||Ue&&Fi>=C}function Et(){var Kt=ba();if(at(Kt))return Tt(Kt);J=mo(Et,vt(Kt))}function Tt(Kt){return J=t,He&&_?je(Kt):(_=M=t,V)}function Fn(){J!==t&&gh(J),we=0,_=ee=M=J=t}function Sn(){return J===t?V:Tt(ba())}function Bn(){var Kt=ba(),oi=at(Kt);if(_=arguments,M=this,ee=Kt,oi){if(J===t)return ot(ee);if(Ue)return gh(J),J=mo(Et,o),je(ee)}return J===t&&(J=mo(Et,o)),V}return Bn.cancel=Fn,Bn.flush=Sn,Bn}var Wx=yt(function(r,o){return Zf(r,1,o)}),Xx=yt(function(r,o,u){return Zf(r,Zn(o)||0,u)});function qx(r){return Ii(r,fe)}function Ta(r,o){if(typeof r!="function"||o!=null&&typeof o!="function")throw new Wn(c);var u=function(){var _=arguments,M=o?o.apply(this,_):_[0],C=u.cache;if(C.has(M))return C.get(M);var V=r.apply(this,_);return u.cache=C.set(M,V)||C,V};return u.cache=new(Ta.Cache||Pi),u}Ta.Cache=Pi;function Aa(r){if(typeof r!="function")throw new Wn(c);return function(){var o=arguments;switch(o.length){case 0:return!r.call(this);case 1:return!r.call(this,o[0]);case 2:return!r.call(this,o[0],o[1]);case 3:return!r.call(this,o[0],o[1],o[2])}return!r.apply(this,o)}}function Yx(r){return nd(2,r)}var $x=Uv(function(r,o){o=o.length==1&&dt(o[0])?Vt(o[0],Un(it())):Vt(un(o,1),Un(it()));var u=o.length;return yt(function(_){for(var M=-1,C=pn(_.length,u);++M<C;)_[M]=o[M].call(this,_[M]);return Dn(r,this,_)})}),Pc=yt(function(r,o){var u=Ki(o,fs(Pc));return Ii(r,k,t,o,u)}),ad=yt(function(r,o){var u=Ki(o,fs(ad));return Ii(r,G,t,o,u)}),Zx=Di(function(r,o){return Ii(r,W,t,t,t,o)});function Kx(r,o){if(typeof r!="function")throw new Wn(c);return o=o===t?o:gt(o),yt(r,o)}function Jx(r,o){if(typeof r!="function")throw new Wn(c);return o=o==null?0:tn(gt(o),0),yt(function(u){var _=u[o],M=tr(u,0,o);return _&&Zi(M,_),Dn(r,this,M)})}function jx(r,o,u){var _=!0,M=!0;if(typeof r!="function")throw new Wn(c);return Wt(u)&&(_="leading"in u?!!u.leading:_,M="trailing"in u?!!u.trailing:M),od(r,o,{leading:_,maxWait:o,trailing:M})}function Qx(r){return td(r,1)}function ey(r,o){return Pc(pc(o),r)}function ty(){if(!arguments.length)return[];var r=arguments[0];return dt(r)?r:[r]}function ny(r){return qn(r,x)}function iy(r,o){return o=typeof o=="function"?o:t,qn(r,x,o)}function ry(r){return qn(r,p|x)}function sy(r,o){return o=typeof o=="function"?o:t,qn(r,p|x,o)}function oy(r,o){return o==null||$f(r,o,on(o))}function si(r,o){return r===o||r!==r&&o!==o}var ay=va(nc),ly=va(function(r,o){return r>=o}),Cr=eh(function(){return arguments}())?eh:function(r){return Yt(r)&&It.call(r,"callee")&&!Gf.call(r,"callee")},dt=_e.isArray,cy=Sf?Un(Sf):_v;function Rn(r){return r!=null&&wa(r.length)&&!Ni(r)}function Zt(r){return Yt(r)&&Rn(r)}function uy(r){return r===!0||r===!1||Yt(r)&&xn(r)==ie}var nr=b_||kc,fy=Ef?Un(Ef):vv;function hy(r){return Yt(r)&&r.nodeType===1&&!go(r)}function dy(r){if(r==null)return!0;if(Rn(r)&&(dt(r)||typeof r=="string"||typeof r.splice=="function"||nr(r)||hs(r)||Cr(r)))return!r.length;var o=mn(r);if(o==X||o==R)return!r.size;if(po(r))return!sc(r).length;for(var u in r)if(It.call(r,u))return!1;return!0}function py(r,o){return uo(r,o)}function my(r,o,u){u=typeof u=="function"?u:t;var _=u?u(r,o):t;return _===t?uo(r,o,t,u):!!_}function Lc(r){if(!Yt(r))return!1;var o=xn(r);return o==Se||o==se||typeof r.message=="string"&&typeof r.name=="string"&&!go(r)}function gy(r){return typeof r=="number"&&Hf(r)}function Ni(r){if(!Wt(r))return!1;var o=xn(r);return o==D||o==ce||o==L||o==F}function ld(r){return typeof r=="number"&&r==gt(r)}function wa(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=K}function Wt(r){var o=typeof r;return r!=null&&(o=="object"||o=="function")}function Yt(r){return r!=null&&typeof r=="object"}var cd=Mf?Un(Mf):yv;function _y(r,o){return r===o||rc(r,o,Sc(o))}function vy(r,o,u){return u=typeof u=="function"?u:t,rc(r,o,Sc(o),u)}function xy(r){return ud(r)&&r!=+r}function yy(r){if(i0(r))throw new ft(a);return th(r)}function Sy(r){return r===null}function Ey(r){return r==null}function ud(r){return typeof r=="number"||Yt(r)&&xn(r)==te}function go(r){if(!Yt(r)||xn(r)!=ye)return!1;var o=ea(r);if(o===null)return!0;var u=It.call(o,"constructor")&&o.constructor;return typeof u=="function"&&u instanceof u&&Ko.call(u)==v_}var Ic=bf?Un(bf):Sv;function My(r){return ld(r)&&r>=-K&&r<=K}var fd=Tf?Un(Tf):Ev;function Ca(r){return typeof r=="string"||!dt(r)&&Yt(r)&&xn(r)==T}function On(r){return typeof r=="symbol"||Yt(r)&&xn(r)==ue}var hs=Af?Un(Af):Mv;function by(r){return r===t}function Ty(r){return Yt(r)&&mn(r)==Le}function Ay(r){return Yt(r)&&xn(r)==Ie}var wy=va(oc),Cy=va(function(r,o){return r<=o});function hd(r){if(!r)return[];if(Rn(r))return Ca(r)?ii(r):Cn(r);if(no&&r[no])return o_(r[no]());var o=mn(r),u=o==X?Yl:o==R?Yo:ds;return u(r)}function Oi(r){if(!r)return r===0?r:0;if(r=Zn(r),r===ae||r===-ae){var o=r<0?-1:1;return o*Ee}return r===r?r:0}function gt(r){var o=Oi(r),u=o%1;return o===o?u?o-u:o:0}function dd(r){return r?br(gt(r),0,Re):0}function Zn(r){if(typeof r=="number")return r;if(On(r))return Me;if(Wt(r)){var o=typeof r.valueOf=="function"?r.valueOf():r;r=Wt(o)?o+"":o}if(typeof r!="string")return r===0?r:+r;r=If(r);var u=re.test(r);return u||ve.test(r)?Vg(r.slice(2),u?2:8):N.test(r)?Me:+r}function pd(r){return vi(r,Pn(r))}function Ry(r){return r?br(gt(r),-K,K):r===0?r:0}function Rt(r){return r==null?"":Nn(r)}var Py=cs(function(r,o){if(po(o)||Rn(o)){vi(o,on(o),r);return}for(var u in o)It.call(o,u)&&ao(r,u,o[u])}),md=cs(function(r,o){vi(o,Pn(o),r)}),Ra=cs(function(r,o,u,_){vi(o,Pn(o),r,_)}),Ly=cs(function(r,o,u,_){vi(o,on(o),r,_)}),Iy=Di(Ql);function Dy(r,o){var u=ls(r);return o==null?u:Yf(u,o)}var Uy=yt(function(r,o){r=Ot(r);var u=-1,_=o.length,M=_>2?o[2]:t;for(M&&yn(o[0],o[1],M)&&(_=1);++u<_;)for(var C=o[u],V=Pn(C),J=-1,ee=V.length;++J<ee;){var we=V[J],Ce=r[we];(Ce===t||si(Ce,ss[we])&&!It.call(r,we))&&(r[we]=C[we])}return r}),Ny=yt(function(r){return r.push(t,Ih),Dn(gd,t,r)});function Oy(r,o){return Cf(r,it(o,3),_i)}function Fy(r,o){return Cf(r,it(o,3),tc)}function By(r,o){return r==null?r:ec(r,it(o,3),Pn)}function zy(r,o){return r==null?r:jf(r,it(o,3),Pn)}function Gy(r,o){return r&&_i(r,it(o,3))}function ky(r,o){return r&&tc(r,it(o,3))}function Hy(r){return r==null?[]:ua(r,on(r))}function Vy(r){return r==null?[]:ua(r,Pn(r))}function Dc(r,o,u){var _=r==null?t:Tr(r,o);return _===t?u:_}function Wy(r,o){return r!=null&&Nh(r,o,dv)}function Uc(r,o){return r!=null&&Nh(r,o,pv)}var Xy=wh(function(r,o,u){o!=null&&typeof o.toString!="function"&&(o=Jo.call(o)),r[o]=u},Oc(Ln)),qy=wh(function(r,o,u){o!=null&&typeof o.toString!="function"&&(o=Jo.call(o)),It.call(r,o)?r[o].push(u):r[o]=[u]},it),Yy=yt(co);function on(r){return Rn(r)?Xf(r):sc(r)}function Pn(r){return Rn(r)?Xf(r,!0):bv(r)}function $y(r,o){var u={};return o=it(o,3),_i(r,function(_,M,C){Li(u,o(_,M,C),_)}),u}function Zy(r,o){var u={};return o=it(o,3),_i(r,function(_,M,C){Li(u,M,o(_,M,C))}),u}var Ky=cs(function(r,o,u){fa(r,o,u)}),gd=cs(function(r,o,u,_){fa(r,o,u,_)}),Jy=Di(function(r,o){var u={};if(r==null)return u;var _=!1;o=Vt(o,function(C){return C=er(C,r),_||(_=C.length>1),C}),vi(r,xc(r),u),_&&(u=qn(u,p|v|x,Xv));for(var M=o.length;M--;)fc(u,o[M]);return u});function jy(r,o){return _d(r,Aa(it(o)))}var Qy=Di(function(r,o){return r==null?{}:Av(r,o)});function _d(r,o){if(r==null)return{};var u=Vt(xc(r),function(_){return[_]});return o=it(o),lh(r,u,function(_,M){return o(_,M[0])})}function eS(r,o,u){o=er(o,r);var _=-1,M=o.length;for(M||(M=1,r=t);++_<M;){var C=r==null?t:r[xi(o[_])];C===t&&(_=M,C=u),r=Ni(C)?C.call(r):C}return r}function tS(r,o,u){return r==null?r:fo(r,o,u)}function nS(r,o,u,_){return _=typeof _=="function"?_:t,r==null?r:fo(r,o,u,_)}var vd=Ph(on),xd=Ph(Pn);function iS(r,o,u){var _=dt(r),M=_||nr(r)||hs(r);if(o=it(o,4),u==null){var C=r&&r.constructor;M?u=_?new C:[]:Wt(r)?u=Ni(C)?ls(ea(r)):{}:u={}}return(M?Vn:_i)(r,function(V,J,ee){return o(u,V,J,ee)}),u}function rS(r,o){return r==null?!0:fc(r,o)}function sS(r,o,u){return r==null?r:dh(r,o,pc(u))}function oS(r,o,u,_){return _=typeof _=="function"?_:t,r==null?r:dh(r,o,pc(u),_)}function ds(r){return r==null?[]:ql(r,on(r))}function aS(r){return r==null?[]:ql(r,Pn(r))}function lS(r,o,u){return u===t&&(u=o,o=t),u!==t&&(u=Zn(u),u=u===u?u:0),o!==t&&(o=Zn(o),o=o===o?o:0),br(Zn(r),o,u)}function cS(r,o,u){return o=Oi(o),u===t?(u=o,o=0):u=Oi(u),r=Zn(r),mv(r,o,u)}function uS(r,o,u){if(u&&typeof u!="boolean"&&yn(r,o,u)&&(o=u=t),u===t&&(typeof o=="boolean"?(u=o,o=t):typeof r=="boolean"&&(u=r,r=t)),r===t&&o===t?(r=0,o=1):(r=Oi(r),o===t?(o=r,r=0):o=Oi(o)),r>o){var _=r;r=o,o=_}if(u||r%1||o%1){var M=Vf();return pn(r+M*(o-r+Hg("1e-"+((M+"").length-1))),o)}return lc(r,o)}var fS=us(function(r,o,u){return o=o.toLowerCase(),r+(u?yd(o):o)});function yd(r){return Nc(Rt(r).toLowerCase())}function Sd(r){return r=Rt(r),r&&r.replace(Xe,t_).replace(Ig,"")}function hS(r,o,u){r=Rt(r),o=Nn(o);var _=r.length;u=u===t?_:br(gt(u),0,_);var M=u;return u-=o.length,u>=0&&r.slice(u,M)==o}function dS(r){return r=Rt(r),r&&Ne.test(r)?r.replace(Fe,n_):r}function pS(r){return r=Rt(r),r&&sn.test(r)?r.replace(Lt,"\\$&"):r}var mS=us(function(r,o,u){return r+(u?"-":"")+o.toLowerCase()}),gS=us(function(r,o,u){return r+(u?" ":"")+o.toLowerCase()}),_S=bh("toLowerCase");function vS(r,o,u){r=Rt(r),o=gt(o);var _=o?is(r):0;if(!o||_>=o)return r;var M=(o-_)/2;return _a(ra(M),u)+r+_a(ia(M),u)}function xS(r,o,u){r=Rt(r),o=gt(o);var _=o?is(r):0;return o&&_<o?r+_a(o-_,u):r}function yS(r,o,u){r=Rt(r),o=gt(o);var _=o?is(r):0;return o&&_<o?_a(o-_,u)+r:r}function SS(r,o,u){return u||o==null?o=0:o&&(o=+o),C_(Rt(r).replace(ti,""),o||0)}function ES(r,o,u){return(u?yn(r,o,u):o===t)?o=1:o=gt(o),cc(Rt(r),o)}function MS(){var r=arguments,o=Rt(r[0]);return r.length<3?o:o.replace(r[1],r[2])}var bS=us(function(r,o,u){return r+(u?"_":"")+o.toLowerCase()});function TS(r,o,u){return u&&typeof u!="number"&&yn(r,o,u)&&(o=u=t),u=u===t?Re:u>>>0,u?(r=Rt(r),r&&(typeof o=="string"||o!=null&&!Ic(o))&&(o=Nn(o),!o&&ns(r))?tr(ii(r),0,u):r.split(o,u)):[]}var AS=us(function(r,o,u){return r+(u?" ":"")+Nc(o)});function wS(r,o,u){return r=Rt(r),u=u==null?0:br(gt(u),0,r.length),o=Nn(o),r.slice(u,u+o.length)==o}function CS(r,o,u){var _=w.templateSettings;u&&yn(r,o,u)&&(o=t),r=Rt(r),o=Ra({},o,_,Lh);var M=Ra({},o.imports,_.imports,Lh),C=on(M),V=ql(M,C),J,ee,we=0,Ce=o.interpolate||Je,Ue="__p += '",He=$l((o.escape||Je).source+"|"+Ce.source+"|"+(Ce===wt?Dl:Je).source+"|"+(o.evaluate||Je).source+"|$","g"),je="//# sourceURL="+(It.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Fg+"]")+`
`;r.replace(He,function(at,Et,Tt,Fn,Sn,Bn){return Tt||(Tt=Fn),Ue+=r.slice(we,Bn).replace(rt,i_),Et&&(J=!0,Ue+=`' +
__e(`+Et+`) +
'`),Sn&&(ee=!0,Ue+=`';
`+Sn+`;
__p += '`),Tt&&(Ue+=`' +
((__t = (`+Tt+`)) == null ? '' : __t) +
'`),we=Bn+at.length,at}),Ue+=`';
`;var ot=It.call(o,"variable")&&o.variable;if(!ot)Ue=`with (obj) {
`+Ue+`
}
`;else if(Ho.test(ot))throw new ft(l);Ue=(ee?Ue.replace(H,""):Ue).replace(Pe,"$1").replace(Ze,"$1;"),Ue="function("+(ot||"obj")+`) {
`+(ot?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(J?", __e = _.escape":"")+(ee?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Ue+`return __p
}`;var vt=Md(function(){return Ct(C,je+"return "+Ue).apply(t,V)});if(vt.source=Ue,Lc(vt))throw vt;return vt}function RS(r){return Rt(r).toLowerCase()}function PS(r){return Rt(r).toUpperCase()}function LS(r,o,u){if(r=Rt(r),r&&(u||o===t))return If(r);if(!r||!(o=Nn(o)))return r;var _=ii(r),M=ii(o),C=Df(_,M),V=Uf(_,M)+1;return tr(_,C,V).join("")}function IS(r,o,u){if(r=Rt(r),r&&(u||o===t))return r.slice(0,Of(r)+1);if(!r||!(o=Nn(o)))return r;var _=ii(r),M=Uf(_,ii(o))+1;return tr(_,0,M).join("")}function DS(r,o,u){if(r=Rt(r),r&&(u||o===t))return r.replace(ti,"");if(!r||!(o=Nn(o)))return r;var _=ii(r),M=Df(_,ii(o));return tr(_,M).join("")}function US(r,o){var u=b,_=O;if(Wt(o)){var M="separator"in o?o.separator:M;u="length"in o?gt(o.length):u,_="omission"in o?Nn(o.omission):_}r=Rt(r);var C=r.length;if(ns(r)){var V=ii(r);C=V.length}if(u>=C)return r;var J=u-is(_);if(J<1)return _;var ee=V?tr(V,0,J).join(""):r.slice(0,J);if(M===t)return ee+_;if(V&&(J+=ee.length-J),Ic(M)){if(r.slice(J).search(M)){var we,Ce=ee;for(M.global||(M=$l(M.source,Rt(Vo.exec(M))+"g")),M.lastIndex=0;we=M.exec(Ce);)var Ue=we.index;ee=ee.slice(0,Ue===t?J:Ue)}}else if(r.indexOf(Nn(M),J)!=J){var He=ee.lastIndexOf(M);He>-1&&(ee=ee.slice(0,He))}return ee+_}function NS(r){return r=Rt(r),r&&le.test(r)?r.replace(Z,u_):r}var OS=us(function(r,o,u){return r+(u?" ":"")+o.toUpperCase()}),Nc=bh("toUpperCase");function Ed(r,o,u){return r=Rt(r),o=u?t:o,o===t?s_(r)?d_(r):Kg(r):r.match(o)||[]}var Md=yt(function(r,o){try{return Dn(r,t,o)}catch(u){return Lc(u)?u:new ft(u)}}),FS=Di(function(r,o){return Vn(o,function(u){u=xi(u),Li(r,u,Rc(r[u],r))}),r});function BS(r){var o=r==null?0:r.length,u=it();return r=o?Vt(r,function(_){if(typeof _[1]!="function")throw new Wn(c);return[u(_[0]),_[1]]}):[],yt(function(_){for(var M=-1;++M<o;){var C=r[M];if(Dn(C[0],this,_))return Dn(C[1],this,_)}})}function zS(r){return uv(qn(r,p))}function Oc(r){return function(){return r}}function GS(r,o){return r==null||r!==r?o:r}var kS=Ah(),HS=Ah(!0);function Ln(r){return r}function Fc(r){return nh(typeof r=="function"?r:qn(r,p))}function VS(r){return rh(qn(r,p))}function WS(r,o){return sh(r,qn(o,p))}var XS=yt(function(r,o){return function(u){return co(u,r,o)}}),qS=yt(function(r,o){return function(u){return co(r,u,o)}});function Bc(r,o,u){var _=on(o),M=ua(o,_);u==null&&!(Wt(o)&&(M.length||!_.length))&&(u=o,o=r,r=this,M=ua(o,on(o)));var C=!(Wt(u)&&"chain"in u)||!!u.chain,V=Ni(r);return Vn(M,function(J){var ee=o[J];r[J]=ee,V&&(r.prototype[J]=function(){var we=this.__chain__;if(C||we){var Ce=r(this.__wrapped__),Ue=Ce.__actions__=Cn(this.__actions__);return Ue.push({func:ee,args:arguments,thisArg:r}),Ce.__chain__=we,Ce}return ee.apply(r,Zi([this.value()],arguments))})}),r}function YS(){return cn._===this&&(cn._=x_),this}function zc(){}function $S(r){return r=gt(r),yt(function(o){return oh(o,r)})}var ZS=gc(Vt),KS=gc(wf),JS=gc(kl);function bd(r){return Mc(r)?Hl(xi(r)):wv(r)}function jS(r){return function(o){return r==null?t:Tr(r,o)}}var QS=Ch(),eE=Ch(!0);function Gc(){return[]}function kc(){return!1}function tE(){return{}}function nE(){return""}function iE(){return!0}function rE(r,o){if(r=gt(r),r<1||r>K)return[];var u=Re,_=pn(r,Re);o=it(o),r-=Re;for(var M=Xl(_,o);++u<r;)o(u);return M}function sE(r){return dt(r)?Vt(r,xi):On(r)?[r]:Cn(Wh(Rt(r)))}function oE(r){var o=++__;return Rt(r)+o}var aE=ga(function(r,o){return r+o},0),lE=_c("ceil"),cE=ga(function(r,o){return r/o},1),uE=_c("floor");function fE(r){return r&&r.length?ca(r,Ln,nc):t}function hE(r,o){return r&&r.length?ca(r,it(o,2),nc):t}function dE(r){return Pf(r,Ln)}function pE(r,o){return Pf(r,it(o,2))}function mE(r){return r&&r.length?ca(r,Ln,oc):t}function gE(r,o){return r&&r.length?ca(r,it(o,2),oc):t}var _E=ga(function(r,o){return r*o},1),vE=_c("round"),xE=ga(function(r,o){return r-o},0);function yE(r){return r&&r.length?Wl(r,Ln):0}function SE(r,o){return r&&r.length?Wl(r,it(o,2)):0}return w.after=Vx,w.ary=td,w.assign=Py,w.assignIn=md,w.assignInWith=Ra,w.assignWith=Ly,w.at=Iy,w.before=nd,w.bind=Rc,w.bindAll=FS,w.bindKey=id,w.castArray=ty,w.chain=jh,w.chunk=u0,w.compact=f0,w.concat=h0,w.cond=BS,w.conforms=zS,w.constant=Oc,w.countBy=yx,w.create=Dy,w.curry=rd,w.curryRight=sd,w.debounce=od,w.defaults=Uy,w.defaultsDeep=Ny,w.defer=Wx,w.delay=Xx,w.difference=d0,w.differenceBy=p0,w.differenceWith=m0,w.drop=g0,w.dropRight=_0,w.dropRightWhile=v0,w.dropWhile=x0,w.fill=y0,w.filter=Ex,w.flatMap=Tx,w.flatMapDeep=Ax,w.flatMapDepth=wx,w.flatten=$h,w.flattenDeep=S0,w.flattenDepth=E0,w.flip=qx,w.flow=kS,w.flowRight=HS,w.fromPairs=M0,w.functions=Hy,w.functionsIn=Vy,w.groupBy=Cx,w.initial=T0,w.intersection=A0,w.intersectionBy=w0,w.intersectionWith=C0,w.invert=Xy,w.invertBy=qy,w.invokeMap=Px,w.iteratee=Fc,w.keyBy=Lx,w.keys=on,w.keysIn=Pn,w.map=Ma,w.mapKeys=$y,w.mapValues=Zy,w.matches=VS,w.matchesProperty=WS,w.memoize=Ta,w.merge=Ky,w.mergeWith=gd,w.method=XS,w.methodOf=qS,w.mixin=Bc,w.negate=Aa,w.nthArg=$S,w.omit=Jy,w.omitBy=jy,w.once=Yx,w.orderBy=Ix,w.over=ZS,w.overArgs=$x,w.overEvery=KS,w.overSome=JS,w.partial=Pc,w.partialRight=ad,w.partition=Dx,w.pick=Qy,w.pickBy=_d,w.property=bd,w.propertyOf=jS,w.pull=I0,w.pullAll=Kh,w.pullAllBy=D0,w.pullAllWith=U0,w.pullAt=N0,w.range=QS,w.rangeRight=eE,w.rearg=Zx,w.reject=Ox,w.remove=O0,w.rest=Kx,w.reverse=wc,w.sampleSize=Bx,w.set=tS,w.setWith=nS,w.shuffle=zx,w.slice=F0,w.sortBy=Hx,w.sortedUniq=W0,w.sortedUniqBy=X0,w.split=TS,w.spread=Jx,w.tail=q0,w.take=Y0,w.takeRight=$0,w.takeRightWhile=Z0,w.takeWhile=K0,w.tap=fx,w.throttle=jx,w.thru=Ea,w.toArray=hd,w.toPairs=vd,w.toPairsIn=xd,w.toPath=sE,w.toPlainObject=pd,w.transform=iS,w.unary=Qx,w.union=J0,w.unionBy=j0,w.unionWith=Q0,w.uniq=ex,w.uniqBy=tx,w.uniqWith=nx,w.unset=rS,w.unzip=Cc,w.unzipWith=Jh,w.update=sS,w.updateWith=oS,w.values=ds,w.valuesIn=aS,w.without=ix,w.words=Ed,w.wrap=ey,w.xor=rx,w.xorBy=sx,w.xorWith=ox,w.zip=ax,w.zipObject=lx,w.zipObjectDeep=cx,w.zipWith=ux,w.entries=vd,w.entriesIn=xd,w.extend=md,w.extendWith=Ra,Bc(w,w),w.add=aE,w.attempt=Md,w.camelCase=fS,w.capitalize=yd,w.ceil=lE,w.clamp=lS,w.clone=ny,w.cloneDeep=ry,w.cloneDeepWith=sy,w.cloneWith=iy,w.conformsTo=oy,w.deburr=Sd,w.defaultTo=GS,w.divide=cE,w.endsWith=hS,w.eq=si,w.escape=dS,w.escapeRegExp=pS,w.every=Sx,w.find=Mx,w.findIndex=qh,w.findKey=Oy,w.findLast=bx,w.findLastIndex=Yh,w.findLastKey=Fy,w.floor=uE,w.forEach=Qh,w.forEachRight=ed,w.forIn=By,w.forInRight=zy,w.forOwn=Gy,w.forOwnRight=ky,w.get=Dc,w.gt=ay,w.gte=ly,w.has=Wy,w.hasIn=Uc,w.head=Zh,w.identity=Ln,w.includes=Rx,w.indexOf=b0,w.inRange=cS,w.invoke=Yy,w.isArguments=Cr,w.isArray=dt,w.isArrayBuffer=cy,w.isArrayLike=Rn,w.isArrayLikeObject=Zt,w.isBoolean=uy,w.isBuffer=nr,w.isDate=fy,w.isElement=hy,w.isEmpty=dy,w.isEqual=py,w.isEqualWith=my,w.isError=Lc,w.isFinite=gy,w.isFunction=Ni,w.isInteger=ld,w.isLength=wa,w.isMap=cd,w.isMatch=_y,w.isMatchWith=vy,w.isNaN=xy,w.isNative=yy,w.isNil=Ey,w.isNull=Sy,w.isNumber=ud,w.isObject=Wt,w.isObjectLike=Yt,w.isPlainObject=go,w.isRegExp=Ic,w.isSafeInteger=My,w.isSet=fd,w.isString=Ca,w.isSymbol=On,w.isTypedArray=hs,w.isUndefined=by,w.isWeakMap=Ty,w.isWeakSet=Ay,w.join=R0,w.kebabCase=mS,w.last=$n,w.lastIndexOf=P0,w.lowerCase=gS,w.lowerFirst=_S,w.lt=wy,w.lte=Cy,w.max=fE,w.maxBy=hE,w.mean=dE,w.meanBy=pE,w.min=mE,w.minBy=gE,w.stubArray=Gc,w.stubFalse=kc,w.stubObject=tE,w.stubString=nE,w.stubTrue=iE,w.multiply=_E,w.nth=L0,w.noConflict=YS,w.noop=zc,w.now=ba,w.pad=vS,w.padEnd=xS,w.padStart=yS,w.parseInt=SS,w.random=uS,w.reduce=Ux,w.reduceRight=Nx,w.repeat=ES,w.replace=MS,w.result=eS,w.round=vE,w.runInContext=j,w.sample=Fx,w.size=Gx,w.snakeCase=bS,w.some=kx,w.sortedIndex=B0,w.sortedIndexBy=z0,w.sortedIndexOf=G0,w.sortedLastIndex=k0,w.sortedLastIndexBy=H0,w.sortedLastIndexOf=V0,w.startCase=AS,w.startsWith=wS,w.subtract=xE,w.sum=yE,w.sumBy=SE,w.template=CS,w.times=rE,w.toFinite=Oi,w.toInteger=gt,w.toLength=dd,w.toLower=RS,w.toNumber=Zn,w.toSafeInteger=Ry,w.toString=Rt,w.toUpper=PS,w.trim=LS,w.trimEnd=IS,w.trimStart=DS,w.truncate=US,w.unescape=NS,w.uniqueId=oE,w.upperCase=OS,w.upperFirst=Nc,w.each=Qh,w.eachRight=ed,w.first=Zh,Bc(w,function(){var r={};return _i(w,function(o,u){It.call(w.prototype,u)||(r[u]=o)}),r}(),{chain:!1}),w.VERSION=n,Vn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){w[r].placeholder=w}),Vn(["drop","take"],function(r,o){Mt.prototype[r]=function(u){u=u===t?1:tn(gt(u),0);var _=this.__filtered__&&!o?new Mt(this):this.clone();return _.__filtered__?_.__takeCount__=pn(u,_.__takeCount__):_.__views__.push({size:pn(u,Re),type:r+(_.__dir__<0?"Right":"")}),_},Mt.prototype[r+"Right"]=function(u){return this.reverse()[r](u).reverse()}}),Vn(["filter","map","takeWhile"],function(r,o){var u=o+1,_=u==Y||u==oe;Mt.prototype[r]=function(M){var C=this.clone();return C.__iteratees__.push({iteratee:it(M,3),type:u}),C.__filtered__=C.__filtered__||_,C}}),Vn(["head","last"],function(r,o){var u="take"+(o?"Right":"");Mt.prototype[r]=function(){return this[u](1).value()[0]}}),Vn(["initial","tail"],function(r,o){var u="drop"+(o?"":"Right");Mt.prototype[r]=function(){return this.__filtered__?new Mt(this):this[u](1)}}),Mt.prototype.compact=function(){return this.filter(Ln)},Mt.prototype.find=function(r){return this.filter(r).head()},Mt.prototype.findLast=function(r){return this.reverse().find(r)},Mt.prototype.invokeMap=yt(function(r,o){return typeof r=="function"?new Mt(this):this.map(function(u){return co(u,r,o)})}),Mt.prototype.reject=function(r){return this.filter(Aa(it(r)))},Mt.prototype.slice=function(r,o){r=gt(r);var u=this;return u.__filtered__&&(r>0||o<0)?new Mt(u):(r<0?u=u.takeRight(-r):r&&(u=u.drop(r)),o!==t&&(o=gt(o),u=o<0?u.dropRight(-o):u.take(o-r)),u)},Mt.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Mt.prototype.toArray=function(){return this.take(Re)},_i(Mt.prototype,function(r,o){var u=/^(?:filter|find|map|reject)|While$/.test(o),_=/^(?:head|last)$/.test(o),M=w[_?"take"+(o=="last"?"Right":""):o],C=_||/^find/.test(o);M&&(w.prototype[o]=function(){var V=this.__wrapped__,J=_?[1]:arguments,ee=V instanceof Mt,we=J[0],Ce=ee||dt(V),Ue=function(Et){var Tt=M.apply(w,Zi([Et],J));return _&&He?Tt[0]:Tt};Ce&&u&&typeof we=="function"&&we.length!=1&&(ee=Ce=!1);var He=this.__chain__,je=!!this.__actions__.length,ot=C&&!He,vt=ee&&!je;if(!C&&Ce){V=vt?V:new Mt(this);var at=r.apply(V,J);return at.__actions__.push({func:Ea,args:[Ue],thisArg:t}),new Xn(at,He)}return ot&&vt?r.apply(this,J):(at=this.thru(Ue),ot?_?at.value()[0]:at.value():at)})}),Vn(["pop","push","shift","sort","splice","unshift"],function(r){var o=$o[r],u=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",_=/^(?:pop|shift)$/.test(r);w.prototype[r]=function(){var M=arguments;if(_&&!this.__chain__){var C=this.value();return o.apply(dt(C)?C:[],M)}return this[u](function(V){return o.apply(dt(V)?V:[],M)})}}),_i(Mt.prototype,function(r,o){var u=w[o];if(u){var _=u.name+"";It.call(as,_)||(as[_]=[]),as[_].push({name:o,func:u})}}),as[ma(t,g).name]=[{name:"wrapper",func:t}],Mt.prototype.clone=N_,Mt.prototype.reverse=O_,Mt.prototype.value=F_,w.prototype.at=hx,w.prototype.chain=dx,w.prototype.commit=px,w.prototype.next=mx,w.prototype.plant=_x,w.prototype.reverse=vx,w.prototype.toJSON=w.prototype.valueOf=w.prototype.value=xx,w.prototype.first=w.prototype.head,no&&(w.prototype[no]=gx),w},rs=p_();yr?((yr.exports=rs)._=rs,Fl._=rs):cn._=rs}).call(bo)})(Sl,Sl.exports);var Tu=Sl.exports;const vR={dotSize:6,genePercentile:.99,cameraPositionZ:300,cameraPositionY:50,cameraPositionX:40,umapOffset:1e4,cameraUmapPositionY:0,cameraUmapPositionZ:400,violinOffset:-1e4,cameraViolinPositionY:0,cameraViolinPositionZ:400},jn=new Ks(vR);function Au(i){const t={...jn.getValue(),dotSize:i};jn.next(t)}function mm(i){const e=jn.getValue(),t=i*.01,n={...e,genePercentile:t};jn.next(n)}const xR=i=>{const e=document.getElementById("loadingIndicator");i?e.style.display="flex":e.style.display="none"},yR=()=>{document.getElementById("cellTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),SR(t)})};function SR(i){const e=document.getElementById("cellNotFound");let t=St.value.listPalette;i?(t=St.value.listPalette.filter(([n,s])=>n.toLowerCase().startsWith(i)),console.log(t),El(t)):El(St.value.listPalette),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}function El(i){let e={};const t=document.getElementById("cellCheckboxes");t.innerHTML="",i.sort((s,a)=>s[0].toLowerCase()<a[0].toLowerCase()?-1:s[0].toLowerCase()>a[0].toLowerCase()?1:0),i.forEach(([s,a])=>{const c=document.createElement("input");c.type="checkbox",c.className="box",c.id=s,c.value=s,We.value.selectedCelltypes.includes(s)&&(c.checked=!0);const l=document.createElement("label");l.htmlFor=s,l.style.color=a,l.appendChild(c),l.appendChild(document.createTextNode(s));let f,h,d,p,x=((S,E)=>{for(const m in S)if(S[m].includes(E))return m;return!1})(St.value.groups,s);if(x){const S=`${x}-group`;Object.keys(e).includes(x)?(f=document.getElementById(`${x}-div`),h=document.getElementById(S),d=document.getElementById(`${x}-label`),p=document.getElementById(`${x}-list`)):(e[x]=[],f=document.createElement("div"),f.id=`${x}-div`,d=document.createElement("label"),d.htmlFor=x,d.setAttribute("for",S),d.style.color="white",d.id=`${x}-label`,h=document.createElement("input"),h.type="checkbox",h.classList.add("box"),h.classList.add("group-input"),h.value=x,h.id=S,d.appendChild(h),d.appendChild(document.createTextNode(x.toUpperCase())),p=document.createElement("ul"),p.id=`${x}-list`,p.style.marginBottom=0,f.appendChild(d),f.appendChild(p),t.appendChild(f));const E=document.createElement("li");E.id=`${x}-item`,p.appendChild(l),p.append(document.createElement("br")),e[x].push(c),t.appendChild(f)}else t.appendChild(l),t.appendChild(document.createElement("br"));c.addEventListener("change",S=>{console.log(S),ER(s,S.target.checked)})});const n=document.getElementsByClassName("group-input");Array.prototype.slice.call(n).forEach(s=>{s.addEventListener("change",a=>{let c=We.value.selectedCelltypes.map(l=>l);console.log("CHECKING",c),e[a.target.value].forEach(l=>{l.checked=a.target.checked,a.target.checked?c.push(l.value):c.splice(c.indexOf(l.value),1)}),qs(c)}),e[s.value].forEach(a=>{let c=!0;a.checked||(c=!1),s.checked=c,a.addEventListener("change",()=>{let l=!0;e[s.value].forEach(f=>{f.checked||(l=!1)}),s.checked=l})})})}async function ER(i,e){let t=We.value.selectedCelltypes.map(n=>n);e?(t.push(i),qs(t)):(t=t.filter(n=>n!==i),qs(t))}const MR=()=>{document.getElementById("cellClearButton").addEventListener("click",()=>{qs([]),El(St.value.listPalette),cellTextbox.value=""})},bR=()=>{const i=document.getElementById("cellFilters");i.innerHTML="",We.value.selectedCelltypes.length!==0?We.value.selectedCelltypes.forEach(e=>{const t=document.createElement("p");t.style.color=St.value.pallete[e],t.style.fontStyle="italic",t.style.fontWeight="bold",t.innerHTML=e,i.appendChild(t)}):i.innerHTML="No celltype filters selected"};function gm(){const i=We.value.selectedCelltypes,e=document.getElementById("cellCheckboxes");let t=[];for(const n in e.children){const s=e.children[n];s.nodeName==="LABEL"&&t.push(s.children[0])}t.forEach(n=>{i.includes(n.value)?n.checked||(n.checked=!0):n.checked&&(n.checked=!1)})}async function Js(i,e,t=!1){let n="";if(t==!0?n=await fetch(`https://backendbasel.techkyra.com/get-gene-values?gene=${i}&dbname=genedb&dbcollection=${e}&username=zebra&csv_filename=${e}_atac_new.csv`):n=await fetch(`https://backendbasel.techkyra.com/get-gene-values?gene=${i}&dbname=genedb&dbcollection=${e}&username=zebra&csv_filename=${e}_matrix.csv`),!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const s=await n.json();if(s===void 0||s.gene_values==null)return"[]";let a=s.gene_values.split(",").filter(f=>f!=="");return["clusters","clusters_pal","genes","hierarchical_clusters"].includes(i)==!0?(a.shift(),a):(a.shift(),a.map(h=>parseFloat(h)))}async function TR(i,e=1e5){let t="";if(t=await fetch(`https://backendbasel.techkyra.com/get-intervals?gene=${i}&range=${e}`),!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const n=await t.json();return n===void 0?"[]":n}const AR=()=>{};function wR(i){const e=document.getElementById("atacNotFound");if(i){const t=St.value.atacs.filter(n=>n.toLowerCase().startsWith(i));console.log(t),$u(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else $u(St.value.atacs.slice(0,1e3))}function $u(i){const e=document.getElementById("atacContainer");e.innerHTML="",i.sort((t,n)=>t[0].toLowerCase()<n[0].toLowerCase()?-1:t[0].toLowerCase()>n[0].toLowerCase()?1:0),i.forEach(t=>{const n=document.createElement("input");n.type="checkbox",n.className="box",n.id=t,n.value=t,n.name="radio",We.value.selectedAtacs.includes(t)&&(n.checked=!0);const s=document.createElement("label");s.htmlFor=t,s.textContent=t,s.style.color="white";const a=document.createElement("div");a.appendChild(n),a.appendChild(s),a.appendChild(document.createElement("br")),e.appendChild(a),n.addEventListener("change",c=>{if(We.value.selectedAtacs.length>=We.value.mode&&(c.target.checked=!1),We.value.mode===1&&We.value.selectedAtacs.length===1){const l=document.querySelector(`[value=${CSS.escape(We.value.selectedAtacs[0])}]`);l&&(l.checked=!1),(l===null||l.value!==c.target.value)&&(Yi([]),c.target.checked=!0)}vg(t,c.target.checked)})})}function vg(i,e){let t=We.value.selectedAtacs.map(n=>n);e?(t.push(i),Yi(t)):(t=t.filter(n=>n!==i),Yi(t))}const uf=()=>{document.getElementById("atacClearButton").addEventListener("click",()=>{Yi([]),document.querySelectorAll('input[type="radio"]').forEach(t=>{t.checked=!1}),Yi([]),atacTextbox.value=""})},CR=()=>{document.getElementById("atacEnterButton").addEventListener("click",()=>{console.log("entered clicked");const t=document.getElementById("atacTextbox").value.toLowerCase();wR(t)})},RR=()=>{const i=document.getElementById("atacFilters");i.innerHTML="",We.value.selectedAtacs.length!==0?We.value.selectedAtacs.forEach((e,t)=>{const n=document.createElement("p");n.style.color=t===0?"magenta":"green",n.style.fontStyle="italic",n.style.fontWeight="bold",n.innerHTML=e,i.appendChild(n)}):i.innerHTML="No ATAC filters selected"},PR=()=>{const i=document.getElementById("selectedContainer");if(i.innerHTML="",We.value.selectedAtacs.forEach(e=>{const t=document.createElement("input");t.type="checkbox",t.className="box",t.id="select-"+e,t.value=e,t.name="radio",We.value.selectedAtacs.includes(e)&&(t.checked=!0);const n=document.createElement("label");n.htmlFor="select-"+e,n.textContent=e,n.style.color="white";const s=document.createElement("div");s.appendChild(t),s.appendChild(n),s.appendChild(document.createElement("br")),i.appendChild(s),t.addEventListener("change",a=>{const c=document.querySelector(`#atacContainer [value=${CSS.escape(We.value.selectedAtacs[0])}]`);c!==null&&(c.checked=!1),vg(t.value,!1)})}),We.value.selectedAtacs.length>0){const e=document.createElement("p");e.innerText="Selected atacs",e.style.color="white",e.style.margin=0,i.prepend(e);const t=document.createElement("hr");t.style.borderColor="white",t.style.margin="2px",i.appendChild(t)}};function LR(i){const e=i.match(/^(\d+)-(\d+)-(\d+)$/);return e?`chr${e[1]}:${e[2]}-${e[3]}`:null}function IR(i){const e=i.match(/^chr(\d+):(\d+)-(\d+)$/);return e?`${e[1]}-${e[2]}-${e[3]}`:null}function _m(i){return Js(i,St.value.prefix)}function vm(i){return Js(IR(i),St.value.prefix,!0)}function DR(i,e){const t={r:255,g:255,b:255},n={r:0,g:255,b:0},s={r:255,g:0,b:255},a={r:Math.round(n.r+(t.r-n.r)*e),g:Math.round(n.g+(t.g-n.g)*e),b:Math.round(n.b+(t.b-n.b)*e)},c={r:Math.round(s.r+(t.r-s.r)*i),g:Math.round(s.g+(t.g-s.g)*i),b:Math.round(s.b+(t.b-s.b)*i)},l={r:(a.r+c.r)/2,g:(a.g+c.g)/2,b:(a.b+c.b)/2};return`rgb(${Math.round(l.r)}, ${Math.round(l.g)}, ${Math.round(l.b)})`}function il(i,e){const t={r:0,g:0,b:255},n={r:255,g:255,b:255},s={r:255,g:0,b:0};return e==null?i<.5?`rgb(${Math.floor(n.r*i*2)}, ${Math.floor(n.g*i*2)}, ${t.b})`:i===.5?`rgb(${n.r}, ${n.g}, ${n.b})`:`rgb(${s.r}, ${Math.floor(n.g-n.g*(i-.5)*2)}, ${Math.floor(n.b-n.b*(i-.5)*2)})`:DR(i,e)}function rl(i,e){const t=i.slice().sort((s,a)=>s-a),n=Math.floor(t.length*e)-1;return t[n]}function sl(i,e){return i.map(t=>Math.min(t/e,1))}const UR=()=>{document.getElementById("geneTextbox").addEventListener("input",e=>{const t=e.target.value.toLowerCase();console.log(t),NR(t)})};function NR(i){const e=document.getElementById("geneNotFound");if(i){const t=St.value.genes.filter(n=>n.toLowerCase().startsWith(i));Zu(t),t.length===0?(console.log("here"),e.style.display="block"):e.style.display="none"}else Zu(St.value.genes.slice(0,1e3))}function Zu(i){const e=document.getElementById("geneContainer");e.innerHTML="",i.sort((t,n)=>t[0].toLowerCase()<n[0].toLowerCase()?-1:t[0].toLowerCase()>n[0].toLowerCase()?1:0),i.forEach(t=>{const n=document.createElement("input");n.type="checkbox",n.className="box",n.id=t,n.value=t,n.name="radio",We.value.selectedGenes.includes(t)&&(n.checked=!0);const s=document.createElement("label");s.htmlFor=t,s.textContent=t,s.style.color="white";const a=document.createElement("div");a.appendChild(n),a.appendChild(s),a.appendChild(document.createElement("br")),e.appendChild(a),n.addEventListener("change",c=>{if(We.value.selectedGenes.length>=We.value.mode&&(c.target.checked=!1),We.value.mode===1&&We.value.selectedGenes.length===1){const l=document.querySelector(`[value=${CSS.escape(We.value.selectedGenes[0])}]`);l&&(l.checked=!1),(l===null||l.value!==c.target.value)&&(Wr([]),c.target.checked=!0)}xg(t,c.target.checked)})})}function OR(){const i=document.getElementById("modeButton");i.value=We.value.mode,i.value==="1"?(i.innerText="Single Gene Mode",i.classList.replace("btn-success","btn-info")):(i.innerText="Two Gene Mode",i.classList.replace("btn-info","btn-success")),i.onclick=()=>{let e=i.value==="1";e?(i.innerText="Two Gene Mode",i.classList.replace("btn-info","btn-success")):(i.innerText="Single Gene Mode",i.classList.replace("btn-success","btn-info")),i.value=e?2:1,mR(e?2:1),e?Sg():document.getElementById("selectedContainer").innerHTML=""}}function xg(i,e){let t=We.value.selectedGenes.map(n=>n);e?(t.push(i),Wr(t)):(t=t.filter(n=>n!==i),Wr(t))}const yg=()=>{document.getElementById("geneClearButton").addEventListener("click",()=>{console.log("HALOOOO"),Wr([]),_g([]),document.querySelectorAll('input[type="radio"]').forEach(t=>{t.checked=!1}),Yi([]),geneTextbox.value=""})},FR=()=>{const i=document.getElementById("geneFilters");i.innerHTML="",We.value.selectedGenes.length!==0?We.value.selectedGenes.forEach((e,t)=>{const n=document.createElement("p");We.value.selectedGenes.length===1?n.style.color="white":n.style.color=t===0?"green":"magenta",n.style.fontStyle="italic",n.style.fontWeight="bold",n.innerHTML=e,i.appendChild(n)}):i.innerHTML="No gene filters selected"},Sg=()=>{const i=document.getElementById("selectedContainer");if(i.innerHTML="",We.value.selectedGenes.forEach(e=>{const t=document.createElement("input");t.type="checkbox",t.className="box",t.id="select-"+e,t.value=e,t.name="radio",We.value.selectedGenes.includes(e)&&(t.checked=!0);const n=document.createElement("label");n.htmlFor="select-"+e,n.textContent=e,n.style.color="white";const s=document.createElement("div");s.appendChild(t),s.appendChild(n),s.appendChild(document.createElement("br")),i.appendChild(s),t.addEventListener("change",a=>{const c=document.querySelector(`#geneContainer [value=${CSS.escape(We.value.selectedGenes[0])}]`);c!==null&&(c.checked=!1),xg(t.value,!1)})}),We.value.selectedGenes.length>0){const e=document.createElement("p");e.innerText="Selected genes",e.style.color="white",e.style.margin=0,i.prepend(e);const t=document.createElement("hr");t.style.borderColor="white",t.style.margin="2px",i.appendChild(t)}};function BR(i){console.log("condition is",i);const e=document.getElementById("violinContainer"),t=document.getElementById("noViolinContainer");if(i!==void 0){const s=document.getElementById("dropdownMenuButton").innerText;console.log(s);const a="https://violinplots.s3.us-west-2.amazonaws.com/";let c="";s=="6s"?c=a+"C_6s_violin_plot/C_6s_"+i+".jpeg":s=="75pe"?c=a+"B_75p_violin_plot/B_75p_"+i+".jpeg":c=a+"A_50p_violin_plot/A_50p_"+i+".jpeg",console.log(c);const l=document.getElementById("violin-canvas"),f=l.getContext("2d"),h=new Image;h.id="violin-image",h.class="violin-image",h.src=c,h.crossOrigin="anonymous",h.onload=function(){const d=h.width,p=h.height;l.width=p,l.height=d,f.translate(l.width/2,l.height/2),f.rotate(90*Math.PI/180),f.drawImage(h,-d/2,-p/2)}}else console.error("Invalid key: No image found for this condition."),e.style.display="none",t.style.display="none"}const Ao=i=>{let e=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+i.toString();window.history.pushState({path:e},"",e)};class zR extends $s{constructor(e){super(e)}load(e,t,n,s){const a=this,c=new cg(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){const f=a.parse(JSON.parse(l));t&&t(f)},n,s)}parse(e){return new GR(e)}}class GR{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],s=kR(e,t,this.data);for(let a=0,c=s.length;a<c;a++)n.push(...s[a].toShapes());return n}}function kR(i,e,t){const n=Array.from(i),s=e/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,c=[];let l=0,f=0;for(let h=0;h<n.length;h++){const d=n[h];if(d===`
`)l=0,f-=a;else{const p=HR(d,s,l,f,t);l+=p.offsetX,c.push(p.path)}}return c}function HR(i,e,t,n,s){const a=s.glyphs[i]||s.glyphs["?"];if(!a){console.error('THREE.Font: character "'+i+'" does not exists in font family '+s.familyName+".");return}const c=new ur;let l,f,h,d,p,v,x,S;if(a.o){const E=a._cachedOutline||(a._cachedOutline=a.o.split(" "));for(let m=0,g=E.length;m<g;)switch(E[m++]){case"m":l=E[m++]*e+t,f=E[m++]*e+n,c.moveTo(l,f);break;case"l":l=E[m++]*e+t,f=E[m++]*e+n,c.lineTo(l,f);break;case"q":h=E[m++]*e+t,d=E[m++]*e+n,p=E[m++]*e+t,v=E[m++]*e+n,c.quadraticCurveTo(p,v,h,d);break;case"b":h=E[m++]*e+t,d=E[m++]*e+n,p=E[m++]*e+t,v=E[m++]*e+n,x=E[m++]*e+t,S=E[m++]*e+n,c.bezierCurveTo(p,v,x,S,h,d);break}}return{offsetX:a.ha*e,path:c}}class xm extends sf{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const s=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(s,t)}this.type="TextGeometry"}}function Eg(i,e,t){const n=document.createElement("p");return n.innerText="x",n.className="delete",n.setAttribute("data-badge_value",e),n.onclick=()=>{if(i==="celltype")gg(e);else if(i==="gene"){const s=[...We.value.selectedGenes];s.splice(s.indexOf(e),1),Wr(s)}else if(i==="atac"){const s=[...We.value.selectedAtacs];s.splice(s.indexOf(e),1),Yi(s)}t.remove()},t.onmouseover=()=>{n.style.display="block"},t.onmouseleave=()=>{n.style.display="none"},n}function wu(i,e=""){const t=document.querySelector(".showing-badge");if(!t){console.error("Badge container not found");return}t.querySelectorAll(".showing-label").forEach(a=>a.style.display="none");const s=t.querySelector(`.showing-${i}`);s?(s.style.display="inline-block",(i==="gene"||i==="atac")&&e.forEach((a,c)=>{const l=document.createElement("span");l.className="showing-label gene-atac-badge",l.innerText=a,l.title=a,l.style.backgroundColor=c%2===0?"rgb(0, 200, 0)":"rgb(255, 0, 255)";const f=Eg(i,a,l);l.appendChild(f),t.appendChild(l)})):console.warn(`Unknown label: ${i}`)}function ym(){function i(c){const l=document.createElement("span");l.className="celltype-label",l.title=c,l.style.backgroundColor=St.value.pallete[c];const f=document.createElement("p");return f.className="celltype-text",f.innerText=c,l.appendChild(f),l.appendChild(Eg("celltype",c,l)),l}const e=document.querySelector(".celltype-badges"),t=We.value.selectedCelltypes,n=document.querySelectorAll(".celltype-label"),s=[].map.call(n,c=>c.title);t.forEach(c=>{if(!s.includes(c)){const l=i(c);e.appendChild(l)}}),Array.from(e.childNodes).forEach(c=>{t.includes(c.title)||c.remove()})}function Cu(){const i=document.querySelector(".celltype-badges"),e=We.value.selectedGenes,t=We.value.selectedAtacs;function n(l){const f=["colorbar-wrapper","colorbar-wrapper2","colorbar-wrapper3"];let h=0;f.forEach(v=>{const x=document.getElementById(v);if(x){const E=x.getBoundingClientRect().width;h=Math.max(h,E)}});const d=l?h+5:0,p=l?25:30;i.style.transform=`translateX(-${d}px)`,i.style.width=`${p}vw`}function s(l){i.style.display=l?"none":"flex"}const a=e.length>0,c=t.length>0;n(a),s(c)}const VR=36.75;function WR(i,e){const t=document.getElementById("top-label"),n=document.getElementById("bottom-label");let s=We.value.selectedGenes,a=!1;if(s!=[])try{a=s[0].split("_")[1]=="imputed"}catch{a=!1}let c=a?e*VR:e,l;c<1?l=c.toExponential(1):l=Math.round(c),t&&n?(t.textContent=l,n.textContent=i):console.error("Labels not found in the DOM.")}function XR(i,e){const t=document.getElementById("top-label-green"),n=document.getElementById("bottom-label-green");let s=We.value.selectedGenes,a=!1;if(s!=[])try{a=s[1].split("_")[1]=="imputed"}catch{a=!1}let l=a?e*36.75:e,f;l<1?f=l.toExponential(1):f=Math.round(l),t&&n?(t.textContent=f,n.textContent=i):console.error("Labels not found in the DOM.")}function qR(i,e){const t=document.getElementById("top-label-magenta"),n=document.getElementById("bottom-label-magenta");let s=We.value.selectedGenes,a=!1;if(s!=[])try{a=s[0].split("_")[1]=="imputed"}catch{a=!1}let l=a?e*36.75:e,f;l<1?f=l.toExponential(1):f=Math.round(l),t&&n?(t.textContent=f,n.textContent=i):console.error("Labels not found in the DOM.")}function Sm(){const i=document.getElementById("colorbar-wrapper");i?i.style.display="grid":console.error("Colorbar wrapper not found in the DOM.")}function YR(){const i=document.getElementById("colorbar-wrapper2");i?i.style.display="grid":console.error("Colorbar wrapper not found in the DOM.")}function $R(){const i=document.getElementById("colorbar-wrapper3");i?i.style.display="grid":console.error("Colorbar wrapper not found in the DOM.")}function Ru(){const i=document.getElementById("colorbar-wrapper");i?i.style.display="none":console.error("Colorbar wrapper not found in the DOM.")}function ol(){const i=document.getElementById("colorbar-wrapper2");i?i.style.display="none":console.error("Colorbar wrapper not found in the DOM.")}function al(){const i=document.getElementById("colorbar-wrapper3");i?i.style.display="none":console.error("Colorbar wrapper not found in the DOM.")}We.pipe(yi(i=>i.intervalsData),Si((i,e)=>i.join()===e.join())).subscribe(async i=>{ZR(We.value.selectedGenes[0]),KR(i)});function ZR(i){const e=document.querySelector(".left-text");e.textContent=i}function KR(i=[]){const e=document.getElementById("line-container"),t=document.getElementById("middle-space");if(!e||!t){console.error("Required elements not found");return}if(i.length===0)t.style.display="none";else{t.style.display="grid";let n=1;e.innerHTML="";let s,a=!1;i.forEach(c=>{const l=document.createElement("div"),f=document.createElement("div");if(f.className="tooltip",c.label==="atac")c.enriched===1?l.className="atac-peaks-enriched":l.className="atac-peaks",f.textContent=c.interval,l.style.zIndex=n,n++,l.addEventListener("mouseout",()=>{l.style.zIndex=1}),l.addEventListener("mouseover",()=>{a||(s=setTimeout(()=>{ll(c)},800))}),l.addEventListener("mouseout",()=>{l.style.zindex=1,a||(clearTimeout(s),l.classList.contains("clicked")||ll([]))}),l.addEventListener("click",()=>{clearTimeout(s);const h=document.querySelector(".atac-peaks.clicked, .atac-peaks-enriched.clicked");h&&h!==l&&(h.classList.remove("clicked"),h.style.background=""),l.classList.toggle("clicked"),a=l.classList.contains("clicked"),ll(a?c:[])});else{let h=c.label[0]==="-";c.label.split("__")[1]==="mygene"?h?l.className="gene-left":l.className="gene":h?l.className="gene-left-border":l.className="gene-border";let p=c.label.split("__").pop();f.textContent=p,l.addEventListener("mouseover",()=>{}),l.addEventListener("mouseout",()=>{l.style.zIndex=196}),l.addEventListener("click",async()=>{JR(c)})}l.addEventListener("mouseover",()=>{l.style.zIndex=1998}),l.style.left=c.start*100+"%",l.style.width=c.width*100+"%",l.appendChild(f),e.appendChild(l)})}}function ll(i){if(console.log("Peak clicked:",i),i==[]){uf();return}Yi([i.interval])}function JR(i){console.log("Gene clicked:",i);let e=jR(i.label.split("__").pop());e==null?alert(`Gene ${i} was not measured`):(Yi([]),Wr([e]))}function jR(i){return St.value.genes.includes(`${i}_measured`)?`${i}_measured`:St.value.genes.includes(`${i}_imputed`)?`${i}_imputed`:null}async function QR(i){try{const e=await TR(i);_g(e.intervals)}catch(e){console.error("Error fetching interval gene:",e)}}function Mg(){const i=document.createElement("div");i.id="overlay",i.className="overlay",i.setAttribute("display_type","maximize");const e=document.createElement("div");e.className="top-controls";const t=document.createElement("img");t.className="min_max_button",t.id="maximize",t.src="/images/overlay_controls/minimize.png",t.onclick=a=>{const c=a.target,l=c.id;let f="";l==="maximize"?f="minimize":f="maximize",c.id=f,c.src=`/images/overlay_controls/${l}.png`,document.querySelectorAll(".circle").forEach(d=>{f=="minimize"?d.style.display="none":d.style.display="block"}),l==="maximize"?i.style.transform="translateX(90%)":i.style.transform="translateX(0%)",i.setAttribute("display_type",f)},e.appendChild(t);const n=document.createElement("button");n.className="overlayClearButton btn btn-outline-danger m-1",n.id="clearButton",n.textContent="Clear",n.onclick=()=>{qs([])},e.appendChild(n),i.appendChild(e);const s=document.createElement("div");return s.className="cluster-text",s.textContent="Hover the UMAP",e.appendChild(s),window.addEventListener("resize",()=>{keepInBounds()}),i}function eP(i){document.querySelectorAll(".circle").forEach(t=>{const n=parseInt(t.dataset.index,10),s=i[n];s&&(typeof s=="string"?t.style.backgroundColor=s:typeof s=="object"&&s.r!==void 0&&s.g!==void 0&&s.b!==void 0&&(t.style.backgroundColor=`rgba(${s.r*255}, ${s.g*255}, ${s.b*255}, 1)`))})}function tP(i,e){const t=document.getElementById("overlay"),n=document.querySelector(".cluster-text"),s=St.value.pallete;if(!t||!n){console.error("Overlay or text container element not found. Make sure the elements are present in the DOM.");return}i.forEach((a,c)=>{const l=document.createElement("div");l.className="circle";const f=(a.X_umap0_norm+1.2)/2*80,h=(1.2-a.X_umap1_norm)/2*80+10;l.style.left=`${f}%`,l.style.top=`${h}%`,l.dataset.cluster=a.clusters,l.dataset.index=c;const d=e[c];d&&(l.style.backgroundColor=`rgba(${d.r*255}, ${d.g*255}, ${d.b*255}, 1)`),l.style.width="2.5px",l.style.height="2.5px",l.addEventListener("mouseenter",()=>{document.querySelectorAll(`.circle[data-cluster="${a.clusters}"]`).forEach(v=>v.classList.add("hovered")),n.style.display="block",n.innerText=`${a.clusters}`,n.style.backgroundColor=s[a.clusters]}),l.addEventListener("mouseleave",()=>{document.querySelectorAll(`.circle[data-cluster="${a.clusters}"]`).forEach(v=>v.classList.remove("hovered")),n.style.backgroundColor=""}),l.addEventListener("click",()=>{gg(a.clusters),n.innerText=`${a.clusters}`,n.style.backgroundColor=s[a.clusters]}),t.appendChild(l)})}document.body.appendChild(Mg());const nP=new URL(window.location),ui=new URLSearchParams(nP.search);let Em=0;class iP{constructor(e){Ad(this,"animate",()=>{requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)});this.container=e,this.instancedMesh,this.instancedMeshUmap,this.initScene(),this.subscribeToStateChanges()}addText(){new zR().load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",t=>{const n=new xm("Anterior",{font:t,size:10,height:.1,curveSegments:12,bevelEnabled:!0,bevelThickness:1,bevelSize:.5,bevelOffset:0,bevelSegments:5}),s=new Us({color:16777215}),a=new Tn(n,s);a.position.set(-30,190,0),this.scene.add(a);const c=new xm("Posterior",{font:t,size:10,height:.1,curveSegments:12,bevelEnabled:!0,bevelThickness:1,bevelSize:.5,bevelOffset:0,bevelSegments:5}),l=new Tn(c,s);l.position.set(-30,-190,0),this.scene.add(l)})}plotImage(e,t=10,n=10,s={x:0,y:0,z:0}){new zC().load(e,c=>{c.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),c.minFilter=sM,c.magFilter=bn,c.generateMipmaps=!0;const l=new Us({map:c}),f=new zo(t,n),h=new Tn(f,l);h.position.set(s.x,s.y,s.z),this.scene.add(h)})}plotSVG(e,t=1,n={x:0,y:0,z:0}){new vl().load(e,a=>{const c=a.paths,l=new To;c.forEach(f=>{const h=new Us({color:f.color,side:Mi,depthWrite:!1});vl.createShapes(f).forEach(p=>{const v=new of(p),x=new Tn(v,h);l.add(x)})}),l.scale.set(t,t,t),l.position.set(n.x,n.y,n.z),this.scene.add(l)})}initScene(){this.scene=fR.value.scene,this.scene.background=new bt(0),this.camera=new Qn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new tg,this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),St.value.prefix=="6s"?(this.camera.position.y=jn.value.cameraPositionY,this.camera.position.x=jn.value.cameraPositionX,this.addText()):(document.getElementById("toggleATACRadio").style.display="none",document.getElementById("atac-desc").style.display="none",this.camera.position.y=0,this.camera.position.x=0),this.camera.position.z=jn.value.cameraPositionZ,this.controls=new _R(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.25,this.controls.update(),this.updateInstancedMesh("initScene"),this.animate(),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},!1)}subscribeToStateChanges(){xl.pipe(yi(e=>e.items),Si((e,t)=>Tu.isEqual(e,t)),cr(1)).subscribe(e=>{}),St.pipe(yi(e=>e.prefix),Si((e,t)=>Tu.isEqual(e,t))).subscribe(e=>{const t=document.getElementById("dropdownMenuButton");t.innerText=St.value.prefix}),yl.pipe(yi(e=>e.isLoading),Si((e,t)=>Tu.isEqual(e,t)),cr(1)).subscribe(e=>{xR(yl.value.isLoading)}),We.pipe(yi(e=>e.selectedCelltypes),Si((e,t)=>e.join()===t.join()),cr(1)).subscribe(async e=>{if(Jn(!0),await this.updateInstancedMesh("selectedCelltype"),Jn(!1),bR(),ym(),gm(),We.value.selectedCelltypes.length>0){const t=encodeURIComponent(JSON.stringify(We.value.selectedCelltypes));ui.set("celltype",t)}else ui.delete("celltype");Ao(ui)}),We.pipe(yi(e=>e.selectedGenes),nR((e,t)=>{}),Si((e,t)=>e.join()===t.join()),cr(1)).subscribe(async e=>{if(We.value.mode===2?Sg():BR(e[0]),Jn(!0),uf(),FR(),We.value.selectedGenes.length>0){let n=We.value.selectedGenes[0].split("_")[0];St.value.prefix=="6s"&&We.value.geneGenomeHover==!1&&QR(n);const s=encodeURIComponent(JSON.stringify(We.value.selectedGenes));ui.set("gene",s)}else ui.delete("gene");await this.updateInstancedMesh("selectedGene"),Ao(ui),Jn(!1),Cu()}),We.pipe(yi(e=>e.selectedAtacs),Si((e,t)=>e.join()===t.join()),cr(1)).subscribe(async e=>{if(yg(),We.value.mode===2&&PR(),Jn(!0),RR(),We.value.selectedAtacs.length>0){const t=encodeURIComponent(JSON.stringify(We.value.selectedAtacs));ui.set("atac",t)}else ui.delete("atac");await this.updateInstancedMesh("selectedAtac"),Ao(ui),Jn(!1),Cu()}),jn.pipe(yi(e=>e.dotSize),Si(),cr(1)).subscribe(async e=>{Jn(!0),await this.updateInstancedMesh("dotSize"),Jn(!1)}),jn.pipe(yi(e=>e.genePercentile),Si(),cr(1)).subscribe(async e=>{Jn(!0),await this.updateInstancedMesh("genePercentile"),Jn(!1)}),We.pipe(yi(e=>e.mode),Si(),cr(1)).subscribe(e=>{ui.set("mode",e),Ao(ui)})}async updateInstancedMesh(e){let t=[];this.instancedMesh&&(this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.scene.remove(this.instancedMesh)),this.instancedMeshUmap&&(this.instancedMeshUmap.geometry.dispose(),this.instancedMeshUmap.material.dispose(),this.scene.remove(this.instancedMeshUmap));let n=St.value.pallete,s=xl.value.items;const a=new af(.1,16,16),c=new rf(.1,32,32),l=new Us,f=s.length;this.instancedMesh=new jp(a,l,f),this.instancedMeshUmap=new jp(c,l,f);const h=new An,d=new An;let p,v,x,S=200,E=2,m=We.value.selectedCelltypes,g=We.value.selectedGenes,P=We.value.selectedAtacs,y=jn.value.dotSize,A=Math.floor(y/2),k=jn.value.genePercentile,G=jn.value.genePercentile,U=1;if(P.length>0)try{let W=await vm(P[0]);if(P.length==2){let fe=await vm(P[1]),b=rl(fe,G);x=sl(fe,b)}U=rl(W,G),v=sl(W,U)}catch(W){console.error("Error fetching data:",W)}else if(g.length>0)try{let W=await _m(g[0]);if(g.length==2){let fe=await _m(g[1]),b=rl(fe,k);x=sl(fe,b),qR(0,b)}U=rl(W,k),v=sl(W,U)}catch(W){console.error("Error fetching data:",W)}WR(0,U),XR(0,U);for(let W=0;W<f;W++){if(P.length>0)if(m.length===0||m.includes(s[W].clusters)){let b,O;x?(b=il(v[W],x[W]),O=(v[W]+x[W])/2*y+y/1.5):(b=il(v[W]),O=v[W]*y+y/1.5),p=new bt(b),h.scale.set(O,O,O),d.scale.set(O*E,O*E,O*E)}else p=new bt("#5e5e5e"),h.scale.set(1,1,1),d.scale.set(1*E,1*E,1*E);else if(g.length>0)if(m.length===0||m.includes(s[W].clusters)){let b,O;x?(b=il(v[W],x[W]),O=(v[W]+x[W])/2*y+y/1.5):(b=il(v[W]),O=v[W]*y+y/1.5),p=new bt(b),h.scale.set(O,O,O),d.scale.set(O*E,O*E,O*E)}else p=new bt("#5e5e5e"),h.scale.set(1,1,1),d.scale.set(1*E,1*E,1*E);else m.includes(s[W].clusters)||m.length==0?(p=new bt(n[s[W].clusters]),h.scale.set(y,y,y),d.scale.set(y*E,y*E,y*E)):(p=new bt("#5e5e5e"),h.scale.set(A,A,A),d.scale.set(A*E,A*E,A*E));let fe=1;St.value.prefix=="6s"&&(fe=-1),h.position.set(s[W].X_spatial0_norm*S,s[W].X_spatial1_norm*fe*S,s[W].X_spatial2_norm*S),h.updateMatrix(),this.instancedMesh.setMatrixAt(W,h.matrix),this.instancedMesh.setColorAt(W,p),t.push(p)}Em==0?(Em+=1,tP(s,t)):eP(t),P.length>0?(wu("atac",P),P.length>1?(ol(),al(),Ru()):(Sm(),ol(),al())):g.length>0?(wu("gene",g),g.length>1?(YR(),$R(),Ru()):(Sm(),ol(),al())):(wu("celltype"),Ru(),ol(),al()),ym(),gm(),Cu(),this.scene.add(this.instancedMesh),this.scene.add(this.instancedMeshUmap)}}const Ll=St.value.prefix;async function rP(){const i=St.value.palleteColumn;try{const e=await Js(i,Ll);let t={};e.forEach(n=>{let[s,a]=n.split(":");s=s.replace(/'/g,"").trim(),a=a.replace(/'/g,"").trim(),t[s]=a}),aR(t)}catch(e){console.error("Failed to load items:",e)}}async function sP(){try{const i=await Js("genes",Ll);lR(i)}catch(i){console.error("Failed to load items:",i)}}async function oP(){try{const e=(await Js("genes",Ll,!0)).map(t=>LR(t)).filter(t=>t!==null);cR(e)}catch(i){console.error("Failed to load items:",i)}}async function aP(){const i=St.value.columns;let e={},t=[];try{const n=await Promise.all(i.map(s=>Js(s,Ll)));i.forEach((s,a)=>{e[s]=n[a]});for(let s=0;s<e.clusters.length;s++){let a={};for(let c in e)a[c]=e[c][s];t.push(a)}rR(t)}catch(n){console.error("Error combining data:",n)}}function lP(){const i=document.createElement("div");i.id="loadingIndicator";const e=document.createElement("ul");e.setAttribute("helix","");for(let t=0;t<10;t++){const n=document.createElement("li");for(let a=0;a<2;a++){const c=document.createElement("div");n.appendChild(c)}const s=document.createElement("span");n.appendChild(s),e.appendChild(n)}return i.appendChild(e),i}document.addEventListener("DOMContentLoaded",async()=>{Mg();const i=lP();document.body.appendChild(i),Jn(!0);try{await rP(),await aP(),await sP(),await oP();const e=new URL(window.location),t=new URLSearchParams(e.search);if(t.has("celltype")){const a=JSON.parse(decodeURIComponent(t.get("celltype"))).filter(c=>Object.keys(St.value.pallete).includes(c));qs(a)}if(t.has("gene")){const a=JSON.parse(decodeURIComponent(t.get("gene"))).filter(c=>St.value.genes.includes(c));Wr(a)}El(St.value.listPalette),MR(),yR(),Zu(St.value.genes.slice(0,1e3)),yg(),UR(),$u(St.value.atacs.slice(0,1e3)),uf(),CR(),AR();const n=document.body;new iP(n)}catch(e){console.error("Failed to load data:",e)}finally{console.log("GAAA KESINSINI YAA"),Jn(!1)}});function cP(){const i=St.value.prefixOptions,e=document.querySelector("#prefix-dropdown-container .dropdown-menu");for(let t=0;t<i.length;t++){const n=document.createElement("p");n.innerHTML=`<a class="dropdown-item">${i[t]}</a>`,e.appendChild(n)}}function uP(){const i=document.getElementById("dropdownMenuButton"),e=document.getElementsByClassName("dropdown-item");for(let t=0;t<e.length;t++)e.item(t).addEventListener("click",()=>{const n=new URLSearchParams("");n.append("prefix",e.item(t).innerText),Ao(n),e.item(t).innerText!==St.value.prefix&&(i.innerHTML=St.value.prefix,window.location.reload())})}const fP=()=>{const i=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("atacRadioContainer"),n=document.getElementById("violinContainer"),s=document.getElementById("noViolinContainer"),a=document.getElementById("toggleCellCheckbox"),c=document.getElementById("toggleGeneRadio"),l=document.getElementById("toggleATACRadio"),f=document.getElementById("toggleViolinRadio");a.addEventListener("click",()=>{console.log(i.style.display),i.style.display=i.style.display==="none"?"block":"none",console.log(i.style.display),a.style.backgroundColor="white",a.style.color="black",c.style.backgroundColor="#282828",c.style.color="white",l.style.backgroundColor="#282828",l.style.color="white",f.style.backgroundColor="#282828",f.style.color="white",f.style.backgroundColor="#282828",f.style.color="white",e.style.display==="block"&&(e.style.display="none"),t.style.display==="block"&&(t.style.display="none"),(n.style.display==="block"||s.style.display==="block")&&(n.style.display="none",s.style.display="none"),i.style.display==="none"&&(a.style.backgroundColor="#282828",a.style.color="white")})},hP=()=>{const i=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("atacRadioContainer"),n=document.getElementById("violinContainer"),s=document.getElementById("noViolinContainer"),a=document.getElementById("toggleCellCheckbox"),c=document.getElementById("toggleGeneRadio"),l=document.getElementById("toggleATACRadio"),f=document.getElementById("toggleViolinRadio");c.addEventListener("click",()=>{e.style.display=e.style.display==="none"?"block":"none",c.style.backgroundColor="white",c.style.color="black",a.style.backgroundColor="#282828",a.style.color="white",l.style.backgroundColor="#282828",l.style.color="white",f.style.backgroundColor="#282828",f.style.color="white",i.style.display==="block"&&(i.style.display="none"),t.style.display==="block"&&(t.style.display="none"),(n.style.display==="block"||s.style.display==="block")&&(n.style.display="none",s.style.display="none"),e.style.display==="none"&&(c.style.backgroundColor="#282828",c.style.color="white")})},dP=()=>{const i=document.getElementById("cellCheckbox"),e=document.getElementById("geneRadioContainer"),t=document.getElementById("atacRadioContainer"),n=document.getElementById("violinContainer"),s=document.getElementById("noViolinContainer"),a=document.getElementById("toggleCellCheckbox"),c=document.getElementById("toggleGeneRadio"),l=document.getElementById("toggleATACRadio"),f=document.getElementById("toggleViolinRadio");l.addEventListener("click",()=>{console.log("halo atac clicked"),t.style.display=t.style.display==="none"?"block":"none",l.style.backgroundColor="white",l.style.color="black",a.style.backgroundColor="#282828",a.style.color="white",c.style.backgroundColor="#282828",c.style.color="white",f.style.backgroundColor="#282828",f.style.color="white",i.style.display==="block"&&(i.style.display="none"),e.style.display==="block"&&(e.style.display="none"),(n.style.display==="block"||s.style.display==="block")&&(n.style.display="none",s.style.display="none"),t.style.display==="none"&&(l.style.backgroundColor="#282828",l.style.color="white")})};function pP(i){const t=i.getContext("2d").getImageData(0,0,i.width,i.height);for(let n=0;n<t.data.length;n+=4)if(t.data[n+3]!==0)return!1;return!0}const mP=()=>{const i=document.getElementById("toggleViolinRadio"),e=document.getElementById("violinContainer"),t=document.getElementById("noViolinContainer"),n=document.getElementById("cellCheckbox"),s=document.getElementById("geneRadioContainer"),a=document.getElementById("atacRadioContainer"),c=document.getElementById("toggleCellCheckbox"),l=document.getElementById("toggleGeneRadio"),f=document.getElementById("toggleATACRadio");document.getElementById("violin-image"),i.addEventListener("click",()=>{console.log("violin clicked"),i.style.backgroundColor=i.style.backgroundColor==="white"?"#282828":"white",i.style.color=i.style.color==="black"?"white":"black";const h=document.getElementById("violin-canvas");i.style.backgroundColor=="white"?pP(h)?(console.log("RETURNED TREU"),t.style.display="block"):(console.log("RETURNED FALSE CANVAS NOT EMPTY"),e.style.display="block"):(console.log("TURN OFF"),e.style.display="none",t.style.display="none"),c.style.backgroundColor="#282828",c.style.color="white",l.style.backgroundColor="#282828",l.style.color="white",f.style.backgroundColor="#282828",f.style.color="white",n.style.display==="block"&&(n.style.display="none"),s.style.display==="block"&&(s.style.display="none"),a.style.display==="block"&&(a.style.display="none")})},gP=()=>{const i=document.querySelectorAll(".iconBtn,.toggles"),e=document.getElementById("togglePointSize"),t=document.getElementById("pointSizeSliderBox"),n=document.getElementById("pointSizeSlider"),s=document.getElementById("pointSizeSliderValue"),a=document.getElementById("toggleGenePercentile"),c=document.getElementById("geneSliderBox"),l=document.getElementById("geneSlider"),f=document.getElementById("geneSliderValue"),h=document.getElementById("cellCheckbox"),d=document.getElementById("geneRadioContainer"),p=document.getElementById("toggleCellCheckbox"),v=document.getElementById("toggleGeneRadio");i.forEach(x=>{const S=()=>{const m=x.dataset.target,g=document.getElementById(m);g.style.display="block"},E=()=>{const m=x.dataset.target,g=document.getElementById(m);g.style.display="none"};["mouseenter"].forEach(m=>{x.addEventListener(m,function(){S()})}),["mouseleave"].forEach(m=>{x.addEventListener(m,function(){E()})})}),e.addEventListener("click",()=>{h.style.display==="block"&&(h.style.display="none",p.style.backgroundColor="#282828",p.style.color="white"),d.style.display==="block"&&(d.style.display="none",v.style.backgroundColor="#282828",v.style.color="white"),c.style.display==="block"&&(c.style.display="none"),t.style.display=t.style.display==="none"?"block":"none"}),n.onchange=function(){s.value=parseFloat(this.value).toFixed(2),Au(parseFloat(this.value).toFixed(2))},n.addEventListener("mouseup",function(){s.value=parseFloat(this.value).toFixed(2),Au(parseFloat(this.value).toFixed(2))}),s.onchange=function(){this.value<.1?this.value=.1:this.value>15&&(this.value=15),n.value=parseFloat(this.value).toFixed(2),Au(parseFloat(this.value).toFixed(2))},s.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()},a.addEventListener("click",()=>{h.style.display==="block"&&(h.style.display="none",p.style.backgroundColor="#282828",p.style.color="white"),ALLOWED_ORIGINS="https://roymaimonel.merfisheyes.com,https://fishies.techkyra.com,https://lji.techkyra.com,http://localhost:5173,https://roy.techkyra.com",d.style.display==="block"&&(d.style.display="none",v.style.backgroundColor="#282828",v.style.color="white"),t.style.display==="block"&&(t.style.display="none"),c.style.display=c.style.display==="none"?"block":"none"}),l.addEventListener("mouseup",function(){f.value=parseFloat(this.value).toFixed(2),mm(parseFloat(this.value).toFixed(2))}),f.onchange=function(){this.value<80?this.value=80:this.value>99.99&&(this.value=99.99),l.value=parseFloat(this.value).toFixed(2),mm(parseFloat(this.value).toFixed(2))},f.onkeydown=function(x){x.key==="Enter"&&document.activeElement.blur()}};$(function(){$(".navbar").load("/src/ui/Navbar/navbar.html",()=>{cP(),uP()})});$(function(){$(".colorbar-wrapper").load("/src/ui/ColorBar/colorBar.html",()=>{})});$(function(){$(".colorbar-wrapper2").load("/src/ui/ColorBar/colorBarGreen.html",()=>{})});$(function(){$(".colorbar-wrapper3").load("/src/ui/ColorBar/colorBarMagenta.html",()=>{})});$(function(){$(".showing-container").load("/src/ui/Showing/showing.html",()=>{})});$(function(){$(".filter").load("/src/ui/Filters/filters.html",()=>{fP(),hP(),dP(),mP(),gP(),OR()})});setInterval(()=>{document.querySelectorAll("body *").forEach(function(i){i.style.visibility="visible"})},0);
