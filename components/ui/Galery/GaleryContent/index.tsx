import Image from "apps/website/components/Image.tsx";
import Script from "./script.tsx";

function GaleryContent({ items }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div className="px-4 lg:px-10 pb-[59px] overflow-x-hidden">
        <div className="embla embla-content w-full">
          <div className="embla__container flex md:grid md:grid-cols-4 gap-x-4">
            {items.map((item, index) => (
              <div
                className="embla__slide embla-slide-content group flex flex-col flex-shrink-0 border-t-2 border-white-20 hover:md:border-white group-hover:border-white max-w-[80%] md:max-w-[100%] transition-all duration-700 ease-out"
                key={index}
              >
                <p className="pt-[23px] text-base text-white opacity-80 text-left">
                  {item.title}
                </p>
                <div className="flex justify-center my-[26px] px-0 h-[486px] relative group">
                  <Image
                    className="absolute w-full h-full object-cover rounded-2xl"
                    src={item.image || ""}
                    width={315}
                  />
                  <div className="hidden lg:block absolute bottom-0 mx-2 mb-[11px] left-0 right-0 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
                    <div className="grid gap-y-1">
                      {item.order?.map((order, idx) => (
                        <div
                          key={idx}
                          className="py-[13px] pl-[19px] bg-sacramentoState-80 bg-opacity-10 backdrop-blur-[2.4px] rounded-[6.4px]"
                        >
                          <div className="text-start grid gap-y-1">
                            <div className="flex items-center gap-x-[3px]">
                              <p className="text-[9.6px] font-mono font-light text-white/80">
                                {order.descriptionOrder}
                              </p>
                              <Image
                                src={order.image}
                                width={12.8}
                                height={12.8}
                                className="w-[12.8px] h-[12.8px]"
                              />
                            </div>
                            <p className="text-[11.2px] font-sans font-light leading-tight text-white">
                              {order.subtitleOrder}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {item.SectionImage && (
                      <div>
                        <Image
                          className="w-full h-full object-cover rounded-[6.4px]"
                          src={item.SectionImage.image}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full pl-0 text-left">
                  <p className="pl-[3px] text-base text-mintCream opacity-80">
                    {item.description}
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

export default GaleryContent;
