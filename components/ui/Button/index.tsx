import type { JSX } from "preact";
// import { ImageWidget } from "apps/admin/widgets.ts";
// import Image from "apps/website/components/Image.tsx";
// import IconComponent from "../Icons/IconGrid.tsx";
// import Script, { type Props } from "./script.tsx";


// | "Primary dark"
// | "Primary white"
// | "secondary dark"
// | "secondary white"
// | "link dark"
// | "link white"
// | "fab"

function setClass(value) {
    switch (value) {
      case "Primary dark":
        return "bg-accent text-primary border border-accent py-2.5 px-5 md:py-[14px] md:px-[22px] text-center justify-center";
  
      case "Primary white":
        return "bg-primary text-accent border border-primary py-2.5 px-5 md:py-[14px] md:px-[22px] text-center justify-center";
  
      case "Secondary dark":
        return "bg-transparent text-accent border border-accent py-2.5 px-5 md:py-[14px] md:px-[22px] text-center justify-center";

      case "Secondary white":
        return "bg-transparent text-primary border border-primary py-2.5 px-5 md:py-[14px] md:px-[22px] text-center justify-center";
  
      case "Link dark":
        return "text-accent underline text-center";

      case "Link white":
        return "text-primary underline text-center";

      case "Faq":
        return "bg-accent border border-accent h-[56px] w-[56px] md:h-[64px] md:w-[64px] rounded-full flex items-center justify-center text-center";

      case "Nenhuma estilização":
        return "";
  
      default:
        return "";
    }
}

function ButtonComponent({ text, link, icon, buttonTheme }: JSX.IntrinsicElements["div"]) {
  return (
    <>
        <a href={link} className={`${setClass(buttonTheme)} flex gap-3  rounded-[10px] text-base md:text-lg font-semibold`}>
            {text}{icon}
        </a>
        {/* <Script /> */}
    </>
  );
}

export default ButtonComponent;