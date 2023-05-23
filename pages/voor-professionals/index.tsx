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
          <br>
            
          <a
          href={
             <a href="https://www.nldigital.nl/news/solution-architect-klaas-geeft-les-als-gastdocent/" target="_blank">
          }
        >
          <img
            src={"/images/Klaas.png"}
            alt={"Ervaringen van Klaas Heek"}
          />
        </a>

        <a
          href={
            "https://www.nldigital.nl/news/software-engineer-hanneke-staat-ook-voor-de-klas/" target="_blank"
          }
        >
          <img
            src={"/images/Hanneke.png"}
            alt={"Ervaringen van Hanneke den Ouden"}
          />
        </a>
        <br>

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

        <section>
          <details>
            <summary>
              <h2>Wat kan je verwachten als gastdocent?</h2>
            </summary>
            <p>
              Als gastdocent geef je vorm aan circa{" "}
              <strong>40 studielasturen</strong>: 40 klokuren waarin leerlingen
              binnen en buiten het klaslokaal met jouw project aan de slag gaan.
            </p>

            <h3>De aanmelding</h3>
            <p>
              Tijdens je aanmelding (zie hieronder) vragen we je om o.a. je
              expertise en eventuele projectideeën nader toe te lichten. Dit
              helpt ons om een groep leerlingen te vinden die voorbereid is om
              in jouw wereld te duiken.
            </p>
            <p>
              Nadat je je aangemeld hebt wordt je opgenomen in de Co-Teach
              database. Geen zorgen, deze is AVG-proof en wordt beheerd door de
              Universiteit Utrecht (lees{" "}
              <Link href="/privacyverklaring">
                <a>onze privacyverklaring</a>
              </Link>
              ).
            </p>

            <h3>Het trainings- en ontwikkelingstraject</h3>
            <p>
              Wanneer we een goede match voor je gevonden hebben, nemen we
              contact met je op over ons voorstel. Nadat jij en je werkgever
              (waar van toepassing) akkoord zijn gegaan met de voorwaarden,
              begint het voortraject.
            </p>
            <p>
              Je zult daarin eerst een gastdocentencursus volgen. En ga je het
              projectonderwijs vormgeven. We zorgen ervoor dat er goede
              aansluiting is tussen jouw kennis en die van de leerlingen. Ook
              zoek je samen naar de beste vormen: waar virtueel of fysiek, en
              waar theorie of praktijk? Tot slot ga je ook nadenken over
              examinering: wanneer weet je dat leerlingen de leerdoelen van je
              module hebben gehaald?
            </p>

            <h3>Co-Teaching</h3>
            <p>
              Met je project op zak ga je aan de slag op jouw school. Hier werk
              je samen met een co-teacher: een (anders-)bevoegde docent die je
              ondersteunt tijdens het projectonderwijs. Op afstand kijkt ook de
              eerder-genoemde vakdidacticus mee naar de voortgang.
            </p>

            <p>
              Afhankelijk van de wensen van de school en je eigen wensen werk je
              met één of meer klassen binnen de 40 studielasturen.
            </p>

            <h3>Afronding</h3>

            <p>
              Na afloop van het traject nemen we graag een moment om samen te
              reflecteren op de ervaring. Dit is ook het moment waarop we het
              project opnemen in onze projectendatabase en eventuele
              vervolgtrajecten bespreken.
            </p>
          </details>
        </section>
        <section>
          <details>
            <summary>
              <h2>Wat kan je verwachten als bedrijf of organisatie?</h2>
            </summary>
            <p>
              Co-Teach Informatica zet in op bedrijven en organisaties die hun
              medewerkers uren geven om een maatschappelijke bijdrage te leveren
              en deze uren willen inzetten om informaticaonderwijs te verbeteren
              en te stimuleren.
            </p>

            <p>
              Als tegenprestatie leveren de vaksteunpunten en deelnemende school
              een hoogkwalitatieve (vak)pedagogische training en
              begeleidingstraject. Deelnemende bedrijven en organisaties worden
              ook opgenomen op deze website, waar wij hen tevens graag in het
              zonnetje zetten met een nieuwsuiting.
            </p>

            <p>
              Bedrijven en organisaties kunnen ervoor kiezen om naast een
              vermelding van het project in onze projectendatabase (momenteel in
              wording) ook de projectmaterialen zelf op te laten nemen. Daarmee
              worden leraren geholpen in de vormgeving van hun onderwijs, ook na
              afsluiting van het gastdocenttraject.
            </p>
          </details>
        </section>

        <hr />

        <h2>Vakexpertise</h2>

        <p>
          In de bovenbouw klassen zijn we op zoek naar IT-experts die invulling
          kunnen geven aan één van de keuzedomeinen. Je kan{" "}
          <a href="https://www.slo.nl/handreikingen/havo-vwo/handreiking-se-info-hv/examenprogramma/keuzedomeinen/">
            hier
          </a>{" "}
          alle keuzedomeinen vinden die gedurende de hele bovenbouw de revue
          kunnen passeren. Uiteraard helpen we je met het kiezen van een gepast
          traject en domein.
        </p>

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
));

export default Index;
