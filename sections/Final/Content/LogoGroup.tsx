import { ImageWidget } from "apps/admin/widgets.ts";
import LogoGroup from "../../../components/ui/Content/LogoGroup/index.tsx";

/**
 * @title {{{title}}}
 */
export interface Logos {
  /**
   * @title Nome da Categoria
   * @description Nome da categoria a qual o logo pertence
   */
  category: string;

  /**
   * @title Nome do Logo
   * @description Título do logo
   */
  title: string;

  /**
   * @title Imagem
   * @description Adicione o Logotipo
   */
  logo: ImageWidget;
}

/**
 * @title {{{title}}}
 */
export interface Props {
  /**
   * @title Título
   * @description Escreva aqui o seu Título
   */
  title: string;

  /**
   * @title Imagem
   * @description Adicione o Logotipo
   */
  logos: Logos[];

  colorTheme: "Primary" | "Secondary" | "White" | "Light";
}

export default function Section({
  title = "",
  logos = [],
  colorTheme,
}: Props) {
  return <LogoGroup title={title} logos={logos} colorTheme={colorTheme} />;
}
