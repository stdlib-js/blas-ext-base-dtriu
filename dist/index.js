"use strict";var d=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var x=d(function(Z,h){
var O=require('@stdlib/ndarray-base-assert-is-row-major/dist'),S=require('@stdlib/math-base-special-fast-max/dist'),T=require('@stdlib/math-base-special-fast-min/dist');function z(i,e,t,l,q,u,g,a,s,o,f){var n,v,r,m;if(n=g,v=f,O([q,u])){for(m=0;m<i;m++){for(r=S(0,m+t);r<e;r++)a[v+r*o]=l[n+r*u];n+=q,v+=s}return a}for(m=0;m<e;m++){for(r=0;r<=T(m-t,i-1);r++)a[v+r*s]=l[n+r*q];n+=u,v+=o}return a}h.exports=z
});var y=d(function($,p){
var C=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),w=require('@stdlib/math-base-special-fast-max/dist'),b=require('@stdlib/error-tools-fmtprodmsg/dist'),H=x();function I(i,e,t,l,q,u,g,a){var s,o,f,n,v,r;if(!C(i))throw new TypeError(b('33pFx',i));if(s=G(i),s?r=t:r=e,u<w(1,r))throw new RangeError(b('33pJL',r,u));if(a<w(1,r))throw new RangeError(b('33pGM',r,a));return s?(o=u,f=1,n=a,v=1):(o=1,f=u,n=1,v=a),H(e,t,l,q,o,f,0,g,n,v,0)}p.exports=I
});var j=d(function(k,R){
var J=x();function K(i,e,t,l,q,u,g,a,s,o,f){return J(i,e,t,l,q,u,g,a,s,o,f)}R.exports=K
});var _=d(function(N,V){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=y(),P=j();M(E,"ndarray",P);V.exports=E
});var Q=require("path").join,U=require('@stdlib/utils-try-require/dist'),W=require('@stdlib/assert-is-error/dist'),X=_(),c,F=U(Q(__dirname,"./native.js"));W(F)?c=X:c=F;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
