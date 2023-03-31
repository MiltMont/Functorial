import { FC } from "react";
import theme from "../../styles/Theme";
import { base } from "../../utils/base";
import styled from "styled-components";

type Props = {
  variant?: "blue" | "red" | "gray";
  content: string;
};

const variants = {
  gray: {
    backgroundColor: theme.colors.accent1,
    color: theme.colors.accent6,
    border: `1px solid ${theme.colors.accent3}`,
  },
  blue: {
    backgroundColor: theme.colors.success,
    color: theme.colors.successLighter,
    border: `1px solid ${theme.colors.successLight}`,
  },
  red: {
    backgroundColor: theme.colors.errorDark,
    color: theme.colors.errorLighter,
    border: `1px solid ${theme.colors.errorLighter}`,
  },
};

const Container = styled.div<Props>`
  font-size: ${theme.fontSize[1]};
`;

const Badge: FC<Props> = ({ variant = "gray", content }) => {
  return (
    <div
      style={{
        fontSize: theme.fontSize[1],
        border: variants[variant].border,
        backgroundColor: variants[variant].backgroundColor,
        color: variants[variant].color,
        fontWeight: theme.fontWeight[1],
        paddingLeft: base(1 / 2),
        paddingRight: base(1 / 2),
        borderRadius: theme.borderRadius[1],
      }}
    >
      <span>{content}</span>
    </div>
  );
};

export default Badge;
