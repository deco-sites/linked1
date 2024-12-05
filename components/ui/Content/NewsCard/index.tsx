import type { JSX } from "preact";
import Image from "apps/website/components/Image.tsx";

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
function setClassButton(value: string) {
  switch (value) {
    case "primary":
      return "bg-primary";

    case "Secondary":
      return "bg-secondary";

    case "White":
      return "bg-white";

    case "Light":
      return "bg-light";

    case "Sacramento-State":
      return "bg-sacramentoState";

    case "Sacramento-State-10":
      return "bg-sacramentoState-10";

    case "Mint-Cream":
      return "bg-mintCream";

    default:
      return "bg-primary";
  }
}

function NewsCard({
  items = [],
  buttonMore = "",
  iconButton,
  colorTheme,
  colorThemeButton,
}: JSX.IntrinsicElements["div"] & Props) {
  return (
    <div className="md:flex md:justify-center">
      <div className="md:bg-white md:w-full md:max-w-[706px]">
        <div className="px-4 md:px-10 flex flex-col justify-center items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-start border-b border-sacramentoState-10 ${
                index === items.length - 1 ? "mb-[65.6px]" : ""
              }`}
            >
              {item.logo && (
                <Image
                  src={item.logo}
                  width={343}
                  height={232}
                  className="w-full h-full rounded-lg pt-10"
                />
              )}
              {item.button && (
                <div
                  className={`px-2 py-2 my-3 text-center rounded-md ${
                    setClassButton(colorThemeButton)
                  }`}
                >
                  <p
                    className={`text-sm font-sans font-normal ${
                      setClass(colorTheme)
                    }`}
                  >
                    {item.button}
                  </p>
                </div>
              )}
              {item.description && (
                <div className="pt-[13px] pb-10">
                  <p
                    className={`text-base font-sans font-normal leading-tight-18 ${
                      setClass(colorTheme)
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}

          {buttonMore && iconButton && (
            <div className="py-[14px] px-[22px] mb-[139px] w-fit flex items-center gap-x-[10px] border border-sacramentoState rounded-xl cursor-pointer">
              <p
                className={`text-lg font-sans font-semibold ${
                  setClass(colorTheme)
                }`}
              >
                {buttonMore}
              </p>
              <Image
                src={iconButton}
                width={24}
                height={24}
                alt="Icon Button"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
