import Head from "next/head";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import classes from "./over.module.scss";
import { menuStructure } from "../../contents/menuStructure";

const Home = () => {
  return (
    <>
      <Head>
        <title>Co-Teach Informatica Informatica</title>
      </Head>
      <Header navData={menuStructure} />
      <main className={classes.Over}>
        <article className="restrictedWidth">
          <SignatureHeader title="Co-Teach Informatica" subtitle="" />

          <h2>Bovenbouwprogramma op de havo en het vwo</h2>
          <p>
            Het vak informatica wordt als bovenbouwprogramma op de havo en het
            vwo aangeboden. Leerlingen krijgen ingeroosterd en klassikaal
            onderwijs van een anders bevoegde schooldocent. De docent heeft bij
            voorkeur affiniteit met informatica en krijgt begeleiding van onze
            vakdidactici informatica. Leerlingen hebben een online leeromgeving
            waarin elke les via ons stap-voor-stap systeem toegelicht wordt met
            lesmateriaal, uitlegfilmpjes en opdrachten. Daarnaast is er de
            gastlessenreeks van ervaren IT-professionals uit het bedrijfsleven.
            Deze professionals brengen een schat aan expertise en kennis mee en
            bieden de leerlingen ook praktische opdrachten die hen helpen hun
            theoretisch inzicht toe te passen in de echte wereld. Co-Teach
            Informatica is een uitstekende keuze voor elke school die
            informatica aan haar curriculum wil toevoegen.
          </p>

          <h2>Hoe?</h2>
          <img
            src="/images/co-teach informatica programma.png"
            alt="Co-teaching en een online leerlijn maken het eindexamen mogelijk."
            style={{ margin: "20px 0px" }}
            width="1165"
            height="330"
          />
          <h3>
            <span>1</span>Keuzedomeinen – Projectonderwijs Gastdocent
          </h3>
          <p>
            Onze <strong>gastdocenten</strong> zijn{" "}
            <strong>ICT-professionals uit het bedrijfsleven</strong>. Ze brengen
            de werkvloer naar de klas. Ze delen hun kennis, vertellen een
            persoonlijk verhaal en brengen inspiratie door praktijkvoorbeelden.
            Op inspirerende wijze leren leerlingen over nieuwe technologieën,
            trends en ontwikkelingen op het gebied van ICT. Leerlingen doen
            praktische ervaring op door projectopdrachten uit te voeren. Het
            bezoek van een gastdocent aan school is een ervaring van onschatbare
            waarde.
          </p>

          <h3>
            <span>2</span>Kerndomeinen – Online Leerlijn
          </h3>

          <p>
            Leerlingen kunnen onder begeleiding van de schooldocent, de leerlijn
            via het digitaal platform zelfstandig volgen. Op het platform worden
            de leerlingen{" "}
            <strong>
              stap voor stap door de lessen geleid met tekst, video en
              afbeeldingen
            </strong>
            . Vakdidactici Informatica van de universiteit hebben een leerroute
            ontwikkeld compleet met mijlpaalopdrachten en eindtoetsen. Het
            nakijken van het leerlingenwerk en het beantwoorden van vragen
            gebeurd door Co-Teach Informatica.
          </p>

          <h3>
            <span>3</span>Eindexamen
          </h3>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Home;
