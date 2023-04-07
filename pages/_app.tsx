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

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const AppContainer = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-left: ${base(14)};
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Toast.Provider>
        <Tooltip.Provider>
          <MobileNav />

          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <SideBar />
            <AppContainer>
              <Component {...pageProps} />
            </AppContainer>
          </ThemeProvider>
        </Tooltip.Provider>
      </Toast.Provider>
    </main>
  );
}
