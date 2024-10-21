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
};

export interface Props {
  /**
   * @title Título
   * @description Escreva aqui o título do bloco
   */
  SectionTitle: string,
  /**
   * @title Resultados
   * @description Insira os resultados
   */
  results: Result[];
}

export default function Section({ 
  SectionTitle = '',
  results = [] 
}: Props) {

  return (
    <section className="bg-sacramentoState">
      <div className="pt-[74px]">
        <p className="pb-[77px] text-center font-sans leading-tight-35 tracking-tight-2 text-[32px] text-mintCream">{SectionTitle}</p>
        {results.map((item, index) => (
          <div key={index} className="pl-4">
            <div className="!pr-[103px]">
              <p className="text-left text-7xl font-thin leading-tight-72 tracking-tight-2 pb-[23px] text-mintCream">
                {item.number}
              </p>
              <p className={`text-left text-base leading-tight-18 text-mintCream ${index === results.length - 1 ? 'pb-[136px]' : 'pb-[23px]'}`}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}