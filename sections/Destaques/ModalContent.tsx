import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type Tag = {
  /**
   * @title Nome
   * @description Escreva aqui o nome da categoria
   */
  name: string;
  /**
   * @title Destino
   * @description Insira a url ou o caminho de destino
   */
  url: string;
  /**
   * @title Ícone
   * @description Escolha a o ícone da categoria
   */
  icon: ImageWidget;
};

export type QuestionItem = {
  /**
   * @title Título do Bloco
   * @description Escreva o título do bloco
   */
  description?: string;
  /**
   * @title Respostas
   * @description Lista de respostas para a pergunta
   * @format array
   */
  answer?: string[];
};

export type RadioButtonOption = {
  /**
   * @title Opção de Horário
   * @description Escreva uma opção de horário
   */
  label: string;
  /**
   * @title Valor
   * @description Um valor único para esta opção
   */
  value: string;
};

export interface Item {
  icon?: ImageWidget;
  header?: string;
  question?: QuestionItem[];
  descritiveQuestion?: string[];
  radioButton?: RadioButtonOption[];
  tags?: Tag[];
  /**
   * @title Ícone do Botão
   * @description Selecione um ícone SVG ou PNG para o botão
   */
  buttonIcon?: ImageWidget;
  /**
   * @title URL do Botão
   */
  buttonUrl?: string;
}

interface Props {
  /**
   * @title Modal Content
   */
  items?: Item[];
}

export default function Section({
  items = [],
}: Props) {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="mb-8 bg-white shadow-md rounded-lg p-6">
          {item.icon && (
            <Image src={item.icon} alt="Item Icon" width={40} height={40} class="w-10 h-10 mb-4" />
          )}

          {item.header && <p className="text-lg mb-4">{item.header}</p>}
          {item.question && (
            <div className="space-y-4">
              {item.question.map((q, qIndex) => (
                <div key={qIndex}>
                  <h3 className="font-semibold">{q.description}</h3>
                  {q.answer?.map((ans, ansIndex) => (
                    <div key={ansIndex} className="mt-2">
                      <div
                        contentEditable
                        className="w-full p-2 border-b border-gray-300"
                        style={{ minHeight: "1.5rem", whiteSpace: "nowrap" }}
                        dangerouslySetInnerHTML={{
                          __html: ans || "",
                        }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
          {item.descritiveQuestion && <p className="text-lg mb-4">{item.descritiveQuestion}</p>}
          <div className="flex justify-start lg:justify-center pl-4 lg:pt-[79px]">
            <div className="flex flex-wrap justify-start lg:justify-center gap-x-[8px] gap-y-[8px] lg:gap-y-[17px] w-full max-w-[350px] lg:max-w-[780px]">
              {item.tags?.map(tag => (
                <div key={tag.name} className="w-fit sm:w-1/2 lg:w-fit rounded-[58px] inline-flex px-4 py-3 bg-mintCream font-sans font-medium text-primary items-center">
                  <div className="inline-flex items-center">
                    <Image
                      className="w-4 h-4"
                      src={tag.icon || ""}
                      alt={tag.name}
                      width={10.67}
                    />
                    <a href={tag.url} className="text-md md:text-lg pl-2 pr-[1.5px] font-sans font-medium leading-tight-18">
                      {tag.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {item.radioButton && (
            <div className="mt-4 space-y-2">
              {item.radioButton.map((option, optionIndex) => (
                <label key={optionIndex} className="flex items-center">
                  <input
                    type="radio"
                    name={`radio-group-${index}`}
                    className="form-radio h-5 w-5 text-blue-600"
                    value={option.value}
                  />
                  <span className="ml-2">{option.label}</span>
                </label>
              ))}
            </div>
          )}
          {item.buttonIcon && item.buttonUrl && (
            <div className="mt-4 flex justify-end">
              <a href={item.buttonUrl} className="inline-block">
                <Image
                  src={item.buttonIcon}
                  alt="Button Icon"
                  width={40}
                  height={40}
                  class="w-10 h-10"
                />
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}