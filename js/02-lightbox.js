import { galleryItems } from './gallery-items.js';

// select gallery container
const galleryList = document.querySelector('.gallery');

// create markup of gallery items
galleryList.innerHTML = markup(galleryItems);

// creates markup of gallery items
function markup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image"
                src="${preview}"
                alt="${description}" />
            </a>
        </li>
    `;
    })
    .join('');
}

// add lightbox to the gallery items
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
