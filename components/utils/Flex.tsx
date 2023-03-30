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
  gap?: string;
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
  align-items: ${(props) => props.alignItems || "center"};
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  justify-content: ${(props) => props.justifyContent || "start"};
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.gap || "0"};

  ${(props) =>
    props.alignContent ? `align-content: ${props.alignContent};` : ""}
`;

export default Flex;
