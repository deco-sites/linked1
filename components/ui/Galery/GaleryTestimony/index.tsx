import type { JSX } from "preact";
import Script from "./script.tsx";
import Image from "apps/website/components/Image.tsx";

function GaleryTestimony({ items }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div className="px-4 md:px-10 mb-[75px] overflow-x-hidden">
        <div className="embla embla-testimony w-full group">
          <div className="embla__container flex md:grid md:grid-cols-3 gap-x-4">
            {items.map((item, index: number) => (
              <div
                className={`embla__slide embla-slide-testimony pb-10 flex flex-col flex-shrink-0 border-b-2 border-sacramentoState-20 max-w-[80%] md:max-w-[100%] transition-all duration-700 ease-out 
                  ${
                  index === 0
                    ? "group-hover:opacity-30 opacity-100"
                    : "opacity-30"
                } 
                  group-hover:hover:opacity-100 hover:border-sacramentoState`}
                key={index}
              >
                <div className="flex flex-col items-start pb-4">
                  <div className="py-[26px] w-full h-[224px]">
                    {item.image && (
                      <Image
                        className="w-full h-full object-fit"
                        src={item.image}
                        alt={item.nameDescription}
                      />
                    )}
                  </div>
                  <p className="py-4 text-lg font-medium text-sacramentoState leading-tight-20">
                    {item.textTestimony}
                  </p>
                  <p className="text-base text-sacramentoState">
                    {item.nameDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Script />
    </>
  );
}

export default GaleryTestimony;