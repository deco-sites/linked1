import type { JSX } from "preact";

// Implemente a seção
function setClass(value: string) {
  switch (value) {
    case "primary":
      return "text-primary";

    case "Secondary":
      return "text-secondary";

    case "White":
      return "text-white";

    case "Accent":
      return "text-accent";

    case "Sacramento-State":
      return "text-sacramentoState";

    case "Sacramento-State-10":
      return "text-sacramentoState-10";

    case "Mint-Cream":
      return "text-mintCream";

    default:
      return "text-primary";
  }
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
    </>
  );
}

export default BigNumber;
