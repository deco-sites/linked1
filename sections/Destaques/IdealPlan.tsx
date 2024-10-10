export type ContentItem = {
    /**
     * @title Título
     * @description Escreva aqui o título do item
     */
    title?: string;
  };
  
  export type Props = {
    items?: ContentItem[];
  };
  
  export default function Section({
    items = [
      {
        title: ''
      }
    ]
  }: Props) {
    return (
      <section className="w-full bg-mintCream">
        <div className="pt-[95px] justify-center">
          {items.map((item, index) => (
            <div key={index} className="pl-[64.5px] pr-[59.5px]">
              <h2 className="text-[32px] text-sans font-medium text-sacramentoState text-center">{item.title}</h2>
            </div>
          ))}
        </div>
        <div className="pt-[17px] pb-[54px] flex justify-center items-center">
            <div className="w-0 h-[111px] border-r-2 border-sacramentoState-40"></div>
        </div>
      </section>
    );
  }