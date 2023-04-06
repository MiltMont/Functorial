import { FC } from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const S = {
  Root: styled.div`
    @media (max-width: ${(p) => p.theme.breakpoints.md}) {
      padding: 0 ${(p) => p.theme.space[1]};
    }
    @media (min-width: ${(p) => p.theme.breakpoints.md}) {
      padding: 0 ${(p) => p.theme.space[12]};
    }
  `,
};

const Container: FC<Props> = ({ children }) => {
  return <S.Root>{children}</S.Root>;
};

const Layout = {
  Container: Container,
};

export default Layout;
