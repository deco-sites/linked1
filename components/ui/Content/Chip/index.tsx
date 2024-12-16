import type { JSX } from "preact";

import Image from "apps/website/components/Image.tsx";

function Chip({
  name,
  url,
  icon,
}: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div className="w-fit rounded-[58px] inline-flex px-4 py-3 bg-mintCream font-sans font-medium text-primary items-center">
        <div className="inline-flex items-center">
          <Image
            className="w-4 h-4"
            src={icon || ""}
            alt={name}
            width={10.67}
          />
          <a
            href={url}
            className="text-md md:text-lg pl-2 pr-[1.5px] font-sans font-medium leading-tight-18"
          >
            {name}
          </a>
        </div>
      </div>
    </>
  );
}

export default Chip;
