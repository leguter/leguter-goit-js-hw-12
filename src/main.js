import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
 import { createElements } from "./js/render-functions.js";
import { searchImg } from './js/pixabay-api.js';
const formEl = document.querySelector('.form-el');
const listEl = document.querySelector('.img-list')
const loaderEl = document.querySelector('.loader')
function showLoader() {
  loaderEl.classList.remove('visually-hidden')
}
export function hideLoader() {
  loaderEl.classList.add('visually-hidden')
}
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = formEl.elements[0].value.trim();
    showLoader()
    if (!value) {
        hideLoader();
        iziToast.error({
            message: 'Info Search input must be filled!',
        });
        return;
    } else {
        searchImg(value)
            .then(data => {
                if (data.hits.length === 0) {
                    hideLoader();
                    listEl.innerHTML = '';
            throw new Error('Error! Nothing to load');
        } else {
                    createElements(data)
        }
            }).catch(error => {
        iziToast.show({
            title: 'Sorry',
            message: 'there are no images matching your search query. Please try again!',
            color: 'red',
        })
    }); 
    }
});