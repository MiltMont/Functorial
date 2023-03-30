import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/Theme";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
