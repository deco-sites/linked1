import { useScript } from "@deco/deco/hooks";

declare global {
  var Swiper: any;
}

export interface Props {}

const setup = () => {

  const getClassSwiper = document.getElementById("swiper-container");

  new Swiper(getClassSwiper, {
    slidesPerView: 1.8,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

if (typeof window !== "undefined" && typeof document !== "undefined") {
  const swiperScript = document.createElement("script");
  swiperScript.src = "https://unpkg.com/swiper/swiper-bundle.min.js";
  swiperScript.onload = () => {
    const swiperStyles = document.createElement("link");
    swiperStyles.rel = "stylesheet";
    swiperStyles.href = "https://unpkg.com/swiper/swiper-bundle.min.css";
    document.head.appendChild(swiperStyles);

    setup();
  };

  document.body.appendChild(swiperScript);
}

function Galery({}: Props) {
  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: useScript(setup, {}),
      }}
    />
  );
}

export default Galery;