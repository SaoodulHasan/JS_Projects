//Carousel scroll functionality
function scrollFunc(section) {
  const carousel = section.querySelector(".cardsCarousel");
  const nextBtn = section.querySelector(".carouselRight");
  const prevBtn = section.querySelector(".carouselLeft");

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  });
}

document.querySelectorAll(".carouselWrapper").forEach(scrollFunc);
