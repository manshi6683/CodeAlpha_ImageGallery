let currentIndex = 0;
let images = [];

function openLightbox(imgElement) {
  const allImages = Array.from(document.querySelectorAll('.gallery .image-box img'));
  images = allImages.filter(img => img.parentElement.style.display !== "none");
  currentIndex = images.indexOf(imgElement);

  document.getElementById('lightbox-img').src = imgElement.src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function navigate(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function filterGallery(category) {
  const boxes = document.querySelectorAll('.image-box');
  boxes.forEach(box => {
    if (category === 'all' || box.classList.contains(category)) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });
}
