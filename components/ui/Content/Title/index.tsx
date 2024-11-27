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

function Title({ content, colorTheme }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <p className={`pt-[12.8px] pb-10 font-sans text-base font-normal leading-tight-18 ${setClass(colorTheme)}`}>
          {content}
      </p>
      {/* <Script /> */}
    </>
  );
}

export default Title;