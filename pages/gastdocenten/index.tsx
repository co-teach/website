import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import classes from "./voor-professionals.module.scss";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import { menuStructure } from "../../contents/menuStructure";
import Video from "../../components/Video/Video";

const Index = () => (
  <>
    <Head>
      <title>
        Co-Teach Informatica voor Professionals, Bedrijven en Organisaties
      </title>
    </Head>
    <Header navData={menuStructure} />

    <main className={classes.main}>
      <article className="restrictedWidth">
        <section className="columns">
          <SignatureHeader
            title="Draag bij aan meer informatica op scholen"
            subtitle="Breng de werkvloer naar de klas"
          />

          <img
            src={"/images/decorative_1.jpg"}
            width="1219"
            height="834"
            aria-hidden
            alt={""}
          />

          <div className={classes.pdfDownload}>
            <a
              href="/docs/co-teach-informatica_brochure_gastdocenten.pdf"
              target="_blank"
            >
              <span>🗎</span> download hier de informatie brochure
            </a>
          </div>

          <p className={classes.Lede}>
            Als IT-professionals uit het bedrijfsleven is het geven van
            gastlessen aan leerlingen een ervaring van onschatbare waarde. Met
            jouw vakexpertise breng je inspiratie met praktijkvoorbeelden. Doe
            mee en draag je kennis over!
          </p>

          <div className={classes.BodyText}>
            <p>
              We zoeken IT-professionals die gedurende 6 á 8 weken een
              gastlessenreeks op school willen verzorgen.
            </p>
            <blockquote>
              “ALs gastdocent geef je les en begeleid leerlingen in een
              informaticaproject”
            </blockquote>
            <p>
              Je gaat niet onvoorbereid de klas in. We bieden je een
              gastdocentencursus. Je geeft les onder begeleiding van een
              vakdidacticus informatica en de schooldocent.
            </p>

            <p>
              Ben je IT-expert, manager of werkgever en wil je een
              maatschappelijke bijdrage leveren, dan zijn we op zoek naar jou.
              Zet je inhoudelijke expertise in voor deze innovatieve vorm van
              informatica-onderwijs en motiveer leerlingen om later
              professioneel met IT aan de slag te gaan.
            </p>
          </div>
        </section>

        <hr />

        <h2>Word gastdocent bij Co-Teach Informatica</h2>
        
        <img
            src={"/images/Infographic_gastdocenten.png"}
            width="1552"
            height="1030"
            aria-hidden
            alt={""}
          />

        <hr />
        
        

        <section>
          <details>
            <summary>
              <h2>Download hier onze gastdocenten brochure</h2>
            </summary>
            <p>
             Wil je meer met je eigen praktijkervaring doen en voor de klas staan als gastdocent? 
              <a href="/docs/co-teach-informatica_brochure_gastdocenten.pdf">Download hier de Co-Teach Informatica gastdocent brochure.</a>
              
            </p>
          </details>
        </section>
        <section>
          <details>
            <summary>
              <h2>Gastdocenten cursus - 2023</h2>
            </summary>
            <p>
              Dit zijn de aankomende gastdocenten cursus data.
              
              <img
            src={"/images/gastdocenten_cursus_planning.png"}
            width="1241"
            height="1755"
            aria-hidden
            alt={""}
          />
            </p>
          </details>
        </section>

        <hr />
        
        <section>
          <details>
            <summary>
              <h2>Vakexpertise</h2>
            </summary>
            <p>
              In de bovenbouw klassen zijn we op zoek naar IT-experts die invulling
          kunnen geven aan één van de lesdomeinen. Je kan{" "}
          <a href="https://www.slo.nl/handreikingen/havo-vwo/handreiking-se-info-hv/examenprogramma/keuzedomeinen/">
            hier
          </a>{" "}
          alle lesdomeinen vinden die gedurende de hele bovenbouw de revue
          kunnen passeren. Uiteraard helpen we je met het kiezen van een gepast
          traject en domein.
            </p>
          </details>
        </section>
        

        <hr />

        <section>
          <h2>Meld je nu aan</h2>
          <p>
            Schrijf je hieronder in om kennis met ons te maken en verder te
            kijken of Co-Teach Informatica iets voor jou is. We nemen contact
            met je op.
          </p>
          <iframe
            title="Aanmeldingsformulier"
            loading="lazy"
            className={classes.Survey}
            src="https://utrechtuniversity.qualtrics.com/jfe/form/SV_eY9tyqz6pnMNw2x"
          />
        </section>
      </article>
    </main>
    <Footer />
  </>
);

export default Index;
