import{d as ge,c as q,a as pe,g as D,b as z,s as me,i as F,j as Me,e as xe,f as _e,r as ye,t as X,k as Ee}from"./web.Bo8llhca.js";import{A as Se}from"./ArrowCard.BzcFBr7G.js";function A(t){return Array.isArray?Array.isArray(t):oe(t)==="[object Array]"}const Ie=1/0;function be(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Ie?"-0":e}function $e(t){return t==null?"":be(t)}function $(t){return typeof t=="string"}function ie(t){return typeof t=="number"}function Ae(t){return t===!0||t===!1||we(t)&&oe(t)=="[object Boolean]"}function ce(t){return typeof t=="object"}function we(t){return ce(t)&&t!==null}function x(t){return t!=null}function B(t){return!t.trim().length}function oe(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const ke="Incorrect 'index' type",ve=t=>`Invalid value for key ${t}`,Le=t=>`Pattern length exceeds max of ${t}.`,Re=t=>`Missing ${t} property in key`,Ne=t=>`Property 'weight' in key '${t}' must be a positive integer`,ee=Object.prototype.hasOwnProperty;class Ce{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(r=>{let n=ae(r);this._keys.push(n),this._keyMap[n.id]=n,s+=n.weight}),this._keys.forEach(r=>{r.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ae(t){let e=null,s=null,r=null,n=1,i=null;if($(t)||A(t))r=t,e=te(t),s=H(t);else{if(!ee.call(t,"name"))throw new Error(Re("name"));const c=t.name;if(r=c,ee.call(t,"weight")&&(n=t.weight,n<=0))throw new Error(Ne(c));e=te(c),s=H(c),i=t.getFn}return{path:e,id:s,weight:n,src:r,getFn:i}}function te(t){return A(t)?t:t.split(".")}function H(t){return A(t)?t.join("."):t}function Oe(t,e){let s=[],r=!1;const n=(i,c,o)=>{if(x(i))if(!c[o])s.push(i);else{let a=c[o];const h=i[a];if(!x(h))return;if(o===c.length-1&&($(h)||ie(h)||Ae(h)))s.push($e(h));else if(A(h)){r=!0;for(let l=0,f=h.length;l<f;l+=1)n(h[l],c,o+1)}else c.length&&n(h,c,o+1)}};return n(t,$(e)?e.split("."):e,0),r?s:s[0]}const Fe={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Te={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Pe={location:0,threshold:.6,distance:100},je={useExtendedSearch:!1,getFn:Oe,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u={...Te,...Fe,...Pe,...je};const Ke=/[^ ]+/g;function We(t=1,e=3){const s=new Map,r=Math.pow(10,e);return{get(n){const i=n.match(Ke).length;if(s.has(i))return s.get(i);const c=1/Math.pow(i,.5*t),o=parseFloat(Math.round(c*r)/r);return s.set(i,o),o},clear(){s.clear()}}}class J{constructor({getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){this.norm=We(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,r)=>{this._keysMap[s.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,$(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();$(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,r=this.size();s<r;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!x(e)||B(e))return;let r={v:e,i:s,n:this.norm.get(e)};this.records.push(r)}_addObject(e,s){let r={i:s,$:{}};this.keys.forEach((n,i)=>{let c=n.getFn?n.getFn(e):this.getFn(e,n.path);if(x(c)){if(A(c)){let o=[];const a=[{nestedArrIndex:-1,value:c}];for(;a.length;){const{nestedArrIndex:h,value:l}=a.pop();if(x(l))if($(l)&&!B(l)){let f={v:l,i:h,n:this.norm.get(l)};o.push(f)}else A(l)&&l.forEach((f,d)=>{a.push({nestedArrIndex:d,value:f})})}r.$[i]=o}else if($(c)&&!B(c)){let o={v:c,n:this.norm.get(c)};r.$[i]=o}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function he(t,e,{getFn:s=u.getFn,fieldNormWeight:r=u.fieldNormWeight}={}){const n=new J({getFn:s,fieldNormWeight:r});return n.setKeys(t.map(ae)),n.setSources(e),n.create(),n}function De(t,{getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){const{keys:r,records:n}=t,i=new J({getFn:e,fieldNormWeight:s});return i.setKeys(r),i.setIndexRecords(n),i}function j(t,{errors:e=0,currentLocation:s=0,expectedLocation:r=0,distance:n=u.distance,ignoreLocation:i=u.ignoreLocation}={}){const c=e/t.length;if(i)return c;const o=Math.abs(r-s);return n?c+o/n:o?1:c}function ze(t=[],e=u.minMatchCharLength){let s=[],r=-1,n=-1,i=0;for(let c=t.length;i<c;i+=1){let o=t[i];o&&r===-1?r=i:!o&&r!==-1&&(n=i-1,n-r+1>=e&&s.push([r,n]),r=-1)}return t[i-1]&&i-r>=e&&s.push([r,i-1]),s}const v=32;function Be(t,e,s,{location:r=u.location,distance:n=u.distance,threshold:i=u.threshold,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,includeMatches:a=u.includeMatches,ignoreLocation:h=u.ignoreLocation}={}){if(e.length>v)throw new Error(Le(v));const l=e.length,f=t.length,d=Math.max(0,Math.min(r,f));let g=i,p=d;const m=o>1||a,_=m?Array(f):[];let y;for(;(y=t.indexOf(e,p))>-1;){let M=j(e,{currentLocation:y,expectedLocation:d,distance:n,ignoreLocation:h});if(g=Math.min(M,g),p=y+l,m){let I=0;for(;I<l;)_[y+I]=1,I+=1}}p=-1;let w=[],S=1,L=l+f;const W=1<<l-1;for(let M=0;M<l;M+=1){let I=0,b=L;for(;I<b;)j(e,{errors:M,currentLocation:d+b,expectedLocation:d,distance:n,ignoreLocation:h})<=g?I=b:L=b,b=Math.floor((L-I)/2+I);L=b;let T=Math.max(1,d-b+1),R=c?f:Math.min(d+b,f)+l,N=Array(R+2);N[R+1]=(1<<M)-1;for(let E=R;E>=T;E-=1){let P=E-1,Z=s[t.charAt(P)];if(m&&(_[P]=+!!Z),N[E]=(N[E+1]<<1|1)&Z,M&&(N[E]|=(w[E+1]|w[E])<<1|1|w[E+1]),N[E]&W&&(S=j(e,{errors:M,currentLocation:P,expectedLocation:d,distance:n,ignoreLocation:h}),S<=g)){if(g=S,p=P,p<=d)break;T=Math.max(1,2*d-p)}}if(j(e,{errors:M+1,currentLocation:d,expectedLocation:d,distance:n,ignoreLocation:h})>g)break;w=N}const O={isMatch:p>=0,score:Math.max(.001,S)};if(m){const M=ze(_,o);M.length?a&&(O.indices=M):O.isMatch=!1}return O}function He(t){let e={};for(let s=0,r=t.length;s<r;s+=1){const n=t.charAt(s);e[n]=(e[n]||0)|1<<r-s-1}return e}class le{constructor(e,{location:s=u.location,threshold:r=u.threshold,distance:n=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){if(this.options={location:s,threshold:r,distance:n,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:h},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(d,g)=>{this.chunks.push({pattern:d,alphabet:He(d),startIndex:g})},f=this.pattern.length;if(f>v){let d=0;const g=f%v,p=f-g;for(;d<p;)l(this.pattern.substr(d,v),d),d+=v;if(g){const m=f-v;l(this.pattern.substr(m),m)}}else l(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:r}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let p={isMatch:!0,score:0};return r&&(p.indices=[[0,e.length-1]]),p}const{location:n,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:a,ignoreLocation:h}=this.options;let l=[],f=0,d=!1;this.chunks.forEach(({pattern:p,alphabet:m,startIndex:_})=>{const{isMatch:y,score:w,indices:S}=Be(e,p,m,{location:n+_,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:a,includeMatches:r,ignoreLocation:h});y&&(d=!0),f+=w,y&&S&&(l=[...l,...S])});let g={isMatch:d,score:d?f/this.chunks.length:1};return d&&r&&(g.indices=l),g}}class k{constructor(e){this.pattern=e}static isMultiMatch(e){return se(e,this.multiRegex)}static isSingleMatch(e){return se(e,this.singleRegex)}search(){}}function se(t,e){const s=t.match(e);return s?s[1]:null}class Ve extends k{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Ye extends k{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Ge extends k{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Qe extends k{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Ue extends k{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Xe extends k{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class ue extends k{constructor(e,{location:s=u.location,threshold:r=u.threshold,distance:n=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){super(e),this._bitapSearch=new le(e,{location:s,threshold:r,distance:n,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class fe extends k{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,r;const n=[],i=this.pattern.length;for(;(r=e.indexOf(this.pattern,s))>-1;)s=r+i,n.push([r,s-1]);const c=!!n.length;return{isMatch:c,score:c?0:1,indices:n}}}const V=[Ve,fe,Ge,Qe,Xe,Ue,Ye,ue],re=V.length,Je=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Ze="|";function qe(t,e={}){return t.split(Ze).map(s=>{let r=s.trim().split(Je).filter(i=>i&&!!i.trim()),n=[];for(let i=0,c=r.length;i<c;i+=1){const o=r[i];let a=!1,h=-1;for(;!a&&++h<re;){const l=V[h];let f=l.isMultiMatch(o);f&&(n.push(new l(f,e)),a=!0)}if(!a)for(h=-1;++h<re;){const l=V[h];let f=l.isSingleMatch(o);if(f){n.push(new l(f,e));break}}}return n})}const et=new Set([ue.type,fe.type]);class tt{constructor(e,{isCaseSensitive:s=u.isCaseSensitive,includeMatches:r=u.includeMatches,minMatchCharLength:n=u.minMatchCharLength,ignoreLocation:i=u.ignoreLocation,findAllMatches:c=u.findAllMatches,location:o=u.location,threshold:a=u.threshold,distance:h=u.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:r,minMatchCharLength:n,findAllMatches:c,ignoreLocation:i,location:o,threshold:a,distance:h},this.pattern=s?e:e.toLowerCase(),this.query=qe(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:n}=this.options;e=n?e:e.toLowerCase();let i=0,c=[],o=0;for(let a=0,h=s.length;a<h;a+=1){const l=s[a];c.length=0,i=0;for(let f=0,d=l.length;f<d;f+=1){const g=l[f],{isMatch:p,indices:m,score:_}=g.search(e);if(p){if(i+=1,o+=_,r){const y=g.constructor.type;et.has(y)?c=[...c,...m]:c.push(m)}}else{o=0,i=0,c.length=0;break}}if(i){let f={isMatch:!0,score:o/i};return r&&(f.indices=c),f}}return{isMatch:!1,score:1}}}const Y=[];function st(...t){Y.push(...t)}function G(t,e){for(let s=0,r=Y.length;s<r;s+=1){let n=Y[s];if(n.condition(t,e))return new n(t,e)}return new le(t,e)}const K={AND:"$and",OR:"$or"},Q={PATH:"$path",PATTERN:"$val"},U=t=>!!(t[K.AND]||t[K.OR]),rt=t=>!!t[Q.PATH],nt=t=>!A(t)&&ce(t)&&!U(t),ne=t=>({[K.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function de(t,e,{auto:s=!0}={}){const r=n=>{let i=Object.keys(n);const c=rt(n);if(!c&&i.length>1&&!U(n))return r(ne(n));if(nt(n)){const a=c?n[Q.PATH]:i[0],h=c?n[Q.PATTERN]:n[a];if(!$(h))throw new Error(ve(a));const l={keyId:H(a),pattern:h};return s&&(l.searcher=G(h,e)),l}let o={children:[],operator:i[0]};return i.forEach(a=>{const h=n[a];A(h)&&h.forEach(l=>{o.children.push(r(l))})}),o};return U(t)||(t=ne(t)),r(t)}function it(t,{ignoreFieldNorm:e=u.ignoreFieldNorm}){t.forEach(s=>{let r=1;s.matches.forEach(({key:n,norm:i,score:c})=>{const o=n?n.weight:null;r*=Math.pow(c===0&&o?Number.EPSILON:c,(o||1)*(e?1:i))}),s.score=r})}function ct(t,e){const s=t.matches;e.matches=[],x(s)&&s.forEach(r=>{if(!x(r.indices)||!r.indices.length)return;const{indices:n,value:i}=r;let c={indices:n,value:i};r.key&&(c.key=r.key.src),r.idx>-1&&(c.refIndex=r.idx),e.matches.push(c)})}function ot(t,e){e.score=t.score}function at(t,e,{includeMatches:s=u.includeMatches,includeScore:r=u.includeScore}={}){const n=[];return s&&n.push(ct),r&&n.push(ot),t.map(i=>{const{idx:c}=i,o={item:e[c],refIndex:c};return n.length&&n.forEach(a=>{a(i,o)}),o})}class C{constructor(e,s={},r){this.options={...u,...s},this.options.useExtendedSearch,this._keyStore=new Ce(this.options.keys),this.setCollection(e,r)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof J))throw new Error(ke);this._myIndex=s||he(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){x(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let r=0,n=this._docs.length;r<n;r+=1){const i=this._docs[r];e(i,r)&&(this.removeAt(r),r-=1,n-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:r,includeScore:n,shouldSort:i,sortFn:c,ignoreFieldNorm:o}=this.options;let a=$(e)?$(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return it(a,{ignoreFieldNorm:o}),i&&a.sort(c),ie(s)&&s>-1&&(a=a.slice(0,s)),at(a,this._docs,{includeMatches:r,includeScore:n})}_searchStringList(e){const s=G(e,this.options),{records:r}=this._myIndex,n=[];return r.forEach(({v:i,i:c,n:o})=>{if(!x(i))return;const{isMatch:a,score:h,indices:l}=s.searchIn(i);a&&n.push({item:i,idx:c,matches:[{score:h,value:i,norm:o,indices:l}]})}),n}_searchLogical(e){const s=de(e,this.options),r=(o,a,h)=>{if(!o.children){const{keyId:f,searcher:d}=o,g=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(a,f),searcher:d});return g&&g.length?[{idx:h,item:a,matches:g}]:[]}const l=[];for(let f=0,d=o.children.length;f<d;f+=1){const g=o.children[f],p=r(g,a,h);if(p.length)l.push(...p);else if(o.operator===K.AND)return[]}return l},n=this._myIndex.records,i={},c=[];return n.forEach(({$:o,i:a})=>{if(x(o)){let h=r(s,o,a);h.length&&(i[a]||(i[a]={idx:a,item:o,matches:[]},c.push(i[a])),h.forEach(({matches:l})=>{i[a].matches.push(...l)}))}}),c}_searchObjectList(e){const s=G(e,this.options),{keys:r,records:n}=this._myIndex,i=[];return n.forEach(({$:c,i:o})=>{if(!x(c))return;let a=[];r.forEach((h,l)=>{a.push(...this._findMatches({key:h,value:c[l],searcher:s}))}),a.length&&i.push({idx:o,item:c,matches:a})}),i}_findMatches({key:e,value:s,searcher:r}){if(!x(s))return[];let n=[];if(A(s))s.forEach(({v:i,i:c,n:o})=>{if(!x(i))return;const{isMatch:a,score:h,indices:l}=r.searchIn(i);a&&n.push({score:h,key:e,value:i,idx:c,norm:o,indices:l})});else{const{v:i,n:c}=s,{isMatch:o,score:a,indices:h}=r.searchIn(i);o&&n.push({score:a,key:e,value:i,norm:c,indices:h})}return n}}C.version="7.0.0";C.createIndex=he;C.parseIndex=De;C.config=u;C.parseQuery=de;st(tt);var ht=X('<div class="flex flex-col"><div class=relative><input name=search type=text autocomplete=off placeholder="What are you looking for?"class="w-full px-2.5 py-1.5 pl-10 rounded outline-none text-black dark:text-white bg-black/5 dark:bg-white/15 border border-black/10 dark:border-white/20 focus:border-black focus:dark:border-white"><svg class="absolute size-6 left-1.5 top-1/2 -translate-y-1/2 stroke-current"><use href=/ui.svg#search></use></svg></div><!$><!/>'),lt=X('<div class=mt-12><div class="text-sm uppercase mb-2">Found <!$><!/> results for <!$><!/></div><ul class="flex flex-col gap-3">'),ut=X("<li>");function pt({data:t}){const[e,s]=q(""),[r,n]=q([]),i=new C(t,{keys:["slug","data.title","data.summary","data.tags"],includeMatches:!0,minMatchCharLength:2,threshold:.4});pe(()=>{e().length<2?n([]):n(i.search(e()).map(o=>o.item))});const c=o=>{const a=o.target;s(a.value)};return(()=>{var o=D(ht),a=o.firstChild,h=a.firstChild,l=h.nextSibling;l.firstChild;var f=a.nextSibling,[d,g]=z(f.nextSibling);return h.$$input=c,me(h,"spellcheck",!1),F(o,(()=>{var p=Me(()=>e().length>=2&&r().length>=1);return()=>p()&&(()=>{var m=D(lt),_=m.firstChild,y=_.firstChild,w=y.nextSibling,[S,L]=z(w.nextSibling),W=S.nextSibling,O=W.nextSibling,[M,I]=z(O.nextSibling),b=_.nextSibling;return F(_,()=>r().length,S,L),F(_,()=>`'${e()}'`,M,I),F(b,()=>r().map(T=>(()=>{var R=D(ut);return F(R,xe(Se,{entry:T,pill:!0})),R})())),m})()})(),d,g),_e(()=>Ee(h,"value",e())),ye(),o})()}ge(["input"]);export{pt as default};
