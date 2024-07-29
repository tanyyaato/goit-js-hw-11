import{i as p,S as f}from"./assets/vendor-dcc8fa28.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function h(r){const o="https://pixabay.com/api/",s="45156529-f4caada2c6812495035285f69",n=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}?${n.toString()}`,{headers:{Accept:"application/json"}}).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const d=document.querySelector(".js-form"),c=document.querySelector(".list"),a=document.querySelector(".js-loading-text");d.addEventListener("submit",m);function m(r){r.preventDefault();const o=r.currentTarget,s=o.elements.request.value.trim().toLowerCase();s!==""&&(a.textContent="Loading images, please wait...",h(s).then(n=>{if(n.hits.length===0)throw new Error(response.status);a.style.display="none",y(n.hits)}).catch(n=>{a.style.display="none",g()}).finally(o.reset()))}function y(r){c.innerHTML="";const o=r.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:i,comments:u,downloads:l})=>`<li class = "list-item">
  <a href="${n}">
    <div class = "preview-photo"><img src="${s}" alt="${e}"></div>
    <h2 >Likes</h2>
    <p>${t}</p>
    <h2>Views</h2>
    <p>${i}</p>
    <h2>Comments</h2>
    <p>${u}</p>
    <h2>Downloads</h2>
    <p>${l}</p>
  </a>

</li>`).join("");c.innerHTML=o}function g(r){return p.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",closeOnClick:!0})}c.addEventListener("click",L);function L(r){r.preventDefault(),r.target!==r.currentTarget&&new f(".list  a",{captionData:"alt"})}
//# sourceMappingURL=commonHelpers.js.map
