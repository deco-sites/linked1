import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type Link = {
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

export type ContentItem ={
  image?: ImageWidget;
  /**
   * @title Título
   * @description Escreva aqui o título do item
   */
  title?: string;

  icon?: ImageWidget;

  ContentDetails?: ContentDetails[];
}

export type ContentDetails = {
  Image?: ImageWidget;

  /**
   * @title Título
   * @description Escreva aqui o título do item
   */
  contentDescription?: string[];

  /**
   * @title Formatter Icon
   * @description Icons for formatting
   */
  formatterIcon?: string[];
};

export type Item = {
  /**
   * @title Título
   * @description Escreva aqui o título do item
   */
  title?: string;

  /**
* @subdescription subDescription
* @description Escreva aqui o subDescriçao do item
*/
  informationStep?: string;

  /**
   * @subtitle subTitulo
   * @description Escreva aqui o subtítulo do item
   */
  subTitle?: string;

  /**
 * @subdescription subDescription
 * @description Escreva aqui o subDescriçao do item
 */
  subDescription?: string;

  contentItem?: ContentItem[];

  contentDetails?: ContentDetails[];
  
  button?: Link[];
};

interface Props {
  /**
 * @title Items
 * @description Tutorial
 */
  items?: Item[];
}

export default function Section({ items }: Props) {
  return (
    <section>
      {items?.map((item: Item, index: number) => (
        <div key={index}>
          {item.title && <h1>{item.title}</h1>}
          {item.subTitle && <h2>{item.subTitle}</h2>}
          {item.informationStep && <p>{item.informationStep}</p>}
          {item.subDescription && <p>{item.subDescription}</p>}

          {item.contentItem?.map((content, idx) => (
            <div key={idx}>
              {content.image && <img src={content.image} alt={content.title} />}
              {content.icon && <img src={content.icon} alt="Icon" />}
              {content.title && <h3>{content.title}</h3>}
            </div>
          ))}

          {item.contentDetails?.map((detail, idx) => (
            <div key={idx}>
              {detail.formatterIcon?.map((icon, i) => (
                <img key={i} src={icon} alt={`Icon ${i}`} />
              ))}
              {detail.contentDescription?.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>
          ))}

          {item.button?.map((btn, idx) => (
            <a key={idx} href={btn.url}>
              {btn.name}
            </a>
          ))}
        </div>
      ))}
    </section>
  );
}