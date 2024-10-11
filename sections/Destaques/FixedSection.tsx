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
    buttonText = '',
    ImageWidget = '',
    description = '',
  }: Props) {
    return (
    <section id="fixed-section" className="fixed bottom-0 left-0 w-full flex justify-center bg-white lg:hidden z-50">
      <div className="w-full px-5 pt-3.5 pb-5 bg-white shadow-lg flex flex-col justify-center gap-2.5">
        <div className="inline-flex">
            <div className="w-full flex justify-between items-center gap-2">
                <a className="py-[12.5px] px-[55px] ml-5 mr-2.5 flex-grow bg-sacramentoState rounded-lg flex justify-center items-center text-secondary text-base font-semibold font-sans">
                    {buttonText}
                </a>
            </div>
            <div className="py-2.5 px-5 bg-secondary rounded-lg flex justify-center items-center">
                {ImageWidget && (
                <div className="w-6 h-6 flex justify-center items-center">
                    <Image src={ImageWidget} alt="Section Image" className=""/>
                </div>
                )}
            </div>
        </div>
        <p className="w-full text-center text-sacramentoState-80 text-sm font-normal font-sans">{description}</p>
      </div>
    </section>
    );
}
