import type { JSX } from "preact";
import Image from "apps/website/components/Image.tsx";

function LogoGroupComponent(
  { title, logos }: JSX.IntrinsicElements["div"] & Props,
) {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[706px] grid gap-4 p-4 pt-10 md:p-0 md:py-10 bg-white">
          <p className="text-base font-normal text-sacramentoState">{title}</p>
          <div className="grid grid-cols-3 gap-[11px]">
            {logos.map((item) => (
              <div className="border rounded-xl">
                <Image
                  className=""
                  src={item.logo || ""}
                  alt="Ícone"
                  width={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoGroupComponent;
