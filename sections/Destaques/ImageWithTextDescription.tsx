import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Imagem
   * @description Insira a imagem da seção
   */
  image?: ImageWidget;
  /**
   * @title Texto da Seção
   * @description Insira o texto da seção
   */
  sectionText?: string;
}

export default function Section({
  image = "",
  sectionText = "",
}: Props) {
  return (
    <section className="bg-sacramentoState md:bg-sacramentoState-10">
      <div className="md:pt-[64px] md:pb-[64px] md:flex md:justify-center">
        <div className="md:bg-sacramentoState md:w-full md:max-w-[706px]">
          <div className="flex flex-col border-b border-white-20">
            <div className="">
              {image && (
                <div className="!w-full">
                  <Image
                    src={image}
                    alt="Imagem da Seção"
                    width={100}
                    height={535}
                    className="!w-full h-[535px]"
                  />
                </div>
              )}
            </div>
            <div className="px-4 md:px-10 py-10">
              {sectionText && (
                <div className="w-full max-w-[343px] md:max-w-none">
                  <p className="text-base font-sans font-normal leading-tight-18 text-white">
                    {sectionText}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
