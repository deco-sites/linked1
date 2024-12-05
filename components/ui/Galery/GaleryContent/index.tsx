import type { JSX } from "preact";

import Image from "apps/website/components/Image.tsx";

function GaleryContent({ items }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <section className="w-full pb-[59px]">
        <div className="overflow-x-scroll scrollbar-hide swiper-container">
          <div className="swiper-wrapper flex gap-6 lg:flex-nowrap">
            {items.map((item, index) => (
              <div
                className={`swiper-slide w-[315px] min-w-[315px] pl-4 ${
                  index === 0 ? "lg:pl-10" : ""
                } ${index === items.length - 1 ? "lg:pr-10" : ""} ${
                  index !== 0 ? "lg:pl-0" : ""
                }`}
                key={index}
              >
                <article className="w-full flex flex-col border-t-2 border-white-20">
                  <p className="pt-[22.8px] text-base text-white opacity-80 text-left lg:leading-tight-21 lg:leading-tight-25">
                    {item.title}
                  </p>
                  <div className="flex justify-center py-[26px] px-0 h-[485.77px] relative">
                    <Image
                      className="absolute w-full h-full object-cover rounded-2xl"
                      src={item.image || ""}
                      width={315}
                    />
                    <div className="absolute w-full h-full bg-primary/40"></div>
                  </div>
                  <div className="w-full pl-0 text-left">
                    <p className="pl-[3px] text-base text-white opacity-80 leading-tight-18 lg:leading-tight-22">
                      {item.description}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default GaleryContent;
