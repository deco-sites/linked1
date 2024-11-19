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
   * @title Título Mobile
   * @description Escreva aqui o título do bloco no mobile
   */
  SectionTitleMobile?: string,
  /**
   * @title Título Desktop
   * @description Escreva aqui o título do bloco no desktop
   */
  SectionTitleDesktop?: string,
  /**
   * @title Resultados
   * @description Insira os resultados
   */
  results: Result[];
}

export default function Section({ 
  SectionTitleMobile = '',
  SectionTitleDesktop = '',
  results = [] 
}: Props) {

  return (
    <section className="bg-sacramentoState">
      <div className="pt-[74px] md:flex">
        <div className="block md:hidden pb-[77px] ">
          <p className="text-center font-sans leading-tight-35 tracking-tight-2 text-[32px] text-mintCream">
            {SectionTitleMobile}
          </p>
        </div>
        <div className="hidden md:block md:pr-[197px] md:pl-10">
          <p className="font-sans text-[30px] leading-tight-34 tracking-tight-0.6 text-center md:text-start text-mintCream">
            {SectionTitleDesktop}
          </p>
        </div>
        <div className="md:grid md:grid-cols-2">
          {results.map((item, index) => (
            <div key={index} className="pl-4">
              <div className="!pr-[103px] grid gap-y-[23px] md:gap-y-[26px] md:pr-0">
                <div>
                  <p className="text-left text-7xl md:text-[110px] font-thin leading-tight-100 tracking-tight-2.2 text-mintCream">
                    {item.number}
                  </p>
                </div>
                <div className={`${index === results.length - 1 ? 'pb-[136px] md:pb-[202px]' : 'pb-[23px] md:pb-[92px]'}`}>
                  <p className="text-left text-base leading-tight-18 text-mintCream">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}