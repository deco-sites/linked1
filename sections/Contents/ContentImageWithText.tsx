import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface SectionContent {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;
    /**
     * @title Imagem
     * @description Imagem da seção
     */
    image?: ImageWidget;
    /**
     * @title Texto da Seção
     * @description Insira o texto da seção
     */
    descriptionSection?: string[];
};

export interface Props {
    content?: SectionContent[];
}

export default function Section({
    content = [],
  }: Props) {
    return (
      <section className="bg-white">
        <div className="pt-10 pb-4">
          {content.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              {item.image && (
                <div className="w-full h-full">
                  <Image
                    src={item.image || ""}
                    alt={item.title}
                    width={375}
                    height={375}
                    className="w-full h-full"
                  />
                </div>
              )}
  
              <div className="flex-grow text-center md:text-left">
                {item.descriptionSection && (
                  <div className="space-y-4">
                    {item.descriptionSection.map((text, idx) => (
                      <p
                        key={idx}
                        className="font-sans text-base text-sacramentoState-80"
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }