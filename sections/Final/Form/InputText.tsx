import React from "react";
import InputComponent from "../../../components/ui/Form/Input/index.tsx";

/**
 * @title {{{title}}}
 */
export interface Props {
  title: string;
  /**
   * @title Texto
   * @description Escreva o texto do input
   */
  placeholder: string;
  /**
   * @title Chave
   * @description Escreva o identificador do campo
   */
  name: string;
}

export default function Section({
  placeholder = "texto",
  name = "name",
}: Props) {
  return (
    <div>
      <InputComponent placeholder={placeholder} name={name} />
    </div>
  );
}
