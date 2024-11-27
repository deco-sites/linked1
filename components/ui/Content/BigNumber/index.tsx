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

function BigNumber({ number, description, colorTheme }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div className="pl-4">
        <div className="!pr-[103px]">
          <p className={`text-left text-7xl font-thin leading-tight-72 tracking-tight-2 pb-[23px] ${setClass(colorTheme)}`}>
            {number}
          </p>
          <p className={`text-left text-base leading-tight-18 pb-[136px] last:pb-[23px] ${setClass(colorTheme)}`}>
            {description}
          </p>
        </div>
      </div>
      {/* <Script /> */}
    </>
  );
}

export default BigNumber;