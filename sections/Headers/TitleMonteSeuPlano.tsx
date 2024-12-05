import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @title Ícone de Compartilhamento
   * @description Insira o ícone de compartilhamento aqui
   */
  logo?: ImageWidget;
  /**
   * @title Título
   * @description Escreva o nome do plano
   * @default Monte o plano ideal
   */
  title: string;
  /**
   * @title Título com Cor
   * @description Escreva o nome do plano com cor
   */
  titleWithColor?: string;
  /**
   * @title Descrição Curta
   * @description Escreva um pouco sobre o plano
   * @default Cada estabelecimento tem suas particularidades. Por isso a Linked Tech permite que você monte a plataforma do jeito que faz sentido para seu negócio.
   */
  description: string;
}

export default function Section({
  logo = "",
  title = "",
  titleWithColor = "",
  description = "",
}: Props) {
  return (
    <section className="bg-sacramentoState">
      <div className="px-4 pt-4 flex items-center justify-between">
        <div>
          <svg
            className="md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 12H5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 19L5 12L12 5"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-sm font-sans font-normal leading-tight-15.86 text-white-80 hidden md:block md:invisible">
            Ambiente seguro
          </p>
        </div>

        {logo && (
          <Image
            src={logo || ""}
            width={20}
            className="w-[120px] md:w-[174px]"
          />
        )}

        <div className="hidden md:block">
          <p className="text-sm font-sans font-normal leading-tight-15.86 text-white-80">
            Ambiente seguro
          </p>
        </div>
      </div>
      <div className="w-full flex md:justify-center">
        <div className="w-full max-w-[300px] md:max-w-[739px] grid gap-3 p-4 pt-10 md:p-10">
          <p className="md:text-center text-[32px] text-white font-sans font-normal leading-tight-35 tracking-tight-2">
            {title} <span className="text-secondary">{titleWithColor}</span>
          </p>
          <p className="md:text-center text-[13.5px] text-white-80 font-sans font-normal leading-tight-15.86">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
