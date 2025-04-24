const images = [
    "img/fisicof1.jpeg",
    "img/fisicof2.jpeg",
    "img/fisicof3.jpeg",
    "img/fisicof4.jpeg"
  ];
  
  let currentIndex = 0;
  const mainImage = document.getElementById("mainImage");
  const thumbnailsContainer = document.getElementById("thumbnails");
  
  function renderThumbnails() {
    thumbnailsContainer.innerHTML = "";
    images.forEach((src, index) => {
      const thumb = document.createElement("img");
      thumb.src = src;
      thumb.className = "thumbnail" + (index === currentIndex ? " active" : "");
      thumb.onclick = () => showImage(index);
      thumbnailsContainer.appendChild(thumb);
    });
  }
  
  function showImage(index) {
    currentIndex = index;
    mainImage.src = images[currentIndex];
    renderThumbnails();
  }
  
  function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    showImage(currentIndex);
  }
  
  // Inicializa
  showImage(currentIndex);
  