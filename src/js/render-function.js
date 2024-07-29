'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
const form = document.querySelector('.js-form');
const picturesList = document.querySelector('.list');
const textDuringLoad = document.querySelector('.js-loading-text');
import { searchPhotoByQuery } from './pixabay-api.js';
form.addEventListener('submit', searchQuery);
//
function searchQuery(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const inputValue = form.elements.request.value.trim().toLowerCase();
  if (inputValue === '') {
    return;
  }
  textDuringLoad.textContent = 'Loading images, please wait...';
  searchPhotoByQuery(inputValue)
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error(response.status);
      }
      textDuringLoad.style.display = 'none';
      markUpRequest(data.hits);
    })
    .catch(error => {
      textDuringLoad.style.display = 'none';
      catchError(error);
    })
    .finally(form.reset());
}

function markUpRequest(hits) {
  picturesList.innerHTML = '';
  const markUp = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class = "list-item">
  <a href="${largeImageURL}">
    <div class = "preview-photo"><img src="${webformatURL}" alt="${tags}"></div>
    <h2 >Likes</h2>
    <p>${likes}</p>
    <h2>Views</h2>
    <p>${views}</p>
    <h2>Comments</h2>
    <p>${comments}</p>
    <h2>Downloads</h2>
    <p>${downloads}</p>
  </a>

</li>`;
      }
    )
    .join('');
  picturesList.innerHTML = markUp;
}
function catchError(error) {
  return iziToast.show({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    color: 'red',
    position: 'topRight',
    closeOnClick: true,
  });
}
picturesList.addEventListener('click', openModalWindow);

function openModalWindow(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const lightbox = new SimpleLightbox('.list  a', {
    captionData: 'alt',
  });
}
