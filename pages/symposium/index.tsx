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
            Op 27 juni vindt het Co-Teach Informatica symposium plaats in Utrecht. 
            We vieren de eerste successen van Co-Teach Informatica en delen de ervaringen 
            van ons vernieuwend informatica-onderwijs concept. De eerste scholen zijn gestart 
            en deze ervaringen willen ze graag delen. Centraal staat het delen van kennis, behoeften 
            ophalen en elkaar inspireren. Ook is er samen een “blik op de toekomst”. Dat doen we in 
            presentaties, dialoogsessies, workshops en diverse andere ontmoetingsvormen.


          </p>

          <h2>Wat kunt u verwachten op 27 juni</h2>
          <p>
            We starten met een plenair gedeelte, met een opening door Pieter Duisenberg. 
            Vervolgens delen leerlingen, schooldocenten en gastdocenten de eerste praktijkervaringen 
            met Co-Teach Informatica. Daarna gaan we uiteen en zijn er twee rondes deelsessies met elk 
            vier sessies, waarvan u er steeds bij één kunt aanschuiven. Aansluitend is er een netwerkborrel/diner 
            om elkaar te ontmoeten. Een ideale combinatie van kennis vergaren en netwerken met je collega’s. 
            
            Doet u met ons mee? We zien u graag op maandag 27 juni in Utrecht!
            
          </p>

          <h2>Wanneer?</h2>
          <p>Maandag 27 juni 2022 | 15:30-20:00 | Utrecht</p>

          <h2>Het Programma</h2>
          
          15.00-15.30	Inloop. U kunt alvast kennismaken met de andere deelnemers
          15.30-15.50	Opening door Pieter Duisenberg, voorzitter van Universiteiten van Nederland / 
                      Stuurgroep voorzitter Co-Teach Informatica 
          15.50-16.15	Scholen aan het woord: leerlingen, schooldocenten en gastdocenten wordt het podium 
                      geboden om hun eigen praktijkervaringen te vertellen.  
          16.15-16.30 Korte Break  
          16.30-17.05 Deelsessies - ronde 1 
          17.15-17.50	Deelsessies - ronde 2 
          17.50-18.30	Na een actief deel zal er ruimte zijn om tijdens een borrel ervaringen te delen. 
          18.30-20.00 Meet & Greet en Diner Buffet. In het avondgedeelte kunt u met andere deelnemers onder het 
                      genot van een drankje en hapje gezellig napraten en nieuwe ideeën voor de toekomst laten opborrelen.

Er zijn twee rondes deelsessies met elk vier sessies, waarvan u er steeds bij één kunt aanschuiven

 <h2>Deelsessies - ronde 1</h2>
          (A) Werksessie Tips en Tops van deelnemende Co-Teach Informatica scholen 
          (B)  Ins en outs gastles: Kijkje in de keuken - hoe ziet een gastles eruit? 
          (C) Inhoud en opbouw Co-Teach Informatica programma en jaarplanning 
          (D) Tips en Tops voor gastdocenten onder elkaar

<h2>Deelsessies - ronde 2</h2>
          (A) Werkwijze Co-Teach Informatica  (vernieuwend informatica-onderwijs concept en evaluatie) 
          (B) Ins en outs gastles: Kijkje in de keuken - hoe ziet een gastles eruit? 
          (C) Inhoud en opbouw Co-Teach Informatica programma en jaarplanning
          (D) Publiek private samenwerking (verdieping/doorontwikkeling/samenwerking)

      
          
          
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
