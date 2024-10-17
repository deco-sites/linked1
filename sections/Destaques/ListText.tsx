import { VideoWidget } from "apps/admin/widgets.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface Link {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
    /**
     * @title Nome
     * @description Nome visível para clique
     */
    name: string;
    /**
     * @title Destino
     * @description Insira a url ou o caminho de destino
     */
    url: string;
};

/**
 * @title {{{title}}}
 */
export interface TextSection {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Texto da Seção
   * @description Insira o texto da seção
   */
  SectionText: string;
  /**
   * @title Descrição
   * @description Insira a descrição da seção
   */
  DescriptionSection: string[];
};

export interface Props {
  /**
   * @title Subtítulo
   * @description Insira o subtítulo para a seção
   */
  Subtitle: string;
  /**
   * @title Ícone
   * @description Insira o ícone para a seção
   */
  ImageWidget: ImageWidget;
  /**
   * @title Vídeo
   * @description Insira o vídeo para a seção
   */
  videoWidget: VideoWidget;
  /**
   * @title Descrição
   * @description Insira a descrição para a seção
   */
  description: TextSection[];
  /**
   * @title Botão
   * @description Insira o botão
   */
  button?: Link[];
}

export default function Section({
  Subtitle = '',
  ImageWidget = '',
  videoWidget = '',
  description = [],
  button = [],
}: Props) {
  return (
    <section className="pl-4 pr-4 bg-white">
      <div className="container mx-auto text-center">
        <div className="pt-[26.5px] pb-[42.5px] flex justify-between items-center">
            <h2 className="text-base text-sans font-semibold text-start">{Subtitle}</h2>
            {ImageWidget && (
                <div className="">
                <Image 
                src={ImageWidget} 
                alt="Section Icon" 
                className="mx-auto" 
                width={24}/>
                </div>
            )}
        </div>
        <div>
            {videoWidget && (
            <div className="mb-4">
                <video src={videoWidget} controls className="mx-auto" />
            </div>
            )}
        </div>
        <div>
            {description.map((desc, index) => (
            <div key={index} className="mb-4 text-left">
                <h3 className="pt-10 pb-6 text-[22px] text-sacramentoState font-semibold">{desc.SectionText}</h3>
                <ul className="list-disc list-outside pl-5 text-base text-sacramentoState-80">
                {desc.DescriptionSection.map((item, idx) => (
                    <li key={idx} className="pl-2 pt-2 ">{item}</li>
                ))}
                </ul>
            </div>
            ))}
        </div>
        <div className="pb-24 pt-10 pb-6 flex flex-col rounded-xl items-center justify-center space-y-4">
            {button.map((btn, index) => (
                <div key={index} className="w-full">
                <a
                    href={btn.url}
                    className="w-full px-4 py-[12.5px] text-sans text-base font-semibold bg-sacramentoState rounded-xl text-secondary flex items-center justify-center"
                >
                    {btn.name}
                </a>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}