import React from "react";
import Chip from "../../../components/ui/Content/Chip/index.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title {{{title}}}
 */
export interface HiddenImage {
  /**
   * @title Título
   * @description Escreva aqui o título do bloco
   */
  title: string;
  /**
   * @title Imagem
   * @description Insira a imagem que ficará escondida
   */
  hoverImage: ImageWidget;
}

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
  /**
   * @title Imagem
   * @description Insira a imagem que ficará escondida
   */
  hiddenImage?: HiddenImage;

  colorTheme: "Primary" | "Secondary";
}

export interface Props {
  tags: Chip[];
}

export default function Section({
  tags,
}: Props) {
  return (
    <div className="flex justify-center px-4 pb-[65px]">
      <div className="flex flex-wrap justify-start md:justify-center gap-x-2 gap-y-2 lg:gap-y-[17px] w-full max-w-[350px] md:max-w-[780px]">
        {tags?.map((tag) => (
          <Chip
            name={tag.name}
            url={tag.url}
            icon={tag.icon}
            hiddenImage={tag.hiddenImage}
            colorTheme={tag.colorTheme}
          />
        ))}
      </div>
    </div>
  );
}