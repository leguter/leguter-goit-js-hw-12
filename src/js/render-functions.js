import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const loaderEl = document.querySelector('.loader')
let gallery = new SimpleLightbox('.gallery a');
const listEl = document.querySelector('.img-list')
import { hideLoader } from "../main";
export function createElements(values) {
       const markup = values.hits
    .map(value => {
      return `<li class="list-el">
                <a href="${value.largeImageURL}"><img src='${value.webformatURL}' alt='${value.tags}'></a>
                <div class="content">
                    <div class="item"><h3>Likes</h3><p>${value.likes}</p></div>
                    <div class="item"><h3>Views</h3><p>${value.views}</p></div>
                    <div class="item"><h3>Comments</h3><p>${value.comments}</p></div>
                    <div class="item"><h3>Downloads</h3><p>${value.downloads}</p></div>
                </div>
            </li>`;
    })
        .join('');
    listEl.textContent = '';
    listEl.insertAdjacentHTML('beforeend', markup);
    hideLoader();
    gallery.refresh();
 }