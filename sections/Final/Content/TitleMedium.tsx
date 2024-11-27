import React from 'react';
import TitleMedium from '../../../components/ui/Content/TitleMedium/index.tsx';

export interface Props {
  /**
   * @title Texto
   * @description Escreva aqui o seu conteúdo
   */
  content: string;
  colorTheme: "Primary" | "Secondary" | "White" | "Light"
}

export default function Section({ 
  content, 
  colorTheme
}: Props) {

  return (
    <TitleMedium content={content} colorTheme={colorTheme}  />
  );
}