import Image from "apps/website/components/Image.tsx";
import Script from "./script.tsx";

function GaleryPartners({ items }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div className="px-4 lg:mx-10 pb-[59px] overflow-x-hidden">
        <div className="embla embla-partner w-full">
          <div className="embla__container flex md:grid md:grid-cols-3 gap-x-4">
            {items.map((item, index) => (
              <div
                className="embla__slide embla-slide-partner group flex flex-col flex-shrink-0 border-b-2 border-sacramentoState-20 hover:md:border-sacramentoState group-hover:border-sacramentoState max-w-[80%] md:max-w-[100%] transition-all duration-700 ease-out"
                key={index}
              >
                <div className="h-[158px] md:h-[259px]">
                  <Image
                    className="w-full h-full object-cover rounded-xl"
                    src={item.image || ""}
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
      </div>
      <Script />
    </>
  );
}

export default GaleryPartners;
