import{a as g,S as f,i as c}from"./assets/vendor-BK_rxH-O.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function h(a,s){const t=new URLSearchParams({key:"52124620-04c3728bcdfdd891621e81587",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s});try{return(await g.get(`https://pixabay.com/api/?${t}`)).data}catch{return{}}}const d=document.querySelector(".gallery"),u=document.querySelector(".span-loader"),m=document.querySelector(".form-btn-load"),L=new f(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:1});function b(a){const s=a.map(t=>`<li class="gallery-item">
                        <a class="gallery-link" href="${t.largeImageURL}">
                        <img
                            class="gallery-img"
                            src="${t.webformatURL}"
                            alt="${t.tags}"
                        />
                        <ul class="gallery-desc">
                            <li class="gallery-desc-item">
                                <span class="gallery-desc-item-name">Likes</span>
                                <span class="gallery-desc-item-value">${t.likes}</span>
                            </li>
                            <li class="gallery-desc-item">
                                <span class="gallery-desc-item-name">Views</span>
                                <span class="gallery-desc-item-value">${t.views}</span>
                            </li>
                            <li class="gallery-desc-item">
                                <span class="gallery-desc-item-name">Comments</span>
                                <span class="gallery-desc-item-value">${t.comments}</span>
                            </li>
                            <li class="gallery-desc-item">
                                <span class="gallery-desc-item-name">Downloads</span>
                                <span class="gallery-desc-item-value">${t.downloads}</span>
                            </li>
                        </ul>
                        </a>
                    </li>`).join("");d.insertAdjacentHTML("beforeend",s),L.refresh()}function v(){d.innerHTML=""}function w(){u.classList.add("loader")}function S(){u.classList.remove("loader")}function $(){m.classList.add("is-active")}function q(){m.classList.remove("is-active")}const y=document.querySelector(".form"),O=document.querySelector(".form-btn-load");let n,i;const p=async a=>{if(a.preventDefault(),q(),a.target.nodeName==="FORM"&&(v(),n=a.target.elements["search-text"].value.trim(),i=1,y.reset(),!n))return;w();const s=await h(n,i++);S(),s.totalHits?(b(s.hits),setTimeout(()=>{const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:2*o,behavior:"smooth"})},500),Math.ceil(s.totalHits/15)>=i?$():c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})};y.addEventListener("submit",p);O.addEventListener("click",p);
//# sourceMappingURL=index.js.map
