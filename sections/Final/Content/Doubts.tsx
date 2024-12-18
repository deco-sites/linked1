import React from "react";
import { ImageWidget } from "apps/admin/widgets.ts";
import DoubtsComponent from "../../../components/ui/Content/Doubts/index.tsx";
import { Section } from "deco/blocks/section.ts";

/**
 * @title {{{title}}}
 */
export interface Item {
    title: string;
    /**
     * @title Conteúdo
     */
    section: Section;
}

/**
 * @title {{{title}}}
 */
export interface Doubts {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;
    /**
     * @title Subtítulo da Dúvida
     * @description Escreva aqui subtítulo da dúvida
     */
    subtitleDoubtAppear: string;
    /**
     * @title Descrição da Dúvida
     * @description Escreva aqui a descrição da dúvida
     */
    descriptionHiddenDoubt: string;
    /**
     * @title Conteúdo
     */
    sections?: Item[];
}

export interface Props {
    /**
     * @title Conteúdo da Dúvida
     */
    doubt: Doubts[];
    /**
     * @title Cor do Tema
     */
    colorTheme:
        | "Primary"
        | "Secondary"
        | "White"
        | "Accent"
        | "Sacramento-State"
        | "Sacramento-State-10"
        | "Mint-Cream";
}

export default function Section(
    { doubt, colorTheme }: Props,
) {
    return (
        <DoubtsComponent
            doubt={doubt}
            colorTheme={colorTheme}
        />
    );
}