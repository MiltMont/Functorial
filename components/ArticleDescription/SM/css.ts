import styled from "styled-components";

export const S = {
  Root: styled.div`
    margin-top: ${(p) => p.theme.space[1]};
    margin-bottom: ${(p) => p.theme.space[1]};
    @media (min-width: ${(p) => p.theme.breakpoints.md}) {
      display: none;
    }
  `,

  HR: styled.hr`
    height: 1px;
    color: ${(p) => p.theme.colors.accent3};
  `,
};
