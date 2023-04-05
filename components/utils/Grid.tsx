import styled from "styled-components";
import theme from "../../styles/Theme";

type Props = {
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between";
  flow?: "row" | "column" | "dense";
  columns: number;
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  gapX?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  gapY?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
};

const Grid = styled.div<Props>`
  display: grid;
  height: inherit;
  align-items: ${(props) => props.align || "stretch"};
  justify-items: ${(props) => props.justify || "stretch"};
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  gap: ${(props) => theme.space[props.gap]};
  column-gap: ${(props) => theme.space[props.gapX]};
  row-gap: ${(props) => theme.space[props.gapY]};
`;

export default Grid;
