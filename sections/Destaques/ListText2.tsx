import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

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
  /**
   * @title Texto a ser destacado
   */
  highlight: string;
}

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
   * @title Descrição
   * @description Insira a descrição para a seção
   */
  description: TextSection[];
}

export default function Section({
  Subtitle = '',
  ImageWidget = '',
  description = [],
}: Props) {

  const getHighlightedText = (text: string, highlight: string) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="underline">{part}</span>
      ) : (
        part
      )
    );
  };  

  return (
    <section className="pl-4 pr-4 pb-[26.5px] bg-white w-full border-t border-sacramentoState-10">
      <div className="container mx-auto text-center">
        <div className="pt-[26.5px] pb-[42.5px] flex justify-between items-center">
          <h2 className="text-base font-sans font-medium text-start leading-tight-18">
            {Subtitle}
          </h2>
          {ImageWidget && (
            <div className="">
              <Image
                src={ImageWidget}
                alt="Section Icon"
                className="mx-auto"
                width={24}
              />
            </div>
          )}
        </div>

        <div>
          {description.map((desc, index) => (
            <div key={index}>
              <h3 className="pb-[23px] text-base text-left text-sacramentoState-80 font-normal leading-tight-18">
                {getHighlightedText(desc.SectionText, desc.highlight)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}