import type { JSX } from "preact";

import Image from "apps/website/components/Image.tsx";

function ImageSmall({ imageDesktop }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div className="w-full p-4 md:p-10 grid">
        <Image
          className="rounded-xl w-full max-w-[707px] justify-self-center"
          src={imageDesktop ? imageDesktop : ""}
        />
      </div>
    </>
  );
}

export default ImageSmall;
