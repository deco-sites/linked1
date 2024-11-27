import { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title {{{title}}}
 */

export interface Item {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;
    icon?: ImageWidget;
    header?: string;
    content?: string;
    subContent?: string[];
    iconArrays?: ImageWidget[];
    button?: string;
}

interface Props {
    /**
     * @title CollapseContent
     */
    items?: Item[];
}

export default function Section({
    items = [],
}: Props) {}