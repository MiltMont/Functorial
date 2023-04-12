import { MathJax } from "better-react-mathjax";
import theme from "styles/Theme";
import { FC } from "react";
import { base } from "utils/base";
import Text from "components/utils/Text";

type Props = {
  content: string;
  label?: string;
};

// Add slugifyed id based on the label to the equation

const Equation: FC<Props> = ({ content, label }) => {
  return (
    <div id={"equation"}>
      {label && (
        <div
          style={{
            backgroundColor: theme.colors.accent3,
            width: "fit-content",
            padding: base(1 / 4),
            borderRadius: `${theme.borderRadius[2]} ${theme.borderRadius[2]} 0 0`,
          }}
        >
          <Text size={2} weight={1} color={"foreground"}>
            {label}
          </Text>
        </div>
      )}
      <div
        style={{
          border: `1px solid ${theme.colors.accent3}`,
          borderRadius: label
            ? `0  ${theme.borderRadius[2]} ${theme.borderRadius[2]} ${theme.borderRadius[2]}`
            : theme.borderRadius[2],
          overflowX: "scroll",
          padding: theme.space[1],
        }}
      >
        <MathJax>{`\\[${content}\\]`}</MathJax>
      </div>
    </div>
  );
};

export default Equation;
