import React from "react";
import Title from "../../../components/ui/Content/Title/index.tsx";

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
  colorTheme: "Primary" | "Secondary" | "White" | "Accent";
}

export default function Section({
  content,
  textAlignment,
  colorTheme,
}: Props) {
  return (
    <Title content={content} color={colorTheme} alignment={textAlignment} />
  );
}
