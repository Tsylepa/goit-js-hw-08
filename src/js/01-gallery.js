import { galleryItems } from "./gallery-items.js";
// Change code below this line
import SimpleLightbox from "simplelightbox";
import styles from "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>`;
    })
    .join("");
}
