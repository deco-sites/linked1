import type { JSX } from "preact";
// import Script, { type Props } from "./script.tsx";

function InputComponent({ placeholder }: JSX.IntrinsicElements["div"]) {
  return (
    <>
        <div className="flex justify-center">
            <div className="w-full max-w-[706px]">
                <input type="text" placeholder={placeholder} className="focus:outline-none w-full pb-2 border-b-2 border-sacramentoState text-sacramentoState placeholder:sacramentoState-80 rounded-none" />
            </div>
        </div>
        {/* <Script /> */}
    </>
  );
}

export default InputComponent;