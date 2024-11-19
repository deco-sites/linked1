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
     * @title Nome do Opcional
     */
    optionalTitle?: string;
}


export interface Props {
    /**
     * @title Título
     * @description Título da Seção
     */
    title: string;
    /**
     * @title Descrição
     * @description Descrição da Seção
     */
    description?: string;
    /**
     * @title Botão
     * @description Descrição do Botão
     */
    buttonDetails?: string;
    /**
     * @title Conteúdo
     * @description Conteúdo da Seção
     */
    content?: Content[];
}

export default function Section({
    title = "",
    description = "",
    buttonDetails = "",
    content = [],
  }: Props) {
      return (

        <section className="bg-mintCream">
            <div className="pb-[101px] md:flex md:flex-col md:justify-center md:items-center">
                <div className="pt-10 flex flex-col justify-center items-center">
                    <div className="pb-4 w-[187px] md:w-full flex justify-center text-center">
                        <h2 className="text-[28px] font-sans font-medium leading-tight-32 tracking-tight-0.56 text-sacramentoState">{title}</h2>
                    </div>
                    <div className="md:w-[350px] flex justify-center text-center">
                        {description && <p className="text-lg mb-8">{description}</p>}
                    </div>
                </div>

                <div className="pt-10 pl-[17px] pr-[15px] md:w-fit grid grid-cols-2 md:grid-cols-4 md:gap-x-[76px]">
                {content?.length > 0 ? (
                    content.map(({ icon, title, optionalTitle }, index) => {
                    const isFirst = index === 0;
                    const isLast = index === content.length - 1;
                    const borderClasses = isFirst
                        ? "border-r border-b md:border-none lg:border-none border-sacramentoState-10"
                        : isLast
                        ? "border-t border-l md:border-none lg:border-none border-sacramentoState-10"
                        : "";

                    return (
                        <div
                        key={index}
                        className={`p-[25px] flex flex-col justify-center items-center ${borderClasses}`}
                        >
                        <div className="py-4 px-4 w-fit flex justify-center items-center bg-white rounded-full">
                            {icon && (
                            <Image
                                src={icon}
                                alt={title || "Ícone do Bloco"}
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                            )}
                        </div>
                        <div className="pt-2 w-[105px] flex justify-center items-center text-center">
                            {optionalTitle && (
                                <p className="text-base font-sans font-normal text-sacramentoState">
                                    {optionalTitle}
                                </p>
                            )}
                        </div>
                        </div>
                    );
                    })
                ) : (
                    <p className=""></p>
                )}
                </div>

                {buttonDetails && (
                    <div className="mt-10 ml-4 mr-[14px] border border-sacramentoState rounded-xl">
                        <a
                            href=""
                            className="w-full"
                        >
                            <div className="py-[13px] md:px-[22px] text-center">
                                <p className="text-base font-sans font-semibold text-sacramentoState">
                                    {buttonDetails}
                                </p>
                            </div>
                        </a>
                    </div>
                )}
            </div>
        </section>
  );
}