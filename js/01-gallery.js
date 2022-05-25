import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function addElementsGallery(arr) {
  const listMarkup = arr
    .map(({ description, original, preview }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
  galleryEl.insertAdjacentHTML("beforeend", listMarkup);
}

addElementsGallery(galleryItems);

galleryEl.addEventListener("click", openModal);

function openModal(eve) {
  eve.preventDefault();
  const currentImg = eve.target;

  if (currentImg.nodeName !== "IMG") {
    return;
  }

  const currentUrlEl = currentImg.dataset.source;

  const basiBox = basicLightbox.create(
    `<img width="1280" height="auto" src="${currentUrlEl}">`
  );

  basiBox.show();

  window, addEventListener("keydown", closeEsc);

  function closeEsc(e) {
    if (e.code !== "Escape") {
      return;
    }
    basiBox.close(() => {
      window, removeEventListener("keydown", closeEsc);
    });
  }
}
