import React from "react";
import Chip from "../../../components/ui/Content/Chip/index.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  /**
   * @title Alinhamento
   * @description Selecione o alinhamento
   */
  contentAlign:
    | "Vertical"
    | "Horizontal";
}

export default function Section({
  contentAlign = "Vertical",
}: Props) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[706px] flex justify-center py-3">
        {contentAlign == "Vertical" && (
          <span className="block w-[1px] h-[111px] bg-sacramentoState-40">
          </span>
        )}
        {contentAlign == "Horizontal" && (
          <span className="block h-[1px] w-full bg-white"></span>
        )}
      </div>
    </div>
  );
}
