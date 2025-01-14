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
        document.querySelector(".embla-partner"),
        {
          align: "start",
          draggable: true,
        },
      );

      const updateActiveSlide = () => {
        const slides = document.querySelectorAll(".embla-slide-partner");
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
        });
      };

      emblaApi.on("select", updateActiveSlide);
      updateActiveSlide();
    };

    document.body.appendChild(emblaScript);
  }
};

function GaleryPartner({}: Props) {
  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: useScript(setup, {}),
      }}
    />
  );
}

export default GaleryPartner;
