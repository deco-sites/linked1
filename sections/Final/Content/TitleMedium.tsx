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
  content,
  colorTheme,
  textAlignment
}: Props) {
  return <TitleMedium content={content} colorTheme={colorTheme} alignment={textAlignment} />;
}
