import{S as p,a as c,i as l}from"./assets/vendor-c493984e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();document.querySelector(".loader");let h=new p(".gallery a");const d=document.querySelector(".img-list");function g(o){const s=o.hits.map(t=>`<li class="list-el">
                <a href="${t.largeImageURL}"><img src='${t.webformatURL}' alt='${t.tags}'></a>
                <div class="content">
                    <div class="item"><h3>Likes</h3><p>${t.likes}</p></div>
                    <div class="item"><h3>Views</h3><p>${t.views}</p></div>
                    <div class="item"><h3>Comments</h3><p>${t.comments}</p></div>
                    <div class="item"><h3>Downloads</h3><p>${t.downloads}</p></div>
                </div>
            </li>`).join("");d.textContent="",d.insertAdjacentHTML("beforeend",s),a(),h.refresh()}async function y(o,s){c.defaults.baseURL="https://pixabay.com";const t={key:"44349742-ecc8a7b60aea5585f0c207813",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s};try{return(await c.get("/api/",{params:t})).data}catch(i){console.log(i)}}const m=document.querySelector(".form-el"),L=document.querySelector(".img-list"),f=document.querySelector(".loader");function v(){f.classList.remove("visually-hidden")}function a(){f.classList.add("visually-hidden")}let u=1;m.addEventListener("submit",async o=>{o.preventDefault();const s=m.elements[0].value.trim();if(v(),s){u++;const t=await y(s,u);try{if(t.hits.length===0)throw a(),L.innerHTML="",new Error("Error! Nothing to load");g(t)}catch{l.show({title:"Sorry",message:"there are no images matching your search query. Please try again!",color:"red"})}}else{a(),l.error({message:"Info Search input must be filled!"});return}});
//# sourceMappingURL=commonHelpers.js.map
