function initCarousel(container) {
  const previousButton = container.querySelector(".previous");
  const nextButton = container.querySelector(".next");
  const carouselContainer = container.querySelector(".cards");
  const cards = carouselContainer.querySelectorAll(".slide");
  const pageDots = document.querySelectorAll(".paginationDots li");
  let leftSlideIndex = 0;

  const goToSlide = (nextLeftSlideIndex) => {
    console.log(nextLeftSlideIndex);
    $(carouselContainer).animate(
      {
        scrollLeft: (carouselContainer.offsetWidth / 3) * nextLeftSlideIndex,
      },
      {
        duration: 200,
      }
    );

    pageDots.forEach((dot) => void dot.classList.remove("active"));
    pageDots[nextLeftSlideIndex].classList.add("active");
    leftSlideIndex = nextLeftSlideIndex;
  };

  const previousSlide = () =>
    void goToSlide(leftSlideIndex > 0 ? leftSlideIndex - 1 : cards.length - 1);
  const nextSlide = () =>
    void goToSlide(leftSlideIndex < cards.length - 1 ? leftSlideIndex + 1 : 0);

  previousButton.addEventListener("click", previousSlide);
  nextButton.addEventListener("click", nextSlide);
  pageDots.forEach(
    (dot, index) =>
      void dot.addEventListener("click", () => void goToSlide(index))
  );
}

window.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll("section.carousel");
  for (const carousel of carousels) initCarousel(carousel);
});