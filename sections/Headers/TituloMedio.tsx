export interface Props {
  /**
   * @title Título
   * @description Escreva aqui o título
   */
  title?: string;
}

export default function Section({ 
    title = "", 
}: Props) {

  return (
    <section class="bg-sacramentoState">
      <div class="pl-4 pt-24 pr-[69px] pb-6">
          <p className="text-[28px] text-white font-medium text-sans">{title}</p>
      </div>
    </section>
  );
}
