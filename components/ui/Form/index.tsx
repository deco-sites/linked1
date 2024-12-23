import InputRadioComponent from "./InputRadio/index.tsx";
import InputComponent from "./Input/index.tsx";

interface Section {
  Component: any;
  props: Record<string, any>;
}

function LoadComponent({ Component, props }: Section) {
  return <Component {...props} />;
}

export default function FormComponent({ sections }: { sections: Section[] }) {
  return (
    <div className="flex justify-center">
      <div className="h-dvh grid grid-rows-[80px_1fr_96px] w-full max-w-[706px]">
        <div className="px-4 grid grid-cols-[32px_minmax(137px,_1fr)_32px] items-center">
          <button className="cursor-pointer">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0531 16L19.7731 11.28C20.0214 11.0302 20.1608 10.6923 20.1608 10.34C20.1608 9.98777 20.0214 9.64983 19.7731 9.40001C19.6491 9.27504 19.5017 9.17585 19.3392 9.10816C19.1767 9.04047 19.0024 9.00562 18.8264 9.00562C18.6504 9.00562 18.4761 9.04047 18.3137 9.10816C18.1512 9.17585 18.0037 9.27504 17.8798 9.40001L12.2264 15.0533C12.1015 15.1773 12.0023 15.3248 11.9346 15.4872C11.8669 15.6497 11.832 15.824 11.832 16C11.832 16.176 11.8669 16.3503 11.9346 16.5128C12.0023 16.6753 12.1015 16.8227 12.2264 16.9467L17.8798 22.6667C18.0043 22.7903 18.1521 22.888 18.3146 22.9544C18.477 23.0207 18.651 23.0544 18.8264 23.0533C19.0019 23.0544 19.1759 23.0207 19.3383 22.9544C19.5008 22.888 19.6485 22.7903 19.7731 22.6667C20.0214 22.4169 20.1608 22.0789 20.1608 21.7267C20.1608 21.3744 20.0214 21.0365 19.7731 20.7867L15.0531 16Z"
                fill="#003330"
              />
            </svg>
          </button>
          <div className="flex justify-center items-center">
            <div className="w-full max-w-[137px] h-[5px] bg-gray-200 rounded-full">
              <div
                className="h-[5px] bg-darkMintCream rounded-full"
                style={{
                  width: `${100 / sections.length}%`,
                }}
              >
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 h-full overflow-auto">
          {sections.map((item, index) => (
            <div key={index} className="transition-opacity duration-300 block">
              <div>
                <LoadComponent {...item} />

                {item.Component === InputComponent && (
                  <InputComponent {...item.props} />
                )}
                {item.Component === InputRadioComponent && (
                  <InputRadioComponent
                    text={item.props.text || "Título padrão"}
                    name={item.props.name || "nome-padrão"}
                    inputRadio={item.props.inputRadio || [
                      { label: "Opção 1" },
                      { label: "Opção 2" },
                    ]}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
