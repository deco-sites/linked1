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

function Paragraph(
  { content, colorTheme }: JSX.IntrinsicElements["div"] & Props,
) {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[706px] p-4 md:px-0 md:py-8">
          <p
            className={`font-sans text-base font-normal leading-tight-18 ${
              setClass(colorTheme)
            }`}
          >
            {content}
          </p>
        </div>
      </div>
    </>
  );
}

export default Paragraph;
