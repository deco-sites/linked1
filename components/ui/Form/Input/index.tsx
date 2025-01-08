
interface InputComponentProps {
  placeholder?: string;
  onValidate?: (isValid: boolean) => void;
}

function InputComponent({ placeholder, onValidate }: InputComponentProps) {
  const handleChange = (e: Event) => {
    const input = e.target as HTMLInputElement;
    if (onValidate) {
      onValidate(input.value.trim().length > 0);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-[706px]">
          <input
            type="text"
            placeholder={placeholder}
            className="focus:outline-none w-full pb-2 border-b-2 border-sacramentoState text-sacramentoState placeholder:sacramentoState-80 rounded-none"
            onInput={handleChange}
          />
        </div>
      </div>
    </>
  );
}

export default InputComponent;
