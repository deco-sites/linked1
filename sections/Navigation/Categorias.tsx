import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type Tag = {
    /**
     * @title Nome
     * @description Escreva aqui o nome da categoria
     */
    name: string;
    /**
     * @title Destino
     * @description Insira a url ou o caminho de destino
     */
    url: string;
    /**
     * @title Ícone
     * @description Escolha a o ícone da categoria
     */
    icon: ImageWidget;
};

export interface Props {
/**
 * @title Título para Desktop
 * @description Digite aqui o título do bloco
 */
titleForDesktop?: string;
/**
 * @title Título para Mobile
 * @description Digite aqui o título do bloco
 */
titleForMobile?: string;
/**
 * @title Categorias
 * @description Insira as categorias desejadas
 */
  tags?: Tag[];
}

export default function Section({ 
    titleForDesktop = '', 
    titleForMobile = '',
    tags = [
        {
            name: '',
            url: '',
            icon: ''
        }
    ] 
}: Props) {

  return (
    <section class="grid gap-8 lg:gap-20 py-36 bg-white">
        <div>
            <p className="md:hidden pl-[17px] text-sacramentoState text-[22px] font-semibold text-left">{titleForDesktop}</p>
            <p className="hidden md:block text-sacramentoState text-5xl text-center">{titleForMobile}</p>
            <div class="flex justify-center">
                <div class="flex flex-wrap justify-start lg:justify-center pl-4 gap-x-[8px] gap-y-[8px] lg:gap-y-[17px]  w-full max-w-[888px] lg:max-w-[780px]">
                    <div class="w-fit rounded-[58px] inline-flex px-4 py-3 bg-mintCream text-primary">
                        {tags?.map(tag => (
                        <div class="pr-[2px] inline-flex">
                            <Image
                                class=""
                                src={tag.icon || ""}
                                />
                            <a href={tag.url} className="text-md md:text-lg pl-2 pr-[1.5px] font-semibold">{tag.name}</a>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
