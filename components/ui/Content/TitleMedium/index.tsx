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

function TitleMedium({ content, colorTheme }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[706px] p-4 pt-10 md:px-0 md:py-8">
          <p className={`font-sans text-2xl md:text-3xl font-medium leading-tight-18 ${setClass(colorTheme)}`}>
              {content}
          </p>
        </div>
      </div>
      {/* <Script /> */}
    </>
  );
}

export default TitleMedium;