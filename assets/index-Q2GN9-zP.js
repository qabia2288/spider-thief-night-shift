(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`attached`,t=1e3,n=1001,r=1002,i=1003,a=1004,o=1005,s=1006,c=1007,l=1008,u=1009,d=1010,f=1011,p=1012,m=1013,h=1014,g=1015,_=1016,v=1017,y=1018,b=1020,x=35902,S=35899,C=1021,w=1022,T=1023,E=1026,D=1027,O=1028,k=1029,A=1030,j=1031,M=1033,N=33776,P=33777,ee=33778,F=33779,te=35840,I=35841,ne=35842,re=35843,ie=36196,ae=37492,L=37496,R=37488,oe=37489,se=37490,ce=37491,le=37808,ue=37809,de=37810,fe=37811,pe=37812,me=37813,he=37814,ge=37815,_e=37816,z=37817,ve=37818,ye=37819,be=37820,xe=37821,Se=36492,Ce=36494,we=36495,Te=36283,Ee=36284,De=36285,Oe=36286,B=2200,ke=2201,Ae=2202,je=2300,V=2301,Me=2302,H=2303,U=2400,Ne=2401,Pe=2402,Fe=2500,Ie=2501,Le=3200,Re=`srgb`,ze=`srgb-linear`,Be=`linear`,Ve=`srgb`,He=7680,Ue=35044,We=2e3;function Ge(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ke(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Je(){let e=qe(`canvas`);return e.style.display=`block`,e}var Ye={};function Xe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ze(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function W(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function G(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Qe(...e){let t=e.join(` `);t in Ye||(Ye[t]=!0,W(...e))}function $e(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var et={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},tt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},nt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),rt=1234567,it=Math.PI/180,at=180/Math.PI;function ot(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(nt[e&255]+nt[e>>8&255]+nt[e>>16&255]+nt[e>>24&255]+`-`+nt[t&255]+nt[t>>8&255]+`-`+nt[t>>16&15|64]+nt[t>>24&255]+`-`+nt[n&63|128]+nt[n>>8&255]+`-`+nt[n>>16&255]+nt[n>>24&255]+nt[r&255]+nt[r>>8&255]+nt[r>>16&255]+nt[r>>24&255]).toLowerCase()}function st(e,t,n){return Math.max(t,Math.min(n,e))}function ct(e,t){return(e%t+t)%t}function lt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ut(e,t,n){return e===t?0:(n-e)/(t-e)}function dt(e,t,n){return(1-n)*e+n*t}function ft(e,t,n,r){return dt(e,t,1-Math.exp(-n*r))}function pt(e,t=1){return t-Math.abs(ct(e,t*2)-t)}function mt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ht(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function gt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function _t(e,t){return e+Math.random()*(t-e)}function vt(e){return e*(.5-Math.random())}function yt(e){e!==void 0&&(rt=e);let t=rt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bt(e){return e*it}function xt(e){return e*at}function St(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Ct(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function wt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Tt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:W(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Et(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Ot={DEG2RAD:it,RAD2DEG:at,generateUUID:ot,clamp:st,euclideanModulo:ct,mapLinear:lt,inverseLerp:ut,lerp:dt,damp:ft,pingpong:pt,smoothstep:mt,smootherstep:ht,randInt:gt,randFloat:_t,randFloatSpread:vt,seededRandom:yt,degToRad:bt,radToDeg:xt,isPowerOfTwo:St,ceilPowerOfTwo:Ct,floorPowerOfTwo:wt,setQuaternionFromProperEuler:Tt,normalize:Dt,denormalize:Et},kt=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},At=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:W(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jt.copy(this).projectOnVector(e),this.sub(jt)}reflect(e){return this.sub(jt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jt=new K,Mt=new At,Nt=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Qe(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Pt.makeScale(e,t)),this}rotate(e){return Qe(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Pt.makeRotation(-e)),this}translate(e,t){return Qe(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Pt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Pt=new Nt,Ft=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),It=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lt(){let e={enabled:!0,workingColorSpace:ze,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=zt(e.r),e.g=zt(e.g),e.b=zt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Bt(e.r),e.g=Bt(e.g),e.b=Bt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Be:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Qe(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Qe(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[ze]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:Ft,fromXYZ:It,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:Ft,fromXYZ:It,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),e}var Rt=Lt();function zt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Bt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Vt,Ht=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vt===void 0&&(Vt=qe(`canvas`)),Vt.width=e.width,Vt.height=e.height;let t=Vt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Vt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=zt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(zt(t[e]/255)*255):t[e]=zt(t[e]);return{data:t,width:e.width,height:e.height}}return W(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ut=0,Wt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ut++}),this.uuid=ot(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Gt(r[t].image)):e.push(Gt(r[t]))}else e=Gt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Gt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ht.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(W(`Texture: Unable to serialize Texture.`),{})}var Kt=class extends Wt{constructor(e=null){Qe(`Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.`),super(e),this.isSource=!0}},qt=0,Jt=new K,Yt=class e extends tt{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=n,a=n,o=s,c=l,d=T,f=u,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qt++}),this.uuid=ot(),this.name=``,this.source=new Wt(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jt).x}get height(){return this.source.getSize(Jt).y}get depth(){return this.source.getSize(Jt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){W(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?W(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t:e.x-=Math.floor(e.x);break;case n:e.x=e.x<0?0:1;break;case r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case t:e.y-=Math.floor(e.y);break;case n:e.y=e.y<0?0:1;break;case r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null,Yt.DEFAULT_MAPPING=300,Yt.DEFAULT_ANISOTROPY=1;var Xt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zt=class extends tt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:s,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];let r=new Yt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:s,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Wt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Qt=class extends Zt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$t=class extends Yt{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},en=class extends Yt{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},tn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/nn.setFromMatrixColumn(e,0).length(),i=1/nn.setFromMatrixColumn(e,1).length(),a=1/nn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(an,e,on)}lookAt(e,t,n){let r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),sn.crossVectors(n,ln),sn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),sn.crossVectors(n,ln)),sn.normalize(),cn.crossVectors(ln,sn),r[0]=sn.x,r[4]=cn.x,r[8]=ln.x,r[1]=sn.y,r[5]=cn.y,r[9]=ln.y,r[2]=sn.z,r[6]=cn.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],ee=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*ee,i[12]=a*w+o*O+s*M+c*F,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*ee,i[13]=l*w+u*O+d*M+f*F,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*ee,i[14]=p*w+m*O+h*M+g*F,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*ee,i[15]=_*w+v*O+y*M+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=nn.set(r[0],r[1],r[2]).length(),o=nn.set(r[4],r[5],r[6]).length(),s=nn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),rn.copy(this);let c=1/a,l=1/o,u=1/s;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=l,rn.elements[5]*=l,rn.elements[6]*=l,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,t.setFromRotationMatrix(rn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},nn=new K,rn=new tn,an=new K(0,0,0),on=new K(1,1,1),sn=new K,cn=new K,ln=new K,un=new tn,dn=new At,fn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-st(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(st(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:W(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return un.makeRotationFromQuaternion(e),this.setFromRotationMatrix(un,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dn.setFromEuler(this),this.setFromQuaternion(dn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER=`XYZ`;var pn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},mn=0,hn=new K,gn=new At,_n=new tn,vn=new K,yn=new K,bn=new K,xn=new At,Sn=new K(1,0,0),Cn=new K(0,1,0),wn=new K(0,0,1),Tn={type:`added`},En={type:`removed`},Dn={type:`childadded`,child:null},On={type:`childremoved`,child:null},kn=class e extends tt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mn++}),this.uuid=ot(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new fn,r=new At,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tn},normalMatrix:{value:new Nt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.multiply(gn),this}rotateOnWorldAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.premultiply(gn),this}rotateX(e){return this.rotateOnAxis(Sn,e)}rotateY(e){return this.rotateOnAxis(Cn,e)}rotateZ(e){return this.rotateOnAxis(wn,e)}translateOnAxis(e,t){return hn.copy(e).applyQuaternion(this.quaternion),this.position.add(hn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sn,e)}translateY(e){return this.translateOnAxis(Cn,e)}translateZ(e){return this.translateOnAxis(wn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vn.copy(e):vn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),yn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(yn,vn,this.up):_n.lookAt(vn,yn,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),gn.setFromRotationMatrix(_n),this.quaternion.premultiply(gn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(G(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null):G(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yn,e,bn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yn,xn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};kn.DEFAULT_UP=new K(0,1,0),kn.DEFAULT_MATRIX_AUTO_UPDATE=!0,kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=class extends kn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},jn={type:`move`},Mn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new An;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Fn={h:0,s:0,l:0};function In(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var q=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Re){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Rt.workingColorSpace){if(e=ct(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=In(i,r,e+1/3),this.g=In(i,r,e),this.b=In(i,r,e-1/3)}return Rt.colorSpaceToWorking(this,r),this}setStyle(e,t=Re){function n(t){t!==void 0&&parseFloat(t)<1&&W(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:W(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);W(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Re){let n=Nn[e.toLowerCase()];return n===void 0?W(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zt(e.r),this.g=zt(e.g),this.b=zt(e.b),this}copyLinearToSRGB(e){return this.r=Bt(e.r),this.g=Bt(e.g),this.b=Bt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Re){return Rt.workingToColorSpace(Ln.copy(this),e),Math.round(st(Ln.r*255,0,255))*65536+Math.round(st(Ln.g*255,0,255))*256+Math.round(st(Ln.b*255,0,255))}getHexString(e=Re){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,r=Ln.g,i=Ln.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Re){Rt.workingToColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,r=Ln.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Fn);let n=dt(Pn.h,Fn.h,t),r=dt(Pn.s,Fn.s,t),i=dt(Pn.l,Fn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new q;q.NAMES=Nn;var Rn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new q(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zn=class extends kn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new K,Vn=new K,Hn=new K,Un=new K,Wn=new K,Gn=new K,Kn=new K,qn=new K,Jn=new K,Yn=new K,Xn=new Xt,Zn=new Xt,Qn=new Xt,$n=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Bn.subVectors(r,t),Vn.subVectors(n,t),Hn.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(Vn),s=Bn.dot(Hn),c=Vn.dot(Vn),l=Vn.dot(Hn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)!==null&&Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Un)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Un.x),s.addScaledVector(a,Un.y),s.addScaledVector(o,Un.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xn.setScalar(0),Zn.setScalar(0),Qn.setScalar(0),Xn.fromBufferAttribute(e,t),Zn.fromBufferAttribute(e,n),Qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xn,i.x),a.addScaledVector(Zn,i.y),a.addScaledVector(Qn,i.z),a}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),Vn.subVectors(e,t),Bn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wn.subVectors(r,n),Gn.subVectors(i,n),qn.subVectors(e,n);let s=Wn.dot(qn),c=Gn.dot(qn);if(s<=0&&c<=0)return t.copy(n);Jn.subVectors(e,r);let l=Wn.dot(Jn),u=Gn.dot(Jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Wn,a);Yn.subVectors(e,i);let f=Wn.dot(Yn),p=Gn.dot(Yn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,nr):nr.fromBufferAttribute(r,t),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),dr.subVectors(this.max,ur),ir.subVectors(e.a,ur),ar.subVectors(e.b,ur),or.subVectors(e.c,ur),sr.subVectors(ar,ir),cr.subVectors(or,ar),lr.subVectors(ir,or);let t=[0,-sr.z,sr.y,0,-cr.z,cr.y,0,-lr.z,lr.y,sr.z,0,-sr.x,cr.z,0,-cr.x,lr.z,0,-lr.x,-sr.y,sr.x,0,-cr.y,cr.x,0,-lr.y,lr.x,0];return!mr(t,ir,ar,or,dr)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ir,ar,or,dr))?!1:(fr.crossVectors(sr,cr),t=[fr.x,fr.y,fr.z],mr(t,ir,ar,or,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new K,new K,new K,new K,new K,new K,new K,new K],nr=new K,rr=new er,ir=new K,ar=new K,or=new K,sr=new K,cr=new K,lr=new K,ur=new K,dr=new K,fr=new K,pr=new K;function mr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){pr.fromArray(e,a);let o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),s=t.dot(pr),c=n.dot(pr),l=r.dot(pr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var hr=new K,gr=new kt,_r=0,vr=class extends tt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_r++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ue,this.updateRanges=[],this.gpuType=g,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix4(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyNormalMatrix(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.transformDirection(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Et(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Et(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Et(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Et(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Et(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},yr=class extends vr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},br=class extends vr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},xr=class extends vr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sr=new er,Cr=new K,wr=new K,Tr=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Sr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Cr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(wr)),this.expandByPoint(Cr.copy(e.center).sub(wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Er=0,Dr=new tn,Or=new kn,kr=new K,Ar=new er,jr=new er,Mr=new K,Nr=class e extends tt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Er++}),this.uuid=ot(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ge(e)?br:yr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Nt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dr.makeRotationFromQuaternion(e),this.applyMatrix4(Dr),this}rotateX(e){return Dr.makeRotationX(e),this.applyMatrix4(Dr),this}rotateY(e){return Dr.makeRotationY(e),this.applyMatrix4(Dr),this}rotateZ(e){return Dr.makeRotationZ(e),this.applyMatrix4(Dr),this}translate(e,t,n){return Dr.makeTranslation(e,t,n),this.applyMatrix4(Dr),this}scale(e,t,n){return Dr.makeScale(e,t,n),this.applyMatrix4(Dr),this}lookAt(e){return Or.lookAt(e),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new xr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&W(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)G(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ar.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(this.boundingBox.min,Ar.min),this.boundingBox.expandByPoint(Mr),Mr.addVectors(this.boundingBox.max,Ar.max),this.boundingBox.expandByPoint(Mr)):(this.boundingBox.expandByPoint(Ar.min),this.boundingBox.expandByPoint(Ar.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&G(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)G(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);else if(e){let n=this.boundingSphere.center;if(Ar.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(Ar.min,jr.min),Ar.expandByPoint(Mr),Mr.addVectors(Ar.max,jr.max),Ar.expandByPoint(Mr)):(Ar.expandByPoint(jr.min),Ar.expandByPoint(jr.max))}Ar.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Mr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Mr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Mr.fromBufferAttribute(a,t),o&&(kr.fromBufferAttribute(e,t),Mr.add(kr)),r=Math.max(r,n.distanceToSquared(Mr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&G(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){G(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new vr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let c=new K,l=new K,u=new K,d=new kt,f=new kt,p=new kt,m=new K,h=new K;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new K,y=new K,b=new K,x=new K;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new vr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mr.fromBufferAttribute(e,t),Mr.normalize(),e.setXYZ(t,Mr.x,Mr.y,Mr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new vr(a,r,i)}if(this.index===null)return W(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Pr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ue,this.updateRanges=[],this.version=0,this.uuid=ot()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ot()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ot()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Fr=new K,Ir=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix4(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyNormalMatrix(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.transformDirection(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Et(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Et(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Et(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Et(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Et(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),i=Dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Xe(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new vr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xe(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Lr=new K,Rr=new K,zr=new Nt,Br=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Lr.subVectors(n,t).cross(Rr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Lr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zr.getNormalMatrix(e),r=this.coplanarPoint(Lr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Vr=0,Hr=class extends tt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vr++}),this.uuid=ot(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new q(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=He,this.stencilZFail=He,this.stencilZPass=He,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){W(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?W(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new q().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Br().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new kt().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Ur=new K,Wr=new K,Gr=new K,Kr=new K,qr=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ur.copy(this.origin).addScaledVector(this.direction,t),Ur.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Wr.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(Wr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Gr),o=Kr.dot(this.direction),s=-Kr.dot(Gr),c=Kr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Wr).addScaledVector(Gr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ur.subVectors(e.center,this.origin);let n=Ur.dot(this.direction),r=Ur.dot(Ur)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ur)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,ee=C/w,F=1/w,te=T-P*D,I=E-ee*D,ne=O-P*A,re=k-ee*A,ie=j-P*N,ae=M-ee*N,L=ie*re-ae*ne,R=te*ae-I*ie,oe=ne*I-re*te;if(r){if(L<0||R<0||oe<0)return null}else if((L<0||R<0||oe<0)&&(L>0||R>0||oe>0))return null;let se=L+R+oe;if(se===0)return null;let ce=F*(L*D+R*A+oe*N);return(se>0?ce<0:ce>0)?null:this.at(ce/se,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jr=class extends Hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yr=new tn,Xr=new qr,Zr=new Tr,Qr=new K,$r=new K,ei=new K,ti=new K,ni=new K,ri=new K,ii=new K,ai=new K,J=class extends kn{constructor(e=new Nr,t=new Jr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ri.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ni.fromBufferAttribute(s,e),a?ri.addScaledVector(ni,r):ri.addScaledVector(ni.sub(t),r))}t.add(ri)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Xr.copy(e.ray).recast(e.near),Zr.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Zr,Qr)===null||Xr.origin.distanceToSquared(Qr)>(e.far-e.near)**2)||(Yr.copy(i).invert(),Xr.copy(e.ray).applyMatrix4(Yr),(n.boundingBox===null||Xr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=si(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=si(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=si(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=si(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function oi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ai.copy(s),ai.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ai);return l<n.near||l>n.far?null:{distance:l,point:ai.clone(),object:e}}function si(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,$r),e.getVertexPosition(c,ei),e.getVertexPosition(l,ti);let u=oi(e,t,n,r,$r,ei,ti,ii);if(u){let e=new K;$n.getBarycoord(ii,$r,ei,ti,e),i&&(u.uv=$n.getInterpolatedAttribute(i,s,c,l,e,new kt)),a&&(u.uv1=$n.getInterpolatedAttribute(a,s,c,l,e,new kt)),o&&(u.normal=$n.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};$n.getNormal($r,ei,ti,t.normal),u.face=t,u.barycoord=e}return u}var ci=new Xt,li=new Xt,ui=new Xt,di=new Xt,fi=new tn,pi=new K,mi=new Tr,hi=new tn,gi=new qr,_i=class extends J{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=e,this.bindMatrix=new tn,this.bindMatrixInverse=new tn,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new er),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,pi),this.boundingBox.expandByPoint(pi)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,pi),this.boundingSphere.expandByPoint(pi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mi.copy(this.boundingSphere),mi.applyMatrix4(r),e.ray.intersectsSphere(mi)!==!1&&(hi.copy(r).invert(),gi.copy(e.ray).applyMatrix4(hi),(this.boundingBox===null||gi.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,gi)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Xt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():W(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;li.fromBufferAttribute(r.attributes.skinIndex,e),ui.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(ci.copy(t),t.set(0,0,0,0)):(ci.set(...t,1),t.set(0,0,0)),ci.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=ui.getComponent(e);if(r!==0){let i=li.getComponent(e);fi.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(di.copy(ci).applyMatrix4(fi),r)}}return t.isVector4&&(t.w=ci.w),t.applyMatrix4(this.bindMatrixInverse)}},vi=class extends kn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},yi=class extends Yt{constructor(e=null,t=1,n=1,r,a,o,s,c,l=i,u=i,d,f){super(null,o,s,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bi=new tn,xi=new tn,Si=class e{constructor(e=[],t=[]){this.uuid=ot(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){W(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new tn)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new tn;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:xi;bi.multiplyMatrices(i,t[r]),bi.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new yi(t,e,e,T,g);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(W(`Skeleton: No bone found with UUID:`,r),i=new vi),this.bones.push(i),this.boneInverses.push(new tn().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Ci=class extends vr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wi=new tn,Ti=new tn,Ei=[],Di=new er,Oi=new tn,ki=new J,Ai=new Tr,ji=class extends J{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ci(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Oi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),Di.copy(e.boundingBox).applyMatrix4(wi),this.boundingBox.union(Di)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),Ai.copy(e.boundingSphere).applyMatrix4(wi),this.boundingSphere.union(Ai)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ki.geometry=this.geometry,ki.material=this.material,ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ai.copy(this.boundingSphere),Ai.applyMatrix4(n),e.ray.intersectsSphere(Ai)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,wi),Ti.multiplyMatrices(n,wi),ki.matrixWorld=Ti,ki.raycast(e,Ei);for(let e=0,n=Ei.length;e<n;e++){let n=Ei[e];n.instanceId=i,n.object=this,t.push(n)}Ei.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ci(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new yi(new Float32Array(r*this.count),r,this.count,O,g));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Mi=new Tr,Ni=new kt(.5,.5),Pi=new K,Fi=class{constructor(e=new Br,t=new Br,n=new Br,r=new Br,i=new Br,a=new Br){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=We,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476+Ni.distanceTo(e.center),Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Pi.x=r.normal.x>0?e.max.x:e.min.x,Pi.y=r.normal.y>0?e.max.y:e.min.y,Pi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ii=class extends Hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new q(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Li=new K,Ri=new K,zi=new tn,Bi=new qr,Vi=new Tr,Hi=new K,Ui=new K,Wi=class extends kn{constructor(e=new Nr,t=new Ii){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Li.fromBufferAttribute(t,e-1),Ri.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Li.distanceTo(Ri);e.setAttribute(`lineDistance`,new xr(n,1))}else W(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere),Vi.applyMatrix4(r),Vi.radius+=i,e.ray.intersectsSphere(Vi)===!1)return;zi.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(zi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Gi(this,e,Bi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Gi(this,e,Bi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Gi(this,e,Bi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Gi(this,e,Bi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Gi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Li.fromBufferAttribute(s,i),Ri.fromBufferAttribute(s,a),n.distanceSqToSegment(Li,Ri,Hi,Ui)>r)return;Hi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Hi);if(!(c<t.near||c>t.far))return{distance:c,point:Ui.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Ki=new K,qi=new K,Ji=class extends Wi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Ki.fromBufferAttribute(t,e),qi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Ki.distanceTo(qi);e.setAttribute(`lineDistance`,new xr(n,1))}else W(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Yi=class extends Wi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},Xi=class extends Hr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zi=new tn,Qi=new qr,$i=new Tr,ea=new K,ta=class extends kn{constructor(e=new Nr,t=new Xi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(r),$i.radius+=i,e.ray.intersectsSphere($i)===!1)return;Zi.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Zi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ea.fromBufferAttribute(l,n),na(ea,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ea.fromBufferAttribute(l,a),na(ea,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function na(e,t,n,r,i,a,o){let s=Qi.distanceSqToPoint(e);if(s<n){let n=new K;Qi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ra=class extends Yt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ia=class extends Yt{constructor(e,t,n=h,r,a,o,s=i,c=i,l,u=E,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},aa=class extends ia{constructor(e,t=h,n=301,r,a,o=i,s=i,c,l=E){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},oa=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},sa=class e extends Nr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new xr(c,3)),this.setAttribute(`normal`,new xr(l,3)),this.setAttribute(`uv`,new xr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ca=class e extends Nr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new xr(u,3)),this.setAttribute(`normal`,new xr(d,3)),this.setAttribute(`uv`,new xr(f,2));function _(){let a=new K,_=new K,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new kt,m=new K,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},la=class e extends ca{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ua=class e extends Nr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new xr(i,3)),this.setAttribute(`normal`,new xr(i.slice(),3)),this.setAttribute(`uv`,new xr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new K,r=new K,i=new K;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new K;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new K;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new K,t=new K,n=new K,r=new K,o=new kt,s=new kt,c=new kt;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},da=class e extends ua{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},fa=class e extends ua{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},pa=class e extends Nr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ma=class e extends Nr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new K,p=new kt;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new xr(s,3)),this.setAttribute(`normal`,new xr(c,3)),this.setAttribute(`uv`,new xr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ha=class e extends Nr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new K,d=new K,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ga=class e extends Nr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new K,f=new K,p=new K;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new xr(c,3)),this.setAttribute(`normal`,new xr(l,3)),this.setAttribute(`uv`,new xr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function _a(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ya(i))i.isRenderTargetTexture?(W(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ya(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function va(e){let t={};for(let n=0;n<e.length;n++){let r=_a(e[n]);for(let e in r)t[e]=r[e]}return t}function ya(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ba(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function xa(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Rt.workingColorSpace}var Sa={clone:_a,merge:va},Ca=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ta=class extends Hr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ca,this.fragmentShader=wa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=ba(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new q().setHex(r.value);break;case`v2`:this.uniforms[n].value=new kt().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Xt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Nt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new tn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ea=class extends Ta{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Da=class extends Hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Oa=class extends Da{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new kt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new q(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new q(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new q(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ka=class extends Hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Le,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Aa=class extends Hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ja(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ma(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function Na(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function Pa(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function Fa(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0){if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}}var Ia=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},La=class extends Ia{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:U,endingEnd:U}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ne:i=e,o=2*t-n;break;case Pe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ne:a=e,s=2*n-t;break;case Pe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ra=class extends Ia{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},za=class extends Ia{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ba=class extends Ia{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Ua(n,t,g,y,r);i[p]=Va(x,o,_,b,m)}return i}};function Va(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ha(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Ua(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Va(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ha(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Wa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ja(t,this.TimeBufferType),this.values=ja(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ja(e.times,Array),values:ja(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ma(e.settings)&&(n.settings={inTangents:ja(e.settings.inTangents,Array),outTangents:ja(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new La(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ba(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case je:t=this.InterpolantFactoryMethodDiscrete;break;case V:t=this.InterpolantFactoryMethodLinear;break;case Me:t=this.InterpolantFactoryMethodSmooth;break;case H:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return W(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return je;case this.InterpolantFactoryMethodLinear:return V;case this.InterpolantFactoryMethodSmooth:return Me;case this.InterpolantFactoryMethodBezier:return H}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ma(this.settings)&&(Ga(this.settings.inTangents,e),Ga(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(G(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(G(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){G(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){G(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ke(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){G(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Me,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ma(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ga(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Wa.prototype.ValueTypeName=``,Wa.prototype.TimeBufferType=Float32Array,Wa.prototype.ValueBufferType=Float32Array,Wa.prototype.DefaultInterpolation=V;var Ka=class extends Wa{constructor(e,t,n){super(e,t,n)}};Ka.prototype.ValueTypeName=`bool`,Ka.prototype.ValueBufferType=Array,Ka.prototype.DefaultInterpolation=je,Ka.prototype.InterpolantFactoryMethodLinear=void 0,Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends Wa{constructor(e,t,n,r){super(e,t,n,r)}};qa.prototype.ValueTypeName=`color`;var Ja=class extends Wa{constructor(e,t,n,r){super(e,t,n,r)}};Ja.prototype.ValueTypeName=`number`;var Ya=class extends Ia{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)At.slerpFlat(i,0,a,c-o,a,c,s);return i}},Xa=class extends Wa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ya(this.times,this.values,this.getValueSize(),e)}};Xa.prototype.ValueTypeName=`quaternion`,Xa.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends Wa{constructor(e,t,n){super(e,t,n)}};Za.prototype.ValueTypeName=`string`,Za.prototype.ValueBufferType=Array,Za.prototype.DefaultInterpolation=je,Za.prototype.InterpolantFactoryMethodLinear=void 0,Za.prototype.InterpolantFactoryMethodSmooth=void 0;var Qa=class extends Wa{constructor(e,t,n,r){super(e,t,n,r)}};Qa.prototype.ValueTypeName=`vector`;var $a=class{constructor(e=``,t=-1,n=[],r=Fe){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=ot(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(to(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(Wa.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=Na(o);o=Pa(o,1,c),s=Pa(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new Ja(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function eo(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return Ja;case`vector`:case`vector2`:case`vector3`:case`vector4`:return Qa;case`color`:return qa;case`quaternion`:return Xa;case`bool`:case`boolean`:return Ka;case`string`:return Za}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function to(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=eo(e.type);if(e.times===void 0){let t=[],n=[];Fa(e.keys,t,n,`value`),e.times=t,e.values=n}let n;return n=t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e),Ma(e.settings)&&(n.settings={inTangents:ja(e.settings.inTangents,Float32Array),outTangents:ja(e.settings.outTangents,Float32Array)}),n}var no={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(ro(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!ro(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function ro(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var io=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},ao=class{constructor(e){this.manager=e===void 0?io:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ao.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var oo={},so=class extends Error{constructor(e,t){super(e),this.response=t}},co=class extends ao{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=no.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(oo[e]!==void 0){oo[e].push({onLoad:t,onProgress:n,onError:r});return}oo[e]=[],oo[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&W(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=oo[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new so(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{no.add(`file:${e}`,t);let n=oo[e];delete oo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=oo[e];if(n===void 0)throw this.manager.itemError(e),t;delete oo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},lo=new WeakMap,uo=class extends ao{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=no.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=lo.get(a);e===void 0&&(e=[],lo.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=qe(`img`);function s(){l(),t&&t(this);let n=lo.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}lo.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),no.remove(`image:${e}`);let n=lo.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}lo.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),no.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},fo=class extends ao{constructor(e){super(e)}load(e,t,n,r){let i=new Yt,a=new uo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},po=class extends kn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new q(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},mo=class extends po{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new q(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ho=new tn,go=new K,_o=new K,vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=u,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fi,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;go.setFromMatrixPosition(e.matrixWorld),t.position.copy(go),_o.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_o),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ho.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ho,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yo=new K,bo=new At,xo=new K,So=class extends kn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=We,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yo,bo,xo),xo.x===1&&xo.y===1&&xo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,bo,xo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(yo,bo,xo),xo.x===1&&xo.y===1&&xo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,bo,xo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Co=new K,wo=new kt,To=new kt,Eo=class extends So{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=at*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(it*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return at*2*Math.atan(Math.tan(it*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Co.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Co.x,Co.y).multiplyScalar(-e/Co.z),Co.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Co.x,Co.y).multiplyScalar(-e/Co.z)}getViewSize(e,t){return this.getViewBounds(e,wo,To),t.subVectors(To,wo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(it*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Do=class extends vo{constructor(){super(new Eo(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=at*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Oo=class extends po{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Do}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ko=class extends vo{constructor(){super(new Eo(90,1,.5,500)),this.isPointLightShadow=!0}},Ao=class extends po{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ko}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},jo=class extends So{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Mo=class extends vo{constructor(){super(new jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},No=class extends po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.shadow=new Mo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Po=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Fo=new WeakMap,Io=class extends ao{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&W(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&W(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=no.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{Fo.has(a)===!0?(r&&r(Fo.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign({},i.options,{colorSpaceConversion:`none`}))}).then(function(n){return no.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),Fo.set(s,t),no.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});no.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Lo=-90,Ro=1,zo=class extends kn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Eo(Lo,Ro,e,t);r.layers=this.layers,this.add(r);let i=new Eo(Lo,Ro,e,t);i.layers=this.layers,this.add(i);let a=new Eo(Lo,Ro,e,t);a.layers=this.layers,this.add(a);let o=new Eo(Lo,Ro,e,t);o.layers=this.layers,this.add(o);let s=new Eo(Lo,Ro,e,t);s.layers=this.layers,this.add(s);let c=new Eo(Lo,Ro,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Bo=class extends Eo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Vo=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,i,a;switch(t){case`quaternion`:r=this._slerp,i=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case`string`:case`bool`:r=this._select,i=this._select,a=this._setAdditiveIdentityOther,this.buffer=Array(n*5);break;default:r=this._lerp,i=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=i,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,i=e*r+r,a=this.cumulativeWeight;if(a===0){for(let e=0;e!==r;++e)n[i+e]=n[e];a=t}else{a+=t;let e=t/a;this._mixBufferRegion(n,i,0,e,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,i=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,i<1){let e=t*this._origIndex;this._mixBufferRegion(n,r,e,1-i,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let e=t,i=t+t;e!==i;++e)if(n[e]!==n[e+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let e=n,i=r;e!==i;++e)t[e]=t[r+e%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,i){if(r>=.5)for(let r=0;r!==i;++r)e[t+r]=e[n+r]}_slerp(e,t,n,r){At.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,i){let a=this._workIndex*i;At.multiplyQuaternionsFlat(e,a,e,t,e,n),At.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,i){let a=1-r;for(let o=0;o!==i;++o){let i=t+o;e[i]=e[i]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,i){for(let a=0;a!==i;++a){let i=t+a;e[i]=e[i]+e[n+a]*r}}},Ho=`\\[\\]\\.:\\/`,Uo=RegExp(`[\\[\\]\\.:\\/]`,`g`),Wo=`[^\\[\\]\\.:\\/]`,Go=`[^`+Ho.replace(`\\.`,``)+`]`,Ko=`((?:WC+[\\/:])*)`.replace(`WC`,Wo),qo=`(WCOD+)?`.replace(`WCOD`,Go),Jo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Wo),Yo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Wo),Xo=RegExp(`^`+Ko+qo+Jo+Yo+`$`),Zo=[`material`,`materials`,`bones`,`map`],Qo=class{constructor(e,t,n){let r=n||$o.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},$o=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Uo,``)}static parseTrackName(e){let t=Xo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Zo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){W(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){G(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){G(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){G(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){G(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){G(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){G(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;G(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){G(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$o.Composite=Qo,$o.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},$o.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},$o.prototype.GetterByBindingType=[$o.prototype._getValue_direct,$o.prototype._getValue_array,$o.prototype._getValue_arrayElement,$o.prototype._getValue_toArray],$o.prototype.SetterByBindingTypeAndVersioning=[[$o.prototype._setValue_direct,$o.prototype._setValue_direct_setNeedsUpdate,$o.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$o.prototype._setValue_array,$o.prototype._setValue_array_setNeedsUpdate,$o.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$o.prototype._setValue_arrayElement,$o.prototype._setValue_arrayElement_setNeedsUpdate,$o.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$o.prototype._setValue_fromArray,$o.prototype._setValue_fromArray_setNeedsUpdate,$o.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var es=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let i=t.tracks,a=i.length,o=Array(a),s={endingStart:U,endingEnd:U};for(let e=0;e!==a;++e){let t=i[e].createInterpolant(null);o[e]=t,t.settings=s}this._interpolantSettings=s,this._interpolants=o,this._propertyBindings=Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=ke,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let n=this._clip.duration,r=e._clip.duration,i=r/n,a=n/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,i,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,i=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let s=o.parameterPositions,c=o.sampleValues;return s[0]=i,s[1]=i+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let i=this._startTime;if(i!==null){let r=(e-i)*n;r<0||n===0?t=0:(this._startTime=null,t=n*r)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let e=this._interpolants,t=this._propertyBindings;switch(this.blendMode){case Ie:for(let n=0,r=e.length;n!==r;++n)e[n].evaluate(a),t[n].accumulateAdditive(o);break;case Fe:default:for(let n=0,i=e.length;n!==i;++n)e[n].evaluate(a),t[n].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,i=this._loopCount,a=n===Ae;if(e===0)return i===-1?r:a&&(i&1)==1?t-r:r;if(n===2200){i===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));handle_stop:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break handle_stop}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e<0?-1:1})}}else{if(i===-1&&(e>=0?(i=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let n=Math.floor(r/t);r-=t*n,i+=Math.abs(n);let o=this.repetitions-i;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e>0?1:-1});else{if(o===1){let t=e<0;this._setEndings(t,!t,a)}else this._setEndings(!1,!1,a);this._loopCount=i,this.time=r,this._mixer.dispatchEvent({type:`loop`,action:this,loopDelta:n})}}else this._loopCount=i,this.time=r;if(a&&(i&1)==1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=Ne,r.endingEnd=Ne):(r.endingStart=e?this.zeroSlopeAtStart?Ne:U:Pe,r.endingEnd=t?this.zeroSlopeAtEnd?Ne:U:Pe)}_scheduleFading(e,t,n){let r=this._mixer,i=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,s=a.sampleValues;return o[0]=i,s[0]=t,o[1]=i+e,s[1]=n,this}},ts=new Float32Array(1),ns=class extends tt{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,i=r.length,a=e._propertyBindings,o=e._interpolants,s=n.uuid,c=this._bindingsByRootAndName,l=c[s];l===void 0&&(l={},c[s]=l);for(let e=0;e!==i;++e){let i=r[e],c=i.name,u=l[c];if(u!==void 0)++u.referenceCount,a[e]=u;else{if(u=a[e],u!==void 0){u._cacheIndex===null&&(++u.referenceCount,this._addInactiveBinding(u,s,c));continue}let r=t&&t._propertyBindings[e].binding.parsedPath;u=new Vo($o.create(n,c,r),i.ValueTypeName,i.getValueSize()),++u.referenceCount,this._addInactiveBinding(u,s,c),a[e]=u}o[e].resultBuffer=u.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let t=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,t)}let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];n.useCount++===0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,i=this._actionsByClip,a=i[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,i[t]=a;else{let t=a.knownActions;e._byClipCacheIndex=t.length,t.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let i=e._clip.uuid,a=this._actionsByClip,o=a[i],s=o.knownActions,c=s[s.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,s[l]=c,s.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],s.length===0&&delete a[i],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.referenceCount===0&&this._removeInactiveBinding(n)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,i=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=i.length,i.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,i=n.path,a=this._bindingsByRootAndName,o=a[r],s=t[t.length-1],c=e._cacheIndex;s._cacheIndex=c,t[c]=s,t.pop(),delete o[i],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ra(new Float32Array(2),new Float32Array(2),1,ts),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,i=t[r];e.__cacheIndex=r,t[r]=e,i.__cacheIndex=n,t[n]=i}clipAction(e,t,n){let r=t||this._root,i=r.uuid,a=typeof e==`string`?$a.findByName(r,e):e,o=a===null?e:a.uuid,s=this._actionsByClip[o],c=null;if(n===void 0&&(n=a===null?Fe:a.blendMode),s!==void 0){let e=s.actionByRoot[i];if(e!==void 0&&e.blendMode===n)return e;c=s.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let l=new es(this,a,t,n);return this._bindAction(l,c),this._addInactiveAction(l,o,i),l}existingAction(e,t){let n=t||this._root,r=n.uuid,i=typeof e==`string`?$a.findByName(n,e):e,a=i?i.uuid:e,o=this._actionsByClip[a];return o===void 0?null:o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,i=Math.sign(e),a=this._accuIndex^=1;for(let o=0;o!==n;++o)t[o]._update(r,e,i,a);let o=this._bindings,s=this._nActiveBindings;for(let e=0;e!==s;++e)o[e].apply(a);return this}setTime(e){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,i=r[n];if(i!==void 0){let e=i.knownActions;for(let n=0,r=e.length;n!==r;++n){let r=e[n];this._deactivateAction(r);let i=r._cacheIndex,a=t[t.length-1];r._cacheIndex=null,r._byClipCacheIndex=null,a._cacheIndex=i,t[i]=a,t.pop(),this._removeInactiveBindingsForAction(r)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let e in n){let r=n[e].actionByRoot[t];r!==void 0&&(this._deactivateAction(r),this._removeInactiveAction(r))}let r=this._bindingsByRootAndName[t];if(r!==void 0)for(let e in r){let t=r[e];t.restoreOriginalState(),this._removeInactiveBinding(t)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function rs(e,t,n,r){let i=is(r);switch(n){case C:return e*t;case O:return e*t/i.components*i.byteLength;case k:return e*t/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case w:return e*t*3/i.components*i.byteLength;case T:return e*t*4/i.components*i.byteLength;case M:return e*t*4/i.components*i.byteLength;case N:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ee:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case I:case re:return Math.max(e,16)*Math.max(t,8)/4;case te:case ne:return Math.max(e,8)*Math.max(t,8)/2;case ie:case ae:case R:case oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case L:case se:case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case fe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case me:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case z:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case be:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case xe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Se:case Ce:case we:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Te:case Ee:return Math.ceil(e/4)*Math.ceil(t/4)*8;case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function is(e){switch(e){case u:case d:return{byteLength:1,components:1};case p:case f:case _:return{byteLength:2,components:1};case v:case y:return{byteLength:2,components:4};case h:case m:case g:return{byteLength:4,components:1};case x:case S:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?W(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function as(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function os(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var ss={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
void main() {
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Y={common:{diffuse:{value:new q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new q(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},cs={basic:{uniforms:va([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:ss.meshbasic_vert,fragmentShader:ss.meshbasic_frag},lambert:{uniforms:va([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new q(0)},envMapIntensity:{value:1}}]),vertexShader:ss.meshlambert_vert,fragmentShader:ss.meshlambert_frag},phong:{uniforms:va([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new q(0)},specular:{value:new q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ss.meshphong_vert,fragmentShader:ss.meshphong_frag},standard:{uniforms:va([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ss.meshphysical_vert,fragmentShader:ss.meshphysical_frag},toon:{uniforms:va([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new q(0)}}]),vertexShader:ss.meshtoon_vert,fragmentShader:ss.meshtoon_frag},matcap:{uniforms:va([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:ss.meshmatcap_vert,fragmentShader:ss.meshmatcap_frag},points:{uniforms:va([Y.points,Y.fog]),vertexShader:ss.points_vert,fragmentShader:ss.points_frag},dashed:{uniforms:va([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ss.linedashed_vert,fragmentShader:ss.linedashed_frag},depth:{uniforms:va([Y.common,Y.displacementmap]),vertexShader:ss.depth_vert,fragmentShader:ss.depth_frag},normal:{uniforms:va([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:ss.meshnormal_vert,fragmentShader:ss.meshnormal_frag},sprite:{uniforms:va([Y.sprite,Y.fog]),vertexShader:ss.sprite_vert,fragmentShader:ss.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ss.background_vert,fragmentShader:ss.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:ss.backgroundCube_vert,fragmentShader:ss.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ss.cube_vert,fragmentShader:ss.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ss.equirect_vert,fragmentShader:ss.equirect_frag},distance:{uniforms:va([Y.common,Y.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ss.distance_vert,fragmentShader:ss.distance_frag},shadow:{uniforms:va([Y.lights,Y.fog,{color:{value:new q(0)},opacity:{value:1}}]),vertexShader:ss.shadow_vert,fragmentShader:ss.shadow_frag}};cs.physical={uniforms:va([cs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new q(0)},specularColor:{value:new q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:ss.meshphysical_vert,fragmentShader:ss.meshphysical_frag};var ls={r:0,b:0,g:0},us=new tn,ds=new Nt;ds.set(-1,0,0,0,1,0,0,0,1);function fs(e,t,n,r,i,a){let o=new q(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new J(new sa(1,1,1),new Ta({name:`BackgroundCubeMaterial`,uniforms:_a(cs.backgroundCube.uniforms),vertexShader:cs.backgroundCube.vertexShader,fragmentShader:cs.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(us.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ds),l.material.toneMapped=Rt.getTransfer(i.colorSpace)!==Ve,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new J(new pa(2,2),new Ta({name:`BackgroundMaterial`,uniforms:_a(cs.background.uniforms),vertexShader:cs.background.vertexShader,fragmentShader:cs.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Rt.getTransfer(i.colorSpace)!==Ve,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ls,xa(e)),n.buffers.color.setClear(ls.r,ls.g,ls.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ps(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ms(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function hs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(W(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&W(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function gs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Br,s=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var _s=4,vs=6,ys=20,bs=256,xs=new jo,Ss=new q,Cs=null,ws=0,Ts=0,Es=!1,Ds=new K,Os=new K,ks=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ds}=i;Cs=this._renderer.getRenderTarget(),ws=this._renderer.getActiveCubeFace(),Ts=this._renderer.getActiveMipmapLevel(),Es=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Is(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cs,ws,Ts),this._renderer.xr.enabled=Es,e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cs=this._renderer.getRenderTarget(),ws=this._renderer.getActiveCubeFace(),Ts=this._renderer.getActiveMipmapLevel(),Es=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:s,minFilter:s,generateMipmaps:!1,type:_,format:T,colorSpace:ze,depthBuffer:!1},r=js(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=js(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=As(r)),this._blurMaterial=Ps(r,e,t),this._ggxMaterial=Ns(r,e,t)}return r}_compileMaterial(e){let t=new J(new Nr,e);this._renderer.compile(t,xs)}_sceneToCubeUV(e,t,n,r,i){let a=new Eo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Ss),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new J(new sa,new Jr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Ss),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Ms(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Is()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fs());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ms(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,xs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-_s?n-d+_s:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Ms(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,xs),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Ms(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,xs)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Ms(t,3*l*(r>this._lodMax-_s?r-this._lodMax+_s:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,xs)}};function As(e){let t=[],n=[],r=e,i=e-_s+1+vs;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Os.set(1,r,n):e===1?Os.set(-n,1,-r):e===2?Os.set(-n,r,1):e===3?Os.set(-1,r,-n):e===4?Os.set(-n,-1,r):Os.set(n,r,-1),Os.toArray(l,(e*6+t)*3)}}let u=new Nr;u.setAttribute(`position`,new vr(c,3)),u.setAttribute(`outputDirection`,new vr(l,3)),n.push(new J(u,null)),r>_s&&r--}return{lodMeshes:n,sizeLods:t}}function js(e,t,n){let r=new Qt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ms(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ns(e,t,n){return new Ta({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ls(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ps(e,t,n){return new Ta({name:`SphericalGaussianBlur`,defines:{SAMPLES:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ls(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fs(){return new Ta({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ls(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Is(){return new Ta({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ls(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Rs=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ra(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new sa(5,5,5),i=new Ta({name:`CubemapFromEquirect`,uniforms:_a(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new J(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=s),new zo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function zs(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Rs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ks(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ks(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Bs(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Qe(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Vs(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?br:yr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Hs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Us(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:G(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ws(e,t,n){let r=new WeakMap,i=new Xt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),_=new $t(h,p,m,u);_.type=g,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new kt(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Gs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ks={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function qs(e,t,n,r,i,a){let o=new Qt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Nr;l.setAttribute(`position`,new xr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new xr([0,2,0,0,2,0],2));let u=new Ea({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new J(l,u),f=new jo(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Qt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),c=new Qt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Rt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Ks[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Js=new Yt,Ys=new ia(1,1),Xs=new $t,Zs=new en,Qs=new ra,$s=[],ec=[],tc=new Float32Array(16),nc=new Float32Array(9),rc=new Float32Array(4);function ic(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=$s[i];if(a===void 0&&(a=new Float32Array(i),$s[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ac(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function oc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function sc(e,t){let n=ec[t];n===void 0&&(n=new Int32Array(t),ec[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function cc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ac(n,t))return;e.uniform2fv(this.addr,t),oc(n,t)}}function uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ac(n,t))return;e.uniform3fv(this.addr,t),oc(n,t)}}function dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ac(n,t))return;e.uniform4fv(this.addr,t),oc(n,t)}}function fc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ac(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),oc(n,t)}else{if(ac(n,r))return;rc.set(r),e.uniformMatrix2fv(this.addr,!1,rc),oc(n,r)}}function pc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ac(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),oc(n,t)}else{if(ac(n,r))return;nc.set(r),e.uniformMatrix3fv(this.addr,!1,nc),oc(n,r)}}function mc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ac(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),oc(n,t)}else{if(ac(n,r))return;tc.set(r),e.uniformMatrix4fv(this.addr,!1,tc),oc(n,r)}}function hc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ac(n,t))return;e.uniform2iv(this.addr,t),oc(n,t)}}function _c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ac(n,t))return;e.uniform3iv(this.addr,t),oc(n,t)}}function vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ac(n,t))return;e.uniform4iv(this.addr,t),oc(n,t)}}function yc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ac(n,t))return;e.uniform2uiv(this.addr,t),oc(n,t)}}function xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ac(n,t))return;e.uniform3uiv(this.addr,t),oc(n,t)}}function Sc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ac(n,t))return;e.uniform4uiv(this.addr,t),oc(n,t)}}function Cc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ys.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ys):a=Js,n.setTexture2D(t||a,i)}function wc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Zs,i)}function Tc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Qs,i)}function Ec(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Xs,i)}function Dc(e){switch(e){case 5126:return cc;case 35664:return lc;case 35665:return uc;case 35666:return dc;case 35674:return fc;case 35675:return pc;case 35676:return mc;case 5124:case 35670:return hc;case 35667:case 35671:return gc;case 35668:case 35672:return _c;case 35669:case 35673:return vc;case 5125:return yc;case 36294:return bc;case 36295:return xc;case 36296:return Sc;case 35678:case 36198:case 36298:case 36306:case 35682:return Cc;case 35679:case 36299:case 36307:return wc;case 35680:case 36300:case 36308:case 36293:return Tc;case 36289:case 36303:case 36311:case 36292:return Ec}}function Oc(e,t){e.uniform1fv(this.addr,t)}function kc(e,t){let n=ic(t,this.size,2);e.uniform2fv(this.addr,n)}function Ac(e,t){let n=ic(t,this.size,3);e.uniform3fv(this.addr,n)}function jc(e,t){let n=ic(t,this.size,4);e.uniform4fv(this.addr,n)}function Mc(e,t){let n=ic(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Nc(e,t){let n=ic(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Pc(e,t){let n=ic(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Fc(e,t){e.uniform1iv(this.addr,t)}function Ic(e,t){e.uniform2iv(this.addr,t)}function Lc(e,t){e.uniform3iv(this.addr,t)}function Rc(e,t){e.uniform4iv(this.addr,t)}function zc(e,t){e.uniform1uiv(this.addr,t)}function Bc(e,t){e.uniform2uiv(this.addr,t)}function Vc(e,t){e.uniform3uiv(this.addr,t)}function Hc(e,t){e.uniform4uiv(this.addr,t)}function Uc(e,t,n){let r=this.cache,i=t.length,a=sc(n,i);ac(r,a)||(e.uniform1iv(this.addr,a),oc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ys:Js;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Wc(e,t,n){let r=this.cache,i=t.length,a=sc(n,i);ac(r,a)||(e.uniform1iv(this.addr,a),oc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Zs,a[e])}function Gc(e,t,n){let r=this.cache,i=t.length,a=sc(n,i);ac(r,a)||(e.uniform1iv(this.addr,a),oc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Qs,a[e])}function Kc(e,t,n){let r=this.cache,i=t.length,a=sc(n,i);ac(r,a)||(e.uniform1iv(this.addr,a),oc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Xs,a[e])}function qc(e){switch(e){case 5126:return Oc;case 35664:return kc;case 35665:return Ac;case 35666:return jc;case 35674:return Mc;case 35675:return Nc;case 35676:return Pc;case 5124:case 35670:return Fc;case 35667:case 35671:return Ic;case 35668:case 35672:return Lc;case 35669:case 35673:return Rc;case 5125:return zc;case 36294:return Bc;case 36295:return Vc;case 36296:return Hc;case 35678:case 36198:case 36298:case 36306:case 35682:return Uc;case 35679:case 36299:case 36307:return Wc;case 35680:case 36300:case 36308:case 36293:return Gc;case 36289:case 36303:case 36311:case 36292:return Kc}}var Jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dc(t.type)}},Yc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qc(t.type)}},Xc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Zc=/(\w+)(\])?(\[|\.)?/g;function Qc(e,t){e.seq.push(t),e.map[t.id]=t}function $c(e,t,n){let r=e.name,i=r.length;for(Zc.lastIndex=0;;){let a=Zc.exec(r),o=Zc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Qc(n,l===void 0?new Jc(s,e,t):new Yc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Xc(s),Qc(n,e)),n=e}}}var el=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);$c(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function tl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var nl=37297,rl=0;function il(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var al=new Nt;function ol(e){Rt._getMatrix(al,Rt.workingColorSpace,e);let t=`mat3( ${al.elements.map(e=>e.toFixed(4))} )`;switch(Rt.getTransfer(e)){case Be:return[t,`LinearTransferOETF`];case Ve:return[t,`sRGBTransferOETF`];default:return W(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function sl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+il(e.getShaderSource(t),r)}return i}function cl(e,t){let n=ol(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var ll={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ul(e,t){let n=ll[t];return n===void 0?(W(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var dl=new K;function fl(){return Rt.getLuminanceCoefficients(dl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${dl.x.toFixed(4)}, ${dl.y.toFixed(4)}, ${dl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function pl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(gl).join(`
`)}function ml(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function hl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function gl(e){return e!==``}function _l(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yl=/^[ \t]*#include +<([\w\d./]+)>/gm;function bl(e){return e.replace(yl,Sl)}var xl=new Map;function Sl(e,t){let n=ss[t];if(n===void 0){let e=xl.get(t);if(e!==void 0)n=ss[e],W(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return bl(n)}var Cl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(e){return e.replace(Cl,Tl)}function Tl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function El(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Dl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Ol(e){return Dl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var kl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Al(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:kl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var jl={302:`ENVMAP_MODE_REFRACTION`};function Ml(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:jl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Nl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Pl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Nl[e.combine]||`ENVMAP_BLENDING_NONE`}function Fl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Il(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ol(n),l=Al(n),u=Ml(n),d=Pl(n),f=Fl(n),p=pl(n),m=ml(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(gl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(gl).join(`
`),_.length>0&&(_+=`
`)):(g=[El(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(gl).join(`
`),_=[El(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:ss.tonemapping_pars_fragment,n.toneMapping===0?``:ul(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,ss.colorspace_pars_fragment,cl(`linearToOutputTexel`,n.outputColorSpace),fl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(gl).join(`
`)),o=bl(o),o=_l(o,n),o=vl(o,n),s=bl(s),s=_l(s,n),s=vl(s,n),o=wl(o),s=wl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=tl(i,i.VERTEX_SHADER,y),S=tl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=sl(i,x,`vertex`),n=sl(i,S,`fragment`);G(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):W(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new el(i,h),T=hl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,nl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Ll=0,Rl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new zl(e),t.set(e,n)),n}},zl=class{constructor(e){this.id=Ll++,this.code=e,this.usedTimes=0}};function Bl(e){return e===1030||e===37490||e===36285}function Vl(e,t,n,r,i,a){let o=new pn,s=new Rl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&W(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=cs[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,ee=!!i.map,F=!!i.matcap,te=!!x,I=!!i.aoMap,ne=!!i.lightMap,re=!!i.bumpMap&&i.wireframe===!1,ie=!!i.normalMap,ae=!!i.displacementMap,L=!!i.emissiveMap,R=!!i.metalnessMap,oe=!!i.roughnessMap,se=i.anisotropy>0,ce=i.clearcoat>0,le=i.dispersion>0,ue=i.retroreflectivity>0,de=i.iridescence>0,fe=i.sheen>0,pe=i.transmission>0,me=se&&!!i.anisotropyMap,he=ce&&!!i.clearcoatMap,ge=ce&&!!i.clearcoatNormalMap,_e=ce&&!!i.clearcoatRoughnessMap,z=de&&!!i.iridescenceMap,ve=de&&!!i.iridescenceThicknessMap,ye=fe&&!!i.sheenColorMap,be=fe&&!!i.sheenRoughnessMap,xe=!!i.specularMap,Se=!!i.specularColorMap,Ce=!!i.specularIntensityMap,we=pe&&!!i.transmissionMap,Te=pe&&!!i.thicknessMap,Ee=!!i.gradientMap,De=!!i.alphaMap,Oe=i.alphaTest>0,B=!!i.alphaHash,ke=!!i.extensions,Ae=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let je={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ee,matcap:F,envMap:te,envMapMode:te&&x.mapping,envMapCubeUVHeight:S,aoMap:I,lightMap:ne,bumpMap:re,normalMap:ie,displacementMap:ae,emissiveMap:L,normalMapObjectSpace:ie&&i.normalMapType===1,normalMapTangentSpace:ie&&i.normalMapType===0,packedNormalMap:ie&&i.normalMapType===0&&Bl(i.normalMap.format),metalnessMap:R,roughnessMap:oe,anisotropy:se,anisotropyMap:me,clearcoat:ce,clearcoatMap:he,clearcoatNormalMap:ge,clearcoatRoughnessMap:_e,dispersion:le,retroreflection:ue,iridescence:de,iridescenceMap:z,iridescenceThicknessMap:ve,sheen:fe,sheenColorMap:ye,sheenRoughnessMap:be,specularMap:xe,specularColorMap:Se,specularIntensityMap:Ce,transmission:pe,transmissionMap:we,thicknessMap:Te,gradientMap:Ee,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:B,combine:i.combine,mapUv:ee&&m(i.map.channel),aoMapUv:I&&m(i.aoMap.channel),lightMapUv:ne&&m(i.lightMap.channel),bumpMapUv:re&&m(i.bumpMap.channel),normalMapUv:ie&&m(i.normalMap.channel),displacementMapUv:ae&&m(i.displacementMap.channel),emissiveMapUv:L&&m(i.emissiveMap.channel),metalnessMapUv:R&&m(i.metalnessMap.channel),roughnessMapUv:oe&&m(i.roughnessMap.channel),anisotropyMapUv:me&&m(i.anisotropyMap.channel),clearcoatMapUv:he&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ge&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(i.sheenRoughnessMap.channel),specularMapUv:xe&&m(i.specularMap.channel),specularColorMapUv:Se&&m(i.specularColorMap.channel),specularIntensityMapUv:Ce&&m(i.specularIntensityMap.channel),transmissionMapUv:we&&m(i.transmissionMap.channel),thicknessMapUv:Te&&m(i.thicknessMap.channel),alphaMapUv:De&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ie||se),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ee||De),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ie===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ee&&i.map.isVideoTexture===!0&&Rt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:L&&i.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ke&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=cs[t];n=Sa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Il(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Hl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ul(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Wl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Gl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Ul),r.length>1&&r.sort(t||Wl),i.length>1&&i.sort(t||Wl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Kl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Gl,e.set(t,[i])):n>=r.length?(i=new Gl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ql(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new K,color:new q};break;case`SpotLight`:n={position:new K,direction:new K,color:new q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new q,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new q,groundColor:new q};break;case`RectAreaLight`:n={color:new q,position:new K,halfWidth:new K,halfHeight:new K}}return e[t.id]=n,n}}}function Jl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Yl=0;function Xl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Zl(e){let t=new ql,n=Jl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new tn,o=new tn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Xl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Yl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Ql(e){let t=new Zl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function $l(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ql(e),t.set(n,[a])):r>=i.length?(a=new Ql(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var eu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tu=`uniform sampler2D shadow_pass;
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
}`,nu=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],ru=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],iu=new tn,au=new K,ou=new K;function su(e,t,n){let r=new Fi,a=new kt,o=new kt,c=new Xt,l=new ka,u=new Aa,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:eu,fragmentShader:tu}),v=m.clone();v.defines.HORIZONTAL_PASS=1;let y=new Nr;y.setAttribute(`position`,new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new J(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(W(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){W(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),o.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/y.x),a.x=o.x*y.x,p.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/y.y),a.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){W(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Qt(a.x,a.y,{format:A,type:_,minFilter:s,magFilter:s,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new ia(a.x,a.y,g),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=E,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i}else d.isPointLight?(p.map=new Rs(a.x),p.map.depthTexture=new aa(a.x,h)):(p.map=new Qt(a.x,a.y),p.map.depthTexture=new ia(a.x,a.y,h)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=E,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),au.setFromMatrixPosition(d.matrixWorld),e.position.copy(au),ou.copy(e.position),ou.add(nu[t]),e.up.copy(ru[t]),e.lookAt(ou),e.updateMatrixWorld(),n.makeTranslation(-au.x,-au.y,-au.z),iu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(iu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(c)}r=p.getFrustum(t),T(n,l,i,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Qt(a.x,a.y,{format:A,type:_}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,m,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function cu(e,t){function n(){let t=!1,n=new Xt,r=null,i=new Xt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?R(e.DEPTH_TEST):oe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=et[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?R(e.STENCIL_TEST):oe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,ee=e.getParameter(e.VERSION);ee.indexOf(`WebGL`)===-1?ee.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(ee)[1]),N=P>=1);let F=null,te={},I=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),re=new Xt().fromArray(I),ie=new Xt().fromArray(ne);function ae(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let L={};L[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),L[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),L[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),R(e.DEPTH_TEST),o.setFunc(3),me(!1),he(1),R(e.CULL_FACE),fe(0);function R(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function oe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function se(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ce(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function le(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ue={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ue[103]=e.MIN,ue[104]=e.MAX;let de={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function fe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(oe(e.BLEND),g=!1);else if(g===!1&&(R(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:G(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:G(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:G(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:G(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ue[n],ue[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(de[r],de[i],de[o],de[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function pe(t,n){t.side===2?oe(e.CULL_FACE):R(e.CULL_FACE);let r=t.side===1;n&&(r=!r),me(r),t.blending===1&&t.transparent===!1?fe(0):fe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),_e(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?R(e.SAMPLE_ALPHA_TO_COVERAGE):oe(e.SAMPLE_ALPHA_TO_COVERAGE)}function me(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function he(t){t===0?oe(e.CULL_FACE):(R(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ge(t){t!==k&&(N&&e.lineWidth(t),k=t)}function _e(t,n,r){t?(R(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):oe(e.POLYGON_OFFSET_FILL)}function z(t){t?R(e.SCISSOR_TEST):oe(e.SCISSOR_TEST)}function ve(t){t===void 0&&(t=e.TEXTURE0+M-1),F!==t&&(e.activeTexture(t),F=t)}function ye(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+M-1:F);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||L[t]),i.type=t,i.texture=n)}function be(){let t=te[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function xe(){try{e.compressedTexImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Se(){try{e.compressedTexImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ce(){try{e.texSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function we(){try{e.texSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Te(){try{e.compressedTexSubImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function De(){try{e.texStorage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Oe(){try{e.texStorage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function B(){try{e.texImage2D(...arguments)}catch(e){G(`WebGLState:`,e)}}function ke(){try{e.texImage3D(...arguments)}catch(e){G(`WebGLState:`,e)}}function Ae(t){return d[t]===void 0?e.getParameter(t):d[t]}function je(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function V(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function Me(t){ie.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ie.copy(t))}function H(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function U(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ne(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,te={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,re.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:R,disable:oe,bindFramebuffer:se,drawBuffers:ce,useProgram:le,setBlending:fe,setMaterial:pe,setFlipSided:me,setCullFace:he,setLineWidth:ge,setPolygonOffset:_e,setScissorTest:z,activeTexture:ve,bindTexture:ye,unbindTexture:be,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:B,texImage3D:ke,pixelStorei:je,getParameter:Ae,updateUBOMapping:H,uniformBlockBinding:U,texStorage2D:De,texStorage3D:Oe,texSubImage2D:Ce,texSubImage3D:we,compressedTexSubImage2D:Te,compressedTexSubImage3D:Ee,scissor:V,viewport:Me,reset:Ne}}function lu(e,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new kt,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):qe(`canvas`)}function T(e,t,n){let r=1,i=Ae(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),W(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&W(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function O(t){e.generateMipmap(t)}function k(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(t,n,r,i,a,o=!1){if(t!==null){if(e[t]!==void 0)return e[t];W(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let s;i&&(s=u.get(`EXT_texture_norm16`),s||W(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let c=n;if(n===e.RED&&(r===e.FLOAT&&(c=e.R32F),r===e.HALF_FLOAT&&(c=e.R16F),r===e.UNSIGNED_BYTE&&(c=e.R8),r===e.UNSIGNED_SHORT&&s&&(c=s.R16_EXT),r===e.SHORT&&s&&(c=s.R16_SNORM_EXT)),n===e.RED_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.R8UI),r===e.UNSIGNED_SHORT&&(c=e.R16UI),r===e.UNSIGNED_INT&&(c=e.R32UI),r===e.BYTE&&(c=e.R8I),r===e.SHORT&&(c=e.R16I),r===e.INT&&(c=e.R32I)),n===e.RG&&(r===e.FLOAT&&(c=e.RG32F),r===e.HALF_FLOAT&&(c=e.RG16F),r===e.UNSIGNED_BYTE&&(c=e.RG8),r===e.UNSIGNED_SHORT&&s&&(c=s.RG16_EXT),r===e.SHORT&&s&&(c=s.RG16_SNORM_EXT)),n===e.RG_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RG8UI),r===e.UNSIGNED_SHORT&&(c=e.RG16UI),r===e.UNSIGNED_INT&&(c=e.RG32UI),r===e.BYTE&&(c=e.RG8I),r===e.SHORT&&(c=e.RG16I),r===e.INT&&(c=e.RG32I)),n===e.RGB_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGB8UI),r===e.UNSIGNED_SHORT&&(c=e.RGB16UI),r===e.UNSIGNED_INT&&(c=e.RGB32UI),r===e.BYTE&&(c=e.RGB8I),r===e.SHORT&&(c=e.RGB16I),r===e.INT&&(c=e.RGB32I)),n===e.RGBA_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGBA8UI),r===e.UNSIGNED_SHORT&&(c=e.RGBA16UI),r===e.UNSIGNED_INT&&(c=e.RGBA32UI),r===e.BYTE&&(c=e.RGBA8I),r===e.SHORT&&(c=e.RGBA16I),r===e.INT&&(c=e.RGBA32I)),n===e.RGB&&(r===e.UNSIGNED_SHORT&&s&&(c=s.RGB16_EXT),r===e.SHORT&&s&&(c=s.RGB16_SNORM_EXT),r===e.UNSIGNED_INT_5_9_9_9_REV&&(c=e.RGB9_E5),r===e.UNSIGNED_INT_10F_11F_11F_REV&&(c=e.R11F_G11F_B10F)),n===e.RGBA){let t=o?Be:Rt.getTransfer(a);r===e.FLOAT&&(c=e.RGBA32F),r===e.HALF_FLOAT&&(c=e.RGBA16F),r===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),r===e.UNSIGNED_SHORT&&s&&(c=s.RGBA16_EXT),r===e.SHORT&&s&&(c=s.RGBA16_SNORM_EXT),r===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),r===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&u.get(`EXT_color_buffer_float`),c}function j(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,W(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function M(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),ee(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function P(e){let t=e.target;t.removeEventListener(`dispose`,P),te(t)}function ee(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&F(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function F(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function te(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let I=0;function ne(){I=0}function re(){return I}function ie(e){I=e}function ae(){let e=I;return e>=p.maxTextures&&W(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),I+=1,e}function L(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function R(t,n){let r=f.get(t);if(t.isVideoTexture&&B(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)W(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)W(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ge(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function oe(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?ge(r,t,n):(t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n))}function se(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?ge(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function ce(t,n){let r=f.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version?_e(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let le={[t]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[r]:e.MIRRORED_REPEAT},ue={[i]:e.NEAREST,[a]:e.NEAREST_MIPMAP_NEAREST,[o]:e.NEAREST_MIPMAP_LINEAR,[s]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[l]:e.LINEAR_MIPMAP_LINEAR},de={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function fe(t,n){if(n.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&W(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,le[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,le[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,le[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,ue[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,ue[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,de[n.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||f.get(n).__currentAnisotropy){let r=u.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,p.getMaxAnisotropy())),f.get(n).__currentAnisotropy=n.anisotropy}}}function pe(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,N));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=L(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&F(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function me(e,t,n){return Math.floor(Math.floor(e/n)/t)}function he(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=me(r.start,n.width,4),c=me(t.start,n.width,4);r.start<=i+1&&s===c&&me(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function ge(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=pe(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=Rt.getPrimaries(Rt.workingColorSpace),r=n.colorSpace===``?null:Rt.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=T(n.image,!1,p.maxTextureSize);t=ke(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=A(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);fe(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=M(n,t);if(n.isDepthTexture)u=j(n.format===D,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&he(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=rs(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=rs(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ae(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Ae(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);E(n)&&O(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function _e(t,n,r){if(n.image.length!==6)return;let i=pe(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=Rt.getPrimaries(Rt.workingColorSpace),s=n.colorSpace===``?null:Rt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=T(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=ke(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=A(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=M(n,h);fe(e.TEXTURE_CUBE_MAP,n);let C;if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?W(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Ae(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}E(n)&&O(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function z(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=A(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),Oe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,De(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=j(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Oe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=A(a.internalFormat,o,s,a.normalized,a.colorSpace);Oe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,De(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,De(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ye(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);if(a.__renderTarget=n,a.__webglTexture&&n.depthTexture.image.width===n.width&&n.depthTexture.image.height===n.height||(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(a.__webglInit===void 0&&(a.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,N)),a.__webglTexture===void 0){a.__webglTexture=e.createTexture(),d.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),fe(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=m.convert(n.depthTexture.format),r=m.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else R(n.depthTexture,0);let o=a.__webglTexture,s=De(n),c=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,l=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)Oe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else if(n.depthTexture.format===1027)Oe(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,l,c,o,0,s):e.framebufferTexture2D(e.FRAMEBUFFER,l,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function be(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)ye(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ye(n.__webglFramebuffer[0],t,0):ye(n.__webglFramebuffer,t,0)}}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),ve(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),ve(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}d.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,r){let i=f.get(t);n!==void 0&&z(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&be(t)}function Se(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,P);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Oe(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=A(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=De(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),ve(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),fe(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)z(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else z(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);E(n)&&O(e.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),fe(s,i),z(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),E(i)&&O(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),fe(a,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)z(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else z(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);E(n)&&O(a),d.unbindTexture()}t.depthBuffer&&be(t)}function Ce(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(E(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let we=[],Te=[];function Ee(t){if(t.samples>0){if(Oe(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer);let l=t.texture.mipmaps;l&&l.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(we.length=0,Te.length=0,we.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(we.push(o),Te.push(o),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Te)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,we))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function De(e){return Math.min(p.maxSamples,e.samples)}function Oe(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function B(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function ke(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Rt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&W(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):G(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ae(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ae,this.resetTextureUnits=ne,this.getTextureUnits=re,this.setTextureUnits=ie,this.setTexture2D=R,this.setTexture2DArray=oe,this.setTexture3D=se,this.setTextureCube=ce,this.rebindTextures=xe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=z,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function uu(e,t){function n(n,r=``){let i,a=Rt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var du=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fu=`
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

}`,pu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new oa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ta({vertexShader:du,fragmentShader:fu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new pa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mu=class extends tt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,p=null,m=null,g=typeof XRWebGLBinding<`u`,_=new pu,v={},y=t.getContextAttributes(),x=null,S=null,C=[],w=[],O=new kt,k=null,A=null,j=new Eo;j.viewport=new Xt;let M=new Eo;M.viewport=new Xt;let N=[j,M],P=new Bo,ee=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getHandSpace()};function te(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function I(){r.removeEventListener(`select`,te),r.removeEventListener(`selectstart`,te),r.removeEventListener(`selectend`,te),r.removeEventListener(`squeeze`,te),r.removeEventListener(`squeezestart`,te),r.removeEventListener(`squeezeend`,te),r.removeEventListener(`end`,I),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ee=null,F=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&W(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,te),r.addEventListener(`selectstart`,te),r.addEventListener(`selectend`,te),r.addEventListener(`squeeze`,te),r.addEventListener(`squeezestart`,te),r.addEventListener(`squeezeend`,te),r.addEventListener(`end`,I),r.addEventListener(`inputsourceschange`,ne),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?D:E,a=y.stencil?b:h);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Qt(f.textureWidth,f.textureHeight,{format:T,type:u,depthTexture:new ia(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Qt(p.framebufferWidth,p.framebufferHeight,{format:T,type:u,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let re=new K,ie=new K;function ae(e,t,n){re.setFromMatrixPosition(t.matrixWorld),ie.setFromMatrixPosition(n.matrixWorld);let r=re.distanceTo(ie),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function L(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(ee!==P.near||F!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),ee=P.near,F=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;L(P,i);for(let e=0;e<a.length;e++)L(a[e],i);a.length===2?ae(P,j,M):P.projectionMatrix.copy(j.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),R(e,P,i)};function R(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=at*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(e){return v[e]};let oe=null;function se(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=N[n];o===void 0&&(o=new Eo,o.layers.enable(n),o.viewport=new Xt,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new oa,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}oe&&oe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let ce=new as;ce.setAnimationLoop(se),this.setAnimationLoop=function(e){oe=e},this.dispose=function(){}}},hu=new tn,gu=new Nt;gu.set(-1,0,0,0,1,0,0,0,1);function _u(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,xa(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(hu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(gu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function vu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return G(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?W(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):W(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var yu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bu=null;function xu(){return bu===null&&(bu=new yi(yu,16,16,A,_),bu.name=`DFG_LUT`,bu.minFilter=s,bu.magFilter=s,bu.wrapS=n,bu.wrapT=n,bu.generateMipmaps=!1,bu.needsUpdate=!0),bu}var Su=class{constructor(e={}){let{canvas:t=Je(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:g=u}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=g,C=new Set([M,j,k]),w=new Set([u,h,p,b,v,y]),T=new Uint32Array(4),E=new Int32Array(4),D=new K,O=null,A=null,N=[],P=[],ee=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,te=!1,I=null,ne=null,re=null,ie=null;this._outputColorSpace=Re;let ae=0,L=0,R=null,oe=-1,se=null,ce=new Xt,le=new Xt,ue=null,de=new q(0),fe=0,pe=t.width,me=t.height,he=1,ge=null,_e=null,z=new Xt(0,0,pe,me),ve=new Xt(0,0,pe,me),ye=!1,be=new Fi,xe=!1,Se=!1,Ce=new tn,we=new K,Te=new Xt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Oe(){return R===null?he:1}let B=n;function ke(e,n){return t.getContext(e,n)}let Ae,je,V,Me,H,U,Ne,Pe,Fe,Ie,Le,ze,Be,Ve,He,Ue,Ge,Ke,qe,Ye,Ze,Qe,et;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,rt,!1),t.addEventListener(`webglcontextrestored`,it,!1),t.addEventListener(`webglcontextcreationerror`,at,!1),B===null){let t=`webgl2`;if(B=ke(t,e),B===null)throw ke(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}tt()}catch(e){throw t.removeEventListener(`webglcontextlost`,rt,!1),t.removeEventListener(`webglcontextrestored`,it,!1),t.removeEventListener(`webglcontextcreationerror`,at,!1),G(`WebGLRenderer: `+e.message),e}function tt(){Ae=new Bs(B),Ae.init(),Ze=new uu(B,Ae),je=new hs(B,Ae,e,Ze),V=new cu(B,Ae),je.reversedDepthBuffer&&m&&V.buffers.depth.setReversed(!0),ne=B.createFramebuffer(),re=B.createFramebuffer(),ie=B.createFramebuffer(),Me=new Us(B),H=new Hl,U=new lu(B,Ae,V,H,je,Ze,Me),Ne=new zs(F),Pe=new os(B),Qe=new ps(B,Pe),Fe=new Vs(B,Pe,Me,Qe),Ie=new Gs(B,Fe,Pe,Qe,Me),Ke=new Ws(B,je,U),He=new gs(H),Le=new Vl(F,Ne,Ae,je,Qe,He),ze=new _u(F,H),Be=new Kl,Ve=new $l(Ae),Ge=new fs(F,Ne,V,Ie,x,s),Ue=new su(F,Ie,je),et=new vu(B,Me,je,V),qe=new ms(B,Ae,Me),Ye=new Hs(B,Ae,Me),Me.programs=Le.programs,F.capabilities=je,F.extensions=Ae,F.properties=H,F.renderLists=Be,F.shadowMap=Ue,F.state=V,F.info=Me}S!==1009&&(ee=new qs(S,t.width,t.height,o,r,i));let nt=new mu(F,B);this.xr=nt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(e){e!==void 0&&(he=e,this.setSize(pe,me,!1))},this.getSize=function(e){return e.set(pe,me)},this.setSize=function(e,n,r=!0){nt.isPresenting?W(`WebGLRenderer: Can't change size while VR device is presenting.`):(pe=e,me=n,t.width=Math.floor(e*he),t.height=Math.floor(n*he),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ee!==null&&ee.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(pe*he,me*he).floor()},this.setDrawingBufferSize=function(e,n,r){pe=e,me=n,he=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)G(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){W(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ee.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ce)},this.getViewport=function(e){return e.copy(z)},this.setViewport=function(e,t,n,r){e.isVector4?z.set(e.x,e.y,e.z,e.w):z.set(e,t,n,r),V.viewport(ce.copy(z).multiplyScalar(he).round())},this.getScissor=function(e){return e.copy(ve)},this.setScissor=function(e,t,n,r){e.isVector4?ve.set(e.x,e.y,e.z,e.w):ve.set(e,t,n,r),V.scissor(le.copy(ve).multiplyScalar(he).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(e){V.setScissorTest(ye=e)},this.setOpaqueSort=function(e){ge=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(R!==null){let t=R.texture.format;e=C.has(t)}if(e){let e=R.texture.type,t=w.has(e),n=Ge.getClearColor(),r=Ge.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,B.clearBufferuiv(B.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,B.clearBufferiv(B.COLOR,0,E))}else r|=B.COLOR_BUFFER_BIT}t&&(r|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&B.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),I=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,rt,!1),t.removeEventListener(`webglcontextrestored`,it,!1),t.removeEventListener(`webglcontextcreationerror`,at,!1),Ge.dispose(),Be.dispose(),Ve.dispose(),H.dispose(),Ne.dispose(),Ie.dispose(),Qe.dispose(),et.dispose(),Le.dispose(),nt.dispose(),nt.removeEventListener(`sessionstart`,ft),nt.removeEventListener(`sessionend`,pt),mt.stop()};function rt(e){e.preventDefault(),Xe(`WebGLRenderer: Context Lost.`),te=!0}function it(){Xe(`WebGLRenderer: Context Restored.`),te=!1;let e=Me.autoReset,t=Ue.enabled,n=Ue.autoUpdate,r=Ue.needsUpdate,i=Ue.type;tt(),Me.autoReset=e,Ue.enabled=t,Ue.autoUpdate=n,Ue.needsUpdate=r,Ue.type=i}function at(e){G(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ot(e){let t=e.target;t.removeEventListener(`dispose`,ot),st(t)}function st(e){ct(e),H.remove(e)}function ct(e){let t=H.get(e).programs;t!==void 0&&(t.forEach(function(e){Le.releaseProgram(e)}),e.isShaderMaterial&&Le.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ee);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=wt(e,t,n,r,i);V.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Fe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Qe.setup(i,r,s,n,c);let h,g=qe;if(c!==null&&(h=Pe.get(c),g=Ye,g.setIndex(h)),i.isMesh)r.wireframe===!0?(V.setLineWidth(r.wireframeLinewidth*Oe()),g.setMode(B.LINES)):g.setMode(B.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),V.setLineWidth(e*Oe()),i.isLineSegments?g.setMode(B.LINES):i.isLineLoop?g.setMode(B.LINE_LOOP):g.setMode(B.LINE_STRIP)}else i.isPoints?g.setMode(B.POINTS):i.isSprite&&g.setMode(B.TRIANGLES);if(i.isBatchedMesh){if(Ae.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Pe.get(c).bytesPerElement:1,o=H.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(B,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function lt(e,t,n,r){I!==null&&e.isNodeMaterial&&I.setObject(r,e),xe===!0&&He.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,bt(e,t,r),e.side=0,e.needsUpdate=!0,bt(e,t,r),e.side=2):bt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),I!==null&&I.renderStart(e,t,n),A=Ve.get(n),A.init(t),P.push(A),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(A.pushLight(e),e.castShadow&&A.pushShadow(e))}),A.setupLights(),I!==null&&I.updateLights(A.state.lightsArray),Se=this.localClippingEnabled,xe=He.init(this.clippingPlanes,Se),xe===!0&&He.setGlobalState(this.clippingPlanes,t),I!==null&&Ue.render(A.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];lt(o,n,t,e),r.add(o)}else lt(i,n,t,e),r.add(i)}}),A=P.pop(),I!==null&&I.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=H.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ae.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ut=null;function dt(e){ut&&ut(e)}function ft(){mt.stop()}function pt(){mt.start()}let mt=new as;mt.setAnimationLoop(dt),typeof self<`u`&&mt.setContext(self),this.setAnimationLoop=function(e){ut=e,nt.setAnimationLoop(e),e===null?mt.stop():mt.start()},nt.addEventListener(`sessionstart`,ft),nt.addEventListener(`sessionend`,pt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){G(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(te===!0)return;I!==null&&I.renderStart(e,t);let n=nt.enabled===!0&&nt.isPresenting===!0,r=ee!==null&&(R===null||n)&&ee.begin(F,R);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(ee===null||ee.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(t),t=nt.getCamera()),e.isScene===!0&&e.onBeforeRender(F,e,t,R),A=Ve.get(e,P.length),A.init(t),A.state.textureUnits=U.getTextureUnits(),P.push(A),Ce.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),be.setFromProjectionMatrix(Ce,We,t.reversedDepth),Se=this.localClippingEnabled,xe=He.init(this.clippingPlanes,Se),O=Be.get(e,N.length),O.init(),N.push(O),nt.enabled===!0&&nt.isPresenting===!0){let e=F.xr.getDepthSensingMesh();e!==null&&ht(e,t,-1/0,F.sortObjects)}ht(e,t,0,F.sortObjects),O.finish(),I!==null&&I.updateLights(A.state.lightsArray),F.sortObjects===!0&&O.sort(ge,_e),De=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,De&&Ge.addToRenderList(O,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&He.beginShadows();let i=A.state.shadowsArray;if(Ue.render(i,e,t),xe===!0&&He.endShadows(),(r&&ee.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(A.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];_t(n,r,e,a)}De&&Ge.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];gt(O,e,n,n.viewport)}}else r.length>0&&_t(n,r,e,t),De&&Ge.render(e),gt(O,e,t)}R!==null&&L===0&&(U.updateMultisampleRenderTarget(R),U.updateRenderTargetMipmap(R)),r&&ee.end(F),e.isScene===!0&&e.onAfterRender(F,e,t),Qe.resetDefaultState(),oe=-1,se=null,P.pop(),P.length>0?(A=P[P.length-1],U.setTextureUnits(A.state.textureUnits),xe===!0&&He.setGlobalState(F.clippingPlanes,A.state.camera)):A=null,N.pop(),O=N.length>0?N[N.length-1]:null,I!==null&&I.renderEnd()};function ht(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)A.pushLightProbeGrid(e);else if(e.isLight)A.pushLight(e),e.castShadow&&A.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(be)){r&&Te.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ce);let i=Ie.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Te.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(be))){let i=Ie.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Te.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Te.copy(e.boundingSphere.center)),Te.applyMatrix4(e.matrixWorld).applyMatrix4(Ce)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Te.z,s,t)}}else a.visible&&O.push(e,i,a,n,Te.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ht(i[e],t,n,r)}function gt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;A.setupLightsView(n),xe===!0&&He.setGlobalState(F.clippingPlanes,n),r&&V.viewport(ce.copy(r)),i.length>0&&vt(i,t,n),a.length>0&&vt(a,t,n),o.length>0&&vt(o,t,n),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function _t(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[r.id]===void 0){let e=Ae.has(`EXT_color_buffer_half_float`)||Ae.has(`EXT_color_buffer_float`);A.state.transmissionRenderTarget[r.id]=new Qt(1,1,{generateMipmaps:!0,type:e?_:u,minFilter:l,samples:Math.max(4,je.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}let a=A.state.transmissionRenderTarget[r.id],o=r.viewport||ce;a.setSize(o.z*F.transmissionResolutionScale,o.w*F.transmissionResolutionScale);let s=F.getRenderTarget(),c=F.getActiveCubeFace(),d=F.getActiveMipmapLevel();F.setRenderTarget(a),F.getClearColor(de),fe=F.getClearAlpha(),fe<1&&F.setClearColor(16777215,.5),F.clear(),De&&Ge.render(n);let f=F.toneMapping;F.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),A.setupLightsView(r),xe===!0&&He.setGlobalState(F.clippingPlanes,r),vt(e,n,r),U.updateMultisampleRenderTarget(a),U.updateRenderTargetMipmap(a),Ae.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,yt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(U.updateMultisampleRenderTarget(a),U.updateRenderTargetMipmap(a))}F.setRenderTarget(s,c,d),F.setClearColor(de,fe),p!==void 0&&(r.viewport=p),F.toneMapping=f}function vt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&yt(o,t,n,s,l,c)}}function yt(e,t,n,r,i,a){I!==null&&i.isNodeMaterial&&I.setObject(e,i),e.onBeforeRender(F,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(F,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=2):F.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(F,t,n,r,i,a)}function bt(e,t,n){t.isScene!==!0&&(t=Ee);let r=H.get(e),i=A.state.lights,a=A.state.shadowsArray,o=i.state.version,s=Le.getParameters(e,i.state,a,t,n,A.state.lightProbeGridArray),c=Le.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ne.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ot),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return St(e,s),d}else s.uniforms=Le.getUniforms(e),I!==null&&e.isNodeMaterial&&I.build(e,n,s),e.onBeforeCompile(s,F),d=Le.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=He.uniform),St(e,s),r.needsLights=Et(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=A.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function xt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=el.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function St(e,t){let n=H.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ct(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function wt(e,t,n,r,i){t.isScene!==!0&&(t=Ee),U.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=R===null?F.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Rt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ne.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(h=F.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=H.get(r),y=A.state.lights;if(xe===!0&&(Se===!0||e!==se)){let t=e===se&&r.id===oe;He.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==He.numPlanes||v.numIntersection!==He.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=A.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=bt(r,t,i),I&&r.isNodeMaterial&&I.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(V.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==oe&&(oe=r.id,C=!0),v.needsLights){let e=Ct(A.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||se!==e){V.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(B,`projectionMatrix`,e.projectionMatrix),T.setValue(B,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(B,we.setFromMatrixPosition(e.matrixWorld)),je.logarithmicDepthBuffer&&T.setValue(B,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(B,`isOrthographic`,e.isOrthographicCamera===!0),se!==e&&(se=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(B,`sunShadowMap`,y.state.sunShadowMap,U),y.state.directionalShadowMap.length>0&&T.setValue(B,`directionalShadowMap`,y.state.directionalShadowMap,U),y.state.spotShadowMap.length>0&&T.setValue(B,`spotShadowMap`,y.state.spotShadowMap,U),y.state.pointShadowMap.length>0&&T.setValue(B,`pointShadowMap`,y.state.pointShadowMap,U)),i.isSkinnedMesh){T.setOptional(B,i,`bindMatrix`),T.setOptional(B,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(B,`boneTexture`,e.boneTexture,U))}i.isBatchedMesh&&(T.setOptional(B,i,`batchingTexture`),T.setValue(B,`batchingTexture`,i._matricesTexture,U),T.setOptional(B,i,`batchingIdTexture`),T.setValue(B,`batchingIdTexture`,i._indirectTexture,U),T.setOptional(B,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(B,`batchingColorTexture`,i._colorsTexture,U));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Ke.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(B,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=xu()),C){if(T.setValue(B,`toneMappingExposure`,F.toneMappingExposure),v.needsLights&&Tt(E,w),a&&r.fog===!0&&ze.refreshFogUniforms(E,a),ze.refreshMaterialUniforms(E,r,he,me,A.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}el.upload(B,xt(v),E,U)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(el.upload(B,xt(v),E,U),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(B,`center`,i.center),T.setValue(B,`modelViewMatrix`,i.modelViewMatrix),T.setValue(B,`normalMatrix`,i.normalMatrix),T.setValue(B,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];et.update(n,x),et.bind(n,x)}}return x}function Tt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Et(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(e,t,n){let r=H.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),H.get(e.texture).__webglTexture=t,H.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=H.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){R=e,ae=t,L=n;let r=null,i=!1,a=!1;if(e){let o=H.get(e);if(o.__useDefaultFramebuffer!==void 0){V.bindFramebuffer(B.FRAMEBUFFER,o.__webglFramebuffer),ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest,V.viewport(ce),V.scissor(le),V.setScissorTest(ue),oe=-1;return}if(o.__webglFramebuffer===void 0)U.setupRenderTarget(e);else if(o.__hasExternalTextures)U.rebindTextures(e,H.get(e.texture).__webglTexture,H.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&H.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);U.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=H.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&U.useMultisampledRTT(e)===!1?H.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ce.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest}else ce.copy(z).multiplyScalar(he).floor(),le.copy(ve).multiplyScalar(he).floor(),ue=ye;if(n!==0&&(r=ne),V.bindFramebuffer(B.FRAMEBUFFER,r)&&V.drawBuffers(e,r),V.viewport(ce),V.scissor(le),V.setScissorTest(ue),i){let r=H.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=H.get(e.textures[t]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=H.get(e.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,t.__webglTexture,n)}oe=-1};function Dt(e){let t=H.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=je.textureFormatReadable(e.format),t.__typeReadable=je.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){V.bindFramebuffer(B.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s);let u=Dt(o);if(u.__formatReadable===!1){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){G(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&B.readPixels(t,n,r,i,Ze.convert(c),Ze.convert(l),a)}finally{let e=R===null?null:H.get(R).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){V.bindFramebuffer(B.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+s);let d=Dt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,f),B.bufferData(B.PIXEL_PACK_BUFFER,a.byteLength,B.STREAM_READ),B.readPixels(t,n,r,i,Ze.convert(l),Ze.convert(u),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let p=R===null?null:H.get(R).__webglFramebuffer;V.bindFramebuffer(B.FRAMEBUFFER,p);let m=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await $e(B,m,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,f),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,a),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(f),B.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;U.setTexture2D(e,0),B.copyTexSubImage2D(B.TEXTURE_2D,n,0,0,o,s,i,a),V.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ze.convert(t.format),_=Ze.convert(t.type),v;t.isData3DTexture?(U.setTexture3D(t,0),v=B.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(U.setTexture2DArray(t,0),v=B.TEXTURE_2D_ARRAY):(U.setTexture2D(t,0),v=B.TEXTURE_2D),V.activeTexture(B.TEXTURE0),V.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,t.flipY),V.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),V.pixelStorei(B.UNPACK_ALIGNMENT,t.unpackAlignment);let y=V.getParameter(B.UNPACK_ROW_LENGTH),b=V.getParameter(B.UNPACK_IMAGE_HEIGHT),x=V.getParameter(B.UNPACK_SKIP_PIXELS),S=V.getParameter(B.UNPACK_SKIP_ROWS),C=V.getParameter(B.UNPACK_SKIP_IMAGES);V.pixelStorei(B.UNPACK_ROW_LENGTH,h.width),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,h.height),V.pixelStorei(B.UNPACK_SKIP_PIXELS,l),V.pixelStorei(B.UNPACK_SKIP_ROWS,u),V.pixelStorei(B.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=H.get(e),r=H.get(t),h=H.get(n.__renderTarget),g=H.get(r.__renderTarget);V.bindFramebuffer(B.READ_FRAMEBUFFER,h.__webglFramebuffer),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(e).__webglTexture,i,d+n),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,H.get(t).__webglTexture,a,m+n)),B.blitFramebuffer(l,u,o,s,f,p,o,s,B.DEPTH_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||H.has(e)){let n=H.get(e),r=H.get(t);V.bindFramebuffer(B.READ_FRAMEBUFFER,re),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,ie);for(let e=0;e<c;e++)w?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,n.__webglTexture,i),T?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,r.__webglTexture,a),i===0?T?B.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):B.copyTexSubImage2D(v,a,f,p,l,u,o,s):B.blitFramebuffer(l,u,o,s,f,p,o,s,B.COLOR_BUFFER_BIT,B.NEAREST);V.bindFramebuffer(B.READ_FRAMEBUFFER,null),V.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?B.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):B.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):B.texSubImage2D(B.TEXTURE_2D,a,f,p,o,s,g,_,h);V.pixelStorei(B.UNPACK_ROW_LENGTH,y),V.pixelStorei(B.UNPACK_IMAGE_HEIGHT,b),V.pixelStorei(B.UNPACK_SKIP_PIXELS,x),V.pixelStorei(B.UNPACK_SKIP_ROWS,S),V.pixelStorei(B.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&B.generateMipmap(v),V.unbindTexture()},this.initRenderTarget=function(e){H.get(e).__webglFramebuffer===void 0&&U.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?U.setTextureCube(e,0):e.isData3DTexture?U.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?U.setTexture2DArray(e,0):U.setTexture2D(e,0),V.unbindTexture()},this.resetState=function(){ae=0,L=0,R=null,V.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return We}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}};function Cu(){let e=new Map,t=0,n=0,r=0,i=!1;return{update(a,o,s){let c=[];if(!s)return i=!1,n=0,{cues:c,beat:null,chasing:i};t=Math.max(0,t-Math.max(0,o));let l=a.some(e=>e.state===`chase`);if(l&&!i)c.push(`chase`),n=0,r=0,t=1.6;else if(!l&&t===0){let n=a.find(t=>t.state!==`patrol`&&t.state!==e.get(t.id));n&&(c.push(n.state===`suspicious`?`notice`:`check`),t=1.6)}e=new Map(a.map(e=>[e.id,e.state])),i=l;let u=null;return i?(n-=Math.max(0,o),n<=0&&(u=r++,n+=.255)):(n=0,r=0),{cues:c,beat:u,chasing:i}}}}var wu=class{context;source;gain;level;target=0;recovery=0;disposed=!1;constructor(e){this.context=e;let t=e.sampleRate,n=t*32,r=e.createBuffer(2,n,t),i=[[146.832,174.614,220,329.628],[116.541,174.614,233.082,293.665],[130.813,174.614,195.998,293.665],[110,164.814,220,261.626]];for(let e=0;e<2;e++){let a=r.getChannelData(e);for(let r=0;r<4;r++)for(let o=0;o<t*12;o++){let s=o/t,c=Math.sin(Math.PI*s/12)**2,l=(Math.round(r*8*t)+o)%n,u=0;for(let t=0;t<4;t++){let n=i[r][t]*(1+(e===0?-1:1)*8e-4);u+=Math.sin(2*Math.PI*n*s+t*.7)*.032,u+=Math.sin(2*Math.PI*n*2*s+t)*.004}a[l]+=u*c}[440,523.251,587.33,523.251,391.995,440,329.628,293.665].forEach((e,r)=>{let i=(r*4+2)*t;for(let r=0;r<t*3;r++){let o=r/t,s=(1-Math.exp(-o*5))*Math.exp(-o*1.8)*Math.sin(Math.PI*o/3)**2;a[(i+r)%n]+=Math.sin(2*Math.PI*e*o)*s*.025}})}this.level=e.createGain(),this.level.gain.value=1,this.level.connect(e.destination),this.gain=e.createGain(),this.gain.gain.value=0,this.gain.connect(this.level),this.source=e.createBufferSource(),this.source.buffer=r,this.source.loop=!0,this.source.connect(this.gain),this.source.start()}update(e,t,n,r){if(this.disposed)return;r===`none`?t&&(this.recovery=Math.max(0,this.recovery-e)):this.recovery=2.5;let i=!t||!n||r===`chase`?0:r===`checking`||this.recovery>0?.02:.14;i!==this.target&&(this.target=i,this.gain.gain.setTargetAtTime(i,this.context.currentTime,i<this.gain.gain.value?.035:1.2))}setVolume(e){this.disposed||this.level.gain.setTargetAtTime(e/.5,this.context.currentTime,.025)}get state(){return{target:this.target,gain:this.gain.gain.value,level:this.level.gain.value}}dispose(){this.disposed||(this.disposed=!0,this.source.stop(),this.source.disconnect(),this.gain.disconnect(),this.level.disconnect())}},Tu=null,Eu=new Set,Du=new Set,Ou=null,ku=null,Au=.7,ju=!0,Mu=.5,Nu=null;function Pu(e){Mu=Number.isFinite(e)?Math.max(0,Math.min(1,e)):.5,Nu?.setVolume(Mu)}function Fu(e){ju=e,e||Nu?.update(0,!1,!1,`none`)}function Iu(e){Au=Number.isFinite(e)?Math.max(0,Math.min(1,e)):.7,Tu&&ku&&ku.gain.setTargetAtTime(Au,Tu.currentTime,.025)}async function Lu(){try{if(!Tu||Tu.state===`closed`){if(typeof window>`u`)return;let e=window.AudioContext??window.webkitAudioContext;if(!e)return;Tu=new e,ku=Tu.createGain(),ku.gain.value=Au,ku.connect(Tu.destination)}Tu.state===`suspended`&&await Tu.resume()}catch{}}function Ru(e,t,n,r,i=`sine`,a=0,o=!1){let s=Tu;if(!s||s.state!==`running`||Eu.size>=24)return!1;let c,l;try{c=s.createOscillator(),l=s.createGain();let u=s.currentTime+a;c.type=i,c.frequency.setValueAtTime(Math.max(1,e),u),c.frequency.exponentialRampToValueAtTime(Math.max(1,t),u+r),l.gain.setValueAtTime(1e-4,u),l.gain.exponentialRampToValueAtTime(Math.max(2e-4,n),u+.008),l.gain.exponentialRampToValueAtTime(1e-4,u+r),c.connect(l).connect(ku??s.destination);let d=c,f=l;return Eu.add(d),o&&Du.add(d),d.onended=()=>{d.disconnect(),f.disconnect(),Eu.delete(d),Du.delete(d)},d.start(u),d.stop(u+r+.02),!0}catch{return c&&(Eu.delete(c),Du.delete(c),c.disconnect()),l?.disconnect(),!1}}function zu(e){if(!Number.isFinite(e))return;let t=1/(1+(Math.max(0,e)/3.5)**2);Ru(105,42,.19*t,.17),Ru(220,65,.045*t,.07,`triangle`)}function Bu(){Vu(1600,260,.12,.32),Ru(110,38,.1,.24,`sine`,0,!0)}function Vu(e,t,n,r,i=0,a=.012){let o=Tu;if(!o||o.state!==`running`||Eu.size>=24)return;let s,c,l;try{if(!Ou){Ou=o.createBuffer(1,o.sampleRate,o.sampleRate);let e=Ou.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}s=o.createBufferSource(),s.buffer=Ou,s.loop=!0,c=o.createBiquadFilter(),c.type=`lowpass`,c.Q.value=.65,l=o.createGain();let u=o.currentTime+i;c.frequency.setValueAtTime(e,u),c.frequency.exponentialRampToValueAtTime(t,u+r),l.gain.setValueAtTime(1e-4,u),l.gain.exponentialRampToValueAtTime(n,u+a),l.gain.exponentialRampToValueAtTime(1e-4,u+r),s.connect(c).connect(l).connect(ku??o.destination);let d=s,f=l,p=c;Eu.add(d),Du.add(d),d.onended=()=>{d.disconnect(),p.disconnect(),f.disconnect(),Eu.delete(d),Du.delete(d)},d.start(u,Math.random()*.5),d.stop(u+r+.02)}catch{s&&(Eu.delete(s),Du.delete(s),s.disconnect()),c?.disconnect(),l?.disconnect()}}function Hu(){Ru(110,360,.055,.48,`triangle`)}function Uu(){Ru(420,65,.12,.16,`triangle`)}function Wu(){Ru(90,30,.25,.24),Ru(170,45,.075,.1,`triangle`)}function Gu(){Ru(125,38,.12,.16,`triangle`)}function Ku(){[784,988,1319].forEach((e,t)=>Ru(e,e,.13,.22,`triangle`,t*.08))}var qu=class{rewardsPlayed=0;score=Cu();chaseActive=!1;threatCues=0;chaseBeats=0;get threat(){return{chasing:this.chaseActive,cues:this.threatCues,beats:this.chaseBeats,voices:Du.size}}get musicState(){return{enabled:ju,volume:Mu,...Nu?.state??{target:0,gain:0,level:0}}}updateThreat(e,t,n=!0){if(Tu?.state===`running`){n&&ju&&!Nu&&(Nu=new wu(Tu),Nu.setVolume(Mu));let r=e.some(e=>e.state===`chase`)?`chase`:e.some(e=>e.state!==`patrol`)?`checking`:`none`;Nu?.update(t,n,ju,r)}let r=this.score.update(e,t,n&&Tu?.state===`running`);if(!n||this.chaseActive&&!r.chasing){for(let e of Du){try{e.stop()}catch{}e.disconnect(),Eu.delete(e)}Du.clear()}this.chaseActive=r.chasing;for(let e of r.cues)e===`chase`?(Vu(2400,180,.19,.48,0,.008),Ru(145,32,.15,.32,`sine`,0,!0)):e===`notice`?Bu():Vu(900,180,.09,.38,0,.035),this.threatCues++;if(r.beat!==null){if(r.beat%2==0){let e=Math.min(1,r.beat/16);Ru(88,34,.075+e*.025,.15,`sine`,0,!0),Ru(72,30,.042+e*.015,.13,`sine`,.14,!0),Vu(310+e*180,95,.055+e*.025,.48,0,.065)}this.chaseBeats++}}get state(){return Tu?.state??`none`}get volume(){return ku?.gain.value??Au}unlock(){Lu()}playReward(){Tu?.state===`running`&&(Ku(),this.rewardsPlayed+=1)}playBlip(e){Number.isFinite(e)&&Ru(Math.max(1,e),Math.max(1,e),.08,.09)}dispose(){Nu?.dispose(),Nu=null;for(let e of Eu){try{e.stop()}catch{}e.disconnect()}Eu.clear(),Du.clear(),this.chaseActive=!1;let e=Tu;Tu=null,Ou=null,ku?.disconnect(),ku=null,e&&e.state!==`closed`&&e.close().catch(()=>{})}},Ju=Object.freeze({volume:.7,musicEnabled:!0,musicVolume:.5,sensitivity:1,invertY:!1,quality:`high`,showHints:!0,reducedMotion:!1}),Yu=`nightshift.settings.v1`;function Xu(e){if(e)return e;try{return globalThis.localStorage}catch{return}}function Zu(e){let t=e&&typeof e==`object`?e:{},n=(e,t,n,r)=>typeof e==`number`&&Number.isFinite(e)?Math.max(n,Math.min(r,e)):t;return{volume:n(t.volume,Ju.volume,0,1),musicEnabled:typeof t.musicEnabled==`boolean`?t.musicEnabled:Ju.musicEnabled,musicVolume:n(t.musicVolume,Ju.musicVolume,0,1),sensitivity:n(t.sensitivity,Ju.sensitivity,.15,3),invertY:typeof t.invertY==`boolean`?t.invertY:Ju.invertY,quality:[`low`,`medium`,`high`].includes(t.quality??``)?t.quality:Ju.quality,showHints:typeof t.showHints==`boolean`?t.showHints:Ju.showHints,reducedMotion:typeof t.reducedMotion==`boolean`?t.reducedMotion:Ju.reducedMotion}}function Qu(e){try{return Zu(JSON.parse(Xu(e)?.getItem(Yu)??`null`))}catch{return{...Ju}}}function $u(e,t){let n=Zu(e);try{Xu(t)?.setItem(Yu,JSON.stringify(n))}catch{}return n}function ed(e,t,n){let r=t=>(e.add(t),t),i=e=>(t.add(e),e),a=r(new Da({color:16732058,roughness:.25,metalness:.1,emissive:5900844,emissiveIntensity:.6})),o=r(new Da({color:16767306,roughness:.35,emissive:4206592})),s=new An;s.name=`candy`;let c=new J(i(new ha(.09,18,12)),a);c.scale.set(1.25,.9,.9),c.castShadow=!0,s.add(c);let l=i(new la(.06,.09,10));for(let e of[-1,1]){let t=new J(l,o);t.rotation.z=Math.PI/2*e,t.position.x=e*.15,t.castShadow=!0,s.add(t)}return{id:`candy-1`,name:`конфета`,value:25,weight:.5,kind:`candy`,state:`world`,pos:{...n},radius:.16,mesh:s}}function td(e,t,n){let r=n,i=r.kind===`candy`?ed(e,t,r.position):{id:r.id,name:r.label,value:r.value,state:`world`,pos:{x:r.position.x,z:r.position.z},radius:.18,mesh:new An},a=(t,n=0)=>{let r=new Da({color:t,metalness:n,roughness:n?.28:.85});return e.add(r),r},o=(e,n,r=0,a=0,o=0)=>{t.add(e);let s=new J(e,n);return s.position.set(r,a,o),s.castShadow=!0,s.receiveShadow=!0,i.mesh.add(s),s};if(r.kind===`cookie`){o(new ca(.14,.145,.055,12),a(13011781));let e=a(3678746);for(let t=0;t<7;t++){let n=t*2.4,r=t%2?.09:.055;o(new ha(.016,6,4),e,Math.cos(n)*r,.03,Math.sin(n)*r)}}else if(r.kind===`coin`){let e=a(14333530,.8);o(new ca(.115,.115,.025,32),e);let t=o(new ga(.091,.008,6,32),e,0,.017);t.rotation.x=-Math.PI/2,o(new sa(.018,.008,.09),e,0,.018)}else if(r.kind===`key`){let e=a(12558949,.75),t=o(new ga(.065,.018,8,20),e,-.1);t.rotation.x=-Math.PI/2,o(new sa(.21,.025,.03),e,.055);for(let t of[.1,.15])o(new sa(.025,.025,.065),e,t,0,.025)}else if(r.kind===`ring`){let e=o(new ga(.09,.017,10,32),a(15320694,.9));e.rotation.x=-Math.PI/2,o(new fa(.047),a(10414591,.45),0,.045,-.09)}return i.mesh.name=r.kind,i.mesh.position.set(r.position.x,r.position.y,r.position.z),{...i,id:r.id,name:r.label,value:r.value,weight:r.weight,kind:r.kind,surfaceY:r.position.y-.09}}function nd(e,t){let n=e.map(e=>{let n=new Jr({color:16763504,side:1,transparent:!0,opacity:0,depthWrite:!1,depthTest:!0});t.add(n);let r=[];e.mesh.traverse(e=>{e instanceof J&&r.push(e)});for(let e of r){let t=new J(e.geometry,n);t.name=`loot-outline`,t.userData.lootOutline=!0,t.scale.setScalar(1.045),t.raycast=()=>{},e.add(t)}let i=new An;i.name=`loot-pickup-marker`,i.userData.lootMarker=!0,i.raycast=()=>{};let a=e.kind===`key`||e.kind===`ring`,o=new Jr({color:a?16766346:12180951,transparent:!0,opacity:0,depthTest:!0,depthWrite:!1,toneMapped:!1}),s=o.clone();t.add(o),t.add(s);let c=new ga(.2,.008,5,40),l=new fa(.055),u=new ca(.009,.025,.67,7,1,!0),d=new J(c,o);d.rotation.x=-Math.PI/2,d.position.y=-.045;let f=new J(l,o);f.position.y=.76;let p=new J(u,s);p.position.y=.34;for(let e of[d,f,p])e.raycast=()=>{},e.userData.lootMarker=!0;return i.add(d,f,p),e.mesh.add(i),o.addEventListener(`dispose`,()=>{c.dispose(),l.dispose(),u.dispose()}),{item:e,material:n,marker:i,markerMaterial:o,beamMaterial:s,ring:d,tip:f,rare:a}});return(e,t,r=performance.now()/1e3)=>{for(let{item:i,material:a,marker:o,markerMaterial:s,beamMaterial:c,ring:l,tip:u,rare:d}of n){let n=Math.hypot(e.x-i.pos.x,e.z-i.pos.z),f=Math.abs(e.y-(i.surfaceY??0))<.24;if(a.opacity=i.state!==`world`||n>2||!f?0:i===t?.65:(1-n/2)*(i.value>=75?.24:.16),o.visible=i.state===`world`&&n<(d?8:6),!o.visible)continue;let p=i===t,m=p?.95:Math.max(.16,.6-n*.065),h=r*2+i.pos.x*.8;s.opacity=m*(.9+Math.sin(h)*.1),c.opacity=m*.2,u.position.y=.76+Math.sin(h)*.035,u.rotation.y=r*.7,l.scale.setScalar(p?1.16:1)}}}var rd=-2.03,id=[[`cabinet-run`,[-.2,0,-3.82]],[`sink`,[-2.95,0,-3.75]],[`stove`,[2.4,0,-3.82]],[`fridge`,[3.4,0,-3.72]],[`kitchen-cart`,[-1.85,0,-2.8]],[`extractor`,[2.4,1.55,-3.88]],[`utensil-shelf`,[-2.95,1.48,-4.02]],[`washing-dishes`,[-2.05,.9,-3.85]],[`prep-board`,[-.15,.9,-3.8]],[`prep-bread`,[-.15,.925,-3.8]],[`simmer-pot`,[2.5,.9,-3.83]],...[-1.65,-.65,.35,1.35].map((e,t)=>[`upper-${t}`,[e,1.55,-3.97]])],ad={...Object.fromEntries(id.map(([e,t])=>[e,{from:t,to:[e===`sink`?-2.7:t[0],e===`utensil-shelf`?1.65:t[1],t[2]+rd],fromYaw:0,yaw:0}])),"north-pantry-shelf":{from:[-3.5,0,-5.3],to:[-3.72,0,-4.7],fromYaw:Math.PI/2,yaw:Math.PI/2},"north-breakfast-bench":{from:[-.5,0,-5.82],to:[0,0,-3.59],fromYaw:0,yaw:0},"north-breakfast-table":{from:[-.5,0,-5.03],to:[0,0,-2.8],fromYaw:0,yaw:0},"north-breakfast-stool":{from:[1.15,0,-5.7],to:[1.65,0,-3.47],fromYaw:0,yaw:0},sofa:{from:[10.7,0,-3.35],to:[10.7,0,-3.35],fromYaw:0,yaw:Math.PI/2},coffee:{from:[10.7,0,-.9],to:[12.25,0,-3.35],fromYaw:0,yaw:Math.PI/2},"media-console":{from:[13.65,0,.2],to:[15.6,0,-3.35],fromYaw:-Math.PI/2,yaw:-Math.PI/2},"living-side-table":{from:[12.65,0,-1.5],to:[13.1,0,-1.45],fromYaw:0,yaw:0},"kitchen-sideboard":{from:[2.65,0,3.65],to:[3.6,0,3.3],fromYaw:Math.PI,yaw:Math.PI/2},"corridor-console":{from:[5.5,0,-3.82],to:[4.4,0,-3.82],fromYaw:0,yaw:Math.PI/2},"hall-bench":{from:[5.5,0,-2.85],to:[4.45,0,-2.4],fromYaw:0,yaw:Math.PI/2},"cover-gallery-bench":{from:[5.55,0,1.6],to:[4.65,0,1.6],fromYaw:0,yaw:Math.PI/2},"hall-shoe-rack":{from:[4.65,0,2.9],to:[4.4,0,3.4],fromYaw:Math.PI/2,yaw:Math.PI/2},"hall-low-cabinet":{from:[5.5,0,3.7],to:[4.45,0,4.6],fromYaw:Math.PI,yaw:Math.PI/2},"bedroom-bedside-west":{from:[8.05,0,-10.6],to:[8.05,0,-11.25],fromYaw:0,yaw:0},"bedroom-bedside-east":{from:[11.35,0,-10.6],to:[11.35,0,-11.25],fromYaw:0,yaw:0},"bedroom-chest":{from:[12,0,-10.75],to:[9.7,0,-8.85],fromYaw:0,yaw:0}},od={"north-breakfast-rug":{position:[0,.002,-2.92],rotationY:0},"north-breakfast-pendant":{position:[0,1.4,-2.8],rotationY:0},"north-breakfast-books":{position:[-.3,.43,-2.8],rotationY:0},"north-breakfast-tray":{position:[.35,.43,-2.8],rotationY:0},"north-breakfast-plant":{position:[-3.7,1.2,-4.7],rotationY:0},"cover-larder-screen":{position:[-3.72,0,-2.75],rotationY:Math.PI/2},"pantry-screen":{position:[-3.68,0,5.4],rotationY:Math.PI/2},"north-library-chair":{position:[10.1,0,-5.42],rotationY:0},"living-armchair":{position:[12.2,0,-1.5],rotationY:Math.PI/2-.3},"east-reading-chair":{position:[14.6,0,3.85],rotationY:Math.PI+.25},"reading-chair":{position:[11.65,0,6.35],rotationY:Math.PI},"bedroom-reading-chair":{position:[15.15,0,-8.5],rotationY:-2.3},"living-tv":{position:[15.57,.55,-3.35],rotationY:-Math.PI/2},"living-lamp":{position:[10.6,0,-1.75],rotationY:0},"living-art":{position:[15.93,1.15,-.8],rotationY:-Math.PI/2},"sideboard-provisions":{position:[3.6,.72,3],rotationY:-Math.PI/2},"hall-mail":{position:[4.4,.941,-4.2],rotationY:Math.PI/2},"hall-tray":{position:[4.4,.9,-4.2],rotationY:Math.PI/2},"hall-books":{position:[4.4,.9,-3.42],rotationY:Math.PI/2},"hall-slippers":{position:[4.4,.555,3.15],rotationY:Math.PI/2},"hall-boots":{position:[4.4,.555,3.6],rotationY:Math.PI/2},"coffee-books":{position:[12.25,.5,-3.8],rotationY:Math.PI/2},"living-table-lamp":{position:[13.1,.52,-1.45],rotationY:0},"bedroom-west-lamp":{position:[8.05,.48,-11.25],rotationY:0},"bedroom-east-lamp":{position:[11.6,.48,-11.5],rotationY:0}};function sd(e,t){let n=t.yaw-t.fromYaw,r=Math.cos(n),i=Math.sin(n),a=e[0]-t.from[0],o=e[2]-t.from[2];return[t.to[0]+a*r+o*i,e[1]+t.to[1]-t.from[1],t.to[2]-a*i+o*r]}function cd(e){let t=ad[e.id];return t?{...e,position:t.to,rotationY:t.yaw}:od[e.id]?{...e,...od[e.id]}:e}var X=(e,t,n,r,i=[`floor`])=>({id:e,room:t,missions:t===`kitchen`?[1,2,3,4,5]:t===`hallway`?[2,3,4,5]:t===`living`?[3,4,5]:t===`office`?[4,5]:[5],surfaceId:n,position:r,elevation:n===`floor`?`floor`:`raised`,requiresJump:n!==`floor`,maxLoad:`heavy`,routeSurfaceIds:i}),ld=[X(`office-entry`,`office`,`floor`,[6.45,0,8.1]),X(`office-west-aisle`,`office`,`floor`,[3.65,0,9]),X(`office-table-under`,`office`,`floor`,[5.55,0,9.3]),X(`office-east-aisle`,`office`,`floor`,[7.05,0,9.3]),X(`office-rear-aisle`,`office`,`floor`,[5.6,0,11.2]),X(`office-desk-top`,`office`,`office-desk`,[4.4,.75,10.7],[`floor`,`office-desk-step`,`office-desk`]),X(`office-cover-top`,`office`,`office-cover-table`,[5.55,.42,9.3],[`floor`,`office-cover-table`]),X(`office-chest-top`,`office`,`office-chest`,[6.05,.56,12.05],[`floor`,`office-chest-step`,`office-chest`]),X(`office-step-top`,`office`,`office-desk-step`,[4.15,.35,9.85],[`floor`,`office-desk-step`]),X(`bedroom-entry`,`bedroom`,`floor`,[14.35,0,-7.3]),X(`bedroom-bench-under`,`bedroom`,`floor`,[11.65,0,-8.15]),X(`bedroom-bed-foot`,`bedroom`,`floor`,[9.7,0,-8.8]),X(`bedroom-east-aisle`,`bedroom`,`floor`,[13,0,-9.5]),X(`bedroom-north-aisle`,`bedroom`,`floor`,[12.6,0,-11.6]),X(`bedroom-bedside-top`,`bedroom`,`bedroom-bedside-east`,[11.2,.48,-10.5],[`floor`,`bedroom-bedside-east`]),X(`bedroom-bench-top`,`bedroom`,`bedroom-cover-bench`,[11.65,.43,-8.15],[`floor`,`bedroom-cover-bench`]),X(`bedroom-desk-top`,`bedroom`,`bedroom-window-desk`,[14.45,.65,-11.45],[`floor`,`bedroom-desk-step`,`bedroom-window-desk`]),X(`bedroom-chest-top`,`bedroom`,`bedroom-chest`,[12,.38,-10.75],[`floor`,`bedroom-chest`]),X(`cover-k-prep-under-west`,`kitchen`,`floor`,[1.05,0,4.8]),X(`cover-k-prep-under-east`,`kitchen`,`floor`,[1.65,0,4.8]),X(`cover-k-prep-top-west`,`kitchen`,`cover-prep-table`,[1.05,.42,4.8],[`floor`,`cover-prep-table`]),X(`cover-k-prep-top-east`,`kitchen`,`cover-prep-table`,[1.65,.42,4.8],[`floor`,`cover-prep-table`]),X(`cover-k-chest-top`,`kitchen`,`cover-kitchen-chest`,[2.8,.28,4.6],[`floor`,`cover-kitchen-chest`]),X(`cover-k-chest-south`,`kitchen`,`floor`,[2.85,0,5.3]),X(`cover-k-larder-back`,`kitchen`,`floor`,[-2.3,0,-1.1]),X(`cover-k-larder-front`,`kitchen`,`floor`,[-2.3,0,.05]),X(`cover-h-gallery-under`,`hallway`,`floor`,[5.55,0,1.6]),X(`cover-h-gallery-top`,`hallway`,`cover-gallery-bench`,[5.55,.38,1.6],[`floor`,`cover-gallery-bench`]),X(`cover-h-gallery-west`,`hallway`,`floor`,[4.65,0,1.65]),X(`cover-h-gallery-south`,`hallway`,`floor`,[5.55,0,2.3]),X(`cover-h-console-under`,`hallway`,`floor`,[5.5,0,-3.82]),X(`cover-l-work-under-west`,`living`,`floor`,[10.95,0,2.45]),X(`cover-l-work-under-east`,`living`,`floor`,[11.55,0,2.45]),X(`cover-l-work-top-west`,`living`,`cover-living-table`,[10.95,.43,2.45],[`floor`,`cover-living-table`]),X(`cover-l-work-top-east`,`living`,`cover-living-table`,[11.55,.43,2.45],[`floor`,`cover-living-table`]),X(`cover-l-work-south`,`living`,`floor`,[11.25,0,3.3]),X(`cover-l-coffee-under`,`living`,`floor`,[10.7,0,-.9]),X(`cover-l-north-table-under`,`living`,`floor`,[11.25,0,-5.48]),X(`k-north-aisle`,`kitchen`,`floor`,[-2.4,0,-4.85]),X(`k-north-pantry`,`kitchen`,`floor`,[-2.55,0,-5.75]),X(`k-north-breakfast`,`kitchen`,`floor`,[2.2,0,-5.35]),X(`k-north-bench`,`kitchen`,`north-breakfast-bench`,[-.5,.48,-5.82],[`floor`,`north-breakfast-bench`]),X(`k-north-stool`,`kitchen`,`north-breakfast-stool`,[1.15,.38,-5.7],[`floor`,`north-breakfast-stool`]),X(`h-north-gallery`,`hallway`,`floor`,[5.5,0,-5.35]),X(`h-north-crossing`,`hallway`,`floor`,[5.55,0,-4.65]),X(`h-north-bench`,`hallway`,`north-hall-bench`,[4.48,.48,-5.1],[`floor`,`north-hall-bench`]),X(`l-north-aisle`,`living`,`floor`,[8.5,0,-4.7]),X(`l-north-reading`,`living`,`floor`,[11.7,0,-4.7]),X(`l-north-window`,`living`,`floor`,[13.8,0,-5.5]),X(`l-north-table`,`living`,`north-library-table`,[11.25,.52,-5.48],[`floor`,`north-library-table`]),X(`l-east-crossing`,`living`,`floor`,[14.7,0,.15]),X(`l-east-aisle`,`living`,`floor`,[15.35,0,2.6]),X(`l-east-reading`,`living`,`floor`,[13.8,0,5.1]),X(`l-east-footrest`,`living`,`east-reading-footrest`,[14.3,.455,2.4],[`floor`,`east-reading-footrest`]),X(`k-annex-floor`,`kitchen`,`floor`,[-.8,0,5.35]),X(`k-annex-window`,`kitchen`,`floor`,[2.65,0,6.55]),X(`k-bench-top`,`kitchen`,`breakfast-bench`,[1.15,.48,6.6],[`floor`,`breakfast-bench`]),X(`k-basket-top`,`kitchen`,`pantry-basket`,[-2.45,.42,6.5],[`floor`,`pantry-basket`]),X(`h-annex-floor`,`hallway`,`floor`,[5.45,0,5]),X(`h-chest-top`,`hallway`,`hall-south-chest`,[5.4,.56,6.8],[`floor`,`hall-south-chest`]),X(`l-annex-floor`,`living`,`floor`,[9.65,0,6.25]),X(`l-annex-east`,`living`,`floor`,[13.1,0,5]),X(`l-reading-table`,`living`,`reading-table`,[10.65,.52,6.55],[`floor`,`reading-table`]),X(`l-reading-footrest`,`living`,`reading-footrest`,[11.7,.455,5.1],[`floor`,`reading-footrest`]),...[[-3.45,-2],[-3.45,-.7],[-3.3,2.8],[-2.5,1],[-2,2.6],[-1.1,-.8],[0,-2.6],[1.3,-1.4],[2.9,.6],[3.3,2.7],[.6,2.5],[1.7,2.5]].map(([e,t],n)=>X(`k-ground-${n}`,`kitchen`,`floor`,[e,0,t])),...[[4.5,-3.2],[4.55,-1.5],[4.6,-.55],[4.65,.55],[5.5,0],[6.45,-3.5],[6.5,-2.7],[6.55,-.65],[6.5,.65],[6.5,1.7],[6.4,3.4],[5.6,3.8]].map(([e,t],n)=>X(`h-ground-${n}`,`hallway`,`floor`,[e,0,t])),...[[7.6,-2],[8.2,-1.5],[8.5,.6],[9.4,1.5],[10.7,1.6],[12.2,2.8],[13,3.4],[12.8,.2],[12.7,-2.7],[8.5,-3.5],[11.8,.4],[11.5,3.5]].map(([e,t],n)=>X(`l-ground-${n}`,`living`,`floor`,[e,0,t])),X(`k-floor-west`,`kitchen`,`floor`,[-2.8,0,.3]),X(`k-floor-south`,`kitchen`,`floor`,[-1.8,0,2.8]),X(`k-floor-table`,`kitchen`,`floor`,[.15,0,.72]),X(`k-floor-east`,`kitchen`,`floor`,[2.65,0,1.9]),X(`k-floor-pantry`,`kitchen`,`floor`,[-2.8,0,-2.5]),X(`k-floor-window`,`kitchen`,`floor`,[.7,0,3.1]),X(`k-counter-middle`,`kitchen`,`cabinet-run`,[-.85,.9,-3.82],[`floor`,`kitchen-cart`,`cabinet-run`]),X(`k-east-cart`,`kitchen`,`floor`,[2.65,0,-2.4]),X(`k-east-step`,`kitchen`,`floor`,[2.65,0,-1.75]),X(`k-east-stool`,`kitchen`,`floor`,[1.8,0,-.25]),X(`k-chair`,`kitchen`,`chair-0-seat`,[.15,.5,1.58],[`floor`,`chair-0-seat`]),X(`k-table`,`kitchen`,`table-top`,[.55,.8,.7],[`floor`,`chair-0-seat`,`table-top`]),X(`k-counter-west`,`kitchen`,`cabinet-run`,[-1.5,.9,-3.82],[`floor`,`kitchen-cart`,`cabinet-run`]),X(`k-counter-east`,`kitchen`,`cabinet-run`,[.7,.9,-3.82],[`floor`,`kitchen-cart`,`cabinet-run`]),X(`k-cart`,`kitchen`,`kitchen-cart`,[-1.85,.45,-2.8],[`floor`,`kitchen-cart`]),X(`k-step`,`kitchen`,`floor`,[-1.85,0,-1.85]),X(`h-floor-entry`,`hallway`,`floor`,[4.65,0,.4]),X(`h-floor-north`,`hallway`,`floor`,[4.65,0,-2.6]),X(`h-floor-east`,`hallway`,`floor`,[6.5,0,1.1]),X(`h-floor-south`,`hallway`,`floor`,[6.25,0,3]),X(`h-floor-crossing`,`hallway`,`floor`,[6.4,0,-.5]),X(`h-bench`,`hallway`,`hall-bench`,[5.5,.48,-2.85],[`floor`,`hall-bench`]),X(`h-step`,`hallway`,`floor`,[5.5,0,-1.65]),X(`h-console`,`hallway`,`corridor-console`,[5.5,.9,-3.82],[`floor`,`hall-bench`,`corridor-console`]),X(`h-shoes`,`hallway`,`hall-shoe-rack`,[4.65,.555,2.6],[`floor`,`hall-shoe-rack`]),X(`h-cabinet`,`hallway`,`hall-low-cabinet`,[5.5,.56,3.7],[`floor`,`hall-low-cabinet`]),X(`l-floor-entry`,`living`,`floor`,[8,0,-.5]),X(`l-floor-rug`,`living`,`floor`,[10.5,0,.7]),X(`l-floor-east`,`living`,`floor`,[12.6,0,1.6]),X(`l-floor-south`,`living`,`floor`,[11.4,0,3.2]),X(`l-floor-sofa`,`living`,`floor`,[8.5,0,-2.6]),X(`l-coffee`,`living`,`coffee-top`,[10.7,.5,-.9],[`floor`,`coffee-top`]),X(`l-sofa`,`living`,`sofa-base`,[10.6,.5,-3.25],[`floor`,`sofa-base`]),X(`l-ottoman`,`living`,`living-ottoman`,[9,.455,2.05],[`floor`,`living-ottoman`]),X(`l-shelf-west`,`living`,`living-bookcase`,[8.9,1.3,3.9],[`floor`,`living-ottoman`,`box-low`,`living-bookcase`]),X(`l-shelf-east`,`living`,`living-bookcase`,[9.7,1.3,3.9],[`floor`,`living-ottoman`,`box-low`,`living-bookcase`]),X(`l-box`,`living`,`box-low`,[9,.85,3.05],[`floor`,`living-ottoman`,`box-low`]),X(`l-side`,`living`,`living-side-table`,[12.65,.52,-1.5],[`floor`,`living-side-table`])].map(e=>{let t=ad[e.surfaceId===`coffee-top`?`coffee`:e.surfaceId===`sofa-base`?`sofa`:e.surfaceId]??ad[{"cover-l-coffee-under":`coffee`,"cover-h-gallery-under":`cover-gallery-bench`,"cover-h-console-under":`corridor-console`}[e.id]],n={"k-north-pantry":[-2.8,0,-4.55],"k-north-breakfast":[2.85,0,-4.75],"k-ground-9":[2.8,0,2.7],"h-ground-0":[5.2,0,-3.2],"cover-h-gallery-west":[5,0,2.5],"bedroom-bed-foot":[8.8,0,-8.8]};return{...e,position:n[e.id]??(t?sd(e.position,t):e.position)}}),ud=[{id:1,title:`MIDNIGHT SNACK`,label:`Полуночный перекус`,zoneLabel:`Кухня`,target:150,zone:`kitchen`,humanTimeScale:.8,description:`Освой кухню: доставь добычу на 150 крошек. Покупки не уменьшают цель.`},{id:2,title:`NIGHT PATROL`,label:`Ночной патруль`,zoneLabel:`Коридор`,target:220,requiredKind:`key`,zone:`corridor`,humanTimeScale:1,description:`Кухня и коридор: доставь 220 крошек и редкий ключ.`},{id:3,title:`THE LIVING ROOM HEIST`,label:`Большое ограбление`,zoneLabel:`Гостиная`,target:300,requiredKind:`ring`,zone:`living`,humanTimeScale:1.15,description:`Гостиная: доставь золотое кольцо и добычу на 300 крошек.`},{id:4,title:`AFTER HOURS`,label:`Чужие секреты`,zoneLabel:`Кабинет`,target:360,requiredKind:`key`,requiredLootId:`office-key`,zone:`office`,humanTimeScale:1.18,description:`Открой кабинет справа от коридора. Доставь ключ от ящика и добычу на 360 крошек.`},{id:5,title:`BEFORE DAWN`,label:`До рассвета`,zoneLabel:`Спальня`,target:480,requiredKind:`ring`,requiredLootId:`bedroom-ring`,zone:`bedroom`,humanTimeScale:1.2,description:`Последняя комната слева от гостиной. Доставь фамильное кольцо из спальни и 480 крошек.`}];function dd(e=1){return ud[Math.max(0,Math.min(ud.length-1,Math.floor(e)-1))]}function fd(e,t){if(e<=1)return t;let n=[{id:`corridor-coin`,kind:`coin`,label:`Монета в коридоре`,value:60,weight:1.5,position:{x:5.1,y:.09,z:.1}},{id:`corridor-key`,kind:`key`,label:`Редкий ключ`,value:90,weight:2.5,position:{x:6.1,y:.09,z:-1.5}}],r=[{id:`living-ring`,kind:`ring`,label:`Золотое кольцо`,value:140,weight:2,position:{x:8.9,y:1.39,z:3.9}},{id:`living-cookie`,kind:`cookie`,label:`Печенье у дивана`,value:50,weight:1,position:{x:8,y:.09,z:-.5}}],i=[{id:`office-key`,kind:`key`,label:`Ключ от ящика`,value:130,weight:2.5,position:{x:4.15,y:.84,z:10.7}},{id:`office-coin`,kind:`coin`,label:`Монета коллекционера`,value:70,weight:1.5,position:{x:5.55,y:.09,z:9.3}},{id:`office-cookie`,kind:`cookie`,label:`Забытое печенье`,value:40,weight:1,position:{x:7,y:.09,z:9.4}}],a=[{id:`bedroom-ring`,kind:`ring`,label:`Фамильное кольцо`,value:180,weight:2,position:{x:11.35,y:.57,z:-10.6}},{id:`bedroom-coin`,kind:`coin`,label:`Серебряная монета`,value:90,weight:1.5,position:{x:11.65,y:.09,z:-8.15}},{id:`bedroom-cookie`,kind:`cookie`,label:`Ночное угощение`,value:50,weight:1,position:{x:13,y:.09,z:-9.5}}];return[...t.filter(t=>t.kind!==`key`&&(e<3||t.kind!==`ring`)),...n,...e>=3?r:[],...e>=4?i:[],...e>=5?a:[]]}var pd=(e,t,n,r,i=0)=>({id:e,url:`/spider-thief-night-shift/assets/kitchen-01/${t}.glb`,position:n,size:r,rotationY:i}),md=[pd(`kitchen-sideboard`,`counter`,[2.65,0,3.65],[1.65,.72,.7],Math.PI),pd(`sideboard-provisions`,`vegetables`,[2.95,.72,3.65],[.5,.3,.4]),...[-1.65,-.65,.35,1.35].map((e,t)=>pd(`upper-${t}`,`upper`,[e,1.55,-3.97],[.94,.65,.38])),pd(`extractor`,`hood`,[2.4,1.55,-3.88],[.95,.7,.55]),pd(`washing-dishes`,`dishes`,[-2.05,.9,-3.85],[.42,.23,.38]),pd(`prep-board`,`board`,[-.15,.9,-3.8],[.5,.025,.32]),pd(`prep-bread`,`bread`,[-.15,.925,-3.8],[.36,.16,.23]),pd(`simmer-pot`,`pot`,[2.5,.9,-3.83],[.34,.27,.3]),pd(`utensil-shelf`,`shelf`,[-2.95,1.48,-4.02],[.75,.4,.3]),pd(`island-vegetables`,`vegetables`,[-1.65,.9,3.75],[.55,.32,.4]),pd(`breakfast-plate`,`plate`,[1.1,.8,.72],[.32,.035,.32]),pd(`breakfast-croissant`,`croissant`,[1.1,.835,.72],[.24,.09,.16]),pd(`breakfast-board`,`board`,[.05,.8,.65],[.35,.025,.3])].map(cd),hd=[{id:`office`,label:`Кабинет`,unlock:4,minX:3.2,maxX:8,minZ:7.2,maxZ:12.7,entrance:{x:6.45,z:7.25,width:1,height:2.15}},{id:`bedroom`,label:`Спальня`,unlock:5,minX:7,maxX:16,minZ:-12.2,maxZ:-6.2,entrance:{x:14.35,z:-6.25,width:1.3,height:2.15}}],gd=(e,t,n,r,i=0)=>({id:e,url:t,position:n,size:r,rotationY:i}),_d=(e,t,n,r,i=0)=>gd(e,`/spider-thief-night-shift/assets/redesign-rooms/${t}.glb`,n,r,i),vd=(e,t,n,r=0)=>gd(e,`/spider-thief-night-shift/assets/cover-spawns/open-table.glb`,t,n,r),yd=[vd(`office-cover-table`,[5.35,0,9.3],[1.6,.42,.85]),vd(`office-desk`,[4.15,0,10.7],[1.45,.75,.75]),_d(`office-desk-step`,`living/ottoman`,[4.15,0,9.85],[.65,.35,.6]),_d(`office-bookcase`,`living/bookshelf_tall`,[7.55,0,10.7],[1.25,1.85,.42],-Math.PI/2),_d(`office-chest`,`furniture2/blanket_chest`,[5.8,0,12.05],[1.4,.56,.6]),_d(`office-chest-step`,`living/ottoman`,[6.35,0,11.3],[.6,.28,.6]),gd(`office-chair`,`/spider-thief-night-shift/assets/side-rooms/office_chair.glb`,[4.3,0,11.65],[.62,.95,.65],Math.PI),gd(`bedroom-bed`,`/spider-thief-night-shift/assets/side-rooms/bed_king.glb`,[9.7,0,-10.6],[2.4,.9,2.3]),gd(`bedroom-wardrobe`,`/spider-thief-night-shift/assets/side-rooms/wardrobe_sliding.glb`,[7.5,0,-9.55],[1.5,1.95,.55],Math.PI/2),vd(`bedroom-bedside-west`,[8.05,0,-10.6],[.6,.48,.6]),vd(`bedroom-bedside-east`,[11.35,0,-10.6],[.85,.48,.8]),vd(`bedroom-cover-bench`,[11.65,0,-8.15],[1.8,.43,.8]),vd(`bedroom-window-desk`,[14.1,0,-11.45],[1.8,.65,.8]),_d(`bedroom-desk-step`,`living/ottoman`,[14.1,0,-10.5],[.7,.3,.7]),_d(`bedroom-chest`,`furniture2/blanket_chest`,[12,0,-10.75],[1.05,.38,.65]),_d(`bedroom-reading-chair`,`living/armchair`,[15.15,0,-8.5],[.99,.975,.855],-.7)],bd=[_d(`office-rug`,`living/rug_rect`,[5.55,.002,9.65],[2.8,.012,2.6]),_d(`office-pendant`,`furniture2/pendant_lamp`,[5.55,1.4,9.3],[.5,1.15,.5]),_d(`office-desk-lamp`,`furniture2/desk_lamp`,[3.75,.75,10.7],[.3,.4,.18]),_d(`office-plant`,`living/plant_pot_large`,[3.7,0,8.2],[.6,1.5,.6]),_d(`office-clock`,`living/wall_clock`,[7.92,1.75,8.6],[.487,.5,.055],-Math.PI/2),_d(`bedroom-rug`,`living/rug_rect`,[11.65,.002,-8.65],[3.8,.012,2.3]),_d(`bedroom-west-lamp`,`furniture2/desk_lamp`,[8.05,.48,-10.6],[.28,.38,.18]),_d(`bedroom-east-lamp`,`furniture2/desk_lamp`,[11.6,.48,-10.85],[.18,.35,.17]),_d(`bedroom-reading-lamp`,`living/floor_lamp`,[15.5,0,-7.55],[.4,1.7,.4]),_d(`bedroom-plant`,`living/plant_pot_large`,[15.5,0,-11.6],[.6,1.4,.6]),_d(`bedroom-art`,`living/picture_frame`,[9.7,1.35,-12.12],[1.25,.85,.09]),_d(`bedroom-curtains`,`living/curtains`,[13.6,.25,-12.04],[2.2,2.22,.15])],xd=[_d(`office-books`,`hallway/Book_Stack`,[3.8,.75,10.65],[.2165,.089,.155]),_d(`office-mail`,`hallway/Mail_Stack`,[5.4,.56,12.05],[.168,.01725,.101]),_d(`bedroom-books`,`hallway/Book_Stack`,[13.55,.65,-11.45],[.2165,.089,.155])],Sd=hd.map(e=>gd(`door-${e.id}`,`/spider-thief-night-shift/assets/redesign-architecture/door-rotate-square-a.glb`,[e.entrance.x,0,e.entrance.z],[.12,e.entrance.height,e.entrance.width],Math.PI/2)),Z=(e,t,n,r,i=0)=>({id:e,url:`/spider-thief-night-shift/assets/redesign-rooms/${t}.glb`,position:n,size:r,rotationY:i}),Cd=(e,t,n,r=0)=>({id:e,url:`/spider-thief-night-shift/assets/cover-spawns/open-table.glb`,position:t,size:n,rotationY:r}),wd=[...yd,Cd(`cover-prep-table`,[1.35,0,4.8],[1.6,.42,.9]),Z(`cover-kitchen-chest`,`furniture2/blanket_chest`,[2.8,0,4.6],[.7,.28,.65]),Z(`cover-larder-screen`,`living/bookshelf_tall`,[-2.3,0,-.55],[.95,1.1,.32]),Cd(`cover-gallery-bench`,[5.55,0,1.6],[1.15,.38,.6]),Cd(`cover-living-table`,[11.25,0,2.45],[1.5,.43,.9]),Z(`north-pantry-shelf`,`furniture2/cube_shelf`,[-3.5,0,-5.3],[1.25,1.2,.42],Math.PI/2),Cd(`north-breakfast-bench`,[-.5,0,-5.82],[1.47,.48,.5455]),Cd(`north-breakfast-table`,[-.5,0,-5.03],[1.15,.43,.65]),Z(`north-breakfast-stool`,`living/ottoman`,[1.15,0,-5.7],[.7,.38,.7]),Cd(`north-hall-bench`,[4.48,0,-5.25],[1.47,.48,.5455],Math.PI/2),Z(`north-hall-cabinet`,`hallway/Shoe_Cabinet`,[6.63,0,-5.3],[1.11,1.184,.42898],-Math.PI/2),Z(`north-library-shelf`,`living/bookshelf_tall`,[8.3,0,-5.83],[1.25,1.85,.42]),Z(`north-library-chair`,`living/armchair`,[10.1,0,-5.42],[.99,.975,.855],Math.PI),Cd(`north-library-table`,[11.25,0,-5.48],[.7,.52,.65]),Z(`east-reading-chair`,`living/armchair`,[14.55,0,3.8],[.99,.975,.855],-.6),Z(`east-reading-footrest`,`living/ottoman`,[14.3,0,2.4],[.84,.455,.84]),Cd(`east-writing-console`,[15.62,0,1.15],[1.1,.9,.42],-Math.PI/2),Z(`east-library-shelf`,`furniture2/cube_shelf`,[15.66,0,5.8],[1.25,1.2,.42],-Math.PI/2),Z(`pantry-screen`,`furniture2/cube_shelf`,[-2.4,0,5.4],[1.35,1.25,.48]),Cd(`breakfast-bench`,[1.15,0,6.6],[1.47,.48,.5455],Math.PI),Z(`pantry-basket`,`hallway/Storage_Basket`,[-2.45,0,6.5],[.65,.42,.6]),Z(`hall-south-chest`,`furniture2/blanket_chest`,[5.15,0,6.8],[1,.56,.55]),Z(`reading-screen`,`living/bookshelf_tall`,[8.25,0,5.05],[1.25,1.85,.42]),Z(`reading-chair`,`living/armchair`,[12.35,0,6.35],[.99,.975,.855],Math.PI*.8),Cd(`reading-table`,[10.65,0,6.55],[.7,.52,.65]),Z(`reading-footrest`,`living/ottoman`,[11.7,0,5.1],[.84,.455,.84]),Cd(`corridor-console`,[5.5,0,-3.82],[1.1,.9,.42]),Cd(`hall-bench`,[5.5,0,-2.85],[1.47,.48,.5455]),Z(`hall-shoe-rack`,`furniture2/shoe_rack`,[4.65,0,2.9],[.83,.555,.3],Math.PI/2),Z(`hall-low-cabinet`,`furniture2/blanket_chest`,[5.5,0,3.7],[1.04,.56,.545],Math.PI),Z(`corridor-cover`,`hallway/Shoe_Cabinet`,[6.66,0,1.8],[1.11,1.184,.42898],-Math.PI/2),Z(`living-armchair`,`living/armchair`,[12.5,0,-2.8],[.99,.975,.855],-.65),Z(`media-console`,`living/tv_stand`,[13.65,0,.2],[1.8,.55,.465],-Math.PI/2),Cd(`living-side-table`,[12.65,0,-1.5],[.5,.52,.5]),Z(`living-ottoman`,`living/ottoman`,[9,0,2.05],[.84,.455,.84])].map(cd),Td=[...bd,Z(`north-breakfast-rug`,`living/rug_rect`,[-.5,.002,-5.15],[2.3,.012,1.35]),Z(`north-breakfast-plant`,`living/plant_small`,[-3.48,1.2,-5.3],[.27,.42,.27]),Z(`north-breakfast-pendant`,`furniture2/pendant_lamp`,[-.5,1.4,-5.03],[.5,1.15,.5]),Z(`north-hall-mirror`,`hallway/Wall_Mirror`,[5.5,1.1,-6.13],[.71,1.04,.113]),Z(`north-hall-coat-rack`,`furniture2/coat_rack`,[6.45,0,-4.4],[.4,1.7,.4]),Z(`north-library-light`,`living/floor_lamp`,[9.25,0,-5.85],[.4,1.7,.4]),Z(`north-library-books`,`hallway/Book_Stack`,[8.3,1.85,-5.83],[.22,.09,.16]),Z(`north-library-plant`,`living/plant_pot_large`,[12.6,0,-5.75],[.6,1.5,.6]),Z(`north-library-art`,`living/picture_frame`,[10.2,1.25,-6.12],[.9,.65,.09]),Z(`east-lounge-rug`,`living/rug_rect`,[14.6,.002,3.4],[2,.012,2.5]),Z(`east-reading-light`,`living/floor_lamp`,[15.55,0,3.7],[.4,1.7,.4]),Z(`east-console-lamp`,`furniture2/desk_lamp`,[15.6,.9,1.42],[.375,.452,.18],-Math.PI/2),Z(`east-lounge-plant`,`living/plant_pot_large`,[15.5,0,6.65],[.6,1.5,.6]),Z(`pantry-plant`,`living/plant_pot_large`,[-3.45,0,6.65],[.5,1.3,.5]),Z(`reading-plant`,`living/plant_pot_large`,[13.45,0,6.65],[.6,1.5,.6]),Z(`reading-light`,`living/floor_lamp`,[11.2,0,6.8],[.4,1.7,.4]),Z(`reading-books`,`hallway/Book_Stack`,[10.68,.52,6.55],[.22,.09,.16]),Z(`hall-south-basket`,`hallway/Storage_Basket`,[6.45,0,4.7],[.55,.42,.55]),Z(`hall-mirror`,`hallway/Wall_Mirror`,[6.89,1.15,-3.3],[.71,1.04,.113],-Math.PI/2),Z(`hall-hooks`,`hallway/Hook_Rail`,[4.15,1.7,-2.4],[1.52,.203,.226],Math.PI/2),Z(`hall-coat`,`hallway/Coat`,[4.22,.95,-2.3],[.571,.736,.082],Math.PI/2),Z(`hall-mat`,`hallway/Doormat_Blank`,[5.4,.004,3],[.88,.0221,.52]),Z(`hall-sconce`,`hallway/Wall_Sconce`,[6.4,1.75,-6.12],[.146,.26,.186]),Z(`living-tv`,`living/tv_flat`,[13.62,.55,.2],[1.4,.85,.25],-Math.PI/2),Z(`living-art`,`living/picture_frame`,[11.2,1.15,4.13],[.9,.65,.09],Math.PI),Z(`living-clock`,`living/wall_clock`,[8.3,1.75,-6.12],[.487,.5,.055]),Z(`dining-pendant`,`furniture2/pendant_lamp`,[.6,1.37,.7],[.5,1.21,.5])].map(cd),Ed=(e,t,n,r,i,a,o)=>({id:e,min:[t-i/2,n,r-o/2],max:[t+i/2,n+a,r+o/2]}),Dd=[.045,.17,.295,.42,.545,.67],Od=[...Dd.map((e,t)=>Ed(`nest-pantry-board-${t}`,-5.2,e-.02,.985,.98,.02,.24)),...[-5.68,-5.36,-5.04,-4.72].map((e,t)=>Ed(`nest-pantry-panel-${t}`,e,0,.985,.02,.795,.24)),Ed(`nest-pantry-back`,-5.2,0,.855,.98,.795,.02),Ed(`nest-pantry-cap`,-5.2,.775,.985,.98,.02,.24)],kd={x:-5.38,z:2.12,width:.51,depth:.5865,height:.095},Ad={x:-4.89,z:2.13,width:.112,depth:.112,height:.18},jd=[...Od,Ed(`nest-bed-body`,kd.x,0,kd.z,kd.width,kd.height,kd.depth),Ed(`nest-lantern-body`,Ad.x,0,Ad.z,Ad.width,Ad.height,Ad.depth)],Md=new Set(jd.map(e=>e.id)),Nd=Dd.flatMap((e,t)=>[-5.52,-5.2,-4.88].map((n,r)=>({id:`nest-slot-${t}-${r}`,surfaceId:`nest-pantry-board-${t}`,x:n,y:e,z:.985,width:.26,depth:.2,height:.085}))),Pd=1e-7;function Fd(e,t){let n=e.filter(e=>(e.id.startsWith(`wall-`)||e.id.startsWith(`nest-exterior-`))&&e.min[1]===0&&e.max[1]>.12),r=n.filter(e=>e.id.startsWith(`wall-`)&&!e.id.startsWith(`wall-glass-`)),i=[],a=(e,r,i)=>t.some(t=>e>=t.minX&&e<=t.maxX&&r>=t.minZ&&r<=t.maxZ)&&!n.some(t=>t!==i&&e>t.min[0]+Pd&&e<t.max[0]-Pd&&r>t.min[2]+Pd&&r<t.max[2]-Pd);for(let e of r){let r=e.max[0]-e.min[0],o=e.max[2]-e.min[2],s=o<=.141&&r>.2;if(s||r<=.141&&o>.2)for(let r of[-1,1]){let o=s?r<0?e.min[2]-.0125:e.max[2]+.0125:r<0?e.min[0]-.0125:e.max[0]+.0125,c=s?e.min[0]:e.min[2],l=s?e.max[0]:e.max[2],u=[c,l,...t.flatMap(e=>s?[e.minX,e.maxX]:[e.minZ,e.maxZ]),...n.flatMap(e=>s?[e.min[0],e.max[0]]:[e.min[2],e.max[2]])].filter(e=>e>=c-Pd&&e<=l+Pd).sort((e,t)=>e-t);for(let t=1;t<u.length;t++){let n=u[t-1],r=u[t];if(r-n<Pd)continue;let c=(n+r)/2;a(s?c:o,s?o:c,e)&&i.push(s?{x0:n,x1:r,z0:o-.0125,z1:o+.0125}:{x0:o-.0125,x1:o+.0125,z0:n,z1:r})}}}let o=[];for(let e of i){let t=[e];for(let e of o)t=t.flatMap(t=>{let n=Math.max(t.x0,e.x0),r=Math.min(t.x1,e.x1),i=Math.max(t.z0,e.z0),a=Math.min(t.z1,e.z1);if(r-n<Pd||a-i<Pd)return[t];let o=[];return n-t.x0>Pd&&o.push({...t,x1:n}),t.x1-r>Pd&&o.push({...t,x0:r}),i-t.z0>Pd&&o.push({x0:n,x1:r,z0:t.z0,z1:i}),t.z1-a>Pd&&o.push({x0:n,x1:r,z0:a,z1:t.z1}),o});o.push(...t)}for(let e=0;e<o.length;e++)for(let t=e+1;t<o.length;t++){let n=o[e],r=o[t],i=Math.abs(n.x0-r.x0)<Pd&&Math.abs(n.x1-r.x1)<Pd,a=Math.abs(n.z0-r.z0)<Pd&&Math.abs(n.z1-r.z1)<Pd;i&&(Math.abs(n.z1-r.z0)<Pd||Math.abs(r.z1-n.z0)<Pd)?(n.z0=Math.min(n.z0,r.z0),n.z1=Math.max(n.z1,r.z1),o.splice(t--,1)):a&&(Math.abs(n.x1-r.x0)<Pd||Math.abs(r.x1-n.x0)<Pd)&&(n.x0=Math.min(n.x0,r.x0),n.x1=Math.max(n.x1,r.x1),o.splice(t--,1))}return o.map((e,t)=>({id:`baseboard-${t}`,min:[e.x0,0,e.z0],max:[e.x1,.12,e.z1],unlockMission:null}))}var Id={minX:-5.8,maxX:16,minZ:-12.2,maxZ:12.7},Ld=[{id:`main`,minX:-5.8,maxX:16,minZ:-6.2,maxZ:7.2},...hd],Rd=[{id:`north-bedroom`,x:13.6,z:-12.25,width:2.2,bottom:1.1,top:2.325},{id:`south-kitchen`,x:-1,z:7.25,width:2.2,bottom:1.1,top:2.325},{id:`south-living`,x:10.5,z:7.25,width:2.2,bottom:1.1,top:2.325},{id:`south-office`,x:5.5,z:12.75,width:2.2,bottom:1.1,top:2.325}],zd=[];for(let e of jd)zd.push({id:e.id,min:[...e.min],max:[...e.max],unlockMission:null});var Bd=e=>!/^(wall|door|nest)/.test(e)||Md.has(e);function Q(e,t,n,r,i,a,o,s=null){zd.push({id:e,min:[t-i/2,n,r-o/2],max:[t+i/2,n+a,r+o/2],unlockMission:s})}for(let e of Rd)Q(`wall-glass-${e.id}`,e.x,e.bottom,e.z,e.width,e.top-e.bottom,.025);function Vd(e,t,n,r){let i=[...Rd.filter(e=>e.z===t).map(e=>({id:e.id,x:e.x,width:e.width,bottom:e.bottom,top:e.top})),...hd.filter(e=>e.entrance.z===t).map(e=>({id:e.id,x:e.entrance.x,width:e.entrance.width,bottom:0,top:e.entrance.height}))].sort((e,t)=>e.x-t.x),a=n;for(let n of i){let r=n.x-n.width/2;r>a&&Q(`wall-${e}-${n.id}-jamb`,(a+r)/2,0,t,r-a,2.6,.1),n.bottom>0&&Q(`wall-${e}-${n.id}-lower`,n.x,0,t,n.width,n.bottom,.1),Q(`wall-${e}-${n.id}-header`,n.x,n.top,t,n.width,2.6-n.top,.1),a=n.x+n.width/2}r>a&&Q(`wall-${e}-end`,(a+r)/2,0,t,r-a,2.6,.1)}Vd(`north`,-6.25,-4.1,16.1),Vd(`south`,7.25,-4.1,16.1);for(let e of hd){let t=e.id===`office`?e.maxZ+.05:e.minZ-.05;Vd(e.id,t,e.minX-.1,e.maxX+.1);for(let t of[e.minX-.05,e.maxX+.05])Q(`wall-${e.id}-side-${t}`,t,0,(e.minZ+e.maxZ)/2,.1,2.6,e.maxZ-e.minZ);Q(`door-${e.id}`,e.entrance.x,0,e.entrance.z,e.entrance.width,e.entrance.height,.1,e.unlock)}Q(`wall-east`,16.05,0,.5,.1,2.6,13.4),Q(`wall-west-north-extension`,-4.05,0,-5.2,.1,2.6,2),Q(`wall-west-annex`,-4.05,0,5.7,.1,2.6,3),Q(`wall-west-north`,-4.05,0,-1.5,.1,2.6,5.4),Q(`wall-west-south`,-4.05,0,3.1,.1,2.6,2.2),Q(`wall-lair-lintel`,-4.05,.58,1.6,.1,2.02,.8);for(let[e,t]of[[4.05,2],[7,3]]){let n=t===2?`corridor`:`living`;Q(`wall-${n}-north-extension`,e,0,-5.2,.12,2.6,2),Q(`wall-${n}-north`,e,0,-2.5,.12,2.6,3.4),Q(`wall-${n}-south`,e,0,2.5,.12,2.6,3.4),Q(`wall-${n}-lintel`,e,2.15,0,.12,.45,1.6),Q(`door-${n}`,e,0,0,.12,2.15,1.6,t),Q(`wall-${n}-annex`,e,0,5.7,.12,2.6,3)}Q(`nest-tunnel-north`,-4.4,0,1.14,.6,.7,.12),Q(`nest-tunnel-south`,-4.4,0,2.06,.6,.7,.12),Q(`nest-tunnel-roof`,-4.4,.63,1.6,.6,.12,1.04),Q(`nest-north`,-5.2,0,.76,1.2,.95,.12),Q(`nest-south`,-5.2,0,2.44,1.2,.95,.12),Q(`nest-back`,-5.8,0,1.6,.12,.95,1.8),Q(`nest-roof`,-5.2,.95,1.6,1.2,.1,1.8);for(let e of[.99,2.21])Q(`nest-shoulder-${e}`,-4.64,0,e,.12,.95,.46);Q(`nest-exterior-north`,-4.955,0,-1.75,1.69,2.6,4.9),Q(`nest-exterior-south`,-4.955,0,3.4,1.69,2.6,1.6),Q(`cabinet-run`,-.2,0,-3.82,4.2,.9,.7),Q(`fridge`,3.4,0,-3.72,.8,1.9,.85),Q(`island`,-2,0,3.75,1.65,.9,.65);function Hd(e,t,n,r=0,i=e){let[a,o,s]=t,[c,l,u]=n,d=Math.cos(r),f=Math.sin(r),p=Math.abs(d)*c+Math.abs(f)*u,m=Math.abs(f)*c+Math.abs(d)*u;Q(i,a,o+l*8/9,s,p,l/9,m);let h=c*.036085,g=u/14;for(let t of[-1,1])for(let n of[-1,1]){let r=t*c*5/12,i=n*u*5/14;Q(`${e}-leg-${t}-${n}`,a+r*d+i*f,o,s-r*f+i*d,Math.abs(d)*h+Math.abs(f)*g,l*8/9,Math.abs(f)*h+Math.abs(d)*g)}}Hd(`table`,[.6,0,.7],[1.8,.8,1.1],0,`table-top`);for(let[e,t,n,r]of[[0,.15,1.65,1],[1,1.05,-.25,-1]]){Q(`chair-${e}-seat`,t,.44,n,.56,.06,.56),Q(`chair-${e}-back`,t,.5,n+r*.24,.56,.45,.06);for(let r of[-.23,.23])for(let i of[-.23,.23])Q(`chair-${e}-leg-${r}-${i}`,t+r,0,n+i,.045,.44,.045)}Q(`corridor-console`,5.5,.3,-3.82,1.6,.6,.5);for(let e of[4.8,6.2])Q(`console-leg-${e}`,e,0,-3.82,.08,.3,.44);Q(`corridor-cover`,5.7,0,1.7,.65,.8,.65),Q(`sofa-base`,10.7,.18,-3.35,2.32,.32,.9),Q(`sofa-back`,10.7,.5,-3.73,2.32,.525,.14);for(let e of[9.64,11.76]){Q(`sofa-arm-${e}`,e,.22,-3.35,.2,.5,.95);for(let t of[-3.7,-3])Q(`sofa-foot-${e}-${t}`,e,0,t,.09,.22,.09)}for(let e of zd.filter(e=>/^(sofa-base|sofa-back|sofa-arm-|sofa-foot-)/.test(e.id))){let t=[sd(e.min,ad.sofa),sd(e.max,ad.sofa)];e.min=[Math.min(t[0][0],t[1][0]),e.min[1],Math.min(t[0][2],t[1][2])],e.max=[Math.max(t[0][0],t[1][0]),e.max[1],Math.max(t[0][2],t[1][2])]}Hd(`coffee`,ad.coffee.to,[1.5,.5,.8],ad.coffee.yaw,`coffee-top`),Q(`media-console`,13.65,0,.2,.6,.52,2.4),Q(`living-bookcase`,9,1.24,3.9,2.3,.06,.5);for(let e of[.08,.48,.88])Q(`bookcase-shelf-${e}`,9,e,3.9,2.3,.05,.5);for(let e of[7.88,10.12])Q(`bookcase-side-${e}`,e,0,3.9,.06,1.3,.5);Q(`bookcase-back`,9,0,4.13,2.3,1.3,.04),Q(`box-low`,8.1,0,2.65,.65,.4,.65),Q(`box-high`,8.1,0,3.28,.65,.8,.55),Q(`kitchen-step`,-1.85,0,-1.85,.65,.3,.65),Q(`kitchen-cart`,-1.85,0,-2.55,.65,.6,.65),Q(`kitchen-stool`,-.55,0,1.65,.65,.3,.65),Q(`kitchen-sideboard`,3.6,0,3.3,.7,.72,1.65),Q(`counter-east-step`,2.65,0,-1.75,.6,.3,.6),Q(`counter-east-cart`,2.65,0,-2.4,.65,.6,.65),Q(`dining-east-step`,1.8,0,-.25,.6,.3,.6),Q(`stove`,2.4,0,-3.82,.95,.9,.7),Q(`sink`,-2.95,0,-3.75,.75,.9,.8),Q(`hall-bench`,5.85,0,-1.65,1.2,.35,.65),Q(`hall-step`,5.5,0,-2.4,.7,.6,.65),Q(`hall-shoe-rack`,4.65,0,2.9,.65,.3,1.2),Q(`hall-low-cabinet`,5.4,0,2.9,.75,.55,.85),Q(`living-ottoman`,9.1,0,-.9,.75,.3,.75),Q(`sofa-step`,10.6,0,-2.5,.7,.25,.6),Q(`living-side-table`,12.65,0,-1.5,.7,.3,.7),Q(`shelf-step-low`,10.25,0,2.5,.7,.35,.65),Q(`shelf-step-mid`,10.25,0,3.18,.7,.7,.65),Q(`shelf-step-high`,9.65,0,3.45,.6,1,.65),Q(`shelf-step-west`,8.7,0,3.35,.6,1,.6),Q(`hall-console-step`,5.5,0,-3.05,.7,.75,.6);for(let e of md.filter(e=>e.id.startsWith(`upper-`)||e.id===`extractor`||e.id===`utensil-shelf`))Q(e.id,...e.position,...e.size);for(let e=zd.length-1;e>=0;e--)(wd.some(t=>t.id===zd[e].id)||zd[e].id.startsWith(`console-leg-`))&&zd.splice(e,1);for(let e of[...wd,...Td.filter(e=>!/(mat|rug)$/.test(e.id))]){let t=Math.abs(Math.cos(e.rotationY)),n=Math.abs(Math.sin(e.rotationY)),r=e.size[0]*t+e.size[2]*n,i=e.size[2]*t+e.size[0]*n;e.url.endsWith(`/cover-spawns/open-table.glb`)?Hd(e.id,e.position,e.size,e.rotationY):Q(e.id,...e.position,r,e.size[1],i)}var Ud=new Set([`kitchen-step`,`kitchen-stool`,`counter-east-step`,`counter-east-cart`,`dining-east-step`,`hall-step`,`hall-console-step`,`sofa-step`,`box-high`,`shelf-step-low`,`shelf-step-mid`,`shelf-step-high`,`shelf-step-west`]);for(let e=zd.length-1;e>=0;e--)Ud.has(zd[e].id)&&zd.splice(e,1);var Wd=zd.find(e=>e.id===`kitchen-cart`);Wd.min=[-2.175,0,-3.125],Wd.max=[-1.525,.45,-2.475];for(let e of[`cabinet-run`,`sink`,`stove`,`fridge`,`kitchen-cart`]){let t=zd.find(t=>t.id===e),n=ad[e];t.min=sd(t.min,n),t.max=sd(t.max,n)}var Gd=zd.find(e=>e.id===`box-low`);Gd.min=[8.2,0,2.725],Gd.max=[9.8,.85,3.375];var Kd=Fd(zd,Ld);zd.push(...Kd);var qd={blockers:zd,surfaces:[{id:`floor`,min:[Id.minX,-.06,Id.minZ],max:[Id.maxX,0,Id.maxZ]},...zd.filter(e=>!/^(wall|door|nest)/.test(e.id))],routes:[{id:`cover-kitchen-prep`,points:[[-.8,0,4.7],[1.35,0,4.8],[2.15,0,5.55],[3.6,0,5.8]]},{id:`cover-kitchen-larder`,points:[[-3.4,0,-.8],[-3.2,0,.05],[-2.3,0,.15],[-1.45,0,.1]]},{id:`cover-hall-gallery`,points:[[5.5,0,0],[4.65,0,1.6],[5.55,0,2.35],[6.3,0,3.1]]},{id:`cover-living-table`,points:[[10.1,0,2.45],[11.25,0,2.45],[12.4,0,2.45],[14.2,0,1.4]]},{id:`kitchen-north-nook`,points:[[-3.35,0,-2.5],[-3.4,0,-4.55],[-2.5,0,-5],[1.5,0,-4.65],[3.3,0,-4.65]]},{id:`hall-north-gallery`,points:[[5.5,0,0],[6.3,0,-2.2],[6.3,0,-4.4],[5.4,0,-5.2]]},{id:`living-north-library`,points:[[8,0,-2],[8.5,0,-4.45],[9.2,0,-4.65],[12.7,0,-4.65],[14.1,0,-4.4]]},{id:`living-east-lounge`,points:[[12.5,0,1.8],[14.2,0,1.4],[14.3,0,3],[15.3,0,4.9],[14.4,0,6.2]]},{id:`kitchen-counter-loaded`,points:[[-1.85,0,-4.18],[-1.85,.45,-4.83],[-1.85,.9,-5.68]]},{id:`kitchen-table-loaded`,points:[[-.48,0,1.6],[.15,.5,1.6],[.6,.8,.7]]},{id:`hall-console-loaded`,points:[[5.3,0,-2.4],[4.45,.48,-2.4],[4.4,.9,-3.82]]},{id:`shelf-loaded`,points:[[9,0,1.4],[9,.455,2.05],[9,.85,3.05],[9,1.3,3.9]]},{id:`kitchen-table-cover`,points:[[-3.4,0,1.6],[-2.5,0,.1],[.6,0,.7],[2.7,0,.7],[3.3,0,0]]},{id:`south-service-route`,points:[[-3.4,0,2.8],[2.8,0,2.8],[3.3,0,0],[4.8,0,0],[6.3,0,0],[7.8,0,0],[8.5,0,1.5],[10.7,0,1.5]]},{id:`corridor-risk-crossing`,points:[[3.3,0,0],[4.8,0,0],[5,0,-2.8],[6.3,0,0],[7.8,0,0]]},{id:`living-under-sofa`,points:[[7.8,0,0],[8.4,0,-2.5],[10.7,0,-3.35],[12.7,0,-2.5],[12.5,0,1.8]]},{id:`lair-tunnel`,points:[[-3.4,0,1.6],[-4.4,0,1.6],[-5.2,0,1.6]]}]},Jd=(e,t,n,r,i=0)=>({id:e,url:`/spider-thief-night-shift/assets/redesign-rooms/${t}.glb`,position:n,size:r,rotationY:i}),Yd=[...xd,Jd(`north-breakfast-books`,`hallway/Book_Stack`,[-.8,.43,-5.03],[.2165,.089,.155]),Jd(`north-breakfast-tray`,`hallway/Key_Tray`,[-.15,.43,-5.03],[.2714,.041,.1656]),Jd(`north-hall-slippers`,`hallway/Slippers`,[4.48,.48,-5.65],[.222,.071,.29]),Jd(`east-console-mail`,`hallway/Mail_Stack`,[15.62,.9,.95],[.168,.01725,.101]),Jd(`hall-mail`,`hallway/Mail_Stack`,[5.75,.9,-3.82],[.168,.01725,.101]),Jd(`hall-tray`,`hallway/Key_Tray`,[5.7,.9,-3.72],[.2714,.041,.1656]),Jd(`hall-books`,`hallway/Book_Stack`,[5.05,.9,-3.82],[.2165,.089,.155]),Jd(`hall-slippers`,`hallway/Slippers`,[4.65,.555,2.9],[.222,.071,.29]),Jd(`hall-boots`,`hallway/Boots`,[5.3,.56,3.7],[.254,.209,.258]),Jd(`coffee-books`,`hallway/Book_Stack`,[11.15,.5,-.9],[.2165,.089,.155]),Jd(`living-table-lamp`,`furniture2/desk_lamp`,[12.65,.52,-1.5],[.375,.452,.18]),Jd(`media-books`,`hallway/Book_Stack`,[15.6,.55,-4.16],[.15,.08,.12],-Math.PI/2)].map(cd),Xd=[{id:`candy-1`,kind:`candy`,label:`Конфета`,value:20,weight:.5,position:{x:-3.35,y:.09,z:.75}},{id:`cookie-1`,kind:`cookie`,label:`Печенье`,value:30,weight:1,position:{x:-2.5,y:.09,z:.1}},{id:`coin-1`,kind:`coin`,label:`Монета`,value:40,weight:1.5,position:{x:.55,y:.89,z:.7}},{id:`key-1`,kind:`key`,label:`Ключ`,value:55,weight:2.5,position:{x:2.65,y:.09,z:-1.45}},{id:`ring-1`,kind:`ring`,label:`Кольцо`,value:75,weight:2,position:{x:2.6,y:.09,z:2.15}},{id:`cookie-2`,kind:`cookie`,label:`Печенье`,value:30,weight:1,position:{x:.15,y:.59,z:1.62}}],Zd={light:1,medium:2,heavy:3},Qd=e=>e<=1?1:e<2?2:3;function $d(e,t){let n=t;for(let t of e)n=Math.imul(n^t.charCodeAt(0),16777619);return n=Math.imul(n^n>>>16,2146121005),n=Math.imul(n^n>>>15,2221713035),((n^n>>>16)>>>0)/4294967296}function ef(e,t){let[n,r,i]=e.position,a=.21,o=qd.surfaces.find(t=>t.id===e.surfaceId);return e.surfaceId===`floor`&&!Ld.some(e=>n-a>=e.minX&&n+a<=e.maxX&&i-a>=e.minZ&&i+a<=e.maxZ)||!o||Math.abs(o.max[1]-r)>.015||n-a<o.min[0]||n+a>o.max[0]||i-a<o.min[2]||i+a>o.max[2]||Math.hypot(n+5.2,i-1.6)<1.7||qd.blockers.some(e=>(e.unlockMission===null||t<e.unlockMission)&&r<e.max[1]-.005&&r+.17>e.min[1]+.005&&n+a>e.min[0]&&n-a<e.max[0]&&i+a>e.min[2]&&i-a<e.max[2])?!1:![...md,...Yd].some(e=>e.position[1]>=r-.01&&e.position[1]<r+.17&&Math.abs(e.position[0]-n)<e.size[0]/2+a&&Math.abs(e.position[2]-i)<e.size[2]/2+a)}function tf(e,t){let n=fd(e,Xd),r=[],i=new Map,a=[...n].sort((e,t)=>t.value-e.value||e.id.localeCompare(t.id)),o=t?.balance??0;for(let r of n)!t?.deliveredIds.includes(r.id)&&(e===1?r.kind!==`ring`:r.value<55)&&(o+=r.value);let s=new Set;if(t&&!t.jumpUnlocked&&!t.lootSpawns&&o<55){for(let e of[...a].reverse())if(!t.deliveredIds.includes(e.id)&&(s.add(e.id),o+=e.value,o>=55))break}for(let n of a){let a=n.id.startsWith(`office-`)?`office`:n.id.startsWith(`bedroom-`)?`bedroom`:n.id.startsWith(`corridor-`)?`hallway`:n.id.startsWith(`living-`)?`living`:`kitchen`,o=ld.filter(t=>t.room===a&&t.missions.includes(e)&&Zd[t.maxLoad]>=Qd(n.weight)&&ef(t,e)&&!r.some(e=>Math.abs(e.position[1]-t.position[1])<.3&&Math.hypot(e.position[0]-t.position[0],e.position[2]-t.position[2])<.55)),c=o.find(e=>e.id===t?.lootSpawns?.[n.id]),l=!s.has(n.id)&&(e===1?n.kind===`ring`:n.value>=55),u=o.filter(e=>l?e.requiresJump:!e.requiresJump),d=u.length?u:o,f=e=>$d(e,t?.placementSeed??0),p=r.filter(e=>e.room===a),m=e=>(p.length?Math.min(3,Math.min(...p.map(t=>Math.hypot(e.position[0]-t.position[0],e.position[2]-t.position[2])))):2)+f(n.id+e.id)*4;d.sort((e,t)=>m(t)-m(e));let h=c??d[0];if(!h)throw Error(`No safe spawn for ${n.id} in mission ${e}`);r.push(h),i.set(n.id,{...n,position:{x:h.position[0],y:h.position[1]+.09,z:h.position[2]},spawnPointId:h.id,surfaceId:h.surfaceId,requiresJump:h.requiresJump,elevation:h.elevation,routeSurfaceIds:h.routeSurfaceIds})}return n.map(e=>i.get(e.id))}function nf(e){return Number.isFinite(e)?Math.max(0,Math.min(3,Math.floor(e))):0}var rf={speed:[60,150,300],sprint:[70,170,330],jump:[55,140,280],strongLegs:[65,160,310],stealth:[75,180,330]},af={speed:[1,1.05,1.1,1.15],sprint:[1,1.2,1.25,1.3],sprintSeconds:[0,2.5,2.5,2.5],carryPenaltyReduction:[0,.15,.3,.45],detectionReduction:[0,.08,.16,.24],jumpHeight:[0,3.4**2/16,3.65**2/16,3.9**2/16]};function of(e,t){let n=nf(t);if(!n)return`Не приобретено`;switch(e){case`speed`:return`Скорость +${n*5}%`;case`sprint`:return`Shift: ×${af.sprint[n].toFixed(2)} · ${af.sprintSeconds[n]} с; восстановление 4 с после паузы 0,6 с`;case`jump`:return`Space: высота до ${Math.round(af.jumpHeight[n]*100)} см`;case`strongLegs`:return`Штраф переноски меньше на ${n*15}%`;case`stealth`:return`Накопление обнаружения медленнее на ${n*8}%`}}var sf={speed:{label:`Лёгкие лапки`,price:rf.speed[0],description:`Скорость +5 / 10 / 15%`},sprint:{label:`Спринт`,price:rf.sprint[0],description:`Shift: ×1,20 / 1,25 / 1,30 · до 2,5 с; восстановление после 0,6 с`},jump:{label:`Прыжок`,price:rf.jump[0],description:`Space: высота 72 / 83 / 95 см без груза`},strongLegs:{label:`Сильные лапки`,price:rf.strongLegs[0],description:`Штраф переноски меньше на 15 / 30 / 45%`},stealth:{label:`Тихая поступь`,price:rf.stealth[0],description:`Накопление обнаружения медленнее на 8 / 16 / 24%`}};function cf(e,t=0){return rf[e][nf(t)]??1/0}function lf(e,t){let n=1-.15*Math.max(0,Math.min(3,Math.floor(Number.isNaN(t)?0:t))),r={none:[0,0,0],light:[.05,.05,.1],medium:[.2,.15,.3],heavy:[.4,.3,.6]}[e];return{loadClass:e,speedMultiplier:1-r[0]*n,jumpHeightMultiplier:1-r[1]*n,sprintDrainMultiplier:1+r[2]*n}}function uf(){return{stamina:1,exhausted:!1,releasedAfterExhaustion:!1,releaseSeconds:0,sprinting:!1}}function df(e,t,n){let r={...e,sprinting:!1},i=Number.isFinite(n)?Math.max(0,n):0;if(r.stamina=Number.isFinite(r.stamina)?Math.max(0,Math.min(1,r.stamina)):0,t.shiftHeld){if(r.releaseSeconds=0,t.unlocked&&t.moving&&!r.exhausted&&r.stamina>0){let e=.4*(Number.isFinite(t.drainMultiplier)?Math.max(1,t.drainMultiplier):1);r.stamina=Math.max(0,r.stamina-i*e),r.stamina<=1e-9?(r.stamina=0,r.exhausted=!0,r.releasedAfterExhaustion=!1):r.sprinting=!0}}else{r.exhausted&&(r.releasedAfterExhaustion=!0);let e=r.releaseSeconds;r.releaseSeconds=Math.min(.6,e+i);let t=Math.max(0,i-Math.max(0,.6-e));r.stamina=Math.min(1,r.stamina+t*.25),r.exhausted&&r.releasedAfterExhaustion&&r.stamina>=.2-1e-9&&(r.exhausted=!1)}return r}var ff=1e-7;function pf(e,t){let n=e.position,r=n.x-Math.max(t.min.x,Math.min(t.max.x,n.x)),i=n.z-Math.max(t.min.z,Math.min(t.max.z,n.z));return r*r+i*i<e.radius*e.radius-ff*ff}function mf(e,t){return t.find(t=>t.walkable&&Math.abs(e.position.y-t.max.y)<=ff&&pf(e,t))}function hf(e,t){let n=e.velocity.y<=0?mf(e,t):void 0;e.grounded=!!n,e.supportId=n?.id??null,n&&(e.position.y=n.max.y,e.velocity.y=0)}function gf(e,t,n,r){if(n===0)return;let i=t===`x`?`z`:`x`,a=e.position[t],o=a+n;for(let s of r){if(e.position.y>=s.max.y-ff||e.position.y+e.height<=s.min.y+ff)continue;let r=e.position[i],c=Math.max(s.min[i]-r,0,r-s.max[i]);if(c>=e.radius)continue;let l=Math.sqrt(e.radius*e.radius-c*c),u=s.min[t]-l,d=s.max[t]+l;n>0&&a<=u+ff&&o>u&&(o=Math.min(o,u)),n<0&&a>=d-ff&&o<d&&(o=Math.max(o,d))}e.position[t]=o,Math.abs(o-(a+n))>ff&&(e.velocity[t]=0)}function _f(e,t,n){let r=e.position.y,i=r+t,a=!1;for(let o of n)pf(e,o)&&(t<0&&r>=o.max.y-ff&&i<=o.max.y?(i=o.max.y,a=!0):t>0&&r+e.height<=o.min.y+ff&&i+e.height>=o.min.y&&(i=o.min.y-e.height,a=!0));e.position.y=i,a&&(e.velocity.y=0),hf(e,n)}function vf(e,t,n,r,i,a,o){let s={...e,position:{...e.position},velocity:{...e.velocity}};if(!Number.isFinite(a)||a<=0)return s;hf(s,o),n&&s.grounded&&r>0&&(s.velocity.y=r,s.grounded=!1,s.supportId=null);let c=Math.max(0,i),l=Math.hypot(t.x,t.z),u=l>0?s.radius*.25/l:1/0,d=a;for(;d>0;){let e=Math.min(d,1/120,u),n=Math.abs(s.velocity.y)+c*e;if(n>0&&(e=Math.min(e,s.height*.25/n)),s.velocity.y>0&&c>0&&(e=Math.min(e,s.velocity.y/c)),s.velocity.x=t.x,s.velocity.z=t.z,gf(s,`x`,t.x*e,o),gf(s,`z`,t.z*e,o),hf(s,o),!s.grounded){let t=s.velocity.y*e-c*e*e/2;s.velocity.y-=c*e,_f(s,t,o)}d=Math.max(0,d-e)}return s}var yf=`spider-thief.mission.v1`,bf=Object.keys(sf),xf=()=>({version:1,missionId:`kitchen-01`,target:150,earned:0,balance:0,deliveredIds:[],upgrades:{speed:!1,sprint:!1,jump:!1},completed:!1,campaignComplete:!1});function Sf(e,t){return nf(e.upgradeLevels?.[t]??+!!e.upgrades[t])}function Cf(e,t){if(t===`jump`||Sf(e,`jump`)>0)return!1;let n=tf(e.level??1,{balance:e.balance,deliveredIds:e.deliveredIds,jumpUnlocked:!1,lootSpawns:e.lootSpawns,placementSeed:e.placementSeed}).filter(t=>!t.requiresJump&&!e.deliveredIds.includes(t.id)).reduce((e,t)=>e+t.value,0);return e.balance-cf(t,Sf(e,t))+n<cf(`jump`,0)}function wf(e){let t=dd(e.level),n=fd(e.level??1,Xd);return e.earned>=t.target&&(t.requiredLootId?e.deliveredIds.includes(t.requiredLootId):!t.requiredKind||e.deliveredIds.some(e=>n.find(t=>t.id===e)?.kind===t.requiredKind))}function Tf(e){if(!e||typeof e!=`object`)return!1;let t=e,n=t.level??1;if(t.version!==1||t.missionId!==`kitchen-01`||!Number.isInteger(n)||n<1||n>ud.length||t.target!==dd(n).target||!Number.isSafeInteger(t.earned)||!Number.isSafeInteger(t.balance)||t.balance<0||!Array.isArray(t.deliveredIds)||!t.upgrades||typeof t.upgrades!=`object`||[`speed`,`sprint`,`jump`].some(e=>typeof t.upgrades[e]!=`boolean`)||t.lootSpawns!==void 0&&(!t.lootSpawns||typeof t.lootSpawns!=`object`||Array.isArray(t.lootSpawns)||Object.values(t.lootSpawns).some(e=>typeof e!=`string`)))return!1;let r=fd(n,Xd);if(t.deliveredIds.some(e=>typeof e!=`string`||!r.some(t=>t.id===e))||new Set(t.deliveredIds).size!==t.deliveredIds.length||bf.some(e=>!Number.isInteger(Sf(t,e))||Sf(t,e)<0||Sf(t,e)>3||t.upgrades[e]!==void 0&&typeof t.upgrades[e]!=`boolean`))return!1;let i=t.deliveredIds.reduce((e,t)=>e+r.find(e=>e.id===t).value,0),a=t.previousEarned??0;return Number.isSafeInteger(a)&&a>=0&&t.earned===i&&t.balance<=a+i&&t.completed===wf(t)}function Ef(e){let t=e;if(!t)try{t=globalThis.localStorage}catch{}let n=xf();try{let e=t?.getItem(yf);if(e){let t=JSON.parse(e);if(Tf(t)&&(n={...t,deliveredIds:[...t.deliveredIds],upgrades:{...t.upgrades}},n.campaignComplete=(n.level??1)===ud.length&&n.completed,n.upgradeLevels))for(let e of bf)n.upgradeLevels[e]!==void 0&&(n.upgrades[e]=Sf(n,e)>0)}}catch{}function r(){Number.isSafeInteger(n.placementSeed)||(n.placementSeed=Math.floor(Math.random()*2147483647));let e=tf(n.level??1,{balance:n.balance,deliveredIds:n.deliveredIds,jumpUnlocked:Sf(n,`jump`)>0,lootSpawns:n.lootSpawns,placementSeed:n.placementSeed});n.lootSpawns=Object.fromEntries(e.map(e=>[e.id,e.spawnPointId]))}r();let i=()=>({...n,lootSpawns:{...n.lootSpawns},deliveredIds:[...n.deliveredIds],upgrades:{...n.upgrades},...n.upgradeLevels?{upgradeLevels:{...n.upgradeLevels}}:{}}),a=()=>{try{t?.setItem(yf,JSON.stringify(i()))}catch{}};return a(),{snapshot:i,save:a,restart(){let e=n;n=xf(),r();try{t?.setItem(yf,JSON.stringify(i()))}catch{return n=e,!1}return!0},deliver(e){let t=fd(n.level??1,Xd).find(t=>t.id===e);return!t||n.deliveredIds.includes(e)?!1:(n.deliveredIds.push(e),n.earned+=t.value,n.balance+=t.value,n.completed=wf(n),n.campaignComplete=(n.level??1)===ud.length&&n.completed,a(),!0)},buy(e){if(!bf.includes(e))return!1;let t=Sf(n,e),r=cf(e,t);return t>=3||n.balance<r||Cf(n,e)?!1:(n.balance-=r,n.upgrades[e]=!0,n.upgradeLevels={...n.upgradeLevels,[e]:t+1},a(),!0)},nextLevel(){let e=n.level??1;return!n.completed||e>=ud.length?!1:(n.previousEarned=(n.previousEarned??0)+n.earned,n.level=e+1,n.target=dd(n.level).target,n.earned=0,n.deliveredIds=[],n.completed=!1,n.campaignComplete=!1,n.lootSpawns=void 0,n.placementSeed=void 0,r(),a(),!0)}}}function Df(e){let t=Sf(e,`sprint`);return{speed:af.speed[Sf(e,`speed`)],sprintMultiplier:af.sprint[t],sprintSeconds:af.sprintSeconds[t],carryPenaltyReduction:af.carryPenaltyReduction[Sf(e,`strongLegs`)],detectionMultiplier:1-af.detectionReduction[Sf(e,`stealth`)],jumpHeight:af.jumpHeight[Sf(e,`jump`)]}}function Of(e,t=0,n=!1){let r=Number.isFinite(t)?Math.max(0,Math.min(2.5,t)):0,i=Df(e),a=lf(r===0?`none`:r<=1?`light`:r<2?`medium`:`heavy`,Sf(e,`strongLegs`));return i.speed*(n?i.sprintMultiplier:1)*a.speedMultiplier}function kf(e,t){return Sf(e,`jump`)>0&&t}function Af(e){e.updateWorldMatrix(!0,!0);let t=new er;return e.traverse(e=>{e instanceof J&&!e.userData.lootOutline&&!e.userData.lootMarker&&(e.geometry.computeBoundingBox(),t.union(e.geometry.boundingBox.clone().applyMatrix4(e.matrixWorld)))}),t}function jf(e,t){let n=Nd[t];if(!n)throw RangeError(`No nest storage slot for delivered item${t}`);let r=e.mesh;r.position.set(0,0,0),r.rotation.set(0,t*.37,0),r.scale.setScalar(.45);let i=Af(r),a=i.getSize(new K),o=Math.min(1,n.width/a.x,n.height/a.y,n.depth/a.z);return r.scale.multiplyScalar(o),i=Af(r),r.position.set(n.x-(i.min.x+i.max.x)/2,n.y-i.min.y,n.z-(i.min.z+i.max.z)/2),r.updateWorldMatrix(!0,!0),r.userData.nestTrophyIndex=t,n}var Mf=`nightshift.cameraDistance`,Nf=.55,Pf=3;function Ff(e,t,n,r){e.near=Math.min(e.near,.02),e.updateProjectionMatrix();let i=1.45;try{let e=localStorage.getItem(Mf),t=e===null?NaN:Number(e);Number.isFinite(t)&&(i=Ot.clamp(t,Nf,Pf))}catch{}let a=i,o=!1,s=[],c=new K,l=new qr,u=new K,d=()=>{s=t.map(e=>(e.updateWorldMatrix(!0,!0),{object:e,bounds:new er().setFromObject(e)})).filter(e=>!e.bounds.isEmpty()),o=!1};return d(),{reset:d,zoom(e){if(Number.isFinite(e)){i=Ot.clamp(i*Math.exp(Ot.clamp(e,-500,500)*.0015),Nf,Pf);try{localStorage.setItem(Mf,String(i))}catch{}}},update(t){let d=Number.isFinite(t.dt)?Math.max(0,t.dt):0,f=e.near*Math.tan(Ot.degToRad(e.fov)/2)/e.zoom,p=Math.max(.055,Math.hypot(e.near,f,f*e.aspect)+.012),m=(t.solids??s.filter(e=>e.object.visible).map(e=>e.bounds)).map(e=>e.clone().expandByScalar(p));for(let e of t.humans??(t.human?[t.human]:[])){let n=e.position,r=new er(new K(n.x-e.radius,n.y,n.z-e.radius),new K(n.x+e.radius,n.y+e.height,n.z+e.radius)).expandByScalar(p);r.containsPoint(t.target)||m.push(r)}c.set(Math.sin(t.yaw)*Math.cos(t.pitch),Math.sin(t.pitch),Math.cos(t.yaw)*Math.cos(t.pitch)),l.set(t.target,c);let h=new er(new K(n.minX+p,p,n.minZ+p),new K(n.maxX-p,r-p,n.maxZ-p)),g=i;for(let e of m){if(e.containsPoint(t.target)){g=0;break}l.intersectBox(e,u)&&(g=Math.min(g,t.target.distanceTo(u)-.004))}h.containsPoint(t.target)?l.intersectBox(h,u)&&(g=Math.min(g,t.target.distanceTo(u)-.004)):g=0,g=Math.max(0,g);let _=g<i?Math.max(0,g-.06):i;a=!o||t.snap?_:Ot.lerp(a,_,1-Math.exp(-(_<a?18:4)*d)),a=Math.min(a,g),e.position.copy(t.target).addScaledVector(c,a),e.lookAt(u.copy(e.position).addScaledVector(c,-1)),o=!0}}}var $=Object.freeze({radius:.4,height:1.78,eyeHeight:1.65,spiderSightHeight:.075,floorTolerance:.06,navigationCell:.24,navigationPadding:.015,repathSeconds:.42,arrivalDistance:.16,patrolSpeed:.68,investigateSpeed:.92,chaseSpeed:2.1,searchSpeed:.76,acceleration:1.6,deceleration:2.6,patrolSlowRadius:.9,patrolMinApproachFactor:.25,maxTurnRate:2.6,calmTurnFactor:.6,turnInPlaceAngle:.9,headTurnRate:2.4,headMaxYaw:.95,sightRange:3.6,sightHalfAngle:Math.PI*.23,detectionRise:.25,detectionDecay:.38,detectionGrace:.2,closeDetectRange:.9,closeDetectBoost:.9,stillVisibility:.26,stillCloseRange:1.35,suspicionThreshold:.3,suspicionMinimum:1.2,suspicionRelease:.08,chaseReacquireThreshold:.6,chaseLostSeconds:1.35,chaseStopDistance:.55,investigateSeconds:5.5,searchSeconds:6.2,searchRadius:1.5,stateMinSeconds:.6,patrolPauseMin:1.6,patrolPauseMax:3,patrolLegTimeout:12,searchPause:1.2,scanAmplitude:.95,scanFrequency:2.2,attackStartRange:.75,attackHalfAngle:Math.PI*.36,attackReach:.85,attackHitRadius:.44,armStrikeHeight:.45,attackWindup:.48,attackTrackSeconds:.3,attackStrike:.12,attackRecover:.5,attackHitRange:1.29,caughtProtection:4,catchRearmDistance:1.6,footstepDistance:.55,turningRate:.35,stoppedSpeed:.04,maxUpdateSeconds:.2,maxStepSeconds:1/60}),If={none:`Без груза`,light:`Лёгкий груз`,medium:`Средний груз`,heavy:`Тяжёлый груз`},Lf=new Intl.NumberFormat(`ru-RU`,{maximumFractionDigits:2});function Rf(e){let t=Math.round(e*1e4)/100;return`${t<0?`−`:t>0?`+`:``}${Lf.format(Math.abs(t))}%`}function zf(e){let t=e.ownerDocument,n=t.createElement(`div`);n.className=`hud-load`,n.dataset.testid=`load-status`,n.setAttribute(`role`,`group`),n.setAttribute(`aria-label`,`Нагрузка`);let r=t.createElement(`strong`);r.className=`hud-load__label`,r.textContent=If.none;let i=t.createElement(`div`);i.className=`hud-load__penalties`,i.hidden=!0;let a=[`Скорость`,`Высота прыжка`,`Расход спринта`].map(e=>{let n=t.createElement(`div`),r=t.createElement(`span`),a=t.createElement(`span`);return r.textContent=e,n.append(r,a),i.append(n),a});n.append(r,i),(e.querySelector(`.hud-inventory`)??e).append(n);let o=``,s=!1;return{update(e){if(s)return;let t=[Rf(e.speedMultiplier-1),Rf(e.jumpHeightMultiplier-1),Rf(e.sprintDrainMultiplier-1)],c=`${e.loadClass}|${t.join(`|`)}`;c!==o&&(o=c,r.textContent=If[e.loadClass],n.hidden=e.loadClass===`none`,n.classList.toggle(`hud-load--heavy`,e.loadClass===`heavy`),i.hidden=e.loadClass===`none`,a.forEach((e,n)=>{e.textContent=t[n]}),n.setAttribute(`aria-label`,`${If[e.loadClass]}. Скорость ${t[0]}, высота прыжка ${t[1]}, расход спринта ${t[2]}`))},dispose(){s=!0,n.remove()}}}function Bf(e){let t={key:`<circle cx="9" cy="9" r="5"/><path d="m12.5 12.5 8 8m-3-3 3-3m-6 0 3-3"/>`,ring:`<circle cx="12" cy="15" r="7"/><path d="m8 5 4-3 4 3-4 5-4-5Zm0 0h8"/>`,speed:`<path d="m13 3-7 11h6l-1 7 7-12h-6l1-6ZM3 7h4M2 18h4"/>`,sprint:`<path d="m4 17 6-9 4 4 6-7M15 5h5v5M4 21h16"/>`,jump:`<path d="M3 20h18M6 16V7m-3 3 3-3 3 3M11 16c0-9 7-12 10-12m-4 0h4v4"/>`,strongLegs:`<path d="m5 4 3 5-3 5 4 6m10-16-3 5 3 5-4 6M9 9h6M8 14h8"/>`,stealth:`<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Zm2 9L20 3"/><path d="M9 10a4 4 0 0 0 5 5"/>`,crumbs:`<path d="m5 6 4-3 3 4-3 4-4-5Zm10 5 5 2-1 6-5 1-3-5 4-4ZM3 17l3-2 2 4-3 2-2-4Z"/>`};return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${t[e]??t.crumbs}</svg>`}function Vf(e){let t=document.createElement(`div`);t.className=`hud game-hud`;let n=(e,n)=>{let r=document.createElement(`div`);return r.className=e,n&&(r.dataset.testid=n),t.appendChild(r),r},r=n(`hud-inventory`),i=n(`hud__balance hud-wallet`,`balance`);r.append(i);let a=document.createElement(`span`);a.className=`hud-wallet__label`,a.textContent=`Кошелёк`;let o=document.createElement(`span`);o.className=`hud-wallet__icon`,o.innerHTML=Bf(`crumbs`);let s=document.createElement(`strong`);s.className=`hud-wallet__value`;let c=document.createElement(`span`);c.className=`hud-wallet__amount`;let l=document.createElement(`span`);l.className=`hud-wallet__unit`,l.textContent=` крошек`,s.append(c,l),i.append(o,a,s);let u=n(`hud__cargo hud-cargo`,`cargo`);r.append(u);let d=n(`hud-stamina`,`stamina`),f=document.createElement(`div`);f.className=`stamina-hud`,f.dataset.testid=`stamina-bar`,d.append(f),f.hidden=!0,f.setAttribute(`role`,`progressbar`),f.setAttribute(`aria-label`,`Выносливость`),f.setAttribute(`aria-valuemin`,`0`),f.setAttribute(`aria-valuemax`,`100`);let p=document.createElement(`span`),m=document.createElement(`span`);m.className=`hud-stamina__fill stamina-hud__fill`;let h=document.createElement(`div`);h.className=`hud-stamina__track stamina-hud__track`,f.setAttribute(`aria-valuenow`,`100`),p.textContent=`Выносливость`;let g=document.createElement(`span`);g.className=`stamina-hud__value`,g.textContent=`100%`,g.setAttribute(`aria-hidden`,`true`);let _=document.createElement(`small`);_.className=`stamina-hud__hint`,h.append(m),f.append(p,g,h,_);let v=n(`hud__notice game-feedback`,`delivery-notice`);v.setAttribute(`role`,`status`),v.setAttribute(`aria-live`,`polite`),v.hidden=!0;let y=document.createElement(`span`);y.dataset.testid=`feedback`,v.append(y);let b=n(`hud__prompt hud-context`,`interaction-prompt`);b.setAttribute(`aria-live`,`polite`);let x=document.createElement(`span`);x.dataset.testid=`hud-hint`,b.append(x);let S=n(`hud__no-loot`,`hud-no-loot`);S.textContent=`Доступной добычи больше нет`,S.hidden=!0;let C=n(`mission-panel hud-mission`,`mission-progress`);C.hidden=!0;let w=document.createElement(`strong`),T=document.createElement(`p`);T.className=`mission-panel__first-hint`,T.textContent=`Принеси находки в норку`;let E=document.createElement(`div`);E.className=`mission-panel__kicker`;let D=document.createElement(`span`),O=document.createElement(`span`);O.className=`mission-panel__nights`,O.setAttribute(`aria-hidden`,`true`);let k=ud.map(()=>{let e=document.createElement(`i`);return O.append(e),e});E.append(D,O);let A=document.createElement(`div`);A.className=`mission-panel__quota`;let j=document.createElement(`div`);j.className=`mission-panel__goal`;let M=document.createElement(`span`),N=document.createElement(`progress`);N.setAttribute(`aria-label`,`Доставленная добыча`),M.className=`mission-panel__amount`;let P=document.createElement(`b`),ee=document.createElement(`span`);M.append(P,ee);let F=document.createElement(`div`);F.className=`mission-panel__required`,F.hidden=!0;let te=document.createElement(`span`);te.className=`mission-objective__icon`;let I=document.createElement(`div`);I.className=`mission-objective__copy`;let ne=document.createElement(`span`);ne.className=`mission-objective__heading`,ne.textContent=`Цель ночи`;let re=document.createElement(`b`);re.className=`mission-objective__name`;let ie=document.createElement(`span`);ie.className=`mission-objective__room`;let ae=document.createElement(`span`);ae.className=`mission-objective__hint`,I.append(ne,re,ie,ae),F.append(te,I),A.append(j,M,N),C.append(E,w,T,F,A);let L=document.createElement(`button`);L.className=`shop-toggle`,L.dataset.testid=`shop-toggle`,L.type=`button`,L.innerHTML=`<kbd>B</kbd> Мастерская`,L.disabled=!0,L.setAttribute(`aria-expanded`,`false`),L.setAttribute(`aria-controls`,`nest-shop`),t.append(L);let R=n(`shop-panel`,`shop-panel`);R.id=`nest-shop`,R.hidden=!0,R.setAttribute(`role`,`dialog`),R.setAttribute(`aria-modal`,`true`),R.setAttribute(`aria-label`,`Магазин в логове`);let oe=document.createElement(`h2`);oe.textContent=`Мастерская`;let se=document.createElement(`div`);se.className=`shop-panel__kicker`,se.textContent=`ЛОГОВО / УЛУЧШЕНИЯ`;let ce=document.createElement(`p`);ce.textContent=`Улучшения действуют сразу и остаются с тобой между ночами.`;let le=document.createElement(`p`);le.className=`shop-balance`,le.setAttribute(`role`,`status`);let ue=document.createElement(`header`);ue.className=`shop-header`,ue.append(se,oe,ce,le),R.append(ue);let de=document.createElement(`div`);de.className=`shop-body`,R.append(de);let fe=document.createElement(`nav`);fe.className=`shop-selection`,fe.setAttribute(`aria-label`,`Выбрать улучшение`),de.append(fe);let pe=document.createElement(`div`);pe.className=`shop-upgrades`,de.append(pe);let me=`jump`,he=new Map,ge=new Map,_e=new Map,z=new Map,ve=new Map,ye=new Map,be,xe,Se=!1,Ce=!1,we=!1,Te,Ee=null,De=``,Oe=``,B=!1,ke=null,Ae=``,je=!1,V=(e,t)=>{let n=Sf(e,t);return{price:cf(t,n),level:n,maxLevel:3}},Me=()=>{let e=!B&&!!De&&Ee===De;F.dataset.delivered=String(B),F.dataset.carrying=String(e),ne.textContent=B?`Цель доставлена`:e?`Цель у тебя`:`Цель ночи`,ie.textContent=`${Oe} · ${B?`доставлено в норку`:e?`предмет найден`:`найди и принеси в норку`}`,ae.textContent=B?Te&&Te.earned>=Te.target?`Все условия выполнены`:`Осталось выполнить план по крошкам`:e?`Доставь в норку для следующей ночи`:`Обязательно для следующей ночи`},H=()=>{t.dataset.shopOpen=String(Ce),t.dataset.completed=String(we),b.hidden=!Ae||we||Ce;let e=we?``:Ae;if(x.dataset.text!==e){x.dataset.text=e,x.replaceChildren();for(let t of e.split(/(\b(?:E|G|B|Space|Shift|Escape)\b)/g))if(/^(E|G|B|Space|Shift|Escape)$/.test(t)){let e=document.createElement(`kbd`);e.textContent=t,x.append(e)}else x.append(document.createTextNode(t))}S.hidden=!je||we||Ce,Fe.hidden=!we||Ce},U=()=>{if(Te&&Ce){le.textContent=`Кошелёк: ${Te.balance} крошек`;for(let[e,t]of z){let{price:n,level:r,maxLevel:i}=V(Te,e),a=r>=i,o=Math.max(0,n-Te.balance),s=!a&&Cf(Te,e);t.disabled=!Se||!Ce||a||o>0||s,t.textContent=a?`Максимальный уровень`:`${r?`Улучшить`:`Получить`} · ${n} крошек`,_e.get(e).textContent=a?`Все три улучшения приобретены`:o>0?`Не хватает ${o} крошек`:s?`Сначала нужен прыжок. На него отложено 55 крошек.`:`Действует сразу. Сохранится на следующую ночь.`,ge.get(e).innerHTML=``;for(let[t,n]of[[`Сейчас`,of(e,r)],[`Следующий уровень`,a?`Максимум`:of(e,r+1)]]){let r=document.createElement(`div`),i=document.createElement(`span`),a=document.createElement(`p`);i.textContent=t,a.textContent=n,r.append(i,a),ge.get(e).append(r)}t.title=a?`Улучшение полностью куплено`:Se?t.textContent:`Нужно быть в логове без груза`,ve.get(e).dataset.state=a?`purchased`:o>0||s||!Se?`unavailable`:`available`,ye.get(e).textContent=`Уровень ${r} из ${i}`,he.get(e).querySelector(`small`).textContent=`${r} / ${i}`}}},Ne=()=>{let e=Ce;Ce=!1,R.hidden=!0,L.setAttribute(`aria-expanded`,`false`),H(),U(),e&&ke?.isConnected&&ke.focus({preventScroll:!0}),ke=null};for(let e of Object.keys(sf)){let t=sf[e],n=document.createElement(`div`);n.className=`shop-upgrade`,n.dataset.upgrade=e,n.hidden=e!==me;let r=document.createElement(`button`);r.type=`button`,r.className=`shop-select`,r.dataset.testid=`select-${e}`,r.setAttribute(`aria-pressed`,String(e===me)),r.innerHTML=`${Bf(e)}<span>${t.label}<small>0 / 3</small></span>`,fe.append(r),he.set(e,r),r.addEventListener(`click`,()=>{me=e;for(let[t,n]of ve)n.hidden=t!==e;for(let[t,n]of he)n.setAttribute(`aria-pressed`,String(t===e))});let i=document.createElement(`span`);i.className=`shop-upgrade__icon`,i.setAttribute(`aria-hidden`,`true`),i.innerHTML=Bf(e);let a=document.createElement(`strong`);a.textContent=t.label;let o=document.createElement(`span`);o.textContent={speed:`Быстрее пересекай открытое пространство.`,sprint:`Рывок, чтобы уйти от удара. Удерживай Shift.`,jump:`Забирайся на столы и доставай высокие трофеи. Space.`,strongLegs:`Неси тяжёлую добычу с меньшим штрафом.`,stealth:`Дай себе больше времени, прежде чем тебя заметят.`}[e],o.id=`upgrade-description-${e}`;let s=document.createElement(`span`);s.className=`shop-upgrade__level`;let c=document.createElement(`div`);c.className=`shop-effect`,ge.set(e,c);let l=document.createElement(`p`);l.className=`shop-reason`,_e.set(e,l);let u=document.createElement(`button`);u.type=`button`,u.dataset.testid=`buy-${e}`,u.setAttribute(`aria-describedby`,o.id),u.addEventListener(`click`,()=>{if(!Ce||!Se||!Te||u.disabled)return;let t=V(Te,e);t.level<t.maxLevel&&Te.balance>=t.price&&be?.(e)}),n.append(i,a,o,s,c,u,l),pe.append(n),z.set(e,u),ve.set(e,n),ye.set(e,s)}let Pe=document.createElement(`button`);Pe.type=`button`,Pe.className=`shop-close`,Pe.textContent=`Закрыть`,Pe.addEventListener(`click`,()=>xe?xe():Ne()),R.append(Pe),R.addEventListener(`keydown`,e=>{if(e.key!==`Tab`)return;let t=[...he.values(),...z.values(),Pe].filter(e=>!e.disabled&&e.getClientRects().length>0),n=t[0],r=t[t.length-1];e.shiftKey&&document.activeElement===n?(e.preventDefault(),r.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),n.focus())}),L.addEventListener(`click`,()=>{Se&&xe?.()});let Fe=n(`mission-complete`,`mission-complete`);Fe.hidden=!0,Fe.setAttribute(`role`,`status`),Fe.setAttribute(`aria-live`,`polite`);let Ie=document.createElement(`div`);Ie.className=`mission-complete__kicker`;let Le=document.createElement(`h2`),Re=document.createElement(`p`),ze=document.createElement(`div`);ze.className=`mission-complete__stats`;let Be=document.createElement(`p`);Be.className=`mission-complete__help`,Fe.append(Ie,Le,Re,ze,Be),e.append(t);let Ve,He={root:t,setBalance(e){c.textContent=String(e)},setCargo(e){Ee=e,Me();let t=e?fd(Te?.level??1,Xd).filter(t=>t.label===e):[],n=t[0],r=n&&t.every(e=>e.value===n.value&&e.weight===n.weight)?` · ${n.value} крошек · ${n.weight<=1?`лёгкий`:n.weight<2?`средний`:`тяжёлый`}`:``;if(u.replaceChildren(),e){let t=document.createElement(`span`);t.className=`hud-cargo__label`,t.textContent=`НЕСЁМ В ЛОГОВО`;let n=document.createElement(`strong`);n.textContent=e;let i=document.createElement(`span`);i.className=`hud-cargo__details`,i.textContent=r.replace(/^ · /,``),u.append(t,n,i)}u.hidden=!e,u.dataset.state=e?`carrying`:`empty`},setPrompt(e){Ae=we?``:e,H()},setNoLoot(e){je=!we&&e,H()},setStamina(e){let t=Number.isFinite(e.stamina)?Math.max(0,Math.min(1,e.stamina)):0;f.hidden=we||Ce||!e.sprintUnlocked||t>=.999&&!e.sprinting&&!e.exhausted,f.dataset.unlocked=String(e.sprintUnlocked),f.dataset.state=e.exhausted?`exhausted`:e.sprinting?`sprinting`:t<1?`recovering`:`ready`,f.setAttribute(`aria-valuenow`,String(Math.round(t*100))),m.style.transform=`scaleX(${t})`,f.classList.toggle(`stamina-hud--low`,t<=.2),f.classList.toggle(`stamina-hud--empty`,t===0);let n=e.exhausted?`Выносливость исчерпана`:e.sprinting?`Спринт`:`Выносливость`;p.textContent=n,g.textContent=`${Math.round(t*100)}%`,_.textContent=e.sprintUnlocked?e.exhausted?`Отпусти Shift и переведи дух`:e.sprinting?`Shift · расход энергии`:t<1?`Восстанавливается`:`Shift · удерживай для спринта`:`Спринт доступен в мастерской`,f.setAttribute(`aria-label`,n)},showNotice(e,t=3200){y.textContent=e,v.hidden=!1,Ve!==void 0&&window.clearTimeout(Ve),Ve=window.setTimeout(()=>{v.hidden=!0,y.textContent=``,Ve=void 0},t)},showFeedback(e,t=`info`){v.dataset.tone=t,He.showNotice(e)},setMission(e){if(Te&&Ce&&document.documentElement.dataset.uiMotion!==`off`&&!window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)for(let[t,n]of ve)Sf(e,t)>Sf(Te,t)&&n.animate([{backgroundColor:`#cbd6a01f`},{backgroundColor:`transparent`}],{duration:420});Te={...e,deliveredIds:[...e.deliveredIds],upgrades:{...e.upgrades},...e.upgradeLevels?{upgradeLevels:{...e.upgradeLevels}}:{}};let n=Te.level??1,r=dd(n),i=r.requiredKind,a=fd(n,Xd).find(e=>r.requiredLootId?e.id===r.requiredLootId:e.kind===i)?.label??(i===`key`?`Ключ`:`Кольцо`),o=r.requiredLootId?e.deliveredIds.includes(r.requiredLootId):i&&fd(n,Xd).some(t=>t.kind===i&&e.deliveredIds.includes(t.id)),s=i?` · ${a}: ${o?`сдано`:`нужно доставить`}`:``;if(we=e.completed,C.hidden=!1,D.textContent=`Ночь ${n} / ${ud.length}`,k.forEach((e,t)=>{e.dataset.state=t+1<n?`past`:t+1===n?`current`:`future`}),w.textContent=`Собери добычу`,w.hidden=!!i,T.hidden=!!i,j.textContent=`Доставлено`,j.title=`Стоимость доставленной добычи`,P.textContent=String(e.earned),ee.textContent=` / ${e.target} крошек`,F.hidden=!i,te.innerHTML=Bf(i??`crumbs`),re.textContent=a,De=i?a:``,Oe=r.zoneLabel,B=!!o,Me(),C.dataset.quotaMet=String(e.earned>=e.target),C.setAttribute(`aria-label`,`Цель миссии: доставить ${e.target}. Доставлено ${e.earned}${s}`),N.max=e.target,N.value=Math.min(e.earned,e.target),He.setBalance(e.balance),U(),Ce&&document.activeElement instanceof HTMLButtonElement&&R.contains(document.activeElement)&&document.activeElement.disabled&&Pe.focus({preventScroll:!0}),t.dataset.sprintUnlocked=String(Sf(Te,`sprint`)>0),we){Ae=``,je=!1,Ie.textContent=Te.campaignComplete?`ИДЕАЛЬНОЕ ОГРАБЛЕНИЕ`:`НОЧЬ ${String(n).padStart(2,`0`)} / ЗАВЕРШЕНА`,Le.textContent=Te.campaignComplete?`Все миссии пройдены`:`Добыча в безопасности`,Re.textContent=Te.campaignComplete?`Ночная кража удалась. Квартира осталась ни с чем.`:`Тихо ушли. Хорошо заработали. Впереди новая ночь.`,ze.replaceChildren();for(let[t,n]of[[`Доставлено`,e.earned],[`В кошельке`,e.balance],[`Трофеев`,e.deliveredIds.length]]){let e=document.createElement(`div`),r=document.createElement(`strong`),i=document.createElement(`span`);r.textContent=String(n),i.textContent=t,e.append(r,i),ze.append(e)}Be.textContent=Te.campaignComplete?`Esc · Открой меню, чтобы начать заново`:`B · Загляни в мастерскую перед следующей вылазкой`}H()},setShop(e,t){let n=e&&Se,r=n&&!Ce;r&&(ke=document.activeElement instanceof HTMLElement?document.activeElement:null),n?(Ce=!0,R.hidden=!1,L.setAttribute(`aria-expanded`,`true`)):Ne(),He.setMission(t),r&&he.get(me).focus({preventScroll:!0})},setShopAvailable(e){Se=e,L.disabled=!e,L.title=e?`Открыть магазин`:`Подойди к логову без груза`,!e&&Ce&&Ne(),U()},onShopToggle(e){xe=e},onBuy(e){be=e},isShopOpen(){return Ce},dispose(){Ve!==void 0&&window.clearTimeout(Ve),t.remove()}};return He.setBalance(0),He.setCargo(null),He.setPrompt(``),He}function Hf(e,t){let n=document.createElement(`section`);n.className=`night-menu`,n.dataset.testid=`main-menu`,n.hidden=!0,n.setAttribute(`role`,`dialog`),n.setAttribute(`aria-modal`,`true`),n.setAttribute(`aria-labelledby`,`night-menu-title`),n.innerHTML=`
    <div class="night-menu__landing">
      <div class="night-menu__content">
        <p class="night-menu__brand">NIGHT SHIFT</p>
        <h1 id="night-menu-title">Spider Thief</h1>
        <p class="night-menu__save" data-menu="night"></p>
        <nav class="night-menu__actions" aria-label="Меню игры">
          <button type="button" data-testid="menu-start" class="night-menu__primary"><span>Играть</span></button>
          <div class="night-menu__secondary"><button type="button" data-testid="menu-settings">Настройки</button><button type="button" data-testid="menu-controls">Управление</button><button type="button" data-testid="menu-home" hidden>Главное меню</button><button type="button" data-testid="menu-restart">Начать заново</button></div>
        </nav>
        <p class="night-menu__status" role="status" data-menu="status">Загрузка…</p>
      </div>
    </div>
    <figure class="night-menu__keyart" aria-label="Паук с украденным ключом скрывается от человека"><img src="/spider-thief-night-shift/assets/interface/night-shift-menu.png" alt="" draggable="false"><figcaption>Большой дом. Маленький вор.</figcaption></figure>
    <div class="night-menu__subview" hidden>
      <button type="button" data-testid="menu-back" class="night-menu__back"><span aria-hidden="true">←</span> <span data-menu="back-label">Главное меню</span></button>
      <div class="night-menu__help" hidden>
        <h2 id="night-menu-controls-title">Управление</h2>
        <dl><div><dt><kbd>W A S D</kbd> <span>или стрелки</span></dt><dd>Двигаться</dd></div><div><dt>Мышь / колесо</dt><dd>Осмотреться / приблизить</dd></div><div><dt><kbd>E</kbd> / <kbd>G</kbd></dt><dd>Взять / бросить добычу</dd></div><div><dt><kbd>Shift</kbd> / <kbd>Space</kbd></dt><dd>Спринт / прыжок после покупки</dd></div><div><dt><kbd>B</kbd> / <kbd>Esc</kbd></dt><dd>Мастерская в норке / пауза</dd></div></dl>
        <p class="night-menu__help-note">Доставляй добычу в норку. От человека можно укрыться за мебелью.</p>
      </div>
      <form class="night-menu__settings" hidden aria-labelledby="night-menu-settings-title">
        <div class="night-menu__section-title"><h2 id="night-menu-settings-title">Настройки</h2></div>
        <div class="night-menu__setting"><label for="night-setting-volume">Громкость эффектов</label><div class="night-menu__range"><input id="night-setting-volume" data-testid="settings-volume" data-setting="volume" type="range" min="0" max="1" step="0.01"><output for="night-setting-volume"></output></div></div>
        <div class="night-menu__setting"><label for="night-setting-music">Фоновая музыка<small>Тихая тема. Затихает во время погони.</small></label><label class="night-menu__switch"><input id="night-setting-music" data-testid="settings-musicEnabled" data-setting="musicEnabled" type="checkbox"><span aria-hidden="true"></span><b aria-hidden="true"></b></label></div>
        <div class="night-menu__setting"><label for="night-setting-music-volume">Громкость музыки</label><div class="night-menu__range"><input id="night-setting-music-volume" data-testid="settings-musicVolume" data-setting="musicVolume" type="range" min="0" max="1" step="0.01"><output for="night-setting-music-volume"></output></div></div>
        <div class="night-menu__setting"><label for="night-setting-sensitivity">Чувствительность мыши<small>Ниже — медленнее поворот камеры</small></label><div class="night-menu__range"><input id="night-setting-sensitivity" data-testid="settings-sensitivity" data-setting="sensitivity" type="range" min="0.15" max="3" step="0.05"><output for="night-setting-sensitivity"></output></div></div>
        <div class="night-menu__setting"><label for="night-setting-invert">Инверсия по вертикали<small>Движение мыши вверх опускает взгляд</small></label><label class="night-menu__switch"><input id="night-setting-invert" data-testid="settings-invertY" data-setting="invertY" type="checkbox"><span aria-hidden="true"></span><b aria-hidden="true"></b></label></div>
        <div class="night-menu__setting"><label for="night-setting-quality">Качество<small>Тени и чёткость изображения</small></label><select id="night-setting-quality" data-testid="settings-quality" data-setting="quality"><option value="low">Низкое</option><option value="medium">Среднее</option><option value="high">Высокое</option></select></div>
        <div class="night-menu__setting"><label for="night-setting-hints">Подсказки<small>Помощь с управлением во время игры</small></label><label class="night-menu__switch"><input id="night-setting-hints" data-testid="settings-showHints" data-setting="showHints" type="checkbox"><span aria-hidden="true"></span><b aria-hidden="true"></b></label></div>
        <div class="night-menu__setting"><label for="night-setting-motion">Анимации интерфейса</label><label class="night-menu__switch"><input id="night-setting-motion" data-testid="settings-reducedMotion" data-setting="reducedMotion" type="checkbox"><span aria-hidden="true"></span><b aria-hidden="true"></b></label></div>
        <div class="night-menu__settings-foot"><button type="button" data-testid="settings-reset">Вернуть настройки по умолчанию</button><p role="status" data-menu="settings-status">Сохраняется в этом браузере</p></div>
      </form>
      <div class="night-menu__restart" hidden>
        <h2 id="night-menu-restart-title">Начать заново?</h2>
        <p id="night-menu-restart-description" class="night-menu__restart-description">Прогресс, кошелёк и покупки будут сброшены. Начнёшь с первой ночи.</p>
        <p class="night-menu__restart-note">Настройки звука, камеры и изображения сохранятся.</p>
        <div class="night-menu__restart-actions"><button type="button" data-testid="menu-restart-cancel">Отмена</button><button type="button" data-testid="menu-restart-confirm" disabled>Начать заново</button></div>
        <p class="night-menu__restart-status" role="status" aria-live="polite"></p>
      </div>
    </div>`,e.append(n);let r=e=>n.querySelector(e),i=r(`[data-testid="menu-start"]`),a=r(`[data-testid="menu-home"]`),o=r(`[data-testid="menu-controls"]`),s=r(`[data-testid="menu-settings"]`),c=r(`[data-testid="menu-back"]`),l=r(`.night-menu__landing`),u=r(`.night-menu__subview`),d=r(`.night-menu__help`),f=r(`.night-menu__settings`),p=r(`[data-testid="menu-restart"]`),m=r(`.night-menu__restart`),h=r(`[data-testid="menu-restart-confirm"]`),g=r(`[data-testid="menu-restart-cancel"]`),_=r(`.night-menu__restart-status`),v=r(`h1`),y=r(`[data-menu="status"]`),b=`main`,x=`home`,S=!1,C=!1,w=!1,T=!1,E=Qu();i.disabled=!0;function D(){n.dataset.reducedMotion=String(E.reducedMotion),f.querySelectorAll(`[data-setting]`).forEach(e=>{let t=e.dataset.setting;if(e instanceof HTMLInputElement&&e.type===`checkbox`?e.checked=t===`reducedMotion`?!E.reducedMotion:!!E[t]:e.value=String(E[t]),t===`volume`||t===`musicVolume`||t===`sensitivity`){let n=e.parentElement.querySelector(`output`);n.value=t===`sensitivity`?`${E.sensitivity.toFixed(2)}×`:`${Math.round(E[t]*100)}%`;let r=Number(e.getAttribute(`min`)),i=Number(e.getAttribute(`max`));e.style.setProperty(`--range-fill`,`${(Number(e.value)-r)/(i-r)*100}%`)}})}function O(e){x=e,n.dataset.view=x,l.hidden=x!==`home`,u.hidden=x===`home`,d.hidden=x!==`controls`,f.hidden=x!==`settings`,m.hidden=x!==`restart`,n.setAttribute(`aria-labelledby`,x===`home`?`night-menu-title`:x===`settings`?`night-menu-settings-title`:x===`restart`?`night-menu-restart-title`:`night-menu-controls-title`),x===`restart`?n.setAttribute(`aria-describedby`,`night-menu-restart-description`):n.removeAttribute(`aria-describedby`),r(`[data-menu="back-label"]`).textContent=b===`pause`?`Меню паузы`:`Главное меню`,x===`settings`&&D(),h.disabled=!S||!t.restart||T,_.textContent=``,x===`restart`?g.focus():x!==`home`&&c.focus()}function k(){let e=x;O(`home`),(e===`restart`?p:e===`settings`?s:o).focus()}let A=()=>{S&&t.resume()},j=()=>{x===`home`?b===`pause`&&A():k()};i.addEventListener(`click`,A),a.addEventListener(`click`,t.main),o.addEventListener(`click`,()=>O(`controls`)),s.addEventListener(`click`,()=>O(`settings`)),c.addEventListener(`click`,k),p.addEventListener(`click`,()=>O(`restart`)),g.addEventListener(`click`,k),h.addEventListener(`click`,()=>{S&&t.restart&&!T&&!h.disabled&&(T=!0,h.disabled=!0,t.restart()===!1&&(T=!1,h.disabled=!1,_.textContent=`Не удалось сохранить новый прогресс. Попробуй ещё раз.`,g.focus()))});function M(e){E=$u(e),D(),t.settingsChanged?.({...E}),r(`[data-menu="settings-status"]`).textContent=`Настройки сохранены`}let N=e=>{let t=e.target;if(!(t instanceof HTMLInputElement||t instanceof HTMLSelectElement))return;let n=t.dataset.setting;if(!n||e.type===`input`&&(t instanceof HTMLSelectElement||t.type===`checkbox`)||e.type===`change`&&t instanceof HTMLInputElement&&t.type===`range`)return;let r=t instanceof HTMLInputElement&&t.type===`checkbox`?n===`reducedMotion`?!t.checked:t.checked:n===`quality`?t.value:Number(t.value);M({...E,[n]:r})};f.addEventListener(`input`,N),f.addEventListener(`change`,N),f.addEventListener(`submit`,e=>e.preventDefault()),r(`[data-testid="settings-reset"]`).addEventListener(`click`,()=>M({...Ju}));let P=()=>Array.from(n.querySelectorAll(`button,input,select,a[href],[tabindex]`)).filter(e=>!e.hasAttribute(`disabled`)&&e.tabIndex>=0&&e.getClientRects().length>0),ee=e=>{if(!n.hidden){if(e.stopPropagation(),e.key===`Escape`)e.preventDefault(),j();else if(e.key===`Tab`){let t=P(),n=t[0],r=t.at(-1);if(!n){e.preventDefault();return}let i=!t.includes(document.activeElement);e.shiftKey&&(document.activeElement===n||i)?(e.preventDefault(),r.focus()):!e.shiftKey&&(document.activeElement===r||i)&&(e.preventDefault(),n.focus())}}},F=e=>{n.hidden||e.stopPropagation()};return n.addEventListener(`keydown`,ee),n.addEventListener(`keyup`,F),D(),{root:n,show(e,t){b=e,w=t.completed,n.dataset.mode=b,n.hidden=!1,O(`home`),v.textContent=b===`pause`?`Пауза`:`Spider Thief`,a.hidden=b!==`pause`,i.querySelector(`span`).textContent=b===`pause`?`Продолжить`:t.completed?`Результаты`:t.earned>0||t.balance>0||(t.level??1)>1?`Продолжить`:`Играть`;let o=t.level??1;r(`[data-menu="night"]`).textContent=`Ночь ${o} / ${ud.length} · ${dd(o).zoneLabel}`,queueMicrotask(()=>{!C&&!n.hidden&&x===`home`&&(S?i:s).focus()})},hide(){n.hidden=!0},setReady(){S=!0,i.disabled=!1,h.disabled=!t.restart||T,y.textContent=``,!n.hidden&&x===`home`&&i.focus()},escape:j,get completed(){return w},dispose(){C=!0,n.removeEventListener(`keydown`,ee),n.removeEventListener(`keyup`,F),n.remove()}}}function Uf(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));return i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),e.setIndex(i),e.clearGroups(),e}return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function Wf(e){let t=new Map,n=new Map,r=e.clone();return Gf(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function Gf(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)Gf(e.children[r],t.children[r],n)}var Kf=class extends ao{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new $f(e)}),this.register(function(e){return new ep(e)}),this.register(function(e){return new lp(e)}),this.register(function(e){return new up(e)}),this.register(function(e){return new dp(e)}),this.register(function(e){return new np(e)}),this.register(function(e){return new rp(e)}),this.register(function(e){return new ip(e)}),this.register(function(e){return new ap(e)}),this.register(function(e){return new Qf(e)}),this.register(function(e){return new op(e)}),this.register(function(e){return new tp(e)}),this.register(function(e){return new cp(e)}),this.register(function(e){return new sp(e)}),this.register(function(e){return new Xf(e)}),this.register(function(e){return new fp(e,Yf.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new fp(e,Yf.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new pp(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=Po.extractUrlBase(e);a=Po.resolveURL(t,this.path)}else a=Po.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new co(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer){if(s.decode(new Uint8Array(e,0,4))===mp){try{a[Yf.KHR_BINARY_GLTF]=new _p(e)}catch(e){r&&r(e);return}i=JSON.parse(a[Yf.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e))}else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new Up(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case Yf.KHR_MATERIALS_UNLIT:a[t]=new Zf;break;case Yf.KHR_DRACO_MESH_COMPRESSION:a[t]=new vp(i,this.dracoLoader);break;case Yf.KHR_TEXTURE_TRANSFORM:a[t]=new yp;break;case Yf.KHR_MESH_QUANTIZATION:a[t]=new bp;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function qf(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function Jf(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var Yf={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},Xf=class{constructor(e){this.parser=e,this.name=Yf.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new q(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],ze);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new No(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new Ao(s),o.distance=c;break;case`spot`:o=new Oo(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),Fp(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},Zf=class{constructor(){this.name=Yf.KHR_MATERIALS_UNLIT}getMaterialType(){return Jr}extendParams(e,t,n){let r=[];e.color=new q(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],ze),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,Re))}return Promise.all(r)}},Qf=class{constructor(e){this.parser=e,this.name=Yf.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Jf(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},$f=class{constructor(e){this.parser=e,this.name=Yf.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Jf(this.parser,e,this.name)===null?null:Oa}extendMaterialParams(e,t){let n=Jf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new kt(e,e)}return Promise.all(r)}},ep=class{constructor(e){this.parser=e,this.name=Yf.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Jf(this.parser,e,this.name)===null?null:Oa}extendMaterialParams(e,t){let n=Jf(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},tp=class{constructor(e){this.parser=e,this.name=Yf.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Jf(this.parser,e,this.name)===null?null:Oa}extendMaterialParams(e,t){let n=Jf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},np=class{constructor(e){this.parser=e,this.name=Yf.KHR_MATERIALS_SHEEN}getMaterialType(e){return Jf(this.parser,e,this.name)===null?null:Oa}extendMaterialParams(e,t){let n=Jf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new q(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],ze)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,Re)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},rp=class{constructor(e){this.parser=e,this.name=Yf.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Jf(this.parser,e,this.name)===null?null:Oa}extendMaterialParams(e,t){let n=Jf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},ip=class{constructor(e){this.parser=e,this.name=Yf.KHR_MATERIALS_VOLUME}getMaterialType(e){return Jf(this.parser,e,this.name)===null?null:Oa}extendMaterialParams(e,t){let n=Jf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new q().setRGB(i[0],i[1],i[2],ze),Promise.all(r)}},ap=class{constructor(e){this.parser=e,this.name=Yf.KHR_MATERIALS_IOR}getMaterialType(e){return Jf(this.parser,e,this.name)===null?null:Oa}extendMaterialParams(e,t){let n=Jf(this.parser,e,this.name);return n===null||(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},op=class{constructor(e){this.parser=e,this.name=Yf.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Jf(this.parser,e,this.name)===null?null:Oa}extendMaterialParams(e,t){let n=Jf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new q().setRGB(i[0],i[1],i[2],ze),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,Re)),Promise.all(r)}},sp=class{constructor(e){this.parser=e,this.name=Yf.EXT_MATERIALS_BUMP}getMaterialType(e){return Jf(this.parser,e,this.name)===null?null:Oa}extendMaterialParams(e,t){let n=Jf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},cp=class{constructor(e){this.parser=e,this.name=Yf.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Jf(this.parser,e,this.name)===null?null:Oa}extendMaterialParams(e,t){let n=Jf(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},lp=class{constructor(e){this.parser=e,this.name=Yf.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},up=class{constructor(e){this.parser=e,this.name=Yf.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},dp=class{constructor(e){this.parser=e,this.name=Yf.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},fp=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}return null}},pp=class{constructor(e){this.name=Yf.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==wp.TRIANGLES&&e.mode!==wp.TRIANGLE_STRIP&&e.mode!==wp.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new tn,n=new K,a=new At,s=new K(1,1,1),c=new ji(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));let l=null;for(let e in o)if(e===`_COLOR_0`){let t=o[e];c.instanceColor=new Ci(t.array,t.itemSize,t.normalized)}else if(e!==`TRANSLATION`&&e!==`ROTATION`&&e!==`SCALE`){if(l===null){let e=c.geometry;l=new Nr,l.name=e.name;for(let t in e.attributes)l.setAttribute(t,e.attributes[t]);for(let t in e.morphAttributes)l.morphAttributes[t]=e.morphAttributes[t];e.index!==null&&l.setIndex(e.index),l.morphTargetsRelative=e.morphTargetsRelative;for(let t of e.groups)l.addGroup(t.start,t.count,t.materialIndex);e.boundingBox!==null&&(l.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(l.boundingSphere=e.boundingSphere.clone()),l.drawRange.start=e.drawRange.start,l.drawRange.count=e.drawRange.count,l.userData=Object.assign({},e.userData),c.geometry=l}let t=o[e];l.setAttribute(e,new Ci(t.array,t.itemSize,t.normalized))}kn.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},mp=`glTF`,hp=12,gp={JSON:1313821514,BIN:5130562},_p=class{constructor(e){this.name=Yf.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,hp),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==mp)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-hp,i=new DataView(e,hp),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===gp.JSON){let r=new Uint8Array(e,hp+a,t);this.content=n.decode(r)}else if(r===gp.BIN){let n=hp+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},vp=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=Yf.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=kp[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=kp[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=Tp[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,ze,n)})})}},yp=class{constructor(){this.name=Yf.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let t=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*t,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*t,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},bp=class{constructor(){this.name=Yf.KHR_MESH_QUANTIZATION}},xp=class extends Ia{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},Sp=new At,Cp=class extends xp{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return Sp.fromArray(i).normalize().toArray(i),i}},wp={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Tp={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ep={9728:i,9729:s,9984:a,9985:c,9986:o,9987:l},Dp={33071:n,33648:r,10497:t},Op={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},kp={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},Ap={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},jp={CUBICSPLINE:void 0,LINEAR:V,STEP:je},Mp={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function Np(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Da({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function Pp(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function Fp(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function Ip(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function Lp(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function Rp(e){let t,n=e.extensions&&e.extensions[Yf.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+zp(n.attributes):e.indices+`:`+zp(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+zp(e.targets[n]);return t}function zp(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function Bp(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function Vp(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var Hp=new tn,Up=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new qf,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}this.textureLoader=typeof createImageBitmap>`u`||n&&r<17||i&&a<98?new fo(this.options.manager):new Io(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new co(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return Pp(i,a,r),Fp(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Yf.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(Po.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=Op[r.type],t=Tp[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new vr(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=Op[r.type],o=Tp[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new Pr(f,u/s),t.cache.add(n,c)),p=new Ir(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new vr(f,a,d);if(r.sparse!==void 0){let t=Op.SCALAR,n=Tp[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new vr(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=Ep[n.magFilter]||1006,t.minFilter=Ep[n.minFilter]||1008,t.wrapS=Dp[n.wrapS]||1e3,t.wrapT=Dp[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new Yt(e);t.needsUpdate=!0,n(t)}),t.load(Po.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),Fp(e,a),e.userData.mimeType=a.mimeType||Vp(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[Yf.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[Yf.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[Yf.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Xi,Hr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Ii,Hr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return Da}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[Yf.KHR_MATERIALS_UNLIT]){let e=r[Yf.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new q(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],ze),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,Re)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||Mp.OPAQUE;if(l===Mp.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===Mp.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==Jr&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new kt(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==Jr&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==Jr){let e=i.emissiveFactor;o.emissive=new q().setRGB(e[0],e[1],e[2],ze)}return i.emissiveTexture!==void 0&&a!==Jr&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,Re)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),Fp(n,i),t.associations.set(n,{materials:e}),i.extensions&&Pp(r,n,i),n})}createUniqueName(e){let t=$o.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[Yf.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return Gp(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=Rp(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[Yf.KHR_DRACO_MESH_COMPRESSION]?i(o):Gp(new Nr,o,t),o.mode===wp.TRIANGLE_STRIP?e=e.then(e=>Uf(e,1)):o.mode===wp.TRIANGLE_FAN&&(e=e.then(e=>Uf(e,2))),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?Np(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===wp.TRIANGLES||u.mode===wp.TRIANGLE_STRIP||u.mode===wp.TRIANGLE_FAN||u.mode===void 0){let e=i.isSkinnedMesh===!0,t=l.hasAttribute(`skinIndex`)&&l.hasAttribute(`skinWeight`);e&&t===!1&&console.warn(`THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`),d=e&&t?new _i(l,f):new J(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(u.mode===wp.LINES)d=new Ji(l,f);else if(u.mode===wp.LINE_STRIP)d=new Wi(l,f);else if(u.mode===wp.LINE_LOOP)d=new Yi(l,f);else if(u.mode===wp.POINTS)d=new ta(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&Lp(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),Fp(d,i),u.extensions&&Pp(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&Pp(r,c[0],i),c[0];let l=new An;i.extensions&&Pp(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r)console.warn(`THREE.GLTFLoader: Missing camera parameters.`);else return n.type===`perspective`?t=new Eo(Ot.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new jo(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fp(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new tn;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new Si(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new $a(i,void 0,l);return Fp(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,Hp)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new K().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new vi:t.length>1?new An:t.length===1?t[0]:new kn,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),Fp(o,i),i.extensions&&Pp(n,o,i),i.matrix!==void 0){let e=new tn;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new An;n.name&&(i.name=r.createUniqueName(n.name)),Fp(i,n),n.extensions&&Pp(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(Wf(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof Hr||e instanceof Yt)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}Ap[i.path]===Ap.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(Ap[i.path]){case Ap.weights:l=Ja;break;case Ap.rotation:l=Xa;break;case Ap.translation:case Ap.scale:l=Qa;break;default:switch(n.itemSize){case 1:l=Ja;break;default:l=Qa}}let u=r.interpolation===void 0?V:jp[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+Ap[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=Bp(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof Xa?Cp:xp)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Wp(e,t,n){let r=t.attributes,i=new er;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new K(t[0],t[1],t[2]),new K(a[0],a[1],a[2])),e.normalized){let t=Bp(Tp[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new K,t=new K;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=Bp(Tp[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new Tr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function Gp(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=kp[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return Rt.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Rt.workingColorSpace}" not supported.`),Fp(e,t),Wp(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:Ip(e,t.targets,n)})}var Kp=new Kf,qp=new Map;async function Jp(e){let t=qp.get(e);t||(t=Kp.loadAsync(e).then(e=>e.scene).catch(n=>{qp.get(e)===t&&qp.delete(e);let r=n instanceof Error?n.message:String(n);throw Error(`Environment asset failed: ${e}: ${r}`,{cause:n})}),qp.set(e,t));try{let e=Wf(await t),n=new Map,r=new Map,i=new Map,a=e=>{let t=r.get(e);if(t)return t;t=e.clone();for(let[n,r]of Object.entries(e)){if(!(r instanceof Yt))continue;let e=i.get(r);e||(e=r.clone(),e.source=new Kt(r.source.data),i.set(r,e)),t[n]=e}return r.set(e,t),t};return e.traverse(e=>{if(e instanceof _i&&(e.skeleton.boneInverses=e.skeleton.boneInverses.map(e=>e.clone())),!(e instanceof J||e instanceof Wi||e instanceof ta))return;let t=e.geometry,r=n.get(t)??t.clone();n.set(t,r),e.geometry=r,e.material=Array.isArray(e.material)?e.material.map(a):a(e.material)}),e}catch(t){throw t instanceof Error&&t.message.startsWith(`Environment asset failed: ${e}:`)?t:Error(`Environment asset failed: ${e}: ${t instanceof Error?t.message:String(t)}`,{cause:t})}}var Yp=(e,t,n,r,i=0)=>({id:e,url:`/spider-thief-night-shift/assets/apartment-upgrade/${t}.glb`,position:n,rotationY:i,size:r}),Xp=[...Sd,pd(`cabinet-run`,`counter-run`,[-.2,0,-3.82],[4.2,.9,.7]),pd(`fridge`,`fridge`,[3.4,0,-3.72],[.8,1.9,.85]),pd(`island`,`counter`,[-2,0,3.75],[1.65,.9,.65],Math.PI),pd(`stove`,`stove`,[2.4,0,-3.82],[.95,.9,.7]),...md,...Yd,pd(`sink`,`sink`,[-2.95,0,-3.75],[.75,1.62146,.8]),{id:`table`,url:`/spider-thief-night-shift/assets/cover-spawns/open-table.glb`,position:[.6,0,.7],size:[1.8,.8,1.1],rotationY:0},Yp(`chair-0`,`chair`,[.15,0,1.65],[.56,.95,.56],Math.PI),Yp(`chair-1`,`chair`,[1.05,0,-.25],[.56,.95,.56]),{id:`kitchen-cart`,url:`/spider-thief-night-shift/assets/redesign-rooms/hallway/Storage_Basket.glb`,position:[-1.85,0,-2.8],size:[.65,.45,.65],rotationY:0},Yp(`corridor-console`,`nightstand`,[5.5,0,-3.82],[1.6,.9,.5]),Yp(`corridor-cover`,`nightstand`,[5.7,0,1.7],[.65,.8,.65]),Yp(`hall-bench`,`nightstand`,[5.85,0,-1.65],[1.2,.35,.65]),Yp(`hall-shoe-rack`,`nightstand`,[4.65,0,2.9],[.65,.3,1.2]),Yp(`hall-low-cabinet`,`nightstand`,[5.4,0,2.9],[.75,.55,.85]),{id:`sofa`,url:`/spider-thief-night-shift/assets/redesign-rooms/living/sofa_modern.glb`,position:[10.7,0,-3.35],size:[2.32,1.025,.9],rotationY:0},{id:`coffee`,url:`/spider-thief-night-shift/assets/cover-spawns/open-table.glb`,position:[10.7,0,-.9],size:[1.5,.5,.8],rotationY:0},Yp(`media-console`,`nightstand`,[13.65,0,.2],[.6,.52,2.4]),Yp(`living-bookcase`,`shelf`,[9,0,3.9],[2.3,1.3,.5]),Yp(`living-ottoman`,`nightstand`,[9.1,0,-.9],[.75,.3,.75]),Yp(`living-side-table`,`nightstand`,[12.65,0,-1.5],[.7,.3,.7]),{id:`box-low`,url:`/spider-thief-night-shift/assets/redesign-rooms/furniture2/blanket_chest.glb`,position:[9,0,3.05],size:[1.6,.85,.65],rotationY:0},{id:`door-corridor`,url:`/spider-thief-night-shift/assets/redesign-architecture/door-rotate-square-a.glb`,position:[4.05,0,0],size:[.12,2.15,1.6],rotationY:0},{id:`door-living`,url:`/spider-thief-night-shift/assets/redesign-architecture/door-rotate-square-a.glb`,position:[7,0,0],size:[.12,2.15,1.6],rotationY:0},Yp(`living-lamp`,`lamp`,[12.8,0,-3.6],[.38,1.55,.38]),Yp(`hall-lamp`,`lamp`,[6.55,0,3.65],[.35,1.5,.35])].map(cd).filter(e=>!wd.some(t=>t.id===e.id)).concat([...wd,...Td]);function Zp(e){for(let t of wd)if(e.startsWith(t.id+`-leg-`))return t.id;for(let t of[`breakfast-bench`,`hall-bench`,`reading-table`,`living-side-table`,`corridor-console`,`north-breakfast-bench`,`north-breakfast-table`,`north-hall-bench`,`north-library-table`,`east-writing-console`])if(e.startsWith(t+`-leg-`))return t;return e.startsWith(`table-`)?`table`:e.startsWith(`chair-0-`)?`chair-0`:e.startsWith(`chair-1-`)?`chair-1`:e===`sofa-step`?e:e.startsWith(`sofa-`)?`sofa`:e.startsWith(`coffee-`)?`coffee`:e.startsWith(`console-leg-`)?`corridor-console`:e.startsWith(`bookcase-`)?`living-bookcase`:Xp.some(t=>t.id===e)?e:void 0}function Qp(e,t,n,r,i){let a=(e,n={})=>{let r=new Da({color:e,roughness:.9,...n});return t.add(r),r},o=a(14207920),s=a(4404267),c=a(10385218,{metalness:.65,roughness:.4}),l=a(16767899,{emissive:16758356,emissiveIntensity:1.2});function u(t,r,i,a,o,s){n.add(r);let c=new J(r,i);return c.name=t,c.position.set(a,o,s),c.receiveShadow=!0,e.add(c),c}function d(e,t,n,r,i,a,o,s){return u(e,new sa(t,n,r),s,i,a,o)}d(`nest-woven-path`,1.52,.006,.3,-4.8,.004,1.6,i);for(let e of Od){let t=e.min,n=e.max;d(e.id,n[0]-t[0],n[1]-t[1],n[2]-t[2],(t[0]+n[0])/2,(t[1]+n[1])/2,(t[2]+n[2])/2,e.id.includes(`board`)?s:r)}u(`nest-woven-bed`,new ha(.255,28,12),s,kd.x,.045,kd.z).scale.set(1,.19,1.15),u(`nest-silk-cushion`,new ha(.22,28,12),i,kd.x,.064,kd.z).scale.set(1,.14,1.15);for(let e=0;e<3;e++){let t=u(`nest-bed-seam`,new ga(.232-e*.008,.005,5,36),o,kd.x,.065+e*.005,kd.z);t.rotation.x=Math.PI/2,t.scale.y=1.15}let f=new Ii({color:14997693,transparent:!0,opacity:.29});t.add(f);let p=new K(-5.731,.84,.83);function m(t){let r=new Nr().setFromPoints(t);n.add(r),e.add(new Wi(r,f))}for(let e=0;e<=8;e++){let t=e*Math.PI/16;m([p,new K(-5.73,.84-Math.sin(t)*.55,.83+Math.cos(t)*.7)])}for(let e=1;e<=5;e++){let t=[];for(let n=0;n<=24;n++){let r=n*Math.PI/48;t.push(new K(-5.729,.84-Math.sin(r)*e*.1,.83+Math.cos(r)*e*.128))}m(t)}let{x:h,z:g}=Ad;d(`nest-lantern-foot`,.105,.018,.105,h,.018,g,c),u(`nest-lantern-glass`,new ca(.031,.036,.095,12),l,h,.073,g);for(let e of[-.04,.04])for(let t of[-.04,.04])d(`nest-lantern-frame`,.008,.105,.008,h+e,.074,g+t,c);d(`nest-lantern-cap`,.1,.018,.1,h,.13,g,c);let _=u(`nest-lantern-handle`,new ga(.029,.004,5,16,Math.PI),c,h,.145,g);_.rotation.y=Math.PI/2;let v=new Ao(16761984,.46,2.4,2);return v.position.set(-5,.38,1.9),e.add(v),v}function $p(e,t,n){let r=new An;r.name=`nest-wall-opening`;let i=new Da({color:6640198,roughness:1});e.add(i);let a=[[1.2,0],[1.19,.16],[1.22,.31],[1.29,.45],[1.43,.54],[1.59,.58],[1.76,.55],[1.91,.44],[2,.28],[2.01,.13],[2,0]],o=[],s=[];function c(e,t,n,r,i){e.push(...t,...n,...r,...t,...r,...i)}for(let e=0;e<a.length-1;e++){let[t,n]=a[e],[r,i]=a[e+1];c(o,[-3.995,n,t],[-3.995,i,r],[-3.995,2.6,r],[-3.995,2.6,t]),c(o,[-4.12,n,t],[-4.12,2.6,t],[-4.12,2.6,r],[-4.12,i,r]),c(s,[-3.994,n,t],[-4.38,n*.94,t],[-4.38,i*.94,r],[-3.994,i,r])}function l(e,n,i){let a=new Nr;a.setAttribute(`position`,new xr(e,3));let o=[];for(let t=0;t<e.length;t+=3)o.push(e[t+2]/2.6,e[t+1]/2.6);a.setAttribute(`uv`,new xr(o,2)),a.computeVertexNormals(),t.add(a);let s=new J(a,n);s.name=i,s.receiveShadow=!0,r.add(s)}let u=n.clone();u.side=2,e.add(u),l(o,u,`cut-plaster-wall`),i.side=2,l(s,i,`rough-hole-reveal`);let d=new Da({color:12036756,roughness:1});e.add(d);for(let e=1;e<a.length-1;e++){let[n,i]=a[e],o=new da(.025+e%3*.009,0);t.add(o);let s=new J(o,d);s.position.set(-3.993,i+.014,n),s.scale.set(.28,.65,1),s.rotation.x=e*.7,r.add(s)}return r}var em=13.4,tm=2.6;function nm(e,n){let r=new An;r.name=`kitchen`;let i=!1,a=e=>{let t=new Set,n=new Set,r=new Set;e.traverse(e=>{if(e instanceof J||e instanceof Wi||e instanceof ta){t.add(e.geometry);for(let t of Array.isArray(e.material)?e.material:[e.material]){n.add(t);for(let e of Object.values(t))e instanceof Yt&&r.add(e)}e instanceof _i&&e.skeleton.dispose()}}),r.forEach(e=>e.dispose()),n.forEach(e=>e.dispose()),t.forEach(e=>e.dispose())},o=[],s=[],c=(t,n={})=>{let r=new Da({color:t,roughness:.8,...n});return e.add(r),r},l=(e,n,r)=>{let i=e.endsWith(`.jpg`)||e===`limestone.svg`?`night-shift`:e===`weave.svg`?`apartment`:`mission-01`,a=new fo().load(`/spider-thief-night-shift/assets/${i}/${e}`);return a.wrapS=a.wrapT=t,a.repeat.set(n,r),a.colorSpace=Re,a.anisotropy=4,a},u=c(12698807,{map:l(`painted_plaster_wall.jpg`,3,1),roughness:.94}),d=c(11109728,{map:l(`oak.svg`,1,1)}),f=c(8745051),p=c(5008229),m=c(11902315,{metalness:.75,roughness:.32}),h=c(6651008,{map:l(`weave.svg`,3,3),roughness:1}),g=c(3424328,{metalness:.65,roughness:.35}),_=(e,t,i,a)=>{let o=new sa(t.x,t.y,t.z);n.add(o);let s=new J(o,a);return s.name=e,s.position.copy(i),s.castShadow=!1,s.receiveShadow=!0,r.add(s),s},v=(e,t,n,r,i,a,o,s)=>_(e,new K(t,n,r),new K(i,a,o),s),y=qd.blockers.map(t=>{let n=new er(new K(...t.min),new K(...t.max)),r=t.id.startsWith(`door`)?d:t.id.startsWith(`wall`)?u:t.id.startsWith(`nest`)?f:t.id.startsWith(`cabinet`)||t.id===`island`?p:t.id.startsWith(`sofa`)?h:t.id===`fridge`?g:d,i=Zp(t.id),a=i?r.clone():r;i&&e.add(a);let o=_(t.id,n.getSize(new K),n.getCenter(new K),a);return(t.id===`wall-lair-lintel`||t.id.startsWith(`wall-glass-`)||Md.has(t.id))&&(o.userData.customOpening=!0),o.userData.modelPlacementId=i,{definition:t,bounds:n,mesh:o}});r.add($p(e,n,u));let b=c(14138773,{map:l(`wood_floor.jpg`,2.5,3),roughness:.72});v(`kitchen-floor`,8,.06,em,0,-.03,.5,c(12170658,{map:l(`limestone.svg`,13,21),roughness:.78})),v(`corridor-floor`,3,.06,em,5.5,-.03,.5,b),v(`living-floor`,9,.06,em,11.5,-.03,.5,b),v(`nest-floor`,1.8,.06,1.8,-4.9,-.03,1.6,f),v(`apartment-ceiling`,20,.08,em,6,2.64,.5,c(14012352,{roughness:1}));let x=r.getObjectByName(`apartment-ceiling`).material;for(let e of hd){let t=(e.minX+e.maxX)/2,n=(e.minZ+e.maxZ)/2;v(`${e.id}-floor`,e.maxX-e.minX,.06,e.maxZ-e.minZ,t,-.03,n,e.id===`office`?S():b),v(`${e.id}-ceiling`,e.maxX-e.minX,.08,e.maxZ-e.minZ,t,2.64,n,x)}function S(){let t=b.clone();return t.color.setHex(10123348),t.map=b.map.clone(),t.map.repeat.set(1.2,1.5),e.add(t),t}let C=b.clone();C.map=b.map.clone(),C.map.repeat.set(1.1,3),e.add(C),r.getObjectByName(`corridor-floor`).material=C;let w=c(13681577);for(let e of y.filter(e=>e.definition.id.startsWith(`baseboard-`)))e.mesh.material=w;for(let e of[4.05,7]){for(let t of[-.85,.85])v(`door-jamb`,.19,2.2,.07,e,1.1,t,w);v(`door-header`,.19,.08,1.75,e,2.19,0,w)}for(let e of hd){let{x:t,z:n,width:r}=e.entrance;for(let i of[-r/2-.035,r/2+.035])v(`${e.id}-door-jamb`,.07,2.2,.19,t+i,1.1,n,w);v(`${e.id}-door-header`,r+.14,.08,.19,t,2.19,n,w)}v(`hall-runner`,1.2,.008,5.4,5.4,.004,-.1,c(8543825,{map:l(`weave.svg`,2,7)})),v(`living-rug`,5.3,.008,3.4,12.3,.004,-3.2,c(9004118,{map:l(`weave.svg`,6,6)})),v(`countertop`,4.2,.025,.7,-.2,.8875,-3.82+rd,c(13025966,{roughness:.32})).userData.modelPlacementId=`cabinet-run`;let T=d.clone();e.add(T),v(`island-top`,1.65,.025,.65,-2,.8875,3.75,T).userData.modelPlacementId=`island`;let E=c(16765856,{emissive:16759920,emissiveIntensity:1.5});for(let[e,t,n]of[[-1.8,-6.17,!1],[15.93,-.8,!0]]){let i=v(`wall-lamp`,.25,.2,.12,e,1.8,t,m),a=v(`lamp-diffuser`,.2,.13,.13,e,1.78,t,E);n&&(i.rotation.y=Math.PI/2,a.rotation.y=Math.PI/2);let o=new Ao(16764822,1.5,5,2);o.position.set(e-(n?.3:0),1.6,t+(n?0:.3)),r.add(o)}for(let e of[-1.3,.8]){v(`under-cabinet-light`,.75,.025,.04,e,1.53,-3.77+rd,E);let t=new Ao(16766884,.65,2.2,2);t.position.set(e,1.4,-3.55+rd),r.add(t)}for(let[e,t,n]of[[5.5,0,3],[10.5,-.5,7],[12.7,-3.5,2],[0,5.8,3],[5.5,5.5,2],[11,5.6,4]]){let i=new Ao(16765856,n,7,2);i.position.set(e,2.15,t),r.add(i)}let D=c(5401735,{emissive:4352408,emissiveIntensity:.45,roughness:.3});for(let{x:e,z:t}of Rd){for(let n of[-1.08,1.08])v(`window-frame-side`,.075,1.25,.14,e+n,1.7,t,w);for(let n of[1.1,2.325])v(`window-frame-rail`,2.2,.065,.14,e,n,t,w);v(`night-window`,2.05,1.1,.025,e,1.7,t,D);for(let n of[-.7,0,.7])v(`window-mullion`,.035,1.1,.09,e+n,1.7,t,w);v(`window-sill`,2.35,.07,.22,e,1.1,t+(t<0?.06:-.06),w),v(`window-crossbar`,2.05,.035,.09,e,1.65,t,w);let n=new Ao(9023204,1.8,5,2);n.position.set(e,1.8,t+(t<0?.65:-.65)),r.add(n);let i=c(1056825,{roughness:1});for(let n=0;n<6;n++)v(`distant-rooftop`,.3,.2+n%3*.14,.08,e-.85+n*.32,1.2,t+(t<0?-.22:.22),i)}for(let e of hd){let{x:t,z:n}=e.entrance,r=v(`side-room-door-handle`,.13,.035,.05,t+.25,.95,n+(n<0?.085:-.085),m);r.userData.unlockMission=e.unlock}for(let e of[4.05,7]){let t=v(`passage-door-handle`,.045,.045,.16,e-.085,.95,.55,m);t.userData.unlockMission=e===4.05?2:3}let O=Qp(r,e,n,d,h),k=c(5533804,{roughness:.9});for(let[e,t,n]of[[-3.8,3.8,7.16],[7.2,15.8,7.16],[7.2,15.8,-6.16]])for(let r=e+.35;r<t;r+=.85)if(!(n>0&&Math.abs(r+1)<1.35||n>0&&Math.abs(r-10.5)<1.35||hd.some(e=>Math.abs(e.entrance.z-n)<.2&&Math.abs(r-e.entrance.x)<e.entrance.width/2+.45))){v(`wall-panel`,.72,.72,.018,r,.45,n,k);for(let e of[-.36,.36])v(`panel-stile`,.025,.75,.026,r+e,.45,n,w);v(`panel-top`,.75,.025,.026,r,.825,n,w)}for(let[e,t]of[[.6,.7],[.2,-5.1],[5.5,3.7],[11,3.5],[14.4,-4.8]]){let i=new ca(.22,.22,.035,32);n.add(i);let a=new J(i,w);a.position.set(e,2.58,t),r.add(a);let o=new ha(.14,20,12);n.add(o);let s=new J(o,E);s.scale.set(1,.45,1),s.position.set(e,2.38,t),r.add(s),v(`lamp-stem`,.025,.19,.025,e,2.49,t,m);let c=new Ao(16765600,1.8,5.5,2);c.position.set(e,2.2,t),r.add(c)}for(let[e,t,n]of[[5.55,9.3,4],[4.15,10.7,1.8],[11.5,-8.5,4],[9.7,-10.6,2],[14.1,-11.3,1.5]]){let i=new Ao(16765600,n,6,2);i.position.set(e,2.1,t),r.add(i)}v(`bedroom-ceiling-rose`,.5,.04,.5,11.65,2.58,-8.15,w),v(`bedroom-ceiling-light`,.32,.09,.32,11.65,2.46,-8.15,E);let A={bounds:new er(new K(-4,0,Id.minZ),new K(16,tm,Id.maxZ)),obstacles:[],patrolPoints:[[-1.15,-2.8],[1.45,-2.7],[2.7,.6],[2.4,2.5],[-1.4,2.7],[-2.7,-.8],[3.2,0],[4.9,0],[6.4,-2.7],[6.3,0],[7.8,0],[8.8,1.5],[11.2,2.2],[11.9,-1.9],[-.5,5.3],[2.7,5.2],[5.5,4.9],[10,5.8],[12.6,4.6],[-2.75,-4.65],[2.7,-4.85],[5.5,-4.7],[9.1,-4.7],[13,-4.8],[14.5,1.5],[14.8,5.3]].map(([e,t])=>new K(e,0,t)),spawn:new K(-1.35,0,-1.4)};function j(e){A.patrolPoints=A.patrolPoints.filter(e=>e.z>=-6.2&&e.z<=7.2),e>=4&&A.patrolPoints.push(...[[6.45,8.25],[6.9,9.9],[5.5,11.15]].map(([e,t])=>new K(e,0,t))),e>=5&&A.patrolPoints.push(...[[14.35,-7.3],[13,-9],[11.6,-9.5]].map(([e,t])=>new K(e,0,t))),o.length=0,s.length=0,A.obstacles.length=0;for(let t of y){let n=t.definition.unlockMission===null||e<t.definition.unlockMission;t.mesh.visible=n&&!t.mesh.userData.modelLoaded&&!t.mesh.userData.customOpening,n&&(s.push(t.mesh),A.obstacles.push({id:t.definition.id,bounds:t.bounds}),t.bounds.min.y<.12&&o.push({minX:t.bounds.min.x,maxX:t.bounds.max.x,minZ:t.bounds.min.z,maxZ:t.bounds.max.z}))}r.traverse(t=>{typeof t.userData.unlockMission==`number`&&(t.visible=e<t.userData.unlockMission)}),r.updateMatrixWorld(!0)}j(1);let M={plant:[[-2.4,.9,3.75,0]]};return fetch(`/spider-thief-night-shift/assets/night-apartment/manifest.json`).then(e=>{if(!e.ok)throw Error(`manifest HTTP ${e.status}`);return e.json()}).then(async t=>{i||await Promise.all(t.assets.map(async t=>{for(let[o,s,c,l]of M[t.id]??[]){if(i)return;let u=await Jp(t.url);if(i){a(u);return}u.name=`asset-${t.id}`,u.scale.setScalar(t.scale),u.position.set(o,s,c),u.rotation.y=l,u.traverse(t=>{if(t instanceof J||t instanceof Wi||t instanceof ta){n.add(t.geometry);for(let n of Array.isArray(t.material)?t.material:[t.material])e.add(n);t.castShadow=!1,t.receiveShadow=!0}}),r.add(u)}}))}).catch(e=>{i||(console.error(`Night apartment asset load failed:`,e),r.userData.assetError=String(e))}),{group:r,obstacles:o,cameraBlockers:s,humanWorld:A,setMission:j,dispose(){i||(i=!0,r.traverse(e=>{e instanceof _i&&e.skeleton.dispose()}))},bounds:{...Id},lair:{x:-5.2,z:1.6},candyStart:{x:2.4,z:1.9},spiderStart:{x:-2.4,z:1.2},update(e){O.intensity=.32+.02*Math.sin(e*1.7)}}}function rm(e,t){t.updateWorldMatrix(!0,!0);let n=[`l`,`r`].flatMap((n,r)=>[`a`,`b`,`c`,`d`].map((i,a)=>{let o=[1,2,3].map(e=>t.getObjectByName(`leg_${i}_${e}_${n}`)),s=t.getObjectByName(`leg_${i}_tip_${n}`),c=e.worldToLocal(s.getWorldPosition(new K));return c.x*=.78,c.z*=.78,c.y=.001,{chain:o,tip:s,home:c,offset:(a+r)%2*.5,rest:o.map(e=>e.quaternion.clone()),target:new K,from:new K,to:new K,phase:0,swing:!1}})),r=e.position.clone(),i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K,d=new At,f=new At,p=0,m=!1,h=.55;function g(){e.updateWorldMatrix(!0,!0);for(let t of n)t.target.copy(e.localToWorld(t.home.clone())),t.from.copy(t.target),t.to.copy(t.target),t.phase=(p+t.offset)%1,t.swing=!1;m=!0}function _(t,_,v,y,b){i.subVectors(e.position,r),r.copy(e.position);let x=Math.hypot(i.x,i.z);if(!_){m=!1;return}(!m||x>.3||Math.abs(i.y)>.035)&&g();let S=x>1e-5&&t>0,C=y?.1:v?.16:.14;S&&(a.set(i.x,0,i.z).normalize(),p+=x/C),e.updateWorldMatrix(!0,!0);for(let t of n){b&&(t.chain.forEach((e,n)=>e.quaternion.copy(t.rest[n])),t.chain[0].updateWorldMatrix(!0,!0));let n=(p+t.offset)%1;if(S&&n>=h&&(!t.swing||n<t.phase)&&(t.from.copy(t.target),t.swing=!0),t.swing){if(o.copy(e.localToWorld(t.home.clone())).addScaledVector(a,C*h*.5),o.y=e.position.y+.001,t.to.copy(o),n<h||!S)t.target.copy(t.to),t.swing=!1;else{let e=(n-h)/.44999999999999996,r=e*e*(3-2*e);t.target.lerpVectors(t.from,t.to,r),t.target.y+=Math.sin(e*Math.PI)*(v?.018:.012)}}if(t.phase=n,b)for(let e=0;e<32;e++){for(let e=2;e>=0;e--){let n=t.chain[e];n.getWorldPosition(s),t.tip.getWorldPosition(c),n.parent.getWorldQuaternion(d).invert(),l.subVectors(c,s).applyQuaternion(d).normalize(),u.subVectors(t.target,s).applyQuaternion(d).normalize(),f.setFromUnitVectors(l,u),n.quaternion.premultiply(f),n.updateWorldMatrix(!1,!0)}if(t.tip.getWorldPosition(c).distanceToSquared(t.target)<1e-8)break}}b&&(e.userData.gait={cycle:p,contacts:n.map(e=>({name:e.tip.name,planted:!e.swing,target:e.target.toArray(),actual:e.tip.getWorldPosition(c).toArray()}))})}let v=new K,y=new K;return{update(t,n,i,a){v.copy(e.position),y.copy(r);let o=v.distanceTo(y),s=n&&m&&o<.3?Math.max(1,Math.ceil(o/.008)):1;for(let r=1;r<=s;r++)e.position.lerpVectors(y,v,r/s),_(t/s,n,i,a,r===s);e.position.copy(v)}}}function im(e,t){let n=t=>(e.add(t),t),r=e=>(t.add(e),e),i=n(new Da({color:1776418,roughness:.55,metalness:.1})),a=n(new Da({color:13124399,roughness:.6,emissive:3804424})),o=n(new Da({color:3160637,roughness:.48})),s=n(new Da({color:15921906,emissive:10475775,emissiveIntensity:.6})),c=new An;c.name=`spider`;let l=new An;l.scale.setScalar(.3),c.add(l);let u=new J(r(new ha(.13,20,14)),i);u.scale.set(1,.8,1.2),u.position.set(0,.16,-.1),u.castShadow=!0,l.add(u);let d=new J(r(new ha(.05,12,8)),a);d.scale.set(1,.4,1.8),d.position.set(0,.255,-.12),l.add(d);let f=new J(r(new ha(.085,18,12)),i);f.scale.set(1,.8,1),f.position.set(0,.13,.09),f.castShadow=!0,l.add(f);let p=r(new ha(.022,10,8));for(let e of[-1,1]){let t=new J(p,s);t.position.set(e*.035,.17,.16),l.add(t)}let m=!1,h,g,_,v,y=new Map;new Kf().loadAsync(`/spider-thief-night-shift/assets/night-shift/spider-afk.glb`).then(n=>{if(n.scene.traverse(n=>{n instanceof J&&(m?(n.geometry.dispose(),(Array.isArray(n.material)?n.material:[n.material]).forEach(e=>e.dispose())):(t.add(n.geometry),(Array.isArray(n.material)?n.material:[n.material]).forEach(t=>e.add(t)),n.castShadow=!0))}),m)return;g=n.scene,l.visible=!1;let r=new er().setFromObject(g).getSize(new K);g.scale.setScalar(.18/r.x),g.updateMatrixWorld(!0),g.position.y=-new er().setFromObject(g).min.y,c.add(g),T.position.set(0,.052,-.018),h=new ns(g);for(let e of n.animations){let t=h.clipAction(e);e.name===`Jump`&&(t.setLoop(B,1),t.clampWhenFinished=!0),y.set(e.name,t)}_=y.get(`Idle`),_?.play(),h.update(0),v=rm(c,g),c.userData.spiderModel=`afk`,c.userData.animationClips=[...y.keys()]}).catch(e=>console.error(`Spider shell load failed`,e));let b=r(new ca(.012,.018,1,10)),x=r(new ca(.0025,.013,1,10)),S=r(new ha(.014,8,6)),C=[],w=[.55,.2,-.15,-.5];for(let e of[-1,1])w.forEach((t,n)=>{let r=new An;r.position.set(e*.05,.14,.06-n*.05);let i=e>0?-t:Math.PI+t;r.rotation.y=i;let a=new J(b,o);a.castShadow=!0,r.add(a);let s=new J(S,o),c=new J(x,o);c.castShadow=!0,r.add(c),r.add(s),l.add(r),C.push({pivot:r,femur:a,tibia:c,knee:s,phase:(n%2==0?0:Math.PI)+(e>0?Math.PI:0),baseYaw:i})});let T=new kn;T.position.set(0,.085,-.03),c.add(T);let E=0,D=0,O=0,k=0,A=!0,j=new K,M=new K,N=new K,P=new K(0,1,0),ee=new K;function F(e,t,n){N.subVectors(n,t),e.position.copy(t).add(n).multiplyScalar(.5),e.scale.y=N.length(),e.quaternion.setFromUnitVectors(P,N.normalize())}return{root:c,backSocket:T,pickup(){O=.32},dispose(){m=!0,h?.stopAllAction(),g&&(h?.uncacheRoot(g),g.traverse(e=>{if(e instanceof _i&&e.skeleton.dispose(),e instanceof J)for(let t of Array.isArray(e.material)?e.material:[e.material])t instanceof Da&&t.map?.dispose()}))},animate(e,t,n={grounded:!0,verticalSpeed:0,heavy:!1,sprinting:!1}){if(h){let r=n.grounded?t<.05?`Idle`:n.sprinting?`Run`:n.heavy?`Sneak`:`Walk`:`Jump`,i=y.get(r)??y.get(`Idle`);i&&i!==_&&(i.reset().setEffectiveWeight(1).fadeIn(.14).play(),_?.fadeOut(.14),_=i),_&&_.setEffectiveTimeScale(r===`Walk`||r===`Run`||r===`Sneak`?Ot.clamp(t/(r===`Run`?2.2:r===`Sneak`?.8:1.4),.45,2):1),h.update(Math.max(0,e)),v?.update(e,n.grounded,n.sprinting,n.heavy),c.userData.animation=r;return}n.grounded&&!A&&(k=.22),A=n.grounded,k=Math.max(0,k-e),O=Math.max(0,O-e);let r=t>.05&&n.grounded;D=Ot.lerp(D,+!!r,1-Math.exp(-18*e)),E+=e*(r?Math.min(48,12+t*14):0);let i=Math.cos(E*2)*.0018*D-k*.025+Math.sin(O/.32*Math.PI)*.006;for(let e of C){let t=(E+e.phase)/(Math.PI*2)%1;e.pivot.rotation.y=e.baseYaw;let r=Math.max(0,(t-.62)/.38),a=r*r*(3-2*r),o=(t<.62?.5-t/.62:-.5+a)*(n.heavy?.09:.13)*D,s=Math.sin(r*Math.PI)*(n.sprinting?.065:.045)*D;M.set(.225-Math.sin(e.baseYaw)*o,n.grounded?-.14-i/.3+s:-.065,Math.cos(e.baseYaw)*o),n.grounded||(M.x=.18),j.set(.13,.055,M.z*.4),e.knee.position.copy(j),F(e.femur,ee,j),F(e.tibia,j,M)}l.position.y=i,l.rotation.x=n.grounded?n.heavy?.09:0:Ot.clamp(-n.verticalSpeed*.035,-.13,.13),l.rotation.z=n.heavy?Math.sin(E)*.035*D:0}}}var am=(e,t)=>Math.hypot(e.x-t.x,e.z-t.z),om=e=>Math.atan2(Math.sin(e),Math.cos(e)),sm=(e,t)=>e+Math.random()*(t-e);function cm(e,t,n){let r=0,i=1;for(let a of[`x`,`y`,`z`]){let o=t[a]-e[a];if(Math.abs(o)<1e-9){if(e[a]<n.min[a]||e[a]>n.max[a])return!1}else{let t=(n.min[a]-e[a])/o,s=(n.max[a]-e[a])/o;if(r=Math.max(r,Math.min(t,s)),i=Math.min(i,Math.max(t,s)),r>i)return!1}}return!0}function lm(e){let t=e.bounds.clone(),n=e.navigationAreas?.map(e=>e.clone()),r=e.obstacles.map(e=>e.bounds.clone()),i=e.spawn.y,a=r.filter(e=>e.max.y>i+$.floorTolerance&&e.min.y<i+$.height).map(e=>new er(new K(e.min.x-$.radius-$.navigationPadding,i-1,e.min.z-$.radius-$.navigationPadding),new K(e.max.x+$.radius+$.navigationPadding,i+$.height,e.max.z+$.radius+$.navigationPadding))),o=e.spawn.clone(),s=e=>e.x>=t.min.x+$.radius&&e.x<=t.max.x-$.radius&&e.z>=t.min.z+$.radius&&e.z<=t.max.z-$.radius&&(!n||n.some(t=>e.x>=t.min.x&&e.x<=t.max.x&&e.z>=t.min.z&&e.z<=t.max.z)),c=(e,t)=>s(e)&&s(t)&&!a.some(n=>cm(e,t,n)),l=[],u=new Map,d=$.navigationCell;for(let e=0;t.min.x+$.radius+e*d<=t.max.x-$.radius;e++)for(let n=0;t.min.z+$.radius+n*d<=t.max.z-$.radius;n++){let r=new K(t.min.x+$.radius+e*d,i,t.min.z+$.radius+n*d);c(r,r)&&(u.set(`${e},${n}`,l.length),l.push({p:r,edges:[]}))}for(let[e,t]of u){let[n,r]=e.split(`,`).map(Number);for(let e=-1;e<=1;e++)for(let i=-1;i<=1;i++){if(!e&&!i)continue;let a=u.get(`${n+e},${r+i}`);a!==void 0&&c(l[t].p,l[a].p)&&l[t].edges.push(a)}}function f(e){if(c(o,e))return[e.clone().setY(i)];let t=l.map(()=>1/0),n=l.map(()=>-1),r=new Uint8Array(l.length),a=[],s=(e,t)=>{let n={id:e,cost:t},r=a.length;for(a.push(n);r>0;){let e=r-1>>1;if(a[e].cost<=t)break;a[r]=a[e],r=e}a[r]=n},u=()=>{let e=a[0],t=a.pop();if(a.length){let e=0;for(;e*2+1<a.length;){let n=e*2+1;if(n+1<a.length&&a[n+1].cost<a[n].cost&&n++,t.cost<=a[n].cost)break;a[e]=a[n],e=n}a[e]=t}return e};l.forEach((e,n)=>{c(o,e.p)&&(t[n]=am(o,e.p),s(n,t[n]))});let f=-1,p=1/0;for(;a.length;){let{id:i,cost:a}=u();if(r[i])continue;r[i]=1;let o=am(l[i].p,e);if(o<p&&(p=o,f=i),o<d*.5)break;for(let e of l[i].edges){let r=a+am(l[i].p,l[e].p);r<t[e]&&(t[e]=r,n[e]=i,s(e,r))}}let m=[];for(;f>=0;)m.unshift(l[f].p.clone()),f=n[f];return m}let p=e.patrolPoints.map(e=>e.clone().setY(i)).filter(e=>c(e,e));p.length||p.push(...l.filter((e,t)=>t%15==0).map(e=>e.p.clone()));let m=[];function h(){if(!m.length){m=p.map(e=>e.clone());for(let e=m.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[m[e],m[t]]=[m[t],m[e]]}m.length>1&&am(m[m.length-1],o)<.5&&m.reverse()}return m.pop()??o.clone()}let g=`patrol`,_=0,v=0,y=0,b=0,x=!1,S=null,C=0,w=100,T=0,E=1.4,D=0,O=h(),k=[],A=0,j=0,M=`none`,N=0,P=`none`,ee=`foot`,F=null,te=!1,I=!1,ne=!1,re=0,ie=0,ae=!1,L=0,R=!0,oe=!1,se=[],ce=1,le=0,ue=.7,de=!1,fe=0,pe=(e,t)=>{se.push({type:e,x:t.x,z:t.z})},me=$.maxTurnRate*$.calmTurnFactor;function he(e){g!==e&&(e===`chase`&&(ne=!0,pe(`detected`,o)),g===`chase`&&e===`investigate`&&pe(`lost`,S??o),g=e,C=0,k=[],A=0,j=0,E=0,D=0,e===`patrol`&&(O=h(),S=null),e===`search`&&(O=o.clone(),E=$.searchPause))}let ge=new K,_e=new K;function z(e){return ge.set(o.x,i+$.eyeHeight,o.z),_e.copy(e),_e.y=Math.max(_e.y,i+$.spiderSightHeight),!r.some(e=>cm(ge,_e,e))}function ve(e,t,n=$.maxTurnRate){if(am(e,o)<1e-4)return 0;let r=om(Math.atan2(e.x-o.x,e.z-o.z)-_);return _=om(_+Ot.clamp(r,-n*t,n*t)),Math.abs(om(Math.atan2(e.x-o.x,e.z-o.z)-_))}function ye(e,t){re=e>re?Math.min(e,re+$.acceleration*t):Math.max(e,re-$.deceleration*t)}function be(e,t){return c(o,e)?(o.copy(e).setY(i),ie+=t,t>1e-5&&(j=0),!0):(re=0,!1)}function xe(e){ye(0,e);let t=re*e;t>0&&be(o.clone().add(new K(Math.sin(_)*t,0,Math.cos(_)*t)),t)}function Se(e,t,n,r={}){for(A-=n,(A<=0||!k.length)&&(k=f(e),A=$.repathSeconds);k.length>1&&c(o,k[1]);)k.shift();let i=k[k.length-1];if(!i||am(o,e)<=(r.stopAt??$.arrivalDistance)||k.length===1&&am(o,i)<=$.arrivalDistance)return xe(n),re<=$.stoppedSpeed;let a=k[0],s=ve(a,n,r.rate??$.maxTurnRate),l=om(Math.atan2(a.x-o.x,a.z-o.z)-_);y=Ot.clamp(l*.6,-$.headMaxYaw,$.headMaxYaw);let u=s>$.turnInPlaceAngle?0:t*(1-.6*s/$.turnInPlaceAngle);if(r.slowRadius){let e=am(o,i);u*=Ot.clamp(e/r.slowRadius,$.patrolMinApproachFactor,1)}ye(u,n);let d=Math.min(re*n,am(o,a));if(d>1e-6){let e=new K(a.x-o.x,0,a.z-o.z).normalize();be(o.clone().addScaledVector(e,d),d)||(k=[],A=0)}return!1}function Ce(){let e=S??o,t=l.filter(t=>am(t.p,e)<=$.searchRadius&&am(t.p,o)>.45);O=t.length?t[Math.floor(Math.random()*t.length)].p.clone():o.clone(),A=0}function we(e){D+=e,y=Math.sin(D*$.scanFrequency)*$.headMaxYaw}function Te(e){let t=om(Math.atan2(e.x-o.x,e.z-o.z)-_);y=Ot.clamp(t,-$.headMaxYaw,$.headMaxYaw)}function Ee(e,t){T+=e,C+=e,j+=e,L=Math.max(0,L-e),y=0;let n=_,r=am(o,t);!R&&L<=0&&r>$.catchRearmDistance&&(R=!0);let a=Math.atan2(t.x-o.x,t.z-o.z),s=Math.min(Math.abs(om(a-_)),Math.abs(om(a-_-v)));if(x=!de&&r<=$.sightRange&&s<=$.sightHalfAngle&&z(t),fe=Math.max(0,fe-e),!x&&le>.2&&r<1.1+le*2.3&&z(t)&&fe===0&&M===`none`&&g!==`chase`&&(S=t.clone(),fe=1.5,he(`investigate`)),x){w=0,S=t.clone();let n=r<$.closeDetectRange?1+$.closeDetectBoost*(1-r/$.closeDetectRange):1,a=Ot.smoothstep(ue,.08,1.3),o=Math.max(0,1-r/$.stillCloseRange),s=Math.max(t.y-i>.35?.45:$.stillVisibility,$.stillVisibility+(1-$.stillVisibility)*o),c=s+(1-s)*a;b=Math.min(1,b+e*$.detectionRise*ce*n*c*(.65+.35*(1-r/$.sightRange)))}else w+=e,w>$.detectionGrace&&(b=Math.max(0,b-e*$.detectionDecay));if(M!==`none`){Oe(e,t),B(e,n);return}let c=C>=$.stateMinSeconds;if(x&&L<=0&&g!==`chase`&&(b>=1||(g===`investigate`||g===`search`)&&b>=$.chaseReacquireThreshold)?he(`chase`):g===`patrol`&&c&&b>=$.suspicionThreshold&&he(`suspicious`),g===`chase`){let n=x&&R&&L<=0&&r<=$.attackStartRange;w>=$.chaseLostSeconds?he(`investigate`):n&&Math.abs(om(a-_))<=$.attackHalfAngle?De(t):S&&(n||am(o,S)<=$.chaseStopDistance)?(xe(e),ve(S,e),Te(S)):S&&(Se(S,$.chaseSpeed,e,{stopAt:$.chaseStopDistance}),Te(S))}else if(g===`suspicious`)xe(e),S&&(ve(S,e,me),Te(S)),C>=$.suspicionMinimum&&w>$.detectionGrace&&(b<=$.suspicionRelease?he(`patrol`):he(`investigate`));else if(g===`investigate`){let t=S?Se(S,$.investigateSpeed,e,{slowRadius:$.patrolSlowRadius}):(xe(e),!0);c&&(t&&C>.7||C>$.investigateSeconds)&&he(`search`)}else g===`search`?C>=$.searchSeconds?(b=0,he(`patrol`)):E>0?(xe(e),we(e),E-=e,E<=0&&Ce()):(Se(O,$.searchSpeed,e,{rate:me,slowRadius:$.patrolSlowRadius})||j>3)&&(E=$.searchPause,j=0,D=0):g===`patrol`&&(E>0?(xe(e),we(e),E-=e,E<=0&&(O=h(),j=0,A=0,k=[])):(Se(O,$.patrolSpeed,e,{rate:me,slowRadius:$.patrolSlowRadius})||j>$.patrolLegTimeout)&&(E=sm($.patrolPauseMin,$.patrolPauseMax),D=0));B(e,n)}function De(e){let t=Math.min($.attackReach,am(o,e)),n=new K(e.x-o.x,0,e.z-o.z);n.lengthSq()>1e-8?n.normalize():n.set(Math.sin(_),0,Math.cos(_)),F=o.clone().addScaledVector(n,t),F.y=e.y,ee=e.y-i>$.armStrikeHeight?`arm`:`foot`,M=`windup`,N=0,P=`none`,pe(`windup`,F)}function Oe(e,t){if(N+=e,M===`windup`&&N<$.attackTrackSeconds&&x){Se(t,$.chaseSpeed,e,{stopAt:$.chaseStopDistance});let n=new K(t.x-o.x,0,t.z-o.z),r=Math.min($.attackReach,n.length());n.lengthSq()>1e-8&&n.normalize(),F=o.clone().addScaledVector(n,r),F.y=t.y}else xe(e);if(M===`windup`)F&&(ve(F,e),Te(F)),N>=$.attackWindup&&(M=`strike`,N=0,pe(`strike`,F??o));else if(M===`strike`){if(F&&Te(F),N>=$.attackStrike){let e=F??o,n=!de&&R&&L<=0&&Math.hypot(t.x-e.x,t.z-e.z)<=$.attackHitRadius&&Math.abs(t.y-e.y)<=(ee===`foot`?.28:.4)&&am(o,t)<=$.attackReach+$.attackHitRadius&&Math.abs(om(Math.atan2(t.x-o.x,t.z-o.z)-_))<=$.attackHalfAngle&&z(t);M=`recover`,N=0,n?(P=`hit`,te=!0,R=!1,L=$.caughtProtection,pe(`hit`,t),b=0,S=null,he(`patrol`),E=$.patrolPauseMax):(P=`miss`,pe(`miss`,e))}}else M===`recover`&&N>=$.attackRecover&&(M=`none`,N=0,P=`none`,F=null)}function B(e,t){let n=$.headTurnRate*e;v=Ot.clamp(v+Ot.clamp(y-v,-n,n),-$.headMaxYaw,$.headMaxYaw),ae=Math.abs(om(_-t))/e>$.turningRate,ie>=$.footstepDistance&&(ie%=$.footstepDistance,I=!0,pe(`footstep`,o))}function ke(){let e=M===`windup`?$.attackWindup:M===`strike`?$.attackStrike:$.attackRecover,t=M===`none`?0:Math.min(1,N/e);return{position:o.clone(),yaw:_,state:g,detection:b,visible:x,lastKnownPosition:S?.clone()??null,speed:re,attackPhase:M,attackProgress:t,caught:te,footstep:I,alert:ne,motion:{speed:re,yaw:_,headYaw:v,turning:ae,stopped:re<=$.stoppedSpeed},attack:{phase:M,progress:t,limb:ee,target:F&&M!==`none`?{x:F.x,y:F.y,z:F.z}:null,result:P},events:se.map(e=>({...e}))}}return{update(e,t,n={}){if(ce=Ot.clamp(n.detectionMultiplier??1,.3,2),le=Ot.clamp(n.noise??0,0,1),ue=Number.isFinite(n.speed)?Math.max(0,n.speed):.7,de=n.hidden===!0,te=!1,I=!1,ne=!1,se=[],!oe&&Number.isFinite(e)&&t.toArray().every(Number.isFinite)){let n=Math.max(0,Math.min($.maxUpdateSeconds,e));for(;n>1e-8;){let e=Math.min($.maxStepSeconds,n);if(Ee(e,t),n-=e,te)break}}return ke()},dispose(){oe=!0,k=[],m=[]}}}function um(e,t){let n=t>=3,r=hd.find(e=>e.id===`office`),i=e.bounds.clone();i.max.x=Math.min(i.max.x,t===1?4:t>=r.unlock?r.maxX:7),i.min.z=Math.max(i.min.z,-6.2),t<4&&(i.max.z=Math.min(i.max.z,7.2));let a=e.bounds.clone();a.min.x=7,a.max.z=Math.min(a.max.z,7.2),t<5&&(a.min.z=Math.max(a.min.z,-6.2));let o=[{id:`resident-kitchen`,label:`Кухня`,bounds:i,spawn:e.spawn.clone(),shirtColor:void 0},...n?[{id:`resident-living`,label:`Гостиная`,bounds:a,spawn:new K(11.8,e.spawn.y,1),shirtColor:10250321}]:[]],s=t>=r.unlock?[new er(new K(i.min.x,0,-6.2),new K(7-$.radius,2.6,7.2)),new er(new K(r.minX,0,r.minZ-$.radius),new K(r.maxX,2.6,r.maxZ))]:void 0,c=o.map((t,n)=>({...t,controller:lm({...e,bounds:t.bounds,spawn:t.spawn,navigationAreas:n===0?s:void 0,patrolPoints:e.patrolPoints.filter(e=>e.x>t.bounds.min.x&&e.x<t.bounds.max.x&&e.z>t.bounds.min.z&&e.z<t.bounds.max.z)})})),l=c.map(t=>({id:t.id,label:t.label,frame:t.controller.update(0,e.spawn,{hidden:!0,noise:0})}));return{definitions:o.map(e=>({id:e.id,label:e.label,shirtColor:e.shirtColor})),snapshot:()=>l,update(e,i,a={}){return l=c.map((o,s)=>{let c=t>=r.unlock&&i.x>=r.minX&&i.x<=r.maxX&&i.z>=r.minZ&&i.z<=r.maxZ,l=n&&(s===0?i.x>=7&&!c:i.x<7||c);return{id:o.id,label:o.label,frame:o.controller.update(e,i,{...a,hidden:a.hidden||l,noise:l?0:a.noise})}}),l},dispose(){c.forEach(e=>e.controller.dispose())}}}function dm(e,t){let n=({frame:e})=>(e.caught?1e3:e.attack.phase===`windup`||e.attack.phase===`strike`?800:e.state===`chase`?600:e.state===`suspicious`?300:e.state===`investigate`?200:e.state===`search`?150:0)+e.detection*100-Math.min(50,Math.hypot(e.position.x-t.x,e.position.z-t.z));return e.reduce((e,t)=>n(t)>n(e)?t:e)}function fm(e,t,n,r){let i=!1,a,o,s=[],c=[],l=[],u=new K,d=[],f=0,p,m=new Map,h=new Map,g=!1,_=new At,v=new At,y=new At,b=new At,x=new At,S=new At,C=new K,w=new K;return new Kf().loadAsync(`/spider-thief-night-shift/assets/night-shift/human-casual.glb`).then(g=>{if(g.scene.traverse(e=>{if(e instanceof J){d.push(e.geometry);for(let t of Array.isArray(e.material)?e.material:[e.material]){d.push(t);for(let e of Object.values(t))e instanceof Yt&&d.push(e)}e.castShadow=e.receiveShadow=!0}}),g.scene.traverse(e=>{if(e instanceof J)for(let t of Array.isArray(e.material)?e.material:[e.material])t instanceof Da&&(t.metalness=0,t.roughness=.85,t.name===`LightBrown`&&t.color.setHex(r??5402224),t.name===`Red_Dark`&&t.color.setHex(3616825))}),i){d.forEach(e=>e.dispose());return}a=g.scene,o=new ns(a);let _=g.animations.find(e=>e.name.endsWith(`|Idle`));_&&(o.clipAction(_).play(),o.setTime(0)),a.updateMatrixWorld(!0);let v=new er().setFromObject(a,!0),y=v.getSize(new K),b=e.name.includes(`resident-living`)?1.7:1.78,x=b/y.y;a.scale.setScalar(x),a.position.set(-(v.min.x+v.max.x)*x/2,-v.min.y*x,-(v.min.z+v.max.z)*x/2),f=a.position.y,e.add(a);let S=a.getObjectByName(`FootL`);if(S)for(let t of[`Walk`,`Run`]){let n=g.animations.find(e=>e.name.endsWith(`|`+t));if(!n)continue;o.stopAllAction();let r=o.clipAction(n).play(),i=[];for(let t=0;t<=120;t++)o.setTime(n.duration*t/120),e.updateMatrixWorld(!0),S.getWorldPosition(u),e.worldToLocal(u),i.push({y:u.y,z:u.z});let a=Math.min(...i.map(e=>e.y)),s=[];for(let e=1;e<i.length;e++){let t=(i[e-1].z-i[e].z)/(n.duration/120);i[e].y<a+.035&&i[e-1].y<a+.035&&t>.1&&s.push(t)}s.sort((e,t)=>e-t),h.set(t,s[Math.floor(s.length/2)]??(t===`Run`?2.1:1)),r.stop()}o.stopAllAction();for(let e of[`Idle`,`Walk`,`Run`]){let t=g.animations.find(t=>t.name.endsWith(`|`+e));t&&m.set(e,o.clipAction(t))}p=m.get(`Idle`),p?.reset().play(),o.setTime(0);let C=(e,t,n)=>{let r=a.getObjectByName(e);if(!r)return;let i=r.children.find(e=>e.position.lengthSq()>1e-8);s.push({bone:r,reference:t,axis:i?i.position.clone().normalize():new K(0,1,0),referenceAxis:n,restWorld:new At,restLocal:r.quaternion.clone()})};C(`Chest`,n.body,new K(0,1,0));for(let[t,r]of[`Left`,`Right`].entries()){let r=t===0?`L`:`R`;C(`UpperLeg`+r,n.legs[t].upper,new K(0,-1,0)),C(`LowerLeg`+r,n.legs[t].lower,new K(0,-1,0));let i=a.getObjectByName(`Foot`+r);if(i&&n.legs[t].foot){e.updateMatrixWorld(!0);let r=i.getWorldQuaternion(new At).premultiply(e.getWorldQuaternion(new At).invert());c.push({bone:i,reference:n.legs[t].foot,rest:r})}C(`UpperArm`+r,n.arms[t].upper,new K(0,-1,0)),C(`LowerArm`+r,n.arms[t].lower,new K(0,-1,0))}C(`Head`,n.head,new K(0,1,0)),a.traverse(e=>{if(e instanceof _i){let t=[],n=e.geometry.attributes.skinIndex,r=e.geometry.attributes.skinWeight;for(let i=0;i<n.count;i++)for(let a=0;a<4;a++)if(r.getComponent(i,a)>.8&&/^Foot[LR]/.test(e.skeleton.bones[n.getComponent(i,a)].name)){t.push(i);break}l.push({mesh:e,indices:t})}}),t.visible=!1,e.userData.rigLoaded=!0,e.userData.humanModel=`quaternius-casual`,e.userData.authoredSpeeds=Object.fromEntries(h),e.userData.humanHeight=b}).catch(e=>console.error(`Human rig load failed`,e)),{update(t=!0,n,r=0){if(!a||!o)return;a.position.y=f;let i=!!n&&n.attack.phase!==`none`;if(n&&!i){let t=n.motion.stopped||n.motion.speed<.03?`Idle`:n.state===`chase`?`Run`:`Walk`,i=m.get(t);i&&(i!==p||g)&&(i.reset().setEffectiveWeight(1).fadeIn(.14).play(),p&&p!==i&&p.fadeOut(.14),p=i),p?.setEffectiveTimeScale(t===`Idle`?1:n.motion.speed/(h.get(t)??1)),o.update(Math.max(0,r)),e.updateMatrixWorld(!0);let s=a.getObjectByName(`Head`);s&&s.rotateY(n.motion.headYaw*.65),e.userData.humanAnimation=t}else{g||(o.stopAllAction(),p=m.get(`Idle`),p?.reset().play());for(let e of s)e.bone.quaternion.copy(e.restLocal);o.setTime(0),e.updateMatrixWorld(!0),e.getWorldQuaternion(b).invert();for(let e of s)e.bone.getWorldQuaternion(e.restWorld);for(let{bone:e,reference:t,axis:n,referenceAxis:r,restWorld:i}of s){t.getWorldQuaternion(_),w.copy(r).applyQuaternion(_),x.copy(b).multiply(_),C.copy(n).applyQuaternion(i),y.setFromUnitVectors(C,w).multiply(i);let a=2*Math.atan2(x.y,x.w);S.setFromAxisAngle(w,a*r.y),y.premultiply(S),e.parent.getWorldQuaternion(v).invert(),e.quaternion.copy(v.multiply(y)),e.updateMatrixWorld(!0)}for(let{bone:e,reference:t,rest:n}of c)t.getWorldQuaternion(_).multiply(n),e.parent.getWorldQuaternion(v).invert(),e.quaternion.copy(v.multiply(_)),e.updateMatrixWorld(!0);for(let e=0;e<c.length;e++){let{bone:t,reference:n}=c[e];n.getWorldPosition(u),t.parent.worldToLocal(u),t.position.copy(u),t.updateMatrixWorld(!0)}e.userData.humanAnimation=n?.attack.phase??`Idle`}if(g=i,t){e.updateMatrixWorld(!0);let t=1/0;for(let{mesh:e,indices:n}of l){e.skeleton.update();for(let r of n)e.getVertexPosition(r,u),e.localToWorld(u),t=Math.min(t,u.y)}Number.isFinite(t)&&(a.position.y+=e.position.y+.003-t),a.updateMatrixWorld(!0)}},dispose(){i=!0,o?.stopAllAction(),a&&o?.uncacheRoot(a),a?.traverse(e=>{e instanceof _i&&e.skeleton.dispose()}),a?.removeFromParent(),new Set(d).forEach(e=>e.dispose())}}}var pm=(e,t,n)=>Math.max(t,Math.min(n,e)),mm=e=>e*e*(3-2*e);function hm(){let e=0,t=0,n=0;return{update(r,i,a){let o=pm(Number.isFinite(r)?r:0,0,.1),s=Math.max(0,Number.isFinite(i)?i:0),c=1-Math.exp(-o/.14);t+=(pm(s/.55,0,1)-t)*c,n+=(+!!a-n)*c;let l=.62,u=.42+.24*n,d=u/l;e=(e+s*o/d)%1;let f=Math.sin(e*Math.PI*2),p=.848-.033*t-.055*n*t;return{legs:[0,.5].map(r=>{let i=(e+r)%1,a=i<l,o=pm((i-l)/.38,0,1),s=(a?.5-i/l:mm(o)-.5)*u*t,c=.065+(a?0:Math.sin(Math.PI*o)**2*(.065+.06*n)*t)-p,d=pm(c*c+s*s,.02,.789**2),f=Math.acos(pm((d-.39**2-.4**2)/(.78*.4),-1,1)),m=Math.atan2(-s,-c)-Math.atan2(.4*Math.sin(f),.39+.4*Math.cos(f));return{hip:m,knee:f,ankle:-m-f,planted:a}}),hipHeight:p,activity:t,urgency:n,phase:e,bodyYaw:f*.055*t,bodyRoll:f*.018*t,arms:[0,.5].map(r=>{let i=Math.sin((e+r)*Math.PI*2);return{shoulder:i*(.24+.23*n)*t,elbow:-.18-.48*n*t-Math.max(0,-i)*.12*t}})}}}}function gm(e,t={}){let n=new An;n.name=t.id?`human-${t.id}`:`human`;let r=new Set,i=new Set,a=e=>{let t=new Da({color:e,roughness:.88});return i.add(t),t},o=a(13869958),s=a(t.shirtColor??5402224),c=a(2436924),l=a(2367785),u=a(3352866),d=a(1448221),f=new ha(1,14,10);r.add(f);let p=(e,t,n,r,i,a,o,s)=>{let c=new J(f,t);return c.position.set(n,r,i),c.scale.set(a,o,s),c.castShadow=c.receiveShadow=!0,e.add(c),c},m=(e,t,n,r=0)=>{let i=new An;return i.position.set(t,n,r),e.add(i),i},h=m(n,0,.89);p(h,c,0,0,0,.21,.17,.14);let g=m(h,0,.08);p(g,s,0,.27,0,.255,.33,.155);let _=a(11580838);for(let e of[-1,1]){let t=p(g,_,e*.045,.53,.1,.044,.07,.018);t.rotation.z=e*.35}for(let e of[.14,.25,.36,.47])p(g,l,0,e,.154,.009,.009,.006);p(g,s,-.13,.34,.14,.065,.068,.016),p(g,o,0,.59,0,.065,.085,.065);let v=m(g,0,.7);p(v,o,0,0,0,.115,.145,.105),p(v,u,0,.078,-.022,.118,.083,.098),p(v,o,0,-.009,.112,.027,.035,.043);for(let e of[-1,1])p(v,o,e*.116,-.008,0,.023,.044,.024),p(v,d,e*.043,.025,.094,.015,.011,.013),p(v,u,e*.044,.05,.093,.027,.008,.01);let y=p(v,u,0,-.078,.05,.089,.055,.066);y.scale.y=.045,p(v,o,0,-.052,.099,.037,.012,.013);let b=[-1,1].map(e=>{let t=m(g,e*.27,.44);p(t,s,0,-.13,0,.075,.18,.079);let n=m(t,0,-.29);p(n,o,0,-.12,0,.052,.15,.055);let r=p(n,o,0,-.27,.01,.057,.075,.036);return r.rotation.z=e*.1,{shoulder:t,elbow:n}}),x=[-1,1].map(e=>{let t=m(h,e*.12,-.03);p(t,c,0,-.19,0,.09,.23,.095);let n=m(t,0,-.39);p(n,c,0,-.18,0,.07,.22,.075);let r=m(n,0,-.4);return p(r,l,0,0,.058,.087,.062,.16),{hip:t,knee:n,foot:r}});e.add(n);let S=fm(n,h,{head:v,body:g,arms:b.map(e=>({upper:e.shoulder,lower:e.elbow})),legs:x.map(e=>({upper:e.hip,lower:e.knee,foot:e.foot}))},t.shirtColor),C=document.createElement(`aside`);C.className=`human-danger`,C.setAttribute(`aria-live`,`polite`),C.setAttribute(`aria-atomic`,`true`);let w=document.createElement(`div`);w.className=`human-danger__label`;let T=document.createElement(`span`);T.className=`human-danger__place`;let E=document.createElement(`span`);E.className=`human-danger__state`,w.append(T,E);let D=document.createElement(`div`);D.className=`human-danger__meter`,D.setAttribute(`aria-hidden`,`true`),C.append(w,D),t.indicator!==!1&&(document.querySelector(`.game-shell`)??document.body).append(C);let O=document.createElement(`div`);O.className=`danger-flash`,O.setAttribute(`aria-hidden`,`true`),C.parentElement?.append(O);let k=new Jr({color:16768941,transparent:!0,opacity:0,depthWrite:!1,side:2});i.add(k);let A=new ma(.16,.24,32);r.add(A);let j=new J(A,k);j.rotation.x=-Math.PI/2,j.visible=!1,e.add(j);let M=new K,N=new K,P=new K(0,-1,0),ee=new K,F=new At,te=!1,I=0,ne=hm(),re=0,ie=!1,ae=``,L=0,R=!1,oe=(e,t,r)=>{n.updateMatrixWorld(!0),e.getWorldPosition(N),ee.copy(t),e.parent.worldToLocal(ee),ee.sub(e.position).normalize(),F.setFromUnitVectors(P,ee),e.quaternion.slerp(F,r)};return{get modelLoaded(){return n.userData.rigLoaded===!0},async unlockAudio(){te||await Lu()},update(e,t,r,i){if(te)return;let a=Number.isFinite(t)?Ot.clamp(t,0,.1):0;I+=a,re=Math.max(0,re-a);let{motion:o,attack:s}=e,c=ne.update(a,o.stopped?0:o.speed,e.state===`chase`),l=c.activity;n.position.copy(e.position),n.rotation.y=o.yaw,h.position.set(0,c.hipHeight+.03+Math.sin(I*2.2)*.002*(1-l),0),h.rotation.set(0,-c.bodyYaw*.35,-c.bodyRoll*.4),v.rotation.set(e.state===`patrol`?.08:.28,o.headYaw*.75,0),g.rotation.set(l*(.045+c.urgency*.085),o.headYaw*.25+c.bodyYaw,c.bodyRoll),b.forEach(({shoulder:e,elbow:t},n)=>{e.rotation.set(c.arms[n].shoulder,0,(n?-1:1)*(.06+.025*c.urgency)),t.rotation.set(c.arms[n].elbow,0,0)}),x.forEach(({hip:e,knee:t},n)=>{e.rotation.set(c.legs[n].hip,0,0),t.rotation.set(c.legs[n].knee,0,0)});let u=Ot.clamp(s.progress,0,1);if(s.phase!==`none`&&s.target){x.forEach(({hip:e,knee:t})=>{e.rotation.set(-.12,0,0),t.rotation.set(.24,0,0)});let t=s.phase===`windup`,n=1-(s.phase===`recover`?Ot.smoothstep(u,.18,1):0),r=t?0:s.phase===`strike`?u*u:1,i=t?Ot.smoothstep(u,0,.8):1-r;M.set(s.target.x,s.target.y??.065,s.target.z);let a=s.target.x-e.position.x,c=s.target.z-e.position.z,l=Math.atan2(Math.sin(Math.atan2(a,c)-o.yaw),Math.cos(Math.atan2(a,c)-o.yaw));g.rotation.y=l*n,g.rotation.x=(.16+r*(s.limb===`arm`?1:.22))*n,h.position.y-=(s.limb===`arm`?.3:.06)*r*n,b[0].shoulder.rotation.set(-.55*n,0,.4*n),s.limb===`arm`?(b[1].shoulder.rotation.set(-2.75*i*n,0,-.18*n),b[1].elbow.rotation.x=-.65*i*n,oe(b[1].shoulder,M,r*n)):(x[0].hip.rotation.set(-1.25*i*n,0,0),x[0].knee.rotation.x=1.65*i*n,oe(x[0].hip,M,r*n))}for(let t of e.events)switch(t.type){case`footstep`:zu(r?Math.hypot(t.x-r.x,t.z-r.z):0);break;case`detected`:break;case`windup`:Hu();break;case`strike`:Uu();break;case`hit`:case`miss`:ie=t.type===`hit`,ie?Wu():Gu(),re=.32,j.position.set(s.target?.x??t.x,.018,s.target?.z??t.z),k.color.setHex(ie?16742755:15259051)}let d=re/.32;j.visible=re>0,j.scale.setScalar(1+(1-d)*3),k.opacity=d*.8;let f=i?.frame??e;L=Math.max(0,L-a);let p=f.events.find(e=>e.type===`hit`||e.type===`miss`);if(p&&(L=.32,R=p.type===`hit`),O.className=`danger-flash${L>0?` danger-flash--${R?`hit`:`miss`}`:``}`,O.style.opacity=String(L/.32),re>0){let e=Math.sin(Math.PI*d);h.position.y-=.045*e,g.rotation.z+=.035*e}x.forEach(({hip:e,knee:t,foot:n},r)=>{n.rotation.x=-e.rotation.x-t.rotation.x}),S.update(!0,e,a);let m=f.attack,_=f.state===`chase`?`chase`:f.state===`search`||f.state===`investigate`?`search`:f.state===`suspicious`?`suspicious`:``;C.className=`human-danger${_?` human-danger--${_}`:``}${m.phase===`windup`||m.phase===`strike`?` danger-indicator--${m.phase}`:``}`;let y=m.phase===`recover`&&m.result===`hit`?`Пойман · возвращение в норку`:m.phase===`recover`&&m.result===`miss`?`Промах · уходи в укрытие`:m.phase===`windup`?`Уклоняйся!`:m.phase===`strike`?`Удар!`:f.state===`chase`?`Погоня · в укрытие`:f.state===`suspicious`?`Что-то заметил`:f.state===`investigate`?`Проверяет место`:f.state===`search`?`Ищет тебя`:`Патрулирует`,w=`${i?.label??``} · ${y}`;w!==ae&&(T.textContent=i?.label??``,T.hidden=!i,E.textContent=y,ae=w),D.style.setProperty(`--detection`,String(Ot.clamp(f.detection,0,1)))},dispose(){te||(te=!0,S.dispose(),n.removeFromParent(),j.removeFromParent(),C.remove(),O.remove(),r.forEach(e=>e.dispose()),i.forEach(e=>e.dispose()))}}}var _m=new Kf,vm=new Map,ym=new Set,bm=0;function xm(e){let t=new Set,n=new Set,r=new Set,i=new Set;for(let a of e)a.traverse(e=>{if(e instanceof _i&&i.add(e.skeleton),e instanceof J||e instanceof Wi||e instanceof ta){t.add(e.geometry);for(let t of Array.isArray(e.material)?e.material:[e.material]){n.add(t);for(let e of Object.values(t))e instanceof Yt&&r.add(e)}}});i.forEach(e=>e.dispose()),t.forEach(e=>e.dispose()),n.forEach(e=>e.dispose());let a=new Set;r.forEach(e=>{e.dispose();let t=e.source.data;for(let e of Array.isArray(t)?t:[t])typeof ImageBitmap<`u`&&e instanceof ImageBitmap&&a.add(e)}),a.forEach(e=>e.close())}function Sm(e){if(!e.id||!e.url||!Number.isFinite(e.rotationY)||e.position.length!==3||e.size.length!==3||!e.position.every(Number.isFinite)||!e.size.every(e=>Number.isFinite(e)&&e>0))throw Error(`Invalid apartment model placement: ${e.id} (${e.url})`)}async function Cm(e){Sm(e);let t=bm,n=vm.get(e.url);n||(n=_m.loadAsync(e.url).then(e=>{let n={root:e.scene,scenes:e.scenes};if(t!==bm)throw xm(n.scenes),Error(`Scene disposed while GLB was loading`);return n}).catch(t=>{throw vm.get(e.url)===n&&vm.delete(e.url),Error(`Apartment model load failed: ${e.url}: ${t instanceof Error?t.message:String(t)}`,{cause:t})}),vm.set(e.url,n));try{let r=await n;if(t!==bm)throw Error(`Scene disposed before placement`);let i=Wf(r.root);i.traverse(e=>{e instanceof _i&&(e.skeleton.boneInverses=e.skeleton.boneInverses.map(e=>e.clone()))});let a=new er().setFromObject(i,!0),o=a.getSize(new K);if(a.isEmpty()||![o.x,o.y,o.z].every(e=>Number.isFinite(e)&&e>1e-9))throw Error(`GLB has empty, non-finite or degenerate XYZ bounds`);let s=new An;s.add(i),s.scale.set(e.size[0]/o.x,e.size[1]/o.y,e.size[2]/o.z),s.updateMatrixWorld(!0);let c=new er().setFromObject(s,!0);s.position.set(-(c.min.x+c.max.x)/2,-c.min.y,-(c.min.z+c.max.z)/2);let l=new An;return l.name=e.id,l.position.set(...e.position),l.rotation.y=e.rotationY,l.add(s),l.updateMatrixWorld(!0),ym.add(l),l}catch(t){throw Error(`Apartment model placement failed: ${e.id} (${e.url}): ${t instanceof Error?t.message:String(t)}`,{cause:t})}}function wm(){bm++;let e=[...vm.values()];vm.clear();for(let e of ym)e.removeFromParent(),e.traverse(e=>{e instanceof _i&&e.skeleton.dispose()}),e.clear();ym.clear();for(let t of e)t.then(e=>xm(e.scenes),()=>{})}var Tm=1.4,Em=.8,Dm=.075,Om=.05,km={KeyW:`f`,ArrowUp:`f`,KeyS:`b`,ArrowDown:`b`,KeyA:`l`,ArrowLeft:`l`,KeyD:`r`,ArrowRight:`r`};function Am(e,t,n={}){let r=new Set,i=new Set,a=!1,o=Qu(),s=[],c=document.createElement(`div`);c.className=`game-shell`,e.appendChild(c);let l=new Su({antialias:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.shadowMap.enabled=!0,l.shadowMap.type=2,l.outputColorSpace=Re,l.toneMapping=4;function u(e){o=e,Iu(e.volume),Fu(e.musicEnabled),Pu(e.musicVolume);let t=e.quality===`low`?1:e.quality===`medium`?1.5:2;l.setPixelRatio(Math.min(window.devicePixelRatio,t)),l.shadowMap.enabled=e.quality!==`low`,c.dataset.hints=String(e.showHints),c.dataset.quality=e.quality,document.documentElement.dataset.uiMotion=e.reducedMotion?`off`:`on`}u(o);let d=l.domElement;d.className=`game-canvas`,d.dataset.testid=`game-canvas`,d.tabIndex=0,d.setAttribute(`aria-label`,`Игровая сцена: кухня`),c.appendChild(d);let f=Vf(c),p=zf(c),m=window.matchMedia(`(prefers-reduced-motion: reduce)`),h=new qu,g=new zn;g.background=new q(922144),g.fog=new Rn(922144,6,14);let _=new Eo(55,1,.05,50);g.add(new mo(10859216,5260088,1.15));let v=new No(11846911,1.1);v.position.set(3,5,4),v.castShadow=!0,v.shadow.mapSize.set(1024,1024);let y=v.shadow.camera;y.left=-5,y.right=5,y.top=5,y.bottom=-5,y.near=.5,y.far=15,v.shadow.bias=-.001,v.shadow.normalBias=.04,g.add(v);let b=new Ao(16760954,9,0,2);b.position.set(.6,2.3,.7),g.add(b);let x=nm(r,i);g.add(x.group);let S=im(r,i);S.root.position.set(x.spiderStart.x,0,x.spiderStart.z),g.add(S.root);let C=Ef(),w=C.snapshot(),T=dd(w.level);x.setMission(T.id);let E=[];for(let e of Xp){let t={id:e.id,url:e.url,status:`loading`};s.push(t),E.push(Cm(e).then(n=>{if(a){n.removeFromParent();return}n.traverse(e=>{e instanceof J&&(e.receiveShadow=!0,e.castShadow=!0)});let r=qd.blockers.find(t=>t.id===e.id)?.unlockMission??null;r!==null&&(n.userData.unlockMission=r,n.visible=T.id<r),x.group.add(n),x.group.traverse(t=>{t.userData.modelPlacementId===e.id&&(t.visible=!1,t.userData.modelLoaded=!0)}),t.status=`loaded`}).catch(n=>{a||(t.status=`error`,t.error=String(n),console.error(`Apartment model ${e.id} (${e.url}) failed:`,n))}))}let D=tf(T.id,{balance:w.balance,deliveredIds:w.deliveredIds,jumpUnlocked:Sf(w,`jump`)>0,lootSpawns:w.lootSpawns,placementSeed:w.placementSeed}),O=D.map(e=>td(r,i,e));O[0];for(let e of O)w.deliveredIds.includes(e.id)?(e.state=`delivered`,Ee(e,w.deliveredIds.indexOf(e.id))):(g.add(e.mesh),Se(e));S.root.position.set(x.lair.x+.25,0,x.lair.z);let k=um(x.humanWorld,T.id),A=k.definitions.map((e,t)=>gm(g,{id:e.id,indicator:t===0,shirtColor:e.shirtColor})),j=new K;j.copy(S.root.position).y=.16;let M=k.update(0,j),N=dm(M,j),P=N.frame;A.forEach((e,t)=>e.update(M[t].frame,0,S.root.position,N));let ee=0,F=!1,te=0,I=-1,ne=document.body,re=document.hasFocus()&&!document.hidden,ie=nd(O,r),ae=w.balance,L=!1,R=n.startInMenu??!1,oe=!1,se=uf(),ce={position:{...S.root.position},velocity:{x:0,y:0,z:0},radius:Dm,height:.14,grounded:!0,supportId:`floor`},le=!1,ue={x:S.root.position.x,y:0,z:S.root.position.z},de=[...Ld.map(e=>({id:`floor`,min:{x:e.minX,y:-1,z:e.minZ},max:{x:e.maxX,y:0,z:e.maxZ},walkable:!0})),...x.humanWorld.obstacles.map(e=>({id:e.id,min:e.bounds.min,max:e.bounds.max,walkable:Bd(e.id)}))];function fe(){let e=z?.weight??0;return lf(z?e<=1?`light`:e<2?`medium`:`heavy`:`none`,Sf(w,`strongLegs`))}let pe=document.createElement(`button`);pe.type=`button`,pe.dataset.testid=`next-level`,pe.className=`night-next`,pe.hidden=!w.completed,pe.textContent=T.id<ud.length?`Следующая ночь →`:`Все пять ночей пройдены`,pe.disabled=T.id>=ud.length,pe.addEventListener(`click`,()=>{C.nextLevel?.()&&(t?t(T.id+1):(Qe.dispose(),Am(e)))}),f.root.querySelector(`[data-testid="mission-complete"]`).append(pe);let me=()=>S.root.position.y<.2&&Math.hypot(S.root.position.x-x.lair.x,S.root.position.z-x.lair.z)<=.65;function he(){w=C.snapshot(),ae=w.balance,w.completed&&je(),pe.hidden=!w.completed||L,f.setBalance(ae),f.setMission(w),f.setShopAvailable(me()&&!z&&I<0),f.setShop(L,w),f.setStamina({sprintUnlocked:Sf(w,`sprint`)>0,stamina:se.stamina,sprinting:!1,exhausted:se.exhausted})}function ge(){R||(!L&&(!me()||z||I>=0)?f.showNotice(`Магазин у логова: сначала доставь груз`):(L=!L,Me(),xe.clear(),oe=!1,he(),!L&&!w.completed&&d.focus({preventScroll:!0})))}function _e(e){!L||!me()||z||I>=0||(C.buy(e)?(he(),f.showNotice(`Улучшение куплено!`),h.playBlip(740)):f.showNotice(`Уже куплено или недостаточно крошек`))}let z=null,ve=Math.PI/2;S.root.rotation.y=ve;let ye=-Math.PI/2,be=.55,xe=new Set;function Se(e){e.mesh.rotation.set(0,e.mesh.rotation.y,0),e.mesh.scale.setScalar(1),e.mesh.position.set(e.pos.x,0,e.pos.z),e.mesh.updateMatrixWorld(!0);let t=Af(e.mesh);e.mesh.position.y+=(e.surfaceY??0)-t.min.y,e.mesh.updateMatrixWorld(!0)}function Ce(){if(z)return null;let e=S.root.position,t=null,n=Em;for(let r of O){if(r.state!==`world`)continue;let i=Math.hypot(r.pos.x-e.x,r.pos.z-e.z);if(i>n||Math.abs(e.y-(r.surfaceY??0))>.22)continue;let a=new K(e.x,e.y+.075,e.z),o=new K(r.pos.x,(r.surfaceY??0)+.09,r.pos.z).sub(a),s=o.length(),c=new qr(a,o.normalize()),l=new K;x.humanWorld.obstacles.some(e=>c.intersectBox(e.bounds,l)&&l.distanceTo(a)<s-.02)||(t=r,n=i)}return t}function we(){let e=Ce();e&&(e.state=`carried`,z=e,S.pickup(),S.backSocket.add(e.mesh),e.mesh.position.set(0,.02,0),e.mesh.rotation.set(0,Math.PI/2,.15),e.mesh.scale.setScalar(.9),f.setCargo(e.name),f.showFeedback(`${e.name}: ${e.value} крошек · вес ${e.weight??0}`,`success`),h.playBlip(520))}function Te(){let e=z;if(!e||e.state!==`carried`)return;S.root.position;let t=ue;e.surfaceY=t.y,t?(e.state=`world`,e.pos={x:t.x,z:t.z},z=null,g.add(e.mesh),Se(e),f.setCargo(null),h.playBlip(330)):f.showNotice(`Здесь некуда положить груз`)}function Ee(e,t){g.add(e.mesh),jf(e,t)}function De(e){e.state===`carried`&&C.deliver(e.id)&&(e.state=`delivered`,z=null,Ee(e,C.snapshot().deliveredIds.length-1),he(),f.setCargo(null),f.showNotice(`+${e.value} крошек: ${e.name} в логове!`),h.playReward())}function Oe(){let e=z;if(z=null,e?.state===`carried`){e.state=`world`;let t=D.find(t=>t.id===e.id).position;e.pos={x:t.x,z:t.z},e.surfaceY=t.y-.09,g.add(e.mesh),Se(e)}ee++,ce.velocity.y=0,le=!1,oe=!1,L=!1,he(),I=-1,te=3,xe.clear(),S.root.position.set(x.lair.x+.1,0,x.lair.z),ye=0,be=.55,f.setCargo(null),f.showNotice(e?`Пойман! Груз вернулся на прежнее место. Крошки сохранены.`:`Пойман! Ты снова в логове. Крошки сохранены.`),We(!0,0)}function B(){h.unlock(),A[0].unlockAudio().catch(()=>{})}let ke=e=>{if(B(),!re||document.hidden||I>=0)return;if(e.code===`Escape`&&!e.repeat){e.preventDefault(),R?Ge.escape():L?(L=!1,je(),he(),w.completed||d.focus({preventScroll:!0})):qe(`pause`);return}if(R||e.target instanceof HTMLElement&&e.target.closest(`button, input, textarea, select, [contenteditable="true"]`))return;if(e.code===`KeyB`&&!e.repeat){ge(),e.preventDefault();return}if(L||w.completed)return;if((e.code===`ShiftLeft`||e.code===`ShiftRight`)&&(oe=!0,se.releaseSeconds=0),e.code===`Space`){e.preventDefault(),!e.repeat&&kf(w,ce.grounded)&&(le=!0);return}let t=km[e.code];t?(xe.add(t),e.preventDefault()):e.repeat||(e.code===`KeyE`?z&&me()?De(z):we():e.code===`KeyG`&&Te())},Ae=e=>{(e.code===`ShiftLeft`||e.code===`ShiftRight`)&&(oe=!1);let t=km[e.code];t&&xe.delete(t)},je=()=>{oe=!1,le=!1,xe.clear(),Me()},V=!1;function Me(){V=!1,document.pointerLockElement===d&&document.exitPointerLock()}let H=()=>{re=!1,je()},U=()=>{re=!document.hidden},Ne=()=>{re=!document.hidden&&document.hasFocus(),re||je()},Pe=e=>{if(!(R||L||w.completed||I>=0||e.button!==0)&&(B(),re=!document.hidden,d.focus({preventScroll:!0}),document.pointerLockElement!==d)){V=!0;let e=d.requestPointerLock();e&&e.catch(()=>f.showNotice(`Захват мыши недоступен. Нажми на сцену ещё раз.`))}},Fe=e=>{R||L||w.completed||I>=0||document.pointerLockElement!==d||(ye-=e.movementX*.006*o.sensitivity,be=Ot.clamp(be+e.movementY*.005*o.sensitivity*(o.invertY?-1:1),.12,1.25))},Ie=()=>{document.pointerLockElement===d&&(!V||R||w.completed||L||!re||document.hidden||I>=0)?je():document.pointerLockElement!==d&&(V=!1,xe.clear(),oe=!1)},Le=e=>e.preventDefault();window.addEventListener(`keydown`,ke),window.addEventListener(`keyup`,Ae),window.addEventListener(`blur`,H),window.addEventListener(`focus`,U),document.addEventListener(`visibilitychange`,Ne),d.addEventListener(`pointerdown`,Pe),document.addEventListener(`mousemove`,Fe),document.addEventListener(`pointerlockchange`,Ie),d.addEventListener(`contextmenu`,Le);let ze=()=>{let e=Math.max(1,c.clientWidth||window.innerWidth),t=Math.max(1,c.clientHeight||window.innerHeight);l.setSize(e,t,!1),d.style.width=`100%`,d.style.height=`100%`,_.aspect=e/t,_.updateProjectionMatrix()};window.addEventListener(`resize`,ze);let Be=typeof ResizeObserver<`u`?new ResizeObserver(ze):null;Be?.observe(c),ze();let Ve=Ff(_,x.cameraBlockers,x.bounds,tm),He=e=>{R||L||w.completed||I>=0||(e.preventDefault(),Ve.zoom(e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?d.clientHeight:1)))};d.addEventListener(`wheel`,He,{passive:!1});let Ue=new K;function We(e,t){Ue.copy(S.root.position).y+=.12,Ve.update({target:Ue,yaw:ye,pitch:be,dt:t,snap:e,solids:x.humanWorld.obstacles.map(e=>e.bounds),humans:M.map(e=>({position:e.frame.position,radius:$.radius,height:$.height}))})}let Ge=Hf(c,{settingsChanged:u,restart(){return C.restart()?(je(),n.onRestart?n.onRestart():(Qe.dispose(),Am(e,t,{...n,startInMenu:!0})),!0):!1},resume(){R=!1,c.dataset.menuOpen=`false`,Ge.hide(),re=!document.hidden,je(),d.focus({preventScroll:!0}),B()},main(){qe(`main`)}}),Ke=document.createElement(`button`);Ke.type=`button`,Ke.className=`menu-toggle`,Ke.dataset.testid=`menu-toggle`,Ke.innerHTML=`<kbd>Esc</kbd> Пауза`,Ke.addEventListener(`click`,()=>qe(`pause`)),c.append(Ke);function qe(e){I>=0||(L=!1,je(),he(),C.save(),R=!0,c.dataset.menuOpen=`true`,Ge.show(e,w))}R&&qe(`main`),f.onShopToggle(ge),f.onBuy(_e),he(),We(!0,0);let Je=new kt,Ye=performance.now(),Xe=0,Ze=0;function W(e){if(a)return;Ze=requestAnimationFrame(W);let t=Math.min(Om,Math.max(0,(e-Ye)/1e3));if(Ye=e,R||!re||document.hidden||w.completed||L){h.updateThreat([],0,!1),We(!1,t),l.render(g,_);return}Xe+=t;let n=xe.has(`f`)!==xe.has(`b`)||xe.has(`l`)!==xe.has(`r`);se=df(se,{shiftHeld:oe,moving:n&&I<0,unlocked:Sf(w,`sprint`)>0,drainMultiplier:fe().sprintDrainMultiplier},t);let{stamina:r,sprinting:i}=se;f.setStamina({sprintUnlocked:Sf(w,`sprint`)>0,...se}),d.dataset.stamina=r.toFixed(2),te=Math.max(0,te-t);let o=+!!xe.has(`f`)-!!xe.has(`b`),s=+!!xe.has(`r`)-!!xe.has(`l`),c=-Math.sin(ye),u=-Math.cos(ye),v=-u,y=c;Je.set(c*o+v*s,u*o+y*s);let b=0;if((I>=0||L)&&Je.set(0,0),Je.lengthSq()>0){Je.normalize(),b=Tm*Of(w,0,i)*fe().speedMultiplier;let e=Math.atan2(Je.x,Je.y)-ve;e=Math.atan2(Math.sin(e),Math.cos(e)),ve+=e*(1-Math.exp(-14*t)),S.root.rotation.y=ve}if(I<0){let e=S.root.position;if(ce.position={x:e.x,y:e.y,z:e.z},ce=vf(ce,{x:Je.x*b,z:Je.y*b},le,(3.4+.25*(Sf(w,`jump`)-1))*Math.sqrt(fe().jumpHeightMultiplier),8,t,de),le=!1,b=Math.hypot(ce.position.x-e.x,ce.position.z-e.z)/Math.max(t,1e-6),e.copy(ce.position),ce.grounded){let t=de.every(t=>e.y>=t.max.y-1e-6||e.y+.18<=t.min.y||e.x+.2<=t.min.x||e.x-.2>=t.max.x||e.z+.2<=t.min.z||e.z-.2>=t.max.z),n=de.find(e=>e.id===ce.supportId);t&&n&&e.x-.18>=n.min.x&&e.x+.18<=n.max.x&&e.z-.18>=n.min.z&&e.z+.18<=n.max.z&&(ue={x:e.x,y:e.y,z:e.z})}}p.update(fe()),S.root.rotation.z=!m.matches&&fe().loadClass===`heavy`?Math.sin(Xe*9)*.035:0,S.animate(t,b,{grounded:ce.grounded,verticalSpeed:ce.velocity.y,heavy:fe().loadClass===`heavy`,sprinting:i}),j.copy(S.root.position).y+=.075,M=k.update(t,j,{speed:b,detectionMultiplier:T.humanTimeScale*(1-Sf(w,`stealth`)*.08),noise:b>.15?Math.min(1,b/Tm*(z?1.3:.65))*(1-Sf(w,`stealth`)*.08):0,hidden:te>0||I>=0}),N=dm(M,j),P=N.frame,h.updateThreat(M.map(e=>({id:e.id,state:e.frame.state})),t,I<0);let C=M.some(e=>e.frame.caught);C&&!F&&te<=0&&I<0&&(I=.42,xe.clear()),F=C,A.forEach((e,n)=>e.update(M[n].frame,t,S.root.position,N)),I>=0&&(I-=t,I<=0&&Oe()),ne.dataset.humanState=P.state,ne.dataset.humanAttack=P.attack.phase,ne.dataset.humanSeesSpider=P.visible?`true`:`false`,ne.dataset.humanResident=N.id,z&&I<0&&me()&&De(z),ie(S.root.position,Ce(),Xe);let E=!z&&!O.some(e=>e.state===`world`);if(f.setNoLoot(E),f.setShopAvailable(me()&&!z&&I<0),L)f.setPrompt(`B / Escape — закрыть магазин`);else if(z)f.setPrompt(me()?`${z.name} · E — сдать · G — бросить`:`Неси ${z.name} в логово · G — бросить`);else if(Ce()){let e=Ce();f.setPrompt(`E — ${e.name} · ${e.value} крошек`)}else me()?f.setPrompt(``):E?f.setPrompt(w.completed?`Миссия завершена!`:`Добыча потеряна. Перезагрузи кухню: доставленное и покупки сохранены.`):f.setPrompt(``);x.update(Xe),We(!1,t),l.render(g,_)}Ze=requestAnimationFrame(W);let G=window,Qe={ready:Promise.all(E).then(()=>{a||Ge.setReady()}),dispose(){if(a)return;a=!0,cancelAnimationFrame(Ze),window.removeEventListener(`keydown`,ke),window.removeEventListener(`keyup`,Ae),window.removeEventListener(`blur`,H),window.removeEventListener(`focus`,U),document.removeEventListener(`visibilitychange`,Ne),window.removeEventListener(`resize`,ze),d.removeEventListener(`pointerdown`,Pe),document.removeEventListener(`mousemove`,Fe),document.removeEventListener(`pointerlockchange`,Ie),Me(),d.removeEventListener(`contextmenu`,Le),d.removeEventListener(`wheel`,He),Be?.disconnect(),delete G.__spiderThief,xe.clear(),x.dispose(),S.dispose(),wm();let e=new Set;for(let t of r){for(let n of Object.values(t))n instanceof Yt&&e.add(n);t.dispose()}for(let t of e)t.dispose();for(let e of i)e.dispose();v.shadow.map?.dispose(),k.dispose(),A.forEach(e=>e.dispose()),h.dispose(),p.dispose(),f.dispose(),Ge.dispose(),l.dispose(),l.forceContextLoss(),c.remove()}};return Qe}function jm(e){let t=document.createElement(`div`);t.className=`night-transition`,t.dataset.testid=`night-transition`,t.hidden=!0,t.setAttribute(`role`,`status`),t.setAttribute(`aria-live`,`polite`);let n=document.createElement(`span`);n.className=`night-transition__emblem`,n.setAttribute(`aria-hidden`,`true`),n.textContent=`◈`;let r=document.createElement(`strong`),i=document.createElement(`span`);i.textContent=`КВАРТИРА ЗАСЫПАЕТ. МЫ ВЫХОДИМ.`,t.append(n,r,i),e.append(t);let a=!1,o=!1,s,c=e=>{a&&/^(Key[WASDEGB]|Arrow(Up|Down|Left|Right)|Shift(Left|Right)|Space|Escape)$/.test(e.code)&&(e.preventDefault(),e.stopImmediatePropagation())};window.addEventListener(`keydown`,c,!0);let l=async(e,n,r)=>{o||(s=t.animate([{opacity:e},{opacity:n}],{duration:r,fill:`forwards`,easing:`ease-in-out`}),await s.finished.catch(()=>{}))};return{get active(){return a},async run(e,n){if(a||o)return;a=!0,r.textContent=e,t.hidden=!1;let i=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||document.documentElement.dataset.uiMotion===`off`;try{if(await l(0,1,i?1:360),o||(await n(),await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(()=>e()))),o))return;await l(1,1,i?1:350)}finally{o||(await l(1,0,i?1:650),t.hidden=!0,s?.cancel()),a=!1}},dispose(){o=!0,window.removeEventListener(`keydown`,c,!0),s?.cancel(),t.remove()}}}var Mm=document.querySelector(`#app`);if(!Mm)throw Error(`Spider Thief: элемент #app не найден в index.html`);var Nm=jm(Mm),Pm=Am(Mm,Im,{startInMenu:!0,onRestart:Fm});function Fm(){Nm.run(`Новая вылазка`,async()=>{Pm.dispose(),Pm=Am(Mm,Im,{startInMenu:!0,onRestart:Fm}),await Pm.ready})}function Im(e){Nm.run(`Ночь ${String(e).padStart(2,`0`)}`,async()=>{Pm.dispose(),Pm=Am(Mm,Im,{startInMenu:!1,onRestart:Fm}),await Pm.ready})}