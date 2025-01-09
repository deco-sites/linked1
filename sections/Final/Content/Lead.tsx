import React from "react";
import Lead from "../../../components/ui/Content/Lead/index.tsx";

/**
 * @title {{{title}}}
 */
export interface Title {
  title: string;
  /**
   * @title Texto
   * @description Escreva aqui o seu conteúdo
   */
  content: string;
  /**
   * @title Alinhamento
   * @format button-group
   * @options site/loaders/icons.ts
   */
  textAlignment?: "Left" | "Center" | "Right";
  colorTheme: "Primary" | "Secondary" | "White" | "Accent";
}

/**
 * @title {{{title}}}
 */
export interface Button {
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
    | "Nenhuma estilização";

  /**
   * @title Tamanho do botão
   * @description Selecione o tamanho do botão
   */
  tamanho?:
    | "Máximo (100%)"
    | "Mínimo (Tamanho do conteúdo)";
}

export interface Props {
  /**
   * @title Texto
   * @description Escreva aqui o seu conteúdo
   */
  title: Title;
  /**
   * @title Input de Telefone
   */
  placeholder: string;
  /**
   * @title Botão
   * @description Selecione as opções de botão
   */
  button: Button;
}

export default function Section({
  title,
  placeholder,
  button,
}: Props) {
  return (
    <Lead
      title={title}
      placeholder={placeholder}
      button={button}
    />
  );
}
