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
   * @title Texto do bloco
   * @description Escreva o texto do bloco
   */
  DescriptionSection: string[];
}

export interface Props {
  DescriptionSection: TextSection[];
}

export default function Section({
  DescriptionSection,
}: Props) {
  return (
    <section className="bg-white md:bg-sacramentoState-10">
      <div className="md:pt-[64px] md:pb-[64px] md:flex md:justify-center">
        <div className="md:bg-white md:w-full md:max-w-[706px]">
          <div className="px-4 md:px-10 pt-[56.33px] pb-[15px]">
            {DescriptionSection &&
              DescriptionSection.map((section, index) => (
                <div key={index} className="text-left">
                  <div className="">
                    {section.DescriptionSection &&
                      section.DescriptionSection.map((desc, idx) => (
                        <p
                          key={idx}
                          className={`text-base font-sans font-normal leading-tight-18 text-sacramentoState-80 ${
                            idx === 0 ? "" : "pt-4"
                          } ${
                            idx === section.DescriptionSection.length - 1
                              ? "border-b border-sacramentoState-10 w-full pb-4"
                              : ""
                          }`}
                        >
                          {desc}
                        </p>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
