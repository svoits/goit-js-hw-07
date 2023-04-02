import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);

// select gallery container
const galleryList = document.querySelector('.gallery');

// create markup of gallery items
galleryList.innerHTML = markup(galleryItems);

// add listener to the gallery container / images - delegate
galleryList.addEventListener('click', onImagePreviewClick);

// creates markup of gallery items
function markup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
    `;
    })
    .join('');
}

// creates modal image window and closes it, if image is opened
function onImagePreviewClick(e) {
  e.preventDefault();
  const { target } = e;

  if (!target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`<img src="${target.dataset.source}"/>`, {
    onShow: () => window.addEventListener('keydown', onEscButtonClick),
    onClose: () => window.removeEventListener('keydown', onEscButtonClick),
  });

  instance.show();

  function onEscButtonClick(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}
