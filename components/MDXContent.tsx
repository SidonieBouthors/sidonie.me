import * as runtime from "react/jsx-runtime";
import InfoBox from "@components/InfoBox";
import Callout from "@components/Callout";
import Collapse from "@components/Collapse";
import Instructions from "@components/Instructions";
import Ingredients from "@components/Ingredients";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

// Components to be used in MDX
const components = {
  InfoBox,
  Callout,
  Collapse,
  Ingredients,
  Instructions,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}

// use tailwind typography?
