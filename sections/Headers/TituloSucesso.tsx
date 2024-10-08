export interface Props {
  /**
   * @title Título
   * @description Escreva aqui o título de sucesso
   */
  title?: string;
  /**
   * @title Título com Cor
   * @description Escreva aqui o título de sucesso com cor
   */
  titleWithColor?: string;
  /**
   * @title Subtítulo
   * @description Escreva aqui o subtítulo
   */
  subtitle?: string;
}

export default function Section({ 
    title = "", 
    subtitle = "", 
    titleWithColor = "",
}: Props) {

  return (
    <section className="pt-[180px] bg-sacramentoState">
      <div className="pl-4 pb-12">
          <p className="text-white-80 text-[11px] text-mono font-normal">{subtitle}</p>
          <p className="pt-2 text-white text-[28px] text-sans font-medium">{title} <br /> <span className="text-secondary">{titleWithColor}</span></p>
      </div>
    </section>
  );
}
