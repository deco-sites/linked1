import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";
import Image from "apps/website/components/Image.tsx";

function GaleryTestimony({ items }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <section className="pb-[32px] w-full bg-mintCream">
        <div className="overflow-x-scroll scrollbar-hide swiper-container">
        <div className="swiper-wrapper inline-flex lg:flex-nowrap">
            {items.map((item, index) => (
                <div
                    className={`swiper-slide w-[315px] min-w-[315px] pl-4 ${
                        index === 0 ? 'lg:pl-10' : ''
                    } ${index === items.length - 1 ? 'mr-4' : ''} ${
                        index !== 0 ? 'lg:pl-0' : ''
                    }`}
                    key={index}
                >
                    <div className="flex flex-col items-start border-b border-sacramentoState-10 mb-4 pb-4">
                        <div className="flex flex-col overflow-x-auto space-y-4">
                            {item.image && (
                                <Image
                                    src={item.image}
                                    alt={item.image}
                                    width={309}
                                    height={224}
                                />
                            )}
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
      <Script />
    </>
  );
}

export default GaleryTestimony;