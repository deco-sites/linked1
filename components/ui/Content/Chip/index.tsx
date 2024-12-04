import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";
import Image from "apps/website/components/Image.tsx";

// Implemente a seção
function setClass(value) {
  switch (value) {
    case "Primary":
        return 'bg-primary text-secondary'
        break;

    case "Secondary":
        return 'bg-secondary text-primary'
        break;
  
    default:
        return 'bg-secondary text-primary'
        break;

  }
  return;
}

function Chip({ 
  name,
  url,
  icon,
  colorTheme
 }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div className="w-fit sm:w-1/2 lg:w-fit rounded-[58px] inline-flex px-4 py-3 bg-mintCream font-sans font-medium text-primary items-center">
        <div className="inline-flex items-center">
          <Image 
            className="w-4 h-4" 
            src={icon || ""} 
            alt={name} 
            width={10.67} 
          />
          <a href={url} className="text-md md:text-lg pl-2 pr-[1.5px] font-sans font-medium leading-tight-18">
            {name}
          </a>
        </div>
      </div>
      <Script />
    </>
  );
}

export default Chip;