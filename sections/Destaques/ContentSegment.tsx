import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { VideoWidget } from "apps/admin/widgets.ts";

export interface Item {
  title?: string;
  icon?: ImageWidget;
  description?: string;
  videoWidget?: VideoWidget;
}

interface Props {
  /**
   * @title Segmento
   */
  items?: Item[];
}

export default function Section({ items = [] }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center max-w-xs text-center"
        >
          {item.icon && (
            <Image
              src={item.icon}
              alt="Partner logo"
              width={150}
              height={150}
              className="mb-4"
            />
          )}
          {item.description && <p className="text-sm">{item.description}</p>}
        </div>
      ))}
    </div>
  );
}
