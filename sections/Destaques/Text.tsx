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
    <section className="pr-4 pt-[56.33px] pb-[15px]">
        <div className="">
            {DescriptionSection && DescriptionSection.map((section, index) => (
            <div key={index} className="text-left">
                <div className="pl-4">
                {section.DescriptionSection && section.DescriptionSection.map((desc, idx) => (
                    <p
                    key={idx}
                    className={`text-base font-sans font-normal leading-tight-18 text-sacramentoState-80 ${
                        idx === 0 ? '' : 'pt-4'
                    } ${
                        idx === section.DescriptionSection.length - 1 ? 'border-b border-sacramentoState-10 w-full pb-4' : ''
                    }`}
                    >
                    {desc}
                    </p>
                ))}
                </div>
            </div>
            ))}
        </div>
    </section>
  );
}