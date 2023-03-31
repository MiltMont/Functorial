import styled from "styled-components";
import theme from "../../styles/Theme";
import { base } from "../../utils/base";

const Style = {
  Image: styled.div`
    height: 250px;
  `,

  Container: styled.div`
    margin: ${theme.space[1]};
    border: 1px solid ${theme.colors.accent3};
    border-radius: ${theme.borderRadius[2]};
  `,

  Title: styled.h1`
    font-size: ${theme.fontSize[5]};
    margin-bottom: ${base(1 / 2)};
    font-weight: ${theme.fontWeight[4]};
  `,
};

export default Style;
