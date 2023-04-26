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

          <h2>Co-Teach Informatica</h2>
          
          Middelbare scholen en de leerlingen willen heel graag aan de slag met informatica. Co-Teach 
          Informatica is een oplossing voor middelbare scholen die door het stijgende lerarentekort geen 
          vakdocent informatica kunnen vinden. Met ons landelijk programma kunnen scholen het vak 
          informatica aanbieden aan bovenbouw havo/vwo leerlingen zonder bevoegd informatica 
          vakdocent op de school. Door een combinatie van een online leerlijn en projectonderwijs door 
          IT-experts uit het bedrijfsleven krijgen de leerlingen de kans het schoolvak informatica met een 
          schoolexamen af te ronden. Lees meer op www.co-teach.nl

          <h2>Wat ga je doen?</h2>
           
          De leerlingen krijgen via een online leerlijn kennis aangereikt over programmeren, architectuur, 
datastructuren, algoritmen, automaten en grammatica’s. In deze functie ben je beschikbaar 
voor vragen van leerlingen over de inhoud en opdrachten. Soms zullen dit eenvoudige vragen 
zijn, soms moet je de stof op meerdere manieren uitleggen om deze bij een leerlingen over te 
laten komen. Dat vereist geduld, flexibiliteit en aanpassingsvermogen.
Daarnaast beoordeel je door de leerlingen 
ingeleverd werk aan de hand van vastgestelde 
rubrics, zodat je aan elke leerling een goed 
onderbouwde feedback kunt geven.
Afhankelijk van het rooster van de leerlingen moet 
je beschikbaar zijn voor het beantwoorden van 
vragen. Dit (nakijk)werk kan goed vanuit huis 
worden opgepakt. 
Daarnaast kan je ingezet worden voor andere taken zoals: 
          <ul>
              <li>
                Vakinhoudelijk meedenken over het lesmateriaal
              </li>
              <li>
                Materiaal plaatsen op online leerlijn en 
                Klassenmappen inrichten
              </li>
              <li>
                Begeleiding op school tijdens de module 
                programmeren.
            </li>
            <li>
                Presentatie tijdens een conferentie
            </li>
            <li>
                Beheer en onderhoud van de website 
            </li>
            
            </ul>

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
