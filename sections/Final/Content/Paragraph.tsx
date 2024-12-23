import React from "react";
import Paragraph from "../../../components/ui/Content/Paragraph/index.tsx";

export interface Props {
  /**
   * @title Texto
   * @description Escreva aqui o seu conteúdo
   */
  content: string;
  colorTheme: "Primary" | "Primary-80" | "Secondary" | "White" | "Accent";
  /**
   * @title Alinhamento
   * @format button-group
   * @options site/loaders/icons.ts
   */
  textAlignment?: "Left" | "Center" | "Right";
}

export default function Section({
  content,
  colorTheme,
  textAlignment,
}: Props) {
  return (
    <Paragraph
      content={content}
      colorTheme={colorTheme}
      alignment={textAlignment}
    />
  );
}
