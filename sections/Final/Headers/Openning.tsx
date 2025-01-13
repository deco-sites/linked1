import React from "react";
import Openning from "../../../components/ui/Content/Openning/index.tsx";
import { Section } from "deco/blocks/section.ts";

/**
 * @title {{{title}}}
 */
export interface Open {
  /**
   * @title Título
   * @description Escreva aqui o título da abertura
   */
  title?: string;
  /**
   * @title Palavra ou Frase com Cor
   * @description Escreva a palavra ou frase com cor
   */
  highlight?: string;
  /**
   * @title Subtítulo
   * @description Escreva aqui o subtítulo da abertura
   */
  subtitleDescription?: string;
}

export interface Props {
  /**
   * @title Título Principal
   * @description Escreva aqui o título principal da seção
   */
  title?: string;
  /**
   * @title Títulos de Abertura
   * @description Lista de títulos de abertura com suas propriedades
   */
  open?: Open[];
}

export default function Section({
  title = "",
  open = [],
}: Props) {
  return (
    <Openning
      title={title}
      open={open}
    />
  );
}