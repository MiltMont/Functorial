import styled from "styled-components";
import { base } from "../../utils/base";
import theme from "../../styles/Theme";

type Props = {
  state?: "active" | "inactive";
  display?: "open" | "closed";
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

  open: {
    width: base(12),
    sectionLabel: " ",
    itemLabel: " ",
  },

  closed: {
    width: base(5),
    sectionLabel: "none",
    itemLabel: "none",
  },
};

export const S = {
  Container: styled.aside<Props>`
    height: 100vh;
    flex-shrink: 0;
    width: ${(p) => variant[p.display].width};
    position: sticky;
    border-right: 1px solid ${(props) => props.theme.colors.accent3};

    overflow-y: auto;

    top: 0;
    left: 0;
    background-color: ${(props) => props.theme.colors.background};

    display: none;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      display: flex;
      flex-direction: column;

      ${(p) =>
        p.display === "closed"
          ? `
    
      align-items: center;
      align-content: center;
        `
          : " "}

      justify-content: space-between;
    }
  `,

  Section: styled.section<Props>`
    font-size: ${(props) => props.theme.fontSize[2]};
    font-weight: ${(props) => props.theme.fontWeight[4]};
    color: ${(props) => props.theme.colors.accent5};
    margin-bottom: ${(props) => props.theme.space[1]};
    display: ${(p) => variant[p.display].sectionLabel}};
  `,

  Item: styled.div<Props>`
    display: flex;
    gap: ${(props) => props.theme.space[1]};
    align-items: center;

    border-radius: ${(props) => props.theme.borderRadius[1]};

    padding-left: ${(props) =>
      props.display === "closed" ? base(1 / 2) : props.theme.space[1]};
    padding-right: ${(props) =>
      props.display === "closed" ? base(1 / 2) : props.theme.space[1]};
    padding-top: ${(props) =>
      props.display === "closed" ? base(1 / 2) : base(1 / 4)};
    padding-bottom: ${(props) =>
      props.display === "closed" ? base(1 / 2) : base(1 / 4)};
    margin-bottom: ${base(1 / 2)};

    width: 100%;

    background-color: ${(props) => variant[props.state].backgroundColor};
    border: ${(props) => variant[props.state].border};

    &:hover {
      background-color: ${(props) => props.theme.colors.accent1};

      svg {
        stroke: ${(props) => props.theme.colors.accent8};
      }
    }
  `,

  ItemLabel: styled.div<Props>`
    font-size: ${(props) => props.theme.fontSize[3]};
    font-weight: ${(props) => props.theme.fontWeight[1]};
    color: ${(props) => variant[props.state].color};
    width: 100%;
    display: ${(p) => variant[p.display].itemLabel}};

    &:hover {
      color: ${(props) => props.theme.colors.accent8};
    }

  `,

  Presentation: {
    Items: styled.div<Props>`
      display: ${(props) => (props.display === "closed" ? "none" : "flex")};
      flex-direction: column;
    `,

    Container: styled.div<Props>`
      display: flex;
      gap: ${(props) => props.theme.space[1]};
      align-items: center;
      align-content: center;

      padding-top: ${(props) => props.theme.space[2]};
      padding-left: ${(props) => props.theme.space[1]};

      ${(p) => (p.display === "closed" ? `padding-left: 0;` : " ")};
    `,
  },

  Minimize: styled.button<Props>`
    all: unset;

    margin: ${(p) => p.theme.space[1]};
    padding: ${base(1 / 2)};

    border: 1px solid ${(p) => p.theme.colors.accent3};
    border-radius: ${(p) => p.theme.borderRadius[2]};
    background-color: ${(p) => p.theme.colors.background};

    width: fit-content;

    &:hover {
      background-color: ${(p) => p.theme.colors.accent2};
    }
  `,
};
