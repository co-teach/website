import Head from "next/head";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import classes from "./formulier.module.scss";
import { menuStructure } from "../../contents/menuStructure";

const Home = () => {
  return (
    <>
      <Head>
        <title>Co-Teach Informatica</title>
      </Head>
      <Header navData={menuStructure} />
      <main className={classes.Contact}>
        <article className="restrictedWidth">
          <SignatureHeader title="Gastdocenten" subtitle="" />

          <p>Interesse om gastdocent te worden? Vul dan onderstaande formulier in.</p>
          <iframe
            title="Aanmeldingsformulier"
            loading="lazy"
            className={classes.Survey}
            src="https://survey.uu.nl/jfe/form/SV_4VDqRnpY0svrMZE"
          />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Home;
