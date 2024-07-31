import{S as p,i as h}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d=document.querySelector(".list"),m=new p(".list  a",{captionsData:"alt"});function y(o){const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:n,comments:u,downloads:f})=>`<li class = "list-item">
  <a href="${i}">
    <div class = "preview-photo"><img src="${s}" alt="${e}"></div>
     <ul class="img-desc">
    <li>
      <h2>Likes</h2>
      <p>${t}</p>
    </li>
    <li>
      <h2>Views</h2>
      <p>${n}</p>
    </li>
    <li>
      <h2>Comments</h2>
      <p>${u}</p>
    </li>
    <li>
      <h2>Downloads</h2>
      <p>${f}</p>
    </li>
  </ul>
  </a>

</li>`).join("");d.innerHTML=r,m.refresh()}function g(o){const r="https://pixabay.com/api/",s="45156529-f4caada2c6812495035285f69",i=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}?${i.toString()}`,{headers:{Accept:"application/json"}}).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const L=document.querySelector(".list"),c=document.querySelector(".loader"),l=document.querySelector(".js-form");c.style.display="none";l.addEventListener("submit",w);function w(o){o.preventDefault(),L.innerHTML="";const r=o.target.request.value.trim().toLowerCase();r&&(a(c,!0),g(r).then(s=>{if(s.hits.length===0)throw new Error(response.status);a(c,!1),y(s.hits)}).catch(s=>{a(c,!1),S()}).finally(l.reset()))}function S(o){return h.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",closeOnClick:!0})}function a(o,r){r?o.style.display="block":o.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
