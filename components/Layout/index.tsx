import { FC } from "react";
import styled from "styled-components";
import { base } from "../../utils/base";
import { useNavState } from "../../hooks/useNavState";

type Props = {
  children: React.ReactNode;
  navBarState?: boolean;
  style?: React.CSSProperties;
};

const S = {
  Root: styled.div<Props>`
    @media (max-width: ${(p) => p.theme.breakpoints.md}) {
      padding: 0 ${(p) => p.theme.space[1]};
    }
    @media (min-width: ${(p) => p.theme.breakpoints.md}) {
      padding: 0 ${(p) => (p.navBarState ? base(16) : p.theme.space[12])};
    }
  `,
};

const Container: FC<Props> = ({ children, style }) => {
  const state = useNavState((state) => state.closed);
  return (
    <S.Root navBarState={state} style={style}>
      {children}
    </S.Root>
  );
};

const Layout = {
  Container: Container,
};

export default Layout;
