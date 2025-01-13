import type { JSX } from "preact";

// Implemente a seção
function setColor(value: string) {
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

function Title(
  { content, color, alignment }: JSX.IntrinsicElements["div"] & Props,
) {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full px-4 pb-4 pt-10 md:px-0 md:py-8 w-full max-w-[706px]">
          <p
            className={`text-[28px] md:text-5xl font-sans font-medium leading-tight-32 md:leading-tight-55 tracking-tight-0.56 md:tracking-tight-0.96 ${
              setColor(color)
            } ${setAlignment(alignment)}`}
          >
            {content}
          </p>
        </div>
      </div>
    </>
  );
}

export default Title;
