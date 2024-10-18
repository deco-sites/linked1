export interface Props {
  /**
   * @title Título
   * @description Escreva aqui o título da abertura
   */
  title?: string;
  /**
   * @title Palavra ou Frase com Cor
   * @description Escreva a palavra ou frase com cor
   */
  highlight?: string;
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

// const texts = [
//   "Gestão inteligente para economizar",
//   "Gestão inteligente para lucrar",
//   "Gestão inteligente para sonhar mais"
// ];

export default function Section({ 
  title = "", 
  highlight = "",
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

  const getHighlightedText = (text: string, highlight: string) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === highlight.toLowerCase() ? <span key={index} className="text-secondary">{part}</span> : part
    );
  };

  return (
    <section className="w-full bg-sacramentoState">
      <div className="ml-4 lg:ml-10 flex flex-col items-left justify-center min-h-screen">
        <div className="w-fit pr-[44px]">
          <p className="font-sans text-white font-semibold text-[32px] lg:text-[64px] leading-tight-35 lg:leading-tight-70 tracking-tight-2">
            {getHighlightedText(title, highlight)}
          </p>
        </div>
        <div className="mt-[21px]">
          <p className="block md:hidden pr-[42px] text-white-80 font-sans text-base font-medium leading-tight-18">
            {subtitleMobile}
          </p>
          <p className="hidden md:block text-white-80 font-sans text-lg font-medium leading-tight-25">
            {subtitleDesktop}
          </p>
        </div>
        {/* texto animado
        <div className="mt-5">
          <p className="text-white text-xl font-medium">{animatedText}</p>
        </div> */}
      </div>
    </section>
  );
}