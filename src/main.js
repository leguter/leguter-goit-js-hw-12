import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
 import { createElements, createElementsMore } from "./js/render-functions.js";
import { searchImg } from './js/pixabay-api.js';
const formEl = document.querySelector('.form-el');
const listEl = document.querySelector('.img-list')
const loaderEl = document.querySelector('.loader')
const btnLoad = document.querySelector('.btn-load')
function showLoader() {
  loaderEl.classList.remove('visually-hidden')
}
export function hideLoader() {
  loaderEl.classList.add('visually-hidden')
}

let page = 1;
let value;
let maxPage = 1;
const perPage = 15;
formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    page = 1;
    value = formEl.elements[0].value.trim();
    showLoader()
    if (!value) {
        hideLoader();
        iziToast.error({
            message: 'Info Search input must be filled!',
        });
        return;
    } else {
        btnLoad.classList.add('visually-hidden');
        const dataImg = await searchImg(value, page)
        maxPage = Math.ceil(dataImg.totalHits / perPage);
        // if (Event.target.value !== value) {
        //     page = 1;
            
        // } else {
        //     page++
        // }
        try {
              if (dataImg.hits.length === 0) {
                hideLoader();
                listEl.innerHTML = '';
                throw new Error('Error! Nothing to load');
            } else {
                  createElements(dataImg)
                  endColection();
            }
        } catch(error) {
        iziToast.show({
            title: 'Sorry',
            message: 'there are no images matching your search query. Please try again!',
            color: 'red',
        })
    }; 
    }
});
btnLoad.addEventListener('click', async () => {
    btnLoad.classList.add('visually-hidden');
    page++;
    showLoader()
    try {
          const dataImg = await searchImg(value, page)
        createElementsMore(dataImg)
        scrollEl()
    } catch (err) {
        console.log(err)
    }
  

})
 export function endColection() {
    if (page >= maxPage) {
     iziToast.show({
            message: 'Were sorry, but you have reached the end of search results',
     });
         btnLoad.classList.add('visually-hidden');
    } else {
        btnLoad.classList.remove('visually-hidden');
 }
}
function scrollEl() {
    const liEl = listEl.children[0]
    const height = liEl.getBoundingClientRect().height

    window.scrollBy({
        top: height * 2,
        behavior:'smooth',
    })
}