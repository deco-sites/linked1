import { useScript } from "@deco/deco/hooks";

export interface Props {}

const setup = () => {
  const slides = Array.from(document.querySelectorAll("[data-slide]"));
  if (slides.length === 0) return;

  const totalSlides = slides.length;
  const activeClasses = ["translate-x-0", "opacity-100", "block"];
  const inactiveClasses = ["translate-x-full", "opacity-0", "hidden"];
  let currentIndex = 0;

  const updateSlideVisibility = (index: number) => {
    slides.forEach((slide, idx) => {
      const isActive = idx === index;
      slide.classList.remove(...(isActive ? inactiveClasses : activeClasses));
      slide.classList.add(...(isActive ? activeClasses : inactiveClasses));
    });
  };

  const goToNextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlideVisibility(currentIndex);
  };

  const goToPreviousSlide = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlideVisibility(currentIndex);
  };

  const handleKeyboardNavigation = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") goToNextSlide();
    if (event.key === "ArrowLeft") goToPreviousSlide();
  };

  const startAutoSlide = () => {
    setInterval(goToNextSlide, 5000);
  };

  const setupEventListeners = () => {
    document.addEventListener("keydown", handleKeyboardNavigation);
  };

  updateSlideVisibility(currentIndex);
  setupEventListeners();
  startAutoSlide();
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