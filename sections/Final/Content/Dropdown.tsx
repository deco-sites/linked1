import React from "react";
import Dropdown from "../../../components/ui/Content/Dropdown/index.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title {{{title}}}
 */
export interface filteredCategories {
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
}

/**
 * @title {{{title}}}
 */
export interface Props {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;

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
    button?: filteredCategories[];

    /**
     * @title Função de Mudança de Categoria
     * @description Função chamada ao mudar a categoria no Dropdown
     */
    onCategoryChange: (selected: string) => void;
}

export default function Section({
    title = "",
    dropdownText = "",
    arrowIcon,
    button,
    onCategoryChange,
}: Props) {
    return (
        <Dropdown
            title={title}
            dropdownText={dropdownText}
            arrowIcon={arrowIcon}
            button={button}
            onCategoryChange={onCategoryChange}
        />
    );
}