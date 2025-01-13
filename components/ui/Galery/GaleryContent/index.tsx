import Image from "apps/website/components/Image.tsx";
import Script from "./script.tsx";

function GaleryContent({ items }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div className="px-4 lg:px-10 pb-[59px] overflow-x-hidden">
        <div ref={(el) => (emblaRef.value = el)} className="embla w-full">
          <div className="embla__container flex md:grid md:grid-cols-4 gap-x-4">
            {items.map((item, index) => (
              <div
                className="embla__slide flex flex-col flex-shrink-0 border-t-2 border-white-20 max-w-[80%] md:max-w-[100%]"
                key={index}
              >
                <p className="pt-[23px] text-base text-white opacity-80 text-left">
                  {item.title}
                </p>
                <div className="flex justify-center my-[26px] px-0 h-[486px] relative">
                  <Image
                    className="absolute w-full h-full object-cover rounded-2xl"
                    src={item.image || ""}
                    width={315}
                  />
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