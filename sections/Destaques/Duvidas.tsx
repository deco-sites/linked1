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
  /**
   * @title Ícone
   * @description URL do ícone opcional
   */
  iconButton?: ImageWidget;
};

export interface Props {
    /**
     * @title Ícone de Dúvida
     * @description Insira o ícone de dúvida aqui
     */
    icon: ImageWidget;
    /**
     * @title Título
     * @description Escreva o título do bloco
     */
    title: string;
    /**
     * @title Botão
     * @description Insira o botão
     */
    button?: Link[];
}

export default function Section({ 
    icon = "", 
    title = "",
    button = []
}: Props) {

  return (
    <section className="bg-mintCream">
      <div className="">
        <div className="pt-[96px] pb-4 flex justify-center">
          {icon && (
            <Image
              className="w-[32px] h-[32px]"
              src={icon || ""}
              width={32}
            />
          )}
        </div>
        <p className="pb-[32px] text-[28px] text-sacramentoState font-sans leading-tight-32 lg:leading-tight-55 tracking-tight-2 font-medium text-center">
          {title}
        </p>
      </div>

      <div className="pb-24 px-4 flex flex-col rounded-xl items-center justify-center space-y-4">
        {button?.map((btn, index) => (
          <div key={index} className="w-full flex justify-center">
            <a
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full px-4 py-3 flex-none ${
                index === 0
                  ? 'bg-transparent border-[1px] border-sacramentoState rounded-xl text-center text-sacramentoState'
                  : 'bg-sacramentoState rounded-xl text-secondary flex items-center pr-2.5 justify-center'
              }`}
            >
              <span className="font-sans text-base font-semibold text-center leading-tight-18 lg:leading-tight-21 lg:leading-tight-55 lg:tracking-tight-2">
                {btn.name}
              </span>
              {index === 1 && btn.iconButton && (
                <img src={btn.iconButton} alt="WhatsApp Icon" className="w-6 h-6 ml-2.5" />
              )}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
