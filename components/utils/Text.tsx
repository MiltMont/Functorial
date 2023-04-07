import styled from "styled-components";
import theme from "../../styles/Theme";
import { FC } from "react";
import { Color } from "../../styles/Theme";

type Props = {
  children: React.ReactNode;
  as?:
    | "blockquote"
    | "div"
    | "dt"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "legend"
    | "p"
    | "q"
    | "small"
    | "span"
    | "strong"
    | "label";
  className?: string;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  weight?: 1 | 2 | 3 | 4;
  transform?: "capitalize" | "uppercase" | "lowercase" | "initial";
  align?: "left" | "center" | "right";
  color?: Color;
  truncate?: number | boolean;
  title?: string; //If text is `truncated`, this should be the full text.
  wrap?: boolean;
  dangerouslySetInnerHTML?: { __html: string };
  monospace?: boolean;
  id?: string; //The root element id
};

/*
const Typography = styled.span`
  padding: 0;
  text-rendering: optimizeLegibility;

  font-size: ${(props: Props) => theme.fontSize[props.size]};
  font-weight: ${(props: Props) => theme.fontWeight[props.weight]};
  text-transform: ${(props: Props) => props.transform || ""};
  text-align: ${(props: Props) => props.align};
  color: ${(props: Props) => props.color || theme.colors.foreground};
  ${(props) =>
    props.truncate
      ? `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `
      : ""};
  text-wrap: ${(props: Props) => (props.wrap ? "normal" : "nowrap")};
`;
*/

const Typography = styled.span<Props>`
  padding: 0;
  text-rendering: optimizeLegibility;

  font-size: ${(p) => p.theme.fontSize[p.size]};
  font-weight: ${(p) => p.theme.fontWeight[p.weight]};
  text-transform: ${(p) => p.transform || ""};
  text-align: ${(p) => p.align};
  color: ${(p) => p.theme.colors[p.color || "foreground"]};
  ${(p) =>
    p.truncate
      ? `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `
      : ""};
  text-wrap: ${(p: Props) => (p.wrap ? "normal" : "nowrap")};
`;

// Add mono font
const Text: FC<Props> = ({
  children,
  as = "p",
  size = 2,
  weight = 2,
  transform,
  align = "left",
  color = "foreground",
  truncate,
  title,
  wrap,
  dangerouslySetInnerHTML,
  monospace,
  id,
}) => (
  <Typography
    as={as}
    size={size}
    weight={weight}
    transform={transform}
    align={align}
    color={color}
    truncate={truncate}
    title={title}
    wrap={wrap}
    dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    monospace={monospace}
    id={id}
  >
    {children}
  </Typography>
);

export default Text;
