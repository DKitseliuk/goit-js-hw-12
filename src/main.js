import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "/js/pixabay-api";
import * as render from "/js/render-functions";

const form = document.querySelector('.form');

const galleryUpd = (evt) => {
    evt.preventDefault();    
    const keyWord = evt.target.elements['search-text'].value.trim();    
    form.reset();
    if (!(keyWord)) return;
    
    render.clearGallery();
    render.showLoader();    
    
    getImagesByQuery(keyWord)
        .then((images) => {
            render.hideLoader();
            if (images.length === 0) {
                throw new Error('Invalid search query');
            }            
            render.createGallery(images);
        })
        .catch(() => {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: "topRight",
            });
        });        
}

form.addEventListener('submit', galleryUpd);
