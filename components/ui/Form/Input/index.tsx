
interface InputComponentProps {
  name?: string;
  placeholder?: string;
}

function InputComponent(
  { name, placeholder }: InputComponentProps,
) {

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-[706px]">
          <input
            data-campo={name}
            type="text"
            placeholder={placeholder}
            className="focus:outline-none w-full pb-2 border-b-2 border-sacramentoState text-sacramentoState placeholder:sacramentoState-80 rounded-none"
          />
        </div>
      </div>
    </>
  );
}

export default InputComponent;
