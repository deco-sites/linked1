import { useScript } from "@deco/deco/hooks";

export interface Props {}

const setup = () => {
  let currentIndex = 0;
  const slides = Array.from(document.querySelectorAll("[data-slide]"));
  const totalSlides = slides.length;

  const showSlide = (index: number) => {
    slides.forEach((slide, idx) => {
      if (idx === index) {
        slide.classList.remove("translate-x-full", "opacity-0", "hidden");
        slide.classList.add("translate-x-0", "opacity-100", "block");
      } else {
        slide.classList.remove("translate-x-0", "opacity-100", "block");
        slide.classList.add("translate-x-full", "opacity-0", "hidden");
      }
    });
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  };

  document.addEventListener("DOMContentLoaded", () => {
    if (slides.length === 0) return;

    showSlide(currentIndex);

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }
      if (event.key === "ArrowLeft") {
        prevSlide();
      }
    });

    setInterval(nextSlide, 5000);
  });
};

function Open({}: Props) {
  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: useScript(setup, {}),
      }}
    />
  );
}

export default Open;