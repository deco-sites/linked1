import type { JSX } from "preact";

import Image from "apps/website/components/Image.tsx";

function GaleryPartners({ items }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <section className="px-4 md:px-10 flex justify-center">
        <div className="w-full">
          {/* <p className="pl-[15px] pb-20 pt-[93px] font-sans font-normal text-[28px] leading-tight-32 tracking-tight-2 text-primary">{title}</p> */}
          <div className="flex md:grid md:grid-cols-3 gap-x-4 md:gap-x-5 overflow-x-scroll scrollbar-hide">
            {items.map((item, index) => (
              <div
                key={index}
                className={`mb-[62px] w-full max-w-[274px] md:max-w-[463px] flex-none border-b border-sacramentoState-10`}
              >
                <div className="w-full h-[158px] md:h-[259px] aspect-video">
                  <Image
                    className="w-full h-full object-cover rounded-xl"
                    src={item.image || ""}
                    width={274.4}
                    alt={item.description}
                  />
                </div>
                <p className="pt-[13px] pb-[54px] text-base leading-snug">
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
