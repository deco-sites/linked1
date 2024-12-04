import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

// Implemente a seção
function setClass(value) {
  switch (value) {
    case "primary":
      return "text-primary";
      break;

    case "Secondary":
      return "text-secondary";
      break;

    case "White":
      return "text-white";
      break;

    case "Light":
      return "text-light";
      break;

    case "Sacramento-State":
      return "text-sacramentoState";
      break;

    case "Sacramento-State-10":
      return "text-sacramentoState-10";
      break;

    case "Mint-Cream":
      return "text-mintCream";
      break;

    default:
      return "text-primary";
      break;
  }
  return;
}

/* Descrição do component
*asdasd
*asd
*asd
*/

function BigNumber(
  { number, description, colorTheme }: JSX.IntrinsicElements["div"] & Props,
) {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[706px] grid gap-5 px-4 py-10 md:px-0 md:py-8">
          <p
            className={`text-7xl tracking-tight-2 font-thin ${
              setClass(colorTheme)
            }`}
          >
            {number}
          </p>
          <p
            className={`text-base leading-tight-18 pr-[82px] md:pr-0 ${
              setClass(colorTheme)
            }`}
          >
            {description}
          </p>
        </div>
      </div>
      {/* <Script /> */}
    </>
  );
}

export default BigNumber;
