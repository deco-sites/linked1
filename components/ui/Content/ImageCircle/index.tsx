import type { JSX } from "preact";

import Image from "apps/website/components/Image.tsx";

function ImageCircle(
  { imageDesktop, imageMobile }: JSX.IntrinsicElements["div"] & Props,
) {
  return (
    <>
      <div className="grid ">
        <div className="hidden md:block justify-self-center w-[234px] h-[338px]">
          <Image
            className="w-full h-full object-cover rounded-full"
            src={imageDesktop || ""}
          />
        </div>
        <div className="block md:hidden justify-self-center w-[234px] h-[338px]">
          <Image
            className="w-full h-full object-cover rounded-full"
            src={imageMobile || ""}
          />
        </div>
      </div>
    </>
  );
}

export default ImageCircle;
