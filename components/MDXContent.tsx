import * as runtime from "react/jsx-runtime";
import RecipeInfoBox from "@components/RecipeInfoBox";
import Callout from "@components/Callout";
import Collapse from "@components/Collapse";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

// Components to be used in MDX
const components = {
  RecipeInfoBox,
  Callout,
  Collapse
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}

// use tailwind typography?
