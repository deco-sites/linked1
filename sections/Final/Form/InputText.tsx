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
}

export default function Section({
  placeholder = "texto",
}: Props) {
  return (
    <div>
      <InputComponent placeholder={placeholder} />
    </div>
  );
}
