import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
interface Item {
    /**
     * @title Tópico
     * @description Escreva o tópico do item
     */
    title: string;
    /**
     * @title Link de Destino
     * @description Escreva aqui o link de destino
     */
    link?: string;
};

/**
 * @title {{{title}}}
 */
interface Box {
    /**
     * @title Título do Bloco
     * @description Escreva o título do bloco
     */
    title: string;
    /**
     * @title Items Comparativos
     * @description Adicione os items de comparação
     */
    items?: Item[];
};

/**
 * @title {{{title}}}
 */
interface Col {
    /**
    * @title Ícone
    * @description Insira o ícone
    */
    icon?: ImageWidget;
    /**
     * @title Título
     * @description Escreva aqui o título da Coluna
     */
    title: string;
    /**
     * @title Descrição
     * @description Escreva aqui a descrição da coluna
     */
    description: string;
    /**
     * @title Blocos
     * @description Adicione blocos a serem comparados
     */
    boxes?: Box[];
    /**
     * @title Preço
     * @description Adicione o preço para comparação
     */
    price?: string;
    /**
     * @title Título do Botão
     * @description Escreva o título do botão
     */
    btnTitle?: string;
    /**
     * @title Link do Botão
     * @description Insira o link de destino do botão
     */
    btnLink?: string;
};

export interface Props {
  /**
   * @title Items
   * @description Configure cada item do Galery
   */
  cols: Col[];
}

export default function Section({ 
  cols = [] 
}: Props) {
  return (
    <div>
        
    </div>
  );
}