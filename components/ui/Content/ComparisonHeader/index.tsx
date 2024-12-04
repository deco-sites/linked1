import type { JSX } from "preact";
import Script, { type Props } from "./script.tsx";
import Image from "apps/website/components/Image.tsx";

function ComparisonHeader({ left, right }: JSX.IntrinsicElements["div"] & Props) {
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        {left && (
            <div className="grid gap-8">
                <div className="flex gap-2 items-center">
                    {left.icon && (
                        <Image
                            src={left.icon}
                            alt={left.icon || "Ícone Plano"}
                            width={32}
                            height={32}
                            className="w-8 h-8"
                        />
                    )}
                    {left.title && (
                        <h4 className="text-lg font-semibold text-sacramentoState">{left.title}</h4>
                    )}
                </div>
                <hr />
                {left.description && (
                    <p className="text-base font-light text-sacramentoState-80">{left.description}</p>
                )}
            </div>
        )}
        {right && (
            <div className="grid gap-8">
            <div className="flex gap-2 items-center">
                {right.icon && (
                    <Image
                        src={right.icon}
                        alt={right.icon || "Ícone Plano"}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                )}
                {right.title && (
                    <h4 className="text-lg font-semibold text-sacramentoState">{right.title}</h4>
                )}
            </div>
            <hr />
            {right.description && (
                <p className="text-base font-light text-sacramentoState-80">{right.description}</p>
            )}
            </div>
          )}
      </div>
      <Script />
    </>
  );
}

export default ComparisonHeader;