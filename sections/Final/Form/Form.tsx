import React from "react";
import FormComponent from "../../../components/ui/Button/index.tsx";

/**
 * @title {{{title}}}
 */
export interface Input {
    title: string;
    /**
     * @title Texto
     * @description Escreva o texto do input
     */
    placeholder: string;
    /**
     * @title ID
     * @description Selecione o texto do input
     */
    id_input: string;
}
/**
 * @title {{{title}}}
 */
export interface Props {
    title: string;
    input: Input;
}

export default function Section({
}: Props) {
  return (
    <FormComponent />
  );
}
