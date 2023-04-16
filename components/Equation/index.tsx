import { MathJax } from "better-react-mathjax";
import theme from "../../styles/Theme";
import { FC } from "react";
import Text from "../utils/Text";
import { base } from "../../utils/base";
import slugify from "slugify";

type Props = {
  content: string;
  label?: string;
  border?: boolean;
  id?: string;
};

// Add slugifyed id based on the label to the equation
const Equation: FC<Props> = ({ content, label, border = true, id }) => {
  return (
    <div
      id={label ? slugify(label, { lower: true }) : id}
      style={{ marginBottom: theme.space[1] }}
    >
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
          border: `${border ? "1px" : "0"} solid ${theme.colors.accent3}`,
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
