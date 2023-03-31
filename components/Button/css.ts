import styled from "styled-components";
import theme from "../../styles/Theme";
import { base } from "../../utils/base";
import { Props } from ".";

const variants = {
  gray: {
    backgroundColor: theme.colors.accent7,
    color: theme.colors.background,
    border: `1px solid ${theme.colors.accent7}`,
    hover: `
        background-color: transparent !important;
        color: ${theme.colors.accent7};
        border: 1px solid ${theme.colors.accent7};
    `,
  },

  grayOutline: {
    backgroundColor: "transparent",
    color: theme.colors.accent7,
    border: `1px solid ${theme.colors.accent7}`,
    hover: `
        background-color: ${theme.colors.accent3};
    `,
  },
};

const Style = styled.button<Props>`
  background-color: ${(props) => variants[props.variant].backgroundColor};
  color: ${(props) => variants[props.variant].color};
  border: ${(props) => variants[props.variant].border};

  font-weight: ${theme.fontWeight[2]};
  border-radius: ${theme.borderRadius[2]};
  padding-left: ${theme.space[1]};
  padding-right: ${theme.space[1]};
  padding-top: ${base(1 / 3)};
  padding-bottom: ${base(1 / 3)};
  &:hover {
    ${(props) => variants[props.variant].hover}
  }
`;

export default Style;
/*
    border: 1px solid ${theme.colors.accent7};
  background-color: transparent;
  color: ${theme.colors.accent7};

  border-radius: ${theme.borderRadius[2]};
  padding-left: ${theme.space[1]};
  padding-right: ${theme.space[1]};
  padding-top: ${base(1 / 3)};
  padding-bottom: ${base(1 / 3)};
  font-weight: ${theme.fontWeight[2]};
  */
