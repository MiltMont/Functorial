import { FC } from "react";
import theme from "../../styles/Theme";
import { base } from "../../utils/base";

type Props = {
  variant?: "blue" | "red" | "gray";
  content: string;
};

const Badge: FC<Props> = ({ variant = "gray", content }) => {
  return (
    <div
      style={{
        fontSize: theme.fontSize[1],
        border: `1px solid ${theme.colors.accent3}`,
        backgroundColor: theme.colors.accent1,
        color: theme.colors.accent6,
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
