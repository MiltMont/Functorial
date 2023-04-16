import { MathJax } from "better-react-mathjax";
import styled from "styled-components";
import { FC } from "react";

type Props = {
  c: string; // content
};

const Inline = styled(MathJax)`
  display: inline-block !important;
`;

const InlineMath: FC<Props> = ({ c }) => {
  return <Inline>{`\\(${c}\\)`}</Inline>;
};

export default InlineMath;
