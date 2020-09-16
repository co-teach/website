import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import classes from "./voor-professionals.module.scss";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import Footer from "../../components/Footer/Footer";

const Index = (props: {}) => (
  <>
    <Head>
      <title>Co-Teach Informatica</title>
    </Head>
    <Header />

    <main className={classes.Article}>
      <SignatureHeader
        title="Draag bij aan meer informatica op scholen"
        subtitle="Co-teach Informatica"
      />

      <img src={"/images/decorative_1.png"} aria-hidden />

      <div className={classes.pdfDownload}>
        <a href="#">
          <span>🗎</span> ook in pdf-formaat beschikbaar
        </a>
      </div>

      <p className={classes.Lede}>
        Middelbare scholen en leerlingen staan te popelen om aan de slag te gaan
        met informatica, maar er zijn te weinig leerkrachten. Met jouw
        professionele kennis kan je helpen hier verandering in te brengen. Doe
        mee en draag je kennis over!
      </p>

      <div className={classes.BodyText}>
        <p>
          We zoeken IT-professionals die op scholen met leerlingen aan projecten
          gaan werken. Scholen vullen dit aan met informaticales via een online
          leerlijn. Een creatieve oplossing om uiteindelijk meer leerlingen hun
          middelbare school te laten afsluiten met informatica op hun lijst,
          zelfs al is er nog geen bevoegd informaticaleraar voor handen is.
        </p>
        <blockquote>
          “Uiteindelijk begeleid je als gastdocent scholieren in een zelfgekozen
          informaticaproject”
        </blockquote>
        <p>
          Met een inspanning van veertig lesuren op school per jaar lever je als
          IT-expert zo een onmisbare bijdrage aan het informatica-onderwijs en
          de toekomst van jonge mensen. Je gaat dit doen met ondersteuning van
          een ervaren leraar in een ander vak. Co-teaching noemen we dat. Om je
          voor te bereiden, stomen universitaire lerarenopleiders je klaar in
          een basiscursus didactiek en pedagogiek. Uiteindelijk begeleid je als
          gastdocent scholieren in een zelfgekozen informaticaproject, dat je
          ontwikkeld hebt met input van andere gastdocenten, de vakdidacticus
          informatica en je co-teach leraar.
        </p>

        <p>
          Heb je een IT-bedrijf of ben je IT-expert en wil je een
          maatschappelijke bijdrage leveren, dan zijn we op zoek naar jou. Zet
          je inhoudelijke expertise in voor deze innovatieve vorm van
          informatica-onderwijs en motiveer leerlingen om later professioneel
          met IT aan de slag te gaan.
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default Index;
