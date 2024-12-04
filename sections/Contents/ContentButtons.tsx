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
    /**
     * @title Ícone
     * @description URL do ícone
     */
    iconButton?: ImageWidget;
    /**
     * @title Descrição
     * @description Insira a descrição
     */
    description?: string;
}

export interface Props {
    /**
     * @title Texto
     * @description Insira o texto da seção
     */
    textSection: string;
    /**
     * @title Botão
     * @description Insira o botão
     */
    button?: Link[];
}

export default function Section({
    textSection = "",
    button = [],
}: Props) {
    return (
        <section className="bg-white md:bg-sacramentoState-10">
            <div className="md:pt-[64px] md:pb-[64px] md:flex md:justify-center">
                <div className="md:bg-white md:w-full md:max-w-[706px]">
                    <div className="px-4 md:px-10">
                        {textSection && (
                            <div className="py-10 w-full max-w-[343px]">
                                <p className="text-lg font-sans font-normal text-sacramentoState-80">
                                    {textSection}
                                </p>
                            </div>
                        )}

                        <div className="w-full flex flex-col justify-center items-center">
                            {button?.map((btn, index) => (
                                <div
                                    key={index}
                                    className={`my-4 py-4 w-full flex flex-col justify-center ${
                                        index === button.length - 1
                                            ? "pb-[94px] border-none"
                                            : "border-b border-sacramentoState-10"
                                    }`}
                                >
                                    <a
                                        href={btn.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-3 w-full flex justify-center items-center bg-sacramentoState rounded-[10px] cursor-pointer"
                                    >
                                        <span className="text-base font-sans font-semibold text-secondary text-center">
                                            {btn.name}
                                        </span>

                                        {btn.iconButton && (
                                            <img
                                                src={btn.iconButton}
                                                alt={btn.iconButton}
                                                className="w-6 h-6 ml-2.5"
                                            />
                                        )}
                                    </a>
                                    <div className="py-4 text-center">
                                        <p className="text-sm font-sans font-normal text-sacramentoState-80">
                                            {btn.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
