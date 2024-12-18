import { useSignal } from "@preact/signals";

interface DropdownOption {
  label: string;
  value: string;
}

interface Props {
  /**
   * @format rich-text
   */
  placeholder?: string;
  options?: DropdownOption[];
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  textColor?: string;
  /**
   * @format color-input
   */
  hoverColor?: string;
}

function CustomDropdown({
  placeholder = "Selecione uma opção",
  options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ],
  backgroundColor = "#ffffff",
  textColor = "#000000",
  hoverColor = "#f0f0f0",
}: Props) {
  const isOpen = useSignal(false);
  const selectedOption = useSignal<DropdownOption | null>(null);

  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };

  const handleOptionClick = (option: DropdownOption) => {
    selectedOption.value = option;
    isOpen.value = false;
  };

  return (
    <div className="relative inline-block text-left w-64">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          style={{
            backgroundColor,
            color: textColor,
          }}
          onClick={toggleDropdown}
        >
          {selectedOption.value ? selectedOption.value.label : placeholder}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen.value && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <a
                key={option.value}
                href="#"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
                style={{
                  color: textColor,
                  backgroundColor: hoverColor,
                }}
                role="menuitem"
                onClick={(e) => {
                  e.preventDefault();
                  handleOptionClick(option);
                }}
              >
                {option.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomDropdown;