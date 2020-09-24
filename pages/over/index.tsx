import Head from "next/head";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import classes from "./over.module.scss";

const Home = () => {
  return (
    <>
      <Head>
        <title>Over Co-Teach Informatica</title>
      </Head>
      <Header />
      <main className={classes.Over}>
        <section>
          <SignatureHeader title="Over Co-Teach Informatica" subtitle="" />

          <h2>Wat?</h2>
          <p>
            Co-Teach Informatica is een pilotproject waarin scholen het{" "}
            <strong>eindexamenvak informatica kunnen aanbieden</strong> door een
            combinatie van projectonderwijs door IT professionals en een online
            leerlijn –{" "}
            <strong>
              ook wanneer een school (nog) geen informaticaleraar in dienst
              heeft.
            </strong>{" "}
            Het project start op met havo/vwo leerlingen in klas 3 en de
            bovenbouw.
          </p>

          <h2>Waarom?</h2>
          <p>
            Informatica kent erg grote tekorten. Het vak wordt daardoor steeds
            minder aangeboden op scholen terwijl steeds meer leerlingen het
            willen volgen. Wij stellen scholen in staat om (weer) informatica
            aan te bieden als er geen bevoegde leraar beschikbaar is. Het doel
            is om in 2024 120 getrainde gastdocenten te hebben en minstens 3000
            extra leerlingen van informatica onderwijs te hebben voorzien,
            uitmondend in het eindexamen.
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
            width="1165px"
            height="330px"
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
            <strong>informaticadomeinen uit het examenprogramma</strong> (naar
            voorbeeld van{" "}
            <a
              href="https://www.ou.nl/web/wiskunde-d"
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
            Met de expertise van het SLO in hand, steunen we op landelijk en
            regionaal niveau scholen in het{" "}
            <strong>vormgeven van hun schoolexamens</strong> in de bovenbouw, en
            maken het zo mogelijk dat leerlingen in informatica eindexamen
            kunnen doen.
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
            de derde klas (havo/vwo). Het doel is dat zoveel mogelijk leerlingen
            kennismaken met het vak, om hen te motiverenvoor een gefundeerde
            keuze voor het vak in de bovenbouw.
          </p>
          <p>
            In de opvolgende jaren breiden we uit naar meer scholen en de
            bovenbouw.{" "}
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
