import Head from "next/head";
import React from "react";
import Header from "../../components/Header/Header";
import Divider from "../../components/Divider/Divider";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Over Co-Teach Informatica</title>
      </Head>
      <Header />
      <Divider marginBottom />
      <main>
        <section>
          <h1>Over Co-Teach Informatica</h1>

          <h2>Wat?</h2>
          <p>
            Co-Teach Informatica is een pilotproject waarin met behulp van
            gastdocenten uit het bedrijfsleven, universiteiten, en
            rijksinstanties het{" "}
            <strong>
              vak informatica aangeboden kan worden op middelbare scholen – ook
              zonder informaticaleraar
            </strong>
            . Dit begeleid door een regionaal vaksteunpunt en een online
            leerlijn die het schoolexamen informatica omvat.
          </p>

          <h2>Waarom?</h2>
          <p>
            Informatica kent erg grote tekorten. Het vak wordt daardoor steeds
            minder aangeboden op scholen terwijl steeds meer leerlingen het
            willen volgen. Wij stellen scholen in staat om (weer) informatica
            aan te bieden wanneer er geen bevoegd docent beschikbaar is. Het
            doel is om in 2024 120 getrainde gastdocenten te hebben en minstens
            3000 leerlingen van informatica onderwijs te hebben voorzien.
          </p>

          <p>
            Een bijkomend voordeel van deze vorm is dat het{" "}
            <strong>
              informatica-onderwijs dichter bij de dagelijkse praktijk brengt
            </strong>
            . Daarom werken we ook met scholen die <em>wel</em> een bevoegd
            informaticadocent hebben, of die deze in de loop van het project
            aantrekken.
          </p>

          <h2>Hoe?</h2>
          <img
            src="/images/co-teach_hoe.png"
            alt="Co-teaching en een online leerlijn maken het eindexamen mogelijk."
            style={{ margin: "20px 0px" }}
          />
          <p>
            Scholen, lerarenopleidingen en het ICT-bedrijfsleven werken aan:
            <ol>
              <li>
                <strong>Co-teaching</strong> van projectonderwijs door
                inhoudsdeskundige gastdocenten en (anders-)bevoegde leraren in
                onderbouw en bovenbouw havo/vwo. Dit hele proces, van
                vooropleiding tot projectontwikkeling, van uitvoer tot
                examinering, wordt ondersteund door een regionale vakdidacticus.
              </li>
              <li>
                Het ontwikkelen en aanbieden van een{" "}
                <strong>online leerlijn</strong> voor de (verplichte en
                keuze-)informaticadomeinen uit het examenprogramma (naar
                voorbeeld van{" "}
                <a href="https://www.ou.nl/web/wiskunde-d">Wiskunde D online</a>
                ). Deze leerlijn wordt ondersteund door een regionaal
                vaksteunpunt (bemenst door studenten informatica).
              </li>
              <li>
                Ook steunen we scholen in het{" "}
                <strong>vormgeven van hun schoolexamens</strong> in de
                bovenbouw, en maken het zo mogelijk dat leerlingen in
                informatica kunnen afstuderen.
              </li>
            </ol>
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
            de derde klas (HAVO/VWO). Het doel is dat zoveel mogelijk leerlingen
            kennismaken met het vak, om hen te motiverenvoor een gefundeerde
            keus voor het vak in de bovenbouw.
          </p>
          <p>
            In de opvolgende jaren breiden we uit naar meer scholen en de
            bovenbouw.{" "}
            <strong>
              Aanmelden kan ten alle tijden via de formulieren voor{" "}
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
