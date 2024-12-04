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
   * @title Descrição da Seção
   * @description Insira o texto da seção
   */
  SectionDescriptionText?: string;
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

export interface Props {
  /**
   * @title Subtítulo
   * @description Insira o subtítulo para a seção
   */
  Subtitle: string;
  /**
   * @title Descrição Seção
   * @description Insira a descrição para seção
   */
  sectionDescription?: string;
  /**
   * @title Ícone
   * @description Insira o ícone para a seção
   */
  ImageWidget: ImageWidget;
  /**
   * @title Vídeo
   * @description Insira o vídeo para a seção
   */
  videoWidget?: VideoWidget;
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
  Subtitle = "",
  sectionDescription = "",
  ImageWidget = "",
  videoWidget = "",
  description = [],
  button = [],
}: Props) {
  return (
    <section className="bg-white md:bg-sacramentoState-10">
      <div className="md:pt-[64px] md:pb-[64px] md:flex md:justify-center">
        <div className="md:bg-white md:w-full md:max-w-[500px]">
          <div className="px-4 text-center">
            <div
              className={`pt-6 ${
                videoWidget && !sectionDescription ? "pb-[42px]" : "pb-0"
              } flex justify-between items-center ${
                Subtitle &&
                  ImageWidget &&
                  !sectionDescription &&
                  !videoWidget &&
                  description.length === 0 &&
                  button.length === 0
                  ? "!pb-6 border-b border-sacramentoState-10"
                  : ""
              }`}
            >
              <h2 className="text-base font-sans font-medium text-start leading-tight-18">
                {Subtitle}
              </h2>

              {ImageWidget && (
                <div>
                  <Image
                    src={ImageWidget}
                    alt="Section Icon"
                    className="mx-auto cursor-pointer"
                    width={24}
                  />
                </div>
              )}
            </div>

            {sectionDescription && (
              <div className="py-10 w-full max-w-[343px] md:max-w-none text-start">
                <p className="text-base font-sans font-medium text-sacramentoState-80">
                  {sectionDescription}
                </p>
              </div>
            )}

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
                  {desc.SectionDescriptionText && (
                    <div className="pt-10 pb-6 w-full max-w-[343px] md:max-w-none text-start">
                      <p className="text-base font-sans font-medium text-sacramentoState-80">
                        {desc.SectionDescriptionText}
                      </p>
                    </div>
                  )}

                  {desc.SectionText && (
                    <div className="pt-10 pb-6 w-full max-w-[343px] md:max-w-none text-start">
                      <h3 className="text-[22px] font-sans font-medium leading-tight-25 tracking-tight-2 text-sacramentoState">
                        {desc.SectionText}
                      </h3>
                    </div>
                  )}

                  <ul
                    className={`list-disc list-outside pl-5 text-base text-sacramentoState-80 ${
                      !desc.SectionText ? "pt-[42px]" : ""
                    }`}
                  >
                    {desc.DescriptionSection.map((item, idx) => (
                      <li key={idx} className="pl-2 pt-2 leading-tight-18">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="pb-6 flex flex-col rounded-xl items-center justify-center space-y-4">
              {button.map((btn, index) => (
                <div key={index} className="w-full">
                  <a
                    href={btn.url}
                    className="w-full px-4 py-[12.5px] font-sans text-base font-medium leading-tight-18 bg-sacramentoState rounded-xl text-secondary flex items-center justify-center"
                  >
                    {btn.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
