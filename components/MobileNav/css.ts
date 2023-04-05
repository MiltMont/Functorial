import styled from "styled-components";
import theme from "../../styles/Theme";
import { base } from "../../utils/base";

type Props = {
  state: "active" | "inactive";
};

const variant = {
  active: {
    color: theme.colors.foreground,
    backgroundColor: theme.colors.accent1,
    border: `1px solid ${theme.colors.accent3}`,
    paddingTop: base(1 / 2),
    paddingBottom: base(1 / 2),
  },
  inactive: {
    color: theme.colors.accent6,
    backgroundColor: "none",
    border: "none",
    paddingTop: base(1 / 4),
    paddingBottom: base(1 / 4),
  },
};

export const Style = {
  Container: styled.div`
    padding-left: ${theme.space[1]};
    padding-right: ${theme.space[1]};
    margin-top: ${theme.space[2]};
  `,

  Section: styled.section`
    font-size: ${theme.fontSize[2]};
    font-weight: ${theme.fontWeight[4]};
    color: ${theme.colors.accent5};
    margin-bottom: ${theme.space[1]};
  `,

  Item: styled.div<Props>`
    display: flex;
    gap: ${theme.space[1]};
    align-items: center;

    font-size: ${theme.fontSize[3]};
    font-weight: ${theme.fontWeight[1]};
    border-radius: ${theme.borderRadius[1]};
    padding-left: ${theme.space[1]};
    padding-top: ${(props) => variant[props.state].paddingTop};
    padding-bottom: ${(props) => variant[props.state].paddingBottom};
    margin-bottom: ${base(1 / 2)};

    background-color: ${(props) => variant[props.state].backgroundColor};
    border: ${(props) => variant[props.state].border};
    color: ${(props) => variant[props.state].color};
  `,
};
