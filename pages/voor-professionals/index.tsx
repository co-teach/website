import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import classes from "./voor-professionals.module.scss";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import { menuStructure } from "../../contents/menuStructure";

const Index = (props: {}) => (
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
            subtitle="Co-teach Informatica."
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
              href="/docs/co-teach-informatica_flyer_professionals.pdf"
              target="_blank"
            >
              <span>🗎</span> ook in pdf-formaat beschikbaar
            </a>
          </div>

          <p className={classes.Lede}>
            Vo-scholen en -leerlingen staan te popelen om aan de slag te gaan
            met informatica, maar er zijn te weinig leerkrachten. Met jouw
            professionele kennis kan je helpen hier verandering in te brengen.
            Doe mee en draag je kennis over!
          </p>

          <div className={classes.BodyText}>
            <p>
              We zoeken IT-professionals die op scholen met leerlingen aan
              projecten gaan werken. Scholen vullen dit aan met informaticales
              via een online leerlijn. Een creatieve oplossing om uiteindelijk
              meer leerlingen hun schooltijd te laten afsluiten met informatica
              op hun lijst, zelfs al is er nog geen bevoegd informaticaleraar
              voor handen is.
            </p>
            <blockquote>
              “Uiteindelijk begeleid je als gastdocent scholieren in een
              zelfgekozen informaticaproject”
            </blockquote>
            <p>
              Met een inspanning van veertig uren op school per jaar lever je
              als IT-expert zo een onmisbare bijdrage aan het
              informatica-onderwijs en de toekomst van jonge mensen. Je gaat dit
              doen met ondersteuning van een ervaren leraar in een ander vak.
              Co-teaching noemen we dat. Om je voor te bereiden, stomen
              universitaire lerarenopleiders je klaar in een basiscursus
              didactiek en pedagogiek. Uiteindelijk begeleid je als gastdocent
              scholieren in een zelfgekozen informaticaproject, dat je
              ontwikkeld hebt met input van andere gastdocenten, de
              vakdidacticus informatica en je co-teach leraar.
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

        <section>
          <details>
            <summary>
              <h2>Wat kan je verwachten als gastdocent?</h2>
            </summary>
            <p>
              Als gastdocent geef je vorm aan <strong>40 studielasturen</strong>
              : 40 klokuren waarin leerlingen binnen en buiten het klaslokaal
              met jouw project aan de slag gaan. Afhankelijk van jouw project,
              zullen zo’n 25 uur daarvan ‘contacturen’ op school zijn onder jouw
              leiding en begeleiding. Om dit mogelijk te maken vragen we je
              werkgever om deze uren vrij te maken. Gelukkig hebben veel
              bedrijven en organisaties al regelingen om een maatschappelijke
              bijdrage te kunnen leveren voor 40 (of meer) uur. En uiteraard
              verwelkomt Co-Teach ook zzp'ers. Let op dat het hele traject,
              inclusief voorbereiding en afronding, waarschijnlijk ook wat van
              je eigen tijd in beslag zal nemen.
            </p>

            <h3>De aanmelding</h3>
            <p>
              Tijdens je aanmelding (zie hieronder) vragen we je om o.a. je
              expertise en eventuele projectideeën nader toe te lichten. Dit
              helpt ons om een groep leerlingen te vinden die voorbereid is om
              in jouw wereld te duiken. Ook vragen we je alvast wat voor
              tijdsinzet mogelijk is voor je: verspreid over meerdere weken of
              juist intensief (bijv. een projectweek).
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
              Je zult daarin eerst een crash course (vak)pedagogische kennis en
              vaardigheden volgen. Vervolgens werk je een-op-een met een
              regionale vakdidacticus (een expert in informatica-onderwijs) die
              je helpt om het aanstaande projectonderwijs vorm te geven. Zo
              zorgen we ervoor dat er goede aansluiting is tussen jouw kennis en
              die van de leerlingen. Ook zoek je samen naar de beste vormen:
              waar virtueel of fysiek, en waar theorie of praktijk? Tot slot ga
              je ook nadenken over examinering: wanneer weet je dat leerlingen
              de leerdoelen van je module hebben gehaald?
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
        <section>
          <h2>Meld je aan</h2>
          <p>
            Ben jij een IT-professional en wil jij ook gastdocent worden in
            Co-Teach Informatica? Of wil je gewoon meer informatie ontvangen?
            Vul dan onderstaand formulier in en we nemen contact met je op.
          </p>
          <p className={classes.warning}>
            <strong>⚠ Let op: 2020-2021 is het opstartjaar.</strong> Tijdens het
            voorjaar van 2021 zullen we (ten minste) drie gastdocenttrajecten
            per regio opzetten in derde klassen - dus negen in totaal. Dit
            schalen we op in de opvolgende jaren, waarin we ook de bovenbouw
            zullen betrekken. In latere jaren hopen we tevens meer regio's te
            gaan betrekken. Het kan dus even duren voordat je echt aan de slag
            kan, maar een vroege aanmelding helpt ons om interesse te peilen en
            om de schaal van vooropleidingen goed in te schatten.
          </p>
          <iframe
            className={classes.Survey}
            src="https://survey.uu.nl/jfe/form/SV_eY9tyqz6pnMNw2x"
          />
        </section>
      </article>
    </main>
    <Footer />
  </>
);

export default Index;
