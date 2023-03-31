import styled from "styled-components";
import theme from "../../styles/Theme";
import { base } from "../../utils/base";

export const Card = {
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

  Summary: styled.p`
    font-size: ${theme.fontSize[2]};
    color: ${theme.colors.accent6};
    font-weight: ${theme.fontWeight[2]};
  `,

  Date: styled.time`
    font-size: ${theme.fontSize[1]};
    font-weight: ${theme.fontWeight[1]};
    color: ${theme.colors.accent4};
  `,

  Image: styled.div`
    height: 250px;
  `,
};
