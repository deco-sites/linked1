import type { JSX } from "preact";
import Image from "apps/website/components/Image.tsx";
import Script, { type Props } from "./script.tsx";

// Implemente a seção
function setClass(value) {
  switch (value) {
    case "Primary":
        return 'text-primary'
        break;

    case "Secondary":
        return 'text-secondary'
        break;

    case "White":
        return 'text-white'
        break;

    case "Light":
        return 'text-light'
        break;
  
    default:
        return 'text-primary'
        break;

  }
  return;
}

function LogoGroupComponent({ title, logos, colorTheme }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[706px] grid gap-4 p-4 pt-10 md:p-0 md:py-10 bg-white">
                <p className="text-base font-normal text-sacramentoState">{title}</p>
                <div className="flex flex-wrap gap-3">
                    {logos.map((item, index) => (
                        <div className="border rounded-xl">
                            <Image
                            className=""
                            src={item.logo || ""}
                            alt="Ícone"
                            width={64}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Script />
    </>
  );
}

export default LogoGroupComponent;