import type { JSX } from "preact";
import Image from "apps/website/components/Image.tsx";

// Implemente a seção
function setClass(value) {
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
      <div className="flex md:justify-center">
        <div className="md:w-full md:max-w-[706px]">
          <div className="px-4 md:px-10 py-10 w-full max-w-[343px] md:max-w-none">
            <div className="flex">
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
                  className={`text-[22px] font-sans font-semibold ${
                    setClass(colorTheme)
                  } leading-tight-25 tracking-tight-0.44`}
                >
                  {title}
                </h2>
              )}
            </div>
            <div className="pb-[32px] w-full max-w-[300px] md:max-w-none">
              {description && (
                <p
                  className={`text-base font-sans ${
                    setClass(colorTheme)
                  }-80 font-normal`}
                >
                  {description}
                </p>
              )}
            </div>
            <div className="w-fit py-[13px] md:flex rounded-xl border-[1px] border-sacramentoState items-center justify-center gap-4">
              <a
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-max px-[32px] flex-none font-sans text-base font-semibold leading-tight-18 text-sacramentoState"
              >
                {button.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;