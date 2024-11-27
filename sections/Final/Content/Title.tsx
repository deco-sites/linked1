import React from 'react';
import Title from '../../../components/ui/Content/Title/index.tsx';

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
    <Title content={content} colorTheme={colorTheme}  />
  );
}