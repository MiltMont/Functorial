import styled from "styled-components";

import { base } from "../../utils/base";
import Image from "next/image";

export const S = {
  Root: styled.div`
    border: 1px solid ${(p) => p.theme.colors.accent3};
    border-radius: ${(p) => p.theme.borderRadius[2]};
  `,

  Container: styled.div`
    background-color: ${(p) => p.theme.colors.accent1};
    padding: ${(p) => p.theme.space[1]};
    border-radius: 0 0 ${(p) => p.theme.borderRadius[2]}
      ${(p) => p.theme.borderRadius[2]};
    border-top: 1px solid ${(p) => p.theme.colors.accent3};
  `,

  Title: styled.h1`
    font-size: ${(p) => p.theme.fontSize[5]};
    margin-bottom: ${base(1 / 2)};
    font-weight: ${(p) => p.theme.fontWeight[4]};
  `,

  Summary: styled.p`
    font-size: ${(p) => p.theme.fontSize[2]};
    color: ${(p) => p.theme.colors.accent6};
    font-weight: ${(p) => p.theme.fontWeight[2]};
  `,

  Date: styled.time`
    font-size: ${(p) => p.theme.fontSize[1]};
    font-weight: ${(p) => p.theme.fontWeight[1]};
    color: ${(p) => p.theme.colors.accent4};
    margin-bottom: ${base(1 / 2)};
  `,

  ImageContainer: styled.div`
    @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
      height: 250px;
    }
    @media (max-width: ${(p) => p.theme.breakpoints.sm}) {
      height: 170px;
    }
    overflow: hidden;
  `,

  Image: styled(Image)`
    object-fit: contain;
    border-radius: ${(p) => p.theme.borderRadius[2]}
      ${(p) => p.theme.borderRadius[2]} 0 0;
  `,
};
