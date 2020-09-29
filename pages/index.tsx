import Head from "next/head";
import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Paths from "../components/Paths/Paths";
import Partners from "../components/Partners/Partners";
import Footer from "../components/Footer/Footer";
import { menuStructure } from "../contents/menuStructure";
import { projectPartners } from "../contents/projectPartners";
import { supportingPartners } from "../contents/supportingPartners";

const Home = () => {
  return (
    <>
      <Head>
        <title>Co-Teach Informatica</title>
      </Head>
      <Header navData={menuStructure} transparent superSized />
      <main className="home">
        <Banner />
        <Paths />
        <Partners
          partners={projectPartners}
          headingText="Een samenwerking tussen"
        />
        <Partners
          partners={supportingPartners}
          headingText="Met ondersteuning van"
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
