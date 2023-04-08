import { FC } from "react";
import { useNavState } from "../../hooks/useNavState";
import { S } from "./css";

export type Props = {
  children: React.ReactNode;
  navBarState?: boolean;
  article?: boolean;
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
