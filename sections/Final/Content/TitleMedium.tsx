import React from "react";
import TitleMedium from "../../../components/ui/Content/TitleMedium/index.tsx";

export interface Props {
  /**
   * @title Texto
   * @description Escreva aqui o seu conteúdo
   */
  content: string;
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
}: Props) {
  return <TitleMedium content={content} colorTheme={colorTheme} />;
}
