import React from "react";
import DropdownWithLogos from "../../../components/ui/Content/DropdownWithLogos/index.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title {{{title}}}
 */
export interface FilteredCategories {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;

    /**
     * @title Nome
     * @description Nome da categoria filtrada
     */
    name: string;

    /**
     * @title ID da Categoria
     * @description ID único associado à categoria
     */
    id: string;
}

/**
 * @title {{{title}}}
 */
export interface Logos {
    /**
     * @title Nome da Categoria
     * @description Nome da categoria a qual o logo pertence
     */
    category: string;

    /**
     * @title Nome do Logo
     * @description Título do logo
     */
    title: string;

    /**
     * @title Imagens
     * @description Adicione as imagens do logotipo
     */
    logo: ImageWidget[];

    /**
     * @title ID único do logo
     * @description ID único associado ao logo e suas imagens
     */
    id: string;
}

/**
 * @title {{{title}}}
 */
export interface Props extends JSX.HTMLAttributes<HTMLDivElement> {
    /**
     * @title Texto do Dropdown
     * @description Insira o texto do dropdown
     */
    dropdownText: string;

    /**
     * @title Ícone de Seta
     * @description Insira o ícone de seta
     */
    arrowIcon: ImageWidget;

    /**
     * @title Categorias Filtradas
     * @description Insira as categorias de integração filtradas
     */
    button?: FilteredCategories[];

    /**
     * @title Logos
     * @description Lista de logos associados às categorias
     */
    logos: Logos[];
}

export default function Section({
    dropdownText = "",
    arrowIcon = "",
    button,
    logos,
}: Props) {
    return (
        <DropdownWithLogos
            dropdownText={dropdownText}
            arrowIcon={arrowIcon}
            button={button}
            logos={logos}
        />
    );
}
