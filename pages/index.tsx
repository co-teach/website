import Head from "next/head";
import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Paths from "../components/Paths/Paths";
import Partners from "../components/Partners/Partners";
import Footer from "../components/Footer/Footer";
import { menuStructure } from "../contents/menuStructure";
import { partners } from "../contents/partners";
import type { Partner } from "../models/Partner";
import Video from "../components/Video/Video";

const Home = () => {
  const projectPartners: Partner[] = [
    partners.unl,
    partners.voRaad,
    partners.nldigital,
    partners.slo,
    partners.ieni,
    partners.uu,
    partners.ut,
    partners.vu,
    partners.deloitte,
  ];
  const supportingPartners: Partner[] = [partners.ocw, partners.ezk];

  return (
    <>
      <Head>
        <title>Co-Teach Informatica</title>
      </Head>
      <Header navData={menuStructure} transparent superSized />
      <main className="home">
        <Banner />
        <Video
          url={"https://youtu.be/0kinIPijIWg"}
          headingText={"Een introductie"}
        />
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
