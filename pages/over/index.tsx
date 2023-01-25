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
        <title>Over Co-Teach Informatica</title>
      </Head>
      <Header navData={menuStructure} />
      <main className={classes.Over}>
        <article className="restrictedWidth">
          <SignatureHeader
            title="Co-Teach Informatica"
            subtitle=""
          />

          <h2>Wat?</h2>
          <p>
            We gunnen iedere leerling een vakdocent informatica voor de klas. 
            Helaas is het tekort aan informaticadocenten nijpend. 
            Terwijl in het land wordt doorgewerkt aan meer docenten voor de klas 
            biedt Co-Teach Informatica de oplossing voor scholen die binnenkort geen 
            informaticadocent hebben omdat deze met pensioen gaat. Alsook een oplossing 
            voor scholen die nog geen docent hebben en graag met informatica willen starten.
            
          </p>          
        

          <p>
            Nu de wereld steeds verder digitaliseert, zijn de kennis en vaardigheden die met dit 
            vak worden opgedaan van onschatbare waarde. Met Co-Teach Informatica kunnen vo-leerlingen
            de wereld van de informatica op een innovatieve manier ervaren, digitale kennis en vaardigheden 
            opdoen die voor iedereen belangrijk zijn, ongeacht vervolg studiekeuze. 

            
          </p>

          <h2>Bovenbouwprogramma op de havo en het vwo</h2>
          <p>
            Het vak informatica kan als bovenbouwprogramma op de havo en het vwo worden aangeboden. Leerlingen 
            krijgen ingeroosterd en klassikaal onderwijs van een anders bevoegde schooldocent. De docent heeft bij 
            voorkeur affiniteit met informatica en krijgt begeleiding van onze vakdidactici informatica. Leerlingen 
            hebben een online leeromgeving waarin elke les via ons stap-voor-stap systeem toegelicht wordt met lesmateriaal,
            uitlegfilmpjes en opdrachten. Daarnaast is er de gastlessenreeks van ervaren IT-professionals uit het 
            bedrijfsleven. Deze professionals brengen een schat aan expertise en kennis mee en bieden de leerlingen ook 
            praktische opdrachten die hen helpen hun theoretisch inzicht toe te passen in de echte wereld.

            Co-Teach Informatica is een uitstekende keuze voor elke school die informatica aan haar curriculum wil toevoegen. 
          </p>

          <p>
            Een bijkomend voordeel is dat co-teaching het{" "}
            <strong>
              informatica-onderwijs dichter bij de dagelijkse praktijk brengt
            </strong>
            . Daarom werken we ook met scholen die <em>wel</em> een bevoegd
            informaticaleraar hebben, of die deze in de loop van het project
            aantrekken.
          </p>

          <h2>Hoe?</h2>
          <img
            src="/images/co-teach_hoe.png"
            alt="Co-teaching en een online leerlijn maken het eindexamen mogelijk."
            style={{ margin: "20px 0px" }}
            width="1165"
            height="330"
          />
          <h3>
            <span>1</span>Co-Teaching
          </h3>
          <p>
            Het verzorgen van <strong>projectonderwijs</strong> door een tandem
            van een inhoudsdeskundige gastdocent en een (anders-)bevoegde leraar
            van de school in kwestie. Hiervoor werken we samen met experts uit
            het bedrijfsleven en vanuit universiteiten en rijksinstanties. Een
            regionale vakdidacticus verzorgt de begeleiding van het gehele
            traject.
          </p>

          <h3>
            <span>2</span>Online Leerlijn
          </h3>

          <p>
            Het ontwikkelen en aanbieden van een online leerlijn voor de{" "}
            <strong>basisdomeinen uit het examenprogramma informatica’</strong>{" "}
            (naar voorbeeld van{" "}
            <a
              href="https://www.wiskundedonline.nl/"
              target="_blank"
              rel="noreferrer"
            >
              Wiskunde D online
            </a>
            ). Leerlingbegeleiding op het online leerplatform gebeurt vanuit het
            regionale vaksteunpunt.
          </p>

          <h3>
            <span>3</span>Eindexamen
          </h3>

          <p>
            Het <strong>vormgeven van schoolexamens</strong> in de bovenbouw
            zodat de leerlingen eindexamen in informatica kunnen doen. De
            eindexamens worden ontworpen in samenwerking met vakdidactici van de
            lerarenopleidingen informatica en experts van SLO.
          </p>

          <h2>Waar?</h2>
          <p>
            Het pilotproject start in{" "}
            <strong>Amsterdam, Utrecht en Twente</strong>. Als het project
            succesvol blijkt wordt Co-Teach Informatica ook uitgezet in andere
            regio's.
          </p>

          <h2>Wanneer?</h2>
          <p>
            2020-2021 geldt als opstartjaar, waarin we met een kleine groep
            scholen per regio beginnen met het opzetten van projectonderwijs in
            de derde klas (havo/vwo). Het doel is om zoveel mogelijk leerlingen
            te laten kennismaken en te motiveren voor informatica zodat zij een
            gefundeerde keuze voor het vak in de bovenbouw kunnen maken.
          </p>
          <p>
            In de jaren daarna breiden we uit naar meer scholen en de bovenbouw.{" "}
            <strong>
              Aanmelden kan te allen tijde via de formulieren voor{" "}
              <Link href="/voor-scholen">
                <a>scholen</a>
              </Link>{" "}
              en{" "}
              <Link href="/voor-professionals">
                <a>professionals</a>
              </Link>
            </strong>
            .
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Home;
