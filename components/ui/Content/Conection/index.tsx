import type { JSX } from "preact";

// Implemente a seção
function setClass(type, value) {
  switch (value) {
    case "Primary":
      return type + "-primary";

    case "Secondary":
      return type + "-secondary";

    case "White":
      return type + "-white";

    case "Accent":
      return type + "-accent";

    default:
      return type + "-primary";
  }
}

function Conection({
  content,
  topBackground,
  bottomBackground,
  circleBackground,
  colorText,
}: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div class={`relative w-full h-32 ${setClass("bg", topBackground)}`}>
        <div
          class={`absolute bottom-0 left-0 w-full h-1/2 ${
            setClass("bg", bottomBackground)
          }`}
        >
        </div>
        <div class="absolute inset-0 flex justify-center items-center">
          <div
            class={`w-16 h-16 lg:w-[70px] lg:h-[70px] ${setClass("bg", circleBackground)} ${
              setClass("text", colorText)
            } flex justify-center items-center rounded-full font-sans text-[32px] lg:text-[48px] font-medium leading-tight-35 tracking-tight-0.64`}
          >
            {content}
          </div>
        </div>
      </div>
    </>
  );
}

export default Conection;
