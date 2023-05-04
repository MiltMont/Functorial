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
import { MathJaxContext } from "better-react-mathjax";
import { Toaster } from "sonner";
import { useRouter } from "next/router";
import { useReadingMode } from "../hooks/useReadingMode";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const AppContainer = styled.div`
  min-width: 0;
  width: 100%;
  flex-grow: 1;
`;

const Wrapper = styled.div`
  @media (min-width: ${theme.breakpoints.md}) {
    display: flex;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper className={inter.className}>
      <Toaster
        toastOptions={{
          style: {
            position: "fixed",
            width: "auto",
            borderRadius: "8px",
            border: "1px solid",
            margin: base(),
            backgroundColor: theme.colors.accent7,
          },
        }}
        closeButton
      />
      <MathJaxContext
        config={{
          "HTML-CSS": {
            linebreaks: {
              automatic: true,
            },
          },
        }}
      >
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
      </MathJaxContext>
    </Wrapper>
  );
}
