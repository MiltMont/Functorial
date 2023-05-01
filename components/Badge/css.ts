import styled from "styled-components";
import { Props } from ".";
import theme from "../../styles/Theme";
import { base } from "../../utils/base";

const variants = {
  gray: {
    backgroundColor: theme.colors.accent1,
    color: theme.colors.accent6,
    border: `1px solid ${theme.colors.accent3}`,
  },
  success: {
    backgroundColor: theme.colors.success,
    color: theme.colors.successLighter,
    border: `1px solid ${theme.colors.successLight}`,
  },
  danger: {
    backgroundColor: theme.colors.errorDark,
    color: theme.colors.errorLighter,
    border: `1px solid ${theme.colors.errorLighter}`,
  },
  warning: {
    backgroundColor: theme.colors.warningDark,
    color: theme.colors.warningLighter,
    border: `1px solid ${theme.colors.warningLight}`,
  },
};

const Container = styled.div<Props>`
  font-size: ${theme.fontSize[1]};
  border: ${(props) => variants[props.variant].border};
  background-color: ${(props) => variants[props.variant].backgroundColor};
  color: ${(props) => variants[props.variant].color};
  font-weight: ${theme.fontWeight[1]};
  padding-left: ${base(1 / 2)};
  padding-right: ${base(1 / 2)};
  border-radius: ${theme.borderRadius[1]};
  width: fit-content;
`;

export default Container;
