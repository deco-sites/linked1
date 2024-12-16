import React from "react";
import Conection from "../../../components/ui/Content/Conection/index.tsx";

export interface Props {
  /**
   * @title Texto
   * @description Escreva aqui o seu conteúdo
   */
  content: string;

  /**
   * @title Cor do Fundo Superior
   */
  topBackground: "Primary" | "Secondary" | "White" | "Light";

  /**
   * @title Cor do Fundo Inferior
   */
  bottomBackground: "Primary" | "Secondary" | "White" | "Light";

  /**
   * @title Cor do Fundo do Círculo
   */
  circleBackground: "Primary" | "Secondary" | "White" | "Light";

  /**
   * @title Cor do Texto no Círculo
   */
  colorText: "Primary" | "Secondary" | "White" | "Accent";
}

export default function Section({
  content,
  topBackground,
  bottomBackground,
  circleBackground,
  colorText,
}: Props) {
  return (
    <Conection
      content={content}
      topBackground={topBackground}
      bottomBackground={bottomBackground}
      circleBackground={circleBackground}
      colorText={colorText}
    />
  );
}
