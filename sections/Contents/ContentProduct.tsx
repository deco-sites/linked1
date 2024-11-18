import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface Link {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Nome
   * @description Nome visível para clique
   */
  name: string;
  /**
   * @title Destino
   * @description Insira a url ou o caminho de destino
   */
  url: string;
};

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
   * @title Ícone
   * @description Escolha o ícone da categoria
   */
  icon: ImageWidget;
  /**
   * @title Subtítulo
   * @description Digite aqui o subtítulo
   */
  subTitle?: string;
  /**
   * @title Descrição
   * @description Insira a descrição desejada
   */
  description?: string;
  /**
   * @title Botão
   * @description Insira o botão desejado
   */
  button?: Link[];
}

export interface Props {
  /**
   * @title Itens
   * @description Insira os itens desejados
   */
  items: Item[];
}

export default function Section({ 
  items = [] 
}: Props) {
  return (
    <section className="ml-4 mr-4 mb-10 bg-white">
      {items.map((item, index) => (
        <div
          key={index}
          className={`mb-8 ${index !== items.length - 1 ? 'border-b border-sacramentoState-10' : 'pb-[168.33px]'}`}
        >
          <div className={`flex ${index === 0 ? 'pt-10' : ''}`}>
            {item.icon && (
              <Image
                className=""
                src={item.icon || ""}
                alt="Ícone"
                width={64}
              />
            )}
          </div>
          <div className="pt-4 pb-2 text-[22px] font-sans text-sacramentoState">
            {item.subTitle && (
              <h2 className="font-sans text-[22px] font-medium leading-tight-25 tracking-tight-2">{item.subTitle}</h2>
            )}
          </div>
          <div className="pb-[32px] pr-[80px]">
            {item.description && (
              <p className="text-base font-sans text-sacramentoState-80 font-normal leading-tight-18">{item.description}</p>
            )}
          </div>
          <div className="w-fit py-[12.5px] mb-10 md:flex bg-white-80 rounded-xl border-[1px] border-sacramentoState items-center justify-center gap-4">
            {item.button?.map((btn: Link, btnIndex: number) => (
              <a
                key={btnIndex}
                href={btn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-max px-[31.75px] flex-none font-sans text-base font-medium leading-tight-18"
              >
                {btn.name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}