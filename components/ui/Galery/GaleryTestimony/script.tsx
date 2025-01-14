import { useScript } from "@deco/deco/hooks";

declare global {
  interface Window {
    EmblaCarousel: any;
  }
}

export interface Props {}

const setup = () => {
  if (window.innerWidth < 768) {
    const emblaScript = document.createElement("script");
    emblaScript.src = "https://cdn.jsdelivr.net/npm/embla-carousel@latest";
    emblaScript.onload = () => {
      const emblaApi = window.EmblaCarousel(
        document.querySelector(".embla-testimony"),
        {
          align: "start",
          draggable: true,
        },
      );

      const updateActiveSlide = () => {
        const slides = document.querySelectorAll(".embla-slide-testimony");
        const selectedIndex = emblaApi.selectedScrollSnap();

        slides.forEach((slide, index) => {
          slide.classList.toggle(
            "border-sacramentoState",
            index === selectedIndex,
          );
          slide.classList.toggle(
            "border-sacramentoState-20",
            index !== selectedIndex,
          );

          const slideElement = slide as HTMLElement;

          if (index === selectedIndex) {
            slideElement.style.opacity = "1";
          } else {
            slideElement.style.opacity = "0.3";
          }
        });
      };

      emblaApi.on("select", updateActiveSlide);
      updateActiveSlide();
    };

    document.body.appendChild(emblaScript);
  }
};

function GaleryTestimony({}: Props) {
  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: useScript(setup, {}),
      }}
    />
  );
}

export default GaleryTestimony;