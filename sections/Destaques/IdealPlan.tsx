/**
 * @title {{{title}}}
 */
export interface ContentItem {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
    /**
     * @title Título
     * @description Escreva aqui o título do item
     */
    titleItem?: string;
  };
  
  export type Props = {
    items?: ContentItem[];
  };
  
  export default function Section({
    items = []
  }: Props) {
    return (
      <section className="w-full bg-mintCream">
        <div className="pt-[95px] justify-center">
          {items.map((item, index) => (
            <div key={index} className="pl-[64.5px] pr-[59.5px]">
              <h2 className="text-[32px] font-sans font-medium text-sacramentoState leading-tight-35 lg:leading-tight-55 tracking-tight-2 text-center">
                {item.titleItem}
              </h2>
            </div>
          ))}
        </div>
        <div className="pt-[17px] pb-[54px] flex justify-center items-center">
          <div className="w-0 h-[111px] border-r-2 border-sacramentoState-40"></div>
        </div>
      </section>
    );
  }