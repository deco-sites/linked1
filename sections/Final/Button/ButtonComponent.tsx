import React from "react";
import ButtonComponent from "../../../components/ui/Button/index.tsx";
import { WorkLink } from "https://esm.sh/v135/aws-sdk@2.1585.0/clients/all.js";

/**
 * @title {{{title}}}
 */
export interface Props {
    title: string;
    /**
     * @title Texto
     * @description Escreva o texto do botão
     */
    text: string;
    /**
     * @title Link
     * @description Escreva o link de redirecionamento
     */
    link: string;
    /**
     * @title Icone
     * @description Selecione o ícone que deseja
     */
    icon?: string;
    /**
     * @title Botão
     * @description Selecione o tipo de botão que deseja
     */
    buttonTheme?:
        | "Primary dark"
        | "Primary white"
        | "Secondary dark"
        | "Secondary white"
        | "Link dark"
        | "Link white"
        | "Faq"
        | "Nenhuma estilização"
}

export default function Section({
  text = "texto",
  link = "/",
  icon = "",
  buttonTheme = "Primary dark",
}: Props) {
  return (
    <ButtonComponent text={text} icon={icon} link={link} buttonTheme={buttonTheme} />
  );
}
