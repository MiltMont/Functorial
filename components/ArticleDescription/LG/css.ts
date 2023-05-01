import styled from "styled-components";

export const S = {
  Root: styled.div`
    display: none;

    @media (min-width: ${(p) => p.theme.breakpoints.md}) {
      display: block;
    }
  `,
};
