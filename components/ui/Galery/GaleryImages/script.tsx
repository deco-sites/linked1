import { useScript as useScript } from "@deco/deco/hooks";

export interface Props { }

const setup = ({ }: Props) => {
    
}

function GaleryImages(
  { }: Props,
) {
  return (
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: useScript(setup, { }),
      }}
    />
  );
}
export default GaleryImages;