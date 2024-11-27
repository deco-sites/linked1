import React from 'react';
import Paragraph from '../../../components/ui/Content/Paragraph/index.tsx';

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
    <Paragraph content={content} colorTheme={colorTheme}  />
  );
}