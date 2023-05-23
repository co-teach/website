import Head from "next/head";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import classes from "./brochure.module.scss";
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
        <SignatureHeader
            title="Brochure voor scholen"
            subtitle=" "
          />
        <p> 
        <div className={classes.pdfDownload}>
            <a
              href="/docs/co-teach-informatica_brochure_scholen.pdf"
              target="_blank"
            >
              <span>🗎</span> ook in pdf-formaat beschikbaar
            </a>
          </div>
        </p>
           <img
            src={"/images/brochures/brochure_1.jpg"}
            width="1241"
            height="1755"
            aria-hidden
            alt={""}
          />
          <img
            src={"/images/brochures/brochure_2.jpg"}
            width="1241"
            height="1755"
            aria-hidden
            alt={""}
          />
          <img
            src={"/images/brochures/brochure_3.jpg"}
            width="1241"
            height="1755"
            aria-hidden
            alt={""}
          />
          <img
            src={"/images/brochures/brochure_4.jpg"}
            width="1241"
            height="1755"
            aria-hidden
            alt={""}
          />
          <img
            src={"/images/brochures/brochure_5.jpg"}
            width="1241"
            height="1755"
            aria-hidden
            alt={""}
          />
          <img
            src={"/images/brochures/brochure_6.jpg"}
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
