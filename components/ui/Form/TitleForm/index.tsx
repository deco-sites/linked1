import type { JSX } from "preact";

function setClass(value: string) {
  switch (value) {
    case "primary":
      return "text-primary";
    case "Secondary":
      return "text-secondary";
    case "White":
      return "text-white";
    case "Accent":
      return "text-accent";
    case "Sacramento-State":
      return "text-sacramentoState";
    case "Sacramento-State-10":
      return "text-sacramentoState-10";
    case "Mint-Cream":
      return "text-mintCream";
    default:
      return "text-primary";
  }
}

function setAlignment(value: string) {
  switch (value) {
    case "Left":
      return "text-left";
    case "Center":
      return "text-center";
    case "Right":
      return "text-right";
    default:
      return "";
  }
}

function setAlignmentContent(value: string) {
  switch (value) {
    case "Start":
      return "justify-start";
    case "Center":
      return "justify-center";
    case "End":
      return "justify-end";
    default:
      return "justify-start";
  }
}

function setFontSize(value: string): string {
  switch (value) {
    case "22px":
      return "text-[22px]";
    case "28px":
      return "text-[28px]";
    case "32px":
      return "text-[32px]";
    default:
      return "text-[28px]";
  }
}

function setContainerWidth(value: string): string {
  switch (value) {
    case "Largura Limitada (290px)":
      return "max-w-[290px] w-full";
    case "Largura Limitada (327px)":
      return "max-w-[327px] w-full";
    case "Largura Limitada (343px)":
      return "max-w-[343px] w-full";
    case "Largura Completa":
      return "w-full";
    default:
      return "max-w-[327px] w-full";
  }
}

function setPaddingTop(value: string): string {
  switch (value) {
    case "Espacamento (40px)":
      return "pt-[40px]";
    case "Espacamento (91px)":
      return "pt-[91px]";
    case "Espacamento (95px)":
      return "pt-[95px] ";
    default:
      return "pt-[40px]";
  }
}

function TitleForm(
  {
    description,
    content,
    colorTheme,
    alignment,
    fontSize,
    containerWidth,
    contentAlignment,
    paddingTop,
  }:
    & JSX.IntrinsicElements["div"]
    & Props,
) {
  return (
    <>
      <div
        className={`flex ${setAlignmentContent(contentAlignment)} items-center`}
      >
        <div
          className={`${setContainerWidth(containerWidth)}  ${
            setPaddingTop(paddingTop)
          }`}
        >
          <div className="grid gap-y-2">
            <p className="text-sm font-sans font-light leading-tight-19 text-sacramentoState-80">
              {description}
            </p>
            <p
              className={`font-sans font-medium leading-tight-115 tracking-tight-0.56 ${
                setClass(
                  colorTheme,
                )
              } ${setAlignment(alignment)} ${setFontSize(fontSize)}`}
            >
              {content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TitleForm;
