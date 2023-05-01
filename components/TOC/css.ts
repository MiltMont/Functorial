import styled from "styled-components";
import { base } from "../../utils/base";

type Props = {
  isOpen: boolean;
};

export const S = {
  Root: styled.div`
    border: 1px solid ${(p) => p.theme.colors.accent3};
    border-radius: ${(p) => p.theme.borderRadius[2]};
    overflow: hidden;
    background-color: ${(p) => p.theme.colors.accent1};
  `,

  Label: styled.div<Props>`
    background-color: ${(p) => p.theme.colors.background};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom:
    ${(p) => (p.isOpen ? `1px solid ${p.theme.colors.accent3};` : "none;")} 
    padding-left: ${base(1 / 2)};
  `,

  IconBox: styled.button`
    all: unset;
    background-color: ${(p) => p.theme.colors.accent1};
    overflow: hidden;
    padding: ${base(1 / 2)};
    border-left: 1px solid ${(p) => p.theme.colors.accent3};
  `,

  List: styled.div<Props>`
    display: ${(p) => (p.isOpen ? "flex" : "none")};

    flex-direction: column;
    padding: ${base(1 / 2)};
    gap: ${base(1 / 2)};
  `,
};
