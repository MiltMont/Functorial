import { MathJax } from "better-react-mathjax";
import theme from "styles/Theme";
import { FC } from "react";

type Props = {
  content: string;
  label?: string;
};

const Equation: FC<Props> = ({ content, label }) => {
  return (
    <div
      style={{
        border: `1px solid ${theme.colors.accent3}`,
        borderRadius: theme.borderRadius[2],
        overflowX: "scroll",
        padding: theme.space[1],
      }}
    >
      {label && <div>{label}</div>}
      <MathJax>{`\\[${content}\\]`}</MathJax>
    </div>
  );
};

export default Equation;
