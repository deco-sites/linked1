/**
 * @title {{{title}}}
 */
export interface Result {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  title: string;
  /**
   * @title Grande Número
   * @description Digite o valor de destaque
   */
  number: string;
  /**
   * @title Descrição
   * @description Fale sobre o grande número
   */
  description: string;
}

export interface Props {
  /**
   * @title Título
   * @description Escreva aqui o título do bloco
   */
  SectionTitle: string;
  /**
   * @title Resultados
   * @description Insira os resultados
   */
  results: Result[];
}

export default function Section({
  SectionTitle = "",
  results = [],
}: Props) {
  return (
    <section className="bg-sacramentoState">
      <div className="pl-4 pt-[74px]">
        <div className="pb-[47px] w-full max-w-[343px] text-start">
          <p className="text-[22px] font-sans font-semibold leading-tight-25 tracking-tight-0.44 text-mintCream">
            {SectionTitle}
          </p>
        </div>
        {results.map((item, index) => (
          <div key={index} className="">
            <div className="w-full max-w-[375px]">
              <p className="text-left text-7xl font-thin leading-tight-72 tracking-tight-2 pb-[23px] text-mintCream">
                {item.number}
              </p>
              <div className="w-full max-w-[242px]">
                <p
                  className={`text-left text-base leading-tight-18 text-mintCream ${
                    index === results.length - 1 ? "pb-[136px]" : "pb-[23px]"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
