import type { JSX } from "preact";

import Image from "apps/website/components/Image.tsx";

function GaleryTestimony({ items }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <section className="${
              setClass(colorTheme)
            }`}">
        <div className="overflow-x-scroll scrollbar-hide swiper-container">
          <div className="swiper-wrapper flex lg:flex-nowrap gap-6 px-4 md:px-0">
            {items.map((item, index: number) => (
              <div
                className={`swiper-slide w-[309px] min-w-[309px] ${
                  index === 0 ? "lg:pl-10" : ""
                } ${index === items.length - 1 ? "lg:pr-10" : ""} ${
                  index !== 0 ? "lg:pl-0" : ""
                }`}
                key={index}
              >
                <div className="flex flex-col items-start border-b border-sacramentoState-10 mb-4 pb-4">
                  <div className="flex flex-col overflow-x-auto space-y-4">
                    <div className="flex justify-center py-[26px] h-[224px] px-0">
                      {item.image && (
                        <Image
                          className="w-full h-full object-cover"
                          src={item.image}
                          alt={item.image}
                          width={309}
                          height={224}
                        />
                      )}
                    </div>
                    <p className="py-4 text-lg font-medium text-sacramentoState leading-tight-20">
                      {item.textTestimony}
                    </p>
                    <p className="pr-[90px] text-base font-sans font-normal text-sacramentoState leading-tight-18">
                      {item.nameDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default GaleryTestimony;
