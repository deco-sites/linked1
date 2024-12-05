import type { JSX } from "preact";

import Image from "apps/website/components/Image.tsx";

function ImageMedium(
  { imageDesktop, imageMobile }: JSX.IntrinsicElements["div"] & Props,
) {
  return (
    <>
      <div>
        <div className="hidden md:block h-[480px] p-10">
          <Image
            className="w-full h-full object-cover"
            src={imageDesktop ? imageDesktop : ""}
          />
        </div>
        <div className="block md:hidden aspect-video">
          <Image
            className="w-full h-full object-cover"
            src={imageMobile ? imageMobile : ""}
          />
        </div>
      </div>
    </>
  );
}

export default ImageMedium;
