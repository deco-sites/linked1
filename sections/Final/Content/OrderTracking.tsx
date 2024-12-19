import React from "react";
import { ImageWidget } from "apps/admin/widgets.ts";
import OrderTracking from "../../../components/ui/Content/OrderTracking/index.tsx";

/**
 * @title {{{title}}}
 */
export interface OrderStatus {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;
    /**
     * @title Subtítulo do Status
     * @description Escreva aqui subtítulo do status do pedido
     */
    subtitleOrderStatus: string;
    /**
     * @title Descrição do Status
     * @description Escreva aqui a descrição do status do pedido
     */
    description: string;
    /**
     * @title Imagem do Status
     * @description Insira aqui a imagem do status do pedido
     */
    imageStatus?: ImageWidget;
}

export interface Props {
    /**
     * @title Conteúdo do Status do Pedido
     */
    order: OrderStatus[];
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

    /**
     * @title Cor do Tema do Ícone de Status
     */
    colorThemeBackgroundIcon:
        | "Primary"
        | "Secondary"
        | "White"
        | "Accent"
        | "Sacramento-State"
        | "Sacramento-State-10"
        | "Mint-Cream";
}

export default function Section(
    { order, colorTheme, colorThemeBackgroundIcon }: Props,
) {
    return (
        <OrderTracking
            order={order}
            colorTheme={colorTheme}
            colorThemeBackgroundIcon={colorThemeBackgroundIcon}
        />
    );
}