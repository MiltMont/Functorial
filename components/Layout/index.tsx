import { FC } from "react";
import styled from "styled-components";
import { base } from "../../utils/base";
import { useNavState } from "../../hooks/useNavState";

type Props = {
  children: React.ReactNode;
  navBarState?: boolean;
  article?: boolean;
};

const S = {
  Root: styled.div<Props>`
    @media (max-width: ${(p) => p.theme.breakpoints.md}) {
      padding: 0 ${(p) => p.theme.space[1]};
    }
    @media (min-width: ${(p) => p.theme.breakpoints.md}) {
      padding: 0 ${(p) => (p.navBarState ? base(16) : p.theme.space[12])};
    }

    ${(p) =>
      p.article
        ? `
      h1 {
        font-size: ${p.theme.fontSize[7]};
        margin-bottom: ${p.theme.space[1]};
        font-weight: ${p.theme.fontWeight[4]};
      }

      h2 {
        font-size: ${p.theme.fontSize[6]};
        margin-bottom: ${p.theme.space[1]};
        font-weight: ${p.theme.fontWeight[3]};
      }

      h3 {
        font-size: ${p.theme.fontSize[5]};
        margin-bottom: ${p.theme.space[1]};
        font-weight: ${p.theme.fontWeight[3]};
      }

      h4, h5, h6 {
        font-size: ${p.theme.fontSize[4]};
        margin-bottom: ${p.theme.space[1]};
        font-weight: ${p.theme.fontWeight[3]};
      }

      p {
        font-size: ${p.theme.fontSize[3]};
        margin-bottom: ${p.theme.space[1]};
        font-weight: ${p.theme.fontWeight[1]};
      }
    `
        : " "}
  `,
};

const Container: FC<Props> = ({ children, article = false }) => {
  const state = useNavState((state) => state.closed);
  return (
    <S.Root navBarState={state} article={article}>
      {children}
    </S.Root>
  );
};

const Layout = {
  Container: Container,
};

export default Layout;
