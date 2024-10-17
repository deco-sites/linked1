import React from 'react';

export interface Props {
  /**
   * @title Texto
   * @description Escreva aqui o seu conteúdo
   */
  content: string;
  /**
   * @title Tipo de Texto
   * @description Selecione o tipo de conteúdo
   */
  type: "Título" | "Parágrafo" | "Big Number" | "Título Médio" | "Lista";
}

export default function Section({ 
  content = "", 
  type = "Parágrafo",
}: Props) {

  return (
    <div>
        <p>{content}</p>
    </div>
  );
}