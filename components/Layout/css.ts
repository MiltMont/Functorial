import styled from "styled-components";
import { base } from "../../utils/base";
import { Props } from ".";

const handlePadding = (p: Props) => {
  if (p.navBarState && p.article) {
    return base(18);
  } else if (p.navBarState) {
    return base(16);
  } else if (p.article) {
    return base(14);
  } else {
    return base(12);
  }
};

export const S = {
  Root: styled.div<Props>`
    @media (max-width: ${(p) => p.theme.breakpoints.md}) {
      padding: 0 ${(p) => p.theme.space[1]};
    }
    @media (min-width: ${(p) => p.theme.breakpoints.md}) {
      padding: 0 ${(p) => handlePadding(p)};
    }

    ${(p) =>
      p.article
        ? `
        h1 {
          font-size: ${p.theme.fontSize[7]};
  
          margin-bottom: ${p.theme.space[1]};
          font-weight: ${p.theme.fontWeight[4]};
          color: ${p.theme.colors.foreground};
        }
  
        h2 {
          font-size: ${p.theme.fontSize[6]};
          margin-bottom: ${p.theme.space[1]};
          margin-top: ${p.theme.space[1]};
          font-weight: ${p.theme.fontWeight[3]};
          color: ${p.theme.colors.accent8};
        }
  
        h3 {
          font-size: ${p.theme.fontSize[5]};
          margin-bottom: ${p.theme.space[1]};
          margin-top: ${p.theme.space[1]};
          font-weight: ${p.theme.fontWeight[3]};
          color: ${p.theme.colors.accent7};
          text-decoration: underline;
        }
  
        h4, h5, h6 {
          font-size: ${p.theme.fontSize[4]};
          margin-bottom: ${p.theme.space[1]};
          margin-top: ${p.theme.space[1]};
          font-weight: ${p.theme.fontWeight[3]};
          color: ${p.theme.colors.accent6};
          text-decoration: underline;
        }
  
        p {
          font-size: ${p.theme.fontSize[3]};
          margin-bottom: ${p.theme.space[1]};
          font-weight: ${p.theme.fontWeight[1]};
        }
  
        a:link {
          color: ${p.theme.colors.successLight};
        }
  
        a:visited {
          color: ${p.theme.colors.successDark};
        }
  
        a:hover {
          color: ${p.theme.colors.highglight};
        }
  
        hr {
          border: 1px solid ${p.theme.colors.accent3};
          color: ${p.theme.colors.accent3};
        }
  
        code {
          background-color: ${p.theme.colors.accent1};
          padding: ${base(1 / 8)};
          border-radius: ${p.theme.borderRadius[1]};
          border: 1px solid ${p.theme.colors.accent3};
        }
  
        ul, ol {
          margin: ${p.theme.space[1]} 0; 
        } 
  
        blockquote {
          
          background-color: ${p.theme.colors.accent1};
          padding: ${p.theme.space[1]};
          padding-bottom: 0;
          border-radius: ${p.theme.borderRadius[2]};
            margin-bottom: ${p.theme.space[1]};
            border: 1px solid ${p.theme.colors.accent3};
            border-left: 4px solid ${p.theme.colors.accent3};
        }
  
        blockquote > h1, blockquote > h2, blockquote > h3, blockquote > h4, blockquote > h5, blockquote > h6 {
          margin-top: 0;
        }
      
        em {
          font-style: italic;
          font-weight: ${p.theme.fontWeight[1]};
        }
  
        strong {
          font-weight: ${p.theme.fontWeight[4]};
        }
      `
        : " "}
  `,
};
