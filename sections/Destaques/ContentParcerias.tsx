import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type Item = {
  logo?: ImageWidget;
  description?: string;
};

interface Props {
  /**
   * @title Parceiro
   */
  items?: Item[];
}

export default function Section({ items = [] }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-4">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center max-w-xs text-center">
          {item.logo && (
            <Image
              src={item.logo}
              alt="Partner logo"
              width={150}
              height={150}
              className="mb-4"
            />
          )}
          {item.description && (
            <p className="text-sm">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}