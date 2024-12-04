import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Item {
    /**
     * @title Texto do Botão
     * @description Insira o texto do botão
     */
    buttonText?: string;
    /**
     * @title URL de Destino
     * @description Insira o caminho de destino
     */
    url?: string;
}

export interface Props {
    /**
     * @title Imagem do Bloco
     * @description Faça upload da imagem que será exibida neste bloco de conteúdo.
     */
    image?: ImageWidget;
    /**
     * @title Texto
     * @description Insira o texto da seção
     */
    sectionText?: string;
    /**
     * @title Botão
     * @description Insira o texto do botão
     */
    button?: Item;
}

export default function Section({
    image,
    sectionText = "",
    button,
}: Props) {
    return (
        <section className="bg-white md:bg-sacramentoState-10">
            <div className="md:py-[64px] md:flex md:justify-center">
                <div className="md:bg-white md:w-full md:max-w-[706px]">
                    {image && (
                        <div className="">
                            <Image
                                src={image}
                                alt={image || "Imagem do bloco"}
                                width={100}
                                className="w-full"
                            />
                        </div>
                    )}
                    <div className="pt-[46px] pb-[109px] flex flex-col justify-center items-center">
                        {sectionText && (
                            <div className="pb-[65px] w-full max-w-[262px] text-center">
                                <p className="text-[28px] font-sans font-medium leading-tight-32 tracking-tight-0.56 text-black">
                                    {sectionText}
                                </p>
                            </div>
                        )}

                        <div className="w-full max-w-[279px]">
                            <input
                                id="cellPhoneInput"
                                name="cellPhoneInput"
                                type="text"
                                placeholder="DDD + Número"
                                className="w-full border-b border-sacramentoState placeholder:text-base font-sans font-normal text-sacramentoState-40"
                                aria-label="Digite sua mensagem no campo"
                                autoComplete="on"
                                required
                            />
                        </div>

                        <div className="pt-[35px]">
                            {button?.buttonText && button.url && (
                                <div className="py-[14px] px-[67px] rounded-xl bg-sacramentoState text-center cursor-pointer">
                                    <a
                                        href={button.url}
                                        className="text-lg font-sans font-semibold text-secondary"
                                    >
                                        {button.buttonText}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
