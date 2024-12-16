import { ImageWidget } from "apps/admin/widgets.ts";
import ComparisonHeader from "../../../components/ui/Content/ComparisonHeader/index.tsx";
import ComparisonBody from "../../../components/ui/Content/ComparisonBody/index.tsx";
import ComparisonFooter from "../../../components/ui/Content/ComparisonFooter/index.tsx";
import ButtonComponent from "../../../components/ui/Button/index.tsx";


export interface ContentHeader {
  /**
   * @title Icone
   * @description Icone do Plano
   */
  icon?: ImageWidget;
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Descrição
   * @description Escreva aqui a descrição do plano
   */
  description?: string;
}

export interface ContentFooter {
  /**
   * @title Valor
   * @description Escreva aqui o valor do plano
   */
  price?: string;
  /**
   * @title Descrição do Botão
   * @description Escreva aqui o texto do botão
   */
  button?: {
    /**
     * @title Texto
     * @description Escreva o texto do botão
     */
    text: string;
    /**
     * @title Link
     * @description Escreva o link de redirecionamento
     */
    link: string;
    /**
     * @title Icone
     * @description Selecione o ícone que deseja
     */
    icon?: string;
    /**
     * @title Botão
     * @description Selecione o tipo de botão que deseja
     */
    buttonTheme?:
        | "Primary dark"
        | "Primary white"
        | "Secondary dark"
        | "Secondary white"
        | "Link dark"
        | "Link white"
        | "Faq"
        | "Nenhuma estilização"
  }
}

/**
 * @title {{{title}}}
 */
export interface Body {
  /**
   * @title Tópico de Comparação
   */
  title?: string;
}

export interface ContentBody {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;

  /**
   * @title Items da Esquerda
   * @description Escreva aqui os tópicos para a coluna da esquerda
   */
  contentLeft?: Body[];

  /**
   * @title Items da Direita
   * @description Escreva aqui os tópicos para a coluna da direita
   */
  contentRight?: Body[];
}

export interface Props {
  /**
   * @title Sobre o item comparado a esquerda
   * @description Insira as informações que seram comparadas na coluna da esquerda.
   */
  headerLeft?: ContentHeader;

  /**
   * @title Sobre o item comparado a direita
   * @description Insira as informações que seram comparadas na coluna da direita.
   */
  headerRight?: ContentHeader;

  /**
   * @title Bloco de Comparação
   */
  content?: ContentBody[];

  /**
   * @title Ação para item comparado a esquerda
   * @description Insira as informações que seram comparadas na coluna da esquerda.
   */
  footerLeft?: ContentFooter;

  /**
   * @title Ação para item comparado a direita
   * @description Insira as informações que seram comparadas na coluna da direita.
   */
  footerRight?: ContentFooter;
}

export default function Section({
  headerLeft,
  headerRight,
  footerLeft,
  footerRight,
  content,
}: Props) {
  return (
    <section className="flex justify-center">
      <div className="relative w-full max-w-[706px]">
        <div className="px-4 pt-[47px] pb-[64px] flex justify-center items-center gap-6">
          <div
            className={`grid gap-[64px]`}
          >
            <ComparisonHeader left={headerLeft} right={headerRight} />
            <ComparisonFooter left={footerLeft} right={footerRight} />

            {/* Content Body Section */}
            {Array.isArray(content) &&
              content.map((body) => <ComparisonBody body={body} />)}

          </div>
        </div>
      </div>
    </section>
  );
}
