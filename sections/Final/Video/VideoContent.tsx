/**
 * @title Vídeo
 * @description Adicione um vídeo ao seu site
 */
export interface VideoProps {
    /**
     * @title URL do vídeo
     * @description Insira o caminho ou URL do vídeo
     */
    videoUrl: string;
  
    /**
     * @title Texto alternativo
     * @description Texto descritivo exibido caso o vídeo não carregue
     */
    altText?: string;
  
    /**
     * @title Autoplay
     * @description Iniciar o vídeo automaticamente?
     * @default false
     */
    autoplay?: boolean;
  
    /**
     * @title Controles
     * @description Mostrar controles de reprodução?
     * @default true
     */
    controls?: boolean;
  
    /**
     * @title Repetir
     * @description Reproduzir o vídeo em loop?
     * @default false
     */
    loop?: boolean;
  
    /**
     * @title Silenciar
     * @description Iniciar o vídeo sem som?
     * @default false
     */
    muted?: boolean;
  
    /**
     * @title Poster do vídeo
     * @description Imagem que será exibida antes do vídeo carregar
     */
    poster?: string;
  }
  
  export default function Video({
    videoUrl,
    altText = "Seu navegador não suporta vídeos.",
    autoplay = false,
    controls = true,
    loop = false,
    muted = false,
    poster,
  }: VideoProps) {
    return (
      <div className="video-container">
        <video
          className="w-full h-auto"
          src={videoUrl}
          poster={poster}
          autoPlay={autoplay}
          controls={controls}
          loop={loop}
          muted={muted}
        >
          {altText}
        </video>
      </div>
    );
  }
  