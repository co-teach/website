import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Divider from "../../components/Divider/Divider";

const Index = (props: {}) => {
  return (
    <>
      <Head>
        <title>Co-Teach Informatica: Privacyverklaring</title>
      </Head>
      <Header />
      <Divider marginBottom />
      <main>
        <h1>Privacyverklaring</h1>
      </main>
    </>
  );
};

export default Index;
