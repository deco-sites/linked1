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
    <section className="pt-[70px] bg-sacramentoState">
      <div className="pl-4 pb-12">
        <p className="text-white-80 text-[11px] font-mono font-normal leading-tight-14">
          {subtitle}
        </p>
        <p className="pt-2 text-white text-[28px] font-sans font-normal leading-tight-32 tracking-tight-2">
          {title} <br /> <span className="text-secondary">{titleWithColor}</span>
        </p>
      </div>
    </section>
  );
}
