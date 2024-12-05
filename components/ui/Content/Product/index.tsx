import type { JSX } from "preact";
import Image from "apps/website/components/Image.tsx";

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

function Product(
  { icon, title, description, button, colorTheme }:
    & JSX.IntrinsicElements["div"]
    & Props,
) {
  return (
    <>
      <div className={`flex first:pt-10 pt-[81px]`}>
        {icon && (
          <Image
            className=""
            src={icon || ""}
            alt="Ícone"
            width={64}
          />
        )}
      </div>
      <div className="pt-4 pb-2">
        {title && (
          <h2
            className={`font-sans text-[22px] font-medium ${
              setClass(colorTheme)
            } leading-tight-25 tracking-tight-2`}
          >
            {title}
          </h2>
        )}
      </div>
      <div className="pb-[32px] pr-[80px]">
        {description && (
          <p
            className={`text-base font-sans ${
              setClass(colorTheme)
            }-80 font-normal leading-tight-18`}
          >
            {description}
          </p>
        )}
      </div>
      <div className="w-fit py-[12.5px] md:flex bg-sacramentoState rounded-xl border-[1px] border-secondary items-center justify-center gap-4">
        <a
          href={button.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-max px-[31.75px] flex-none font-sans text-base font-medium text-secondary leading-tight-18"
        >
          {button.name}
        </a>
      </div>
    </>
  );
}

export default Product;
