import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';

import makeGalleryMarkup from './js/render-functions';
import fetchImages from './js/pixabay-api';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formRef = document.querySelector('.searchForm');
const loaderRef = document.querySelector('.loader');
const galleryRef = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery a', {});

formRef.addEventListener('submit', onFormSearchSubmit);
function onFormSearchSubmit(e) {
  e.preventDefault();
  const query = e.target.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'input please your request',
      position: 'topRight',
      timeout: 3000,
      maxWidth: '400px',
    });
    return;
  }
  loaderRef.style.display = 'inline-block';
  galleryRef.innerHTML = '';
  e.target.elements.searchQuery.value = '';
  fetchImages(query)
    .then(({ hits }) => {
      if (!hits.length) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 3000,
          maxWidth: '400px',
        });

        return;
      }
      const markup = makeGalleryMarkup(hits);

      galleryRef.innerHTML = markup;
      lightbox.refresh();
    })
    .catch(error =>
      iziToast.error({
        title: 'Error',
        message: error.message,
        position: 'topRight',
        timeout: 3000,
        maxWidth: '400px',
      })
    )
    .finally(() => {
      loaderRef.style.display = 'none';
      console.log('none');
    });
}
