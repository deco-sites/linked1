import type { JSX } from "preact";

import Image from "apps/website/components/Image.tsx";

function ImageLarge(
  { imageDesktop, imageMobile }: JSX.IntrinsicElements["div"] & Props,
) {
  return (
    <>
      <div>
        <div className="hidden md:block h-[480px]">
          <Image
            className="w-full h-full object-cover"
            src={imageDesktop || ""}
          />
        </div>
        <div className="block md:hidden aspect-square">
          <Image
            className="w-full h-full object-cover"
            src={imageMobile || ""}
          />
        </div>
      </div>
    </>
  );
}

export default ImageLarge;
