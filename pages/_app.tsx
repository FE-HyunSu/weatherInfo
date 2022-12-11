import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { RecoilRoot } from "recoil";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <React.StrictMode>
        <RecoilRoot>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta property="og:title" content="Project title" />
            <meta property="og:description" content="Project description" />
            <meta property="og:image" content="" />
            <meta
              http-equiv="Content-Security-Policy"
              content="upgrade-insecure-requests"
            ></meta>
            <link rel="icon" href="/favicon.ico" />
            <title>Project Name</title>
          </Head>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Header />
            <main>
              <Component {...pageProps} />
            </main>
            <Footer />
          </ThemeProvider>
        </RecoilRoot>
      </React.StrictMode>
    </>
  );
};

export default MyApp;
