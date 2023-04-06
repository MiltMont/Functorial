import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/Theme";
import { ThemeProvider } from "styled-components";
import { Inter } from "next/font/google";
import MobileNav from "../components/MobileNav/MobileNav";
import * as Toast from "@radix-ui/react-toast";
import SideBar from "../components/SideBard";
import { base } from "../utils/base";
import styled from "styled-components";

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
    <Toast.Provider>
      <main className={inter.className}>
        <MobileNav />

        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <SideBar />
          <AppContainer>
            <Component {...pageProps} />
          </AppContainer>
        </ThemeProvider>
      </main>
    </Toast.Provider>
  );
}
