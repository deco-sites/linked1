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
    SectionText: string[];
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
    DescriptionSection 
}: Props) {
    return (
        <section className="">
            <div className="w-full border-b border-sacramentoState-10 mb-4">
                {DescriptionSection && DescriptionSection.map((section, index) => (
                    <div 
                        key={index} 
                        className="px-4 pb-4 text-left"
                    >
                        {section.SectionText.map((text, textIndex) => (
                            <h3
                                key={textIndex}
                                className={`pb-4 text-base font-sans text-sacramentoState-80 font-normal leading-tight-18 ${textIndex === 0 ? 'pt-10' : ''}`}
                            >
                                {text}
                            </h3>
                        ))}
                        <ul className="list-disc list-outside pl-5 pt-4 text-base font-light text-sacramentoState-80">
                            {section.DescriptionSection.map((item, idx) => (
                                <li key={idx} className="pl-2 pt-2 leading-tight-18">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}