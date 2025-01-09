import React from "react";
import { ImageWidget } from "apps/admin/widgets.ts";
import OptionalCollappseComponent from "../../../components/ui/Content/OptionalCollappse/index.tsx";
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
export interface Optional {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Ícone da Marca
   * @description Ícone da marca no collapse
   */
  iconBrand?: ImageWidget;
  /**
   * @title Nome da Marca
   * @description Insira o nome da marca
   */
  brandNameSubtitle?: string;
  /**
   * @title Ícone (Fechado)
   * @description Ícone exibido quando o collapse está fechado
   */
  closedIcon?: ImageWidget;
  /**
   * @title Ícone (Aberto)
   * @description Ícone exibido quando o collapse está aberto
   */
  openIcon?: ImageWidget;
  /**
   * @title Conteúdo
   */
  sections?: Item[];
}

export interface Props {
  /**
   * @title Conteúdo de Opcional
   */
  optional: Optional[];
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
  { optional, colorTheme }: Props,
) {
  return (
    <OptionalCollappseComponent
      optional={optional}
      colorTheme={colorTheme}
    />
  );
}
