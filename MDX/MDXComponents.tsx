import Text from "../components/utils/Text";
import Link from "next/link";
import styled from "styled-components";
import theme from "../styles/Theme";
import { base } from "../utils/base";
import Button from "../components/Button";
import Equation from "../components/Equation";
import InlineMath from "../components/InlineMath";
import Theorem from "../components/Theorem";

const LinkWrapper = styled(Link)`
  :link {
    color: ${(p) => p.theme.colors.successLight};
  }

  :visited {
    color: ${(p) => p.theme.colors.successDark};
  }

  :hover {
    color: ${(p) => p.theme.colors.highglight};
  }
`;

const Blockquote = styled.blockquote`
  background-color: ${(p) => p.theme.colors.accent1};
  padding: ${(p) => p.theme.space[1]};
  padding-bottom: 0;
  border-radius: ${(p) => p.theme.borderRadius[2]};
  margin-bottom: ${(p) => p.theme.space[1]};
  border: 1px solid ${(p) => p.theme.colors.accent3};
  border-left: 4px solid ${(p) => p.theme.colors.accent3};
`;

const Code = styled.code`
  background-color: ${(p) => p.theme.colors.accent1};
  padding: ${base(1 / 8)};
  border-radius: ${(p) => p.theme.borderRadius[1]};
  border: 1px solid ${(p) => p.theme.colors.accent3};
`;

const HR = styled.hr`
  border: 1px solid ${(p) => p.theme.colors.accent3};
  color: ${(p) => p.theme.colors.accent3};
  margin: ${(p) => p.theme.space[1]} 0;
`;

const MDXComponents = {
  h1: (props) => <Text as="h1" size={7} weight={4} {...props} mb={2} />,
  h2: (props) => <Text as="h2" size={6} weight={4} mb={1} {...props} />,
  h3: (props) => (
    <Text as="h3" size={5} weight={4} mb={1} {...props} underline />
  ),
  h4: (props) => (
    <Text as="h4" size={5} weight={3} mb={1} {...props} underline />
  ),
  p: (props) => <Text as="p" size={3} weight={1} mb={1} {...props} />,
  a: (props) => <LinkWrapper {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  ul: (props) => <ul {...props} style={{ margin: `${theme.space[1]} 0` }} />,
  ol: (props) => <ol {...props} style={{ margin: `${theme.space[1]} 0` }} />,
  strong: (props) => <Text as="strong" weight={4} size={3} {...props} />,
  em: (props) => <Text as="em" weight={1} size={3} {...props} />,
  code: (props) => <Code {...props} />,
  hr: (props) => <HR {...props} />,
  Button: (props) => <Button {...props} />,
  Equation: (props) => <Equation {...props} />,
  L: (props) => <InlineMath {...props} />,
  Theorem: (props) => <Theorem {...props} />,
};

export default MDXComponents;
