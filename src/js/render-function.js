'use strict';
const picturesList = document.querySelector('.list');
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const lightbox = new SimpleLightbox('.list  a', {
  captionsData: 'alt',
});
export function markUpRequest(hits) {
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
  lightbox.refresh();
}
