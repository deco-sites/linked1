import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface descriptionSubTopics {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Subtítulos dos Tópicos
   * @description Insira uma lista de subtítulos que complementam o tópico principal.
   */
  subTitleTopic: string;
  /**
   * @title Conteúdo dos Subtítulos
   * @description Adicione detalhes ou explicações para os subtítulos listados.
   */
  topicDescriptionContent: string[];
}

/**
 * @title {{{title}}}
 */
export interface SubTopics {
  /**
   * @title Título do Subtópico
   * @description Insira o título para o subtópico deste bloco de conteúdo.
   */
  title: string;
  /**
   * @title Lista de Descrições dos Tópicos
   * @description Adicione uma ou mais descrições detalhadas relacionadas ao tópico principal.
   */
  descriptionTopic: string[];
  /**
   * @title Lista de Descrições dos Sub-Tópicos
   * @description Adicione uma ou mais descrições.
   */
  descriptionSubTopics: descriptionSubTopics[];
}

export interface Content {
  /**
   * @title Imagem do Bloco
   * @description Faça upload da imagem que será exibida neste bloco de conteúdo.
   */
  image?: ImageWidget;
  /**
   * @title Descrição da Imagem
   * @description Forneça uma breve descrição ou legenda para a imagem selecionada.
   */
  descriptionImage?: string;
  /**
   * @title Subtópicos do Bloco
   * @description Adicione subtópicos com seus títulos, descrições e conteúdos complementares.
   */
  subTopic?: SubTopics[];
}

export interface Props {
  content: Content;
}

export default function Section({ content }: Props) {
  return (
    <section className="bg-white md:bg-sacramentoState-10">
      <div className="md:pt-[64px] md:pb-[64px] md:flex md:justify-center">
        <div className="md:bg-white md:w-full md:max-w-[706px]">
          <div className="pb-20">
            {content.image && (
              <div>
                <Image
                  src={content.image || ""}
                  alt={content.image || ""}
                  width={100}
                  className="w-full"
                />
                {content.descriptionImage && (
                  <div className="px-4 md:px-10 py-4">
                    <p className="text-sm font-sans font-normal text-gray-700">
                      {content.descriptionImage}
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="px-4 md:px-10">
              {content.subTopic?.map((subTopic, index) => (
                <div key={index} className="mb-6">
                  {subTopic.descriptionTopic && (
                    <ul className="list-none pl-0">
                      {subTopic.descriptionTopic.map(
                        (description, idx) => (
                          <li
                            key={idx}
                            className="text-lg font-sans text-gray-700"
                          >
                            {description}
                          </li>
                        ),
                      )}
                    </ul>
                  )}

                  {subTopic.descriptionSubTopics.map(
                    (descriptionSubTopic, idx) => (
                      <div key={idx} className="">
                        <div className="pt-[32px] pb-4">
                          <h3 className="text-[22px] font-sans font-semibold leading-tight-25 tracking-tight-0.44 text-sacramentoState">
                            {descriptionSubTopic
                              .subTitleTopic}
                          </h3>
                        </div>

                        <div className="py-4">
                          {descriptionSubTopic
                            .topicDescriptionContent
                            .map(
                              (
                                content,
                                contentIdx,
                              ) => (
                                <div className="mt-4">
                                  <p
                                    key={contentIdx}
                                    className="text-lg font-sans font-normal text-sacramentoState-80"
                                  >
                                    {content}
                                  </p>
                                </div>
                              ),
                            )}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
