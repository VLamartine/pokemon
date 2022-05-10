(function(){"use strict";var e={1249:function(e,n,o){var t=o(9242),a=o(3396),i=o(4870);const r=e=>((0,a.dD)("data-v-640d0a82"),e=e(),(0,a.Cn)(),e),u=r((()=>(0,a._)("h4",{class:"m-auto"}," Choose the pokemon generation pokedex(or national dex) ",-1))),l={class:"m-auto select-form"},s=(0,a.uE)('<option disabled value="" data-v-640d0a82>Choose pokedex</option><option value="1" data-v-640d0a82>National</option><option value="2" data-v-640d0a82>Gen 1 (Kanto)</option><option value="3" data-v-640d0a82>Gen 2 (Johto)</option><option value="4" data-v-640d0a82>Gen 3 (Hoenn)</option><option value="5" data-v-640d0a82>Gen 4 (Sinnoh)</option><option value="6" data-v-640d0a82>Gen 5 (Unova)</option><option value="7" data-v-640d0a82>Gen 6 (Kalos)</option><option value="8" data-v-640d0a82>Gen 7 (Alola)</option><option value="9" data-v-640d0a82>Gen 8 (Galar)</option>',10),c=[s];var d=(0,a.aZ)({emits:["selectGen"],setup(e){const n=(0,i.iH)(0);return(e,o)=>((0,a.wg)(),(0,a.iD)("div",null,[u,(0,a._)("div",l,[(0,a.wy)((0,a._)("select",{class:"select","onUpdate:modelValue":o[0]||(o[0]=e=>n.value=e)},c,512),[[t.bM,n.value]]),(0,a._)("button",{class:"confirm",onClick:o[1]||(o[1]=o=>e.$emit("selectGen",n.value))}," Select gen ")])]))}}),p=o(89);const v=(0,p.Z)(d,[["__scopeId","data-v-640d0a82"]]);var m=v,f=o(7139);const h={class:"game-header"},b=["disabled"],k={class:"list"},_={class:"pokemon"},g={class:"pokemon-number"},w={class:"pokemon-name"};var y=(0,a.aZ)({props:{pokemons:null},emits:["startGame"],setup(e,{emit:n}){const o=e,r=(0,i.iH)(""),u=(0,i.iH)(!1),l=()=>{u.value=!0,n("startGame")},s=()=>{o.pokemons.forEach((e=>{e.found||e.name.toLowerCase()===r.value.toLowerCase()&&(e.found=!0,r.value="")}))};return(n,o)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",h,[(0,a.wy)((0,a._)("input",{disabled:!u.value,class:"name-input","onUpdate:modelValue":o[0]||(o[0]=e=>r.value=e),placeholder:"Insert the name",onInput:s},null,40,b),[[t.nr,r.value]]),u.value?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("button",{key:0,class:"start-game",onClick:l}," Start game "))]),(0,a._)("div",k,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.pokemons,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.number},[(0,a._)("div",_,[(0,a._)("span",g,(0,f.zw)(e.number),1),(0,a._)("span",w,(0,f.zw)(e.found?e.name:""),1)])])))),128))])],64))}});const G=(0,p.Z)(y,[["__scopeId","data-v-0592d5a5"]]);var O=G,H=o(6209),j=(0,a.aZ)({setup(e){let n,o=(0,i.iH)(null),t=(0,i.iH)(!1),r=(0,i.iH)(0);const u={"nidoran-f":"nidoran","nidoran-m":"nidoran",farfetchd:"farfetch'd","mime-jr":"mime jr","mr-mime":"mr mime"};(0,a.bv)((()=>{n=new H.R}));const l=e=>{e!=r.value&&(t.value&&!confirm("Are you sure you want to change the generation? The game will be reset.")||(t.value=!1,r.value=e,n.getPokedexByName(e).then((e=>{o.value=e.pokemon_entries.map((e=>({number:e.entry_number,name:u[e.pokemon_species.name]?u[e.pokemon_species.name]:e.pokemon_species.name,found:!1})))}))))};return(e,n)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(m,{onSelectGen:l}),0!=(0,i.SU)(r)?((0,a.wg)(),(0,a.j4)(O,{key:0,onStartGame:n[0]||(n[0]=e=>(0,i.dq)(t)?t.value=!0:t=!0),pokemons:(0,i.SU)(o)},null,8,["pokemons"])):(0,a.kq)("",!0)],64))}});const C=(0,p.Z)(j,[["__scopeId","data-v-5fb9b3dd"]]);var x=C;(0,t.ri)(x).mount("#app")}},n={};function o(t){var a=n[t];if(void 0!==a)return a.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(n,t,a,i){if(!t){var r=1/0;for(c=0;c<e.length;c++){t=e[c][0],a=e[c][1],i=e[c][2];for(var u=!0,l=0;l<t.length;l++)(!1&i||r>=i)&&Object.keys(o.O).every((function(e){return o.O[e](t[l])}))?t.splice(l--,1):(u=!1,i<r&&(r=i));if(u){e.splice(c--,1);var s=a();void 0!==s&&(n=s)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[t,a,i]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,t){var a,i,r=t[0],u=t[1],l=t[2],s=0;if(r.some((function(n){return 0!==e[n]}))){for(a in u)o.o(u,a)&&(o.m[a]=u[a]);if(l)var c=l(o)}for(n&&n(t);s<r.length;s++)i=r[s],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},t=self["webpackChunkteste_composition"]=self["webpackChunkteste_composition"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(1249)}));t=o.O(t)})();
//# sourceMappingURL=app.ee4df0ab.js.map