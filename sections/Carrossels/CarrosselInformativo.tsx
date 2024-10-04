import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type Item = {
  /**
   * @title Título
   * @description Escreva aqui o título do item
   */
  title: string;
  /**
   * @title Quebra de Linha
   * @description Escreva aqui a quebra de linha
   */
  description: string;
    /**
   * @title Descrição
   * @description Escreva aqui a descrição do item
   */
  wordBreak: string;
  /**
   * @title Imagem
   * @description Escolha a imagem do item
   */
  image: ImageWidget;
};

export interface Props {
  /**
   * @title Items
   * @description Configure cada item do carrossel
   */
  items: Item[];
}

export default function Section({ 
  items = [
    {
      title: '',
      description: '',
      wordBreak: '',
      image: ''
    }
  ] 
}: Props) {

  return (
    <section className="w-full pb-[178.23px] bg-sacramentoState">
      <div className="">
        <div className="swiper-container">
          <div className="swiper-wrapper inline-flex">
            {items.map((item, index) => (
              <div className="swiper-slide w-fit mr-5 ml-4 lg:ml-10" key={index}>
                <article className="w-fit pt-[26px] flex flex-col border-t-2 border-white-20">
                  <p className="text-mintCream pt-[22.8px] text-left">{item.title}</p>
                  <div className="flex space-x-5 py-[26px] px-0">
                    <Image className="" src={item.image || ""} />
                  </div>
                  <div className="w-fit pl-0">
                    <p className="w-fit text-mintCream">{item.description} <br /> {item.wordBreak}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}