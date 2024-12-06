import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type Link = {
  /**
   * @title Nome
   * @description Nome visível para clique
   */
  name: string;
  /**
   * @title Destino
   * @description Insira a URL ou o caminho de destino
   */
  url: string;
};

export interface Props {
  /**
   * @title Texto do Botão
   * @description Insira o texto do botão
   */
  buttonText: string;
  /**
   * @title Ícone do Botão
   * @description Insisra o Ícone do Botão
   */
  ImageWidget: ImageWidget;
  /**
   * @title Descrição
   * @description Insira a descrição
   */
  description?: string;
}

export default function Section({
  buttonText = "",
  ImageWidget = "",
  description = "",
}: Props) {
  return (
    <section
      id="fixed-section"
      className="fixed bottom-0 left-0 w-full flex justify-center bg-white lg:hidden z-40"
    >
      <div className="px-5 pt-[14px] pb-5 w-full grid gap-y-[9px]">
        <div className="w-full flex items-center space-x-2">
          <div className="flex-grow">
            <a className="py-[10px] px-5 w-full bg-sacramentoState rounded-[10px] flex justify-center items-center text-base font-medium font-sans leading-tight-18 text-[#3BEDB2]">
              {buttonText}
            </a>
          </div>
          <div className="w-[92px] flex-shrink-0">
            {ImageWidget && (
              <div className="w-full px-5 py-2.5 h-10 flex justify-center items-center bg-secondary rounded-[10px]">
                <Image
                  src={ImageWidget}
                  alt="Section Image"
                  className="w-6 h-6"
                  width={24}
                />
              </div>
            )}
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm font-sans font-normal leading-tight-15.86 text-sacramentoState-80">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
