import type { JSX } from "preact";
// import Script, { type Props } from "./script.tsx";

function InputRadioComponent({ text, name, inputRadio }: JSX.IntrinsicElements["div"]) {
  return (
    <>
    <div className="flex justify-center">
      <div className="w-full max-w-[706px] grid gap-6">
          <p className="text-lg text-sacramentoState font-semibold">{text}</p>
          
          {inputRadio.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                  <input hidden type="radio" name={name} id={name + '-' + item.label + '-' + index} className="peer"/>
                  <svg className="cursor-pointer peer-checked:hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <circle cx="8" cy="8.5" r="7.5" stroke="#003330" stroke-opacity="0.1"/>
                  </svg>
                  
                  <svg className="hidden cursor-pointer peer-checked:block" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8.5" r="7.5" stroke="#003330"/>
                    <circle cx="8" cy="8.5" r="5" fill="#3BEDB2"/>
                  </svg>
                  <label for={name + '-' + item.label + '-' + index} className="cursor-pointer">{item.label}</label>
              </div>
          ))}
      </div>
    </div>
      {/* <Script /> */}
    </>
  );
}

export default InputRadioComponent;