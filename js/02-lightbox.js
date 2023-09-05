import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryListRefs = document.querySelector('.gallery');
const markapList = galleryItems
  .map(img => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${img.original}">
      <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
   </a>
</li>`;
  }).join('');
galleryListRefs.innerHTML = markapList;
/* galleryListRefs.addEventListener('click', openModal);

 function openModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  function closeModal(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
} */
const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
