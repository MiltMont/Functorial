import styled from "styled-components";
import { Color } from "../../styles/Theme";

type Props = {
  color?: Color;
  bT?: boolean;
  bB?: boolean;
  bL?: boolean;
  bR?: boolean;
};

const Section = styled.section<Props>`
  background-color: ${(p) => p.theme.colors[p.color || "accent1"]};
  border-top: ${(p) => (p.bT ? `1px solid ${p.theme.colors.accent3}` : "")};
  border-bottom: ${(p) => (p.bB ? `1px solid ${p.theme.colors.accent3}` : "")};
  border-left: ${(p) => (p.bL ? `1px solid ${p.theme.colors.accent3}` : "")};
  border-right: ${(p) => (p.bR ? `1px solid ${p.theme.colors.accent3}` : "")};
`;

export default Section;
