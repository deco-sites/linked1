import React from 'react';
import Chip from '../../../components/ui/Content/Chip/index.tsx';
import { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title {{{name}}}
 */
export interface Chip {

  /**
   * @title Nome
   * @description Escreva aqui o nome da categoria
   */
  name: string;
  /**
   * @title Destino
   * @description Insira a url ou o caminho de destino
   */
  url: string;
  /**
   * @title Ícone
   * @description Escolha a o ícone da categoria
   */
  icon: ImageWidget;

  colorTheme: "Primary" | "Secondary"

}

export interface Props {
  tags: Chip[] 
}

export default function Section({ 
  tags, 
}: Props) {

  return (

    <div className="flex justify-start lg:justify-center pl-4 lg:pt-[79px]">
      <div className="flex flex-wrap justify-start lg:justify-center gap-x-[8px] gap-y-[8px] lg:gap-y-[17px] w-full max-w-[350px] lg:max-w-[780px]">
        {tags?.map(tag => (
            <Chip 
              name={tag.name}
              url={tag.url}
              icon={tag.icon}
              colorTheme={tags.colorTheme}
            />
        ))}
      </div>
    </div>
  );
}