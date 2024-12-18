import React from "react";
import Clients from "../../../components/ui/Content/Clients/index.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title {{{title}}}
 */
export interface Clients {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;
    /**
     * @title Ícone do Cliente
     */
    iconClient?: ImageWidget;
    /**
     * @title Nome
     * @description Insira o nome do cliente
     */
    name?: string;
    /**
     * @title Tipo
     * @description Insira o tipo de cliente
     */
    type?: string;
    /**
     * @title Cidade/Estado
     * @description Insira a cidade e/ou estado do cliente
     */
    cityUf?: string;
}

export interface Props {
    /**
     * @title Conteúdo da Dúvida
     */
    clients: Clients[];
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
    clients,
    colorTheme,
}: Props) {
    return (
        <Clients
            clients={clients}
            colorTheme={colorTheme}
        />
    );
}