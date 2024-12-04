import React from "react";
import NewsCard from "../../../components/ui/Content/NewsCard/index.tsx";
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
  /**
   * @title Logo
   * @description Insira a logo do bloco
   */
  logo: ImageWidget;
  /**
   * @title Botão
   * @description Insira o texto do botão
   */
  button?: string;
  /**
   * @title Descrição do bloco
   * @description Escreva a descrição do bloco
   */
  description: string;
}

interface Props {
  /**
   * @title Conteúdo
   */
  items?: Item[];
  /**
   * @title Botão
   * @description Insira o texto do botão
   */
  buttonMore?: string;
  /**
   * @title Ícone
   * @description Insira o ícone do botão
   */
  iconButton?: ImageWidget;

  colorTheme:
    | "Primary"
    | "Secondary"
    | "White"
    | "Light"
    | "Sacramento-State"
    | "Sacramento-State-10"
    | "Mint-Cream";

  colorThemeButton:
    | "Primary"
    | "Secondary"
    | "White"
    | "Light"
    | "Sacramento-State"
    | "Sacramento-State-10"
    | "Mint-Cream";
}

export default function Section({
  items = [],
  buttonMore = "",
  iconButton,
  colorTheme,
  colorThemeButton,
}: Props) {
  return (
    <NewsCard
      items={items}
      buttonMore={buttonMore}
      iconButton={iconButton}
      colorTheme={colorTheme}
      colorThemeButton={colorThemeButton}
    />
  );
}
