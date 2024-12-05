import type { JSX } from "preact";

// Implemente a seção
function setClass(value: string) {
  switch (value) {
    case "Primary":
      return "text-primary";

    case "Secondary":
      return "text-secondary";

    case "White":
      return "text-white";

    case "Accent":
      return "text-accent";

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
export default Paragraph;

function Paragraph(
  { content, colorTheme, alignment }: JSX.IntrinsicElements["div"] & Props,
) {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[706px] p-4 md:px-0 md:py-8">
          <p
            className={`font-sans text-base font-normal leading-tight-18 ${setClass(colorTheme)} ${setAlignment(alignment)}`}
          >
            {content}
          </p>
        </div>
      </div>
    </>
  );
}

