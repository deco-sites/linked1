import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title {{{title}}}
 */
export interface Item {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Logo
   * @description Insira a logo do bloco
   */
  logo?: ImageWidget;
  /**
   * @title Descrição do bloco
   * @description Escreva a descrição do bloco
   */
  description?: string;
}

interface Props {
  /**
   * @title Parceiro
   */
  items?: Item[];
}

export default function Section({
  items = [],
}: Props) {
  return (
    <section>
      <div className="px-4 flex flex-wrap justify-center">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center border-b border-sacramentoState-10 ${
              index === items.length - 1 ? "mb-[65.6px]" : ""
            }`}
          >
            {item.logo && (
              <Image
                src={item.logo}
                width={343}
                height={232}
                className="pt-10 w-full"
              />
            )}
            {item.description && (
              <p className="pt-[12.8px] pb-10 font-sans text-base font-normal leading-tight-18 text-sacramentoState">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
