import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import classes from "./brochure.module.scss";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import Footer from "../../components/Footer/Footer";
import { menuStructure } from "../../contents/menuStructure";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Paths from "../components/Paths/Paths";

const Home = () => {
  return (
    <>
      <Head>
        <title>Brochure voor scholen</title>
      </Head>
      <Header navData={menuStructure} />
      <main className={classes.main}>
        <article className="restrictedWidth">
        <p>  
          {" "}
              <a href="/docs/co-teach-informatica_brochure_scholen.pdf">
                pdf-versie
              </a>{" "}
          
          <Link href="/voor-professionals">
            <a>
               {" "}
              <a href="/docs/co-teach-informatica_brochure_scholen.pdf">
                pdf-versie
              </a>{" "}
            </a>
          </Link>
          </p>
          <p>
          
          <div className={classes.pdfDownload}>
            <a
              href="/docs/co-teach-informatica_flyer_scholen.pdf"
              target="_blank"
            >
              <span>🗎</span> ook in pdf-formaat beschikbaar
            </a>
          </div>
          
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
          </p>
          
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Home;
