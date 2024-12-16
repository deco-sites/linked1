import type { JSX } from "preact";

import Image from "apps/website/components/Image.tsx";

function ImageFull(
  { imageDesktop, imageMobile }: JSX.IntrinsicElements["div"] & Props,
) {
  return (
    <>
      <div>
        <div className="hidden md:block">
          <Image
            className="w-full block"
            src={imageDesktop || ""}
          />
        </div>
        <div className="block md:hidden">
          <Image
            className="w-full block"
            src={imageMobile || ""}
          />
        </div>
      </div>
    </>
  );
}

export default ImageFull;
