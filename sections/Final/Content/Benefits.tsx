import React from "react";
import Benefits from "../../../components/ui/Content/Benefits/index.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
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
export interface Benefits {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;
    /**
     * @title Ícone do Benefício
     * @description Ícone do benefício do plano
     */
    iconBenefit?: ImageWidget;
    /**
     * @title Subtítulo Benefício
     * @description Insira o subtítulo do benefício
     */
    subTitleBenefit?: string;
    /**
     * @title Descrição do Benefício
     * @description Insira a descrição falando sobre o benefício
     */
    descriptionBenefit?: string;
    /**
     * @title Ícone (Fechado)
     * @description Ícone exibido quando o collapse está fechado
     * @conditional collapse.enable
     */
    closedIcon?: ImageWidget;
    /**
     * @title Ícone (Aberto)
     * @description Ícone exibido quando o collapse está aberto
     * @conditional collapse.enable
     */
    openIcon?: ImageWidget;
    /**
     * @title Conteúdo
     */
    sections?: Item[];
}

export interface Props {
    /**
     * @title Conteúdo da Dúvida
     */
    benefits: Benefits[];

    collapse?: {
        /**
         * @title Ativar Collapse
         * @description Habilitar comportamento de colapso
         */
        enable?: boolean;
    };

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

export default function Section({
    benefits,
    collapse,
    colorTheme,
}: Props) {
    return (
        <Benefits
            benefits={benefits}
            collapse={collapse}
            colorTheme={colorTheme}
        />
    );
}
