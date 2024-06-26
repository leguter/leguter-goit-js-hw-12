import{S as $,a as u,i as m}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();document.querySelector(".loader");let f=new $(".gallery a");const h=document.querySelector(".img-list");function E(r){const t=r.hits.map(e=>`<li class="list-el">
                <a href="${e.largeImageURL}"><img src='${e.webformatURL}' alt='${e.tags}'></a>
                <div class="content">
                    <div class="item"><h3>Likes</h3><p>${e.likes}</p></div>
                    <div class="item"><h3>Views</h3><p>${e.views}</p></div>
                    <div class="item"><h3>Comments</h3><p>${e.comments}</p></div>
                    <div class="item"><h3>Downloads</h3><p>${e.downloads}</p></div>
                </div>
            </li>`).join("");h.textContent="",h.innerHTML=t,c(),f.refresh()}function S(r){const t=r.hits.map(e=>`<li class="list-el">
                <a href="${e.largeImageURL}"><img src='${e.webformatURL}' alt='${e.tags}'></a>
                <div class="content">
                    <div class="item"><h3>Likes</h3><p>${e.likes}</p></div>
                    <div class="item"><h3>Views</h3><p>${e.views}</p></div>
                    <div class="item"><h3>Comments</h3><p>${e.comments}</p></div>
                    <div class="item"><h3>Downloads</h3><p>${e.downloads}</p></div>
                </div>
            </li>`).join("");h.insertAdjacentHTML("beforeend",t),b(),c(),f.refresh()}async function g(r,t){u.defaults.baseURL="https://pixabay.com";const e={key:"44349742-ecc8a7b60aea5585f0c207813",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};try{return(await u.get("/api/",{params:e})).data}catch(o){console.log(o)}}const p=document.querySelector(".form-el"),y=document.querySelector(".img-list"),v=document.querySelector(".loader"),n=document.querySelector(".btn-load");function L(){v.classList.remove("visually-hidden")}function c(){v.classList.add("visually-hidden")}let a=1,l,w=1;const q=15;p.addEventListener("submit",async r=>{if(r.preventDefault(),a=1,l=p.elements[0].value.trim(),L(),l){n.classList.add("visually-hidden");const t=await g(l,a);w=Math.ceil(t.totalHits/q);try{if(t.hits.length===0)throw c(),y.innerHTML="",new Error("Error! Nothing to load");E(t),b()}catch{m.show({title:"Sorry",message:"there are no images matching your search query. Please try again!",color:"red"})}}else{c(),m.error({message:"Info Search input must be filled!"});return}});n.addEventListener("click",async()=>{n.classList.add("visually-hidden"),a++,L();try{const r=await g(l,a);S(r),I()}catch(r){console.log(r)}});function b(){a>=w?(m.show({message:"Were sorry, but you have reached the end of search results"}),n.classList.add("visually-hidden")):n.classList.remove("visually-hidden")}function I(){const t=y.children[0].getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
