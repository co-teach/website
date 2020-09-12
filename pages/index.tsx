import Head from "next/head";
import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Paths from "../components/Paths/Paths";
import Partners from "../components/Partners/Partners";

const Home = () => {
  return (
    <>
      <Head>
        <title>Co-Teach Informatica</title>
      </Head>
      <Header transparent superSized />
      <main>
        <Banner />
        <Paths />
        <Partners />
      </main>
    </>
  );
};

export default Home;
