import type { JSX } from "preact";
import Image from "apps/website/components/Image.tsx";

function LogoGroupComponent(
  { title, logos, selectedCategory }:
    & JSX.IntrinsicElements["div"]
    & Props
    & { selectedCategory: string },
) {
  const filteredLogos = selectedCategory
    ? logos.filter((item) => item?.category === selectedCategory)
    : logos;

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[706px] grid gap-4 p-4 pt-10 md:p-0 md:py-10 bg-white">
        <p className="text-base font-normal text-sacramentoState">{title}</p>
        <div
          className={`grid grid-cols-3 gap-[11px] ${
            filteredLogos.length === 0 ? "justify-center" : ""
          }`}
        >
          {filteredLogos.length > 0
            ? (
              filteredLogos.map((item, index) => (
                <div key={index} className="border rounded-xl">
                  <img
                    className="w-full h-auto"
                    src={item.logo || ""}
                    alt={item.title || "Logo"}
                  />
                </div>
              ))
            )
            : (
              <p className="text-center col-span-3 text-sacramentoState">
                Nenhum logo encontrado para a categoria selecionada.
              </p>
            )}
        </div>
      </div>
    </div>
  );
}

export default LogoGroupComponent;