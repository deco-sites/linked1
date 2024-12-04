import React from 'react';
import Title from '../../../components/ui/Content/Title/index.tsx';

export interface Props {
  /**
   * @title Texto
   * @description Escreva aqui o seu conteúdo
   */
  content: string;
  colorTheme: "Primary" | "Secondary" | "White" | "Light"
  /**
   * @title Alinhamento
   * @description Selecione o tipo de alinhamento que deseja
   */
  align: "left" | "center" | "right" | "justify"
}

export default function Section({ 
  content, 
  colorTheme,
  align
}: Props) {

  return (
    <Title content={content} colorTheme={colorTheme} align={align} />
  );
}