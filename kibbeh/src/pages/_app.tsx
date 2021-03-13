import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { Head } from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Taking voice conversations to the moon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
