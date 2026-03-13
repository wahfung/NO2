(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wc="182",dp=0,bu=1,pp=2,Ba=1,mp=2,Is=3,Zi=0,vn=1,bi=2,wi=0,Zr=1,Au=2,wu=3,Ru=4,_p=5,gr=100,gp=101,vp=102,xp=103,Sp=104,yp=200,Mp=201,Ep=202,Tp=203,vl=204,xl=205,bp=206,Ap=207,wp=208,Rp=209,Cp=210,Pp=211,Dp=212,Lp=213,Up=214,Sl=0,yl=1,Ml=2,is=3,El=4,Tl=5,bl=6,Al=7,ef=0,Ip=1,Fp=2,oi=0,nf=1,rf=2,sf=3,af=4,of=5,lf=6,cf=7,uf=300,Ar=301,rs=302,wl=303,Rl=304,ao=306,Cl=1e3,Ai=1001,Pl=1002,tn=1003,Np=1004,fa=1005,ln=1006,yo=1007,xr=1008,Ln=1009,hf=1010,ff=1011,Gs=1012,Rc=1013,hi=1014,ri=1015,Ci=1016,Cc=1017,Pc=1018,Hs=1020,df=35902,pf=35899,mf=1021,_f=1022,Zn=1023,Pi=1026,Sr=1027,gf=1028,Dc=1029,ss=1030,Lc=1031,Uc=1033,za=33776,Va=33777,ka=33778,Ga=33779,Dl=35840,Ll=35841,Ul=35842,Il=35843,Fl=36196,Nl=37492,Ol=37496,Bl=37488,zl=37489,Vl=37490,kl=37491,Gl=37808,Hl=37809,Wl=37810,Xl=37811,jl=37812,Yl=37813,ql=37814,Kl=37815,$l=37816,Zl=37817,Jl=37818,Ql=37819,tc=37820,ec=37821,nc=36492,ic=36494,rc=36495,sc=36283,ac=36284,oc=36285,lc=36286,Op=3200,vf=0,Bp=1,Gi="",Cn="srgb",as="srgb-linear",Ya="linear",Se="srgb",Lr=7680,Cu=519,zp=512,Vp=513,kp=514,Ic=515,Gp=516,Hp=517,Fc=518,Wp=519,Pu=35044,Du="300 es",si=2e3,qa=2001;function xf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ws(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Xp(){const r=Ws("canvas");return r.style.display="block",r}const Lu={};function Uu(...r){const t="THREE."+r.shift();console.log(t,...r)}function jt(...r){const t="THREE."+r.shift();console.warn(t,...r)}function ce(...r){const t="THREE."+r.shift();console.error(t,...r)}function Xs(...r){const t=r.join(" ");t in Lu||(Lu[t]=!0,jt(...r))}function jp(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mo=Math.PI/180,cc=180/Math.PI;function ea(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[r&255]+sn[r>>8&255]+sn[r>>16&255]+sn[r>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function re(r,t,e){return Math.max(t,Math.min(e,r))}function Yp(r,t){return(r%t+t)%t}function Eo(r,t,e){return(1-e)*r+e*t}function bs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class fe{constructor(t=0,e=0){fe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class na{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],u=n[i+1],h=n[i+2],f=n[i+3],p=s[a+0],m=s[a+1],S=s[a+2],x=s[a+3];if(o<=0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=f;return}if(o>=1){t[e+0]=p,t[e+1]=m,t[e+2]=S,t[e+3]=x;return}if(f!==x||c!==p||u!==m||h!==S){let g=c*p+u*m+h*S+f*x;g<0&&(p=-p,m=-m,S=-S,x=-x,g=-g);let _=1-o;if(g<.9995){const R=Math.acos(g),C=Math.sin(R);_=Math.sin(_*R)/C,o=Math.sin(o*R)/C,c=c*_+p*o,u=u*_+m*o,h=h*_+S*o,f=f*_+x*o}else{c=c*_+p*o,u=u*_+m*o,h=h*_+S*o,f=f*_+x*o;const R=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=R,u*=R,h*=R,f*=R}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],c=n[i+1],u=n[i+2],h=n[i+3],f=s[a],p=s[a+1],m=s[a+2],S=s[a+3];return t[e]=o*S+h*f+c*m-u*p,t[e+1]=c*S+h*p+u*f-o*m,t[e+2]=u*S+h*m+o*p-c*f,t[e+3]=h*S-o*f-c*p-u*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(i/2),f=o(s/2),p=c(n/2),m=c(i/2),S=c(s/2);switch(a){case"XYZ":this._x=p*h*f+u*m*S,this._y=u*m*f-p*h*S,this._z=u*h*S+p*m*f,this._w=u*h*f-p*m*S;break;case"YXZ":this._x=p*h*f+u*m*S,this._y=u*m*f-p*h*S,this._z=u*h*S-p*m*f,this._w=u*h*f+p*m*S;break;case"ZXY":this._x=p*h*f-u*m*S,this._y=u*m*f+p*h*S,this._z=u*h*S+p*m*f,this._w=u*h*f-p*m*S;break;case"ZYX":this._x=p*h*f-u*m*S,this._y=u*m*f+p*h*S,this._z=u*h*S-p*m*f,this._w=u*h*f+p*m*S;break;case"YZX":this._x=p*h*f+u*m*S,this._y=u*m*f+p*h*S,this._z=u*h*S-p*m*f,this._w=u*h*f-p*m*S;break;case"XZY":this._x=p*h*f-u*m*S,this._y=u*m*f-p*h*S,this._z=u*h*S+p*m*f,this._w=u*h*f+p*m*S;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],u=e[2],h=e[6],f=e[10],p=n+o+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(a-i)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+u)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-u)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-i)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+a*o+i*u-s*c,this._y=i*h+a*c+s*o-n*u,this._z=s*h+a*u+n*c-i*o,this._w=a*h-n*o-i*c-s*u,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,e=Math.sin(e*u)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,n=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Iu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Iu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,u=2*(a*i-o*n),h=2*(o*e-s*i),f=2*(s*n-a*e);return this.x=e+c*u+a*f-o*h,this.y=n+c*h+o*u-s*f,this.z=i+c*f+s*h-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return To.copy(this).projectOnVector(t),this.sub(To)}reflect(t){return this.sub(To.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const To=new q,Iu=new na;class Zt{constructor(t,e,n,i,s,a,o,c,u){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,u)}set(t,e,n,i,s,a,o,c,u){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],f=n[7],p=n[2],m=n[5],S=n[8],x=i[0],g=i[3],_=i[6],R=i[1],C=i[4],b=i[7],P=i[2],L=i[5],D=i[8];return s[0]=a*x+o*R+c*P,s[3]=a*g+o*C+c*L,s[6]=a*_+o*b+c*D,s[1]=u*x+h*R+f*P,s[4]=u*g+h*C+f*L,s[7]=u*_+h*b+f*D,s[2]=p*x+m*R+S*P,s[5]=p*g+m*C+S*L,s[8]=p*_+m*b+S*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8];return e*a*h-e*o*u-n*s*h+n*o*c+i*s*u-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],f=h*a-o*u,p=o*c-h*s,m=u*s-a*c,S=e*f+n*p+i*m;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/S;return t[0]=f*x,t[1]=(i*u-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=p*x,t[4]=(h*e-i*c)*x,t[5]=(i*s-o*e)*x,t[6]=m*x,t[7]=(n*c-u*e)*x,t[8]=(a*e-n*s)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+t,-i*u,i*c,-i*(-u*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(bo.makeScale(t,e)),this}rotate(t){return this.premultiply(bo.makeRotation(-t)),this}translate(t,e){return this.premultiply(bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const bo=new Zt,Fu=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nu=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qp(){const r={enabled:!0,workingColorSpace:as,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Se&&(i.r=Ri(i.r),i.g=Ri(i.g),i.b=Ri(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Se&&(i.r=Jr(i.r),i.g=Jr(i.g),i.b=Jr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gi?Ya:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[as]:{primaries:t,whitePoint:n,transfer:Ya,toXYZ:Fu,fromXYZ:Nu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Fu,fromXYZ:Nu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),r}const ue=qp();function Ri(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Jr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ur;class Kp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ur===void 0&&(Ur=Ws("canvas")),Ur.width=t.width,Ur.height=t.height;const i=Ur.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ur}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ws("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ri(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ri(e[n]/255)*255):e[n]=Ri(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $p=0;class Nc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=ea(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ao(i[a].image)):s.push(Ao(i[a]))}else s=Ao(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ao(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Kp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}let Zp=0;const wo=new q;class en extends ms{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=Ai,i=Ai,s=ln,a=xr,o=Zn,c=Ln,u=en.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=ea(),this.name="",this.source=new Nc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wo).x}get height(){return this.source.getSize(wo).y}get depth(){return this.source.getSize(wo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cl:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cl:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=uf;en.DEFAULT_ANISOTROPY=1;class Oe{constructor(t=0,e=0,n=0,i=1){Oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,u=c[0],h=c[4],f=c[8],p=c[1],m=c[5],S=c[9],x=c[2],g=c[6],_=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-x)<.01&&Math.abs(S-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+x)<.1&&Math.abs(S+g)<.1&&Math.abs(u+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const C=(u+1)/2,b=(m+1)/2,P=(_+1)/2,L=(h+p)/4,D=(f+x)/4,O=(S+g)/4;return C>b&&C>P?C<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(C),i=L/n,s=D/n):b>P?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=L/i,s=O/i):P<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),n=D/s,i=O/s),this.set(n,i,s,e),this}let R=Math.sqrt((g-S)*(g-S)+(f-x)*(f-x)+(p-h)*(p-h));return Math.abs(R)<.001&&(R=1),this.x=(g-S)/R,this.y=(f-x)/R,this.z=(p-h)/R,this.w=Math.acos((u+m+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jp extends ms{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new en(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Nc(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Jp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Sf extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qp extends en{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ia{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Yn):Yn.fromBufferAttribute(s,a),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),da.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),da.copy(n.boundingBox)),da.applyMatrix4(t.matrixWorld),this.union(da)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),pa.subVectors(this.max,As),Ir.subVectors(t.a,As),Fr.subVectors(t.b,As),Nr.subVectors(t.c,As),Ni.subVectors(Fr,Ir),Oi.subVectors(Nr,Fr),or.subVectors(Ir,Nr);let e=[0,-Ni.z,Ni.y,0,-Oi.z,Oi.y,0,-or.z,or.y,Ni.z,0,-Ni.x,Oi.z,0,-Oi.x,or.z,0,-or.x,-Ni.y,Ni.x,0,-Oi.y,Oi.x,0,-or.y,or.x,0];return!Ro(e,Ir,Fr,Nr,pa)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,Ir,Fr,Nr,pa))?!1:(ma.crossVectors(Ni,Oi),e=[ma.x,ma.y,ma.z],Ro(e,Ir,Fr,Nr,pa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const vi=[new q,new q,new q,new q,new q,new q,new q,new q],Yn=new q,da=new ia,Ir=new q,Fr=new q,Nr=new q,Ni=new q,Oi=new q,or=new q,As=new q,pa=new q,ma=new q,lr=new q;function Ro(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){lr.fromArray(r,s);const o=i.x*Math.abs(lr.x)+i.y*Math.abs(lr.y)+i.z*Math.abs(lr.z),c=t.dot(lr),u=e.dot(lr),h=n.dot(lr);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const tm=new ia,ws=new q,Co=new q;class oo{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):tm.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);const e=ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ws,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(Co)),this.expandByPoint(ws.copy(t.center).sub(Co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const xi=new q,Po=new q,_a=new q,Bi=new q,Do=new q,ga=new q,Lo=new q;class Oc{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Po.copy(t).add(e).multiplyScalar(.5),_a.copy(e).sub(t).normalize(),Bi.copy(this.origin).sub(Po);const s=t.distanceTo(e)*.5,a=-this.direction.dot(_a),o=Bi.dot(this.direction),c=-Bi.dot(_a),u=Bi.lengthSq(),h=Math.abs(1-a*a);let f,p,m,S;if(h>0)if(f=a*c-o,p=a*o-c,S=s*h,f>=0)if(p>=-S)if(p<=S){const x=1/h;f*=x,p*=x,m=f*(f+a*p+2*o)+p*(a*f+p+2*c)+u}else p=s,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+u;else p=-s,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+u;else p<=-S?(f=Math.max(0,-(-a*s+o)),p=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+p*(p+2*c)+u):p<=S?(f=0,p=Math.min(Math.max(-s,-c),s),m=p*(p+2*c)+u):(f=Math.max(0,-(a*s+o)),p=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+p*(p+2*c)+u);else p=a>0?-s:s,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Po).addScaledVector(_a,p),m}intersectSphere(t,e){xi.subVectors(t.center,this.origin);const n=xi.dot(this.direction),i=xi.dot(xi)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(n=(t.min.x-p.x)*u,i=(t.max.x-p.x)*u):(n=(t.max.x-p.x)*u,i=(t.min.x-p.x)*u),h>=0?(s=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(o=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,n,i,s){Do.subVectors(e,t),ga.subVectors(n,t),Lo.crossVectors(Do,ga);let a=this.direction.dot(Lo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,t);const c=o*this.direction.dot(ga.crossVectors(Bi,ga));if(c<0)return null;const u=o*this.direction.dot(Do.cross(Bi));if(u<0||c+u>a)return null;const h=-o*Bi.dot(Lo);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(t,e,n,i,s,a,o,c,u,h,f,p,m,S,x,g){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,u,h,f,p,m,S,x,g)}set(t,e,n,i,s,a,o,c,u,h,f,p,m,S,x,g){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=u,_[6]=h,_[10]=f,_[14]=p,_[3]=m,_[7]=S,_[11]=x,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Or.setFromMatrixColumn(t,0).length(),s=1/Or.setFromMatrixColumn(t,1).length(),a=1/Or.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const p=a*h,m=a*f,S=o*h,x=o*f;e[0]=c*h,e[4]=-c*f,e[8]=u,e[1]=m+S*u,e[5]=p-x*u,e[9]=-o*c,e[2]=x-p*u,e[6]=S+m*u,e[10]=a*c}else if(t.order==="YXZ"){const p=c*h,m=c*f,S=u*h,x=u*f;e[0]=p+x*o,e[4]=S*o-m,e[8]=a*u,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-S,e[6]=x+p*o,e[10]=a*c}else if(t.order==="ZXY"){const p=c*h,m=c*f,S=u*h,x=u*f;e[0]=p-x*o,e[4]=-a*f,e[8]=S+m*o,e[1]=m+S*o,e[5]=a*h,e[9]=x-p*o,e[2]=-a*u,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const p=a*h,m=a*f,S=o*h,x=o*f;e[0]=c*h,e[4]=S*u-m,e[8]=p*u+x,e[1]=c*f,e[5]=x*u+p,e[9]=m*u-S,e[2]=-u,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const p=a*c,m=a*u,S=o*c,x=o*u;e[0]=c*h,e[4]=x-p*f,e[8]=S*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-u*h,e[6]=m*f+S,e[10]=p-x*f}else if(t.order==="XZY"){const p=a*c,m=a*u,S=o*c,x=o*u;e[0]=c*h,e[4]=-f,e[8]=u*h,e[1]=p*f+x,e[5]=a*h,e[9]=m*f-S,e[2]=S*f-m,e[6]=o*h,e[10]=x*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(em,t,nm)}lookAt(t,e,n){const i=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),zi.crossVectors(n,wn),zi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),zi.crossVectors(n,wn)),zi.normalize(),va.crossVectors(wn,zi),i[0]=zi.x,i[4]=va.x,i[8]=wn.x,i[1]=zi.y,i[5]=va.y,i[9]=wn.y,i[2]=zi.z,i[6]=va.z,i[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],f=n[5],p=n[9],m=n[13],S=n[2],x=n[6],g=n[10],_=n[14],R=n[3],C=n[7],b=n[11],P=n[15],L=i[0],D=i[4],O=i[8],M=i[12],y=i[1],w=i[5],G=i[9],z=i[13],K=i[2],$=i[6],B=i[10],k=i[14],J=i[3],at=i[7],ht=i[11],gt=i[15];return s[0]=a*L+o*y+c*K+u*J,s[4]=a*D+o*w+c*$+u*at,s[8]=a*O+o*G+c*B+u*ht,s[12]=a*M+o*z+c*k+u*gt,s[1]=h*L+f*y+p*K+m*J,s[5]=h*D+f*w+p*$+m*at,s[9]=h*O+f*G+p*B+m*ht,s[13]=h*M+f*z+p*k+m*gt,s[2]=S*L+x*y+g*K+_*J,s[6]=S*D+x*w+g*$+_*at,s[10]=S*O+x*G+g*B+_*ht,s[14]=S*M+x*z+g*k+_*gt,s[3]=R*L+C*y+b*K+P*J,s[7]=R*D+C*w+b*$+P*at,s[11]=R*O+C*G+b*B+P*ht,s[15]=R*M+C*z+b*k+P*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],u=t[13],h=t[2],f=t[6],p=t[10],m=t[14],S=t[3],x=t[7],g=t[11],_=t[15],R=c*m-u*p,C=o*m-u*f,b=o*p-c*f,P=a*m-u*h,L=a*p-c*h,D=a*f-o*h;return e*(x*R-g*C+_*b)-n*(S*R-g*P+_*L)+i*(S*C-x*P+_*D)-s*(S*b-x*L+g*D)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],h=t[8],f=t[9],p=t[10],m=t[11],S=t[12],x=t[13],g=t[14],_=t[15],R=f*g*u-x*p*u+x*c*m-o*g*m-f*c*_+o*p*_,C=S*p*u-h*g*u-S*c*m+a*g*m+h*c*_-a*p*_,b=h*x*u-S*f*u+S*o*m-a*x*m-h*o*_+a*f*_,P=S*f*c-h*x*c-S*o*p+a*x*p+h*o*g-a*f*g,L=e*R+n*C+i*b+s*P;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return t[0]=R*D,t[1]=(x*p*s-f*g*s-x*i*m+n*g*m+f*i*_-n*p*_)*D,t[2]=(o*g*s-x*c*s+x*i*u-n*g*u-o*i*_+n*c*_)*D,t[3]=(f*c*s-o*p*s-f*i*u+n*p*u+o*i*m-n*c*m)*D,t[4]=C*D,t[5]=(h*g*s-S*p*s+S*i*m-e*g*m-h*i*_+e*p*_)*D,t[6]=(S*c*s-a*g*s-S*i*u+e*g*u+a*i*_-e*c*_)*D,t[7]=(a*p*s-h*c*s+h*i*u-e*p*u-a*i*m+e*c*m)*D,t[8]=b*D,t[9]=(S*f*s-h*x*s-S*n*m+e*x*m+h*n*_-e*f*_)*D,t[10]=(a*x*s-S*o*s+S*n*u-e*x*u-a*n*_+e*o*_)*D,t[11]=(h*o*s-a*f*s-h*n*u+e*f*u+a*n*m-e*o*m)*D,t[12]=P*D,t[13]=(h*x*i-S*f*i+S*n*p-e*x*p-h*n*g+e*f*g)*D,t[14]=(S*o*i-a*x*i-S*n*c+e*x*c+a*n*g-e*o*g)*D,t[15]=(a*f*i-h*o*i+h*n*c-e*f*c-a*n*p+e*o*p)*D,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,u=s*a,h=s*o;return this.set(u*a+n,u*o-i*c,u*c+i*o,0,u*o+i*c,h*o+n,h*c-i*a,0,u*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,u=s+s,h=a+a,f=o+o,p=s*u,m=s*h,S=s*f,x=a*h,g=a*f,_=o*f,R=c*u,C=c*h,b=c*f,P=n.x,L=n.y,D=n.z;return i[0]=(1-(x+_))*P,i[1]=(m+b)*P,i[2]=(S-C)*P,i[3]=0,i[4]=(m-b)*L,i[5]=(1-(p+_))*L,i[6]=(g+R)*L,i[7]=0,i[8]=(S+C)*D,i[9]=(g-R)*D,i[10]=(1-(p+x))*D,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;if(t.x=i[12],t.y=i[13],t.z=i[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=Or.set(i[0],i[1],i[2]).length();const a=Or.set(i[4],i[5],i[6]).length(),o=Or.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),qn.copy(this);const u=1/s,h=1/a,f=1/o;return qn.elements[0]*=u,qn.elements[1]*=u,qn.elements[2]*=u,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,e.setFromRotationMatrix(qn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=si,c=!1){const u=this.elements,h=2*s/(e-t),f=2*s/(n-i),p=(e+t)/(e-t),m=(n+i)/(n-i);let S,x;if(c)S=s/(a-s),x=a*s/(a-s);else if(o===si)S=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===qa)S=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=f,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=S,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=si,c=!1){const u=this.elements,h=2/(e-t),f=2/(n-i),p=-(e+t)/(e-t),m=-(n+i)/(n-i);let S,x;if(c)S=1/(a-s),x=a/(a-s);else if(o===si)S=-2/(a-s),x=-(a+s)/(a-s);else if(o===qa)S=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=p,u[1]=0,u[5]=f,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=S,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Or=new q,qn=new Ce,em=new q(0,0,0),nm=new q(1,1,1),zi=new q,va=new q,wn=new q,Ou=new Ce,Bu=new na;class fi{constructor(t=0,e=0,n=0,i=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],c=i[1],u=i[5],h=i[9],f=i[2],p=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(re(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ou.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ou,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Bc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let im=0;const zu=new q,Br=new na,Si=new Ce,xa=new q,Rs=new q,rm=new q,sm=new na,Vu=new q(1,0,0),ku=new q(0,1,0),Gu=new q(0,0,1),Hu={type:"added"},am={type:"removed"},zr={type:"childadded",child:null},Uo={type:"childremoved",child:null};class mn extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const t=new q,e=new fi,n=new na,i=new q(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Zt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Br.setFromAxisAngle(t,e),this.quaternion.multiply(Br),this}rotateOnWorldAxis(t,e){return Br.setFromAxisAngle(t,e),this.quaternion.premultiply(Br),this}rotateX(t){return this.rotateOnAxis(Vu,t)}rotateY(t){return this.rotateOnAxis(ku,t)}rotateZ(t){return this.rotateOnAxis(Gu,t)}translateOnAxis(t,e){return zu.copy(t).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vu,t)}translateY(t){return this.translateOnAxis(ku,t)}translateZ(t){return this.translateOnAxis(Gu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xa.copy(t):xa.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Rs,xa,this.up):Si.lookAt(xa,Rs,this.up),this.quaternion.setFromRotationMatrix(Si),i&&(Si.extractRotation(i.matrixWorld),Br.setFromRotationMatrix(Si),this.quaternion.premultiply(Br.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hu),zr.child=t,this.dispatchEvent(zr),zr.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(am),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hu),zr.child=t,this.dispatchEvent(zr),zr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,rm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,sm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const f=c[u];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),u=a(t.textures),h=a(t.images),f=a(t.shapes),p=a(t.skeletons),m=a(t.animations),S=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),S.length>0&&(n.nodes=S)}return n.object=i,n;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}mn.DEFAULT_UP=new q(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new q,yi=new q,Io=new q,Mi=new q,Vr=new q,kr=new q,Wu=new q,Fo=new q,No=new q,Oo=new q,Bo=new Oe,zo=new Oe,Vo=new Oe;class $n{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Kn.subVectors(t,e),i.cross(Kn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Kn.subVectors(i,e),yi.subVectors(n,e),Io.subVectors(t,e);const a=Kn.dot(Kn),o=Kn.dot(yi),c=Kn.dot(Io),u=yi.dot(yi),h=yi.dot(Io),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const p=1/f,m=(u*c-o*h)*p,S=(a*h-o*c)*p;return s.set(1-m-S,S,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Mi.x),c.addScaledVector(a,Mi.y),c.addScaledVector(o,Mi.z),c)}static getInterpolatedAttribute(t,e,n,i,s,a){return Bo.setScalar(0),zo.setScalar(0),Vo.setScalar(0),Bo.fromBufferAttribute(t,e),zo.fromBufferAttribute(t,n),Vo.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Bo,s.x),a.addScaledVector(zo,s.y),a.addScaledVector(Vo,s.z),a}static isFrontFacing(t,e,n,i){return Kn.subVectors(n,e),yi.subVectors(t,e),Kn.cross(yi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Kn.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return $n.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return $n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Vr.subVectors(i,n),kr.subVectors(s,n),Fo.subVectors(t,n);const c=Vr.dot(Fo),u=kr.dot(Fo);if(c<=0&&u<=0)return e.copy(n);No.subVectors(t,i);const h=Vr.dot(No),f=kr.dot(No);if(h>=0&&f<=h)return e.copy(i);const p=c*f-h*u;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Vr,a);Oo.subVectors(t,s);const m=Vr.dot(Oo),S=kr.dot(Oo);if(S>=0&&m<=S)return e.copy(s);const x=m*u-c*S;if(x<=0&&u>=0&&S<=0)return o=u/(u-S),e.copy(n).addScaledVector(kr,o);const g=h*S-m*f;if(g<=0&&f-h>=0&&m-S>=0)return Wu.subVectors(s,i),o=(f-h)/(f-h+(m-S)),e.copy(i).addScaledVector(Wu,o);const _=1/(g+x+p);return a=x*_,o=p*_,e.copy(n).addScaledVector(Vr,a).addScaledVector(kr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function ko(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class he{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ue.workingColorSpace){if(t=Yp(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ko(a,s,t+1/3),this.g=ko(a,s,t),this.b=ko(a,s,t-1/3)}return ue.colorSpaceToWorking(this,i),this}setStyle(t,e=Cn){function n(s){s!==void 0&&parseFloat(s)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Cn){const n=yf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=Jr(t.r),this.g=Jr(t.g),this.b=Jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return ue.workingToColorSpace(an.copy(this),t),Math.round(re(an.r*255,0,255))*65536+Math.round(re(an.g*255,0,255))*256+Math.round(re(an.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(an.copy(this),e);const n=an.r,i=an.g,s=an.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Cn){ue.workingToColorSpace(an.copy(this),t);const e=an.r,n=an.g,i=an.b;return t!==Cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Sa);const n=Eo(Vi.h,Sa.h,e),i=Eo(Vi.s,Sa.s,e),s=Eo(Vi.l,Sa.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new he;he.NAMES=yf;let om=0;class _s extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=ea(),this.name="",this.type="Material",this.blending=Zr,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=xl,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(n.blending=this.blending),this.side!==Zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vl&&(n.blendSrc=this.blendSrc),this.blendDst!==xl&&(n.blendDst=this.blendDst),this.blendEquation!==gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Mf extends _s{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ge=new q,ya=new fe;let lm=0;class ci{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pu,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ya.fromBufferAttribute(this,e),ya.applyMatrix3(t),this.setXY(e,ya.x,ya.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bs(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bs(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bs(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),i=gn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pu&&(t.usage=this.usage),t}}class Ef extends ci{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Tf extends ci{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ui extends ci{constructor(t,e,n){super(new Float32Array(t),e,n)}}let cm=0;const kn=new Ce,Go=new mn,Gr=new q,Rn=new ia,Cs=new ia,qe=new q;class Jn extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xf(t)?Tf:Ef)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,n){return kn.makeTranslation(t,e,n),this.applyMatrix4(kn),this}scale(t,e,n){return kn.makeScale(t,e,n),this.applyMatrix4(kn),this}lookAt(t){return Go.lookAt(t),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ui(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ia);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(Rn.min,Cs.min),Rn.expandByPoint(qe),qe.addVectors(Rn.max,Cs.max),Rn.expandByPoint(qe)):(Rn.expandByPoint(Cs.min),Rn.expandByPoint(Cs.max))}Rn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)qe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(qe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)qe.fromBufferAttribute(o,u),c&&(Gr.fromBufferAttribute(t,u),qe.add(Gr)),i=Math.max(i,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let O=0;O<n.count;O++)o[O]=new q,c[O]=new q;const u=new q,h=new q,f=new q,p=new fe,m=new fe,S=new fe,x=new q,g=new q;function _(O,M,y){u.fromBufferAttribute(n,O),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,y),p.fromBufferAttribute(s,O),m.fromBufferAttribute(s,M),S.fromBufferAttribute(s,y),h.sub(u),f.sub(u),m.sub(p),S.sub(p);const w=1/(m.x*S.y-S.x*m.y);isFinite(w)&&(x.copy(h).multiplyScalar(S.y).addScaledVector(f,-m.y).multiplyScalar(w),g.copy(f).multiplyScalar(m.x).addScaledVector(h,-S.x).multiplyScalar(w),o[O].add(x),o[M].add(x),o[y].add(x),c[O].add(g),c[M].add(g),c[y].add(g))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let O=0,M=R.length;O<M;++O){const y=R[O],w=y.start,G=y.count;for(let z=w,K=w+G;z<K;z+=3)_(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const C=new q,b=new q,P=new q,L=new q;function D(O){P.fromBufferAttribute(i,O),L.copy(P);const M=o[O];C.copy(M),C.sub(P.multiplyScalar(P.dot(M))).normalize(),b.crossVectors(L,M);const w=b.dot(c[O])<0?-1:1;a.setXYZW(O,C.x,C.y,C.z,w)}for(let O=0,M=R.length;O<M;++O){const y=R[O],w=y.start,G=y.count;for(let z=w,K=w+G;z<K;z+=3)D(t.getX(z+0)),D(t.getX(z+1)),D(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ci(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const i=new q,s=new q,a=new q,o=new q,c=new q,u=new q,h=new q,f=new q;if(t)for(let p=0,m=t.count;p<m;p+=3){const S=t.getX(p+0),x=t.getX(p+1),g=t.getX(p+2);i.fromBufferAttribute(e,S),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),o.fromBufferAttribute(n,S),c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,g),o.add(h),c.add(h),u.add(h),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let p=0,m=e.count;p<m;p+=3)i.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,c){const u=o.array,h=o.itemSize,f=o.normalized,p=new u.constructor(c.length*h);let m=0,S=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*h;for(let _=0;_<h;_++)p[S++]=u[m++]}return new ci(p,h,f)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Jn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],u=t(c,n);e.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,f=u.length;h<f;h++){const p=u[h],m=t(p,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let f=0,p=u.length;f<p;f++){const m=u[f];h.push(m.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const u in i){const h=i[u];this.setAttribute(u,h.clone(e))}const s=t.morphAttributes;for(const u in s){const h=[],f=s[u];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xu=new Ce,cr=new Oc,Ma=new oo,ju=new q,Ea=new q,Ta=new q,ba=new q,Ho=new q,Aa=new q,Yu=new q,wa=new q;class di extends mn{constructor(t=new Jn,e=new Mf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Aa.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],f=s[c];h!==0&&(Ho.fromBufferAttribute(f,t),a?Aa.addScaledVector(Ho,h):Aa.addScaledVector(Ho.sub(e),h))}e.add(Aa)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(s),cr.copy(t.ray).recast(t.near),!(Ma.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Ma,ju)===null||cr.origin.distanceToSquared(ju)>(t.far-t.near)**2))&&(Xu.copy(s).invert(),cr.copy(t.ray).applyMatrix4(Xu),!(n.boundingBox!==null&&cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,p=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let S=0,x=p.length;S<x;S++){const g=p[S],_=a[g.materialIndex],R=Math.max(g.start,m.start),C=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let b=R,P=C;b<P;b+=3){const L=o.getX(b),D=o.getX(b+1),O=o.getX(b+2);i=Ra(this,_,t,n,u,h,f,L,D,O),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const S=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let g=S,_=x;g<_;g+=3){const R=o.getX(g),C=o.getX(g+1),b=o.getX(g+2);i=Ra(this,a,t,n,u,h,f,R,C,b),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let S=0,x=p.length;S<x;S++){const g=p[S],_=a[g.materialIndex],R=Math.max(g.start,m.start),C=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let b=R,P=C;b<P;b+=3){const L=b,D=b+1,O=b+2;i=Ra(this,_,t,n,u,h,f,L,D,O),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const S=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let g=S,_=x;g<_;g+=3){const R=g,C=g+1,b=g+2;i=Ra(this,a,t,n,u,h,f,R,C,b),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function um(r,t,e,n,i,s,a,o){let c;if(t.side===vn?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===Zi,o),c===null)return null;wa.copy(o),wa.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(wa);return u<e.near||u>e.far?null:{distance:u,point:wa.clone(),object:r}}function Ra(r,t,e,n,i,s,a,o,c,u){r.getVertexPosition(o,Ea),r.getVertexPosition(c,Ta),r.getVertexPosition(u,ba);const h=um(r,t,e,n,Ea,Ta,ba,Yu);if(h){const f=new q;$n.getBarycoord(Yu,Ea,Ta,ba,f),i&&(h.uv=$n.getInterpolatedAttribute(i,o,c,u,f,new fe)),s&&(h.uv1=$n.getInterpolatedAttribute(s,o,c,u,f,new fe)),a&&(h.normal=$n.getInterpolatedAttribute(a,o,c,u,f,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:c,c:u,normal:new q,materialIndex:0};$n.getNormal(Ea,Ta,ba,p.normal),h.face=p,h.barycoord=f}return h}class gs extends Jn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],f=[];let p=0,m=0;S("z","y","x",-1,-1,n,e,t,a,s,0),S("z","y","x",1,-1,n,e,-t,a,s,1),S("x","z","y",1,1,t,n,e,i,a,2),S("x","z","y",1,-1,t,n,-e,i,a,3),S("x","y","z",1,-1,t,e,n,i,s,4),S("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ui(u,3)),this.setAttribute("normal",new ui(h,3)),this.setAttribute("uv",new ui(f,2));function S(x,g,_,R,C,b,P,L,D,O,M){const y=b/D,w=P/O,G=b/2,z=P/2,K=L/2,$=D+1,B=O+1;let k=0,J=0;const at=new q;for(let ht=0;ht<B;ht++){const gt=ht*w-z;for(let Nt=0;Nt<$;Nt++){const Bt=Nt*y-G;at[x]=Bt*R,at[g]=gt*C,at[_]=K,u.push(at.x,at.y,at.z),at[x]=0,at[g]=0,at[_]=L>0?1:-1,h.push(at.x,at.y,at.z),f.push(Nt/D),f.push(1-ht/O),k+=1}}for(let ht=0;ht<O;ht++)for(let gt=0;gt<D;gt++){const Nt=p+gt+$*ht,Bt=p+gt+$*(ht+1),Jt=p+(gt+1)+$*(ht+1),Qt=p+(gt+1)+$*ht;c.push(Nt,Bt,Qt),c.push(Bt,Jt,Qt),J+=6}o.addGroup(m,J,M),m+=J,p+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function os(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function fn(r){const t={};for(let e=0;e<r.length;e++){const n=os(r[e]);for(const i in n)t[i]=n[i]}return t}function hm(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function bf(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const fm={clone:os,merge:fn};var dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends _s{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dm,this.fragmentShader=pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=hm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Af extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new q,qu=new fe,Ku=new fe;class Dn extends Af{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cc*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,qu,Ku),e.subVectors(Ku,qu)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Mo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/u,i*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hr=-90,Wr=1;class mm extends mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Dn(Hr,Wr,t,e);i.layers=this.layers,this.add(i);const s=new Dn(Hr,Wr,t,e);s.layers=this.layers,this.add(s);const a=new Dn(Hr,Wr,t,e);a.layers=this.layers,this.add(a);const o=new Dn(Hr,Wr,t,e);o.layers=this.layers,this.add(o);const c=new Dn(Hr,Wr,t,e);c.layers=this.layers,this.add(c);const u=new Dn(Hr,Wr,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,c]=e;for(const u of e)this.remove(u);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===qa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,h]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,u),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,p,m),t.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class wf extends en{constructor(t=[],e=Ar,n,i,s,a,o,c,u,h){super(t,e,n,i,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rf extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new wf(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new gs(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:wi});s.uniforms.tEquirect.value=e;const a=new di(i,s),o=e.minFilter;return e.minFilter===xr&&(e.minFilter=ln),new mm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}class Fs extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _m={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),_=this._getHandJoint(u,x);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,S=.005;u.inputState.pinching&&p>m+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&p<=m-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_m)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Fs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class zc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new he(t),this.density=e}clone(){return new zc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class gm extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class vm extends en{constructor(t=null,e=1,n=1,i,s,a,o,c,u=tn,h=tn,f,p){super(null,a,o,c,u,h,i,s,f,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xo=new q,xm=new q,Sm=new Zt;class mr{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Xo.subVectors(n,e).cross(xm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Sm.getNormalMatrix(t),i=this.coplanarPoint(Xo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new oo,ym=new fe(.5,.5),Ca=new q;class Vc{constructor(t=new mr,e=new mr,n=new mr,i=new mr,s=new mr,a=new mr){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si,n=!1){const i=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],u=s[3],h=s[4],f=s[5],p=s[6],m=s[7],S=s[8],x=s[9],g=s[10],_=s[11],R=s[12],C=s[13],b=s[14],P=s[15];if(i[0].setComponents(u-a,m-h,_-S,P-R).normalize(),i[1].setComponents(u+a,m+h,_+S,P+R).normalize(),i[2].setComponents(u+o,m+f,_+x,P+C).normalize(),i[3].setComponents(u-o,m-f,_-x,P-C).normalize(),n)i[4].setComponents(c,p,g,b).normalize(),i[5].setComponents(u-c,m-p,_-g,P-b).normalize();else if(i[4].setComponents(u-c,m-p,_-g,P-b).normalize(),e===si)i[5].setComponents(u+c,m+p,_+g,P+b).normalize();else if(e===qa)i[5].setComponents(c,p,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(t){ur.center.set(0,0,0);const e=ym.distanceTo(t.center);return ur.radius=.7071067811865476+e,ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ca.x=i.normal.x>0?t.max.x:t.min.x,Ca.y=i.normal.y>0?t.max.y:t.min.y,Ca.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cf extends _s{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ka=new q,$a=new q,$u=new Ce,Ps=new Oc,Pa=new oo,jo=new q,Zu=new q;class Mm extends mn{constructor(t=new Jn,e=new Cf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ka.fromBufferAttribute(e,i-1),$a.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ka.distanceTo($a);t.setAttribute("lineDistance",new ui(n,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(i),Pa.radius+=s,t.ray.intersectsSphere(Pa)===!1)return;$u.copy(i).invert(),Ps.copy(t.ray).applyMatrix4($u);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),S=Math.min(h.count,a.start+a.count);for(let x=m,g=S-1;x<g;x+=u){const _=h.getX(x),R=h.getX(x+1),C=Da(this,t,Ps,c,_,R,x);C&&e.push(C)}if(this.isLineLoop){const x=h.getX(S-1),g=h.getX(m),_=Da(this,t,Ps,c,x,g,S-1);_&&e.push(_)}}else{const m=Math.max(0,a.start),S=Math.min(p.count,a.start+a.count);for(let x=m,g=S-1;x<g;x+=u){const _=Da(this,t,Ps,c,x,x+1,x);_&&e.push(_)}if(this.isLineLoop){const x=Da(this,t,Ps,c,S-1,m,S-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Da(r,t,e,n,i,s,a){const o=r.geometry.attributes.position;if(Ka.fromBufferAttribute(o,i),$a.fromBufferAttribute(o,s),e.distanceSqToSegment(Ka,$a,jo,Zu)>n)return;jo.applyMatrix4(r.matrixWorld);const u=t.ray.origin.distanceTo(jo);if(!(u<t.near||u>t.far))return{distance:u,point:Zu.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}class Em extends en{constructor(t,e,n,i,s,a,o,c,u){super(t,e,n,i,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class js extends en{constructor(t,e,n=hi,i,s,a,o=tn,c=tn,u,h=Pi,f=1){if(h!==Pi&&h!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:f};super(p,i,s,a,o,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Nc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Tm extends js{constructor(t,e=hi,n=Ar,i,s,a=tn,o=tn,c,u=Pi){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,s,a,o,c,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Pf extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class bm{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,u;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),u=n[i]-a,u<0)o=i+1;else if(u>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);const h=n[i],p=n[i+1]-h,m=(a-h)/p;return(i+m)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),c=e||(a.isVector2?new fe:new q);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new q,i=[],s=[],a=[],o=new q,c=new Ce;for(let m=0;m<=t;m++){const S=m/t;i[m]=this.getTangentAt(S,new q)}s[0]=new q,a[0]=new q;let u=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),p=Math.abs(i[0].z);h<=u&&(u=h,n.set(1,0,0)),f<=u&&(u=f,n.set(0,1,0)),p<=u&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(i[m-1],i[m]),o.length()>Number.EPSILON){o.normalize();const S=Math.acos(re(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(o,S))}a[m].crossVectors(i[m],s[m])}if(e===!0){let m=Math.acos(re(s[0].dot(s[t]),-1,1));m/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let S=1;S<=t;S++)s[S].applyMatrix4(c.makeRotationAxis(i[S],m*S)),a[S].crossVectors(i[S],s[S])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function kc(){let r=0,t=0,e=0,n=0;function i(s,a,o,c){r=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,u){i(a,o,u*(o-s),u*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,u,h,f){let p=(a-s)/u-(o-s)/(u+h)+(o-a)/h,m=(o-a)/h-(c-a)/(h+f)+(c-o)/f;p*=h,m*=h,i(a,o,p,m)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const La=new q,Yo=new kc,qo=new kc,Ko=new kc;class Am extends bm{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new q){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let u,h;this.closed||o>0?u=i[(o-1)%s]:(La.subVectors(i[0],i[1]).add(i[0]),u=La);const f=i[o%s],p=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(La.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=La),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let S=Math.pow(u.distanceToSquared(f),m),x=Math.pow(f.distanceToSquared(p),m),g=Math.pow(p.distanceToSquared(h),m);x<1e-4&&(x=1),S<1e-4&&(S=x),g<1e-4&&(g=x),Yo.initNonuniformCatmullRom(u.x,f.x,p.x,h.x,S,x,g),qo.initNonuniformCatmullRom(u.y,f.y,p.y,h.y,S,x,g),Ko.initNonuniformCatmullRom(u.z,f.z,p.z,h.z,S,x,g)}else this.curveType==="catmullrom"&&(Yo.initCatmullRom(u.x,f.x,p.x,h.x,this.tension),qo.initCatmullRom(u.y,f.y,p.y,h.y,this.tension),Ko.initCatmullRom(u.z,f.z,p.z,h.z,this.tension));return n.set(Yo.calc(c),qo.calc(c),Ko.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new q().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class ra extends Jn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),u=o+1,h=c+1,f=t/o,p=e/c,m=[],S=[],x=[],g=[];for(let _=0;_<h;_++){const R=_*p-a;for(let C=0;C<u;C++){const b=C*f-s;S.push(b,-R,0),x.push(0,0,1),g.push(C/o),g.push(1-_/c)}}for(let _=0;_<c;_++)for(let R=0;R<o;R++){const C=R+u*_,b=R+u*(_+1),P=R+1+u*(_+1),L=R+1+u*_;m.push(C,b,L),m.push(b,P,L)}this.setIndex(m),this.setAttribute("position",new ui(S,3)),this.setAttribute("normal",new ui(x,3)),this.setAttribute("uv",new ui(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.width,t.height,t.widthSegments,t.heightSegments)}}class wm extends pi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xr extends _s{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vf,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rm extends _s{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cm extends _s{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Pm extends Cf{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const $o={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Dm{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){const f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=u.length;f<p;f+=2){const m=u[f],S=u[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Lm=new Dm;class Gc{constructor(t){this.manager=t!==void 0?t:Lm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Gc.DEFAULT_MATERIAL_NAME="__DEFAULT";const jr=new WeakMap;class Um extends Gc{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=$o.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let f=jr.get(a);f===void 0&&(f=[],jr.set(a,f)),f.push({onLoad:e,onError:i})}return a}const o=Ws("img");function c(){h(),e&&e(this);const f=jr.get(this)||[];for(let p=0;p<f.length;p++){const m=f[p];m.onLoad&&m.onLoad(this)}jr.delete(this),s.manager.itemEnd(t)}function u(f){h(),i&&i(f),$o.remove(`image:${t}`);const p=jr.get(this)||[];for(let m=0;m<p.length;m++){const S=p[m];S.onError&&S.onError(f)}jr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$o.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class Im extends Gc{constructor(t){super(t)}load(t,e,n,i){const s=new en,a=new Um(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Df extends mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Zo=new Ce,Ju=new q,Qu=new q;class Fm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vc,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ju.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ju),Qu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qu),e.updateMatrixWorld(),Zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Nm extends Fm{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0}}class Om extends Df{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Nm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Lf extends Af{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Bm extends Df{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class zm extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const th=new Ce;class Vm{constructor(t,e,n=0,i=1/0){this.ray=new Oc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return th.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(th),this}intersectObject(t,e=!0,n=[]){return uc(t,this,n,e),n.sort(eh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)uc(t[i],this,n,e);return n.sort(eh),n}}function eh(r,t){return r.distance-t.distance}function uc(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)uc(s[a],t,e,!0)}}function nh(r,t,e,n){const i=km(n);switch(e){case mf:return r*t;case gf:return r*t/i.components*i.byteLength;case Dc:return r*t/i.components*i.byteLength;case ss:return r*t*2/i.components*i.byteLength;case Lc:return r*t*2/i.components*i.byteLength;case _f:return r*t*3/i.components*i.byteLength;case Zn:return r*t*4/i.components*i.byteLength;case Uc:return r*t*4/i.components*i.byteLength;case za:case Va:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ka:case Ga:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ll:case Il:return Math.max(r,16)*Math.max(t,8)/4;case Dl:case Ul:return Math.max(r,8)*Math.max(t,8)/2;case Fl:case Nl:case Bl:case zl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ol:case Vl:case kl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case jl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ql:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case $l:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case tc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ec:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case nc:case ic:case rc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case sc:case ac:return Math.ceil(r/4)*Math.ceil(t/4)*8;case oc:case lc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function km(r){switch(r){case Ln:case hf:return{byteLength:1,components:1};case Gs:case ff:case Ci:return{byteLength:2,components:1};case Cc:case Pc:return{byteLength:2,components:4};case hi:case Rc:case ri:return{byteLength:4,components:1};case df:case pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uf(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Gm(r){const t=new WeakMap;function e(o,c){const u=o.array,h=o.usage,f=u.byteLength,p=r.createBuffer();r.bindBuffer(c,p),r.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=r.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=r.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=r.SHORT;else if(u instanceof Uint32Array)m=r.UNSIGNED_INT;else if(u instanceof Int32Array)m=r.INT;else if(u instanceof Int8Array)m=r.BYTE;else if(u instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,u){const h=c.array,f=c.updateRanges;if(r.bindBuffer(u,o),f.length===0)r.bufferSubData(u,0,h);else{f.sort((m,S)=>m.start-S.start);let p=0;for(let m=1;m<f.length;m++){const S=f[p],x=f[m];x.start<=S.start+S.count+1?S.count=Math.max(S.count,x.start+x.count-S.start):(++p,f[p]=x)}f.length=p+1;for(let m=0,S=f.length;m<S;m++){const x=f[m];r.bufferSubData(u,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(r.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:i,remove:s,update:a}}var Hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wm=`#ifdef USE_ALPHAHASH
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
#endif`,Xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Km=`#ifdef USE_AOMAP
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
#endif`,$m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n_=`#ifdef USE_IRIDESCENCE
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
#endif`,i_=`#ifdef USE_BUMPMAP
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
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,f_=`#define PI 3.141592653589793
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
} // validated`,d_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p_=`vec3 transformedNormal = objectNormal;
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
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,__=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x_="gl_FragColor = linearToOutputTexel( gl_FragColor );",S_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y_=`#ifdef USE_ENVMAP
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
#endif`,M_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
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
#endif`,T_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
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
#endif`,A_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P_=`#ifdef USE_GRADIENTMAP
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
}`,D_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I_=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,F_=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,N_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,k_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,G_=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,H_=`#if defined( RE_IndirectDiffuse )
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
#endif`,W_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J_=`#if defined( USE_POINTS_UV )
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
#endif`,Q_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,og=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hg=`#ifdef USE_NORMALMAP
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
#endif`,fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ng=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Og=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hg=`uniform sampler2D t2D;
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`#include <common>
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
}`,Kg=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$g=`#define DISTANCE
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
}`,Zg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`uniform float scale;
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
}`,e0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 diffuse;
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
}`,r0=`#define LAMBERT
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
}`,s0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,a0=`#define MATCAP
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
}`,o0=`#define MATCAP
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
}`,l0=`#define NORMAL
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
}`,c0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u0=`#define PHONG
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
}`,h0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,f0=`#define STANDARD
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
}`,d0=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,p0=`#define TOON
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
}`,m0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,_0=`uniform float size;
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
}`,g0=`uniform vec3 diffuse;
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
}`,v0=`#include <common>
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
}`,x0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,S0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,y0=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:Hm,alphahash_pars_fragment:Wm,alphamap_fragment:Xm,alphamap_pars_fragment:jm,alphatest_fragment:Ym,alphatest_pars_fragment:qm,aomap_fragment:Km,aomap_pars_fragment:$m,batching_pars_vertex:Zm,batching_vertex:Jm,begin_vertex:Qm,beginnormal_vertex:t_,bsdfs:e_,iridescence_fragment:n_,bumpmap_pars_fragment:i_,clipping_planes_fragment:r_,clipping_planes_pars_fragment:s_,clipping_planes_pars_vertex:a_,clipping_planes_vertex:o_,color_fragment:l_,color_pars_fragment:c_,color_pars_vertex:u_,color_vertex:h_,common:f_,cube_uv_reflection_fragment:d_,defaultnormal_vertex:p_,displacementmap_pars_vertex:m_,displacementmap_vertex:__,emissivemap_fragment:g_,emissivemap_pars_fragment:v_,colorspace_fragment:x_,colorspace_pars_fragment:S_,envmap_fragment:y_,envmap_common_pars_fragment:M_,envmap_pars_fragment:E_,envmap_pars_vertex:T_,envmap_physical_pars_fragment:F_,envmap_vertex:b_,fog_vertex:A_,fog_pars_vertex:w_,fog_fragment:R_,fog_pars_fragment:C_,gradientmap_pars_fragment:P_,lightmap_pars_fragment:D_,lights_lambert_fragment:L_,lights_lambert_pars_fragment:U_,lights_pars_begin:I_,lights_toon_fragment:N_,lights_toon_pars_fragment:O_,lights_phong_fragment:B_,lights_phong_pars_fragment:z_,lights_physical_fragment:V_,lights_physical_pars_fragment:k_,lights_fragment_begin:G_,lights_fragment_maps:H_,lights_fragment_end:W_,logdepthbuf_fragment:X_,logdepthbuf_pars_fragment:j_,logdepthbuf_pars_vertex:Y_,logdepthbuf_vertex:q_,map_fragment:K_,map_pars_fragment:$_,map_particle_fragment:Z_,map_particle_pars_fragment:J_,metalnessmap_fragment:Q_,metalnessmap_pars_fragment:tg,morphinstance_vertex:eg,morphcolor_vertex:ng,morphnormal_vertex:ig,morphtarget_pars_vertex:rg,morphtarget_vertex:sg,normal_fragment_begin:ag,normal_fragment_maps:og,normal_pars_fragment:lg,normal_pars_vertex:cg,normal_vertex:ug,normalmap_pars_fragment:hg,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:dg,clearcoat_pars_fragment:pg,iridescence_pars_fragment:mg,opaque_fragment:_g,packing:gg,premultiplied_alpha_fragment:vg,project_vertex:xg,dithering_fragment:Sg,dithering_pars_fragment:yg,roughnessmap_fragment:Mg,roughnessmap_pars_fragment:Eg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:bg,shadowmap_vertex:Ag,shadowmask_pars_fragment:wg,skinbase_vertex:Rg,skinning_pars_vertex:Cg,skinning_vertex:Pg,skinnormal_vertex:Dg,specularmap_fragment:Lg,specularmap_pars_fragment:Ug,tonemapping_fragment:Ig,tonemapping_pars_fragment:Fg,transmission_fragment:Ng,transmission_pars_fragment:Og,uv_pars_fragment:Bg,uv_pars_vertex:zg,uv_vertex:Vg,worldpos_vertex:kg,background_vert:Gg,background_frag:Hg,backgroundCube_vert:Wg,backgroundCube_frag:Xg,cube_vert:jg,cube_frag:Yg,depth_vert:qg,depth_frag:Kg,distance_vert:$g,distance_frag:Zg,equirect_vert:Jg,equirect_frag:Qg,linedashed_vert:t0,linedashed_frag:e0,meshbasic_vert:n0,meshbasic_frag:i0,meshlambert_vert:r0,meshlambert_frag:s0,meshmatcap_vert:a0,meshmatcap_frag:o0,meshnormal_vert:l0,meshnormal_frag:c0,meshphong_vert:u0,meshphong_frag:h0,meshphysical_vert:f0,meshphysical_frag:d0,meshtoon_vert:p0,meshtoon_frag:m0,points_vert:_0,points_frag:g0,shadow_vert:v0,shadow_frag:x0,sprite_vert:S0,sprite_frag:y0},Et={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},ni={basic:{uniforms:fn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:fn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new he(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:fn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:fn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:fn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new he(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:fn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:fn([Et.points,Et.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:fn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:fn([Et.common,Et.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:fn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:fn([Et.sprite,Et.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:fn([Et.common,Et.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:fn([Et.lights,Et.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};ni.physical={uniforms:fn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Ua={r:0,b:0,g:0},hr=new fi,M0=new Ce;function E0(r,t,e,n,i,s,a){const o=new he(0);let c=s===!0?0:1,u,h,f=null,p=0,m=null;function S(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?e:t).get(b)),b}function x(C){let b=!1;const P=S(C);P===null?_(o,c):P&&P.isColor&&(_(P,1),b=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(C,b){const P=S(b);P&&(P.isCubeTexture||P.mapping===ao)?(h===void 0&&(h=new di(new gs(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:os(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),hr.copy(b.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(M0.makeRotationFromEuler(hr)),h.material.toneMapped=ue.getTransfer(P.colorSpace)!==Se,(f!==P||p!==P.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,f=P,p=P.version,m=r.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(u===void 0&&(u=new di(new ra(2,2),new pi({name:"BackgroundMaterial",uniforms:os(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=P,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=ue.getTransfer(P.colorSpace)!==Se,P.matrixAutoUpdate===!0&&P.updateMatrix(),u.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||p!==P.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,f=P,p=P.version,m=r.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null))}function _(C,b){C.getRGB(Ua,bf(r)),n.buffers.color.setClear(Ua.r,Ua.g,Ua.b,b,a)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(C,b=1){o.set(C),c=b,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,_(o,c)},render:x,addToRenderList:g,dispose:R}}function T0(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=p(null);let s=i,a=!1;function o(y,w,G,z,K){let $=!1;const B=f(z,G,w);s!==B&&(s=B,u(s.object)),$=m(y,z,G,K),$&&S(y,z,G,K),K!==null&&t.update(K,r.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,b(y,w,G,z),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return r.createVertexArray()}function u(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function f(y,w,G){const z=G.wireframe===!0;let K=n[y.id];K===void 0&&(K={},n[y.id]=K);let $=K[w.id];$===void 0&&($={},K[w.id]=$);let B=$[z];return B===void 0&&(B=p(c()),$[z]=B),B}function p(y){const w=[],G=[],z=[];for(let K=0;K<e;K++)w[K]=0,G[K]=0,z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:G,attributeDivisors:z,object:y,attributes:{},index:null}}function m(y,w,G,z){const K=s.attributes,$=w.attributes;let B=0;const k=G.getAttributes();for(const J in k)if(k[J].location>=0){const ht=K[J];let gt=$[J];if(gt===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(gt=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(gt=y.instanceColor)),ht===void 0||ht.attribute!==gt||gt&&ht.data!==gt.data)return!0;B++}return s.attributesNum!==B||s.index!==z}function S(y,w,G,z){const K={},$=w.attributes;let B=0;const k=G.getAttributes();for(const J in k)if(k[J].location>=0){let ht=$[J];ht===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor));const gt={};gt.attribute=ht,ht&&ht.data&&(gt.data=ht.data),K[J]=gt,B++}s.attributes=K,s.attributesNum=B,s.index=z}function x(){const y=s.newAttributes;for(let w=0,G=y.length;w<G;w++)y[w]=0}function g(y){_(y,0)}function _(y,w){const G=s.newAttributes,z=s.enabledAttributes,K=s.attributeDivisors;G[y]=1,z[y]===0&&(r.enableVertexAttribArray(y),z[y]=1),K[y]!==w&&(r.vertexAttribDivisor(y,w),K[y]=w)}function R(){const y=s.newAttributes,w=s.enabledAttributes;for(let G=0,z=w.length;G<z;G++)w[G]!==y[G]&&(r.disableVertexAttribArray(G),w[G]=0)}function C(y,w,G,z,K,$,B){B===!0?r.vertexAttribIPointer(y,w,G,K,$):r.vertexAttribPointer(y,w,G,z,K,$)}function b(y,w,G,z){x();const K=z.attributes,$=G.getAttributes(),B=w.defaultAttributeValues;for(const k in $){const J=$[k];if(J.location>=0){let at=K[k];if(at===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),at!==void 0){const ht=at.normalized,gt=at.itemSize,Nt=t.get(at);if(Nt===void 0)continue;const Bt=Nt.buffer,Jt=Nt.type,Qt=Nt.bytesPerElement,it=Jt===r.INT||Jt===r.UNSIGNED_INT||at.gpuType===Rc;if(at.isInterleavedBufferAttribute){const ot=at.data,wt=ot.stride,qt=at.offset;if(ot.isInstancedInterleavedBuffer){for(let Pt=0;Pt<J.locationSize;Pt++)_(J.location+Pt,ot.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Pt=0;Pt<J.locationSize;Pt++)g(J.location+Pt);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let Pt=0;Pt<J.locationSize;Pt++)C(J.location+Pt,gt/J.locationSize,Jt,ht,wt*Qt,(qt+gt/J.locationSize*Pt)*Qt,it)}else{if(at.isInstancedBufferAttribute){for(let ot=0;ot<J.locationSize;ot++)_(J.location+ot,at.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ot=0;ot<J.locationSize;ot++)g(J.location+ot);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let ot=0;ot<J.locationSize;ot++)C(J.location+ot,gt/J.locationSize,Jt,ht,gt*Qt,gt/J.locationSize*ot*Qt,it)}}else if(B!==void 0){const ht=B[k];if(ht!==void 0)switch(ht.length){case 2:r.vertexAttrib2fv(J.location,ht);break;case 3:r.vertexAttrib3fv(J.location,ht);break;case 4:r.vertexAttrib4fv(J.location,ht);break;default:r.vertexAttrib1fv(J.location,ht)}}}}R()}function P(){O();for(const y in n){const w=n[y];for(const G in w){const z=w[G];for(const K in z)h(z[K].object),delete z[K];delete w[G]}delete n[y]}}function L(y){if(n[y.id]===void 0)return;const w=n[y.id];for(const G in w){const z=w[G];for(const K in z)h(z[K].object),delete z[K];delete w[G]}delete n[y.id]}function D(y){for(const w in n){const G=n[w];if(G[y.id]===void 0)continue;const z=G[y.id];for(const K in z)h(z[K].object),delete z[K];delete G[y.id]}}function O(){M(),a=!0,s!==i&&(s=i,u(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:O,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:g,disableUnusedAttributes:R}}function b0(r,t,e){let n;function i(u){n=u}function s(u,h){r.drawArrays(n,u,h),e.update(h,n,1)}function a(u,h,f){f!==0&&(r.drawArraysInstanced(n,u,h,f),e.update(h,n,f))}function o(u,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,f);let m=0;for(let S=0;S<f;S++)m+=h[S];e.update(m,n,1)}function c(u,h,f,p){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let S=0;S<u.length;S++)a(u[S],h[S],p[S]);else{m.multiDrawArraysInstancedWEBGL(n,u,0,h,0,p,0,f);let S=0;for(let x=0;x<f;x++)S+=h[x]*p[x];e.update(S,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function A0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(D){return!(D!==Zn&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const O=D===Ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Ln&&n.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ri&&!O)}function c(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=c(u);h!==u&&(jt("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:S,maxTextureSize:x,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:R,maxVaryings:C,maxFragmentUniforms:b,maxSamples:P,samples:L}}function w0(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new mr,o=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||n!==0||i;return i=p,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){e=h(f,p,0)},this.setState=function(f,p,m){const S=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,_=r.get(f);if(!i||S===null||S.length===0||s&&!g)s?h(null):u();else{const R=s?0:n,C=R*4;let b=_.clippingState||null;c.value=b,b=h(S,p,C,m);for(let P=0;P!==C;++P)b[P]=e[P];_.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,p,m,S){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=c.value,S!==!0||g===null){const _=m+x*4,R=p.matrixWorldInverse;o.getNormalMatrix(R),(g===null||g.length<_)&&(g=new Float32Array(_));for(let C=0,b=m;C!==x;++C,b+=4)a.copy(f[C]).applyMatrix4(R,o),a.normal.toArray(g,b),g[b+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function R0(r){let t=new WeakMap;function e(a,o){return o===wl?a.mapping=Ar:o===Rl&&(a.mapping=rs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===wl||o===Rl)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Rf(c.height);return u.fromEquirectangularTexture(r,a),t.set(a,u),a.addEventListener("dispose",i),e(u.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Hi=4,ih=[.125,.215,.35,.446,.526,.582],vr=20,C0=256,Ds=new Lf,rh=new he;let Jo=null,Qo=0,tl=0,el=!1;const P0=new q;class sh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:a=256,position:o=P0}=s;Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jo,Qo,tl),this._renderer.xr.enabled=el,t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ar||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Ci,format:Zn,colorSpace:as,depthBuffer:!1},i=ah(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ah(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=D0(s)),this._blurMaterial=U0(s,t,e),this._ggxMaterial=L0(s,t,e)}return i}_compileMaterial(t){const e=new di(new Jn,t);this._renderer.compile(e,Ds)}_sceneToCubeUV(t,e,n,i,s){const c=new Dn(90,1,e,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(rh),f.toneMapping=oi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new gs,new Mf({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let _=!1;const R=t.background;R?R.isColor&&(g.color.copy(R),t.background=null,_=!0):(g.color.copy(rh),_=!0);for(let C=0;C<6;C++){const b=C%3;b===0?(c.up.set(0,u[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[C],s.y,s.z)):b===1?(c.up.set(0,0,u[C]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[C],s.z)):(c.up.set(0,u[C],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[C]));const P=this._cubeSize;Yr(i,b*P,C>2?P:0,P,P),f.setRenderTarget(i),_&&f.render(x,c),f.render(t,c)}f.toneMapping=m,f.autoClear=p,t.background=R}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ar||t.mapping===rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Yr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ds)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,u=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(u*u-h*h),p=0+u*1.25,m=f*p,{_lodMax:S}=this,x=this._sizeLods[n],g=3*x*(n>S-Hi?n-S+Hi:0),_=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=m,c.mipInt.value=S-e,Yr(s,g,_,3*x,2*x),i.setRenderTarget(s),i.render(o,Ds),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=S-n,Yr(t,g,_,3*x,2*x),i.setRenderTarget(t),i.render(o,Ds)}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ce("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[i];f.material=u;const p=u.uniforms,m=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*vr-1),x=s/S,g=isFinite(s)?1+Math.floor(h*x):vr;g>vr&&jt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${vr}`);const _=[];let R=0;for(let D=0;D<vr;++D){const O=D/x,M=Math.exp(-O*O/2);_.push(M),D===0?R+=M:D<g&&(R+=2*M)}for(let D=0;D<_.length;D++)_[D]=_[D]/R;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=_,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:C}=this;p.dTheta.value=S,p.mipInt.value=C-n;const b=this._sizeLods[i],P=3*b*(i>C-Hi?i-C+Hi:0),L=4*(this._cubeSize-b);Yr(e,P,L,3*b,2*b),c.setRenderTarget(e),c.render(f,Ds)}}function D0(r){const t=[],e=[],n=[];let i=r;const s=r-Hi+1+ih.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-Hi?c=ih[a-r+Hi-1]:a===0&&(c=0),e.push(c);const u=1/(o-2),h=-u,f=1+u,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,S=6,x=3,g=2,_=1,R=new Float32Array(x*S*m),C=new Float32Array(g*S*m),b=new Float32Array(_*S*m);for(let L=0;L<m;L++){const D=L%3*2/3-1,O=L>2?0:-1,M=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];R.set(M,x*S*L),C.set(p,g*S*L);const y=[L,L,L,L,L,L];b.set(y,_*S*L)}const P=new Jn;P.setAttribute("position",new ci(R,x)),P.setAttribute("uv",new ci(C,g)),P.setAttribute("faceIndex",new ci(b,_)),n.push(new di(P,null)),i>Hi&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function ah(r,t,e){const n=new li(r,t,e);return n.texture.mapping=ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function L0(r,t,e){return new pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function U0(r,t,e){const n=new Float32Array(vr),i=new q(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:lo(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function oh(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lo(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function lh(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function lo(){return`

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
	`}function I0(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===wl||c===Rl,h=c===Ar||c===rs;if(u||h){let f=t.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new sh(r)),f=u?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return u&&m&&m.height>0||h&&m&&i(m)?(e===null&&(e=new sh(r)),f=u?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function i(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function F0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Xs("WebGLRenderer: "+n+" extension not supported."),i}}}function N0(r,t,e,n){const i={},s=new WeakMap;function a(f){const p=f.target;p.index!==null&&t.remove(p.index);for(const S in p.attributes)t.remove(p.attributes[S]);p.removeEventListener("dispose",a),delete i[p.id];const m=s.get(p);m&&(t.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(f,p){return i[p.id]===!0||(p.addEventListener("dispose",a),i[p.id]=!0,e.memory.geometries++),p}function c(f){const p=f.attributes;for(const m in p)t.update(p[m],r.ARRAY_BUFFER)}function u(f){const p=[],m=f.index,S=f.attributes.position;let x=0;if(m!==null){const R=m.array;x=m.version;for(let C=0,b=R.length;C<b;C+=3){const P=R[C+0],L=R[C+1],D=R[C+2];p.push(P,L,L,D,D,P)}}else if(S!==void 0){const R=S.array;x=S.version;for(let C=0,b=R.length/3-1;C<b;C+=3){const P=C+0,L=C+1,D=C+2;p.push(P,L,L,D,D,P)}}else return;const g=new(xf(p)?Tf:Ef)(p,1);g.version=x;const _=s.get(f);_&&t.remove(_),s.set(f,g)}function h(f){const p=s.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function O0(r,t,e){let n;function i(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,m){r.drawElements(n,m,s,p*a),e.update(m,n,1)}function u(p,m,S){S!==0&&(r.drawElementsInstanced(n,m,s,p*a,S),e.update(m,n,S))}function h(p,m,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,p,0,S);let g=0;for(let _=0;_<S;_++)g+=m[_];e.update(g,n,1)}function f(p,m,S,x){if(S===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<p.length;_++)u(p[_]/a,m[_],x[_]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,s,p,0,x,0,S);let _=0;for(let R=0;R<S;R++)_+=m[R]*x[R];e.update(_,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function B0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:ce("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function z0(r,t,e){const n=new WeakMap,i=new Oe;function s(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==f){let y=function(){O.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var m=y;p!==void 0&&p.texture.dispose();const S=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],R=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let b=0;S===!0&&(b=1),x===!0&&(b=2),g===!0&&(b=3);let P=o.attributes.position.count*b,L=1;P>t.maxTextureSize&&(L=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const D=new Float32Array(P*L*4*f),O=new Sf(D,P,L,f);O.type=ri,O.needsUpdate=!0;const M=b*4;for(let w=0;w<f;w++){const G=_[w],z=R[w],K=C[w],$=P*L*4*w;for(let B=0;B<G.count;B++){const k=B*M;S===!0&&(i.fromBufferAttribute(G,B),D[$+k+0]=i.x,D[$+k+1]=i.y,D[$+k+2]=i.z,D[$+k+3]=0),x===!0&&(i.fromBufferAttribute(z,B),D[$+k+4]=i.x,D[$+k+5]=i.y,D[$+k+6]=i.z,D[$+k+7]=0),g===!0&&(i.fromBufferAttribute(K,B),D[$+k+8]=i.x,D[$+k+9]=i.y,D[$+k+10]=i.z,D[$+k+11]=K.itemSize===4?i.w:1)}}p={count:f,texture:O,size:new fe(P,L)},n.set(o,p),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let S=0;for(let g=0;g<u.length;g++)S+=u[g];const x=o.morphTargetsRelative?1:1-S;c.getUniforms().setValue(r,"morphTargetBaseInfluence",x),c.getUniforms().setValue(r,"morphTargetInfluences",u)}c.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}return{update:s}}function V0(r,t,e,n){let i=new WeakMap;function s(c){const u=n.render.frame,h=c.geometry,f=t.get(c,h);if(i.get(f)!==u&&(t.update(f),i.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==u&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;i.get(p)!==u&&(p.update(),i.set(p,u))}return f}function a(){i=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}const k0={[nf]:"LINEAR_TONE_MAPPING",[rf]:"REINHARD_TONE_MAPPING",[sf]:"CINEON_TONE_MAPPING",[af]:"ACES_FILMIC_TONE_MAPPING",[lf]:"AGX_TONE_MAPPING",[cf]:"NEUTRAL_TONE_MAPPING",[of]:"CUSTOM_TONE_MAPPING"};function G0(r,t,e,n,i){const s=new li(t,e,{type:r,depthBuffer:n,stencilBuffer:i}),a=new li(t,e,{type:Ci,depthBuffer:!1,stencilBuffer:!1}),o=new Jn;o.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ui([0,2,0,0,2,0],2));const c=new wm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new di(o,c),h=new Lf(-1,1,1,-1,0,1);let f=null,p=null,m=!1,S,x=null,g=[],_=!1;this.setSize=function(R,C){s.setSize(R,C),a.setSize(R,C);for(let b=0;b<g.length;b++){const P=g[b];P.setSize&&P.setSize(R,C)}},this.setEffects=function(R){g=R,_=g.length>0&&g[0].isRenderPass===!0;const C=s.width,b=s.height;for(let P=0;P<g.length;P++){const L=g[P];L.setSize&&L.setSize(C,b)}},this.begin=function(R,C){if(m||R.toneMapping===oi&&g.length===0)return!1;if(x=C,C!==null){const b=C.width,P=C.height;(s.width!==b||s.height!==P)&&this.setSize(b,P)}return _===!1&&R.setRenderTarget(s),S=R.toneMapping,R.toneMapping=oi,!0},this.hasRenderPass=function(){return _},this.end=function(R,C){R.toneMapping=S,m=!0;let b=s,P=a;for(let L=0;L<g.length;L++){const D=g[L];if(D.enabled!==!1&&(D.render(R,P,b,C),D.needsSwap!==!1)){const O=b;b=P,P=O}}if(f!==R.outputColorSpace||p!==R.toneMapping){f=R.outputColorSpace,p=R.toneMapping,c.defines={},ue.getTransfer(f)===Se&&(c.defines.SRGB_TRANSFER="");const L=k0[p];L&&(c.defines[L]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,R.setRenderTarget(x),R.render(u,h),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),c.dispose()}}const If=new en,hc=new js(1,1),Ff=new Sf,Nf=new Qp,Of=new wf,ch=[],uh=[],hh=new Float32Array(16),fh=new Float32Array(9),dh=new Float32Array(4);function vs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=ch[i];if(s===void 0&&(s=new Float32Array(i),ch[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function We(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Xe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function co(r,t){let e=uh[t];e===void 0&&(e=new Int32Array(t),uh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function H0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function W0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2fv(this.addr,t),Xe(e,t)}}function X0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;r.uniform3fv(this.addr,t),Xe(e,t)}}function j0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4fv(this.addr,t),Xe(e,t)}}function Y0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;dh.set(n),r.uniformMatrix2fv(this.addr,!1,dh),Xe(e,n)}}function q0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;fh.set(n),r.uniformMatrix3fv(this.addr,!1,fh),Xe(e,n)}}function K0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;hh.set(n),r.uniformMatrix4fv(this.addr,!1,hh),Xe(e,n)}}function $0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Z0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2iv(this.addr,t),Xe(e,t)}}function J0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;r.uniform3iv(this.addr,t),Xe(e,t)}}function Q0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4iv(this.addr,t),Xe(e,t)}}function tv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function ev(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2uiv(this.addr,t),Xe(e,t)}}function nv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;r.uniform3uiv(this.addr,t),Xe(e,t)}}function iv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4uiv(this.addr,t),Xe(e,t)}}function rv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(hc.compareFunction=e.isReversedDepthBuffer()?Fc:Ic,s=hc):s=If,e.setTexture2D(t||s,i)}function sv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Nf,i)}function av(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Of,i)}function ov(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ff,i)}function lv(r){switch(r){case 5126:return H0;case 35664:return W0;case 35665:return X0;case 35666:return j0;case 35674:return Y0;case 35675:return q0;case 35676:return K0;case 5124:case 35670:return $0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return Q0;case 5125:return tv;case 36294:return ev;case 36295:return nv;case 36296:return iv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return ov}}function cv(r,t){r.uniform1fv(this.addr,t)}function uv(r,t){const e=vs(t,this.size,2);r.uniform2fv(this.addr,e)}function hv(r,t){const e=vs(t,this.size,3);r.uniform3fv(this.addr,e)}function fv(r,t){const e=vs(t,this.size,4);r.uniform4fv(this.addr,e)}function dv(r,t){const e=vs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function pv(r,t){const e=vs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function mv(r,t){const e=vs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function _v(r,t){r.uniform1iv(this.addr,t)}function gv(r,t){r.uniform2iv(this.addr,t)}function vv(r,t){r.uniform3iv(this.addr,t)}function xv(r,t){r.uniform4iv(this.addr,t)}function Sv(r,t){r.uniform1uiv(this.addr,t)}function yv(r,t){r.uniform2uiv(this.addr,t)}function Mv(r,t){r.uniform3uiv(this.addr,t)}function Ev(r,t){r.uniform4uiv(this.addr,t)}function Tv(r,t,e){const n=this.cache,i=t.length,s=co(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=hc:a=If;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function bv(r,t,e){const n=this.cache,i=t.length,s=co(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Nf,s[a])}function Av(r,t,e){const n=this.cache,i=t.length,s=co(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Of,s[a])}function wv(r,t,e){const n=this.cache,i=t.length,s=co(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Ff,s[a])}function Rv(r){switch(r){case 5126:return cv;case 35664:return uv;case 35665:return hv;case 35666:return fv;case 35674:return dv;case 35675:return pv;case 35676:return mv;case 5124:case 35670:return _v;case 35667:case 35671:return gv;case 35668:case 35672:return vv;case 35669:case 35673:return xv;case 5125:return Sv;case 36294:return yv;case 36295:return Mv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return Av;case 36289:case 36303:case 36311:case 36292:return wv}}class Cv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lv(e.type)}}class Pv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rv(e.type)}}class Dv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const nl=/(\w+)(\])?(\[|\.)?/g;function ph(r,t){r.seq.push(t),r.map[t.id]=t}function Lv(r,t,e){const n=r.name,i=n.length;for(nl.lastIndex=0;;){const s=nl.exec(n),a=nl.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===i){ph(e,u===void 0?new Cv(o,r,t):new Pv(o,r,t));break}else{let f=e.map[o];f===void 0&&(f=new Dv(o),ph(e,f)),e=f}}}class Ha{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Lv(o,c,this)}const i=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function mh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Uv=37297;let Iv=0;function Fv(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const _h=new Zt;function Nv(r){ue._getMatrix(_h,ue.workingColorSpace,r);const t=`mat3( ${_h.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(r)){case Ya:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function gh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Fv(r.getShaderSource(t),o)}else return s}function Ov(r,t){const e=Nv(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Bv={[nf]:"Linear",[rf]:"Reinhard",[sf]:"Cineon",[af]:"ACESFilmic",[lf]:"AgX",[cf]:"Neutral",[of]:"Custom"};function zv(r,t){const e=Bv[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ia=new q;function Vv(){ue.getLuminanceCoefficients(Ia);const r=Ia.x.toFixed(4),t=Ia.y.toFixed(4),e=Ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Gv(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hv(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Ns(r){return r!==""}function vh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(r){return r.replace(Wv,jv)}const Xv=new Map;function jv(r,t){let e=ee[t];if(e===void 0){const n=Xv.get(t);if(n!==void 0)e=ee[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fc(e)}const Yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(r){return r.replace(Yv,qv)}function qv(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function yh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Kv={[Ba]:"SHADOWMAP_TYPE_PCF",[Is]:"SHADOWMAP_TYPE_VSM"};function $v(r){return Kv[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Zv={[Ar]:"ENVMAP_TYPE_CUBE",[rs]:"ENVMAP_TYPE_CUBE",[ao]:"ENVMAP_TYPE_CUBE_UV"};function Jv(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Zv[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Qv={[rs]:"ENVMAP_MODE_REFRACTION"};function tx(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Qv[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ex={[ef]:"ENVMAP_BLENDING_MULTIPLY",[Ip]:"ENVMAP_BLENDING_MIX",[Fp]:"ENVMAP_BLENDING_ADD"};function nx(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":ex[r.combine]||"ENVMAP_BLENDING_NONE"}function ix(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function rx(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=$v(e),u=Jv(e),h=tx(e),f=nx(e),p=ix(e),m=kv(e),S=Gv(s),x=i.createProgram();let g,_,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Ns).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Ns).join(`
`),_.length>0&&(_+=`
`)):(g=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),_=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?ee.tonemapping_pars_fragment:"",e.toneMapping!==oi?zv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Ov("linearToOutputTexel",e.outputColorSpace),Vv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),a=fc(a),a=vh(a,e),a=xh(a,e),o=fc(o),o=vh(o,e),o=xh(o,e),a=Sh(a),o=Sh(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",e.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=R+g+a,b=R+_+o,P=mh(i,i.VERTEX_SHADER,C),L=mh(i,i.FRAGMENT_SHADER,b);i.attachShader(x,P),i.attachShader(x,L),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function D(w){if(r.debug.checkShaderErrors){const G=i.getProgramInfoLog(x)||"",z=i.getShaderInfoLog(P)||"",K=i.getShaderInfoLog(L)||"",$=G.trim(),B=z.trim(),k=K.trim();let J=!0,at=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,P,L);else{const ht=gh(i,P,"vertex"),gt=gh(i,L,"fragment");ce("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+$+`
`+ht+`
`+gt)}else $!==""?jt("WebGLProgram: Program Info Log:",$):(B===""||k==="")&&(at=!1);at&&(w.diagnostics={runnable:J,programLog:$,vertexShader:{log:B,prefix:g},fragmentShader:{log:k,prefix:_}})}i.deleteShader(P),i.deleteShader(L),O=new Ha(i,x),M=Hv(i,x)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,Uv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Iv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=L,this}let sx=0;class ax{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ox(t),e.set(t,n)),n}}class ox{constructor(t){this.id=sx++,this.code=t,this.usedTimes=0}}function lx(r,t,e,n,i,s,a){const o=new Bc,c=new ax,u=new Set,h=[],f=new Map,p=i.logarithmicDepthBuffer;let m=i.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return u.add(M),M===0?"uv":`uv${M}`}function g(M,y,w,G,z){const K=G.fog,$=z.geometry,B=M.isMeshStandardMaterial?G.environment:null,k=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),J=k&&k.mapping===ao?k.image.height:null,at=S[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&jt("WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ht=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,gt=ht!==void 0?ht.length:0;let Nt=0;$.morphAttributes.position!==void 0&&(Nt=1),$.morphAttributes.normal!==void 0&&(Nt=2),$.morphAttributes.color!==void 0&&(Nt=3);let Bt,Jt,Qt,it;if(at){const oe=ni[at];Bt=oe.vertexShader,Jt=oe.fragmentShader}else Bt=M.vertexShader,Jt=M.fragmentShader,c.update(M),Qt=c.getVertexShaderID(M),it=c.getFragmentShaderID(M);const ot=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),qt=z.isInstancedMesh===!0,Pt=z.isBatchedMesh===!0,ie=!!M.map,Ve=!!M.matcap,Vt=!!k,Yt=!!M.aoMap,_e=!!M.lightMap,$t=!!M.bumpMap,Le=!!M.normalMap,V=!!M.displacementMap,Ue=!!M.emissiveMap,le=!!M.metalnessMap,ve=!!M.roughnessMap,Dt=M.anisotropy>0,I=M.clearcoat>0,E=M.dispersion>0,X=M.iridescence>0,nt=M.sheen>0,st=M.transmission>0,et=Dt&&!!M.anisotropyMap,Ut=I&&!!M.clearcoatMap,vt=I&&!!M.clearcoatNormalMap,Lt=I&&!!M.clearcoatRoughnessMap,Gt=X&&!!M.iridescenceMap,lt=X&&!!M.iridescenceThicknessMap,pt=nt&&!!M.sheenColorMap,Rt=nt&&!!M.sheenRoughnessMap,It=!!M.specularMap,mt=!!M.specularColorMap,Kt=!!M.specularIntensityMap,H=st&&!!M.transmissionMap,St=st&&!!M.thicknessMap,ft=!!M.gradientMap,bt=!!M.alphaMap,ct=M.alphaTest>0,rt=!!M.alphaHash,dt=!!M.extensions;let Ht=oi;M.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Ht=r.toneMapping);const xe={shaderID:at,shaderType:M.type,shaderName:M.name,vertexShader:Bt,fragmentShader:Jt,defines:M.defines,customVertexShaderID:Qt,customFragmentShaderID:it,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Pt,batchingColor:Pt&&z._colorsTexture!==null,instancing:qt,instancingColor:qt&&z.instanceColor!==null,instancingMorph:qt&&z.morphTexture!==null,outputColorSpace:ot===null?r.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:as,alphaToCoverage:!!M.alphaToCoverage,map:ie,matcap:Ve,envMap:Vt,envMapMode:Vt&&k.mapping,envMapCubeUVHeight:J,aoMap:Yt,lightMap:_e,bumpMap:$t,normalMap:Le,displacementMap:V,emissiveMap:Ue,normalMapObjectSpace:Le&&M.normalMapType===Bp,normalMapTangentSpace:Le&&M.normalMapType===vf,metalnessMap:le,roughnessMap:ve,anisotropy:Dt,anisotropyMap:et,clearcoat:I,clearcoatMap:Ut,clearcoatNormalMap:vt,clearcoatRoughnessMap:Lt,dispersion:E,iridescence:X,iridescenceMap:Gt,iridescenceThicknessMap:lt,sheen:nt,sheenColorMap:pt,sheenRoughnessMap:Rt,specularMap:It,specularColorMap:mt,specularIntensityMap:Kt,transmission:st,transmissionMap:H,thicknessMap:St,gradientMap:ft,opaque:M.transparent===!1&&M.blending===Zr&&M.alphaToCoverage===!1,alphaMap:bt,alphaTest:ct,alphaHash:rt,combine:M.combine,mapUv:ie&&x(M.map.channel),aoMapUv:Yt&&x(M.aoMap.channel),lightMapUv:_e&&x(M.lightMap.channel),bumpMapUv:$t&&x(M.bumpMap.channel),normalMapUv:Le&&x(M.normalMap.channel),displacementMapUv:V&&x(M.displacementMap.channel),emissiveMapUv:Ue&&x(M.emissiveMap.channel),metalnessMapUv:le&&x(M.metalnessMap.channel),roughnessMapUv:ve&&x(M.roughnessMap.channel),anisotropyMapUv:et&&x(M.anisotropyMap.channel),clearcoatMapUv:Ut&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:vt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&x(M.sheenRoughnessMap.channel),specularMapUv:It&&x(M.specularMap.channel),specularColorMapUv:mt&&x(M.specularColorMap.channel),specularIntensityMapUv:Kt&&x(M.specularIntensityMap.channel),transmissionMapUv:H&&x(M.transmissionMap.channel),thicknessMapUv:St&&x(M.thicknessMap.channel),alphaMapUv:bt&&x(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Le||Dt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(ie||bt),fog:!!K,useFog:M.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:wt,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Nt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&w.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ht,decodeVideoTexture:ie&&M.map.isVideoTexture===!0&&ue.getTransfer(M.map.colorSpace)===Se,decodeVideoTextureEmissive:Ue&&M.emissiveMap.isVideoTexture===!0&&ue.getTransfer(M.emissiveMap.colorSpace)===Se,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===bi,flipSided:M.side===vn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:dt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&M.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return xe.vertexUv1s=u.has(1),xe.vertexUv2s=u.has(2),xe.vertexUv3s=u.has(3),u.clear(),xe}function _(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const w in M.defines)y.push(w),y.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(R(y,M),C(y,M),y.push(r.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function R(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function C(M,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){const y=S[M.type];let w;if(y){const G=ni[y];w=fm.clone(G.uniforms)}else w=M.uniforms;return w}function P(M,y){let w=f.get(y);return w!==void 0?++w.usedTimes:(w=new rx(r,y,M,s),h.push(w),f.set(y,w)),w}function L(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),f.delete(M.cacheKey),M.destroy()}}function D(M){c.remove(M)}function O(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:P,releaseProgram:L,releaseShaderCache:D,programs:h,dispose:O}}function cx(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function ux(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Mh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Eh(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(f,p,m,S,x,g){let _=r[t];return _===void 0?(_={id:f.id,object:f,geometry:p,material:m,groupOrder:S,renderOrder:f.renderOrder,z:x,group:g},r[t]=_):(_.id=f.id,_.object=f,_.geometry=p,_.material=m,_.groupOrder=S,_.renderOrder=f.renderOrder,_.z=x,_.group=g),t++,_}function o(f,p,m,S,x,g){const _=a(f,p,m,S,x,g);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function c(f,p,m,S,x,g){const _=a(f,p,m,S,x,g);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function u(f,p){e.length>1&&e.sort(f||ux),n.length>1&&n.sort(p||Mh),i.length>1&&i.sort(p||Mh)}function h(){for(let f=t,p=r.length;f<p;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:u}}function hx(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Eh,r.set(n,[a])):i>=s.length?(a=new Eh,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function fx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new he};break;case"SpotLight":e={position:new q,direction:new q,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=e,e}}}function dx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let px=0;function mx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function _x(r){const t=new fx,e=dx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new q);const i=new q,s=new Ce,a=new Ce;function o(u){let h=0,f=0,p=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,S=0,x=0,g=0,_=0,R=0,C=0,b=0,P=0,L=0,D=0;u.sort(mx);for(let M=0,y=u.length;M<y;M++){const w=u[M],G=w.color,z=w.intensity,K=w.distance;let $=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===ss?$=w.shadow.map.texture:$=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)h+=G.r*z,f+=G.g*z,p+=G.b*z;else if(w.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(w.sh.coefficients[B],z);D++}else if(w.isDirectionalLight){const B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const k=w.shadow,J=e.get(w);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=w.shadow.matrix,R++}n.directional[m]=B,m++}else if(w.isSpotLight){const B=t.get(w);B.position.setFromMatrixPosition(w.matrixWorld),B.color.copy(G).multiplyScalar(z),B.distance=K,B.coneCos=Math.cos(w.angle),B.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),B.decay=w.decay,n.spot[x]=B;const k=w.shadow;if(w.map&&(n.spotLightMap[P]=w.map,P++,k.updateMatrices(w),w.castShadow&&L++),n.spotLightMatrix[x]=k.matrix,w.castShadow){const J=e.get(w);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,n.spotShadow[x]=J,n.spotShadowMap[x]=$,b++}x++}else if(w.isRectAreaLight){const B=t.get(w);B.color.copy(G).multiplyScalar(z),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=B,g++}else if(w.isPointLight){const B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),B.distance=w.distance,B.decay=w.decay,w.castShadow){const k=w.shadow,J=e.get(w);J.shadowIntensity=k.intensity,J.shadowBias=k.bias,J.shadowNormalBias=k.normalBias,J.shadowRadius=k.radius,J.shadowMapSize=k.mapSize,J.shadowCameraNear=k.camera.near,J.shadowCameraFar=k.camera.far,n.pointShadow[S]=J,n.pointShadowMap[S]=$,n.pointShadowMatrix[S]=w.shadow.matrix,C++}n.point[S]=B,S++}else if(w.isHemisphereLight){const B=t.get(w);B.skyColor.copy(w.color).multiplyScalar(z),B.groundColor.copy(w.groundColor).multiplyScalar(z),n.hemi[_]=B,_++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;const O=n.hash;(O.directionalLength!==m||O.pointLength!==S||O.spotLength!==x||O.rectAreaLength!==g||O.hemiLength!==_||O.numDirectionalShadows!==R||O.numPointShadows!==C||O.numSpotShadows!==b||O.numSpotMaps!==P||O.numLightProbes!==D)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=g,n.point.length=S,n.hemi.length=_,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=b+P-L,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=D,O.directionalLength=m,O.pointLength=S,O.spotLength=x,O.rectAreaLength=g,O.hemiLength=_,O.numDirectionalShadows=R,O.numPointShadows=C,O.numSpotShadows=b,O.numSpotMaps=P,O.numLightProbes=D,n.version=px++)}function c(u,h){let f=0,p=0,m=0,S=0,x=0;const g=h.matrixWorldInverse;for(let _=0,R=u.length;_<R;_++){const C=u[_];if(C.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(C.matrixWorld),i.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),f++}else if(C.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(C.matrixWorld),i.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),m++}else if(C.isRectAreaLight){const b=n.rectArea[S];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(g),a.identity(),s.copy(C.matrixWorld),s.premultiply(g),a.extractRotation(s),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),S++}else if(C.isPointLight){const b=n.point[p];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(g),p++}else if(C.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(g),x++}}}return{setup:o,setupView:c,state:n}}function Th(r){const t=new _x(r),e=[],n=[];function i(h){u.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function gx(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new Th(r),t.set(i,[o])):s>=a.length?(o=new Th(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Sx=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],yx=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],bh=new Ce,Ls=new q,il=new q;function Mx(r,t,e){let n=new Vc;const i=new fe,s=new fe,a=new Oe,o=new Rm,c=new Cm,u={},h=e.maxTextureSize,f={[Zi]:vn,[vn]:Zi,[bi]:bi},p=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:vx,fragmentShader:xx}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const S=new Jn;S.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new di(S,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ba;let _=this.type;this.render=function(L,D,O){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;L.type===mp&&(jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=Ba);const M=r.getRenderTarget(),y=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),G=r.state;G.setBlending(wi),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=_!==this.type;z&&D.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach($=>$.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,$=L.length;K<$;K++){const B=L[K],k=B.shadow;if(k===void 0){jt("WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const J=k.getFrameExtents();if(i.multiply(J),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/J.x),i.x=s.x*J.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/J.y),i.y=s.y*J.y,k.mapSize.y=s.y)),k.map===null||z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Is){if(B.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new li(i.x,i.y,{format:ss,type:Ci,minFilter:ln,magFilter:ln,generateMipmaps:!1}),k.map.texture.name=B.name+".shadowMap",k.map.depthTexture=new js(i.x,i.y,ri),k.map.depthTexture.name=B.name+".shadowMapDepth",k.map.depthTexture.format=Pi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=tn,k.map.depthTexture.magFilter=tn}else{B.isPointLight?(k.map=new Rf(i.x),k.map.depthTexture=new Tm(i.x,hi)):(k.map=new li(i.x,i.y),k.map.depthTexture=new js(i.x,i.y,hi)),k.map.depthTexture.name=B.name+".shadowMap",k.map.depthTexture.format=Pi;const ht=r.state.buffers.depth.getReversed();this.type===Ba?(k.map.depthTexture.compareFunction=ht?Fc:Ic,k.map.depthTexture.minFilter=ln,k.map.depthTexture.magFilter=ln):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=tn,k.map.depthTexture.magFilter=tn)}k.camera.updateProjectionMatrix()}const at=k.map.isWebGLCubeRenderTarget?6:1;for(let ht=0;ht<at;ht++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,ht),r.clear();else{ht===0&&(r.setRenderTarget(k.map),r.clear());const gt=k.getViewport(ht);a.set(s.x*gt.x,s.y*gt.y,s.x*gt.z,s.y*gt.w),G.viewport(a)}if(B.isPointLight){const gt=k.camera,Nt=k.matrix,Bt=B.distance||gt.far;Bt!==gt.far&&(gt.far=Bt,gt.updateProjectionMatrix()),Ls.setFromMatrixPosition(B.matrixWorld),gt.position.copy(Ls),il.copy(gt.position),il.add(Sx[ht]),gt.up.copy(yx[ht]),gt.lookAt(il),gt.updateMatrixWorld(),Nt.makeTranslation(-Ls.x,-Ls.y,-Ls.z),bh.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(bh,gt.coordinateSystem,gt.reversedDepth)}else k.updateMatrices(B);n=k.getFrustum(),b(D,O,k.camera,B,this.type)}k.isPointLightShadow!==!0&&this.type===Is&&R(k,O),k.needsUpdate=!1}_=this.type,g.needsUpdate=!1,r.setRenderTarget(M,y,w)};function R(L,D){const O=t.update(x);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new li(i.x,i.y,{format:ss,type:Ci})),p.uniforms.shadow_pass.value=L.map.depthTexture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(D,null,O,p,x,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(D,null,O,m,x,null)}function C(L,D,O,M){let y=null;const w=O.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(w!==void 0)y=w;else if(y=O.isPointLight===!0?c:o,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const G=y.uuid,z=D.uuid;let K=u[G];K===void 0&&(K={},u[G]=K);let $=K[z];$===void 0&&($=y.clone(),K[z]=$,D.addEventListener("dispose",P)),y=$}if(y.visible=D.visible,y.wireframe=D.wireframe,M===Is?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:f[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=r.properties.get(y);G.light=O}return y}function b(L,D,O,M,y){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&y===Is)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,L.matrixWorld);const z=t.update(L),K=L.material;if(Array.isArray(K)){const $=z.groups;for(let B=0,k=$.length;B<k;B++){const J=$[B],at=K[J.materialIndex];if(at&&at.visible){const ht=C(L,at,M,y);L.onBeforeShadow(r,L,D,O,z,ht,J),r.renderBufferDirect(O,null,z,ht,L,J),L.onAfterShadow(r,L,D,O,z,ht,J)}}}else if(K.visible){const $=C(L,K,M,y);L.onBeforeShadow(r,L,D,O,z,$,null),r.renderBufferDirect(O,null,z,$,L,null),L.onAfterShadow(r,L,D,O,z,$,null)}}const G=L.children;for(let z=0,K=G.length;z<K;z++)b(G[z],D,O,M,y)}function P(L){L.target.removeEventListener("dispose",P);for(const O in u){const M=u[O],y=L.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const Ex={[Sl]:yl,[Ml]:bl,[El]:Al,[is]:Tl,[yl]:Sl,[bl]:Ml,[Al]:El,[Tl]:is};function Tx(r,t){function e(){let H=!1;const St=new Oe;let ft=null;const bt=new Oe(0,0,0,0);return{setMask:function(ct){ft!==ct&&!H&&(r.colorMask(ct,ct,ct,ct),ft=ct)},setLocked:function(ct){H=ct},setClear:function(ct,rt,dt,Ht,xe){xe===!0&&(ct*=Ht,rt*=Ht,dt*=Ht),St.set(ct,rt,dt,Ht),bt.equals(St)===!1&&(r.clearColor(ct,rt,dt,Ht),bt.copy(St))},reset:function(){H=!1,ft=null,bt.set(-1,0,0,0)}}}function n(){let H=!1,St=!1,ft=null,bt=null,ct=null;return{setReversed:function(rt){if(St!==rt){const dt=t.get("EXT_clip_control");rt?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),St=rt;const Ht=ct;ct=null,this.setClear(Ht)}},getReversed:function(){return St},setTest:function(rt){rt?ot(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(rt){ft!==rt&&!H&&(r.depthMask(rt),ft=rt)},setFunc:function(rt){if(St&&(rt=Ex[rt]),bt!==rt){switch(rt){case Sl:r.depthFunc(r.NEVER);break;case yl:r.depthFunc(r.ALWAYS);break;case Ml:r.depthFunc(r.LESS);break;case is:r.depthFunc(r.LEQUAL);break;case El:r.depthFunc(r.EQUAL);break;case Tl:r.depthFunc(r.GEQUAL);break;case bl:r.depthFunc(r.GREATER);break;case Al:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}bt=rt}},setLocked:function(rt){H=rt},setClear:function(rt){ct!==rt&&(St&&(rt=1-rt),r.clearDepth(rt),ct=rt)},reset:function(){H=!1,ft=null,bt=null,ct=null,St=!1}}}function i(){let H=!1,St=null,ft=null,bt=null,ct=null,rt=null,dt=null,Ht=null,xe=null;return{setTest:function(oe){H||(oe?ot(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(oe){St!==oe&&!H&&(r.stencilMask(oe),St=oe)},setFunc:function(oe,un,Xn){(ft!==oe||bt!==un||ct!==Xn)&&(r.stencilFunc(oe,un,Xn),ft=oe,bt=un,ct=Xn)},setOp:function(oe,un,Xn){(rt!==oe||dt!==un||Ht!==Xn)&&(r.stencilOp(oe,un,Xn),rt=oe,dt=un,Ht=Xn)},setLocked:function(oe){H=oe},setClear:function(oe){xe!==oe&&(r.clearStencil(oe),xe=oe)},reset:function(){H=!1,St=null,ft=null,bt=null,ct=null,rt=null,dt=null,Ht=null,xe=null}}}const s=new e,a=new n,o=new i,c=new WeakMap,u=new WeakMap;let h={},f={},p=new WeakMap,m=[],S=null,x=!1,g=null,_=null,R=null,C=null,b=null,P=null,L=null,D=new he(0,0,0),O=0,M=!1,y=null,w=null,G=null,z=null,K=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,k=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(J)[1]),B=k>=1):J.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),B=k>=2);let at=null,ht={};const gt=r.getParameter(r.SCISSOR_BOX),Nt=r.getParameter(r.VIEWPORT),Bt=new Oe().fromArray(gt),Jt=new Oe().fromArray(Nt);function Qt(H,St,ft,bt){const ct=new Uint8Array(4),rt=r.createTexture();r.bindTexture(H,rt),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let dt=0;dt<ft;dt++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(St,0,r.RGBA,1,1,bt,0,r.RGBA,r.UNSIGNED_BYTE,ct):r.texImage2D(St+dt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ct);return rt}const it={};it[r.TEXTURE_2D]=Qt(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Qt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Qt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Qt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(r.DEPTH_TEST),a.setFunc(is),$t(!1),Le(bu),ot(r.CULL_FACE),Yt(wi);function ot(H){h[H]!==!0&&(r.enable(H),h[H]=!0)}function wt(H){h[H]!==!1&&(r.disable(H),h[H]=!1)}function qt(H,St){return f[H]!==St?(r.bindFramebuffer(H,St),f[H]=St,H===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=St),H===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=St),!0):!1}function Pt(H,St){let ft=m,bt=!1;if(H){ft=p.get(St),ft===void 0&&(ft=[],p.set(St,ft));const ct=H.textures;if(ft.length!==ct.length||ft[0]!==r.COLOR_ATTACHMENT0){for(let rt=0,dt=ct.length;rt<dt;rt++)ft[rt]=r.COLOR_ATTACHMENT0+rt;ft.length=ct.length,bt=!0}}else ft[0]!==r.BACK&&(ft[0]=r.BACK,bt=!0);bt&&r.drawBuffers(ft)}function ie(H){return S!==H?(r.useProgram(H),S=H,!0):!1}const Ve={[gr]:r.FUNC_ADD,[gp]:r.FUNC_SUBTRACT,[vp]:r.FUNC_REVERSE_SUBTRACT};Ve[xp]=r.MIN,Ve[Sp]=r.MAX;const Vt={[yp]:r.ZERO,[Mp]:r.ONE,[Ep]:r.SRC_COLOR,[vl]:r.SRC_ALPHA,[Cp]:r.SRC_ALPHA_SATURATE,[wp]:r.DST_COLOR,[bp]:r.DST_ALPHA,[Tp]:r.ONE_MINUS_SRC_COLOR,[xl]:r.ONE_MINUS_SRC_ALPHA,[Rp]:r.ONE_MINUS_DST_COLOR,[Ap]:r.ONE_MINUS_DST_ALPHA,[Pp]:r.CONSTANT_COLOR,[Dp]:r.ONE_MINUS_CONSTANT_COLOR,[Lp]:r.CONSTANT_ALPHA,[Up]:r.ONE_MINUS_CONSTANT_ALPHA};function Yt(H,St,ft,bt,ct,rt,dt,Ht,xe,oe){if(H===wi){x===!0&&(wt(r.BLEND),x=!1);return}if(x===!1&&(ot(r.BLEND),x=!0),H!==_p){if(H!==g||oe!==M){if((_!==gr||b!==gr)&&(r.blendEquation(r.FUNC_ADD),_=gr,b=gr),oe)switch(H){case Zr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Au:r.blendFunc(r.ONE,r.ONE);break;case wu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ru:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ce("WebGLState: Invalid blending: ",H);break}else switch(H){case Zr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Au:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case wu:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ru:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",H);break}R=null,C=null,P=null,L=null,D.set(0,0,0),O=0,g=H,M=oe}return}ct=ct||St,rt=rt||ft,dt=dt||bt,(St!==_||ct!==b)&&(r.blendEquationSeparate(Ve[St],Ve[ct]),_=St,b=ct),(ft!==R||bt!==C||rt!==P||dt!==L)&&(r.blendFuncSeparate(Vt[ft],Vt[bt],Vt[rt],Vt[dt]),R=ft,C=bt,P=rt,L=dt),(Ht.equals(D)===!1||xe!==O)&&(r.blendColor(Ht.r,Ht.g,Ht.b,xe),D.copy(Ht),O=xe),g=H,M=!1}function _e(H,St){H.side===bi?wt(r.CULL_FACE):ot(r.CULL_FACE);let ft=H.side===vn;St&&(ft=!ft),$t(ft),H.blending===Zr&&H.transparent===!1?Yt(wi):Yt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),s.setMask(H.colorWrite);const bt=H.stencilWrite;o.setTest(bt),bt&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ue(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ot(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function $t(H){y!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),y=H)}function Le(H){H!==dp?(ot(r.CULL_FACE),H!==w&&(H===bu?r.cullFace(r.BACK):H===pp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),w=H}function V(H){H!==G&&(B&&r.lineWidth(H),G=H)}function Ue(H,St,ft){H?(ot(r.POLYGON_OFFSET_FILL),(z!==St||K!==ft)&&(r.polygonOffset(St,ft),z=St,K=ft)):wt(r.POLYGON_OFFSET_FILL)}function le(H){H?ot(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function ve(H){H===void 0&&(H=r.TEXTURE0+$-1),at!==H&&(r.activeTexture(H),at=H)}function Dt(H,St,ft){ft===void 0&&(at===null?ft=r.TEXTURE0+$-1:ft=at);let bt=ht[ft];bt===void 0&&(bt={type:void 0,texture:void 0},ht[ft]=bt),(bt.type!==H||bt.texture!==St)&&(at!==ft&&(r.activeTexture(ft),at=ft),r.bindTexture(H,St||it[H]),bt.type=H,bt.texture=St)}function I(){const H=ht[at];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(H){ce("WebGLState:",H)}}function X(){try{r.compressedTexImage3D(...arguments)}catch(H){ce("WebGLState:",H)}}function nt(){try{r.texSubImage2D(...arguments)}catch(H){ce("WebGLState:",H)}}function st(){try{r.texSubImage3D(...arguments)}catch(H){ce("WebGLState:",H)}}function et(){try{r.compressedTexSubImage2D(...arguments)}catch(H){ce("WebGLState:",H)}}function Ut(){try{r.compressedTexSubImage3D(...arguments)}catch(H){ce("WebGLState:",H)}}function vt(){try{r.texStorage2D(...arguments)}catch(H){ce("WebGLState:",H)}}function Lt(){try{r.texStorage3D(...arguments)}catch(H){ce("WebGLState:",H)}}function Gt(){try{r.texImage2D(...arguments)}catch(H){ce("WebGLState:",H)}}function lt(){try{r.texImage3D(...arguments)}catch(H){ce("WebGLState:",H)}}function pt(H){Bt.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),Bt.copy(H))}function Rt(H){Jt.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Jt.copy(H))}function It(H,St){let ft=u.get(St);ft===void 0&&(ft=new WeakMap,u.set(St,ft));let bt=ft.get(H);bt===void 0&&(bt=r.getUniformBlockIndex(St,H.name),ft.set(H,bt))}function mt(H,St){const bt=u.get(St).get(H);c.get(St)!==bt&&(r.uniformBlockBinding(St,bt,H.__bindingPointIndex),c.set(St,bt))}function Kt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},at=null,ht={},f={},p=new WeakMap,m=[],S=null,x=!1,g=null,_=null,R=null,C=null,b=null,P=null,L=null,D=new he(0,0,0),O=0,M=!1,y=null,w=null,G=null,z=null,K=null,Bt.set(0,0,r.canvas.width,r.canvas.height),Jt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ot,disable:wt,bindFramebuffer:qt,drawBuffers:Pt,useProgram:ie,setBlending:Yt,setMaterial:_e,setFlipSided:$t,setCullFace:Le,setLineWidth:V,setPolygonOffset:Ue,setScissorTest:le,activeTexture:ve,bindTexture:Dt,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:Gt,texImage3D:lt,updateUBOMapping:It,uniformBlockBinding:mt,texStorage2D:vt,texStorage3D:Lt,texSubImage2D:nt,texSubImage3D:st,compressedTexSubImage2D:et,compressedTexSubImage3D:Ut,scissor:pt,viewport:Rt,reset:Kt}}function bx(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new fe,h=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(I,E){return m?new OffscreenCanvas(I,E):Ws("canvas")}function x(I,E,X){let nt=1;const st=Dt(I);if((st.width>X||st.height>X)&&(nt=X/Math.max(st.width,st.height)),nt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const et=Math.floor(nt*st.width),Ut=Math.floor(nt*st.height);f===void 0&&(f=S(et,Ut));const vt=E?S(et,Ut):f;return vt.width=et,vt.height=Ut,vt.getContext("2d").drawImage(I,0,0,et,Ut),jt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+et+"x"+Ut+")."),vt}else return"data"in I&&jt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),I;return I}function g(I){return I.generateMipmaps}function _(I){r.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(I,E,X,nt,st=!1){if(I!==null){if(r[I]!==void 0)return r[I];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let et=E;if(E===r.RED&&(X===r.FLOAT&&(et=r.R32F),X===r.HALF_FLOAT&&(et=r.R16F),X===r.UNSIGNED_BYTE&&(et=r.R8)),E===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(et=r.R8UI),X===r.UNSIGNED_SHORT&&(et=r.R16UI),X===r.UNSIGNED_INT&&(et=r.R32UI),X===r.BYTE&&(et=r.R8I),X===r.SHORT&&(et=r.R16I),X===r.INT&&(et=r.R32I)),E===r.RG&&(X===r.FLOAT&&(et=r.RG32F),X===r.HALF_FLOAT&&(et=r.RG16F),X===r.UNSIGNED_BYTE&&(et=r.RG8)),E===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(et=r.RG8UI),X===r.UNSIGNED_SHORT&&(et=r.RG16UI),X===r.UNSIGNED_INT&&(et=r.RG32UI),X===r.BYTE&&(et=r.RG8I),X===r.SHORT&&(et=r.RG16I),X===r.INT&&(et=r.RG32I)),E===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(et=r.RGB8UI),X===r.UNSIGNED_SHORT&&(et=r.RGB16UI),X===r.UNSIGNED_INT&&(et=r.RGB32UI),X===r.BYTE&&(et=r.RGB8I),X===r.SHORT&&(et=r.RGB16I),X===r.INT&&(et=r.RGB32I)),E===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(et=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(et=r.RGBA16UI),X===r.UNSIGNED_INT&&(et=r.RGBA32UI),X===r.BYTE&&(et=r.RGBA8I),X===r.SHORT&&(et=r.RGBA16I),X===r.INT&&(et=r.RGBA32I)),E===r.RGB&&(X===r.UNSIGNED_INT_5_9_9_9_REV&&(et=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&(et=r.R11F_G11F_B10F)),E===r.RGBA){const Ut=st?Ya:ue.getTransfer(nt);X===r.FLOAT&&(et=r.RGBA32F),X===r.HALF_FLOAT&&(et=r.RGBA16F),X===r.UNSIGNED_BYTE&&(et=Ut===Se?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(et=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(et=r.RGB5_A1)}return(et===r.R16F||et===r.R32F||et===r.RG16F||et===r.RG32F||et===r.RGBA16F||et===r.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function b(I,E){let X;return I?E===null||E===hi||E===Hs?X=r.DEPTH24_STENCIL8:E===ri?X=r.DEPTH32F_STENCIL8:E===Gs&&(X=r.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===hi||E===Hs?X=r.DEPTH_COMPONENT24:E===ri?X=r.DEPTH_COMPONENT32F:E===Gs&&(X=r.DEPTH_COMPONENT16),X}function P(I,E){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==tn&&I.minFilter!==ln?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function L(I){const E=I.target;E.removeEventListener("dispose",L),O(E),E.isVideoTexture&&h.delete(E)}function D(I){const E=I.target;E.removeEventListener("dispose",D),y(E)}function O(I){const E=n.get(I);if(E.__webglInit===void 0)return;const X=I.source,nt=p.get(X);if(nt){const st=nt[E.__cacheKey];st.usedTimes--,st.usedTimes===0&&M(I),Object.keys(nt).length===0&&p.delete(X)}n.remove(I)}function M(I){const E=n.get(I);r.deleteTexture(E.__webglTexture);const X=I.source,nt=p.get(X);delete nt[E.__cacheKey],a.memory.textures--}function y(I){const E=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(E.__webglFramebuffer[nt]))for(let st=0;st<E.__webglFramebuffer[nt].length;st++)r.deleteFramebuffer(E.__webglFramebuffer[nt][st]);else r.deleteFramebuffer(E.__webglFramebuffer[nt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[nt])}else{if(Array.isArray(E.__webglFramebuffer))for(let nt=0;nt<E.__webglFramebuffer.length;nt++)r.deleteFramebuffer(E.__webglFramebuffer[nt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let nt=0;nt<E.__webglColorRenderbuffer.length;nt++)E.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[nt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=I.textures;for(let nt=0,st=X.length;nt<st;nt++){const et=n.get(X[nt]);et.__webglTexture&&(r.deleteTexture(et.__webglTexture),a.memory.textures--),n.remove(X[nt])}n.remove(I)}let w=0;function G(){w=0}function z(){const I=w;return I>=i.maxTextures&&jt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),w+=1,I}function K(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function $(I,E){const X=n.get(I);if(I.isVideoTexture&&le(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){const nt=I.image;if(nt===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{it(X,I,E);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+E)}function B(I,E){const X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){it(X,I,E);return}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+E)}function k(I,E){const X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){it(X,I,E);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+E)}function J(I,E){const X=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&X.__version!==I.version){ot(X,I,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+E)}const at={[Cl]:r.REPEAT,[Ai]:r.CLAMP_TO_EDGE,[Pl]:r.MIRRORED_REPEAT},ht={[tn]:r.NEAREST,[Np]:r.NEAREST_MIPMAP_NEAREST,[fa]:r.NEAREST_MIPMAP_LINEAR,[ln]:r.LINEAR,[yo]:r.LINEAR_MIPMAP_NEAREST,[xr]:r.LINEAR_MIPMAP_LINEAR},gt={[zp]:r.NEVER,[Wp]:r.ALWAYS,[Vp]:r.LESS,[Ic]:r.LEQUAL,[kp]:r.EQUAL,[Fc]:r.GEQUAL,[Gp]:r.GREATER,[Hp]:r.NOTEQUAL};function Nt(I,E){if(E.type===ri&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ln||E.magFilter===yo||E.magFilter===fa||E.magFilter===xr||E.minFilter===ln||E.minFilter===yo||E.minFilter===fa||E.minFilter===xr)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,at[E.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,at[E.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,at[E.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,ht[E.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,ht[E.minFilter]),E.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,gt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===tn||E.minFilter!==fa&&E.minFilter!==xr||E.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Bt(I,E){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",L));const nt=E.source;let st=p.get(nt);st===void 0&&(st={},p.set(nt,st));const et=K(E);if(et!==I.__cacheKey){st[et]===void 0&&(st[et]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),st[et].usedTimes++;const Ut=st[I.__cacheKey];Ut!==void 0&&(st[I.__cacheKey].usedTimes--,Ut.usedTimes===0&&M(E)),I.__cacheKey=et,I.__webglTexture=st[et].texture}return X}function Jt(I,E,X){return Math.floor(Math.floor(I/X)/E)}function Qt(I,E,X,nt){const et=I.updateRanges;if(et.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,X,nt,E.data);else{et.sort((lt,pt)=>lt.start-pt.start);let Ut=0;for(let lt=1;lt<et.length;lt++){const pt=et[Ut],Rt=et[lt],It=pt.start+pt.count,mt=Jt(Rt.start,E.width,4),Kt=Jt(pt.start,E.width,4);Rt.start<=It+1&&mt===Kt&&Jt(Rt.start+Rt.count-1,E.width,4)===mt?pt.count=Math.max(pt.count,Rt.start+Rt.count-pt.start):(++Ut,et[Ut]=Rt)}et.length=Ut+1;const vt=r.getParameter(r.UNPACK_ROW_LENGTH),Lt=r.getParameter(r.UNPACK_SKIP_PIXELS),Gt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let lt=0,pt=et.length;lt<pt;lt++){const Rt=et[lt],It=Math.floor(Rt.start/4),mt=Math.ceil(Rt.count/4),Kt=It%E.width,H=Math.floor(It/E.width),St=mt,ft=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,H),e.texSubImage2D(r.TEXTURE_2D,0,Kt,H,St,ft,X,nt,E.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,vt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Lt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Gt)}}function it(I,E,X){let nt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(nt=r.TEXTURE_3D);const st=Bt(I,E),et=E.source;e.bindTexture(nt,I.__webglTexture,r.TEXTURE0+X);const Ut=n.get(et);if(et.version!==Ut.__version||st===!0){e.activeTexture(r.TEXTURE0+X);const vt=ue.getPrimaries(ue.workingColorSpace),Lt=E.colorSpace===Gi?null:ue.getPrimaries(E.colorSpace),Gt=E.colorSpace===Gi||vt===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let lt=x(E.image,!1,i.maxTextureSize);lt=ve(E,lt);const pt=s.convert(E.format,E.colorSpace),Rt=s.convert(E.type);let It=C(E.internalFormat,pt,Rt,E.colorSpace,E.isVideoTexture);Nt(nt,E);let mt;const Kt=E.mipmaps,H=E.isVideoTexture!==!0,St=Ut.__version===void 0||st===!0,ft=et.dataReady,bt=P(E,lt);if(E.isDepthTexture)It=b(E.format===Sr,E.type),St&&(H?e.texStorage2D(r.TEXTURE_2D,1,It,lt.width,lt.height):e.texImage2D(r.TEXTURE_2D,0,It,lt.width,lt.height,0,pt,Rt,null));else if(E.isDataTexture)if(Kt.length>0){H&&St&&e.texStorage2D(r.TEXTURE_2D,bt,It,Kt[0].width,Kt[0].height);for(let ct=0,rt=Kt.length;ct<rt;ct++)mt=Kt[ct],H?ft&&e.texSubImage2D(r.TEXTURE_2D,ct,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(r.TEXTURE_2D,ct,It,mt.width,mt.height,0,pt,Rt,mt.data);E.generateMipmaps=!1}else H?(St&&e.texStorage2D(r.TEXTURE_2D,bt,It,lt.width,lt.height),ft&&Qt(E,lt,pt,Rt)):e.texImage2D(r.TEXTURE_2D,0,It,lt.width,lt.height,0,pt,Rt,lt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&St&&e.texStorage3D(r.TEXTURE_2D_ARRAY,bt,It,Kt[0].width,Kt[0].height,lt.depth);for(let ct=0,rt=Kt.length;ct<rt;ct++)if(mt=Kt[ct],E.format!==Zn)if(pt!==null)if(H){if(ft)if(E.layerUpdates.size>0){const dt=nh(mt.width,mt.height,E.format,E.type);for(const Ht of E.layerUpdates){const xe=mt.data.subarray(Ht*dt/mt.data.BYTES_PER_ELEMENT,(Ht+1)*dt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,Ht,mt.width,mt.height,1,pt,xe)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,mt.width,mt.height,lt.depth,pt,mt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ct,It,mt.width,mt.height,lt.depth,0,mt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?ft&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,ct,0,0,0,mt.width,mt.height,lt.depth,pt,Rt,mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ct,It,mt.width,mt.height,lt.depth,0,pt,Rt,mt.data)}else{H&&St&&e.texStorage2D(r.TEXTURE_2D,bt,It,Kt[0].width,Kt[0].height);for(let ct=0,rt=Kt.length;ct<rt;ct++)mt=Kt[ct],E.format!==Zn?pt!==null?H?ft&&e.compressedTexSubImage2D(r.TEXTURE_2D,ct,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(r.TEXTURE_2D,ct,It,mt.width,mt.height,0,mt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?ft&&e.texSubImage2D(r.TEXTURE_2D,ct,0,0,mt.width,mt.height,pt,Rt,mt.data):e.texImage2D(r.TEXTURE_2D,ct,It,mt.width,mt.height,0,pt,Rt,mt.data)}else if(E.isDataArrayTexture)if(H){if(St&&e.texStorage3D(r.TEXTURE_2D_ARRAY,bt,It,lt.width,lt.height,lt.depth),ft)if(E.layerUpdates.size>0){const ct=nh(lt.width,lt.height,E.format,E.type);for(const rt of E.layerUpdates){const dt=lt.data.subarray(rt*ct/lt.data.BYTES_PER_ELEMENT,(rt+1)*ct/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,rt,lt.width,lt.height,1,pt,Rt,dt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,pt,Rt,lt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,It,lt.width,lt.height,lt.depth,0,pt,Rt,lt.data);else if(E.isData3DTexture)H?(St&&e.texStorage3D(r.TEXTURE_3D,bt,It,lt.width,lt.height,lt.depth),ft&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,pt,Rt,lt.data)):e.texImage3D(r.TEXTURE_3D,0,It,lt.width,lt.height,lt.depth,0,pt,Rt,lt.data);else if(E.isFramebufferTexture){if(St)if(H)e.texStorage2D(r.TEXTURE_2D,bt,It,lt.width,lt.height);else{let ct=lt.width,rt=lt.height;for(let dt=0;dt<bt;dt++)e.texImage2D(r.TEXTURE_2D,dt,It,ct,rt,0,pt,Rt,null),ct>>=1,rt>>=1}}else if(Kt.length>0){if(H&&St){const ct=Dt(Kt[0]);e.texStorage2D(r.TEXTURE_2D,bt,It,ct.width,ct.height)}for(let ct=0,rt=Kt.length;ct<rt;ct++)mt=Kt[ct],H?ft&&e.texSubImage2D(r.TEXTURE_2D,ct,0,0,pt,Rt,mt):e.texImage2D(r.TEXTURE_2D,ct,It,pt,Rt,mt);E.generateMipmaps=!1}else if(H){if(St){const ct=Dt(lt);e.texStorage2D(r.TEXTURE_2D,bt,It,ct.width,ct.height)}ft&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,pt,Rt,lt)}else e.texImage2D(r.TEXTURE_2D,0,It,pt,Rt,lt);g(E)&&_(nt),Ut.__version=et.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ot(I,E,X){if(E.image.length!==6)return;const nt=Bt(I,E),st=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+X);const et=n.get(st);if(st.version!==et.__version||nt===!0){e.activeTexture(r.TEXTURE0+X);const Ut=ue.getPrimaries(ue.workingColorSpace),vt=E.colorSpace===Gi?null:ue.getPrimaries(E.colorSpace),Lt=E.colorSpace===Gi||Ut===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const Gt=E.isCompressedTexture||E.image[0].isCompressedTexture,lt=E.image[0]&&E.image[0].isDataTexture,pt=[];for(let rt=0;rt<6;rt++)!Gt&&!lt?pt[rt]=x(E.image[rt],!0,i.maxCubemapSize):pt[rt]=lt?E.image[rt].image:E.image[rt],pt[rt]=ve(E,pt[rt]);const Rt=pt[0],It=s.convert(E.format,E.colorSpace),mt=s.convert(E.type),Kt=C(E.internalFormat,It,mt,E.colorSpace),H=E.isVideoTexture!==!0,St=et.__version===void 0||nt===!0,ft=st.dataReady;let bt=P(E,Rt);Nt(r.TEXTURE_CUBE_MAP,E);let ct;if(Gt){H&&St&&e.texStorage2D(r.TEXTURE_CUBE_MAP,bt,Kt,Rt.width,Rt.height);for(let rt=0;rt<6;rt++){ct=pt[rt].mipmaps;for(let dt=0;dt<ct.length;dt++){const Ht=ct[dt];E.format!==Zn?It!==null?H?ft&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt,0,0,Ht.width,Ht.height,It,Ht.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt,Kt,Ht.width,Ht.height,0,Ht.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ft&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt,0,0,Ht.width,Ht.height,It,mt,Ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt,Kt,Ht.width,Ht.height,0,It,mt,Ht.data)}}}else{if(ct=E.mipmaps,H&&St){ct.length>0&&bt++;const rt=Dt(pt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,bt,Kt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(lt){H?ft&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,pt[rt].width,pt[rt].height,It,mt,pt[rt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,pt[rt].width,pt[rt].height,0,It,mt,pt[rt].data);for(let dt=0;dt<ct.length;dt++){const xe=ct[dt].image[rt].image;H?ft&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt+1,0,0,xe.width,xe.height,It,mt,xe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt+1,Kt,xe.width,xe.height,0,It,mt,xe.data)}}else{H?ft&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,It,mt,pt[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,It,mt,pt[rt]);for(let dt=0;dt<ct.length;dt++){const Ht=ct[dt];H?ft&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt+1,0,0,It,mt,Ht.image[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,dt+1,Kt,It,mt,Ht.image[rt])}}}g(E)&&_(r.TEXTURE_CUBE_MAP),et.__version=st.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function wt(I,E,X,nt,st,et){const Ut=s.convert(X.format,X.colorSpace),vt=s.convert(X.type),Lt=C(X.internalFormat,Ut,vt,X.colorSpace),Gt=n.get(E),lt=n.get(X);if(lt.__renderTarget=E,!Gt.__hasExternalTextures){const pt=Math.max(1,E.width>>et),Rt=Math.max(1,E.height>>et);st===r.TEXTURE_3D||st===r.TEXTURE_2D_ARRAY?e.texImage3D(st,et,Lt,pt,Rt,E.depth,0,Ut,vt,null):e.texImage2D(st,et,Lt,pt,Rt,0,Ut,vt,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),Ue(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,st,lt.__webglTexture,0,V(E)):(st===r.TEXTURE_2D||st>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,st,lt.__webglTexture,et),e.bindFramebuffer(r.FRAMEBUFFER,null)}function qt(I,E,X){if(r.bindRenderbuffer(r.RENDERBUFFER,I),E.depthBuffer){const nt=E.depthTexture,st=nt&&nt.isDepthTexture?nt.type:null,et=b(E.stencilBuffer,st),Ut=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ue(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),et,E.width,E.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),et,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,et,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ut,r.RENDERBUFFER,I)}else{const nt=E.textures;for(let st=0;st<nt.length;st++){const et=nt[st],Ut=s.convert(et.format,et.colorSpace),vt=s.convert(et.type),Lt=C(et.internalFormat,Ut,vt,et.colorSpace);Ue(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),Lt,E.width,E.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),Lt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Lt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pt(I,E,X){const nt=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=n.get(E.depthTexture);if(st.__renderTarget=E,(!st.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),nt){if(st.__webglInit===void 0&&(st.__webglInit=!0,E.depthTexture.addEventListener("dispose",L)),st.__webglTexture===void 0){st.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),Nt(r.TEXTURE_CUBE_MAP,E.depthTexture);const Gt=s.convert(E.depthTexture.format),lt=s.convert(E.depthTexture.type);let pt;E.depthTexture.format===Pi?pt=r.DEPTH_COMPONENT24:E.depthTexture.format===Sr&&(pt=r.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,pt,E.width,E.height,0,Gt,lt,null)}}else $(E.depthTexture,0);const et=st.__webglTexture,Ut=V(E),vt=nt?r.TEXTURE_CUBE_MAP_POSITIVE_X+X:r.TEXTURE_2D,Lt=E.depthTexture.format===Sr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Pi)Ue(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Lt,vt,et,0,Ut):r.framebufferTexture2D(r.FRAMEBUFFER,Lt,vt,et,0);else if(E.depthTexture.format===Sr)Ue(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Lt,vt,et,0,Ut):r.framebufferTexture2D(r.FRAMEBUFFER,Lt,vt,et,0);else throw new Error("Unknown depthTexture format")}function ie(I){const E=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const nt=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),nt){const st=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,nt.removeEventListener("dispose",st)};nt.addEventListener("dispose",st),E.__depthDisposeCallback=st}E.__boundDepthTexture=nt}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let nt=0;nt<6;nt++)Pt(E.__webglFramebuffer[nt],I,nt);else{const nt=I.texture.mipmaps;nt&&nt.length>0?Pt(E.__webglFramebuffer[0],I,0):Pt(E.__webglFramebuffer,I,0)}else if(X){E.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[nt]),E.__webglDepthbuffer[nt]===void 0)E.__webglDepthbuffer[nt]=r.createRenderbuffer(),qt(E.__webglDepthbuffer[nt],I,!1);else{const st=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer[nt];r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,et)}}else{const nt=I.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),qt(E.__webglDepthbuffer,I,!1);else{const st=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,et)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(I,E,X){const nt=n.get(I);E!==void 0&&wt(nt.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&ie(I)}function Vt(I){const E=I.texture,X=n.get(I),nt=n.get(E);I.addEventListener("dispose",D);const st=I.textures,et=I.isWebGLCubeRenderTarget===!0,Ut=st.length>1;if(Ut||(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=E.version,a.memory.textures++),et){X.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[vt]=[];for(let Lt=0;Lt<E.mipmaps.length;Lt++)X.__webglFramebuffer[vt][Lt]=r.createFramebuffer()}else X.__webglFramebuffer[vt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let vt=0;vt<E.mipmaps.length;vt++)X.__webglFramebuffer[vt]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(Ut)for(let vt=0,Lt=st.length;vt<Lt;vt++){const Gt=n.get(st[vt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=r.createTexture(),a.memory.textures++)}if(I.samples>0&&Ue(I)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let vt=0;vt<st.length;vt++){const Lt=st[vt];X.__webglColorRenderbuffer[vt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[vt]);const Gt=s.convert(Lt.format,Lt.colorSpace),lt=s.convert(Lt.type),pt=C(Lt.internalFormat,Gt,lt,Lt.colorSpace,I.isXRRenderTarget===!0),Rt=V(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,pt,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,X.__webglColorRenderbuffer[vt])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),qt(X.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(et){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),Nt(r.TEXTURE_CUBE_MAP,E);for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Lt=0;Lt<E.mipmaps.length;Lt++)wt(X.__webglFramebuffer[vt][Lt],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Lt);else wt(X.__webglFramebuffer[vt],I,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);g(E)&&_(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let vt=0,Lt=st.length;vt<Lt;vt++){const Gt=st[vt],lt=n.get(Gt);let pt=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(pt,lt.__webglTexture),Nt(pt,Gt),wt(X.__webglFramebuffer,I,Gt,r.COLOR_ATTACHMENT0+vt,pt,0),g(Gt)&&_(pt)}e.unbindTexture()}else{let vt=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(vt=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(vt,nt.__webglTexture),Nt(vt,E),E.mipmaps&&E.mipmaps.length>0)for(let Lt=0;Lt<E.mipmaps.length;Lt++)wt(X.__webglFramebuffer[Lt],I,E,r.COLOR_ATTACHMENT0,vt,Lt);else wt(X.__webglFramebuffer,I,E,r.COLOR_ATTACHMENT0,vt,0);g(E)&&_(vt),e.unbindTexture()}I.depthBuffer&&ie(I)}function Yt(I){const E=I.textures;for(let X=0,nt=E.length;X<nt;X++){const st=E[X];if(g(st)){const et=R(I),Ut=n.get(st).__webglTexture;e.bindTexture(et,Ut),_(et),e.unbindTexture()}}}const _e=[],$t=[];function Le(I){if(I.samples>0){if(Ue(I)===!1){const E=I.textures,X=I.width,nt=I.height;let st=r.COLOR_BUFFER_BIT;const et=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=n.get(I),vt=E.length>1;if(vt)for(let Gt=0;Gt<E.length;Gt++)e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const Lt=I.texture.mipmaps;Lt&&Lt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Gt=0;Gt<E.length;Gt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(st|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(st|=r.STENCIL_BUFFER_BIT)),vt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ut.__webglColorRenderbuffer[Gt]);const lt=n.get(E[Gt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,lt,0)}r.blitFramebuffer(0,0,X,nt,0,0,X,nt,st,r.NEAREST),c===!0&&(_e.length=0,$t.length=0,_e.push(r.COLOR_ATTACHMENT0+Gt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(_e.push(et),$t.push(et),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,$t)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),vt)for(let Gt=0;Gt<E.length;Gt++){e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.RENDERBUFFER,Ut.__webglColorRenderbuffer[Gt]);const lt=n.get(E[Gt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.TEXTURE_2D,lt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const E=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function V(I){return Math.min(i.maxSamples,I.samples)}function Ue(I){const E=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function le(I){const E=a.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function ve(I,E){const X=I.colorSpace,nt=I.format,st=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==as&&X!==Gi&&(ue.getTransfer(X)===Se?(nt!==Zn||st!==Ln)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",X)),E}function Dt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=$,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=J,this.rebindTextures=Ve,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ax(r,t){function e(n,i=Gi){let s;const a=ue.getTransfer(i);if(n===Ln)return r.UNSIGNED_BYTE;if(n===Cc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Pc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===df)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===pf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===hf)return r.BYTE;if(n===ff)return r.SHORT;if(n===Gs)return r.UNSIGNED_SHORT;if(n===Rc)return r.INT;if(n===hi)return r.UNSIGNED_INT;if(n===ri)return r.FLOAT;if(n===Ci)return r.HALF_FLOAT;if(n===mf)return r.ALPHA;if(n===_f)return r.RGB;if(n===Zn)return r.RGBA;if(n===Pi)return r.DEPTH_COMPONENT;if(n===Sr)return r.DEPTH_STENCIL;if(n===gf)return r.RED;if(n===Dc)return r.RED_INTEGER;if(n===ss)return r.RG;if(n===Lc)return r.RG_INTEGER;if(n===Uc)return r.RGBA_INTEGER;if(n===za||n===Va||n===ka||n===Ga)if(a===Se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dl||n===Ll||n===Ul||n===Il)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Dl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ll)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ul)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Il)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fl||n===Nl||n===Ol||n===Bl||n===zl||n===Vl||n===kl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fl||n===Nl)return a===Se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ol)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Bl)return s.COMPRESSED_R11_EAC;if(n===zl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Vl)return s.COMPRESSED_RG11_EAC;if(n===kl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gl||n===Hl||n===Wl||n===Xl||n===jl||n===Yl||n===ql||n===Kl||n===$l||n===Zl||n===Jl||n===Ql||n===tc||n===ec)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Gl)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hl)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wl)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xl)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jl)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yl)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ql)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kl)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$l)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zl)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jl)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ql)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tc)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return a===Se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nc||n===ic||n===rc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===nc)return a===Se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ic)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sc||n===ac||n===oc||n===lc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===sc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Cx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Pf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new pi({vertexShader:wx,fragmentShader:Rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new di(new ra(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Px extends ms{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,f=null,p=null,m=null,S=null;const x=typeof XRWebGLBinding<"u",g=new Cx,_={},R=e.getContextAttributes();let C=null,b=null;const P=[],L=[],D=new fe;let O=null;const M=new Dn;M.viewport=new Oe;const y=new Dn;y.viewport=new Oe;const w=[M,y],G=new zm;let z=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ot=P[it];return ot===void 0&&(ot=new Wo,P[it]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(it){let ot=P[it];return ot===void 0&&(ot=new Wo,P[it]=ot),ot.getGripSpace()},this.getHand=function(it){let ot=P[it];return ot===void 0&&(ot=new Wo,P[it]=ot),ot.getHandSpace()};function $(it){const ot=L.indexOf(it.inputSource);if(ot===-1)return;const wt=P[ot];wt!==void 0&&(wt.update(it.inputSource,it.frame,u||a),wt.dispatchEvent({type:it.type,data:it.inputSource}))}function B(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",k);for(let it=0;it<P.length;it++){const ot=L[it];ot!==null&&(L[it]=null,P[it].disconnect(ot))}z=null,K=null,g.reset();for(const it in _)delete _[it];t.setRenderTarget(C),m=null,p=null,f=null,i=null,b=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){s=it,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(it){u=it},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return S},this.getSession=function(){return i},this.setSession=async function(it){if(i=it,i!==null){if(C=t.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",B),i.addEventListener("inputsourceschange",k),R.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,qt=null,Pt=null;R.depth&&(Pt=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=R.stencil?Sr:Pi,qt=R.stencil?Hs:hi);const ie={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:s};f=this.getBinding(),p=f.createProjectionLayer(ie),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),b=new li(p.textureWidth,p.textureHeight,{format:Zn,type:Ln,depthTexture:new js(p.textureWidth,p.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const wt={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,wt),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new li(m.framebufferWidth,m.framebufferHeight,{format:Zn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await i.requestReferenceSpace(o),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(it){for(let ot=0;ot<it.removed.length;ot++){const wt=it.removed[ot],qt=L.indexOf(wt);qt>=0&&(L[qt]=null,P[qt].disconnect(wt))}for(let ot=0;ot<it.added.length;ot++){const wt=it.added[ot];let qt=L.indexOf(wt);if(qt===-1){for(let ie=0;ie<P.length;ie++)if(ie>=L.length){L.push(wt),qt=ie;break}else if(L[ie]===null){L[ie]=wt,qt=ie;break}if(qt===-1)break}const Pt=P[qt];Pt&&Pt.connect(wt)}}const J=new q,at=new q;function ht(it,ot,wt){J.setFromMatrixPosition(ot.matrixWorld),at.setFromMatrixPosition(wt.matrixWorld);const qt=J.distanceTo(at),Pt=ot.projectionMatrix.elements,ie=wt.projectionMatrix.elements,Ve=Pt[14]/(Pt[10]-1),Vt=Pt[14]/(Pt[10]+1),Yt=(Pt[9]+1)/Pt[5],_e=(Pt[9]-1)/Pt[5],$t=(Pt[8]-1)/Pt[0],Le=(ie[8]+1)/ie[0],V=Ve*$t,Ue=Ve*Le,le=qt/(-$t+Le),ve=le*-$t;if(ot.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(ve),it.translateZ(le),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Pt[10]===-1)it.projectionMatrix.copy(ot.projectionMatrix),it.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Dt=Ve+le,I=Vt+le,E=V-ve,X=Ue+(qt-ve),nt=Yt*Vt/I*Dt,st=_e*Vt/I*Dt;it.projectionMatrix.makePerspective(E,X,nt,st,Dt,I),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function gt(it,ot){ot===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ot.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(i===null)return;let ot=it.near,wt=it.far;g.texture!==null&&(g.depthNear>0&&(ot=g.depthNear),g.depthFar>0&&(wt=g.depthFar)),G.near=y.near=M.near=ot,G.far=y.far=M.far=wt,(z!==G.near||K!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),z=G.near,K=G.far),G.layers.mask=it.layers.mask|6,M.layers.mask=G.layers.mask&3,y.layers.mask=G.layers.mask&5;const qt=it.parent,Pt=G.cameras;gt(G,qt);for(let ie=0;ie<Pt.length;ie++)gt(Pt[ie],qt);Pt.length===2?ht(G,M,y):G.projectionMatrix.copy(M.projectionMatrix),Nt(it,G,qt)};function Nt(it,ot,wt){wt===null?it.matrix.copy(ot.matrixWorld):(it.matrix.copy(wt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ot.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ot.projectionMatrix),it.projectionMatrixInverse.copy(ot.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=cc*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(it){c=it,p!==null&&(p.fixedFoveation=it),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=it)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(it){return _[it]};let Bt=null;function Jt(it,ot){if(h=ot.getViewerPose(u||a),S=ot,h!==null){const wt=h.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let qt=!1;wt.length!==G.cameras.length&&(G.cameras.length=0,qt=!0);for(let Vt=0;Vt<wt.length;Vt++){const Yt=wt[Vt];let _e=null;if(m!==null)_e=m.getViewport(Yt);else{const Le=f.getViewSubImage(p,Yt);_e=Le.viewport,Vt===0&&(t.setRenderTargetTextures(b,Le.colorTexture,Le.depthStencilTexture),t.setRenderTarget(b))}let $t=w[Vt];$t===void 0&&($t=new Dn,$t.layers.enable(Vt),$t.viewport=new Oe,w[Vt]=$t),$t.matrix.fromArray(Yt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Yt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(_e.x,_e.y,_e.width,_e.height),Vt===0&&(G.matrix.copy($t.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),qt===!0&&G.cameras.push($t)}const Pt=i.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const Vt=f.getDepthInformation(wt[0]);Vt&&Vt.isValid&&Vt.texture&&g.init(Vt,i.renderState)}if(Pt&&Pt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let Vt=0;Vt<wt.length;Vt++){const Yt=wt[Vt].camera;if(Yt){let _e=_[Yt];_e||(_e=new Pf,_[Yt]=_e);const $t=f.getCameraImage(Yt);_e.sourceTexture=$t}}}}for(let wt=0;wt<P.length;wt++){const qt=L[wt],Pt=P[wt];qt!==null&&Pt!==void 0&&Pt.update(qt,ot,u||a)}Bt&&Bt(it,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),S=null}const Qt=new Uf;Qt.setAnimationLoop(Jt),this.setAnimationLoop=function(it){Bt=it},this.dispose=function(){}}}const fr=new fi,Dx=new Ce;function Lx(r,t){function e(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function n(g,_){_.color.getRGB(g.fogColor.value,bf(r)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function i(g,_,R,C,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(g,_):_.isMeshToonMaterial?(s(g,_),f(g,_)):_.isMeshPhongMaterial?(s(g,_),h(g,_)):_.isMeshStandardMaterial?(s(g,_),p(g,_),_.isMeshPhysicalMaterial&&m(g,_,b)):_.isMeshMatcapMaterial?(s(g,_),S(g,_)):_.isMeshDepthMaterial?s(g,_):_.isMeshDistanceMaterial?(s(g,_),x(g,_)):_.isMeshNormalMaterial?s(g,_):_.isLineBasicMaterial?(a(g,_),_.isLineDashedMaterial&&o(g,_)):_.isPointsMaterial?c(g,_,R,C):_.isSpriteMaterial?u(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,e(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,e(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===vn&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,e(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===vn&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,e(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,e(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const R=t.get(_),C=R.envMap,b=R.envMapRotation;C&&(g.envMap.value=C,fr.copy(b),fr.x*=-1,fr.y*=-1,fr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),g.envMapRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(fr)),g.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,g.aoMapTransform))}function a(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,e(_.map,g.mapTransform))}function o(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function c(g,_,R,C){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*R,g.scale.value=C*.5,_.map&&(g.map.value=_.map,e(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function u(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,e(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function h(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function f(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function p(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function m(g,_,R){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===vn&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=R.texture,g.transmissionSamplerSize.value.set(R.width,R.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,g.specularIntensityMapTransform))}function S(g,_){_.matcap&&(g.matcap.value=_.matcap)}function x(g,_){const R=t.get(_).light;g.referencePosition.value.setFromMatrixPosition(R.matrixWorld),g.nearDistance.value=R.shadow.camera.near,g.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ux(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,C){const b=C.program;n.uniformBlockBinding(R,b)}function u(R,C){let b=i[R.id];b===void 0&&(S(R),b=h(R),i[R.id]=b,R.addEventListener("dispose",g));const P=C.program;n.updateUBOMapping(R,P);const L=t.render.frame;s[R.id]!==L&&(p(R),s[R.id]=L)}function h(R){const C=f();R.__bindingPointIndex=C;const b=r.createBuffer(),P=R.__size,L=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,P,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,b),b}function f(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){const C=i[R.id],b=R.uniforms,P=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let L=0,D=b.length;L<D;L++){const O=Array.isArray(b[L])?b[L]:[b[L]];for(let M=0,y=O.length;M<y;M++){const w=O[M];if(m(w,L,M,P)===!0){const G=w.__offset,z=Array.isArray(w.value)?w.value:[w.value];let K=0;for(let $=0;$<z.length;$++){const B=z[$],k=x(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,G+K,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,K),K+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(R,C,b,P){const L=R.value,D=C+"_"+b;if(P[D]===void 0)return typeof L=="number"||typeof L=="boolean"?P[D]=L:P[D]=L.clone(),!0;{const O=P[D];if(typeof L=="number"||typeof L=="boolean"){if(O!==L)return P[D]=L,!0}else if(O.equals(L)===!1)return O.copy(L),!0}return!1}function S(R){const C=R.uniforms;let b=0;const P=16;for(let D=0,O=C.length;D<O;D++){const M=Array.isArray(C[D])?C[D]:[C[D]];for(let y=0,w=M.length;y<w;y++){const G=M[y],z=Array.isArray(G.value)?G.value:[G.value];for(let K=0,$=z.length;K<$;K++){const B=z[K],k=x(B),J=b%P,at=J%k.boundary,ht=J+at;b+=at,ht!==0&&P-ht<k.storage&&(b+=P-ht),G.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=k.storage}}}const L=b%P;return L>0&&(b+=P-L),R.__size=b,R.__cache={},this}function x(R){const C={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(C.boundary=4,C.storage=4):R.isVector2?(C.boundary=8,C.storage=8):R.isVector3||R.isColor?(C.boundary=16,C.storage=12):R.isVector4?(C.boundary=16,C.storage=16):R.isMatrix3?(C.boundary=48,C.storage=48):R.isMatrix4?(C.boundary=64,C.storage=64):R.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):jt("WebGLRenderer: Unsupported uniform value type.",R),C}function g(R){const C=R.target;C.removeEventListener("dispose",g);const b=a.indexOf(C.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[C.id]),delete i[C.id],delete s[C.id]}function _(){for(const R in i)r.deleteBuffer(i[R]);a=[],i={},s={}}return{bind:c,update:u,dispose:_}}const Ix=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function Fx(){return ti===null&&(ti=new vm(Ix,16,16,ss,Ci),ti.name="DFG_LUT",ti.minFilter=ln,ti.magFilter=ln,ti.wrapS=Ai,ti.wrapT=Ai,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class Nx{constructor(t={}){const{canvas:e=Xp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:m=Ln}=t;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=a;const x=m,g=new Set([Uc,Lc,Dc]),_=new Set([Ln,hi,Gs,Hs,Cc,Pc]),R=new Uint32Array(4),C=new Int32Array(4);let b=null,P=null;const L=[],D=[];let O=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let y=!1;this._outputColorSpace=Cn;let w=0,G=0,z=null,K=-1,$=null;const B=new Oe,k=new Oe;let J=null;const at=new he(0);let ht=0,gt=e.width,Nt=e.height,Bt=1,Jt=null,Qt=null;const it=new Oe(0,0,gt,Nt),ot=new Oe(0,0,gt,Nt);let wt=!1;const qt=new Vc;let Pt=!1,ie=!1;const Ve=new Ce,Vt=new q,Yt=new Oe,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function Le(){return z===null?Bt:1}let V=n;function Ue(A,j){return e.getContext(A,j)}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wc}`),e.addEventListener("webglcontextlost",Ht,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",oe,!1),V===null){const j="webgl2";if(V=Ue(j,A),V===null)throw Ue(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw ce("WebGLRenderer: "+A.message),A}let le,ve,Dt,I,E,X,nt,st,et,Ut,vt,Lt,Gt,lt,pt,Rt,It,mt,Kt,H,St,ft,bt,ct;function rt(){le=new F0(V),le.init(),ft=new Ax(V,le),ve=new A0(V,le,t,ft),Dt=new Tx(V,le),ve.reversedDepthBuffer&&p&&Dt.buffers.depth.setReversed(!0),I=new B0(V),E=new cx,X=new bx(V,le,Dt,E,ve,ft,I),nt=new R0(M),st=new I0(M),et=new Gm(V),bt=new T0(V,et),Ut=new N0(V,et,I,bt),vt=new V0(V,Ut,et,I),Kt=new z0(V,ve,X),Rt=new w0(E),Lt=new lx(M,nt,st,le,ve,bt,Rt),Gt=new Lx(M,E),lt=new hx,pt=new gx(le),mt=new E0(M,nt,st,Dt,vt,S,c),It=new Mx(M,vt,ve),ct=new Ux(V,I,ve,Dt),H=new b0(V,le,I),St=new O0(V,le,I),I.programs=Lt.programs,M.capabilities=ve,M.extensions=le,M.properties=E,M.renderLists=lt,M.shadowMap=It,M.state=Dt,M.info=I}rt(),x!==Ln&&(O=new G0(x,e.width,e.height,i,s));const dt=new Px(M,V);this.xr=dt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=le.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=le.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Bt},this.setPixelRatio=function(A){A!==void 0&&(Bt=A,this.setSize(gt,Nt,!1))},this.getSize=function(A){return A.set(gt,Nt)},this.setSize=function(A,j,Q=!0){if(dt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}gt=A,Nt=j,e.width=Math.floor(A*Bt),e.height=Math.floor(j*Bt),Q===!0&&(e.style.width=A+"px",e.style.height=j+"px"),O!==null&&O.setSize(e.width,e.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(gt*Bt,Nt*Bt).floor()},this.setDrawingBufferSize=function(A,j,Q){gt=A,Nt=j,Bt=Q,e.width=Math.floor(A*Q),e.height=Math.floor(j*Q),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(x===Ln){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(it)},this.setViewport=function(A,j,Q,Z){A.isVector4?it.set(A.x,A.y,A.z,A.w):it.set(A,j,Q,Z),Dt.viewport(B.copy(it).multiplyScalar(Bt).round())},this.getScissor=function(A){return A.copy(ot)},this.setScissor=function(A,j,Q,Z){A.isVector4?ot.set(A.x,A.y,A.z,A.w):ot.set(A,j,Q,Z),Dt.scissor(k.copy(ot).multiplyScalar(Bt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(A){Dt.setScissorTest(wt=A)},this.setOpaqueSort=function(A){Jt=A},this.setTransparentSort=function(A){Qt=A},this.getClearColor=function(A){return A.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,Q=!0){let Z=0;if(A){let Y=!1;if(z!==null){const _t=z.texture.format;Y=g.has(_t)}if(Y){const _t=z.texture.type,Mt=_.has(_t),yt=mt.getClearColor(),Ct=mt.getClearAlpha(),Ft=yt.r,kt=yt.g,zt=yt.b;Mt?(R[0]=Ft,R[1]=kt,R[2]=zt,R[3]=Ct,V.clearBufferuiv(V.COLOR,0,R)):(C[0]=Ft,C[1]=kt,C[2]=zt,C[3]=Ct,V.clearBufferiv(V.COLOR,0,C))}else Z|=V.COLOR_BUFFER_BIT}j&&(Z|=V.DEPTH_BUFFER_BIT),Q&&(Z|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",oe,!1),mt.dispose(),lt.dispose(),pt.dispose(),E.dispose(),nt.dispose(),st.dispose(),vt.dispose(),bt.dispose(),ct.dispose(),Lt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",xs),dt.removeEventListener("sessionend",Pe),je.stop()};function Ht(A){A.preventDefault(),Uu("WebGLRenderer: Context Lost."),y=!0}function xe(){Uu("WebGLRenderer: Context Restored."),y=!1;const A=I.autoReset,j=It.enabled,Q=It.autoUpdate,Z=It.needsUpdate,Y=It.type;rt(),I.autoReset=A,It.enabled=j,It.autoUpdate=Q,It.needsUpdate=Z,It.type=Y}function oe(A){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function un(A){const j=A.target;j.removeEventListener("dispose",un),Xn(j)}function Xn(A){Ui(A),E.remove(A)}function Ui(A){const j=E.get(A).programs;j!==void 0&&(j.forEach(function(Q){Lt.releaseProgram(Q)}),A.isShaderMaterial&&Lt.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,Q,Z,Y,_t){j===null&&(j=_e);const Mt=Y.isMesh&&Y.matrixWorld.determinant()<0,yt=ys(A,j,Q,Z,Y);Dt.setMaterial(Z,Mt);let Ct=Q.index,Ft=1;if(Z.wireframe===!0){if(Ct=Ut.getWireframeAttribute(Q),Ct===void 0)return;Ft=2}const kt=Q.drawRange,zt=Q.attributes.position;let te=kt.start*Ft,me=(kt.start+kt.count)*Ft;_t!==null&&(te=Math.max(te,_t.start*Ft),me=Math.min(me,(_t.start+_t.count)*Ft)),Ct!==null?(te=Math.max(te,0),me=Math.min(me,Ct.count)):zt!=null&&(te=Math.max(te,0),me=Math.min(me,zt.count));const Ae=me-te;if(Ae<0||Ae===1/0)return;bt.setup(Y,Z,yt,Q,Ct);let we,ge=H;if(Ct!==null&&(we=et.get(Ct),ge=St,ge.setIndex(we)),Y.isMesh)Z.wireframe===!0?(Dt.setLineWidth(Z.wireframeLinewidth*Le()),ge.setMode(V.LINES)):ge.setMode(V.TRIANGLES);else if(Y.isLine){let At=Z.linewidth;At===void 0&&(At=1),Dt.setLineWidth(At*Le()),Y.isLineSegments?ge.setMode(V.LINES):Y.isLineLoop?ge.setMode(V.LINE_LOOP):ge.setMode(V.LINE_STRIP)}else Y.isPoints?ge.setMode(V.POINTS):Y.isSprite&&ge.setMode(V.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Xs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))ge.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const At=Y._multiDrawStarts,de=Y._multiDrawCounts,se=Y._multiDrawCount,Ye=Ct?et.get(Ct).bytesPerElement:1,gi=E.get(Z).currentProgram.getUniforms();for(let rn=0;rn<se;rn++)gi.setValue(V,"_gl_DrawID",rn),ge.render(At[rn]/Ye,de[rn])}else if(Y.isInstancedMesh)ge.renderInstances(te,Ae,Y.count);else if(Q.isInstancedBufferGeometry){const At=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,de=Math.min(Q.instanceCount,At);ge.renderInstances(te,Ae,de)}else ge.render(te,Ae)};function aa(A,j,Q){A.transparent===!0&&A.side===bi&&A.forceSinglePass===!1?(A.side=vn,A.needsUpdate=!0,Qn(A,j,Q),A.side=Zi,A.needsUpdate=!0,Qn(A,j,Q),A.side=bi):Qn(A,j,Q)}this.compile=function(A,j,Q=null){Q===null&&(Q=A),P=pt.get(Q),P.init(j),D.push(P),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(P.pushLight(Y),Y.castShadow&&P.pushShadow(Y))}),A!==Q&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(P.pushLight(Y),Y.castShadow&&P.pushShadow(Y))}),P.setupLights();const Z=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const _t=Y.material;if(_t)if(Array.isArray(_t))for(let Mt=0;Mt<_t.length;Mt++){const yt=_t[Mt];aa(yt,Q,Y),Z.add(yt)}else aa(_t,Q,Y),Z.add(_t)}),P=D.pop(),Z},this.compileAsync=function(A,j,Q=null){const Z=this.compile(A,j,Q);return new Promise(Y=>{function _t(){if(Z.forEach(function(Mt){E.get(Mt).currentProgram.isReady()&&Z.delete(Mt)}),Z.size===0){Y(A);return}setTimeout(_t,10)}le.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let Tn=null;function _i(A){Tn&&Tn(A)}function xs(){je.stop()}function Pe(){je.start()}const je=new Uf;je.setAnimationLoop(_i),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(A){Tn=A,dt.setAnimationLoop(A),A===null?je.stop():je.start()},dt.addEventListener("sessionstart",xs),dt.addEventListener("sessionend",Pe),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const Q=dt.enabled===!0&&dt.isPresenting===!0,Z=O!==null&&(z===null||Q)&&O.begin(M,z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(j),j=dt.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,j,z),P=pt.get(A,D.length),P.init(j),D.push(P),Ve.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),qt.setFromProjectionMatrix(Ve,si,j.reversedDepth),ie=this.localClippingEnabled,Pt=Rt.init(this.clippingPlanes,ie),b=lt.get(A,L.length),b.init(),L.push(b),dt.enabled===!0&&dt.isPresenting===!0){const Mt=M.xr.getDepthSensingMesh();Mt!==null&&nr(Mt,j,-1/0,M.sortObjects)}nr(A,j,0,M.sortObjects),b.finish(),M.sortObjects===!0&&b.sort(Jt,Qt),$t=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,$t&&mt.addToRenderList(b,A),this.info.render.frame++,Pt===!0&&Rt.beginShadows();const Y=P.state.shadowsArray;if(It.render(Y,A,j),Pt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z&&O.hasRenderPass())===!1){const Mt=b.opaque,yt=b.transmissive;if(P.setupLights(),j.isArrayCamera){const Ct=j.cameras;if(yt.length>0)for(let Ft=0,kt=Ct.length;Ft<kt;Ft++){const zt=Ct[Ft];ir(Mt,yt,A,zt)}$t&&mt.render(A);for(let Ft=0,kt=Ct.length;Ft<kt;Ft++){const zt=Ct[Ft];oa(b,A,zt,zt.viewport)}}else yt.length>0&&ir(Mt,yt,A,j),$t&&mt.render(A),oa(b,A,j)}z!==null&&G===0&&(X.updateMultisampleRenderTarget(z),X.updateRenderTargetMipmap(z)),Z&&O.end(M),A.isScene===!0&&A.onAfterRender(M,A,j),bt.resetDefaultState(),K=-1,$=null,D.pop(),D.length>0?(P=D[D.length-1],Pt===!0&&Rt.setGlobalState(M.clippingPlanes,P.state.camera)):P=null,L.pop(),L.length>0?b=L[L.length-1]:b=null};function nr(A,j,Q,Z){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||qt.intersectsSprite(A)){Z&&Yt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ve);const Mt=vt.update(A),yt=A.material;yt.visible&&b.push(A,Mt,yt,Q,Yt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||qt.intersectsObject(A))){const Mt=vt.update(A),yt=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Yt.copy(A.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Yt.copy(Mt.boundingSphere.center)),Yt.applyMatrix4(A.matrixWorld).applyMatrix4(Ve)),Array.isArray(yt)){const Ct=Mt.groups;for(let Ft=0,kt=Ct.length;Ft<kt;Ft++){const zt=Ct[Ft],te=yt[zt.materialIndex];te&&te.visible&&b.push(A,Mt,te,Q,Yt.z,zt)}}else yt.visible&&b.push(A,Mt,yt,Q,Yt.z,null)}}const _t=A.children;for(let Mt=0,yt=_t.length;Mt<yt;Mt++)nr(_t[Mt],j,Q,Z)}function oa(A,j,Q,Z){const{opaque:Y,transmissive:_t,transparent:Mt}=A;P.setupLightsView(Q),Pt===!0&&Rt.setGlobalState(M.clippingPlanes,Q),Z&&Dt.viewport(B.copy(Z)),Y.length>0&&Ii(Y,j,Q),_t.length>0&&Ii(_t,j,Q),Mt.length>0&&Ii(Mt,j,Q),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function ir(A,j,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[Z.id]===void 0){const te=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[Z.id]=new li(1,1,{generateMipmaps:!0,type:te?Ci:Ln,minFilter:xr,samples:ve.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace})}const _t=P.state.transmissionRenderTarget[Z.id],Mt=Z.viewport||B;_t.setSize(Mt.z*M.transmissionResolutionScale,Mt.w*M.transmissionResolutionScale);const yt=M.getRenderTarget(),Ct=M.getActiveCubeFace(),Ft=M.getActiveMipmapLevel();M.setRenderTarget(_t),M.getClearColor(at),ht=M.getClearAlpha(),ht<1&&M.setClearColor(16777215,.5),M.clear(),$t&&mt.render(Q);const kt=M.toneMapping;M.toneMapping=oi;const zt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),P.setupLightsView(Z),Pt===!0&&Rt.setGlobalState(M.clippingPlanes,Z),Ii(A,Q,Z),X.updateMultisampleRenderTarget(_t),X.updateRenderTargetMipmap(_t),le.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let me=0,Ae=j.length;me<Ae;me++){const we=j[me],{object:ge,geometry:At,material:de,group:se}=we;if(de.side===bi&&ge.layers.test(Z.layers)){const Ye=de.side;de.side=vn,de.needsUpdate=!0,rr(ge,Q,Z,At,de,se),de.side=Ye,de.needsUpdate=!0,te=!0}}te===!0&&(X.updateMultisampleRenderTarget(_t),X.updateRenderTargetMipmap(_t))}M.setRenderTarget(yt,Ct,Ft),M.setClearColor(at,ht),zt!==void 0&&(Z.viewport=zt),M.toneMapping=kt}function Ii(A,j,Q){const Z=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,_t=A.length;Y<_t;Y++){const Mt=A[Y],{object:yt,geometry:Ct,group:Ft}=Mt;let kt=Mt.material;kt.allowOverride===!0&&Z!==null&&(kt=Z),yt.layers.test(Q.layers)&&rr(yt,j,Q,Ct,kt,Ft)}}function rr(A,j,Q,Z,Y,_t){A.onBeforeRender(M,j,Q,Z,Y,_t),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(M,j,Q,Z,A,_t),Y.transparent===!0&&Y.side===bi&&Y.forceSinglePass===!1?(Y.side=vn,Y.needsUpdate=!0,M.renderBufferDirect(Q,j,Z,Y,A,_t),Y.side=Zi,Y.needsUpdate=!0,M.renderBufferDirect(Q,j,Z,Y,A,_t),Y.side=bi):M.renderBufferDirect(Q,j,Z,Y,A,_t),A.onAfterRender(M,j,Q,Z,Y,_t)}function Qn(A,j,Q){j.isScene!==!0&&(j=_e);const Z=E.get(A),Y=P.state.lights,_t=P.state.shadowsArray,Mt=Y.state.version,yt=Lt.getParameters(A,Y.state,_t,j,Q),Ct=Lt.getProgramCacheKey(yt);let Ft=Z.programs;Z.environment=A.isMeshStandardMaterial?j.environment:null,Z.fog=j.fog,Z.envMap=(A.isMeshStandardMaterial?st:nt).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,Ft===void 0&&(A.addEventListener("dispose",un),Ft=new Map,Z.programs=Ft);let kt=Ft.get(Ct);if(kt!==void 0){if(Z.currentProgram===kt&&Z.lightsStateVersion===Mt)return Rr(A,yt),kt}else yt.uniforms=Lt.getUniforms(A),A.onBeforeCompile(yt,M),kt=Lt.acquireProgram(yt,Ct),Ft.set(Ct,kt),Z.uniforms=yt.uniforms;const zt=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(zt.clippingPlanes=Rt.uniform),Rr(A,yt),Z.needsLights=bn(A),Z.lightsStateVersion=Mt,Z.needsLights&&(zt.ambientLightColor.value=Y.state.ambient,zt.lightProbe.value=Y.state.probe,zt.directionalLights.value=Y.state.directional,zt.directionalLightShadows.value=Y.state.directionalShadow,zt.spotLights.value=Y.state.spot,zt.spotLightShadows.value=Y.state.spotShadow,zt.rectAreaLights.value=Y.state.rectArea,zt.ltc_1.value=Y.state.rectAreaLTC1,zt.ltc_2.value=Y.state.rectAreaLTC2,zt.pointLights.value=Y.state.point,zt.pointLightShadows.value=Y.state.pointShadow,zt.hemisphereLights.value=Y.state.hemi,zt.directionalShadowMap.value=Y.state.directionalShadowMap,zt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,zt.spotShadowMap.value=Y.state.spotShadowMap,zt.spotLightMatrix.value=Y.state.spotLightMatrix,zt.spotLightMap.value=Y.state.spotLightMap,zt.pointShadowMap.value=Y.state.pointShadowMap,zt.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=kt,Z.uniformsList=null,kt}function Ss(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Ha.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Rr(A,j){const Q=E.get(A);Q.outputColorSpace=j.outputColorSpace,Q.batching=j.batching,Q.batchingColor=j.batchingColor,Q.instancing=j.instancing,Q.instancingColor=j.instancingColor,Q.instancingMorph=j.instancingMorph,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function ys(A,j,Q,Z,Y){j.isScene!==!0&&(j=_e),X.resetTextureUnits();const _t=j.fog,Mt=Z.isMeshStandardMaterial?j.environment:null,yt=z===null?M.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:as,Ct=(Z.isMeshStandardMaterial?st:nt).get(Z.envMap||Mt),Ft=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,kt=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),zt=!!Q.morphAttributes.position,te=!!Q.morphAttributes.normal,me=!!Q.morphAttributes.color;let Ae=oi;Z.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ae=M.toneMapping);const we=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ge=we!==void 0?we.length:0,At=E.get(Z),de=P.state.lights;if(Pt===!0&&(ie===!0||A!==$)){const ke=A===$&&Z.id===K;Rt.setState(Z,A,ke)}let se=!1;Z.version===At.__version?(At.needsLights&&At.lightsStateVersion!==de.state.version||At.outputColorSpace!==yt||Y.isBatchedMesh&&At.batching===!1||!Y.isBatchedMesh&&At.batching===!0||Y.isBatchedMesh&&At.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&At.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&At.instancing===!1||!Y.isInstancedMesh&&At.instancing===!0||Y.isSkinnedMesh&&At.skinning===!1||!Y.isSkinnedMesh&&At.skinning===!0||Y.isInstancedMesh&&At.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&At.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&At.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&At.instancingMorph===!1&&Y.morphTexture!==null||At.envMap!==Ct||Z.fog===!0&&At.fog!==_t||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Rt.numPlanes||At.numIntersection!==Rt.numIntersection)||At.vertexAlphas!==Ft||At.vertexTangents!==kt||At.morphTargets!==zt||At.morphNormals!==te||At.morphColors!==me||At.toneMapping!==Ae||At.morphTargetsCount!==ge)&&(se=!0):(se=!0,At.__version=Z.version);let Ye=At.currentProgram;se===!0&&(Ye=Qn(Z,j,Y));let gi=!1,rn=!1,ar=!1;const ye=Ye.getUniforms(),$e=At.uniforms;if(Dt.useProgram(Ye.program)&&(gi=!0,rn=!0,ar=!0),Z.id!==K&&(K=Z.id,rn=!0),gi||$!==A){Dt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ye.setValue(V,"projectionMatrix",A.projectionMatrix),ye.setValue(V,"viewMatrix",A.matrixWorldInverse);const Ze=ye.map.cameraPosition;Ze!==void 0&&Ze.setValue(V,Vt.setFromMatrixPosition(A.matrixWorld)),ve.logarithmicDepthBuffer&&ye.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ye.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,rn=!0,ar=!0)}if(At.needsLights&&(de.state.directionalShadowMap.length>0&&ye.setValue(V,"directionalShadowMap",de.state.directionalShadowMap,X),de.state.spotShadowMap.length>0&&ye.setValue(V,"spotShadowMap",de.state.spotShadowMap,X),de.state.pointShadowMap.length>0&&ye.setValue(V,"pointShadowMap",de.state.pointShadowMap,X)),Y.isSkinnedMesh){ye.setOptional(V,Y,"bindMatrix"),ye.setOptional(V,Y,"bindMatrixInverse");const ke=Y.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),ye.setValue(V,"boneTexture",ke.boneTexture,X))}Y.isBatchedMesh&&(ye.setOptional(V,Y,"batchingTexture"),ye.setValue(V,"batchingTexture",Y._matricesTexture,X),ye.setOptional(V,Y,"batchingIdTexture"),ye.setValue(V,"batchingIdTexture",Y._indirectTexture,X),ye.setOptional(V,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ye.setValue(V,"batchingColorTexture",Y._colorsTexture,X));const hn=Q.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Kt.update(Y,Q,Ye),(rn||At.receiveShadow!==Y.receiveShadow)&&(At.receiveShadow=Y.receiveShadow,ye.setValue(V,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&($e.envMap.value=Ct,$e.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&j.environment!==null&&($e.envMapIntensity.value=j.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=Fx()),rn&&(ye.setValue(V,"toneMappingExposure",M.toneMappingExposure),At.needsLights&&la($e,ar),_t&&Z.fog===!0&&Gt.refreshFogUniforms($e,_t),Gt.refreshMaterialUniforms($e,Z,Bt,Nt,P.state.transmissionRenderTarget[A.id]),Ha.upload(V,Ss(At),$e,X)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ha.upload(V,Ss(At),$e,X),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ye.setValue(V,"center",Y.center),ye.setValue(V,"modelViewMatrix",Y.modelViewMatrix),ye.setValue(V,"normalMatrix",Y.normalMatrix),ye.setValue(V,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const ke=Z.uniformsGroups;for(let Ze=0,Cr=ke.length;Ze<Cr;Ze++){const An=ke[Ze];ct.update(An,Ye),ct.bind(An,Ye)}}return Ye}function la(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function bn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(A,j,Q){const Z=E.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=j,E.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const Q=E.get(A);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0};const zn=V.createFramebuffer();this.setRenderTarget=function(A,j=0,Q=0){z=A,w=j,G=Q;let Z=null,Y=!1,_t=!1;if(A){const yt=E.get(A);if(yt.__useDefaultFramebuffer!==void 0){Dt.bindFramebuffer(V.FRAMEBUFFER,yt.__webglFramebuffer),B.copy(A.viewport),k.copy(A.scissor),J=A.scissorTest,Dt.viewport(B),Dt.scissor(k),Dt.setScissorTest(J),K=-1;return}else if(yt.__webglFramebuffer===void 0)X.setupRenderTarget(A);else if(yt.__hasExternalTextures)X.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const kt=A.depthTexture;if(yt.__boundDepthTexture!==kt){if(kt!==null&&E.has(kt)&&(A.width!==kt.image.width||A.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(A)}}const Ct=A.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(_t=!0);const Ft=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ft[j])?Z=Ft[j][Q]:Z=Ft[j],Y=!0):A.samples>0&&X.useMultisampledRTT(A)===!1?Z=E.get(A).__webglMultisampledFramebuffer:Array.isArray(Ft)?Z=Ft[Q]:Z=Ft,B.copy(A.viewport),k.copy(A.scissor),J=A.scissorTest}else B.copy(it).multiplyScalar(Bt).floor(),k.copy(ot).multiplyScalar(Bt).floor(),J=wt;if(Q!==0&&(Z=zn),Dt.bindFramebuffer(V.FRAMEBUFFER,Z)&&Dt.drawBuffers(A,Z),Dt.viewport(B),Dt.scissor(k),Dt.setScissorTest(J),Y){const yt=E.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt.__webglTexture,Q)}else if(_t){const yt=j;for(let Ct=0;Ct<A.textures.length;Ct++){const Ft=E.get(A.textures[Ct]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ct,Ft.__webglTexture,Q,yt)}}else if(A!==null&&Q!==0){const yt=E.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,yt.__webglTexture,Q)}K=-1},this.readRenderTargetPixels=function(A,j,Q,Z,Y,_t,Mt,yt=0){if(!(A&&A.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ct=Ct[Mt]),Ct){Dt.bindFramebuffer(V.FRAMEBUFFER,Ct);try{const Ft=A.textures[yt],kt=Ft.format,zt=Ft.type;if(!ve.textureFormatReadable(kt)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(zt)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-Z&&Q>=0&&Q<=A.height-Y&&(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+yt),V.readPixels(j,Q,Z,Y,ft.convert(kt),ft.convert(zt),_t))}finally{const Ft=z!==null?E.get(z).__webglFramebuffer:null;Dt.bindFramebuffer(V.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(A,j,Q,Z,Y,_t,Mt,yt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Mt!==void 0&&(Ct=Ct[Mt]),Ct)if(j>=0&&j<=A.width-Z&&Q>=0&&Q<=A.height-Y){Dt.bindFramebuffer(V.FRAMEBUFFER,Ct);const Ft=A.textures[yt],kt=Ft.format,zt=Ft.type;if(!ve.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,te),V.bufferData(V.PIXEL_PACK_BUFFER,_t.byteLength,V.STREAM_READ),A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+yt),V.readPixels(j,Q,Z,Y,ft.convert(kt),ft.convert(zt),0);const me=z!==null?E.get(z).__webglFramebuffer:null;Dt.bindFramebuffer(V.FRAMEBUFFER,me);const Ae=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await jp(V,Ae,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,te),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,_t),V.deleteBuffer(te),V.deleteSync(Ae),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,Q=0){const Z=Math.pow(2,-Q),Y=Math.floor(A.image.width*Z),_t=Math.floor(A.image.height*Z),Mt=j!==null?j.x:0,yt=j!==null?j.y:0;X.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,Q,0,0,Mt,yt,Y,_t),Dt.unbindTexture()};const sr=V.createFramebuffer(),Ms=V.createFramebuffer();this.copyTextureToTexture=function(A,j,Q=null,Z=null,Y=0,_t=null){_t===null&&(Y!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=Y,Y=0):_t=0);let Mt,yt,Ct,Ft,kt,zt,te,me,Ae;const we=A.isCompressedTexture?A.mipmaps[_t]:A.image;if(Q!==null)Mt=Q.max.x-Q.min.x,yt=Q.max.y-Q.min.y,Ct=Q.isBox3?Q.max.z-Q.min.z:1,Ft=Q.min.x,kt=Q.min.y,zt=Q.isBox3?Q.min.z:0;else{const hn=Math.pow(2,-Y);Mt=Math.floor(we.width*hn),yt=Math.floor(we.height*hn),A.isDataArrayTexture?Ct=we.depth:A.isData3DTexture?Ct=Math.floor(we.depth*hn):Ct=1,Ft=0,kt=0,zt=0}Z!==null?(te=Z.x,me=Z.y,Ae=Z.z):(te=0,me=0,Ae=0);const ge=ft.convert(j.format),At=ft.convert(j.type);let de;j.isData3DTexture?(X.setTexture3D(j,0),de=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(X.setTexture2DArray(j,0),de=V.TEXTURE_2D_ARRAY):(X.setTexture2D(j,0),de=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const se=V.getParameter(V.UNPACK_ROW_LENGTH),Ye=V.getParameter(V.UNPACK_IMAGE_HEIGHT),gi=V.getParameter(V.UNPACK_SKIP_PIXELS),rn=V.getParameter(V.UNPACK_SKIP_ROWS),ar=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,we.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,we.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ft),V.pixelStorei(V.UNPACK_SKIP_ROWS,kt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,zt);const ye=A.isDataArrayTexture||A.isData3DTexture,$e=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const hn=E.get(A),ke=E.get(j),Ze=E.get(hn.__renderTarget),Cr=E.get(ke.__renderTarget);Dt.bindFramebuffer(V.READ_FRAMEBUFFER,Ze.__webglFramebuffer),Dt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let An=0;An<Ct;An++)ye&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(A).__webglTexture,Y,zt+An),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(j).__webglTexture,_t,Ae+An)),V.blitFramebuffer(Ft,kt,Mt,yt,te,me,Mt,yt,V.DEPTH_BUFFER_BIT,V.NEAREST);Dt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||E.has(A)){const hn=E.get(A),ke=E.get(j);Dt.bindFramebuffer(V.READ_FRAMEBUFFER,sr),Dt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ms);for(let Ze=0;Ze<Ct;Ze++)ye?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,Y,zt+Ze):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,Y),$e?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ke.__webglTexture,_t,Ae+Ze):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ke.__webglTexture,_t),Y!==0?V.blitFramebuffer(Ft,kt,Mt,yt,te,me,Mt,yt,V.COLOR_BUFFER_BIT,V.NEAREST):$e?V.copyTexSubImage3D(de,_t,te,me,Ae+Ze,Ft,kt,Mt,yt):V.copyTexSubImage2D(de,_t,te,me,Ft,kt,Mt,yt);Dt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else $e?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(de,_t,te,me,Ae,Mt,yt,Ct,ge,At,we.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(de,_t,te,me,Ae,Mt,yt,Ct,ge,we.data):V.texSubImage3D(de,_t,te,me,Ae,Mt,yt,Ct,ge,At,we):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,_t,te,me,Mt,yt,ge,At,we.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,_t,te,me,we.width,we.height,ge,we.data):V.texSubImage2D(V.TEXTURE_2D,_t,te,me,Mt,yt,ge,At,we);V.pixelStorei(V.UNPACK_ROW_LENGTH,se),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ye),V.pixelStorei(V.UNPACK_SKIP_PIXELS,gi),V.pixelStorei(V.UNPACK_SKIP_ROWS,rn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ar),_t===0&&j.generateMipmaps&&V.generateMipmap(de),Dt.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&X.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?X.setTextureCube(A,0):A.isData3DTexture?X.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?X.setTexture2DArray(A,0):X.setTexture2D(A,0),Dt.unbindTexture()},this.resetState=function(){w=0,G=0,z=null,Dt.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}function Ox(){const r=new gm;r.fog=new zc(328976,.02);const t=new Dn(60,window.innerWidth/window.innerHeight,.1,1e3);t.position.set(0,0,0);const e=new Nx({antialias:!0,alpha:!0});e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),document.getElementById("app").appendChild(e.domElement);const n=new Bm(16777215,.3);r.add(n);const i=new Om(16755200,1.5,50);return i.position.set(0,5,0),r.add(i),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)}),{scene:r,camera:t,renderer:e}}const Bx="https://raw.githubusercontent.com/metabismuth/tarot-json/master/cards/",Ah=[{name:"The Fool",img:"m00.jpg",type:"major",val:0},{name:"The Magician",img:"m01.jpg",type:"major",val:1},{name:"The High Priestess",img:"m02.jpg",type:"major",val:2},{name:"The Empress",img:"m03.jpg",type:"major",val:3},{name:"The Emperor",img:"m04.jpg",type:"major",val:4},{name:"The Hierophant",img:"m05.jpg",type:"major",val:5},{name:"The Lovers",img:"m06.jpg",type:"major",val:6},{name:"The Chariot",img:"m07.jpg",type:"major",val:7},{name:"Strength",img:"m08.jpg",type:"major",val:8},{name:"The Hermit",img:"m09.jpg",type:"major",val:9},{name:"Wheel of Fortune",img:"m10.jpg",type:"major",val:10},{name:"Justice",img:"m11.jpg",type:"major",val:11},{name:"The Hanged Man",img:"m12.jpg",type:"major",val:12},{name:"Death",img:"m13.jpg",type:"major",val:13},{name:"Temperance",img:"m14.jpg",type:"major",val:14},{name:"The Devil",img:"m15.jpg",type:"major",val:15},{name:"The Tower",img:"m16.jpg",type:"major",val:16},{name:"The Star",img:"m17.jpg",type:"major",val:17},{name:"The Moon",img:"m18.jpg",type:"major",val:18},{name:"The Sun",img:"m19.jpg",type:"major",val:19},{name:"Judgement",img:"m20.jpg",type:"major",val:20},{name:"The World",img:"m21.jpg",type:"major",val:21},...Fa("Cups","c"),...Fa("Swords","s"),...Fa("Wands","w"),...Fa("Pentacles","p")];function Fa(r,t){const e=[],n=["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Page","Knight","Queen","King"];for(let i=0;i<14;i++){const s=i+1,a=s<10?`0${s}`:`${s}`;e.push({name:`${n[i]} of ${r}`,img:`${t}${a}.jpg`,type:"minor",suit:r,val:s})}return e}function zx(r){return`${Bx}${r}`}const wh=2,Rh=3.5,Ch=18;function Vx(r){const t=new Fs;r.add(t);const e=new Im;new ra(wh,Rh);const n=document.createElement("canvas");n.width=256,n.height=512;const i=n.getContext("2d");i.fillStyle="#1a1a2e",i.fillRect(0,0,256,512),i.strokeStyle="#d4af37",i.lineWidth=5,i.strokeRect(10,10,236,492),i.font="40px serif",i.fillStyle="#d4af37",i.fillText("✡",110,256);const s=new Em(n);return Ah.forEach((a,o)=>{const c=o/Ah.length*Math.PI*2,u=new gs(wh,Rh,.02),h=e.load(zx(a.img));h.colorSpace=Cn;const f=[new Xr({color:2236962}),new Xr({color:2236962}),new Xr({color:2236962}),new Xr({color:2236962}),new Xr({map:s}),new Xr({map:h})],p=new di(u,f),m=Math.sin(c)*Ch,S=Math.cos(c)*Ch;p.position.set(m,0,S),p.lookAt(0,0,0),p.userData={id:o,name:a.name,originalPos:new q(m,0,S),originalRot:p.rotation.clone(),isDrawn:!1},t.add(p)}),t}var Za=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},rl={},Ph;function kx(){return Ph||(Ph=1,(function(){var r;function t(l){var d=0;return function(){return d<l.length?{done:!1,value:l[d++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,v){return l==Array.prototype||l==Object.prototype||(l[d]=v.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Za=="object"&&Za];for(var d=0;d<l.length;++d){var v=l[d];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=n(this);function s(l,d){if(d)t:{var v=i;l=l.split(".");for(var T=0;T<l.length-1;T++){var U=l[T];if(!(U in v))break t;v=v[U]}l=l[l.length-1],T=v[l],d=d(T),d!=T&&d!=null&&e(v,l,{configurable:!0,writable:!0,value:d})}}s("Symbol",function(l){function d(N){if(this instanceof d)throw new TypeError("Symbol is not a constructor");return new v(T+(N||"")+"_"+U++,N)}function v(N,F){this.h=N,e(this,"description",{configurable:!0,writable:!0,value:F})}if(l)return l;v.prototype.toString=function(){return this.h};var T="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",U=0;return d}),s("Symbol.iterator",function(l){if(l)return l;l=Symbol("Symbol.iterator");for(var d="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),v=0;v<d.length;v++){var T=i[d[v]];typeof T=="function"&&typeof T.prototype[l]!="function"&&e(T.prototype,l,{configurable:!0,writable:!0,value:function(){return a(t(this))}})}return l});function a(l){return l={next:l},l[Symbol.iterator]=function(){return this},l}function o(l){var d=typeof Symbol<"u"&&Symbol.iterator&&l[Symbol.iterator];return d?d.call(l):{next:t(l)}}function c(l){if(!(l instanceof Array)){l=o(l);for(var d,v=[];!(d=l.next()).done;)v.push(d.value);l=v}return l}var u=typeof Object.assign=="function"?Object.assign:function(l,d){for(var v=1;v<arguments.length;v++){var T=arguments[v];if(T)for(var U in T)Object.prototype.hasOwnProperty.call(T,U)&&(l[U]=T[U])}return l};s("Object.assign",function(l){return l||u});var h=typeof Object.create=="function"?Object.create:function(l){function d(){}return d.prototype=l,new d},f;if(typeof Object.setPrototypeOf=="function")f=Object.setPrototypeOf;else{var p;t:{var m={a:!0},S={};try{S.__proto__=m,p=S.a;break t}catch{}p=!1}f=p?function(l,d){if(l.__proto__=d,l.__proto__!==d)throw new TypeError(l+" is not extensible");return l}:null}var x=f;function g(l,d){if(l.prototype=h(d.prototype),l.prototype.constructor=l,x)x(l,d);else for(var v in d)if(v!="prototype")if(Object.defineProperties){var T=Object.getOwnPropertyDescriptor(d,v);T&&Object.defineProperty(l,v,T)}else l[v]=d[v];l.ya=d.prototype}function _(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function R(l){if(l.m)throw new TypeError("Generator is already running");l.m=!0}_.prototype.u=function(l){this.i=l};function C(l,d){l.l={ma:d,na:!0},l.h=l.s||l.v}_.prototype.return=function(l){this.l={return:l},this.h=this.v};function b(l,d,v){return l.h=v,{value:d}}function P(l){this.h=new _,this.i=l}function L(l,d){R(l.h);var v=l.h.j;return v?D(l,"return"in v?v.return:function(T){return{value:T,done:!0}},d,l.h.return):(l.h.return(d),O(l))}function D(l,d,v,T){try{var U=d.call(l.h.j,v);if(!(U instanceof Object))throw new TypeError("Iterator result "+U+" is not an object");if(!U.done)return l.h.m=!1,U;var N=U.value}catch(F){return l.h.j=null,C(l.h,F),O(l)}return l.h.j=null,T.call(l.h,N),O(l)}function O(l){for(;l.h.h;)try{var d=l.i(l.h);if(d)return l.h.m=!1,{value:d.value,done:!1}}catch(v){l.h.i=void 0,C(l.h,v)}if(l.h.m=!1,l.h.l){if(d=l.h.l,l.h.l=null,d.na)throw d.ma;return{value:d.return,done:!0}}return{value:void 0,done:!0}}function M(l){this.next=function(d){return R(l.h),l.h.j?d=D(l,l.h.j.next,d,l.h.u):(l.h.u(d),d=O(l)),d},this.throw=function(d){return R(l.h),l.h.j?d=D(l,l.h.j.throw,d,l.h.u):(C(l.h,d),d=O(l)),d},this.return=function(d){return L(l,d)},this[Symbol.iterator]=function(){return this}}function y(l){function d(T){return l.next(T)}function v(T){return l.throw(T)}return new Promise(function(T,U){function N(F){F.done?T(F.value):Promise.resolve(F.value).then(d,v).then(N,U)}N(l.next())})}function w(l){return y(new M(new P(l)))}s("Promise",function(l){function d(F){this.i=0,this.j=void 0,this.h=[],this.u=!1;var W=this.l();try{F(W.resolve,W.reject)}catch(tt){W.reject(tt)}}function v(){this.h=null}function T(F){return F instanceof d?F:new d(function(W){W(F)})}if(l)return l;v.prototype.i=function(F){if(this.h==null){this.h=[];var W=this;this.j(function(){W.m()})}this.h.push(F)};var U=i.setTimeout;v.prototype.j=function(F){U(F,0)},v.prototype.m=function(){for(;this.h&&this.h.length;){var F=this.h;this.h=[];for(var W=0;W<F.length;++W){var tt=F[W];F[W]=null;try{tt()}catch(ut){this.l(ut)}}}this.h=null},v.prototype.l=function(F){this.j(function(){throw F})},d.prototype.l=function(){function F(ut){return function(xt){tt||(tt=!0,ut.call(W,xt))}}var W=this,tt=!1;return{resolve:F(this.I),reject:F(this.m)}},d.prototype.I=function(F){if(F===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(F instanceof d)this.L(F);else{t:switch(typeof F){case"object":var W=F!=null;break t;case"function":W=!0;break t;default:W=!1}W?this.F(F):this.s(F)}},d.prototype.F=function(F){var W=void 0;try{W=F.then}catch(tt){this.m(tt);return}typeof W=="function"?this.M(W,F):this.s(F)},d.prototype.m=function(F){this.v(2,F)},d.prototype.s=function(F){this.v(1,F)},d.prototype.v=function(F,W){if(this.i!=0)throw Error("Cannot settle("+F+", "+W+"): Promise already settled in state"+this.i);this.i=F,this.j=W,this.i===2&&this.K(),this.H()},d.prototype.K=function(){var F=this;U(function(){if(F.D()){var W=i.console;typeof W<"u"&&W.error(F.j)}},1)},d.prototype.D=function(){if(this.u)return!1;var F=i.CustomEvent,W=i.Event,tt=i.dispatchEvent;return typeof tt>"u"?!0:(typeof F=="function"?F=new F("unhandledrejection",{cancelable:!0}):typeof W=="function"?F=new W("unhandledrejection",{cancelable:!0}):(F=i.document.createEvent("CustomEvent"),F.initCustomEvent("unhandledrejection",!1,!0,F)),F.promise=this,F.reason=this.j,tt(F))},d.prototype.H=function(){if(this.h!=null){for(var F=0;F<this.h.length;++F)N.i(this.h[F]);this.h=null}};var N=new v;return d.prototype.L=function(F){var W=this.l();F.T(W.resolve,W.reject)},d.prototype.M=function(F,W){var tt=this.l();try{F.call(W,tt.resolve,tt.reject)}catch(ut){tt.reject(ut)}},d.prototype.then=function(F,W){function tt(Ot,Tt){return typeof Ot=="function"?function(Xt){try{ut(Ot(Xt))}catch(ne){xt(ne)}}:Tt}var ut,xt,Wt=new d(function(Ot,Tt){ut=Ot,xt=Tt});return this.T(tt(F,ut),tt(W,xt)),Wt},d.prototype.catch=function(F){return this.then(void 0,F)},d.prototype.T=function(F,W){function tt(){switch(ut.i){case 1:F(ut.j);break;case 2:W(ut.j);break;default:throw Error("Unexpected state: "+ut.i)}}var ut=this;this.h==null?N.i(tt):this.h.push(tt),this.u=!0},d.resolve=T,d.reject=function(F){return new d(function(W,tt){tt(F)})},d.race=function(F){return new d(function(W,tt){for(var ut=o(F),xt=ut.next();!xt.done;xt=ut.next())T(xt.value).T(W,tt)})},d.all=function(F){var W=o(F),tt=W.next();return tt.done?T([]):new d(function(ut,xt){function Wt(Xt){return function(ne){Ot[Xt]=ne,Tt--,Tt==0&&ut(Ot)}}var Ot=[],Tt=0;do Ot.push(void 0),Tt++,T(tt.value).T(Wt(Ot.length-1),xt),tt=W.next();while(!tt.done)})},d});function G(l,d){l instanceof String&&(l+="");var v=0,T=!1,U={next:function(){if(!T&&v<l.length){var N=v++;return{value:d(N,l[N]),done:!1}}return T=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}s("Array.prototype.keys",function(l){return l||function(){return G(this,function(d){return d})}}),s("Array.prototype.fill",function(l){return l||function(d,v,T){var U=this.length||0;for(0>v&&(v=Math.max(0,U+v)),(T==null||T>U)&&(T=U),T=Number(T),0>T&&(T=Math.max(0,U+T)),v=Number(v||0);v<T;v++)this[v]=d;return this}});function z(l){return l||Array.prototype.fill}s("Int8Array.prototype.fill",z),s("Uint8Array.prototype.fill",z),s("Uint8ClampedArray.prototype.fill",z),s("Int16Array.prototype.fill",z),s("Uint16Array.prototype.fill",z),s("Int32Array.prototype.fill",z),s("Uint32Array.prototype.fill",z),s("Float32Array.prototype.fill",z),s("Float64Array.prototype.fill",z),s("Object.is",function(l){return l||function(d,v){return d===v?d!==0||1/d===1/v:d!==d&&v!==v}}),s("Array.prototype.includes",function(l){return l||function(d,v){var T=this;T instanceof String&&(T=String(T));var U=T.length;for(v=v||0,0>v&&(v=Math.max(v+U,0));v<U;v++){var N=T[v];if(N===d||Object.is(N,d))return!0}return!1}}),s("String.prototype.includes",function(l){return l||function(d,v){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(d instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(d,v||0)!==-1}});var K=this||self;function $(l,d){l=l.split(".");var v=K;l[0]in v||typeof v.execScript>"u"||v.execScript("var "+l[0]);for(var T;l.length&&(T=l.shift());)l.length||d===void 0?v[T]&&v[T]!==Object.prototype[T]?v=v[T]:v=v[T]={}:v[T]=d}function B(l){var d;t:{if((d=K.navigator)&&(d=d.userAgent))break t;d=""}return d.indexOf(l)!=-1}var k=Array.prototype.map?function(l,d){return Array.prototype.map.call(l,d,void 0)}:function(l,d){for(var v=l.length,T=Array(v),U=typeof l=="string"?l.split(""):l,N=0;N<v;N++)N in U&&(T[N]=d.call(void 0,U[N],N,l));return T},J={},at=null;function ht(l){var d=l.length,v=3*d/4;v%3?v=Math.floor(v):"=.".indexOf(l[d-1])!=-1&&(v="=.".indexOf(l[d-2])!=-1?v-2:v-1);var T=new Uint8Array(v),U=0;return gt(l,function(N){T[U++]=N}),U!==v?T.subarray(0,U):T}function gt(l,d){function v(tt){for(;T<l.length;){var ut=l.charAt(T++),xt=at[ut];if(xt!=null)return xt;if(!/^[\s\xa0]*$/.test(ut))throw Error("Unknown base64 encoding at char: "+ut)}return tt}Nt();for(var T=0;;){var U=v(-1),N=v(0),F=v(64),W=v(64);if(W===64&&U===-1)break;d(U<<2|N>>4),F!=64&&(d(N<<4&240|F>>2),W!=64&&d(F<<6&192|W))}}function Nt(){if(!at){at={};for(var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],v=0;5>v;v++){var T=l.concat(d[v].split(""));J[v]=T;for(var U=0;U<T.length;U++){var N=T[U];at[N]===void 0&&(at[N]=U)}}}}var Bt=typeof Uint8Array<"u",Jt=!(B("Trident")||B("MSIE"))&&typeof K.btoa=="function";function Qt(l){if(!Jt){var d;d===void 0&&(d=0),Nt(),d=J[d];for(var v=Array(Math.floor(l.length/3)),T=d[64]||"",U=0,N=0;U<l.length-2;U+=3){var F=l[U],W=l[U+1],tt=l[U+2],ut=d[F>>2];F=d[(F&3)<<4|W>>4],W=d[(W&15)<<2|tt>>6],tt=d[tt&63],v[N++]=ut+F+W+tt}switch(ut=0,tt=T,l.length-U){case 2:ut=l[U+1],tt=d[(ut&15)<<2]||T;case 1:l=l[U],v[N]=d[l>>2]+d[(l&3)<<4|ut>>4]+tt+T}return v.join("")}for(d="";10240<l.length;)d+=String.fromCharCode.apply(null,l.subarray(0,10240)),l=l.subarray(10240);return d+=String.fromCharCode.apply(null,l),btoa(d)}var it=RegExp("[-_.]","g");function ot(l){switch(l){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function wt(l){if(!Jt)return ht(l);it.test(l)&&(l=l.replace(it,ot)),l=atob(l);for(var d=new Uint8Array(l.length),v=0;v<l.length;v++)d[v]=l.charCodeAt(v);return d}var qt;function Pt(){return qt||(qt=new Uint8Array(0))}var ie={},Ve=typeof Uint8Array.prototype.slice=="function",Vt=0,Yt=0;function _e(l){var d=0>l;l=Math.abs(l);var v=l>>>0;l=Math.floor((l-v)/4294967296),d&&(v=o(Le(v,l)),d=v.next().value,l=v.next().value,v=d),Vt=v>>>0,Yt=l>>>0}var $t=typeof BigInt=="function";function Le(l,d){return d=~d,l?l=~l+1:d+=1,[l,d]}function V(l,d){this.i=l>>>0,this.h=d>>>0}function Ue(l){if(!l)return le||(le=new V(0,0));if(!/^-?\d+$/.test(l))return null;if(16>l.length)_e(Number(l));else if($t)l=BigInt(l),Vt=Number(l&BigInt(4294967295))>>>0,Yt=Number(l>>BigInt(32)&BigInt(4294967295));else{var d=+(l[0]==="-");Yt=Vt=0;for(var v=l.length,T=d,U=(v-d)%6+d;U<=v;T=U,U+=6)T=Number(l.slice(T,U)),Yt*=1e6,Vt=1e6*Vt+T,4294967296<=Vt&&(Yt+=Vt/4294967296|0,Vt%=4294967296);d&&(d=o(Le(Vt,Yt)),l=d.next().value,d=d.next().value,Vt=l,Yt=d)}return new V(Vt,Yt)}var le;function ve(l,d){return Error("Invalid wire type: "+l+" (at position "+d+")")}function Dt(){return Error("Failed to read varint, encoding is invalid.")}function I(l,d){return Error("Tried to read past the end of the data "+d+" > "+l)}function E(){throw Error("Invalid UTF8")}function X(l,d){return d=String.fromCharCode.apply(null,d),l==null?d:l+d}var nt=void 0,st,et=typeof TextDecoder<"u",Ut,vt=typeof TextEncoder<"u",Lt;function Gt(l){if(l!==ie)throw Error("illegal external caller")}function lt(l,d){if(Gt(d),this.V=l,l!=null&&l.length===0)throw Error("ByteString should be constructed with non-empty values")}function pt(){return Lt||(Lt=new lt(null,ie))}function Rt(l){Gt(ie);var d=l.V;return d=d==null||Bt&&d!=null&&d instanceof Uint8Array?d:typeof d=="string"?wt(d):null,d==null?d:l.V=d}function It(l){if(typeof l=="string")return{buffer:wt(l),C:!1};if(Array.isArray(l))return{buffer:new Uint8Array(l),C:!1};if(l.constructor===Uint8Array)return{buffer:l,C:!1};if(l.constructor===ArrayBuffer)return{buffer:new Uint8Array(l),C:!1};if(l.constructor===lt)return{buffer:Rt(l)||Pt(),C:!0};if(l instanceof Uint8Array)return{buffer:new Uint8Array(l.buffer,l.byteOffset,l.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function mt(l,d){this.i=null,this.m=!1,this.h=this.j=this.l=0,Kt(this,l,d)}function Kt(l,d,v){v=v===void 0?{}:v,l.S=v.S===void 0?!1:v.S,d&&(d=It(d),l.i=d.buffer,l.m=d.C,l.l=0,l.j=l.i.length,l.h=l.l)}mt.prototype.reset=function(){this.h=this.l};function H(l,d){if(l.h=d,d>l.j)throw I(l.j,d)}function St(l){var d=l.i,v=l.h,T=d[v++],U=T&127;if(T&128&&(T=d[v++],U|=(T&127)<<7,T&128&&(T=d[v++],U|=(T&127)<<14,T&128&&(T=d[v++],U|=(T&127)<<21,T&128&&(T=d[v++],U|=T<<28,T&128&&d[v++]&128&&d[v++]&128&&d[v++]&128&&d[v++]&128&&d[v++]&128)))))throw Dt();return H(l,v),U}function ft(l,d){if(0>d)throw Error("Tried to read a negative byte length: "+d);var v=l.h,T=v+d;if(T>l.j)throw I(d,l.j-v);return l.h=T,v}var bt=[];function ct(){this.h=[]}ct.prototype.length=function(){return this.h.length},ct.prototype.end=function(){var l=this.h;return this.h=[],l};function rt(l,d,v){for(;0<v||127<d;)l.h.push(d&127|128),d=(d>>>7|v<<25)>>>0,v>>>=7;l.h.push(d)}function dt(l,d){for(;127<d;)l.h.push(d&127|128),d>>>=7;l.h.push(d)}function Ht(l,d){if(bt.length){var v=bt.pop();Kt(v,l,d),l=v}else l=new mt(l,d);this.h=l,this.j=this.h.h,this.i=this.l=-1,this.setOptions(d)}Ht.prototype.setOptions=function(l){l=l===void 0?{}:l,this.ca=l.ca===void 0?!1:l.ca},Ht.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function xe(l){var d=l.h;if(d.h==d.j)return!1;l.j=l.h.h;var v=St(l.h)>>>0;if(d=v>>>3,v&=7,!(0<=v&&5>=v))throw ve(v,l.j);if(1>d)throw Error("Invalid field number: "+d+" (at position "+l.j+")");return l.l=d,l.i=v,!0}function oe(l){switch(l.i){case 0:if(l.i!=0)oe(l);else t:{l=l.h;for(var d=l.h,v=d+10,T=l.i;d<v;)if((T[d++]&128)===0){H(l,d);break t}throw Dt()}break;case 1:l=l.h,H(l,l.h+8);break;case 2:l.i!=2?oe(l):(d=St(l.h)>>>0,l=l.h,H(l,l.h+d));break;case 5:l=l.h,H(l,l.h+4);break;case 3:d=l.l;do{if(!xe(l))throw Error("Unmatched start-group tag: stream EOF");if(l.i==4){if(l.l!=d)throw Error("Unmatched end-group tag");break}oe(l)}while(!0);break;default:throw ve(l.i,l.j)}}var un=[];function Xn(){this.j=[],this.i=0,this.h=new ct}function Ui(l,d){d.length!==0&&(l.j.push(d),l.i+=d.length)}function aa(l,d){if(d=d.R){Ui(l,l.h.end());for(var v=0;v<d.length;v++)Ui(l,Rt(d[v])||Pt())}}var Tn=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function _i(l,d){return Tn?l[Tn]|=d:l.A!==void 0?l.A|=d:(Object.defineProperties(l,{A:{value:d,configurable:!0,writable:!0,enumerable:!1}}),d)}function xs(l,d){Tn?l[Tn]&&(l[Tn]&=~d):l.A!==void 0&&(l.A&=~d)}function Pe(l){var d;return Tn?d=l[Tn]:d=l.A,d??0}function je(l,d){Tn?l[Tn]=d:l.A!==void 0?l.A=d:Object.defineProperties(l,{A:{value:d,configurable:!0,writable:!0,enumerable:!1}})}function nr(l){return _i(l,1),l}function oa(l,d){je(d,(l|0)&-51)}function ir(l,d){je(d,(l|18)&-41)}var Ii={};function rr(l){return l!==null&&typeof l=="object"&&!Array.isArray(l)&&l.constructor===Object}var Qn,Ss=[];je(Ss,23),Qn=Object.freeze(Ss);function Rr(l){if(Pe(l.o)&2)throw Error("Cannot mutate an immutable Message")}function ys(l){var d=l.length;(d=d?l[d-1]:void 0)&&rr(d)?d.g=1:(d={},l.push((d.g=1,d)))}function la(l){var d=l.i+l.G;return l.B||(l.B=l.o[d]={})}function bn(l,d){return d===-1?null:d>=l.i?l.B?l.B[d]:void 0:l.o[d+l.G]}function zn(l,d,v,T){Rr(l),sr(l,d,v,T)}function sr(l,d,v,T){l.j&&(l.j=void 0),d>=l.i||T?la(l)[d]=v:(l.o[d+l.G]=v,(l=l.B)&&d in l&&delete l[d])}function Ms(l,d,v,T){var U=bn(l,d);Array.isArray(U)||(U=Qn);var N=Pe(U);if(N&1||nr(U),T)N&2||_i(U,2),v&1||Object.freeze(U);else{T=!(v&2);var F=N&2;v&1||!F?T&&N&16&&!F&&xs(U,16):(U=nr(Array.prototype.slice.call(U)),sr(l,d,U))}return U}function A(l,d){var v=bn(l,d),T=v==null?v:typeof v=="number"||v==="NaN"||v==="Infinity"||v==="-Infinity"?Number(v):void 0;return T!=null&&T!==v&&sr(l,d,T),T}function j(l,d,v,T,U){l.h||(l.h={});var N=l.h[v],F=Ms(l,v,3,U);if(!N){var W=F;N=[];var tt=!!(Pe(l.o)&16);F=!!(Pe(W)&2);var ut=W;!U&&F&&(W=Array.prototype.slice.call(W));for(var xt=F,Wt=0;Wt<W.length;Wt++){var Ot=W[Wt],Tt=d,Xt=!1;if(Xt=Xt===void 0?!1:Xt,Ot=Array.isArray(Ot)?new Tt(Ot):Xt?new Tt:void 0,Ot!==void 0){Tt=Ot.o;var ne=Xt=Pe(Tt);F&&(ne|=2),tt&&(ne|=16),ne!=Xt&&je(Tt,ne),Tt=ne,xt=xt||!!(2&Tt),N.push(Ot)}}return l.h[v]=N,tt=Pe(W),d=tt|33,d=xt?d&-9:d|8,tt!=d&&(xt=W,Object.isFrozen(xt)&&(xt=Array.prototype.slice.call(xt)),je(xt,d),W=xt),ut!==W&&sr(l,v,W),(U||T&&F)&&_i(N,2),T&&Object.freeze(N),N}return U||(U=Object.isFrozen(N),T&&!U?Object.freeze(N):!T&&U&&(N=Array.prototype.slice.call(N),l.h[v]=N)),N}function Q(l,d,v){var T=!!(Pe(l.o)&2);if(d=j(l,d,v,T,T),l=Ms(l,v,3,T),!(T||Pe(l)&8)){for(T=0;T<d.length;T++){if(v=d[T],Pe(v.o)&2){var U=ge(v,!1);U.j=v}else U=v;v!==U&&(d[T]=U,l[T]=U.o)}_i(l,8)}return d}function Z(l,d,v){if(v!=null&&typeof v!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof v+": "+v);zn(l,d,v)}function Y(l,d,v,T,U){Rr(l);var N=j(l,v,d,!1,!1);return v=T??new v,l=Ms(l,d,2,!1),U!=null?(N.splice(U,0,v),l.splice(U,0,v.o)):(N.push(v),l.push(v.o)),v.C()&&xs(l,8),v}function _t(l,d){return l??d}function Mt(l,d,v){return v=v===void 0?0:v,_t(A(l,d),v)}var yt;function Ct(l){switch(typeof l){case"number":return isFinite(l)?l:String(l);case"object":if(l)if(Array.isArray(l)){if((Pe(l)&128)!==0)return l=Array.prototype.slice.call(l),ys(l),l}else{if(Bt&&l!=null&&l instanceof Uint8Array)return Qt(l);if(l instanceof lt){var d=l.V;return d==null?"":typeof d=="string"?d:l.V=Qt(d)}}}return l}function Ft(l,d,v,T){if(l!=null){if(Array.isArray(l))l=kt(l,d,v,T!==void 0);else if(rr(l)){var U={},N;for(N in l)U[N]=Ft(l[N],d,v,T);l=U}else l=d(l,T);return l}}function kt(l,d,v,T){var U=Pe(l);T=T?!!(U&16):void 0,l=Array.prototype.slice.call(l);for(var N=0;N<l.length;N++)l[N]=Ft(l[N],d,v,T);return v(U,l),l}function zt(l){return l.ja===Ii?l.toJSON():Ct(l)}function te(l,d){l&128&&ys(d)}function me(l,d,v){if(v=v===void 0?ir:v,l!=null){if(Bt&&l instanceof Uint8Array)return l.length?new lt(new Uint8Array(l),ie):pt();if(Array.isArray(l)){var T=Pe(l);return T&2?l:d&&!(T&32)&&(T&16||T===0)?(je(l,T|2),l):(l=kt(l,me,T&4?ir:v,!0),d=Pe(l),d&4&&d&2&&Object.freeze(l),l)}return l.ja===Ii?we(l):l}}function Ae(l,d,v,T,U,N,F){if(l=l.h&&l.h[v]){if(T=Pe(l),T&2?T=l:(N=k(l,we),ir(T,N),Object.freeze(N),T=N),Rr(d),F=T==null?Qn:nr([]),T!=null){for(N=!!T.length,l=0;l<T.length;l++){var W=T[l];N=N&&!(Pe(W.o)&2),F[l]=W.o}N=(N?8:0)|1,l=Pe(F),(l&N)!==N&&(Object.isFrozen(F)&&(F=Array.prototype.slice.call(F)),je(F,l|N)),d.h||(d.h={}),d.h[v]=T}else d.h&&(d.h[v]=void 0);sr(d,v,F,U)}else zn(d,v,me(T,N,F),U)}function we(l){return Pe(l.o)&2||(l=ge(l,!0),_i(l.o,2)),l}function ge(l,d){var v=l.o,T=[];_i(T,16);var U=l.constructor.h;if(U&&T.push(U),U=l.B,U){T.length=v.length,T.fill(void 0,T.length,v.length);var N={};T[T.length-1]=N}(Pe(v)&128)!==0&&ys(T),d=d||l.C()?ir:oa,N=l.constructor,yt=T,T=new N(T),yt=void 0,l.R&&(T.R=l.R.slice()),N=!!(Pe(v)&16);for(var F=U?v.length-1:v.length,W=0;W<F;W++)Ae(l,T,W-l.G,v[W],!1,N,d);if(U)for(var tt in U)Ae(l,T,+tt,U[tt],!0,N,d);return T}function At(l,d,v){l==null&&(l=yt),yt=void 0;var T=this.constructor.i||0,U=0<T,N=this.constructor.h,F=!1;if(l==null){l=N?[N]:[];var W=48,tt=!0;U&&(T=0,W|=128),je(l,W)}else{if(!Array.isArray(l)||N&&N!==l[0])throw Error();var ut=W=_i(l,0);if((tt=(16&ut)!==0)&&((F=(32&ut)!==0)||(ut|=32)),U){if(128&ut)T=0;else if(0<l.length){var xt=l[l.length-1];if(rr(xt)&&"g"in xt){T=0,ut|=128,delete xt.g;var Wt=!0,Ot;for(Ot in xt){Wt=!1;break}Wt&&l.pop()}}}else if(128&ut)throw Error();W!==ut&&je(l,ut)}this.G=(N?0:-1)-T,this.h=void 0,this.o=l;t:{if(N=this.o.length,T=N-1,N&&(N=this.o[T],rr(N))){this.B=N,this.i=T-this.G;break t}d!==void 0&&-1<d?(this.i=Math.max(d,T+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!U&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(v){d=tt&&!F&&!0,U=this.i;var Tt;for(tt=0;tt<v.length;tt++)F=v[tt],F<U?(F+=this.G,(T=l[F])?de(T,d):l[F]=Qn):(Tt||(Tt=la(this)),(T=Tt[F])?de(T,d):Tt[F]=Qn)}}At.prototype.toJSON=function(){return kt(this.o,zt,te)},At.prototype.C=function(){return!!(Pe(this.o)&2)};function de(l,d){if(Array.isArray(l)){var v=Pe(l),T=1;!d||v&2||(T|=16),(v&T)!==T&&je(l,v|T)}}At.prototype.ja=Ii,At.prototype.toString=function(){return this.o.toString()};function se(l,d,v){if(v){var T={},U;for(U in v){var N=v[U],F=N.qa;F||(T.J=N.wa||N.oa.W,N.ia?(T.aa=Ze(N.ia),F=(function(W){return function(tt,ut,xt){return W.J(tt,ut,xt,W.aa)}})(T)):N.ka?(T.Z=Cr(N.da.P,N.ka),F=(function(W){return function(tt,ut,xt){return W.J(tt,ut,xt,W.Z)}})(T)):F=T.J,N.qa=F),F(d,l,N.da),T={J:T.J,aa:T.aa,Z:T.Z}}}aa(d,l)}var Ye=Symbol();function gi(l,d,v){return l[Ye]||(l[Ye]=function(T,U){return d(T,U,v)})}function rn(l){var d=l[Ye];if(!d){var v=mo(l);d=function(T,U){return ou(T,U,v)},l[Ye]=d}return d}function ar(l){var d=l.ia;if(d)return rn(d);if(d=l.va)return gi(l.da.P,d,l.ka)}function ye(l){var d=ar(l),v=l.da,T=l.oa.U;return d?function(U,N){return T(U,N,v,d)}:function(U,N){return T(U,N,v)}}function $e(l,d){var v=l[d];return typeof v=="function"&&v.length===0&&(v=v(),l[d]=v),Array.isArray(v)&&(Es in v||An in v||0<v.length&&typeof v[0]=="function")?v:void 0}function hn(l,d,v,T,U,N){d.P=l[0];var F=1;if(l.length>F&&typeof l[F]!="number"){var W=l[F++];v(d,W)}for(;F<l.length;){v=l[F++];for(var tt=F+1;tt<l.length&&typeof l[tt]!="number";)tt++;switch(W=l[F++],tt-=F,tt){case 0:T(d,v,W);break;case 1:(tt=$e(l,F))?(F++,U(d,v,W,tt)):T(d,v,W,l[F++]);break;case 2:tt=F++,tt=$e(l,tt),U(d,v,W,tt,l[F++]);break;case 3:N(d,v,W,l[F++],l[F++],l[F++]);break;case 4:N(d,v,W,l[F++],l[F++],l[F++],l[F++]);break;default:throw Error("unexpected number of binary field arguments: "+tt)}}return d}var ke=Symbol();function Ze(l){var d=l[ke];if(!d){var v=po(l);d=function(T,U){return lu(T,U,v)},l[ke]=d}return d}function Cr(l,d){var v=l[ke];return v||(v=function(T,U){return se(T,U,d)},l[ke]=v),v}var An=Symbol();function Od(l,d){l.push(d)}function Bd(l,d,v){l.push(d,v.W)}function zd(l,d,v,T){var U=Ze(T),N=po(T).P,F=v.W;l.push(d,function(W,tt,ut){return F(W,tt,ut,N,U)})}function Vd(l,d,v,T,U,N){var F=Cr(T,N),W=v.W;l.push(d,function(tt,ut,xt){return W(tt,ut,xt,T,F)})}function po(l){var d=l[An];return d||(d=hn(l,l[An]=[],Od,Bd,zd,Vd),Es in l&&An in l&&(l.length=0),d)}var Es=Symbol();function kd(l,d){l[0]=d}function Gd(l,d,v,T){var U=v.U;l[d]=T?function(N,F,W){return U(N,F,W,T)}:U}function Hd(l,d,v,T,U){var N=v.U,F=rn(T),W=mo(T).P;l[d]=function(tt,ut,xt){return N(tt,ut,xt,W,F,U)}}function Wd(l,d,v,T,U,N,F){var W=v.U,tt=gi(T,U,N);l[d]=function(ut,xt,Wt){return W(ut,xt,Wt,T,tt,F)}}function mo(l){var d=l[Es];return d||(d=hn(l,l[Es]={},kd,Gd,Hd,Wd),Es in l&&An in l&&(l.length=0),d)}function ou(l,d,v){for(;xe(d)&&d.i!=4;){var T=d.l,U=v[T];if(!U){var N=v[0];N&&(N=N[T])&&(U=v[T]=ye(N))}if(!U||!U(d,l,T)){U=d,T=l,N=U.j,oe(U);var F=U;if(!F.ca){if(U=F.h.h-N,F.h.h=N,F=F.h,U==0)U=pt();else{if(N=ft(F,U),F.S&&F.m)U=F.i.subarray(N,N+U);else{F=F.i;var W=N;U=N+U,U=W===U?Pt():Ve?F.slice(W,U):new Uint8Array(F.subarray(W,U))}U=U.length==0?pt():new lt(U,ie)}(N=T.R)?N.push(U):T.R=[U]}}}return l}function lu(l,d,v){for(var T=v.length,U=T%2==1,N=U?1:0;N<T;N+=2)(0,v[N+1])(d,l,v[N]);se(l,d,U?v[0]:void 0)}function Ts(l,d){return{U:l,W:d}}var jn=Ts(function(l,d,v){if(l.i!==5)return!1;l=l.h;var T=l.i,U=l.h,N=T[U],F=T[U+1],W=T[U+2];return T=T[U+3],H(l,l.h+4),F=(N<<0|F<<8|W<<16|T<<24)>>>0,l=2*(F>>31)+1,N=F>>>23&255,F&=8388607,zn(d,v,N==255?F?NaN:1/0*l:N==0?l*Math.pow(2,-149)*F:l*Math.pow(2,N-150)*(F+Math.pow(2,23))),!0},function(l,d,v){if(d=A(d,v),d!=null){dt(l.h,8*v+5),l=l.h;var T=+d;T===0?0<1/T?Vt=Yt=0:(Yt=0,Vt=2147483648):isNaN(T)?(Yt=0,Vt=2147483647):(T=(v=0>T?-2147483648:0)?-T:T,34028234663852886e22<T?(Yt=0,Vt=(v|2139095040)>>>0):11754943508222875e-54>T?(T=Math.round(T/Math.pow(2,-149)),Yt=0,Vt=(v|T)>>>0):(d=Math.floor(Math.log(T)/Math.LN2),T*=Math.pow(2,-d),T=Math.round(8388608*T),16777216<=T&&++d,Yt=0,Vt=(v|d+127<<23|T&8388607)>>>0)),v=Vt,l.h.push(v>>>0&255),l.h.push(v>>>8&255),l.h.push(v>>>16&255),l.h.push(v>>>24&255)}}),Xd=Ts(function(l,d,v){if(l.i!==0)return!1;var T=l.h,U=0,N=l=0,F=T.i,W=T.h;do{var tt=F[W++];U|=(tt&127)<<N,N+=7}while(32>N&&tt&128);for(32<N&&(l|=(tt&127)>>4),N=3;32>N&&tt&128;N+=7)tt=F[W++],l|=(tt&127)<<N;if(H(T,W),128>tt)T=U>>>0,tt=l>>>0,(l=tt&2147483648)&&(T=~T+1>>>0,tt=~tt>>>0,T==0&&(tt=tt+1>>>0)),T=4294967296*tt+(T>>>0);else throw Dt();return zn(d,v,l?-T:T),!0},function(l,d,v){d=bn(d,v),d!=null&&(typeof d=="string"&&Ue(d),d!=null&&(dt(l.h,8*v),typeof d=="number"?(l=l.h,_e(d),rt(l,Vt,Yt)):(v=Ue(d),rt(l.h,v.i,v.h))))}),jd=Ts(function(l,d,v){return l.i!==0?!1:(zn(d,v,St(l.h)),!0)},function(l,d,v){if(d=bn(d,v),d!=null&&d!=null)if(dt(l.h,8*v),l=l.h,v=d,0<=v)dt(l,v);else{for(d=0;9>d;d++)l.h.push(v&127|128),v>>=7;l.h.push(1)}}),cu=Ts(function(l,d,v){if(l.i!==2)return!1;var T=St(l.h)>>>0;l=l.h;var U=ft(l,T);if(l=l.i,et){var N=l,F;(F=st)||(F=st=new TextDecoder("utf-8",{fatal:!0})),l=U+T,N=U===0&&l===N.length?N:N.subarray(U,l);try{var W=F.decode(N)}catch(Wt){if(nt===void 0){try{F.decode(new Uint8Array([128]))}catch{}try{F.decode(new Uint8Array([97])),nt=!0}catch{nt=!1}}throw!nt&&(st=void 0),Wt}}else{W=U,T=W+T,U=[];for(var tt=null,ut,xt;W<T;)ut=l[W++],128>ut?U.push(ut):224>ut?W>=T?E():(xt=l[W++],194>ut||(xt&192)!==128?(W--,E()):U.push((ut&31)<<6|xt&63)):240>ut?W>=T-1?E():(xt=l[W++],(xt&192)!==128||ut===224&&160>xt||ut===237&&160<=xt||((N=l[W++])&192)!==128?(W--,E()):U.push((ut&15)<<12|(xt&63)<<6|N&63)):244>=ut?W>=T-2?E():(xt=l[W++],(xt&192)!==128||(ut<<28)+(xt-144)>>30!==0||((N=l[W++])&192)!==128||((F=l[W++])&192)!==128?(W--,E()):(ut=(ut&7)<<18|(xt&63)<<12|(N&63)<<6|F&63,ut-=65536,U.push((ut>>10&1023)+55296,(ut&1023)+56320))):E(),8192<=U.length&&(tt=X(tt,U),U.length=0);W=X(tt,U)}return zn(d,v,W),!0},function(l,d,v){if(d=bn(d,v),d!=null){var T=!1;if(T=T===void 0?!1:T,vt){if(T&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(d))throw Error("Found an unpaired surrogate");d=(Ut||(Ut=new TextEncoder)).encode(d)}else{for(var U=0,N=new Uint8Array(3*d.length),F=0;F<d.length;F++){var W=d.charCodeAt(F);if(128>W)N[U++]=W;else{if(2048>W)N[U++]=W>>6|192;else{if(55296<=W&&57343>=W){if(56319>=W&&F<d.length){var tt=d.charCodeAt(++F);if(56320<=tt&&57343>=tt){W=1024*(W-55296)+tt-56320+65536,N[U++]=W>>18|240,N[U++]=W>>12&63|128,N[U++]=W>>6&63|128,N[U++]=W&63|128;continue}else F--}if(T)throw Error("Found an unpaired surrogate");W=65533}N[U++]=W>>12|224,N[U++]=W>>6&63|128}N[U++]=W&63|128}}d=U===N.length?N:N.subarray(0,U)}dt(l.h,8*v+2),dt(l.h,d.length),Ui(l,l.h.end()),Ui(l,d)}}),uu=Ts(function(l,d,v,T,U){if(l.i!==2)return!1;d=Y(d,v,T),v=l.h.j,T=St(l.h)>>>0;var N=l.h.h+T,F=N-v;if(0>=F&&(l.h.j=N,U(d,l,void 0,void 0,void 0),F=N-l.h.h),F)throw Error("Message parsing ended unexpectedly. Expected to read "+(T+" bytes, instead read "+(T-F)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return l.h.h=N,l.h.j=v,!0},function(l,d,v,T,U){if(d=Q(d,T,v),d!=null)for(T=0;T<d.length;T++){var N=l;dt(N.h,8*v+2);var F=N.h.end();Ui(N,F),F.push(N.i),N=F,U(d[T],l),F=l;var W=N.pop();for(W=F.i+F.h.length()-W;127<W;)N.push(W&127|128),W>>>=7,F.i++;N.push(W),F.i++}});function _o(l){return function(d,v){t:{if(un.length){var T=un.pop();T.setOptions(v),Kt(T.h,d,v),d=T}else d=new Ht(d,v);try{var U=mo(l),N=ou(new U.P,d,U);break t}finally{U=d.h,U.i=null,U.m=!1,U.l=0,U.j=0,U.h=0,U.S=!1,d.l=-1,d.i=-1,100>un.length&&un.push(d)}N=void 0}return N}}function go(l){return function(){var d=new Xn;lu(this,d,po(l)),Ui(d,d.h.end());for(var v=new Uint8Array(d.i),T=d.j,U=T.length,N=0,F=0;F<U;F++){var W=T[F];v.set(W,N),N+=W.length}return d.j=[v],v}}function Pr(l){At.call(this,l)}g(Pr,At);var hu=[Pr,1,jd,2,jn,3,cu,4,cu];Pr.prototype.l=go(hu);function vo(l){At.call(this,l,-1,Yd)}g(vo,At),vo.prototype.addClassification=function(l,d){return Y(this,1,Pr,l,d),this};var Yd=[1],fu=_o([vo,1,uu,hu]);function Dr(l){At.call(this,l)}g(Dr,At);var du=[Dr,1,jn,2,jn,3,jn,4,jn,5,jn];Dr.prototype.l=go(du);function pu(l){At.call(this,l,-1,qd)}g(pu,At);var qd=[1],mu=_o([pu,1,uu,du]);function ca(l){At.call(this,l)}g(ca,At);var _u=[ca,1,jn,2,jn,3,jn,4,jn,5,jn,6,Xd],Kd=_o(_u);ca.prototype.l=go(_u);function gu(l,d,v){if(v=l.createShader(v===0?l.VERTEX_SHADER:l.FRAGMENT_SHADER),l.shaderSource(v,d),l.compileShader(v),!l.getShaderParameter(v,l.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+l.getShaderInfoLog(v));return v}function vu(l){return Q(l,Pr,1).map(function(d){var v=bn(d,1);return{index:v??0,score:Mt(d,2),label:bn(d,3)!=null?_t(bn(d,3),""):void 0,displayName:bn(d,4)!=null?_t(bn(d,4),""):void 0}})}function xu(l){return{x:Mt(l,1),y:Mt(l,2),z:Mt(l,3),visibility:A(l,4)!=null?Mt(l,4):void 0}}function Su(l){return l.map(function(d){return Q(mu(d),Dr,1).map(xu)})}function xo(l,d){this.i=l,this.h=d,this.m=0}function yu(l,d,v){return $d(l,d),typeof l.h.canvas.transferToImageBitmap=="function"?Promise.resolve(l.h.canvas.transferToImageBitmap()):v?Promise.resolve(l.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(l.h.canvas):(l.j===void 0&&(l.j=document.createElement("canvas")),new Promise(function(T){l.j.height=l.h.canvas.height,l.j.width=l.h.canvas.width,l.j.getContext("2d",{}).drawImage(l.h.canvas,0,0,l.h.canvas.width,l.h.canvas.height),T(l.j)}))}function $d(l,d){var v=l.h;if(l.s===void 0){var T=gu(v,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),U=gu(v,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),N=v.createProgram();if(v.attachShader(N,T),v.attachShader(N,U),v.linkProgram(N),!v.getProgramParameter(N,v.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+v.getProgramInfoLog(N));T=l.s=N,v.useProgram(T),U=v.getUniformLocation(T,"sampler0"),l.l={O:v.getAttribLocation(T,"aVertex"),N:v.getAttribLocation(T,"aTex"),xa:U},l.v=v.createBuffer(),v.bindBuffer(v.ARRAY_BUFFER,l.v),v.enableVertexAttribArray(l.l.O),v.vertexAttribPointer(l.l.O,2,v.FLOAT,!1,0,0),v.bufferData(v.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),v.STATIC_DRAW),v.bindBuffer(v.ARRAY_BUFFER,null),l.u=v.createBuffer(),v.bindBuffer(v.ARRAY_BUFFER,l.u),v.enableVertexAttribArray(l.l.N),v.vertexAttribPointer(l.l.N,2,v.FLOAT,!1,0,0),v.bufferData(v.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),v.STATIC_DRAW),v.bindBuffer(v.ARRAY_BUFFER,null),v.uniform1i(U,0)}T=l.l,v.useProgram(l.s),v.canvas.width=d.width,v.canvas.height=d.height,v.viewport(0,0,d.width,d.height),v.activeTexture(v.TEXTURE0),l.i.bindTexture2d(d.glName),v.enableVertexAttribArray(T.O),v.bindBuffer(v.ARRAY_BUFFER,l.v),v.vertexAttribPointer(T.O,2,v.FLOAT,!1,0,0),v.enableVertexAttribArray(T.N),v.bindBuffer(v.ARRAY_BUFFER,l.u),v.vertexAttribPointer(T.N,2,v.FLOAT,!1,0,0),v.bindFramebuffer(v.DRAW_FRAMEBUFFER?v.DRAW_FRAMEBUFFER:v.FRAMEBUFFER,null),v.clearColor(0,0,0,0),v.clear(v.COLOR_BUFFER_BIT),v.colorMask(!0,!0,!0,!0),v.drawArrays(v.TRIANGLE_FAN,0,4),v.disableVertexAttribArray(T.O),v.disableVertexAttribArray(T.N),v.bindBuffer(v.ARRAY_BUFFER,null),l.i.bindTexture2d(0)}function Zd(l){this.h=l}var Jd=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Qd(l,d){return d+l}function Mu(l,d){window[l]=d}function tp(l){var d=document.createElement("script");return d.setAttribute("src",l),d.setAttribute("crossorigin","anonymous"),new Promise(function(v){d.addEventListener("load",function(){v()},!1),d.addEventListener("error",function(){v()},!1),document.body.appendChild(d)})}function ep(){return w(function(l){switch(l.h){case 1:return l.s=2,b(l,WebAssembly.instantiate(Jd),4);case 4:l.h=3,l.s=0;break;case 2:return l.s=0,l.l=null,l.return(!1);case 3:return l.return(!0)}})}function So(l){if(this.h=l,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=l&&l.locateFile||Qd,typeof window=="object")var d=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")d=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=d,l.options){d=o(Object.keys(l.options));for(var v=d.next();!v.done;v=d.next()){v=v.value;var T=l.options[v].default;T!==void 0&&(this.l[v]=typeof T=="function"?T():T)}}}r=So.prototype,r.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function np(l){var d,v,T,U,N,F,W,tt,ut,xt,Wt;return w(function(Ot){switch(Ot.h){case 1:return l.ga?(d=l.h.files===void 0?[]:typeof l.h.files=="function"?l.h.files(l.l):l.h.files,b(Ot,ep(),2)):Ot.return();case 2:if(v=Ot.i,typeof window=="object")return Mu("createMediapipeSolutionsWasm",{locateFile:l.locateFile}),Mu("createMediapipeSolutionsPackedAssets",{locateFile:l.locateFile}),F=d.filter(function(Tt){return Tt.data!==void 0}),W=d.filter(function(Tt){return Tt.data===void 0}),tt=Promise.all(F.map(function(Tt){var Xt=ua(l,Tt.url);if(Tt.path!==void 0){var ne=Tt.path;Xt=Xt.then(function(Re){return l.overrideFile(ne,Re),Promise.resolve(Re)})}return Xt})),ut=Promise.all(W.map(function(Tt){return Tt.simd===void 0||Tt.simd&&v||!Tt.simd&&!v?tp(l.locateFile(Tt.url,l.ha)):Promise.resolve()})).then(function(){var Tt,Xt,ne;return w(function(Re){if(Re.h==1)return Tt=window.createMediapipeSolutionsWasm,Xt=window.createMediapipeSolutionsPackedAssets,ne=l,b(Re,Tt(Xt),2);ne.i=Re.i,Re.h=0})}),xt=(function(){return w(function(Tt){return l.h.graph&&l.h.graph.url?Tt=b(Tt,ua(l,l.h.graph.url),0):(Tt.h=0,Tt=void 0),Tt})})(),b(Ot,Promise.all([ut,tt,xt]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return T=d.filter(function(Tt){return Tt.simd===void 0||Tt.simd&&v||!Tt.simd&&!v}).map(function(Tt){return l.locateFile(Tt.url,l.ha)}),importScripts.apply(null,c(T)),U=l,b(Ot,createMediapipeSolutionsWasm(Module),6);case 6:U.i=Ot.i,l.m=new OffscreenCanvas(1,1),l.i.canvas=l.m,N=l.i.GL.createContext(l.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),l.i.GL.makeContextCurrent(N),Ot.h=4;break;case 7:if(l.m=document.createElement("canvas"),Wt=l.m.getContext("webgl2",{}),!Wt&&(Wt=l.m.getContext("webgl",{}),!Wt))return alert("Failed to create WebGL canvas context when passing video frame."),Ot.return();l.K=Wt,l.i.canvas=l.m,l.i.createContext(l.m,!0,!0,{});case 4:l.j=new l.i.SolutionWasm,l.ga=!1,Ot.h=0}})}function ip(l){var d,v,T,U,N,F,W,tt;return w(function(ut){if(ut.h==1){if(l.h.graph&&l.h.graph.url&&l.fa===l.h.graph.url)return ut.return();if(l.u=!0,!l.h.graph||!l.h.graph.url){ut.h=2;return}return l.fa=l.h.graph.url,b(ut,ua(l,l.h.graph.url),3)}for(ut.h!=2&&(d=ut.i,l.j.loadGraph(d)),v=o(Object.keys(l.D)),T=v.next();!T.done;T=v.next())U=T.value,l.j.overrideFile(U,l.D[U]);if(l.D={},l.h.listeners)for(N=o(l.h.listeners),F=N.next();!F.done;F=N.next())W=F.value,op(l,W);tt=l.l,l.l={},l.setOptions(tt),ut.h=0})}r.reset=function(){var l=this;return w(function(d){l.j&&(l.j.reset(),l.s={},l.v={}),d.h=0})},r.setOptions=function(l,d){var v=this;if(d=d||this.h.options){for(var T=[],U=[],N={},F=o(Object.keys(l)),W=F.next();!W.done;N={X:N.X,Y:N.Y},W=F.next())if(W=W.value,!(W in this.l&&this.l[W]===l[W])){this.l[W]=l[W];var tt=d[W];tt!==void 0&&(tt.onChange&&(N.X=tt.onChange,N.Y=l[W],T.push((function(ut){return function(){var xt;return w(function(Wt){if(Wt.h==1)return b(Wt,ut.X(ut.Y),2);xt=Wt.i,xt===!0&&(v.u=!0),Wt.h=0})}})(N))),tt.graphOptionXref&&(W=Object.assign({},{calculatorName:"",calculatorIndex:0},tt.graphOptionXref,{valueNumber:tt.type===1?l[W]:0,valueBoolean:tt.type===0?l[W]:!1,valueString:tt.type===2?l[W]:""}),U.push(W)))}(T.length!==0||U.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(U),this.F=(this.F===void 0?[]:this.F).concat(T))}};function rp(l){var d,v,T,U,N,F,W;return w(function(tt){switch(tt.h){case 1:if(!l.u)return tt.return();if(!l.F){tt.h=2;break}d=o(l.F),v=d.next();case 3:if(v.done){tt.h=5;break}return T=v.value,b(tt,T(),4);case 4:v=d.next(),tt.h=3;break;case 5:l.F=void 0;case 2:if(l.H){for(U=new l.i.GraphOptionChangeRequestList,N=o(l.H),F=N.next();!F.done;F=N.next())W=F.value,U.push_back(W);l.j.changeOptions(U),U.delete(),l.H=void 0}l.u=!1,tt.h=0}})}r.initialize=function(){var l=this;return w(function(d){return d.h==1?b(d,np(l),2):d.h!=3?b(d,ip(l),3):b(d,rp(l),0)})};function ua(l,d){var v,T;return w(function(U){return d in l.L?U.return(l.L[d]):(v=l.locateFile(d,""),T=fetch(v).then(function(N){return N.arrayBuffer()}),l.L[d]=T,U.return(T))})}r.overrideFile=function(l,d){this.j?this.j.overrideFile(l,d):this.D[l]=d},r.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},r.send=function(l,d){var v=this,T,U,N,F,W,tt,ut,xt,Wt;return w(function(Ot){switch(Ot.h){case 1:return v.h.inputs?(T=1e3*(d??performance.now()),b(Ot,v.I,2)):Ot.return();case 2:return b(Ot,v.initialize(),3);case 3:for(U=new v.i.PacketDataList,N=o(Object.keys(l)),F=N.next();!F.done;F=N.next())if(W=F.value,tt=v.h.inputs[W]){t:{var Tt=l[W];switch(tt.type){case"video":var Xt=v.s[tt.stream];if(Xt||(Xt=new xo(v.i,v.K),v.s[tt.stream]=Xt),Xt.m===0&&(Xt.m=Xt.i.createTexture()),typeof HTMLVideoElement<"u"&&Tt instanceof HTMLVideoElement)var ne=Tt.videoWidth,Re=Tt.videoHeight;else typeof HTMLImageElement<"u"&&Tt instanceof HTMLImageElement?(ne=Tt.naturalWidth,Re=Tt.naturalHeight):(ne=Tt.width,Re=Tt.height);Re={glName:Xt.m,width:ne,height:Re},ne=Xt.h,ne.canvas.width=Re.width,ne.canvas.height=Re.height,ne.activeTexture(ne.TEXTURE0),Xt.i.bindTexture2d(Xt.m),ne.texImage2D(ne.TEXTURE_2D,0,ne.RGBA,ne.RGBA,ne.UNSIGNED_BYTE,Tt),Xt.i.bindTexture2d(0),Xt=Re;break t;case"detections":for(Xt=v.s[tt.stream],Xt||(Xt=new Zd(v.i),v.s[tt.stream]=Xt),Xt.data||(Xt.data=new Xt.h.DetectionListData),Xt.data.reset(Tt.length),Re=0;Re<Tt.length;++Re){ne=Tt[Re];var be=Xt.data,Je=be.setBoundingBox,Vn=Re,_n=ne.la,pe=new ca;if(Z(pe,1,_n.ra),Z(pe,2,_n.sa),Z(pe,3,_n.height),Z(pe,4,_n.width),Z(pe,5,_n.rotation),zn(pe,6,_n.pa),_n=pe.l(),Je.call(be,Vn,_n),ne.ea)for(be=0;be<ne.ea.length;++be){pe=ne.ea[be],Je=Xt.data,Vn=Je.addNormalizedLandmark,_n=Re,pe=Object.assign({},pe,{visibility:pe.visibility?pe.visibility:0});var Qe=new Dr;Z(Qe,1,pe.x),Z(Qe,2,pe.y),Z(Qe,3,pe.z),pe.visibility&&Z(Qe,4,pe.visibility),pe=Qe.l(),Vn.call(Je,_n,pe)}if(ne.ba)for(be=0;be<ne.ba.length;++be)Je=Xt.data,Vn=Je.addClassification,_n=Re,pe=ne.ba[be],Qe=new Pr,Z(Qe,2,pe.score),pe.index&&zn(Qe,1,pe.index),pe.label&&zn(Qe,3,pe.label),pe.displayName&&zn(Qe,4,pe.displayName),pe=Qe.l(),Vn.call(Je,_n,pe)}Xt=Xt.data;break t;default:Xt={}}}switch(ut=Xt,xt=tt.stream,tt.type){case"video":U.pushTexture2d(Object.assign({},ut,{stream:xt,timestamp:T}));break;case"detections":Wt=ut,Wt.stream=xt,Wt.timestamp=T,U.pushDetectionList(Wt);break;default:throw Error("Unknown input config type: '"+tt.type+"'")}}return v.j.send(U),b(Ot,v.I,4);case 4:U.delete(),Ot.h=0}})};function sp(l,d,v){var T,U,N,F,W,tt,ut,xt,Wt,Ot,Tt,Xt,ne,Re;return w(function(be){switch(be.h){case 1:if(!v)return be.return(d);for(T={},U=0,N=o(Object.keys(v)),F=N.next();!F.done;F=N.next())W=F.value,tt=v[W],typeof tt!="string"&&tt.type==="texture"&&d[tt.stream]!==void 0&&++U;1<U&&(l.M=!1),ut=o(Object.keys(v)),F=ut.next();case 2:if(F.done){be.h=4;break}if(xt=F.value,Wt=v[xt],typeof Wt=="string")return ne=T,Re=xt,b(be,ap(l,xt,d[Wt]),14);if(Ot=d[Wt.stream],Wt.type==="detection_list"){if(Ot){for(var Je=Ot.getRectList(),Vn=Ot.getLandmarksList(),_n=Ot.getClassificationsList(),pe=[],Qe=0;Qe<Je.size();++Qe){var Fi=Kd(Je.get(Qe)),lp=Mt(Fi,1),cp=Mt(Fi,2),up=Mt(Fi,3),hp=Mt(Fi,4),fp=Mt(Fi,5,0),ha=void 0;ha=ha===void 0?0:ha,Fi={la:{ra:lp,sa:cp,height:up,width:hp,rotation:fp,pa:_t(bn(Fi,6),ha)},ea:Q(mu(Vn.get(Qe)),Dr,1).map(xu),ba:vu(fu(_n.get(Qe)))},pe.push(Fi)}Je=pe}else Je=[];T[xt]=Je,be.h=7;break}if(Wt.type==="proto_list"){if(Ot){for(Je=Array(Ot.size()),Vn=0;Vn<Ot.size();Vn++)Je[Vn]=Ot.get(Vn);Ot.delete()}else Je=[];T[xt]=Je,be.h=7;break}if(Ot===void 0){be.h=3;break}if(Wt.type==="float_list"){T[xt]=Ot,be.h=7;break}if(Wt.type==="proto"){T[xt]=Ot,be.h=7;break}if(Wt.type!=="texture")throw Error("Unknown output config type: '"+Wt.type+"'");return Tt=l.v[xt],Tt||(Tt=new xo(l.i,l.K),l.v[xt]=Tt),b(be,yu(Tt,Ot,l.M),13);case 13:Xt=be.i,T[xt]=Xt;case 7:Wt.transform&&T[xt]&&(T[xt]=Wt.transform(T[xt])),be.h=3;break;case 14:ne[Re]=be.i;case 3:F=ut.next(),be.h=2;break;case 4:return be.return(T)}})}function ap(l,d,v){var T;return w(function(U){return typeof v=="number"||v instanceof Uint8Array||v instanceof l.i.Uint8BlobList?U.return(v):v instanceof l.i.Texture2dDataOut?(T=l.v[d],T||(T=new xo(l.i,l.K),l.v[d]=T),U.return(yu(T,v,l.M))):U.return(void 0)})}function op(l,d){for(var v=d.name||"$",T=[].concat(c(d.wants)),U=new l.i.StringList,N=o(d.wants),F=N.next();!F.done;F=N.next())U.push_back(F.value);N=l.i.PacketListener.implement({onResults:function(W){for(var tt={},ut=0;ut<d.wants.length;++ut)tt[T[ut]]=W.get(ut);var xt=l.listeners[v];xt&&(l.I=sp(l,tt,d.outs).then(function(Wt){Wt=xt(Wt);for(var Ot=0;Ot<d.wants.length;++Ot){var Tt=tt[T[Ot]];typeof Tt=="object"&&Tt.hasOwnProperty&&Tt.hasOwnProperty("delete")&&Tt.delete()}Wt&&(l.I=Wt)}))}}),l.j.attachMultiListener(U,N),U.delete()}r.onResults=function(l,d){this.listeners[d||"$"]=l},$("Solution",So),$("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Eu(l){return l===void 0&&(l=0),l===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function Tu(l){var d=this;l=l||{},this.h=new So({locateFile:l.locateFile,files:function(v){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:Eu(v.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:Su},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:Su},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(v){return v.map(function(T){return vu(fu(T))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(v){var T,U,N;return w(function(F){return F.h==1?(T=Eu(v),U="third_party/mediapipe/modules/hand_landmark/"+T,b(F,ua(d.h,T),2)):(N=F.i,d.h.overrideFile(U,N),F.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}r=Tu.prototype,r.close=function(){return this.h.close(),Promise.resolve()},r.onResults=function(l){this.h.onResults(l)},r.initialize=function(){var l=this;return w(function(d){return b(d,l.h.initialize(),0)})},r.reset=function(){this.h.reset()},r.send=function(l){var d=this;return w(function(v){return b(v,d.h.send(l),0)})},r.setOptions=function(l){this.h.setOptions(l)},$("Hands",Tu),$("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),$("VERSION","0.4.1675469240")}).call(rl)),rl}var Gx=kx(),sl={},Dh;function Hx(){return Dh||(Dh=1,(function(){function r(y){var w=0;return function(){return w<y.length?{done:!1,value:y[w++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(y,w,G){return y==Array.prototype||y==Object.prototype||(y[w]=G.value),y};function e(y){y=[typeof globalThis=="object"&&globalThis,y,typeof window=="object"&&window,typeof self=="object"&&self,typeof Za=="object"&&Za];for(var w=0;w<y.length;++w){var G=y[w];if(G&&G.Math==Math)return G}throw Error("Cannot find global object")}var n=e(this);function i(y,w){if(w)t:{var G=n;y=y.split(".");for(var z=0;z<y.length-1;z++){var K=y[z];if(!(K in G))break t;G=G[K]}y=y[y.length-1],z=G[y],w=w(z),w!=z&&w!=null&&t(G,y,{configurable:!0,writable:!0,value:w})}}i("Symbol",function(y){function w($){if(this instanceof w)throw new TypeError("Symbol is not a constructor");return new G(z+($||"")+"_"+K++,$)}function G($,B){this.g=$,t(this,"description",{configurable:!0,writable:!0,value:B})}if(y)return y;G.prototype.toString=function(){return this.g};var z="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",K=0;return w}),i("Symbol.iterator",function(y){if(y)return y;y=Symbol("Symbol.iterator");for(var w="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),G=0;G<w.length;G++){var z=n[w[G]];typeof z=="function"&&typeof z.prototype[y]!="function"&&t(z.prototype,y,{configurable:!0,writable:!0,value:function(){return s(r(this))}})}return y});function s(y){return y={next:y},y[Symbol.iterator]=function(){return this},y}function a(y){var w=typeof Symbol<"u"&&Symbol.iterator&&y[Symbol.iterator];return w?w.call(y):{next:r(y)}}function o(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function c(y){if(y.i)throw new TypeError("Generator is already running");y.i=!0}o.prototype.l=function(y){this.o=y};function u(y,w){y.h={F:w,G:!0},y.j=y.m}o.prototype.return=function(y){this.h={return:y},this.j=this.m};function h(y){this.g=new o,this.h=y}function f(y,w){c(y.g);var G=y.g.g;return G?p(y,"return"in G?G.return:function(z){return{value:z,done:!0}},w,y.g.return):(y.g.return(w),m(y))}function p(y,w,G,z){try{var K=w.call(y.g.g,G);if(!(K instanceof Object))throw new TypeError("Iterator result "+K+" is not an object");if(!K.done)return y.g.i=!1,K;var $=K.value}catch(B){return y.g.g=null,u(y.g,B),m(y)}return y.g.g=null,z.call(y.g,$),m(y)}function m(y){for(;y.g.j;)try{var w=y.h(y.g);if(w)return y.g.i=!1,{value:w.value,done:!1}}catch(G){y.g.o=void 0,u(y.g,G)}if(y.g.i=!1,y.g.h){if(w=y.g.h,y.g.h=null,w.G)throw w.F;return{value:w.return,done:!0}}return{value:void 0,done:!0}}function S(y){this.next=function(w){return c(y.g),y.g.g?w=p(y,y.g.g.next,w,y.g.l):(y.g.l(w),w=m(y)),w},this.throw=function(w){return c(y.g),y.g.g?w=p(y,y.g.g.throw,w,y.g.l):(u(y.g,w),w=m(y)),w},this.return=function(w){return f(y,w)},this[Symbol.iterator]=function(){return this}}function x(y){function w(z){return y.next(z)}function G(z){return y.throw(z)}return new Promise(function(z,K){function $(B){B.done?z(B.value):Promise.resolve(B.value).then(w,G).then($,K)}$(y.next())})}i("Promise",function(y){function w(B){this.h=0,this.i=void 0,this.g=[],this.o=!1;var k=this.j();try{B(k.resolve,k.reject)}catch(J){k.reject(J)}}function G(){this.g=null}function z(B){return B instanceof w?B:new w(function(k){k(B)})}if(y)return y;G.prototype.h=function(B){if(this.g==null){this.g=[];var k=this;this.i(function(){k.l()})}this.g.push(B)};var K=n.setTimeout;G.prototype.i=function(B){K(B,0)},G.prototype.l=function(){for(;this.g&&this.g.length;){var B=this.g;this.g=[];for(var k=0;k<B.length;++k){var J=B[k];B[k]=null;try{J()}catch(at){this.j(at)}}}this.g=null},G.prototype.j=function(B){this.i(function(){throw B})},w.prototype.j=function(){function B(at){return function(ht){J||(J=!0,at.call(k,ht))}}var k=this,J=!1;return{resolve:B(this.A),reject:B(this.l)}},w.prototype.A=function(B){if(B===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(B instanceof w)this.C(B);else{t:switch(typeof B){case"object":var k=B!=null;break t;case"function":k=!0;break t;default:k=!1}k?this.v(B):this.m(B)}},w.prototype.v=function(B){var k=void 0;try{k=B.then}catch(J){this.l(J);return}typeof k=="function"?this.D(k,B):this.m(B)},w.prototype.l=function(B){this.u(2,B)},w.prototype.m=function(B){this.u(1,B)},w.prototype.u=function(B,k){if(this.h!=0)throw Error("Cannot settle("+B+", "+k+"): Promise already settled in state"+this.h);this.h=B,this.i=k,this.h===2&&this.B(),this.H()},w.prototype.B=function(){var B=this;K(function(){if(B.I()){var k=n.console;typeof k<"u"&&k.error(B.i)}},1)},w.prototype.I=function(){if(this.o)return!1;var B=n.CustomEvent,k=n.Event,J=n.dispatchEvent;return typeof J>"u"?!0:(typeof B=="function"?B=new B("unhandledrejection",{cancelable:!0}):typeof k=="function"?B=new k("unhandledrejection",{cancelable:!0}):(B=n.document.createEvent("CustomEvent"),B.initCustomEvent("unhandledrejection",!1,!0,B)),B.promise=this,B.reason=this.i,J(B))},w.prototype.H=function(){if(this.g!=null){for(var B=0;B<this.g.length;++B)$.h(this.g[B]);this.g=null}};var $=new G;return w.prototype.C=function(B){var k=this.j();B.s(k.resolve,k.reject)},w.prototype.D=function(B,k){var J=this.j();try{B.call(k,J.resolve,J.reject)}catch(at){J.reject(at)}},w.prototype.then=function(B,k){function J(Nt,Bt){return typeof Nt=="function"?function(Jt){try{at(Nt(Jt))}catch(Qt){ht(Qt)}}:Bt}var at,ht,gt=new w(function(Nt,Bt){at=Nt,ht=Bt});return this.s(J(B,at),J(k,ht)),gt},w.prototype.catch=function(B){return this.then(void 0,B)},w.prototype.s=function(B,k){function J(){switch(at.h){case 1:B(at.i);break;case 2:k(at.i);break;default:throw Error("Unexpected state: "+at.h)}}var at=this;this.g==null?$.h(J):this.g.push(J),this.o=!0},w.resolve=z,w.reject=function(B){return new w(function(k,J){J(B)})},w.race=function(B){return new w(function(k,J){for(var at=a(B),ht=at.next();!ht.done;ht=at.next())z(ht.value).s(k,J)})},w.all=function(B){var k=a(B),J=k.next();return J.done?z([]):new w(function(at,ht){function gt(Jt){return function(Qt){Nt[Jt]=Qt,Bt--,Bt==0&&at(Nt)}}var Nt=[],Bt=0;do Nt.push(void 0),Bt++,z(J.value).s(gt(Nt.length-1),ht),J=k.next();while(!J.done)})},w});var g=typeof Object.assign=="function"?Object.assign:function(y,w){for(var G=1;G<arguments.length;G++){var z=arguments[G];if(z)for(var K in z)Object.prototype.hasOwnProperty.call(z,K)&&(y[K]=z[K])}return y};i("Object.assign",function(y){return y||g});var _=this||self,R={facingMode:"user",width:640,height:480};function C(y,w){this.video=y,this.i=0,this.h=Object.assign(Object.assign({},R),w)}C.prototype.stop=function(){var y=this,w,G,z,K;return x(new S(new h(function($){if(y.g){for(w=y.g.getTracks(),G=a(w),z=G.next();!z.done;z=G.next())K=z.value,K.stop();y.g=void 0}$.j=0})))},C.prototype.start=function(){var y=this,w;return x(new S(new h(function(G){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),w=y.h,G.return(navigator.mediaDevices.getUserMedia({video:{facingMode:w.facingMode,width:w.width,height:w.height}}).then(function(z){P(y,z)}).catch(function(z){var K="Failed to acquire camera feed: "+z;throw console.error(K),alert(K),z}))})))};function b(y){window.requestAnimationFrame(function(){L(y)})}function P(y,w){y.g=w,y.video.srcObject=w,y.video.onloadedmetadata=function(){y.video.play(),b(y)}}function L(y){var w=null;y.video.paused||y.video.currentTime===y.i||(y.i=y.video.currentTime,w=y.h.onFrame()),w?w.then(function(){b(y)}):b(y)}var D=["Camera"],O=_;D[0]in O||typeof O.execScript>"u"||O.execScript("var "+D[0]);for(var M;D.length&&(M=D.shift());)D.length||C===void 0?O[M]&&O[M]!==Object.prototype[M]?O=O[M]:O=O[M]={}:O[M]=C}).call(sl)),sl}var Wx=Hx();const Ee={cursor:{x:0,y:0},velocity:0,isPinching:!1,isPresent:!1,isTwoHands:!1,isSpreadGesture:!1,handsDistance:0},Ja=document.createElement("video");Ja.style.display="none";document.body.appendChild(Ja);async function Xx(){const r=new Gx.Hands({locateFile:e=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${e}`});r.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),r.onResults(qx),new Wx.Camera(Ja,{onFrame:async()=>{await r.send({image:Ja})},width:1280,height:720}).start()}let Lh=0,Uh=performance.now(),Na=0,Ih=0;const jx=.15,Yx=.02;function qx(r){if(Ee.isTwoHands=!1,Ee.isSpreadGesture=!1,r.multiHandLandmarks&&r.multiHandLandmarks.length>0){Ee.isPresent=!0;const t=r.multiHandLandmarks[0],e=t[8],n=t[4];Ee.cursor.x=(1-e.x)*2-1,Ee.cursor.y=-(e.y*2-1);const i=performance.now(),s=(i-Uh)/1e3;if(s>0){const u=1-e.x;Ee.velocity=(u-Lh)/s,Lh=u}Uh=i;const a=e.x-n.x,o=e.y-n.y,c=Math.sqrt(a*a+o*o);if(Ee.isPinching=c<.08,r.multiHandLandmarks.length===2){Ee.isTwoHands=!0;const u=r.multiHandLandmarks[0],h=r.multiHandLandmarks[1],f=(u[0].x+u[5].x+u[17].x)/3,p=(u[0].y+u[5].y+u[17].y)/3,m=(h[0].x+h[5].x+h[17].x)/3,S=(h[0].y+h[5].y+h[17].y)/3,x=m-f,g=S-p;Ee.handsDistance=Math.sqrt(x*x+g*g),Ee.handsDistance-Na>Yx&&Ee.handsDistance>jx&&i>Ih&&(Ee.isSpreadGesture=!0,Ih=i+2e3),Na=Ee.handsDistance}else Na=0,Ee.handsDistance=0}else Ee.isPresent=!1,Ee.velocity=0,Na=0}function Ei(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Bf(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ls={duration:.5,overwrite:!1,delay:0},Hc,nn,De,Hn=1e8,Te=1/Hn,dc=Math.PI*2,Kx=dc/4,$x=0,zf=Math.sqrt,Zx=Math.cos,Jx=Math.sin,Ke=function(t){return typeof t=="string"},Be=function(t){return typeof t=="function"},Di=function(t){return typeof t=="number"},Wc=function(t){return typeof t>"u"},mi=function(t){return typeof t=="object"},xn=function(t){return t!==!1},Xc=function(){return typeof window<"u"},Oa=function(t){return Be(t)||Ke(t)},Vf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,Qx=/random\([^)]+\)/g,tS=/,\s*/g,Fh=/(?:-?\.?\d|\.)+/gi,kf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Kr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,al=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gf=/[+-]=-?[.\d]+/,eS=/[^,'"\[\]\s]+/gi,nS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Fe,ei,pc,jc,On={},Qa={},Hf,Wf=function(t){return(Qa=cs(t,On))&&En},Yc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ys=function(t,e){return!e&&console.warn(t)},Xf=function(t,e){return t&&(On[t]=e)&&Qa&&(Qa[t]=e)||On},qs=function(){return 0},iS={suppressEvents:!0,isStart:!0,kill:!1},Wa={suppressEvents:!0,kill:!1},rS={suppressEvents:!0},qc={},Ki=[],mc={},jf,Pn={},ol={},Nh=30,Xa=[],Kc="",$c=function(t){var e=t[0],n,i;if(mi(e)||Be(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Xa.length;i--&&!Xa[i].targetTest(e););n=Xa[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new _d(t[i],n)))||t.splice(i,1);return t},Mr=function(t){return t._gsap||$c(Wn(t))[0]._gsap},Yf=function(t,e,n){return(n=t[e])&&Be(n)?t[e]():Wc(n)&&t.getAttribute&&t.getAttribute(e)||n},Sn=function(t,e){return(t=t.split(",")).forEach(e)||t},ze=function(t){return Math.round(t*1e5)/1e5||0},Ie=function(t){return Math.round(t*1e7)/1e7||0},Qr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},sS=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},to=function(){var t=Ki.length,e=Ki.slice(0),n,i;for(mc={},Ki.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Zc=function(t){return!!(t._initted||t._startAt||t.add)},qf=function(t,e,n,i){Ki.length&&!nn&&to(),t.render(e,n,!!(nn&&e<0&&Zc(t))),Ki.length&&!nn&&to()},Kf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(eS).length<2?e:Ke(t)?t.trim():t},$f=function(t){return t},Bn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},aS=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},cs=function(t,e){for(var n in e)t[n]=e[n];return t},Oh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=mi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},eo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},zs=function(t){var e=t.parent||Fe,n=t.keyframes?aS(cn(t.keyframes)):Bn;if(xn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},oS=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Zf=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},uo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Ji=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Er=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},lS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},_c=function(t,e,n,i){return t._startAt&&(nn?t._startAt.revert(Wa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},cS=function r(t){return!t||t._ts&&r(t.parent)},Bh=function(t){return t._repeat?us(t._tTime,t=t.duration()+t._rDelay)*t:0},us=function(t,e){var n=Math.floor(t=Ie(t/e));return t&&n===t?n-1:n},no=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ho=function(t){return t._end=Ie(t._start+(t._tDur/Math.abs(t._ts||t._rts||Te)||0))},fo=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ie(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ho(t),n._dirty||Er(n,t)),t},Jf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=no(t.rawTime(),e),(!e._dur||sa(0,e.totalDuration(),n)-e._tTime>Te)&&e.render(n,!0)),Er(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Te}},ii=function(t,e,n,i){return e.parent&&Ji(e),e._start=Ie((Di(n)?n:n||t!==Fe?Gn(t,n,e):t._time)+e._delay),e._end=Ie(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Zf(t,e,"_first","_last",t._sort?"_start":0),gc(e)||(t._recent=e),i||Jf(t,e),t._ts<0&&fo(t,t._tTime),t},Qf=function(t,e){return(On.ScrollTrigger||Yc("scrollTrigger",e))&&On.ScrollTrigger.create(e,t)},td=function(t,e,n,i,s){if(Qc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!nn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&jf!==Un.frame)return Ki.push(t),t._lazy=[s,i],1},uS=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},gc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},hS=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&uS(t)&&!(!t._initted&&gc(t))||(t._ts<0||t._dp._ts<0)&&!gc(t))?0:1,o=t._rDelay,c=0,u,h,f;if(o&&t._repeat&&(c=sa(0,t._tDur,e),h=us(c,o),t._yoyo&&h&1&&(a=1-a),h!==us(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||nn||i||t._zTime===Te||!e&&t._zTime){if(!t._initted&&td(t,e,i,n,c))return;for(f=t._zTime,t._zTime=e||(n?Te:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,u=t._pt;u;)u.r(a,u.d),u=u._next;e<0&&_c(t,e,n,!0),t._onUpdate&&!n&&In(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&In(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ji(t,1),!n&&!nn&&(In(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},fS=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},hs=function(t,e,n,i){var s=t._repeat,a=Ie(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ie(a*(s+1)+t._rDelay*s):a,o>0&&!i&&fo(t,t._tTime=t._tDur*o),t.parent&&ho(t),n||Er(t.parent,t),t},zh=function(t){return t instanceof dn?Er(t):hs(t,t._dur)},dS={_start:0,endTime:qs,totalDuration:qs},Gn=function r(t,e,n){var i=t.labels,s=t._recent||dS,a=t.duration()>=Hn?s.endTime(!1):t._dur,o,c,u;return Ke(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),u=e.substr(-1)==="%",o=e.indexOf("="),c==="<"||c===">"?(o>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(u?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(c=parseFloat(e.charAt(o-1)+e.substr(o+1)),u&&n&&(c=c/100*(cn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+c:a+c)):e==null?a:+e},Vs=function(t,e,n){var i=Di(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,c;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=xn(c.vars.inherit)&&c.parent;a.immediateRender=xn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new He(e[0],a,e[s+1])},er=function(t,e){return t||t===0?e(t):e},sa=function(t,e,n){return n<t?t:n>e?e:n},on=function(t,e){return!Ke(t)||!(e=nS.exec(t))?"":e[1]},pS=function(t,e,n){return er(n,function(i){return sa(t,e,i)})},vc=[].slice,ed=function(t,e){return t&&mi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&mi(t[0]))&&!t.nodeType&&t!==ei},mS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ke(i)&&!e||ed(i,1)?(s=n).push.apply(s,Wn(i)):n.push(i)})||n},Wn=function(t,e,n){return De&&!e&&De.selector?De.selector(t):Ke(t)&&!n&&(pc||!fs())?vc.call((e||jc).querySelectorAll(t),0):cn(t)?mS(t,n):ed(t)?vc.call(t,0):t?[t]:[]},xc=function(t){return t=Wn(t)[0]||Ys("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Wn(e,n.querySelectorAll?n:n===t?Ys("Invalid scope")||jc.createElement("div"):t)}},nd=function(t){return t.sort(function(){return .5-Math.random()})},id=function(t){if(Be(t))return t;var e=mi(t)?t:{each:t},n=Tr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,u=e.axis,h=i,f=i;return Ke(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(h=i[0],f=i[1]),function(p,m,S){var x=(S||e).length,g=a[x],_,R,C,b,P,L,D,O,M;if(!g){if(M=e.grid==="auto"?0:(e.grid||[1,Hn])[1],!M){for(D=-Hn;D<(D=S[M++].getBoundingClientRect().left)&&M<x;);M<x&&M--}for(g=a[x]=[],_=c?Math.min(M,x)*h-.5:i%M,R=M===Hn?0:c?x*f/M-.5:i/M|0,D=0,O=Hn,L=0;L<x;L++)C=L%M-_,b=R-(L/M|0),g[L]=P=u?Math.abs(u==="y"?b:C):zf(C*C+b*b),P>D&&(D=P),P<O&&(O=P);i==="random"&&nd(g),g.max=D-O,g.min=O,g.v=x=(parseFloat(e.amount)||parseFloat(e.each)*(M>x?x-1:u?u==="y"?x/M:M:Math.max(M,x/M))||0)*(i==="edges"?-1:1),g.b=x<0?s-x:s,g.u=on(e.amount||e.each)||0,n=n&&x<0?dd(n):n}return x=(g[p]-g.min)/g.max||0,Ie(g.b+(n?n(x):x)*g.v)+g.u}},Sc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ie(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Di(n)?0:on(n))}},rd=function(t,e){var n=cn(t),i,s;return!n&&mi(t)&&(i=n=t.radius||Hn,t.values?(t=Wn(t.values),(s=!Di(t[0]))&&(i*=i)):t=Sc(t.increment)),er(e,n?Be(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),u=Hn,h=0,f=t.length,p,m;f--;)s?(p=t[f].x-o,m=t[f].y-c,p=p*p+m*m):p=Math.abs(t[f]-o),p<u&&(u=p,h=f);return h=!i||u<=i?t[h]:a,s||h===a||Di(a)?h:h+on(a)}:Sc(t))},sd=function(t,e,n,i){return er(cn(t)?!e:n===!0?!!(n=0):!i,function(){return cn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},_S=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},gS=function(t,e){return function(n){return t(parseFloat(n))+(e||on(n))}},vS=function(t,e,n){return od(t,e,0,1,n)},ad=function(t,e,n){return er(n,function(i){return t[~~e(i)]})},xS=function r(t,e,n){var i=e-t;return cn(t)?ad(t,r(0,t.length),e):er(n,function(s){return(i+(s-t)%i)%i+t})},SS=function r(t,e,n){var i=e-t,s=i*2;return cn(t)?ad(t,r(0,t.length-1),e):er(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Ks=function(t){return t.replace(Qx,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(tS);return sd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},od=function(t,e,n,i,s){var a=e-t,o=i-n;return er(s,function(c){return n+((c-t)/a*o||0)})},yS=function r(t,e,n,i){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var a=Ke(t),o={},c,u,h,f,p;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(cn(t)&&!cn(e)){for(h=[],f=t.length,p=f-2,u=1;u<f;u++)h.push(r(t[u-1],t[u]));f--,s=function(S){S*=f;var x=Math.min(p,~~S);return h[x](S-x)},n=e}else i||(t=cs(cn(t)?[]:{},t));if(!h){for(c in e)Jc.call(o,t,c,"get",e[c]);s=function(S){return nu(S,o)||(a?t.p:t)}}}return er(n,s)},Vh=function(t,e,n){var i=t.labels,s=Hn,a,o,c;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},In=function(t,e,n){var i=t.vars,s=i[e],a=De,o=t._ctx,c,u,h;if(s)return c=i[e+"Params"],u=i.callbackScope||t,n&&Ki.length&&to(),o&&(De=o),h=c?s.apply(u,c):s.call(u),De=a,h},Os=function(t){return Ji(t),t.scrollTrigger&&t.scrollTrigger.kill(!!nn),t.progress()<1&&In(t,"onInterrupt"),t},$r,ld=[],cd=function(t){if(t)if(t=!t.name&&t.default||t,Xc()||t.headless){var e=t.name,n=Be(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:qs,render:nu,add:Jc,kill:OS,modifier:NS,rawVars:0},a={targetTest:0,get:0,getSetter:eu,aliases:{},register:0};if(fs(),t!==i){if(Pn[e])return;Bn(i,Bn(eo(t,s),a)),cs(i.prototype,cs(s,eo(t,a))),Pn[i.prop=e]=i,t.targetTest&&(Xa.push(i),qc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Xf(e,i),t.register&&t.register(En,i,yn)}else ld.push(t)},Me=255,Bs={aqua:[0,Me,Me],lime:[0,Me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Me],navy:[0,0,128],white:[Me,Me,Me],olive:[128,128,0],yellow:[Me,Me,0],orange:[Me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Me,0,0],pink:[Me,192,203],cyan:[0,Me,Me],transparent:[Me,Me,Me,0]},ll=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Me+.5|0},ud=function(t,e,n){var i=t?Di(t)?[t>>16,t>>8&Me,t&Me]:0:Bs.black,s,a,o,c,u,h,f,p,m,S;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Bs[t])i=Bs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Me,i&Me,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Me,t&Me]}else if(t.substr(0,3)==="hsl"){if(i=S=t.match(Fh),!e)c=+i[0]%360/360,u=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(u+1):h+u-h*u,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=ll(c+1/3,s,a),i[1]=ll(c,s,a),i[2]=ll(c-1/3,s,a);else if(~t.indexOf("="))return i=t.match(kf),n&&i.length<4&&(i[3]=1),i}else i=t.match(Fh)||Bs.transparent;i=i.map(Number)}return e&&!S&&(s=i[0]/Me,a=i[1]/Me,o=i[2]/Me,f=Math.max(s,a,o),p=Math.min(s,a,o),h=(f+p)/2,f===p?c=u=0:(m=f-p,u=h>.5?m/(2-f-p):m/(f+p),c=f===s?(a-o)/m+(a<o?6:0):f===a?(o-s)/m+2:(s-a)/m+4,c*=60),i[0]=~~(c+.5),i[1]=~~(u*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},hd=function(t){var e=[],n=[],i=-1;return t.split($i).forEach(function(s){var a=s.match(Kr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},kh=function(t,e,n){var i="",s=(t+i).match($i),a=e?"hsla(":"rgba(",o=0,c,u,h,f;if(!s)return t;if(s=s.map(function(p){return(p=ud(p,e,1))&&a+(e?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),n&&(h=hd(t),c=n.c,c.join(i)!==h.c.join(i)))for(u=t.replace($i,"1").split(Kr),f=u.length-1;o<f;o++)i+=u[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!u)for(u=t.split($i),f=u.length-1;o<f;o++)i+=u[o]+s[o];return i+u[f]},$i=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Bs)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),MS=/hsl[a]?\(/,fd=function(t){var e=t.join(" "),n;if($i.lastIndex=0,$i.test(e))return n=MS.test(e),t[1]=kh(t[1],n),t[0]=kh(t[0],n,hd(t[1])),!0},$s,Un=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],c,u,h,f,p,m,S=function x(g){var _=r()-i,R=g===!0,C,b,P,L;if((_>t||_<0)&&(n+=_-e),i+=_,P=i-n,C=P-a,(C>0||R)&&(L=++f.frame,p=P-f.time*1e3,f.time=P=P/1e3,a+=C+(C>=s?4:s-C),b=1),R||(c=u(x)),b)for(m=0;m<o.length;m++)o[m](P,p,L,g)};return f={time:0,frame:0,tick:function(){S(!0)},deltaRatio:function(g){return p/(1e3/(g||60))},wake:function(){Hf&&(!pc&&Xc()&&(ei=pc=window,jc=ei.document||{},On.gsap=En,(ei.gsapVersions||(ei.gsapVersions=[])).push(En.version),Wf(Qa||ei.GreenSockGlobals||!ei.gsap&&ei||{}),ld.forEach(cd)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&f.sleep(),u=h||function(g){return setTimeout(g,a-f.time*1e3+1|0)},$s=1,S(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),$s=0,u=qs},lagSmoothing:function(g,_){t=g||1/0,e=Math.min(_||33,t)},fps:function(g){s=1e3/(g||240),a=f.time*1e3+s},add:function(g,_,R){var C=_?function(b,P,L,D){g(b,P,L,D),f.remove(C)}:g;return f.remove(g),o[R?"unshift":"push"](C),fs(),C},remove:function(g,_){~(_=o.indexOf(g))&&o.splice(_,1)&&m>=_&&m--},_listeners:o},f})(),fs=function(){return!$s&&Un.wake()},ae={},ES=/^[\d.\-M][\d.\-,\s]/,TS=/["']/g,bS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,c,u;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,u=c.substr(0,o),e[i]=isNaN(u)?u.replace(TS,"").trim():+u,i=c.substr(o+1).trim();return e},AS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},wS=function(t){var e=(t+"").split("("),n=ae[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[bS(e[1])]:AS(t).split(",").map(Kf)):ae._CE&&ES.test(t)?ae._CE("",t):n},dd=function(t){return function(e){return 1-t(1-e)}},pd=function r(t,e){for(var n=t._first,i;n;)n instanceof dn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Tr=function(t,e){return t&&(Be(t)?t:ae[t]||wS(t))||e},wr=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Sn(t,function(o){ae[o]=On[o]=s,ae[a=o.toLowerCase()]=n;for(var c in s)ae[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=ae[o+"."+c]=s[c]}),s},md=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},cl=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/dc*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Jx((h-a)*s)+1},c=t==="out"?o:t==="in"?function(u){return 1-o(1-u)}:md(o);return s=dc/s,c.config=function(u,h){return r(t,u,h)},c},ul=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:md(n);return i.config=function(s){return r(t,s)},i};Sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;wr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ae.Linear.easeNone=ae.none=ae.Linear.easeIn;wr("Elastic",cl("in"),cl("out"),cl());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};wr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);wr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});wr("Circ",function(r){return-(zf(1-r*r)-1)});wr("Sine",function(r){return r===1?1:-Zx(r*Kx)+1});wr("Back",ul("in"),ul("out"),ul());ae.SteppedEase=ae.steps=On.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Te;return function(o){return((i*sa(0,a,o)|0)+s)*n}}};ls.ease=ae["quad.out"];Sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Kc+=r+","+r+"Params,"});var _d=function(t,e){this.id=$x++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Yf,this.set=e?e.getSetter:eu},Zs=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,hs(this,+e.duration,1,1),this.data=e.data,De&&(this._ctx=De,De.data.push(this)),$s||Un.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,hs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(fs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(fo(this,n),!s._dp||s.parent||Jf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ii(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Te||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Bh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Bh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?us(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Te?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?no(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Te?0:this._rts,this.totalTime(sa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ho(this),lS(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Te&&(this._tTime-=Te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ie(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ii(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(xn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?no(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=rS);var i=nn;return nn=n,Zc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),nn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,zh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,zh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Gn(this,n),xn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,xn(i)),this._dur||(this._zTime=-Te),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Te)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Be(n)?n:$f,c=function(){var h=i.then;i.then=null,s&&s(),Be(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},t.kill=function(){Os(this)},r})();Bn(Zs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Te,_prom:0,_ps:!1,_rts:1});var dn=(function(r){Bf(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=xn(n.sortChildren),Fe&&ii(n.parent||Fe,Ei(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Qf(Ei(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Vs(0,arguments,this),this},e.from=function(i,s,a){return Vs(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Vs(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,zs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new He(i,s,Gn(this,a),1),this},e.call=function(i,s,a){return ii(this,He.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,c,u,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=u,a.onCompleteParams=h,a.parent=this,new He(i,a,Gn(this,c)),this},e.staggerFrom=function(i,s,a,o,c,u,h){return a.runBackwards=1,zs(a).immediateRender=xn(a.immediateRender),this.staggerTo(i,s,a,o,c,u,h)},e.staggerFromTo=function(i,s,a,o,c,u,h,f){return o.startAt=a,zs(o).immediateRender=xn(o.immediateRender),this.staggerTo(i,s,o,c,u,h,f)},e.render=function(i,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,u=this._dur,h=i<=0?0:Ie(i),f=this._zTime<0!=i<0&&(this._initted||!u),p,m,S,x,g,_,R,C,b,P,L,D;if(this!==Fe&&h>c&&i>=0&&(h=c),h!==this._tTime||a||f){if(o!==this._time&&u&&(h+=this._time-o,i+=this._time-o),p=h,b=this._start,C=this._ts,_=!C,f&&(u||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(L=this._yoyo,g=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,a);if(p=Ie(h%g),h===c?(x=this._repeat,p=u):(P=Ie(h/g),x=~~P,x&&x===P&&(p=u,x--),p>u&&(p=u)),P=us(this._tTime,g),!o&&this._tTime&&P!==x&&this._tTime-P*g-this._dur<=0&&(P=x),L&&x&1&&(p=u-p,D=1),x!==P&&!this._lock){var O=L&&P&1,M=O===(L&&x&1);if(x<P&&(O=!O),o=O?0:h%u?u:h,this._lock=1,this.render(o||(D?0:Ie(x*g)),s,!u)._lock=0,this._tTime=h,!s&&this.parent&&In(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1,P=x),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,c=this._tDur,M&&(this._lock=2,o=O?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;pd(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=fS(this,Ie(o),Ie(p)),R&&(h-=p-(p=R._start))),this._tTime=h,this._time=p,this._act=!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&u&&!s&&!P&&(In(this,"onStart"),this._tTime!==h))return this;if(p>=o&&i>=0)for(m=this._first;m;){if(S=m._next,(m._act||p>=m._start)&&m._ts&&R!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(p-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(p-m._start)*m._ts,s,a),p!==this._time||!this._ts&&!_){R=0,S&&(h+=this._zTime=-Te);break}}m=S}else{m=this._last;for(var y=i<0?i:p;m;){if(S=m._prev,(m._act||y<=m._end)&&m._ts&&R!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(y-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(y-m._start)*m._ts,s,a||nn&&Zc(m)),p!==this._time||!this._ts&&!_){R=0,S&&(h+=this._zTime=y?-Te:Te);break}}m=S}}if(R&&!s&&(this.pause(),R.render(p>=o?0:-Te)._zTime=p>=o?1:-1,this._ts))return this._start=b,ho(this),this.render(i,s,a);this._onUpdate&&!s&&In(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(b===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Ji(this,1),!s&&!(i<0&&!o)&&(h||o||!c)&&(In(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Di(s)||(s=Gn(this,s,i)),!(i instanceof Zs)){if(cn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ke(i))return this.addLabel(i,s);if(Be(i))i=He.delayedCall(0,i);else return this}return this!==i?ii(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Hn);for(var c=[],u=this._first;u;)u._start>=o&&(u instanceof He?s&&c.push(u):(a&&c.push(u),i&&c.push.apply(c,u.getChildren(!0,s,a)))),u=u._next;return c},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Ke(i)?this.removeLabel(i):Be(i)?this.killTweensOf(i):(i.parent===this&&uo(this,i),i===this._recent&&(this._recent=this._last),Er(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ie(Un.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Gn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=He.delayedCall(0,s||qs,a);return o.data="isPause",this._hasPause=1,ii(this,o,Gn(this,i))},e.removePause=function(i){var s=this._first;for(i=Gn(this,i);s;)s._start===i&&s.data==="isPause"&&Ji(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)Wi!==o[c]&&o[c].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Wn(i),c=this._first,u=Di(s),h;c;)c instanceof He?sS(c._targets,o)&&(u?(!Wi||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(h=c.getTweensOf(o,s)).length&&a.push.apply(a,h),c=c._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=Gn(a,i),c=s,u=c.startAt,h=c.onStart,f=c.onStartParams,p=c.immediateRender,m,S=He.to(a,Bn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale())||Te,onStart:function(){if(a.pause(),!m){var g=s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale());S._dur!==g&&hs(S,g,0,1).render(S._time,!0,!0),m=1}h&&h.apply(S,f||[])}},s));return p?S.render(0):S},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,Bn({startAt:{time:Gn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Vh(this,Gn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Vh(this,Gn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Te)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,c=this.labels,u;for(i=Ie(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(u in c)c[u]>=a&&(c[u]+=i);return Er(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Er(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,c=Hn,u,h,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,ii(a,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(s-=h,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Ie(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=u;hs(a,a===Fe&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Fe._ts&&(qf(Fe,no(i,Fe)),jf=Un.frame),Un.frame>=Nh){Nh+=Nn.autoSleep||120;var s=Fe._first;if((!s||!s._ts)&&Nn.autoSleep&&Un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Un.sleep()}}},t})(Zs);Bn(dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var RS=function(t,e,n,i,s,a,o){var c=new yn(this._pt,t,e,0,1,Md,null,s),u=0,h=0,f,p,m,S,x,g,_,R;for(c.b=n,c.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Ks(i)),a&&(R=[n,i],a(R,t,e),n=R[0],i=R[1]),p=n.match(al)||[];f=al.exec(i);)S=f[0],x=i.substring(u,f.index),m?m=(m+1)%5:x.substr(-5)==="rgba("&&(m=1),S!==p[h++]&&(g=parseFloat(p[h-1])||0,c._pt={_next:c._pt,p:x||h===1?x:",",s:g,c:S.charAt(1)==="="?Qr(g,S)-g:parseFloat(S)-g,m:m&&m<4?Math.round:0},u=al.lastIndex);return c.c=u<i.length?i.substring(u,i.length):"",c.fp=o,(Gf.test(i)||_)&&(c.e=0),this._pt=c,c},Jc=function(t,e,n,i,s,a,o,c,u,h){Be(i)&&(i=i(s||0,t,a));var f=t[e],p=n!=="get"?n:Be(f)?u?t[e.indexOf("set")||!Be(t["get"+e.substr(3)])?e:"get"+e.substr(3)](u):t[e]():f,m=Be(f)?u?US:Sd:tu,S;if(Ke(i)&&(~i.indexOf("random(")&&(i=Ks(i)),i.charAt(1)==="="&&(S=Qr(p,i)+(on(p)||0),(S||S===0)&&(i=S))),!h||p!==i||yc)return!isNaN(p*i)&&i!==""?(S=new yn(this._pt,t,e,+p||0,i-(p||0),typeof f=="boolean"?FS:yd,0,m),u&&(S.fp=u),o&&S.modifier(o,this,t),this._pt=S):(!f&&!(e in t)&&Yc(e,i),RS.call(this,t,e,p,i,m,c||Nn.stringFilter,u))},CS=function(t,e,n,i,s){if(Be(t)&&(t=ks(t,s,e,n,i)),!mi(t)||t.style&&t.nodeType||cn(t)||Vf(t))return Ke(t)?ks(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=ks(t[o],s,e,n,i);return a},gd=function(t,e,n,i,s,a){var o,c,u,h;if(Pn[t]&&(o=new Pn[t]).init(s,o.rawVars?e[t]:CS(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=c=new yn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==$r))for(u=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)u[o._props[h]]=c;return o},Wi,yc,Qc=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,u=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,p=i.keyframes,m=i.autoRevert,S=t._dur,x=t._startAt,g=t._targets,_=t.parent,R=_&&_.data==="nested"?_.vars.targets:g,C=t._overwrite==="auto"&&!Hc,b=t.timeline,P,L,D,O,M,y,w,G,z,K,$,B,k;if(b&&(!p||!s)&&(s="none"),t._ease=Tr(s,ls.ease),t._yEase=f?dd(Tr(f===!0?s:f,ls.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!b&&!!i.runBackwards,!b||p&&!i.stagger){if(G=g[0]?Mr(g[0]).harness:0,B=G&&i[G.prop],P=eo(i,qc),x&&(x._zTime<0&&x.progress(1),e<0&&h&&o&&!m?x.render(-1,!0):x.revert(h&&S?Wa:iS),x._lazy=0),a){if(Ji(t._startAt=He.set(g,Bn({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!x&&xn(c),startAt:null,delay:0,onUpdate:u&&function(){return In(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(nn||!o&&!m)&&t._startAt.revert(Wa),o&&S&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&S&&!x){if(e&&(o=!1),D=Bn({overwrite:!1,data:"isFromStart",lazy:o&&!x&&xn(c),immediateRender:o,stagger:0,parent:_},P),B&&(D[G.prop]=B),Ji(t._startAt=He.set(g,D)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(nn?t._startAt.revert(Wa):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Te,Te);else if(!e)return}for(t._pt=t._ptCache=0,c=S&&xn(c)||c&&!S,L=0;L<g.length;L++){if(M=g[L],w=M._gsap||$c(g)[L]._gsap,t._ptLookup[L]=K={},mc[w.id]&&Ki.length&&to(),$=R===g?L:R.indexOf(M),G&&(z=new G).init(M,B||P,t,$,R)!==!1&&(t._pt=O=new yn(t._pt,M,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(J){K[J]=O}),z.priority&&(y=1)),!G||B)for(D in P)Pn[D]&&(z=gd(D,P,t,$,M,R))?z.priority&&(y=1):K[D]=O=Jc.call(t,M,D,"get",P[D],$,R,0,i.stringFilter);t._op&&t._op[L]&&t.kill(M,t._op[L]),C&&t._pt&&(Wi=t,Fe.killTweensOf(M,K,t.globalTime(e)),k=!t.parent,Wi=0),t._pt&&c&&(mc[w.id]=1)}y&&Ed(t),t._onInit&&t._onInit(t)}t._onUpdate=u,t._initted=(!t._op||t._pt)&&!k,p&&e<=0&&b.render(Hn,!0,!0)},PS=function(t,e,n,i,s,a,o,c){var u=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,p,m;if(!u)for(u=t._ptCache[e]=[],p=t._ptLookup,m=t._targets.length;m--;){if(h=p[m][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return yc=1,t.vars[e]="+=0",Qc(t,o),yc=0,c?Ys(e+" not eligible for reset"):1;u.push(h)}for(m=u.length;m--;)f=u[m],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,f.e&&(f.e=ze(n)+on(f.e)),f.b&&(f.b=h.s+on(f.b))},DS=function(t,e){var n=t[0]?Mr(t[0]).harness:0,i=n&&n.aliases,s,a,o,c;if(!i)return e;s=cs({},e);for(a in i)if(a in s)for(c=i[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},LS=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(cn(e))o=n[t]||(n[t]=[]),e.forEach(function(c,u){return o.push({t:u/(e.length-1)*100,v:c,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},ks=function(t,e,n,i,s){return Be(t)?t.call(e,n,i,s):Ke(t)&&~t.indexOf("random(")?Ks(t):t},vd=Kc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",xd={};Sn(vd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return xd[r]=1});var He=(function(r){Bf(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:zs(i))||this;var c=o.vars,u=c.duration,h=c.delay,f=c.immediateRender,p=c.stagger,m=c.overwrite,S=c.keyframes,x=c.defaults,g=c.scrollTrigger,_=c.yoyoEase,R=i.parent||Fe,C=(cn(n)||Vf(n)?Di(n[0]):"length"in i)?[n]:Wn(n),b,P,L,D,O,M,y,w;if(o._targets=C.length?$c(C):Ys("GSAP target "+n+" not found. https://gsap.com",!Nn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,S||p||Oa(u)||Oa(h)){if(i=o.vars,b=o.timeline=new dn({data:"nested",defaults:x||{},targets:R&&R.data==="nested"?R.vars.targets:C}),b.kill(),b.parent=b._dp=Ei(o),b._start=0,p||Oa(u)||Oa(h)){if(D=C.length,y=p&&id(p),mi(p))for(O in p)~vd.indexOf(O)&&(w||(w={}),w[O]=p[O]);for(P=0;P<D;P++)L=eo(i,xd),L.stagger=0,_&&(L.yoyoEase=_),w&&cs(L,w),M=C[P],L.duration=+ks(u,Ei(o),P,M,C),L.delay=(+ks(h,Ei(o),P,M,C)||0)-o._delay,!p&&D===1&&L.delay&&(o._delay=h=L.delay,o._start+=h,L.delay=0),b.to(M,L,y?y(P,M,C):0),b._ease=ae.none;b.duration()?u=h=0:o.timeline=0}else if(S){zs(Bn(b.vars.defaults,{ease:"none"})),b._ease=Tr(S.ease||i.ease||"none");var G=0,z,K,$;if(cn(S))S.forEach(function(B){return b.to(C,B,">")}),b.duration();else{L={};for(O in S)O==="ease"||O==="easeEach"||LS(O,S[O],L,S.easeEach);for(O in L)for(z=L[O].sort(function(B,k){return B.t-k.t}),G=0,P=0;P<z.length;P++)K=z[P],$={ease:K.e,duration:(K.t-(P?z[P-1].t:0))/100*u},$[O]=K.v,b.to(C,$,G),G+=$.duration;b.duration()<u&&b.to({},{duration:u-b.duration()})}}u||o.duration(u=b.duration())}else o.timeline=0;return m===!0&&!Hc&&(Wi=Ei(o),Fe.killTweensOf(C),Wi=0),ii(R,Ei(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!u&&!S&&o._start===Ie(R._time)&&xn(f)&&cS(Ei(o))&&R.data!=="nested")&&(o._tTime=-Te,o.render(Math.max(0,-h)||0)),g&&Qf(Ei(o),g),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,c=this._tDur,u=this._dur,h=i<0,f=i>c-Te&&!h?c:i<Te?0:i,p,m,S,x,g,_,R,C,b;if(!u)hS(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(p=f,C=this.timeline,this._repeat){if(x=u+this._rDelay,this._repeat<-1&&h)return this.totalTime(x*100+i,s,a);if(p=Ie(f%x),f===c?(S=this._repeat,p=u):(g=Ie(f/x),S=~~g,S&&S===g?(p=u,S--):p>u&&(p=u)),_=this._yoyo&&S&1,_&&(b=this._yEase,p=u-p),g=us(this._tTime,x),p===o&&!a&&this._initted&&S===g)return this._tTime=f,this;S!==g&&(C&&this._yEase&&pd(C,_),this.vars.repeatRefresh&&!_&&!this._lock&&p!==x&&this._initted&&(this._lock=a=1,this.render(Ie(x*S),!0).invalidate()._lock=0))}if(!this._initted){if(td(this,h?i:p,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&S!==g))return this;if(u!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=R=(b||this._ease)(p/u),this._from&&(this.ratio=R=1-R),!o&&f&&!s&&!g&&(In(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(R,m.d),m=m._next;C&&C.render(i<0?i:C._dur*C._ease(p/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&_c(this,i,s,a),In(this,"onUpdate")),this._repeat&&S!==g&&this.vars.onRepeat&&!s&&this.parent&&In(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&_c(this,i,!0,!0),(i||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ji(this,1),!s&&!(h&&!o)&&(f||o||_)&&(In(this,f===c?"onComplete":"onReverseComplete",!0),this._prom&&!(f<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,c){$s||Un.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Qc(this,u),h=this._ease(u/this._dur),PS(this,i,s,a,o,h,u,c)?this.resetTo(i,s,a,o,1):(fo(this,0),this.parent||Zf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Os(this):this.scrollTrigger&&this.scrollTrigger.kill(!!nn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Wi&&Wi.vars.overwrite!==!0)._first||Os(this),this.parent&&a!==this.timeline.totalDuration()&&hs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?Wn(i):o,u=this._ptLookup,h=this._pt,f,p,m,S,x,g,_;if((!s||s==="all")&&oS(o,c))return s==="all"&&(this._pt=0),Os(this);for(f=this._op=this._op||[],s!=="all"&&(Ke(s)&&(x={},Sn(s,function(R){return x[R]=1}),s=x),s=DS(o,s)),_=o.length;_--;)if(~c.indexOf(o[_])){p=u[_],s==="all"?(f[_]=s,S=p,m={}):(m=f[_]=f[_]||{},S=s);for(x in S)g=p&&p[x],g&&((!("kill"in g.d)||g.d.kill(x)===!0)&&uo(this,g,"_pt"),delete p[x]),m!=="all"&&(m[x]=1)}return this._initted&&!this._pt&&h&&Os(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Vs(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Vs(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Fe.killTweensOf(i,s,a)},t})(Zs);Bn(He.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Sn("staggerTo,staggerFrom,staggerFromTo",function(r){He[r]=function(){var t=new dn,e=vc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var tu=function(t,e,n){return t[e]=n},Sd=function(t,e,n){return t[e](n)},US=function(t,e,n,i){return t[e](i.fp,n)},IS=function(t,e,n){return t.setAttribute(e,n)},eu=function(t,e){return Be(t[e])?Sd:Wc(t[e])&&t.setAttribute?IS:tu},yd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},FS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Md=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},nu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},NS=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},OS=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?uo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},BS=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Ed=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},yn=(function(){function r(e,n,i,s,a,o,c,u,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||yd,this.d=c||this,this.set=u||tu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=BS,this.m=n,this.mt=s,this.tween=i},r})();Sn(Kc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return qc[r]=1});On.TweenMax=On.TweenLite=He;On.TimelineLite=On.TimelineMax=dn;Fe=new dn({sortChildren:!1,defaults:ls,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Nn.stringFilter=fd;var br=[],ja={},zS=[],Gh=0,VS=0,hl=function(t){return(ja[t]||zS).map(function(e){return e()})},Mc=function(){var t=Date.now(),e=[];t-Gh>2&&(hl("matchMediaInit"),br.forEach(function(n){var i=n.queries,s=n.conditions,a,o,c,u;for(o in i)a=ei.matchMedia(i[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,u=1);u&&(n.revert(),c&&e.push(n))}),hl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Gh=t,hl("matchMedia"))},Td=(function(){function r(e,n){this.selector=n&&xc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=VS++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Be(n)&&(s=i,i=n,n=Be);var a=this,o=function(){var u=De,h=a.selector,f;return u&&u!==a&&u.data.push(a),s&&(a.selector=xc(s)),De=a,f=i.apply(a,arguments),Be(f)&&a._r.push(f),De=u,a.selector=h,a.isReverted=!1,f};return a.last=o,n===Be?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},t.ignore=function(n){var i=De;De=null,n(this),De=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof He&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),c=s.data.length,u;c--;)u=s.data[c],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=s.data.length;c--;)u=s.data[c],u instanceof dn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof He)&&u.revert&&u.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=br.length;a--;)br[a].id===this.id&&br.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),kS=(function(){function r(e){this.contexts=[],this.scope=e,De&&De.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){mi(n)||(n={matches:n});var a=new Td(0,s||this.scope),o=a.conditions={},c,u,h;De&&!a.selector&&(a.selector=De.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(u in n)u==="all"?h=1:(c=ei.matchMedia(n[u]),c&&(br.indexOf(a)<0&&br.push(a),(o[u]=c.matches)&&(h=1),c.addListener?c.addListener(Mc):c.addEventListener("change",Mc)));return h&&i(a,function(f){return a.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),io={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return cd(i)})},timeline:function(t){return new dn(t)},getTweensOf:function(t,e){return Fe.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ke(t)&&(t=Wn(t)[0]);var s=Mr(t||{}).get,a=n?$f:Kf;return n==="native"&&(n=""),t&&(e?a((Pn[e]&&Pn[e].get||s)(t,e,n,i)):function(o,c,u){return a((Pn[o]&&Pn[o].get||s)(t,o,c,u))})},quickSetter:function(t,e,n){if(t=Wn(t),t.length>1){var i=t.map(function(h){return En.quickSetter(h,e,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}t=t[0]||{};var a=Pn[e],o=Mr(t),c=o.harness&&(o.harness.aliases||{})[e]||e,u=a?function(h){var f=new a;$r._pt=0,f.init(t,n?h+n:h,$r,0,[t]),f.render(1,f),$r._pt&&nu(1,$r)}:o.set(t,c);return a?u:function(h){return u(t,c,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=En.to(t,Bn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,u,h){return s.resetTo(e,c,u,h)};return a.tween=s,a},isTweening:function(t){return Fe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Tr(t.ease,ls.ease)),Oh(ls,t||{})},config:function(t){return Oh(Nn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Pn[o]&&!On[o]&&Ys(e+" effect requires "+o+" plugin.")}),ol[e]=function(o,c,u){return n(Wn(o),Bn(c||{},s),u)},a&&(dn.prototype[e]=function(o,c,u){return this.add(ol[e](o,mi(c)?c:(u=c)&&{},this),u)})},registerEase:function(t,e){ae[t]=Tr(e)},parseEase:function(t,e){return arguments.length?Tr(t,e):ae},getById:function(t){return Fe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new dn(t),i,s;for(n.smoothChildTiming=xn(t.smoothChildTiming),Fe.remove(n),n._dp=0,n._time=n._tTime=Fe._time,i=Fe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof He&&i.vars.onComplete===i._targets[0]))&&ii(n,i,i._start-i._delay),i=s;return ii(Fe,n,0),n},context:function(t,e){return t?new Td(t,e):De},matchMedia:function(t){return new kS(t)},matchMediaRefresh:function(){return br.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Mc()},addEventListener:function(t,e){var n=ja[t]||(ja[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ja[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:xS,wrapYoyo:SS,distribute:id,random:sd,snap:rd,normalize:vS,getUnit:on,clamp:pS,splitColor:ud,toArray:Wn,selector:xc,mapRange:od,pipe:_S,unitize:gS,interpolate:yS,shuffle:nd},install:Wf,effects:ol,ticker:Un,updateRoot:dn.updateRoot,plugins:Pn,globalTimeline:Fe,core:{PropTween:yn,globals:Xf,Tween:He,Timeline:dn,Animation:Zs,getCache:Mr,_removeLinkedListItem:uo,reverting:function(){return nn},context:function(t){return t&&De&&(De.data.push(t),t._ctx=De),De},suppressOverwrites:function(t){return Hc=t}}};Sn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return io[r]=He[r]});Un.add(dn.updateRoot);$r=io.to({},{duration:0});var GS=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},HS=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=GS(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},fl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var c,u;if(Ke(s)&&(c={},Sn(s,function(h){return c[h]=1}),s=c),e){c={};for(u in s)c[u]=e(s[u]);s=c}HS(o,s)}}}},En=io.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,c;this.tween=n;for(a in e)c=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(c||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)nn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},fl("roundProps",Sc),fl("modifiers"),fl("snap",rd))||io;He.version=dn.version=En.version="3.14.2";Hf=1;Xc()&&fs();ae.Power0;ae.Power1;ae.Power2;ae.Power3;ae.Power4;ae.Linear;ae.Quad;ae.Cubic;ae.Quart;ae.Quint;ae.Strong;ae.Elastic;ae.Back;ae.SteppedEase;ae.Bounce;ae.Sine;ae.Expo;ae.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Hh,Xi,ts,iu,yr,Wh,ru,WS=function(){return typeof window<"u"},Li={},_r=180/Math.PI,es=Math.PI/180,qr=Math.atan2,Xh=1e8,su=/([A-Z])/g,XS=/(left|right|width|margin|padding|x)/i,jS=/[\s,\(]\S/,ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ec=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},YS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},qS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},KS=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},$S=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},bd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Ad=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},ZS=function(t,e,n){return t.style[e]=n},JS=function(t,e,n){return t.style.setProperty(e,n)},QS=function(t,e,n){return t._gsap[e]=n},ty=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},ey=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},ny=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Ne="transform",Mn=Ne+"Origin",iy=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Li&&s){if(this.tfm=this.tfm||{},t!=="transform")t=ai[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Ti(i,o)}):this.tfm[t]=a.x?a[t]:Ti(i,t),t===Mn&&(this.tfm.zOrigin=a.zOrigin);else return ai.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Ne)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Mn,e,"")),t=Ne}(s||e)&&this.props.push(t,e,s[t])},wd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ry=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(su,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=ru(),(!s||!s.isStart)&&!n[Ne]&&(wd(n),i.zOrigin&&n[Mn]&&(n[Mn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Rd=function(t,e){var n={target:t,props:[],revert:ry,save:iy};return t._gsap||En.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Cd,Tc=function(t,e){var n=Xi.createElementNS?Xi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Xi.createElement(t);return n&&n.style?n:Xi.createElement(t)},Fn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(su,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,ds(e)||e,1)||""},jh="O,Moz,ms,Ms,Webkit".split(","),ds=function(t,e,n){var i=e||yr,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(jh[a]+t in s););return a<0?null:(a===3?"ms":a>=0?jh[a]:"")+t},bc=function(){WS()&&window.document&&(Hh=window,Xi=Hh.document,ts=Xi.documentElement,yr=Tc("div")||{style:{}},Tc("div"),Ne=ds(Ne),Mn=Ne+"Origin",yr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cd=!!ds("perspective"),ru=En.core.reverting,iu=1)},Yh=function(t){var e=t.ownerSVGElement,n=Tc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ts.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ts.removeChild(n),s},qh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Pd=function(t){var e,n;try{e=t.getBBox()}catch{e=Yh(t),n=1}return e&&(e.width||e.height)||n||(e=Yh(t)),e&&!e.width&&!e.x&&!e.y?{x:+qh(t,["x","cx","x1"])||0,y:+qh(t,["y","cy","y1"])||0,width:0,height:0}:e},Dd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Pd(t))},Qi=function(t,e){if(e){var n=t.style,i;e in Li&&e!==Mn&&(e=Ne),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(su,"-$1").toLowerCase())):n.removeAttribute(e)}},ji=function(t,e,n,i,s,a){var o=new yn(t._pt,e,n,0,1,a?Ad:bd);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Kh={deg:1,rad:1,turn:1},sy={grid:1,flex:1},tr=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=yr.style,c=XS.test(e),u=t.tagName.toLowerCase()==="svg",h=(u?"client":"offset")+(c?"Width":"Height"),f=100,p=i==="px",m=i==="%",S,x,g,_;if(i===a||!s||Kh[i]||Kh[a])return s;if(a!=="px"&&!p&&(s=r(t,e,n,"px")),_=t.getCTM&&Dd(t),(m||a==="%")&&(Li[e]||~e.indexOf("adius")))return S=_?t.getBBox()[c?"width":"height"]:t[h],ze(m?s/S*f:s/100*S);if(o[c?"width":"height"]=f+(p?a:i),x=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!u?t:t.parentNode,_&&(x=(t.ownerSVGElement||{}).parentNode),(!x||x===Xi||!x.appendChild)&&(x=Xi.body),g=x._gsap,g&&m&&g.width&&c&&g.time===Un.time&&!g.uncache)return ze(s/g.width*f);if(m&&(e==="height"||e==="width")){var R=t.style[e];t.style[e]=f+i,S=t[h],R?t.style[e]=R:Qi(t,e)}else(m||a==="%")&&!sy[Fn(x,"display")]&&(o.position=Fn(t,"position")),x===t&&(o.position="static"),x.appendChild(yr),S=yr[h],x.removeChild(yr),o.position="absolute";return c&&m&&(g=Mr(x),g.time=Un.time,g.width=x[h]),ze(p?S*s/f:S&&s?f/S*s:0)},Ti=function(t,e,n,i){var s;return iu||bc(),e in ai&&e!=="transform"&&(e=ai[e],~e.indexOf(",")&&(e=e.split(",")[0])),Li[e]&&e!=="transform"?(s=Qs(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:so(Fn(t,Mn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ro[e]&&ro[e](t,e,n)||Fn(t,e)||Yf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?tr(t,e,s,n)+n:s},ay=function(t,e,n,i){if(!n||n==="none"){var s=ds(e,t,1),a=s&&Fn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Fn(t,"borderTopColor"))}var o=new yn(this._pt,t.style,e,0,1,Md),c=0,u=0,h,f,p,m,S,x,g,_,R,C,b,P;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Fn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(x=t.style[e],t.style[e]=i,i=Fn(t,e)||i,x?t.style[e]=x:Qi(t,e)),h=[n,i],fd(h),n=h[0],i=h[1],p=n.match(Kr)||[],P=i.match(Kr)||[],P.length){for(;f=Kr.exec(i);)g=f[0],R=i.substring(c,f.index),S?S=(S+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(S=1),g!==(x=p[u++]||"")&&(m=parseFloat(x)||0,b=x.substr((m+"").length),g.charAt(1)==="="&&(g=Qr(m,g)+b),_=parseFloat(g),C=g.substr((_+"").length),c=Kr.lastIndex-C.length,C||(C=C||Nn.units[e]||b,c===i.length&&(i+=C,o.e+=C)),b!==C&&(m=tr(t,e,x,C)||0),o._pt={_next:o._pt,p:R||u===1?R:",",s:m,c:_-m,m:S&&S<4||e==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=e==="display"&&i==="none"?Ad:bd;return Gf.test(i)&&(o.e=0),this._pt=o,o},$h={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},oy=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=$h[n]||n,e[1]=$h[i]||i,e.join(" ")},ly=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,c,u;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),u=s.length;--u>-1;)o=s[u],Li[o]&&(c=1,o=o==="transformOrigin"?Mn:Ne),Qi(n,o);c&&(Qi(n,Ne),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Qs(n,1),a.uncache=1,wd(i)))}},ro={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new yn(t._pt,e,n,0,0,ly);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Js=[1,0,0,1,0,0],Ld={},Ud=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Zh=function(t){var e=Fn(t,Ne);return Ud(e)?Js:e.substr(7).match(kf).map(ze)},au=function(t,e){var n=t._gsap||Mr(t),i=t.style,s=Zh(t),a,o,c,u;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Js:s):(s===Js&&!t.offsetParent&&t!==ts&&!n.svg&&(c=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(u=1,o=t.nextElementSibling,ts.appendChild(t)),s=Zh(t),c?i.display=c:Qi(t,"display"),u&&(o?a.insertBefore(t,o):a?a.appendChild(t):ts.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ac=function(t,e,n,i,s,a){var o=t._gsap,c=s||au(t,!0),u=o.xOrigin||0,h=o.yOrigin||0,f=o.xOffset||0,p=o.yOffset||0,m=c[0],S=c[1],x=c[2],g=c[3],_=c[4],R=c[5],C=e.split(" "),b=parseFloat(C[0])||0,P=parseFloat(C[1])||0,L,D,O,M;n?c!==Js&&(D=m*g-S*x)&&(O=b*(g/D)+P*(-x/D)+(x*R-g*_)/D,M=b*(-S/D)+P*(m/D)-(m*R-S*_)/D,b=O,P=M):(L=Pd(t),b=L.x+(~C[0].indexOf("%")?b/100*L.width:b),P=L.y+(~(C[1]||C[0]).indexOf("%")?P/100*L.height:P)),i||i!==!1&&o.smooth?(_=b-u,R=P-h,o.xOffset=f+(_*m+R*x)-_,o.yOffset=p+(_*S+R*g)-R):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=P,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Mn]="0px 0px",a&&(ji(a,o,"xOrigin",u,b),ji(a,o,"yOrigin",h,P),ji(a,o,"xOffset",f,o.xOffset),ji(a,o,"yOffset",p,o.yOffset)),t.setAttribute("data-svg-origin",b+" "+P)},Qs=function(t,e){var n=t._gsap||new _d(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(t),u=Fn(t,Mn)||"0",h,f,p,m,S,x,g,_,R,C,b,P,L,D,O,M,y,w,G,z,K,$,B,k,J,at,ht,gt,Nt,Bt,Jt,Qt;return h=f=p=x=g=_=R=C=b=0,m=S=1,n.svg=!!(t.getCTM&&Dd(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Ne]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Ne]!=="none"?c[Ne]:"")),i.scale=i.rotate=i.translate="none"),D=au(t,n.svg),n.svg&&(n.uncache?(J=t.getBBox(),u=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),Ac(t,k||u,!!k||n.originIsAbsolute,n.smooth!==!1,D)),P=n.xOrigin||0,L=n.yOrigin||0,D!==Js&&(w=D[0],G=D[1],z=D[2],K=D[3],h=$=D[4],f=B=D[5],D.length===6?(m=Math.sqrt(w*w+G*G),S=Math.sqrt(K*K+z*z),x=w||G?qr(G,w)*_r:0,R=z||K?qr(z,K)*_r+x:0,R&&(S*=Math.abs(Math.cos(R*es))),n.svg&&(h-=P-(P*w+L*z),f-=L-(P*G+L*K))):(Qt=D[6],Bt=D[7],ht=D[8],gt=D[9],Nt=D[10],Jt=D[11],h=D[12],f=D[13],p=D[14],O=qr(Qt,Nt),g=O*_r,O&&(M=Math.cos(-O),y=Math.sin(-O),k=$*M+ht*y,J=B*M+gt*y,at=Qt*M+Nt*y,ht=$*-y+ht*M,gt=B*-y+gt*M,Nt=Qt*-y+Nt*M,Jt=Bt*-y+Jt*M,$=k,B=J,Qt=at),O=qr(-z,Nt),_=O*_r,O&&(M=Math.cos(-O),y=Math.sin(-O),k=w*M-ht*y,J=G*M-gt*y,at=z*M-Nt*y,Jt=K*y+Jt*M,w=k,G=J,z=at),O=qr(G,w),x=O*_r,O&&(M=Math.cos(O),y=Math.sin(O),k=w*M+G*y,J=$*M+B*y,G=G*M-w*y,B=B*M-$*y,w=k,$=J),g&&Math.abs(g)+Math.abs(x)>359.9&&(g=x=0,_=180-_),m=ze(Math.sqrt(w*w+G*G+z*z)),S=ze(Math.sqrt(B*B+Qt*Qt)),O=qr($,B),R=Math.abs(O)>2e-4?O*_r:0,b=Jt?1/(Jt<0?-Jt:Jt):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Ud(Fn(t,Ne)),k&&t.setAttribute("transform",k))),Math.abs(R)>90&&Math.abs(R)<270&&(s?(m*=-1,R+=x<=0?180:-180,x+=x<=0?180:-180):(S*=-1,R+=R<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=p+a,n.scaleX=ze(m),n.scaleY=ze(S),n.rotation=ze(x)+o,n.rotationX=ze(g)+o,n.rotationY=ze(_)+o,n.skewX=R+o,n.skewY=C+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(u.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Mn]=so(u)),n.xOffset=n.yOffset=0,n.force3D=Nn.force3D,n.renderTransform=n.svg?uy:Cd?Id:cy,n.uncache=0,n},so=function(t){return(t=t.split(" "))[0]+" "+t[1]},dl=function(t,e,n){var i=on(e);return ze(parseFloat(e)+parseFloat(tr(t,"x",n+"px",i)))+i},cy=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Id(t,e)},dr="0deg",Us="0px",pr=") ",Id=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,u=n.rotation,h=n.rotationY,f=n.rotationX,p=n.skewX,m=n.skewY,S=n.scaleX,x=n.scaleY,g=n.transformPerspective,_=n.force3D,R=n.target,C=n.zOrigin,b="",P=_==="auto"&&t&&t!==1||_===!0;if(C&&(f!==dr||h!==dr)){var L=parseFloat(h)*es,D=Math.sin(L),O=Math.cos(L),M;L=parseFloat(f)*es,M=Math.cos(L),a=dl(R,a,D*M*-C),o=dl(R,o,-Math.sin(L)*-C),c=dl(R,c,O*M*-C+C)}g!==Us&&(b+="perspective("+g+pr),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(P||a!==Us||o!==Us||c!==Us)&&(b+=c!==Us||P?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+pr),u!==dr&&(b+="rotate("+u+pr),h!==dr&&(b+="rotateY("+h+pr),f!==dr&&(b+="rotateX("+f+pr),(p!==dr||m!==dr)&&(b+="skew("+p+", "+m+pr),(S!==1||x!==1)&&(b+="scale("+S+", "+x+pr),R.style[Ne]=b||"translate(0, 0)"},uy=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,u=n.skewX,h=n.skewY,f=n.scaleX,p=n.scaleY,m=n.target,S=n.xOrigin,x=n.yOrigin,g=n.xOffset,_=n.yOffset,R=n.forceCSS,C=parseFloat(a),b=parseFloat(o),P,L,D,O,M;c=parseFloat(c),u=parseFloat(u),h=parseFloat(h),h&&(h=parseFloat(h),u+=h,c+=h),c||u?(c*=es,u*=es,P=Math.cos(c)*f,L=Math.sin(c)*f,D=Math.sin(c-u)*-p,O=Math.cos(c-u)*p,u&&(h*=es,M=Math.tan(u-h),M=Math.sqrt(1+M*M),D*=M,O*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),P*=M,L*=M)),P=ze(P),L=ze(L),D=ze(D),O=ze(O)):(P=f,O=p,L=D=0),(C&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(C=tr(m,"x",a,"px"),b=tr(m,"y",o,"px")),(S||x||g||_)&&(C=ze(C+S-(S*P+x*D)+g),b=ze(b+x-(S*L+x*O)+_)),(i||s)&&(M=m.getBBox(),C=ze(C+i/100*M.width),b=ze(b+s/100*M.height)),M="matrix("+P+","+L+","+D+","+O+","+C+","+b+")",m.setAttribute("transform",M),R&&(m.style[Ne]=M)},hy=function(t,e,n,i,s){var a=360,o=Ke(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?_r:1),u=c-i,h=i+u+"deg",f,p;return o&&(f=s.split("_")[1],f==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),f==="cw"&&u<0?u=(u+a*Xh)%a-~~(u/a)*a:f==="ccw"&&u>0&&(u=(u-a*Xh)%a-~~(u/a)*a)),t._pt=p=new yn(t._pt,e,n,i,u,YS),p.e=h,p.u="deg",t._props.push(n),p},Jh=function(t,e){for(var n in e)t[n]=e[n];return t},fy=function(t,e,n){var i=Jh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,u,h,f,p,m,S;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ne]=e,o=Qs(n,1),Qi(n,Ne),n.setAttribute("transform",u)):(u=getComputedStyle(n)[Ne],a[Ne]=e,o=Qs(n,1),a[Ne]=u);for(c in Li)u=i[c],h=o[c],u!==h&&s.indexOf(c)<0&&(m=on(u),S=on(h),f=m!==S?tr(n,c,u,S):parseFloat(u),p=parseFloat(h),t._pt=new yn(t._pt,o,c,f,p-f,Ec),t._pt.u=S||0,t._props.push(c));Jh(o,i)};Sn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});ro[t>1?"border"+r:r]=function(o,c,u,h,f){var p,m;if(arguments.length<4)return p=a.map(function(S){return Ti(o,S,u)}),m=p.join(" "),m.split(p[0]).length===5?p[0]:m;p=(h+"").split(" "),m={},a.forEach(function(S,x){return m[S]=p[x]=p[x]||p[(x-1)/2|0]}),o.init(c,m,f)}});var Fd={name:"css",register:bc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,c=n.vars.startAt,u,h,f,p,m,S,x,g,_,R,C,b,P,L,D,O,M;iu||bc(),this.styles=this.styles||Rd(t),O=this.styles.props,this.tween=n;for(x in e)if(x!=="autoRound"&&(h=e[x],!(Pn[x]&&gd(x,e,n,i,t,s)))){if(m=typeof h,S=ro[x],m==="function"&&(h=h.call(n,i,t,s),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=Ks(h)),S)S(this,t,x,h,n)&&(D=1);else if(x.substr(0,2)==="--")u=(getComputedStyle(t).getPropertyValue(x)+"").trim(),h+="",$i.lastIndex=0,$i.test(u)||(g=on(u),_=on(h),_?g!==_&&(u=tr(t,x,u,_)+_):g&&(h+=g)),this.add(o,"setProperty",u,h,i,s,0,0,x),a.push(x),O.push(x,0,o[x]);else if(m!=="undefined"){if(c&&x in c?(u=typeof c[x]=="function"?c[x].call(n,i,t,s):c[x],Ke(u)&&~u.indexOf("random(")&&(u=Ks(u)),on(u+"")||u==="auto"||(u+=Nn.units[x]||on(Ti(t,x))||""),(u+"").charAt(1)==="="&&(u=Ti(t,x))):u=Ti(t,x),p=parseFloat(u),R=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),R&&(h=h.substr(2)),f=parseFloat(h),x in ai&&(x==="autoAlpha"&&(p===1&&Ti(t,"visibility")==="hidden"&&f&&(p=0),O.push("visibility",0,o.visibility),ji(this,o,"visibility",p?"inherit":"hidden",f?"inherit":"hidden",!f)),x!=="scale"&&x!=="transform"&&(x=ai[x],~x.indexOf(",")&&(x=x.split(",")[0]))),C=x in Li,C){if(this.styles.save(x),M=h,m==="string"&&h.substring(0,6)==="var(--"){if(h=Fn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var y=t.style.perspective;t.style.perspective=h,h=Fn(t,"perspective"),y?t.style.perspective=y:Qi(t,"perspective")}f=parseFloat(h)}if(b||(P=t._gsap,P.renderTransform&&!e.parseTransform||Qs(t,e.parseTransform),L=e.smoothOrigin!==!1&&P.smooth,b=this._pt=new yn(this._pt,o,Ne,0,1,P.renderTransform,P,0,-1),b.dep=1),x==="scale")this._pt=new yn(this._pt,P,"scaleY",P.scaleY,(R?Qr(P.scaleY,R+f):f)-P.scaleY||0,Ec),this._pt.u=0,a.push("scaleY",x),x+="X";else if(x==="transformOrigin"){O.push(Mn,0,o[Mn]),h=oy(h),P.svg?Ac(t,h,0,L,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==P.zOrigin&&ji(this,P,"zOrigin",P.zOrigin,_),ji(this,o,x,so(u),so(h)));continue}else if(x==="svgOrigin"){Ac(t,h,1,L,0,this);continue}else if(x in Ld){hy(this,P,x,p,R?Qr(p,R+h):h);continue}else if(x==="smoothOrigin"){ji(this,P,"smooth",P.smooth,h);continue}else if(x==="force3D"){P[x]=h;continue}else if(x==="transform"){fy(this,h,t);continue}}else x in o||(x=ds(x)||x);if(C||(f||f===0)&&(p||p===0)&&!jS.test(h)&&x in o)g=(u+"").substr((p+"").length),f||(f=0),_=on(h)||(x in Nn.units?Nn.units[x]:g),g!==_&&(p=tr(t,x,u,_)),this._pt=new yn(this._pt,C?P:o,x,p,(R?Qr(p,R+f):f)-p,!C&&(_==="px"||x==="zIndex")&&e.autoRound!==!1?$S:Ec),this._pt.u=_||0,C&&M!==h?(this._pt.b=u,this._pt.e=M,this._pt.r=KS):g!==_&&_!=="%"&&(this._pt.b=u,this._pt.r=qS);else if(x in o)ay.call(this,t,x,u,R?R+h:h);else if(x in t)this.add(t,x,u||t[x],R?R+h:h,i,s);else if(x!=="parseTransform"){Yc(x,h);continue}C||(x in o?O.push(x,0,o[x]):typeof t[x]=="function"?O.push(x,2,t[x]()):O.push(x,1,u||t[x])),a.push(x)}}D&&Ed(this)},render:function(t,e){if(e.tween._time||!ru())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ti,aliases:ai,getSetter:function(t,e,n){var i=ai[e];return i&&i.indexOf(",")<0&&(e=i),e in Li&&e!==Mn&&(t._gsap.x||Ti(t,"x"))?n&&Wh===n?e==="scale"?ty:QS:(Wh=n||{})&&(e==="scale"?ey:ny):t.style&&!Wc(t.style[e])?ZS:~e.indexOf("-")?JS:eu(t,e)},core:{_removeProperty:Qi,_getMatrix:au}};En.utils.checkPrefix=ds;En.core.getStyleSaver=Rd;(function(r,t,e,n){var i=Sn(r+","+t+","+e,function(s){Li[s]=1});Sn(t,function(s){Nn.units[s]="deg",Ld[s]=1}),ai[i[13]]=r+","+t,Sn(n,function(s){var a=s.split(":");ai[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Nn.units[r]="px"});En.registerPlugin(Fd);var pn=En.registerPlugin(Fd)||En;pn.core.Tween;const dy={THREE_CARD:{name:"三牌阵",positions:[{x:-6,y:0,z:-12,rotation:0,name:"过去"},{x:0,y:0,z:-12,rotation:0,name:"现在"},{x:6,y:0,z:-12,rotation:0,name:"未来"}],connections:[[0,1],[1,2]]},CELTIC_CROSS:{name:"凯尔特十字阵",positions:[{x:0,y:0,z:-12,rotation:0,name:"现状"},{x:0,y:0,z:-11.8,rotation:Math.PI/2,name:"障碍"},{x:0,y:4,z:-12,rotation:0,name:"过去"},{x:0,y:-4,z:-12,rotation:0,name:"未来"},{x:-4,y:0,z:-12,rotation:0,name:"潜意识"},{x:4,y:0,z:-12,rotation:0,name:"外在影响"},{x:8,y:4,z:-12,rotation:0,name:"建议"},{x:8,y:1,z:-12,rotation:0,name:"环境"},{x:8,y:-2,z:-12,rotation:0,name:"希望与恐惧"},{x:8,y:-5,z:-12,rotation:0,name:"结果"}],connections:[[0,1],[0,2],[0,3],[0,4],[0,5],[5,6],[6,7],[7,8],[8,9]]}};let ns=null,Yi=[],ta=[],ps=!1;function Qh(){return ps}function py(r,t,e="CELTIC_CROSS"){if(ps)return;ns=dy[e],ps=!0;const s=[...[...t.children]].sort(()=>Math.random()-.5).slice(0,ns.positions.length);Yi=[],s.forEach((a,o)=>{a.parent.remove(a),r.attach(a),a.userData.isAnimating=!0,Yi.push(a);const c=my(a.position,o);_y(a,c,o,ns.positions[o])}),setTimeout(()=>{vy(r)},s.length*200+2e3)}function my(r,t){const e=[];for(let i=0;i<10;i++){const s=i/9,a=15*(1-s*.7),o=s*Math.PI*6+t*.5,c=Math.sin(s*Math.PI*4)*5*(1-s),u=Math.cos(s*Math.PI*3)*10*(1-s);e.push(new q(Math.sin(o)*a+(Math.random()-.5)*5,c+(Math.random()-.5)*3,Math.cos(o)*a+u))}return e}function _y(r,t,e,n){const i=new Am(t),s=3+e*.2,a=performance.now();function o(){const c=(performance.now()-a)/1e3,u=Math.min(c/s,1),h=pn.parseEase("power2.inOut")(u),f=i.getPoint(h);r.position.copy(f),r.rotation.x=Math.sin(c*5)*.5,r.rotation.y=Math.cos(c*4)*Math.PI,r.rotation.z=Math.sin(c*3)*.3,u<1?requestAnimationFrame(o):gy(r,n,e)}o()}function gy(r,t,e){pn.to(r.position,{x:t.x,y:t.y,z:t.z,duration:1,ease:"power2.out",delay:e*.1}),pn.to(r.rotation,{x:0,y:t.rotation||Math.PI,z:0,duration:1,ease:"power2.out",delay:e*.1,onComplete:()=>{r.userData.isAnimating=!1}})}function vy(r){if(Nd(r),!ns)return;const t=new Pm({color:65535,linewidth:2,dashSize:.3,gapSize:.15,transparent:!0,opacity:.8});ns.connections.forEach(([e,n])=>{if(Yi[e]&&Yi[n]){const i=[Yi[e].position.clone(),Yi[n].position.clone()],s=new Jn().setFromPoints(i),a=new Mm(s,t);a.computeLineDistances(),a.userData.isConnectionLine=!0,ta.push(a),r.add(a),pn.from(a.material,{opacity:0,duration:1,ease:"power2.in"})}})}function Nd(r){ta.forEach(t=>{r.remove(t),t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()}),ta=[]}function xy(r){if(!ps)return;Nd(window.sceneInstance);const t=[...Yi];Yi=[],ns=null;let e=0;const n=t.length;t.forEach((i,s)=>{i.userData.isAnimating=!0;const a=i.userData.originalPos,o=i.userData.originalRot;pn.to(i.position,{x:0,y:0,z:0,duration:.5,ease:"power2.in",delay:s*.05,onComplete:()=>{r.attach(i),pn.to(i.position,{x:a.x,y:a.y,z:a.z,duration:1,ease:"power2.out",onComplete:()=>{i.userData.isAnimating=!1,e++,e===n&&(ps=!1)}}),pn.to(i.rotation,{x:o.x,y:o.y,z:o.z,duration:1})}}),pn.to(i.rotation,{x:Math.PI*4,y:Math.PI*4,z:Math.PI*2,duration:.5,ease:"power2.in"})})}function Sy(){ps&&ta.length>0&&ta.forEach(r=>{r.material.opacity=.6+Math.sin(Date.now()*.003)*.2})}let qi=null,pl=0;const yy=.95,My=.005;let ml=!1,_l=!1;const tf=new Vm,gl=new fe;function Ey(r,t,e){if(Ee.isSpreadGesture&&!ml&&(ml=!0,Qh()?xy(e):py(r,e),setTimeout(()=>{ml=!1},3e3)),Sy(),Qh())return;Ee.isPresent&&(pl+=Ee.velocity*My),pl*=yy,e.rotation.y+=pl,gl.x=Ee.cursor.x,gl.y=Ee.cursor.y,tf.setFromCamera(gl,t);const n=tf.intersectObjects(e.children,!1);e.children.forEach(a=>{a!==qi&&pn.to(a.scale,{x:1,y:1,z:1,duration:.3})});let i=null;n.length>0&&(i=n[0].object,i!==qi&&pn.to(i.scale,{x:1.2,y:1.2,z:1.2,duration:.3}));const s=document.getElementById("cursor-visual");if(s)if(Ee.isPresent){s.style.opacity="1";const a=(Ee.cursor.x+1)/2*window.innerWidth,o=(-Ee.cursor.y+1)/2*window.innerHeight;s.style.left=`${a}px`,s.style.top=`${o}px`,s.style.transform="translate(-50%, -50%)",s.style.backgroundColor=Ee.isPinching?"red":"gold"}else s.style.opacity="0";Ee.isPinching&&i&&!qi?Ty(i):!Ee.isPinching&&qi&&by()}function Ty(r){r.userData.isAnimating||(qi=r,r.userData.isAnimating=!0,r.parent.remove(r),r.parent?r.parent:window.sceneInstance,window.sceneInstance.attach(r),pn.to(r.position,{x:0,y:0,z:-10,duration:1,ease:"power2.out"}),pn.to(r.rotation,{x:0,y:Math.PI,z:0,duration:1}))}function by(){if(!qi||_l)return;_l=!0;const r=qi;qi=null,window.cardGroupInstance.attach(r),pn.to(r.position,{x:r.userData.originalPos.x,y:r.userData.originalPos.y,z:r.userData.originalPos.z,duration:1,ease:"power2.inOut",onComplete:()=>{r.userData.isAnimating=!1,_l=!1}}),pn.to(r.rotation,{x:r.userData.originalRot.x,y:r.userData.originalRot.y,z:r.userData.originalRot.z,duration:1})}async function Ay(){const r=document.getElementById("loading"),t=document.createElement("div");t.id="cursor-visual",t.style.position="absolute",t.style.width="20px",t.style.height="20px",t.style.borderRadius="50%",t.style.border="2px solid white",t.style.backgroundColor="gold",t.style.transform="translate(-50%, -50%)",t.style.pointerEvents="none",t.style.zIndex="1000",t.style.transition="background-color 0.2s, opacity 0.2s",t.style.opacity="0",document.body.appendChild(t);const{scene:e,camera:n,renderer:i}=Ox();window.sceneInstance=e;const s=Vx(e);window.cardGroupInstance=s;try{await Xx(),r.style.opacity=0}catch(o){r.innerText="无法访问摄像头，请允许权限。",console.error(o)}function a(){requestAnimationFrame(a),Ey(e,n,s),i.render(e,n)}a()}Ay();
