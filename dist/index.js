"use strict";var g=function(t,e){return function(){try{return e||t((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var x=g(function(Z,h){
var O=require('@stdlib/ndarray-base-assert-is-row-major/dist'),S=require('@stdlib/math-base-special-fast-max/dist'),T=require('@stdlib/math-base-special-fast-min/dist');function z(t,e,n,f,q,u,d,i,s,m,l){var v,o,r,a;if(v=d,o=l,O([q,u])){for(a=0;a<t;a++){for(r=S(0,a+n);r<e;r++)i[o+r*m]=f[v+r*u];v+=q,o+=s}return i}for(a=0;a<e;a++){for(r=0;r<=T(a-n,t-1);r++)i[o+r*s]=f[v+r*q];v+=u,o+=m}return i}h.exports=z
});var y=g(function($,p){
var C=require('@stdlib/blas-base-layout-resolve-str/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),w=require('@stdlib/math-base-special-fast-max/dist'),b=require('@stdlib/error-tools-fmtprodmsg/dist'),H=x();function I(t,e,n,f,q,u,d,i){var s,m,l,v,o,r,a;if(a=C(t),a===null)throw new TypeError(b('33pFx',t));if(s=G(a),s?r=n:r=e,u<w(1,r))throw new RangeError(b('33pJL',r,u));if(i<w(1,r))throw new RangeError(b('33pGM',r,i));return s?(m=u,l=1,v=i,o=1):(m=1,l=u,v=1,o=i),H(e,n,f,q,m,l,0,d,v,o,0)}p.exports=I
});var j=g(function(k,R){
var J=x();function K(t,e,n,f,q,u,d,i,s,m,l){return J(t,e,n,f,q,u,d,i,s,m,l)}R.exports=K
});var _=g(function(N,V){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=y(),P=j();M(E,"ndarray",P);V.exports=E
});var Q=require("path").join,U=require('@stdlib/utils-try-require/dist'),W=require('@stdlib/assert-is-error/dist'),X=_(),c,F=U(Q(__dirname,"./native.js"));W(F)?c=X:c=F;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
