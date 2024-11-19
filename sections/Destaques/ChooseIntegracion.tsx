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
    icon?: ImageWidget;
    /**
     * @title Nome do plano
     */
    integracionNumber?: string;
}

export interface Props {
    /**
     * @title Título
     * @description Título da Seção
     */
    title: string;
    /**
     * @title Descrição Mobile
     * @description Descrição da Seção no Mobile
     */
    descriptionMobile?: string;
    /**
     * @title Descrição Desktp
     * @description Descrição da Seção no Desktop
     */
    descriptionDesktop?: string;
    /**
     * @title Botão
     * @description Descrição do Botão
     */
    buttonList?: string;
    /**
     * @title Conteúdo
     * @description Conteúdo da Seção
     */
    content?: Content[];
}

export default function Section({
    title = "",
    descriptionMobile = "",
    descriptionDesktop = "",
    buttonList = "",
    content = [],
  }: Props) {
    return (
      <section className=" bg-white">
        <div className="px-4 pb-[101px] md:flex md:flex-col md:justify-center md:items-center">
            <div className="pt-10 text-center grid gap-y-4">
                <h2 className="text-[28px] font-sans font-medium leading-tight-32 tracking-tight-0.56 text-sacramentoState">{title}</h2>
                <div>
                    {descriptionMobile && (
                        <div className="block md:hidden">
                            <p className="text-lg mb-8 block md:hidden">{descriptionMobile}</p>
                        </div>
                    )}
                    {descriptionDesktop && (
                        <div className="hidden md:block md:w-[350px]">
                            <p className="text-lg mb-8 hidden md:block">{descriptionDesktop}</p>
                        </div>
                    )}
                </div>
            </div>
    
            <div className="relative flex justify-center items-center">
                <div className="relative w-[480px] h-[67px]">
                    {content?.length > 0 ? (
                    content.map(({ icon, title, integracionNumber }, index) => {
                        const leftOffset = index > 0 ? index * 51 : 0;

                        return (
                        <div
                            key={index}
                            className="w-fit absolute"
                            style={index > 0 ? { left: `${leftOffset}px` } : {}}
                        >
                            <div className="flex justify-center items-center">
                                {icon && (
                                    <div className="w-[67px] h-[67px] flex justify-center items-center border-2 border-sacramentoState-10 rounded-full bg-white">
                                    <Image
                                        src={icon}
                                        alt={title || "Ícone do Bloco"}
                                        width={67}
                                        height={67}
                                        className="w-fit h-fit rounded-full"
                                    />
                                    </div>
                                )}

                                {integracionNumber && (
                                    <div className="px-[16px] py-[18px] flex justify-center items-center bg-white border border-sacramentoState-10 rounded-full">
                                        <p className="text-[19.2px] font-normal text-sacramentoState">
                                            {integracionNumber}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        );
                    })
                    ) : (
                    <p className=""></p>
                    )}
                </div>
            </div>

            {buttonList && (
                <div className="mt-10 md:w-fit border border-sacramentoState rounded-xl">
                    <a
                        href=""
                        className="w-full md:w-fit"
                    >
                        <div className="py-[13px] md:px-[22px] text-center">
                            <p className="text-base font-sans font-semibold text-sacramentoState">
                                {buttonList}
                            </p>
                        </div>
                    </a>
                </div>
            )}
        </div>
      </section>
    );
  }