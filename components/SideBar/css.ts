import styled from "styled-components";
import { base } from "../../utils/base";
import theme from "../../styles/Theme";

type Props = {
  state: "active" | "inactive";
};

const variant = {
  active: {
    color: theme.colors.foreground,
    backgroundColor: theme.colors.accent1,
    border: `1px solid ${theme.colors.accent3}`,
  },
  inactive: {
    color: theme.colors.accent6,
    backgroundColor: "none",
    border: "none",
  },
};

export const S = {
  Container: styled.div`
    height: 100vh;
    width: ${base(14)};
    position: fixed;
    border-right: 1px solid ${(props) => props.theme.colors.accent3};

    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.background};

    display: none;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      display: flex;
      flex-direction: column;
    }
  `,
  Section: styled.section`
    font-size: ${(props) => props.theme.fontSize[2]};
    font-weight: ${(props) => props.theme.fontWeight[4]};
    color: ${(props) => props.theme.colors.accent5};
    margin-bottom: ${(props) => props.theme.space[1]};
  `,

  Item: styled.div<Props>`
    display: flex;
    gap: ${(props) => props.theme.space[1]};
    align-items: center;

    font-size: ${(props) => props.theme.fontSize[3]};
    font-weight: ${(props) => props.theme.fontWeight[1]};
    border-radius: ${(props) => props.theme.borderRadius[1]};
    padding-left: ${(props) => props.theme.space[1]};
    padding-right: ${(props) => props.theme.space[1]};
    padding-top: ${base(1 / 4)};
    padding-bottom: ${base(1 / 4)};
    margin-bottom: ${base(1 / 2)};

    width: 100%;

    background-color: ${(props) => variant[props.state].backgroundColor};
    border: ${(props) => variant[props.state].border};
    color: ${(props) => variant[props.state].color};
  `,
};
