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

          <h2>Student-assistent Informatica gezocht voor Co-Teach Informatica (6-10 uur per week)</h2>
          <p>
            Ben jij UU student Informatica én wil je een interessante veelzijdige bijbaan naast jouw studie?
            Als Co-Teach Informatica student-assistent kijk jij huiswerk na van middelbare schoolleerlingen, 
            het ondersteunen van havo/vwo leerlingen en denk je mee bij de ontwikkeling van lesmateriaal. 
            Hierbij wordt je ondersteunt door vakdidacticus Informatica van Co-Teach Informatica.
          </p><p>
            Voor deze functie moet je een gedegen kennis van informatica hebben, uitstekende 
            communicatieve vaardigheden en affiniteit met de doelgroep. Bovendien moet je in staat zijn 
            leerlingen de begeleiding te geven die zij nodig hebben. Daarvoor moet je goed kunnen 
            luisteren en zul je geduldig, adaptief en flexibel moeten zijn.
          </p><p>  
             Herken jij jezelf in het voorgaande, dan is dit jouw baan.
          </p>

          <h2>Co-Teach Informatica</h2>
          <p>
          Middelbare scholen en de leerlingen willen heel graag aan de slag met informatica. Co-Teach 
          Informatica is een oplossing voor middelbare scholen die door het stijgende lerarentekort geen 
          vakdocent informatica kunnen vinden. Met ons landelijk programma kunnen scholen het vak 
          informatica aanbieden aan bovenbouw havo/vwo leerlingen zonder bevoegd informatica 
          vakdocent op de school. Door een combinatie van een online leerlijn en projectonderwijs door 
          IT-experts uit het bedrijfsleven krijgen de leerlingen de kans het schoolvak informatica met een 
          schoolexamen af te ronden. Lees meer op <a href="www.co-teach.nl">www.co-teach.nl</a>.
          </p>

          <h2>Wat ga je doen?</h2>
          <p> 
          De leerlingen krijgen via een online leerlijn kennis aangereikt over programmeren, architectuur, 
          datastructuren, algoritmen, automaten en grammatica’s. In deze functie ben je beschikbaar 
          voor vragen van leerlingen over de inhoud en opdrachten. Soms zullen dit eenvoudige vragen 
          zijn, soms moet je de stof op meerdere manieren uitleggen om deze bij een leerlingen over te 
          laten komen. Dat vereist geduld, flexibiliteit en aanpassingsvermogen.
          </p>
          <p>
          Daarnaast beoordeel je door de leerlingen ingeleverd werk aan de hand van vastgestelde 
          rubrics, zodat je aan elke leerling een goed onderbouwde feedback kunt geven. 
          </p>
          <p>
          Afhankelijk van het rooster van de leerlingen moet je beschikbaar zijn voor het beantwoorden van vragen. 
          Dit (nakijk)werk kan goed vanuit huis worden opgepakt. Daarnaast kan je ingezet worden voor andere taken zoals: 
          </p>
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
          Je werkt in een landelijk studententeam van de 
          Universiteit Utrecht, de Universiteit Twente en 
          Technische Universiteit Delft.
          </p>

          <h2>Wat wij bieden</h2>
          <p>
          Voor hogerejaars informatica studenten bestaat de mogelijkheid om student-assistent te 
          worden bij Co-Teach Informatica. Je bent 6 á 10 uur per week beschikbaar en staat ingeschreven 
          als student bij de Universiteit Utrecht. Wij bieden:
          </p>
          <ul>
              <li>
                Een student-assistent salaris, afhankelijk van je EC-punten en studiejaar (CAO Universiteiten).
              </li>
              <li>
                Je presentatievaardigheden verbeteren
              </li>
              <li>
                Een goede ervaring om op je CV te zetten.
            </li>
            <li>
                Een leuk team om mee te werken.
            </li>
            </ul>
          <h2>Aanmelden</h2>
          <p>
          Wil jij ons team komen versterken? Stuur dan je motivatie en beknopt cv naar co-teach@uu.nl
          t.a.v. Sia van Keijsteren.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Home;
