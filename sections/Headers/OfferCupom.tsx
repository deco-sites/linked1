import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Content {
  /**
   * @title Ícone da Oferta
   * @description Faça upload da imagem que será exibida no ícone de oferta
   */
  image?: ImageWidget;
  /**
   * @title Texto
   * @description Insira o texto para o ícone
   */
  offerText?: string;
  /**
   * @title Descrição da Oferta
   * @description Forneça uma breve descrição para a oferta selecionada.
   */
  descriptionOffer?: string;
}

export interface Props {
  content: Content;
  /**
   * @title Ícone de Sair (X)
   * @description Insira o ícone de fechar conteúdo (X)
   */
  iconOutX?: ImageWidget;
}

export default function Section({
  content,
  iconOutX = "",
}: Props) {
  return (
    <section className="bg-mintCream">
      <div className="relative px-4 py-4 flex flex-col md:justify-center md:items-center">
        <div className="flex justify-between items-center">
          <div className="px-2 py-2 flex gap-x-[4px] rounded-md bg-sacramentoState">
            {content.image && (
              <Image
                src={content.image}
                alt="Ícone da Oferta"
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
            )}

            <div className="text-center">
              <p className="text-sm font-sans font-normal text-secondary">
                {content.offerText}
              </p>
            </div>
          </div>

          <div className="flex-1"></div>

          {iconOutX && (
            <div className="absolute right-4 cursor-pointer">
              <Image
                src={iconOutX}
                alt="Ícone de Saída"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
            </div>
          )}
        </div>

        {content.descriptionOffer && (
          <div className="pt-2 w-full max-w-[244px] text-start md:text-center">
            <p className="text-sm font-sans font-normal text-sacramentoState">
              {content.descriptionOffer}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
