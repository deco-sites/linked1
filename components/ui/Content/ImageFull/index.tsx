import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";
import Image from "apps/website/components/Image.tsx";

function ImageFull({ image }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <Image
        className="w-full"
        src={image || ""}
      />
      <Script />
    </>
  );
}

export default ImageFull;