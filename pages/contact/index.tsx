import Head from "next/head";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import classes from "./contact.module.scss";
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
          <SignatureHeader title="Contact" subtitle="" />

          <h2>Laten we een keertje praten</h2>
          <p>Heb je een vraag of wil je praten over de mogelijkheden?</p>

          <p>
            Neem gerust eens contact met ons op om de mogelijkheden te
            bespreken. Bel met onze accountmanager Liesbeth von Nordheim op
            06-81183563 of stuur een bericht naar co-teach@uu.nl
          </p>

          <p>
            Meer informatie over werken als gastdocent in het onderwijs of
            persoonlijk advies?
          </p>

          <p>Vul dan onderstaand formulier in en we nemen contact met je op.</p>
          <iframe
            title="Aanmeldingsformulier"
            loading="lazy"
            className={classes.Survey}
            src="https://utrechtuniversity.qualtrics.com/jfe/form/SV_eY9tyqz6pnMNw2x"
          />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Home;
