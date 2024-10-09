import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Página
   * @description Escreva aqui o título da página
   */
  page: string;
  /**
   * @title Descrição
   * @description Escreva a descrição do oferecimento
   */
  offer?: string;
  /**
   * @title Oferecido pela marca
   * @description Insira o logo da marca
   */
  brandOffer?: ImageWidget;
}

export default function Section({ 
    page = "", 
    offer = "",
    brandOffer = "",
}: Props) {
    return (
        <section className="">
            <div>
                <div className="py-[26.51px] w-full flex bg-sacramentoState items-center justify-between">
                    <p className="pl-4 text-mono text-white-80 text-[11px]">{page}</p>
                    <div className="flex-1"></div>
                    <div className="pr-4 inline-flex items-center space-x-2">
                        <p className="text-mono text-white-80 text-[11px]">{offer}</p>
                        {brandOffer && (
                            <Image
                                className="ml-2"
                                src={brandOffer || ""}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}