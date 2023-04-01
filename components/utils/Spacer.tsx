import styled from "styled-components";
import theme from "../../styles/Theme";

type Props = {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

const Spacer = styled.div<Props>`
  height: ${(props) => theme.space[props.size] || props.size[1]};
`;

export default Spacer;
