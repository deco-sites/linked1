import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface Item {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;
    /**
     * @title Título
     * @description Escreva aqui o título do item
     */
    titleSection?: string;
    /**
     * @title Imagem
     * @description Escolha a imagem do item
     */
    image: ImageWidget;
    /**
     * @title Texto Testemunha
     * @description Escreva aqui o texto da testemunha
     */
    textTestimony: string;
    /**
     * @title Nome
     * @description Escreva aqui o nome da testemunha
     */
    nameDescription: string;
}

export interface Props {
    /**
     * @title Items
     * @description Configure cada item do Galery
     */
    items: Item[];
}

export default function TestimonySection({
    items,
}: Props) {
    return (
        <section className="bg-white md:bg-sacramentoState-10">
            <div className="md:pt-[64px] md:flex md:justify-center">
                <div className="md:bg-white">
                    <div className="px-4 md:px-10 pt-[45px] mb-[68px] md:w-full md:max-w-[706px]">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="pb-10 flex flex-col border-b border-sacramentoState-10"
                            >
                                <div className="pb-10 w-full max-w-[309px] md:max-w-none text-start">
                                    <h3 className="text-base font-sans font-normal text-sacramentoState">
                                        {item.titleSection}
                                    </h3>
                                </div>
                                {item.image
                                    ? (
                                        <Image
                                            src={item.image}
                                            alt={item.titleSection ||
                                                item.title}
                                            width={420}
                                            height={224}
                                            className="md:!w-full"
                                        />
                                    )
                                    : null}
                                <div className="pt-4 w-full max-w-[264px] md:max-w-[100%] space-y-4 text-start">
                                    <p className="text-lg font-sans font-semibold leading-tight-20 text-sacramentoState">
                                        {item.textTestimony}
                                    </p>
                                    <div className="w-full max-w-[200px]">
                                        <p className="text-base font-sans font-noral text-sacramentoState-80">
                                            {item.nameDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
