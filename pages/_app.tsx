import type { AppProps } from "next/app";
import "../global.scss";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Co-Teach Informatica</title>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e4037f" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <script src="/js/polyfills.js" />

        <meta
          name="Description"
          content="Informatica op school: ook als er nog geen leraar is. Dat doen we met IT-professionals die projectonderwijs vormgeven en een online leerlijn. Doe jij ook mee?"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/images/co-teach-informatica_logo.png"
        />
        <meta
          property="twitter:image"
          content="/images/co-teach-informatica_logo.png"
        />
      </Head>
      <Component {...pageProps} />{" "}
    </>
  );
};

export default App;
