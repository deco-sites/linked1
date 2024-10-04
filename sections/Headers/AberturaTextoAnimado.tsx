export interface Props {
  /**
   * @title Título
   * @description Escreva aqui o título da abertura
   */
  title?: string;
  /**
   * @title Quebra de Linha
   * @description Escreva aqui a quebra de linha
   */
  WordBreak?: string;
  /**
   * @title Texto com Cor
   * @description Escreva aqui o texto com cor
   */
  TextWithColor?: string;
  /**
   * @title Subtítulo
   * @description Escreva aqui o subtítulo da abertura - Desktop
   */
  subtitleDesktop?: string;
  /**
   * @title Subtítulo
   * @description Escreva aqui o subtítulo da abertura - Mobile
   */
  subtitleMobile?: string;
}

const texts = [
  "Gestão inteligente para economizar",
  "Gestão inteligente para lucrar",
  "Gestão inteligente para sonhar mais"
];

export default function Section({ 
  title = "", 
  WordBreak = "",
  TextWithColor = "",
  subtitleDesktop = "", 
  subtitleMobile = "",
}: Props) {
  // const [currentTextIndex, setCurrentTextIndex] = useState(0);
  // const [animatedText, setAnimatedText] = useState(texts[0]);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentTextIndex((prevIndex: number) => {
  //       const nextIndex = (prevIndex + 1) % texts.length;
  //       setAnimatedText(texts[nextIndex]);
  //       return nextIndex;
  //     });
  //   }, 3000); 

  //   const timeoutId = setTimeout(() => {
  //     navigate('/'); 
  //   }, 9000); 

  //   return () => {
  //     clearInterval(intervalId); 
  //     clearTimeout(timeoutId);
  //   };
  // }, [navigate]);

  return (
    <section className="w-full bg-sacramentoState">
      <div className="ml-4 lg:ml-10 flex flex-col items-left justify-center min-h-screen">
        <div className="w-fit">
          <p className="font-sans text-white font-semibold text-[32px] lg:text-[64px]">
            {title} <br /> {WordBreak} 
            <span className="text-secondary font-semibold">{TextWithColor}</span>
          </p>
        </div>
        <div className="mt-[21px]">
          <p className="block md:hidden text-white-80 text-base font-medium">{subtitleMobile}</p>
          <p className="hidden md:block text-white-80 text-lg font-medium">{subtitleDesktop}</p>
        </div>
        {/* texto animado
        <div className="mt-5">
          <p className="text-white text-xl font-medium">{animatedText}</p>
        </div> */}
      </div>
    </section>
  );
}