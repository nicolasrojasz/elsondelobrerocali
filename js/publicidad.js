document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".ad-carousel");

  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll("img");

    if (images.length === 0) return;

    let current = 0;

    // Mostrar la primera imagen
    images[0].classList.add("active");

    // Si solo hay una imagen, no hacemos nada más
    if (images.length <= 1) return;

    setInterval(() => {
      images[current].classList.remove("active");

      current++;

      if (current >= images.length) {
        current = 0;
      }

      images[current].classList.add("active");
    }, 5000);
  });
});
