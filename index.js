import{a as d,S as m,i as u}from"./assets/vendor-BK_rxH-O.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(a){return d.get("https://pixabay.com/api/",{params:{key:"52124620-04c3728bcdfdd891621e81587",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:36}}).then(s=>s.data.hits).catch(()=>[])}const i=document.querySelector(".gallery"),n=document.querySelector(".span-loader"),y=new m(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:1});function g(a){let s="";for(const r of a)s+=`<li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
            <img
                class="gallery-img"
                src="${r.webformatURL}"
                alt="${r.tags}"
            />
            <ul class="gallery-desc">
                <li class="gallery-desc-item">
                    <span class="gallery-desc-item-name">Likes</span>
                    <span class="gallery-desc-item-value">${r.likes}</span>
                </li>
                <li class="gallery-desc-item">
                    <span class="gallery-desc-item-name">Views</span>
                    <span class="gallery-desc-item-value">${r.views}</span>
                </li>
                <li class="gallery-desc-item">
                    <span class="gallery-desc-item-name">Comments</span>
                    <span class="gallery-desc-item-value">${r.comments}</span>
                </li>
                <li class="gallery-desc-item">
                    <span class="gallery-desc-item-name">Downloads</span>
                    <span class="gallery-desc-item-value">${r.downloads}</span>
                </li>
            </ul>
            </a>
        </li>`;i.insertAdjacentHTML("beforeend",s),y.refresh()}function f(){i.innerHTML=""}function h(){n.classList.add("loader")}function L(){n.classList.remove("loader")}const c=document.querySelector(".form"),v=a=>{a.preventDefault();const s=a.target.elements["search-text"].value.trim();c.reset(),s&&(f(),h(),p(s).then(r=>{if(L(),r.length===0)throw new Error("Invalid search query");g(r)}).catch(()=>{u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}))};c.addEventListener("submit",v);
//# sourceMappingURL=index.js.map
