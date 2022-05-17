import Head from "next/head";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import classes from "./symposium.module.scss";
import { menuStructure } from "../../contents/menuStructure";

const Home = () => {
  return (
    <>
      <Head>
        <title>Symposium</title>
      </Head>
      <Header navData={menuStructure} />
      <main className={classes.Over}>
        <article className="restrictedWidth">
          <SignatureHeader title="Symposium" subtitle="Co-Teach Informatica" />

          <p style={{ marginTop: "20px" }}>
            Op 27 Juni 2022 vindt de eerste editie van het Co-Teach Informatica
            symposium plaats. We delen de eerste ervaringen en ontwikkelingen
            van het Co-Teach Informatica initiatief. Centraal staat het delen
            van kennis, behoeften ophalen en leren van elkaar.
          </p>

          <h2>Voor wie?</h2>
          <p>
            Deelnemende Co-Teach Informatica Scholen. Daarnaast zijn
            geïnteresseerde scholen die het vak informatica willen
            (her)introduceren op school van harte uitgenodigd!
          </p>

          <h2>Wanneer?</h2>
          <p>Maandag 27 juni 2022 | 15:30-20:00 | Utrecht</p>

          <h2>Aanmelden symposium</h2>
          <p>
            Aanmelden is mogelijk door{" "}
            <a
              href="https://www.formdesk.com/universiteitutrecht-beta/CoTeachSymposium"
              target="_blank"
              rel="noreferrer"
            >
              dit webformulier
            </a>{" "}
            in te vullen.
          </p>

          <p>
            Er zijn een beperkt aantal plaatsen beschikbaar dus wacht niet te
            lang met aanmelden. Na aanmelding ontvang je aanvullende informatie.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Home;
