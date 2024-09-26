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
 * @title Título
 * @description Digite aqui o título do bloco
 */
title?: string;
/**
 * @title Categorias
 * @description Insira as categorias desejadas
 */
  tags?: Tag[];
}

export default function Section({ 
    title = "Soluções para todos os tipos de estabelecimentos", 
    tags = [
        {
            name: '',
            url: '',
            icon: ''
        }
    ] 
}: Props) {

  return (
    <div>
        <p>{title}</p>
        {tags?.map(tag => (
        <div>
            <Image
                class=""
                src={tag.icon || ""}
                />
            <a href={tag.url}>{tag.name}</a>
        </div>
        ))}
    </div>
  );
}
