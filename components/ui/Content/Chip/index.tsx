import type { JSX } from "preact";
import Image from "apps/website/components/Image.tsx";

function Chip({
  name,
  url,
  icon,
  hiddenImage,
  colorTheme,
}: JSX.IntrinsicElements["div"] & Props) {
  return (
    <div className="relative w-fit inline-flex items-center group">
      <div className="px-4 py-3 flex gap-x-2 items-center bg-mintCream text-sacramentoState hover:lg:bg-sacramentoState hover:lg:text-darkMintCream rounded-[58px] z-10 transition-all duration-300 ease-in-out">
        <Image
          className="w-4 h-4"
          src={icon || ""}
          alt={name}
          width={10.67}
        />
        <a
          href={url}
          className="text-md md:text-lg font-sans font-medium leading-tight-18"
        >
          {name}
        </a>
      </div>
      {hiddenImage && (
        <div className="hidden lg:block w-[374px] h-[374px] absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 scale-75 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out">
          <Image
            src={hiddenImage.hoverImage || ""}
            alt={`Imagem para ${name}`}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      )}
    </div>
  );
}

export default Chip;
