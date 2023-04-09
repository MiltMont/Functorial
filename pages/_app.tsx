import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/Theme";
import { ThemeProvider } from "styled-components";
import { Inter } from "next/font/google";
import MobileNav from "../components/MobileNav";
import * as Toast from "@radix-ui/react-toast";
import SideBar from "../components/SideBar";
import { base } from "../utils/base";
import styled from "styled-components";
import * as Tooltip from "@radix-ui/react-tooltip";
import { useNavState } from "../hooks/useNavState";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

type AppContainerProps = {
  sideBarClosed?: boolean;
};

const AppContainer = styled.div<AppContainerProps>`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-left: ${(props) => (props.sideBarClosed ? base(5) : base(14))};
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  const closed = useNavState((state) => state.closed);

  return (
    <main className={inter.className}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
        integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC"
        crossOrigin="anonymous"
      />
      <Toast.Provider>
        <Tooltip.Provider>
          <MobileNav />

          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <SideBar />
            <AppContainer sideBarClosed={closed}>
              <Component {...pageProps} />
            </AppContainer>
          </ThemeProvider>
        </Tooltip.Provider>
      </Toast.Provider>
    </main>
  );
}
