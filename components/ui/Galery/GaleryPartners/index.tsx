import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";
import Image from "apps/website/components/Image.tsx";

function GaleryPartners({ items }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
        <section className="">
            <div>
                <p className="pl-[15px] pb-20 pt-[93px] font-sans font-normal text-[28px] leading-tight-32 tracking-tight-2 text-primary">{title}</p>
                <div className="flex overflow-x-scroll scrollbar-hide">
                {items.map((item, index) => (
                    <div
                    key={index}
                    className={`pl-4 flex-none w-[274.4px] ${index === items.length - 1 ? 'pr-4' : ''}`}
                    >
                    <Image
                        className="rounded-lg"
                        src={item.image || ""}
                        width={274.4}
                        alt={item.description}
                    />
                    <p className="pt-[12.8px] pb-[53.6px] text-base leading-snug">
                        {item.description}
                    </p>
                    </div>
                ))}
                </div>
            </div>
        </section>
      <Script />
    </>
  );
}

export default GaleryPartners;