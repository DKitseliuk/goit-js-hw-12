import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "/js/pixabay-api";
import * as render from "/js/render-functions";

const form = document.querySelector('.form');
const loadmorebtn = document.querySelector('.form-btn-load');

let keyWord;
let page;

const galleryUpd = async evt => {
    evt.preventDefault();
    render.hideLoadMoreButton();

    if (evt.target.nodeName === 'FORM') {        
        render.clearGallery();
        keyWord = evt.target.elements['search-text'].value.trim();
        page = 1;
        form.reset();
        if (!(keyWord)) return;
    }    
    
    render.showLoader();    
    
    const data = await getImagesByQuery(keyWord, page++);
    
    render.hideLoader();

    if (data.totalHits) {
        
        render.createGallery(data.hits);

        setTimeout(() => {
            const galleryItem = document.querySelector(".gallery-item");
            const rowHeight = galleryItem.getBoundingClientRect().height;          

            window.scrollBy({
                top: 2 * rowHeight,
                behavior: "smooth",
            });
        }, 500);

        if (Math.ceil(data.totalHits / 15) >= page) {
            render.showLoadMoreButton();            
        } else {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: "topRight",
            });
        }
        
    } else {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: "topRight",
        });
    };
}

form.addEventListener('submit', galleryUpd);
loadmorebtn.addEventListener('click', galleryUpd)
