import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";

import Image from "apps/website/components/Image.tsx";

function GaleryContent({ items }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div className="px-4 lg:px-10 w-full pb-[59px]">
        <div id="swiper-container" className="overflow-x-scroll scrollbar-hide">
          <div className="swiper-wrapper flex gap-x-5">
            {items.map((item, index) => (
              <div
                className="swiper-slide"
                key={index}
                data-galery={String(index)}
              >
                <article className="w-[315px] md:w-full flex flex-col border-t-2 border-white-20">
                  <p className="pt-[23px] text-base text-white opacity-80 text-left lg:leading-tight-21 lg:leading-tight-25">
                    {item.title}
                  </p>
                  <div className="flex justify-center my-[26px] px-0 h-[486px] relative">
                    <Image
                      className="absolute w-full h-full object-cover rounded-2xl"
                      src={item.image || ""}
                      width={315}
                    />
                    <div className="absolute w-full h-full bg-primary/40"></div>
                  </div>
                  <div className="w-full pl-0 text-left">
                    <p className="pl-[3px] text-base text-mintCream opacity-80 leading-tight-18 lg:leading-tight-22">
                      {item.description}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Script />
    </>
  );
}

export default GaleryContent;