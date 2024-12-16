import type { JSX } from "preact";

import Icon from "../../../../components/ui/Icon.tsx";

function setClass(value: string) {
  switch (value) {
    case "Primary":
      return "bg-primary";

    case "Secondary":
      return "bg-secondary";

    case "White":
      return "bg-white";

    case "Light":
      return "bg-light";

    default:
      return "bg-primary";
  }
}

// Implemente a seção
function setClassColor(value) {
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

function IconBox({
  icon,
  title,
  background,
  backgroundIcon,
  color,
}: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center gap-2 py-3 px-4 h-full min-h-[170px]`}
      >
        <div
          className={`flex justify-center items-center h-[64px] w-[64px] md:h-[76px] md:w-[76px] rounded-full ${
            setClass(backgroundIcon)
          }`}
        >
          {icon && (
            <Icon
              id={icon}
              size={40}
              strokeWidth={2}
              class={`${setClassColor(color)}`}
            />
          )}
        </div>
        <p
          className={`text-[13.5px] md:text-base ${
            setClassColor(color)
          } leading-tight font-normal text-center`}
        >
          {title}
        </p>
      </div>
    </>
  );
}

export default IconBox;
