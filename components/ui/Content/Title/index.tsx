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
      <div className="px-4 pb-4 pt-10">
        <p className={`text-3xl font-semibold pr-[56px] md:pr-0 ${setClass(colorTheme)}`}>
            {content}
        </p>
      </div>
      {/* <Script /> */}
    </>
  );
}

export default Title;