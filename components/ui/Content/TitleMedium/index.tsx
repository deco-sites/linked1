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

// Implemente a seção
function setAlignment(value: string) {
  switch (value) {
    case "Left":
      return "text-left";

    case "Center":
      return "text-center";

    case "Right":
      return "text-right";
  }
}

function TitleMedium(
  { content, colorTheme, alignment }: JSX.IntrinsicElements["div"] & Props,
) {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[706px] p-4 pt-10 md:px-0 md:py-8">
          <p
            className={`font-sans text-2xl md:text-3xl font-medium leading-tight-18 ${setClass(colorTheme)} ${setAlignment(alignment)}`}
          >
            {content}
          </p>
        </div>
      </div>
    </>
  );
}

export default TitleMedium;
