import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import classes from "./brochure.module.scss";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import Footer from "../../components/Footer/Footer";
import { menuStructure } from "../../contents/menuStructure";

const Home = () => {
  return (
    <>
      <Head>
        <title>Brochure voor scholen</title>
      </Head>
      <Header navData={menuStructure} />
      <main className={classes.Over}>
        <article className="restrictedWidth">
          
          <img
            src={"/images/brochures/brochure_1.jpg"}
            width="1241"
            height="1755"
            aria-hidden
            alt={""}
          />

          
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Home;
