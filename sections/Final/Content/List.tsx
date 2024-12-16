import React from "react";
import List from "../../../components/ui/Content/List/index.tsx";

export interface Props {
  /**
   * @title Texto
   * @description Escreva aqui o seu conteúdo
   */
  items: string[];
  colorTheme: "Primary" | "Secondary" | "White" | "Accent";
}

export default function Section({
  items,
  colorTheme,
}: Props) {
  return <List items={items} colorTheme={colorTheme} />;
}
