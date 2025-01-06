import React from "react";
import CustomDropdown from "../../../components/ui/Content/CustomDropdown/index.tsx";

export interface DropdownOption {
  label: string;
  value: string;
}

export interface Props {
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
export default function Section({
  placeholder,
  options,
  backgroundColor,
  textColor,
  hoverColor,
}: Props) {
  return (
    <CustomDropdown
      placeholder={placeholder}
      options={options}
      backgroundColor={backgroundColor}
      textColor={textColor}
      hoverColor={hoverColor}
    />
  );
}