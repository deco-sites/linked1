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
   * @title Título da seção
   * @description Insira o título da seção
   */  
  title: string;  
  /**
   * @title Itens
   * @description Insira os itens desejados
   */
  items: Item[];
}

export default function Section({ 
    title = '',
    items = [] 
  }: Props) {
    return (
      <section className="pl-4 bg-sacramentoState">
        {title && (
          <h1 className="pt-10 pb-10 pr-[120px] text-[28px] font-medium text-white leading-tight-32 tracking-tight-2">
            {title}
          </h1>
        )}
  
        {items.map((item, index) => (
          <div
            key={index}
            className={`${index !== items.length - 1 ? 'border-b border-sacramentoState-10' : 'pb-10'}`}
          >
        <div className={`flex ${index === 0 ? 'pt-10' : 'pt-[81px]'}`}>
            {item.icon && (
              <Image
                className=""
                src={item.icon || ""}
                alt="Ícone"
                width={64}
              />
            )}
          </div>
            <div className="pt-4 pb-2">
              {item.subTitle && (
                <h2 className="font-sans text-[22px] font-semibold text-white leading-tight-25 tracking-tight-2">{item.subTitle}</h2>
              )}
            </div>
            <div className="pb-[32px] pr-[80px]">
              {item.description && (
                <p className="text-base font-sans text-white-80 font-normal leading-tight-18">{item.description}</p>
              )}
            </div>
            <div className="w-fit py-[12.5px] md:flex bg-sacramentoState rounded-xl border-[1px] border-secondary items-center justify-center gap-4">
              {item.button?.map((btn: Link, btnIndex: number) => (
                <a
                  key={btnIndex}
                  href={btn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-max px-[31.75px] flex-none font-sans text-base font-semibold text-secondary leading-tight-18"
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