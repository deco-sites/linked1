import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";
import Image from "apps/website/components/Image.tsx";

function ImageCircle({ image }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <Image
        className="rounded-full"
        src={image || ""}
      />
      <Script />
    </>
  );
}

export default ImageCircle;