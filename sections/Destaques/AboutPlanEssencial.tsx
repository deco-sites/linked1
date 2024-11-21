import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface ContentIcon {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;
    /**
     * @title Icone
     * @description Icone do Plano
     */
    iconPlan?: ImageWidget;
    /**
     * @title Descrição do Icone
     * @description Escreva a descrição do icone do plano
     */
    descriptionIcon?: string;
}

/**
 * @title {{{title}}}
 */
export interface Content {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;
    /**
     * @title Descrição do Plano
     * @description Escreva a descrição do plano
     */
    description?: string;
    /**
     * @title Ícones do Plano
     * @description Lista de ícones do plano
     */
    iconPlan?: ContentIcon[];
    /**
     * @title Descrição Benefícios
     * @description Escreva a descrição dos benefícios
     */
    descriptionBenefits?: string[];
    
}

export interface Props {
    content?: Content[];
}

export default function Section({
    content = [],
}: Props) {
    return (
        <section className="bg-white">
            <div className="px-4 py-10">
                {content.map((block, index) => (
                    <div
                        key={index}
                        className="py-4"
                    >
                        {block.description && (
                            <p className="text-base font-sans font-normal text-sacramentoState-80">{block.description}</p>
                        )}
                        {block.iconPlan && block.iconPlan.length > 0 && (
                            <div className="py-10 flex justify-center items-center">
                                {block.iconPlan.map((icon, iconIndex) => (
                                    <div
                                        key={iconIndex}
                                        className={`flex flex-col justify-center items-center text-center ${
                                            iconIndex === 0
                                                ? "pr-[66px] border-r border-sacramentoState-10"
                                                : "pl-[66px]"
                                        }`}
                                    >
                                        {icon.iconPlan && (
                                            <Image
                                                src={icon.iconPlan}
                                                alt={icon.descriptionIcon || `Ícone ${iconIndex + 1}`}
                                                width={29}
                                                height={29}
                                                className="w-[29px] h-[29px]"
                                            />
                                        )}
                                        {icon.descriptionIcon && (
                                            <div className="pt-2">
                                                <p className="font-sans text-sm font-normal text-sacramentoState">
                                                    {icon.descriptionIcon}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        
                        {block.descriptionBenefits && block.descriptionBenefits.length > 0 && (
                            <ul className="py-10 px-4 list-disc list-outside text-sacramentoState-80">
                                {block.descriptionBenefits.map((benefit, idx) => (
                                    <li
                                        key={idx}
                                        className="font-sans text-base font-thin"
                                    >
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}