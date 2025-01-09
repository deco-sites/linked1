import React from "react";
import InputRadioComponent from "../../../components/ui/Form/InputRadio/index.tsx";

export interface InputRadio {
  /**
   * @title Etiqueta
   * @description Escreva a etiqueta do input
   */
  label: string;
}

export interface Props {
  /**
   * @title Texto
   * @description Escreva o título
   */
  text: string;
  /**
   * @title Nome do formulário
   * @description Escreva o nome do formulário (Necessário que seja um nome único no site)
   */
  name: string;
  /**
   * @title Input
   * @description Escreva o título
   */
  inputRadio: InputRadio[];
}

export default function Section({
  text,
  name,
  inputRadio,
}: Props) {
  return (
    <InputRadioComponent
      text={text}
      name={name}
      inputRadio={inputRadio}
    />
  );
}
