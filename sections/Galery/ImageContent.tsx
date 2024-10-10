import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type Item = {
  /**
   * @Titulo Imagem Marca
   * @description Adicione a imagem da marca
   */  
  Image: ImageWidget;
};

export interface Props {
  /**
    * @title Items
    * @description Configure cada item do Galery
    */
  items: Item[];
}

export default function Section({ 
   items = [
    {
      Image: ''
    }
  ] 
}: Props) {
    return (
      <section className="h-[232px] bg-[#FE473C] flex items-center justify-center">
        <div className="flex space-x-5 py-[26px] px-0">
        {items.map((item, index) => (
            <Image key={index} className="" src={item.Image || ""} />
        ))}
        </div>
      </section>
    );
}