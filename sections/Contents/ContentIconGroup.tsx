import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
interface Icon {
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
};

export interface Props {
  /**
   * @title Items
   * @description Configure cada item do Galery
   * @minItems 1
   * @maxItems 8
   */
  icons: Icon[];
}

export default function Section({ 
  icons = [] 
}: Props) {
  return (
    <div>
        
    </div>
  );
}