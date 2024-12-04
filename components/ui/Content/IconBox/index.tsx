import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";
import Image from "apps/website/components/Image.tsx";

function setClass(value) {
  switch (value) {
    case "Primary":
        return 'bg-primary'
        break;

    case "Secondary":
        return 'bg-secondary'
        break;

    case "White":
        return 'bg-white'
        break;

    case "Light":
        return 'bg-light'
        break;
  
    default:
        return 'bg-primary'
        break;

  }
}

// Implemente a seção
function setClassSubTitle(value) {
  switch (value) {
    case "Primary":
        return 'text-white'
        break;

    case "Secondary":
        return 'text-primary'
        break;

    case "White":
        return 'text-primary'
        break;

    case "Light":
        return 'text-primary'
        break;
  
    default:
        return 'text-primary'
        break;

  }
}

function IconBox({ 
  icon,
  title,
  background,
  backgroundIcon
}: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div className={`flex flex-col items-center justify-center gap-2 py-3 px-4 h-full min-h-[170px] ${setClass(background)}`}
      >
        <div className={`flex justify-center items-center h-[64px] w-[64px] md:h-[76px] md:w-[76px] rounded-full ${setClass(backgroundIcon)}`}>
          {icon && (
              <Image
              src={icon}
              alt="Ícone do Bloco"
              width={48}
              className="w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
              />
          )}
        </div>
          <p className={`text-[13.5px] md:text-base ${ setClassSubTitle(background) } leading-tight font-normal text-center`}>
              {title}
          </p>
      </div>
      <Script />
    </>
  );
}

export default IconBox;