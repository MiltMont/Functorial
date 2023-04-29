import styled from "styled-components";

type Props = {
  alignItems?:
    | "baseline"
    | "center"
    | "end"
    | "flex-end"
    | "flex-start"
    | "start"
    | "stretch";
  alignContent?: "baseline" | "center" | "end" | "start" | "stretch";
  direction?: "column" | "column-reverse" | "row" | "row-reverse";
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | string;
  justifyContent?:
    | "center"
    | "end"
    | "space-around"
    | "space-between"
    | "space-evenly"
    | "start";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
};

const Flex = styled.div<Props>`
  display: flex;
  align-items: ${(p) => p.alignItems || "center"};
  flex-direction: ${(p) => p.direction || "row"};
  flex-wrap: ${(p) => p.wrap || "nowrap"};
  justify-content: ${(p) => p.justifyContent || "start"};
  flex-direction: ${(p) => p.direction || "row"};
  gap: ${(p) => (p.gap ? (p) => p.theme.space[p.gap] : "0")};

  ${(p) => (p.alignContent ? `align-content: ${p.alignContent};` : "")}
`;

export default Flex;
