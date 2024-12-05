import type { JSX } from "preact";

import Image from "apps/website/components/Image.tsx";

function GaleryPartners({ items }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <section className="flex justify-center">
        <div className="w-full max-w-[706px]">
          {/* <p className="pl-[15px] pb-20 pt-[93px] font-sans font-normal text-[28px] leading-tight-32 tracking-tight-2 text-primary">{title}</p> */}
          <div className="flex gap-4 overflow-x-scroll scrollbar-hide px-4 md:px-0">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex-none w-full max-w-[274.4px] md:max-w-[calc(706px_/_3_-_(32px_/_3))]`}
              >
                <div className="w-full h-[158px] aspect-video">
                  <Image
                    className="w-full h-full object-cover rounded-xl"
                    src={item.image || ""}
                    width={274.4}
                    alt={item.description}
                  />
                </div>
                <p className="pt-[12.8px] pb-[53.6px] text-base leading-snug">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default GaleryPartners;
