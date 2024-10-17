import { type Section } from "@deco/deco/blocks";
export interface Props {
    /**
     * @title Título
     * @description Escreva aqui o título
     */
    title: string;
    /**
     * @title Conteúdo
     * @description Insira o conteúdo
     */
    innerSection: Section[];
}
export default function Section({ title = "", innerSection = [], }: Props) {
    return (<div>
        <p>{title}</p>
    </div>);
}
