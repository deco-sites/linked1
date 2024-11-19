import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";


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
     * @title Icone
     * @description Icone do Plano
     */
    icon: ImageWidget;
    /**
     * @title Nome do plano
     */
    planTitle?: string;
    /**
     * @title Descrição do plano
     * @description Escreva aqui a descrição do plano
     */
    planDescription?: string;
    /**
     * @title Valor do plano
     * @description Escreva aqui o valor do plano
     */
    planPrice?: string;
    /**
     * @title Descrição do Botão
     * @description Escreva aqui o texto do botão
     */
    buttonDetails?: string;
}

export interface Props {
    content?: Content[];
}


export default function Section({
    content = [],
}: Props) {
    return (
        <section className="">
            <div className="relative">
                <div className="px-4 pt-[47px] pb-[64px] flex justify-center items-center gap-6">
                    {content.map((item, index) => (
                        <div key={index} className="text-start">
                            <div className="flex gap-x-2 items-center">
                                {item.icon && (
                                    <Image
                                        src={item.icon}
                                        alt={item.icon || "Ícone Plano"}
                                        width={32}
                                        height={32}
                                        className="w-8 h-8"
                                    />
                                )}
                                <div className="flex items-center">
                                    {item.planTitle && (
                                        <h3 className="font-sans text-lg font-semibold leading-tight-20">
                                            {item.planTitle}
                                        </h3>
                                    )}
                                </div>
                            </div>
                            <div className="pt-4 pb-5 absolute left-0 w-full">
                                <div className="border-b border-sacramentoState-10"></div>
                            </div>
                            {item.planDescription && (
                                <div className="mt-10 -w-[160px]">
                                    <p className="text-base font-sans font-light text-sacramentoState-80">
                                        {item.planDescription}
                                    </p>
                                </div>
                            )}
                            {item.planPrice && (
                                <div className="mt-8 w-[100px] ">
                                    <p className="text-base font-sans font-bold text-sacramentoState">
                                        {item.planPrice}
                                    </p>
                                </div>
                            )}
                            {item.buttonDetails && (
                                <div className="mt-8 border border-sacramentoState rounded-xl">
                                    <a href="" className="w-full">
                                        <div className="py-[13px] md:px-[31px] text-center">
                                            <p className="text-base font-sans font-semibold text-sacramentoState">
                                                {item.buttonDetails}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}