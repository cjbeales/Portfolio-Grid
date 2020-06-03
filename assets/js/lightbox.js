var lightboxItem = document.querySelectorAll('.lightbox-item');

function activateLightbox() {
  for (let i = 0; i < lightboxItem.length; i++) {
    lightboxItem[i].classList.toggle('active');
  }
}

for (let a = 0; a < lightboxItem.length; a++) {
  lightboxItem[a].addEventListener('click', activateLightbox);

}