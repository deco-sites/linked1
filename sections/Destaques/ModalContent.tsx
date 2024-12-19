import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export type Button = {
  /**
   * @title Ícone do Botão
   * @description Selecione um ícone SVG ou PNG para o botão
   */
  buttonIcon?: ImageWidget;
  /**
   * @title URL do Botão
   */
  buttonUrl?: string;
  /**
   * @title
   * @description Escreva aqui o nome da categoria
   */
  buttonDescription?: string;
};

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
   * @title Opção
   * @description Escreva uma opção
   */
  label: string;
  /**
   * @title Valor
   * @description Um valor único para esta opção
   */
  value: string;
};

export type checkBoxOption = {
  /**
   * @title Opção
   * @description Escreva uma opção
   */
  label: string;
  /**
   * @title Valor
   * @description Um valor único para esta opção
   */
  value: string;
};

export type urlButton = {
  /**
   * @title URL Título
   * @description Insira o título para o link
   */
  urlTitle?: string;
  url?: string;
};

export interface Item {
  icon?: ImageWidget;
  header?: string;
  question?: QuestionItem[];
  descritiveQuestion?: string[];
  radioButton?: RadioButtonOption[];
  checkBoxButton?: checkBoxOption[];
  tags?: Tag[];
  urlButton?: urlButton[];
  button?: Button[];
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
    <div>
      <div className="grid grid-cols-[32px_minmax(137px,_1fr)_32px] items-center justify-between gap-4 px-4 py-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M15.0531 16L19.7731 11.28C20.0214 11.0302 20.1608 10.6923 20.1608 10.34C20.1608 9.98777 20.0214 9.64983 19.7731 9.40001C19.6491 9.27504 19.5017 9.17585 19.3392 9.10816C19.1767 9.04047 19.0024 9.00562 18.8264 9.00562C18.6504 9.00562 18.4761 9.04047 18.3137 9.10816C18.1512 9.17585 18.0037 9.27504 17.8798 9.40001L12.2264 15.0533C12.1015 15.1773 12.0023 15.3248 11.9346 15.4872C11.8669 15.6497 11.832 15.824 11.832 16C11.832 16.176 11.8669 16.3503 11.9346 16.5128C12.0023 16.6753 12.1015 16.8227 12.2264 16.9467L17.8798 22.6667C18.0043 22.7903 18.1521 22.888 18.3146 22.9544C18.477 23.0207 18.651 23.0544 18.8264 23.0533C19.0019 23.0544 19.1759 23.0207 19.3383 22.9544C19.5008 22.888 19.6485 22.7903 19.7731 22.6667C20.0214 22.4169 20.1608 22.0789 20.1608 21.7267C20.1608 21.3744 20.0214 21.0365 19.7731 20.7867L15.0531 16Z" fill="#003330"/>
        </svg>
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[137px] h-[5px] bg-sacramentoState-10 rounded-full after:w-[50px] after:h-[5px] after:bg-[#3BEDB2] after:rounded-full after:block"></div>
        </div>
      </div>
      <div className="px-4 py-6 max-w-4xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="grid gap-12">
            {/* {item.icon && (
              <Image
                src={item.icon}
                alt="Item Icon"
                width={40}
                height={40}
                class="w-10 h-10 mb-4"
              />
            )} */}

            {item.header && ( 
              <div className="grid gap-2">
                <p className="text-sm font-light text-primary">Me Liga</p>
                <p className="text-2xl font-semibold text-primary">{item.header}</p>
              </div>
            )}

            {item.question && (
              <div className="space-y-4">
                {item.question.map((q, qIndex) => (
                  <div key={qIndex}>
                    <h3 className="font-semibold">{q.description}</h3>
                    {q.answer?.map((ans, ansIndex) => (
                      // <div key={ansIndex} className="mt-2">
                      //   <div
                      //     contentEditable
                      //     className="w-full pb-2 border-b border-sacramentoState text-sacramentoState placeholder:sacramentoState-80"
                      //     style={{ minHeight: "1.5rem", whiteSpace: "nowrap" }}
                      //     dangerouslySetInnerHTML={{
                      //       __html: ans || "",
                      //     }}
                      //   />
                      // </div>
                      <input type="text" placeholder={ans} className="focus:outline-none w-full pb-2 border-b-2 border-sacramentoState text-sacramentoState placeholder:sacramentoState-80" />
                    ))}
                  </div>
                ))}
              </div>
            )}
            {item.descritiveQuestion && (
              <p className="text-lg mb-4">{item.descritiveQuestion}</p>
            )}
            <div className="flex justify-start lg:justify-center pl-4 lg:pt-[79px]">
              <div className="flex flex-wrap justify-start lg:justify-center gap-x-[8px] gap-y-[8px] lg:gap-y-[17px] w-full max-w-[350px] lg:max-w-[780px]">
                {item.tags?.map((tag) => (
                  <div
                    key={tag.name}
                    className="w-fit sm:w-1/2 lg:w-fit rounded-[58px] inline-flex px-4 py-3 bg-mintCream font-sans font-medium text-primary items-center"
                  >
                    <div className="inline-flex items-center">
                      <Image
                        className="w-4 h-4"
                        src={tag.icon || ""}
                        alt={tag.name}
                        width={10.67}
                      />
                      <a
                        href={tag.url}
                        className="text-md md:text-lg pl-2 pr-[1.5px] font-sans font-medium leading-tight-18"
                      >
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
            {item.checkBoxButton && (
              <div className="mt-4 space-y-2">
                {item.checkBoxButton.map((option, optionIndex) => (
                  <label key={optionIndex} className="flex items-center">
                    <input
                      type="checkbox"
                      name={`checkbox-group-${index}`}
                      className="form-checkbox h-5 w-5 rounded border-gray-300 text-green-500 focus:ring-green-500"
                      value={option.value}
                    />
                    <span className="ml-2">{option.label}</span>
                  </label>
                ))}
              </div>
            )}
            {item.urlButton &&
              item.urlButton.map((urlBtn, urlIndex) => (
                <div className="mt-4">
                  <a
                    key={urlIndex}
                    href={urlBtn.url}
                    className="text-black underline"
                  >
                    {urlBtn.urlTitle}
                  </a>
                </div>
              ))}
            {item.button && (
              <div className="mt-4 flex flex justify-end">
                {item.button.map((option) => (
                  <div className="flex items-center">
                    <span className="mr-2">{option.buttonDescription}</span>
                    <a href={option.buttonUrl} className="inline-block">
                      <Image
                        src={option.buttonIcon ? option.buttonIcon : ""}
                        alt="Button Icon"
                        width={40}
                        height={40}
                        class="w-10 h-10"
                      />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
