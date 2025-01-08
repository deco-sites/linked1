import React from "react";
import TitleMedium from "../../../components/ui/Content/TitleMedium/index.tsx";

export interface Props {
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
  /**
   * @title Tema de Cor
   * @description Escolha o tema de cor do texto
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
   * @title Tema de Cor (Background)
   * @description Escolha o tema de cor de fundo
   */
  colorThemeBg:
    | "Primary"
    | "Secondary"
    | "White"
    | "Accent"
    | "Sacramento-State"
    | "Sacramento-State-10"
    | "Mint-Cream";
  /**
   * @title Tamanho da Fonte
   * @description Escolha o tamanho da fonte (22px, 28px ou 32px)
   * @format select
   * @default 28px
   */
  fontSize?: "22px" | "28px" | "32px";
  /**
   * @title Largura do Contêiner
   * @description Escolha como o contêiner será exibido: Largura Limitada (290px), Largura Limitada (327px), Largura Limitada (343px) ou largura completa.
   * @format select
   * @default Largura Limitada (290px)
   */
  containerWidth?:
    | "Largura Limitada (290px)"
    | "Largura Limitada (327px)"
    | "Largura Limitada (343px)"
    | "Largura Completa";
  /**
   * @title Alinhamento do Conteúdo
   * @description Alinhe o conteúdo dentro do contêiner.
   * @format select
   * @default Start
   */
  contentAlignment?: "Start" | "Center" | "End";
  /**
   * @title Espaçamento Superior
   * @description Defina o espaçamento do contêiner.
   * @format select
   * @default Espacamento (91px)
   */
  paddingTop?:
    | "Espacamento (40px)"
    | "Espacamento (91px)"
    | "Espaçamento (95px)";
}

export default function Section({
  content,
  colorTheme,
  colorThemeBg,
  textAlignment,
  fontSize = "28px",
  containerWidth = "Largura Limitada (290px)",
  contentAlignment = "Start",
  paddingTop = "Espacamento (91px)",
}: Props) {
  return (
    <TitleMedium
      content={content}
      colorTheme={colorTheme}
      colorThemeBg={colorThemeBg}
      alignment={textAlignment}
      fontSize={fontSize}
      containerWidth={containerWidth}
      contentAlignment={contentAlignment}
      paddingTop={paddingTop}
    />
  );
}
