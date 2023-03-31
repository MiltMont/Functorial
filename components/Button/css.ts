import styled from "styled-components";
import theme from "../../styles/Theme";
import { base } from "../../utils/base";
import { Props } from ".";

const variants = {
  standard: {
    fill: {
      backgroundColor: theme.colors.accent7,
      color: theme.colors.background,
      border: `1px solid ${theme.colors.accent7}`,
      hover: `
      background-color: transparent !important;
      color: ${theme.colors.accent7};
      border: 1px solid ${theme.colors.accent7};
      `,
    },
    outline: {
      backgroundColor: "transparent",
      color: theme.colors.accent7,
      border: `1px solid ${theme.colors.accent7}`,
      hover: `
          background-color: ${theme.colors.accent3};
      `,
    },
  },

  error: {
    fill: {
      backgroundColor: theme.colors.error,
      color: theme.colors.errorLighter,
      border: `1px solid ${theme.colors.error}`,
      hover: `
      background-color: transparent !important;
      color: ${theme.colors.error};
      border: 1px solid ${theme.colors.error};
      `,
    },
    outline: {
      backgroundColor: "transparent",
      color: theme.colors.error,
      border: `1px solid ${theme.colors.error}`,
      hover: `
          background-color: ${theme.colors.error};
          color: ${theme.colors.errorLighter};
      `,
    },
  },

  success: {
    fill: {
      backgroundColor: theme.colors.success,
      color: theme.colors.successLighter,
      border: `1px solid ${theme.colors.success}`,
      hover: `  
      background-color: transparent !important;
      color: ${theme.colors.success};
      border: 1px solid ${theme.colors.success};
      `,
    },
    outline: {
      backgroundColor: "transparent",
      color: theme.colors.success,
      border: `1px solid ${theme.colors.success}`,
      hover: `
          background-color: ${theme.colors.success};
          color: ${theme.colors.successLighter};
      `,
    },
  },

  warning: {
    fill: {
      backgroundColor: theme.colors.warning,
      color: theme.colors.background,
      border: `1px solid ${theme.colors.warning}`,
      hover: `
      background-color: transparent !important;
      color: ${theme.colors.warning};
      border: 1px solid ${theme.colors.warning};
      `,
    },
    outline: {
      backgroundColor: "transparent",
      color: theme.colors.warning,
      border: `1px solid ${theme.colors.warning}`,
      hover: `
          background-color: ${theme.colors.warningDark};
          color: ${theme.colors.warningLighter};
      `,
    },
  },

  width: {
    full: {
      width: "100%",
    },
    auto: {
      width: "",
    },
  },
};

const Style = styled.button<Props>`
  background-color: ${(props) =>
    variants[props.variant][props.fill].backgroundColor};
  color: ${(props) => variants[props.variant][props.fill].color};
  border: ${(props) => variants[props.variant][props.fill].border};
  width: ${(props) => variants.width[props.width].width};

  font-weight: ${theme.fontWeight[2]};
  border-radius: ${theme.borderRadius[2]};
  padding-left: ${theme.space[1]};
  padding-right: ${theme.space[1]};
  padding-top: ${base(1 / 3)};
  padding-bottom: ${base(1 / 3)};
  &:hover {
    ${(props) => variants[props.variant][props.fill].hover}
  }
`;

export default Style;
