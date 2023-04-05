import styled from "styled-components";
import theme from "../../styles/Theme";
import { base } from "../../utils/base";

export const Style = {
  Container: styled.div`
    padding-left: ${theme.space[1]};
    padding-right: ${theme.space[1]};
    margin-top: ${theme.space[2]};
  `,

  Section: styled.section`
    font-size: ${theme.fontSize[3]};
    font-weight: ${theme.fontWeight[4]};
    color: ${theme.colors.accent5};
    margin-bottom: ${theme.space[1]};
  `,
};
