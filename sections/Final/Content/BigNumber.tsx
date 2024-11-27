import React from 'react';
import BigNumber from '../../../components/ui/Content/BigNumber/index.tsx';

export interface Props {
  /**
   * @title Texto
   * @description Escreva aqui o seu conteúdo
   */
  number: string;
  description: string;
  colorTheme: "Primary" | "Secondary" | "White" | "Light"
}

export default function Section({ 
    number, 
    description, 
    colorTheme
}: Props) {

  return (
    <BigNumber number={number} description={description} colorTheme={colorTheme}  />
  );
}