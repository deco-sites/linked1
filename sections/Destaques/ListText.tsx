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
   * @description Insira a URL ou o caminho de destino
   */
  url: string;
}

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
  SectionText?: string;
  /**
   * @title Descrição
   * @description Insira a descrição da seção
   */
  DescriptionSection: string[];
}

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
   * @title Subtítulo
   * @description Insira o subtítulo para a seção
   */
  Subtitle: string;
  /**
   * @title Ícone
   * @description Insira o ícone para a seção
   */
  ImageWidget?: ImageWidget;
  /**
   * @title Descrição
   * @description Insira a descrição da seção
   */
  descriptionSection?: string;
  /**
   * @title Vídeo
   * @description Insira o vídeo para a seção
   */
  videoWidget?: VideoWidget;
  /**
   * @title Descrição Após Vídeo
   * @description Insira a descrição que aparece abaixo do vídeo
   */
  descriptionSectionBottomVideo?: string;
  /**
   * @title Descrição Lista
   * @description Insira a lista de descrição da seção
   */
  descriptionSectionList?: string[];
  /**
   * @title Descrição
   * @description Insira as descrições para a seção
   */
  description: TextSection[];
  /**
   * @title Botões
   * @description Insira os botões
   */
  button?: Link;
}

export interface Props {
   /**
   * @title Conteúdo
   * @description Insira o conteúdo da seção
   */
  content: SectionContent[];
}

export default function Section({
  content = [],
}: Props) {
  return (
    <section className="px-4 bg-white">
      <div className="container mx-auto">
        {content.map((section, index) => (
          <div
            key={index}
            className={`text-center ${
              index > 0 ? 'border-y border-sacramentoState-10' : ''
            }`}
          >
            <div
              className={`pt-[26.5px] ${
                section.videoWidget ? 'pb-[42.5px]' : 'pb-0'
              } flex justify-between items-center`}
            >
              <h2 className="text-base font-sans font-medium text-start leading-tight-18">
                {section.Subtitle}
              </h2>
              {section.ImageWidget && (
                <div>
                  <Image
                    src={section.ImageWidget}
                    alt="Ícone da seção"
                    className="mx-auto"
                    width={24}
                  />
                </div>
              )}
            </div>

            {section.descriptionSection && (
              <div className="pb-10 text-left">
                <p className="font-sans text-base font-normal text-sacramentoState-80">
                  {section.descriptionSection}
                </p>
              </div>
            )}

            {section.videoWidget && (
              <div className="my-4">
                <video
                  src={section.videoWidget}
                  controls
                  className="mx-auto w-full max-w-[720px]"
                />
                {section.descriptionSectionBottomVideo && (
                  <div className="pt-6 pb-10 text-left">
                    <p className="font-sans text-base font-normal text-sacramentoState-80">
                      {section.descriptionSectionBottomVideo}
                    </p>
                  </div>
                )}
              </div>
            )}

            {section.descriptionSectionList &&
              section.descriptionSectionList.length > 0 && (
                <ul className="pb-10 list-disc list-outside pl-5 text-left">
                  {section.descriptionSectionList.map((item, idx) => (
                    <li
                      key={idx}
                      className="mb-2 font-sans text-base font-normal text-sacramentoState-80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

            {section.description.map((desc, idx) => (
              <div key={idx} className="mb-8 text-left">
                {desc.SectionText && (
                  <h3 className="pt-10 pb-6 text-[22px] font-medium text-sacramentoState leading-tight-25 tracking-tight-2">
                    {desc.SectionText}
                  </h3>
                )}
                <ul className="list-disc list-outside pl-5 text-base text-sacramentoState-80">
                  {desc.DescriptionSection.map((item, idy) => (
                    <li key={idy} className="pl-2 pt-2 leading-tight-18">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {section.button && (
              <div className="pb-6 flex flex-col items-center justify-center space-y-4">
                <a
                  href={section.button.url}
                  className="w-full max-w-sm px-4 py-3 font-sans text-base font-medium leading-tight-18 bg-sacramentoState text-secondary rounded-xl flex items-center justify-center"
                >
                  {section.button.name}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
