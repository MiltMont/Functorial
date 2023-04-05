import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/Theme";
import { ThemeProvider } from "styled-components";
import { Inter } from "next/font/google";
import MobileNav from "../components/layout/MobileNav";
import * as Toast from "@radix-ui/react-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Toast.Provider>
      <main className={inter.className}>
        <MobileNav />
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </Toast.Provider>
  );
}
