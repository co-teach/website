import Head from "next/head";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import classes from "./vacature.module.scss";
import { menuStructure } from "../../contents/menuStructure";

const Home = () => {
  return (
    <>
      <Head>
        <title>Vacature</title>
      </Head>
      <Header navData={menuStructure} />
      <main className={classes.Over}>
        <article className="restrictedWidth">

          <h2>Student-assistent Informatica gezocht voor Co-Teach Informatica (6-10uur per week)</h2>
          <p>
            Ben jij UU student Informatica én wil je een interessante veelzijdige bijbaan naast jouw studie.
            Als Co-Teach Informatica student-assistent kijk jij huiswerk na van middelbare schoolleerlingen, 
            het ondersteunen van havo/vwo leerlingen en denk je mee bij de ontwikkeling van lesmateriaal. 
            Hierbij wordt je ondersteunt door vakdidacticus Informatica van Co-Teach Informatica.
            
            Voor deze functie moet je een gedegen kennis van informatica hebben, uitstekende 
            communicatieve vaardigheden en affiniteit met de doelgroep. Bovendien moet je in staat zijn 
            leerlingen de begeleiding te geven die zij nodig hebben. Daarvoor moet je goed kunnen 
            luisteren en zul je geduldig, adaptief en flexibel moeten zijn.
            
             Herken jij jezelf in het voorgaande, dan is dit jouw baan.
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
            <span>1</span>Kerndomeinen – Online Leerlijn
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
            <span>2</span>Keuzedomeinen – Projectonderwijs Gastdocent
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
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Home;
