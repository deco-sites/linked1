import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

// Implemente a seção
function setClass(value) {
  switch (value) {
    case "Primary":
        return 'text-primary'
        break;

    case "Secondary":
        return 'text-secondary'
        break;

    case "White":
        return 'text-white'
        break;

    case "Light":
        return 'text-light'
        break;
  
    default:
        return 'text-primary'
        break;

  }
  return;
}
function setAlign(value) {
  switch (value) {
    case "left":
        return 'text-left'
        break;

    case "center":
        return 'text-center'
        break;

    case "right":
        return 'text-right'
        break;

    case "justify":
        return 'text-justify'
        break;
  
    default:
        return 'text-left'
        break;

  }
  return;
}

function Title({ content, colorTheme, align }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[706px] px-4 pb-4 pt-10 md:px-0 md:py-8">
          {/* Não pensei em uma maneira amigavel de manter o padding-right no mobile */}
          <p className={`text-3xl md:text-5xl font-semibold ${setAlign(align)} ${setClass(colorTheme)}`}>
              {content}
          </p>
        </div>
      </div>
      {/* <Script /> */}
    </>
  );
}

export default Title;