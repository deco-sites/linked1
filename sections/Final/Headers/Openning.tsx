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
  // /**
  //  * @title Subtítulo
  //  * @description Escreva aqui o subtítulo da abertura - Desktop
  //  */
  // subtitleDesktop?: string;
  /**
   * @title Subtítulo
   * @description Escreva aqui o subtítulo da abertura
   */
  subtitleDescription?: string;
}

// const texts = [
//   "Gestão inteligente para economizar",
//   "Gestão inteligente para lucrar",
//   "Gestão inteligente para sonhar mais"
// ];

export default function Section({
  title = "",
  highlight = "",
  // subtitleDesktop = "",
  subtitleDescription = "",
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

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase()
        ? <span key={index} className="text-accent">{part}</span>
        : part
    );
  };

  return (
    <section className="bg-sacramentoState h-[80vh] flex">
      <div className="ml-4 md:ml-10 w-full flex flex-col items-start justify-center">
        <div className="w-full max-w-[289px] md:max-w-[548px]">
          <p className="font-sans text-white font-medium text-[32px] lg:text-[64px] leading-tight-35 lg:leading-tight-70 tracking-tight-2">
            {getHighlightedText(title, highlight)}
          </p>
        </div>
        <div className="pt-[10px] md:pt-[21px] max-w-[320px] md:max-w-none w-full">
          <p className="text-base md:text-lg font-sans font-normal leading-tight-18 md:leading-tight-25 text-white-80">
            {subtitleDescription}
          </p>
          {
            /*  <p className="hidden md:block text-white-80 font-sans font-normal leading-tight-25">
                {subtitleDesktop}
              </p>
            */
          }
        </div>
        {
          /* texto animado
          <div className="mt-5">
            <p className="text-white text-xl font-normal">{animatedText}</p>
          </div> */
        }
      </div>
    </section>
  );
}
