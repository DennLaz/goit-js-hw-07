import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function addElementsGallery(arr) {
  const listMarkup = arr
    .map(({ description, original, preview }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
  galleryEl.insertAdjacentHTML("beforeend", listMarkup);
}

addElementsGallery(galleryItems);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
