import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import classes from "./voor-scholen.module.scss";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import Footer from "../../components/Footer/Footer";

const Index = (props: {}) => (
  <>
    <Head>
      <title>Co-Teach Informatica</title>
    </Head>
    <Header />

    <main className={classes.Article}>
      <SignatureHeader
        title="Informatica op school"
        subtitle="ook als er nog geen leraar is."
      />

      <img src={"/images/decorative_2.png"} aria-hidden />

          <div className={classes.pdfDownload}>
            <a
              href="/docs/co-teach-informatica_flyer_scholen.pdf"
              target="_blank"
            >
              <span>🗎</span> ook in pdf-formaat beschikbaar
            </a>
          </div>

      <p className={classes.Lede}>
        ICT-vaardigheden doen ertoe, dat staat buiten kijf. Toch biedt minder
        dan de helft van de scholen (47% in 2019) het examenvak informatica aan
        en slinkt dat aantal met elke leraar die met pensioen gaat.
        Tegelijkertijd kiezen leerlingen steeds vaker voor het vak.
      </p>

      <div className={classes.BodyText}>
        <p>
          Om ondanks het tekort aan informaticaleraren het vak niet verloren te
          laten gaan, introduceren we Co-Teach Informatica. In dit unieke
          pilotproject krijgen scholen de kans informatica aan te bieden door
          een combinatie van projectonderwijs door IT-professionals en een
          solide online leerlijn, ontwikkelt door en begeleidt vanuit
          universitaire lerarenopleidingen.
        </p>
        <ul>
          <li>
            Wil je informatica als examenvak (her)introduceren op je school, dan
            biedt Co-Teach Informatica de middelen en ondersteuning om dit
            mogelijk te maken, ook als er nog geen bevoegde leraar informatica
            is.
          </li>
          <li>
            Is er wel een bevoegde leraar informatica in de school, ook dan ben
            je welkom om je aan te sluiten bij deze samenwerking en mee te
            werken aan innovatief informatica-onderwijs.
          </li>
        </ul>
        <p>
          We bundelen de expertise en het enthousiasme van IT&rsquo;ers met de
          vakdidactische kennis en ervaring van leraren in de school en
          universitaire lerarenopleiders. Op school krijgt de IT-expert een
          co-teacher toegewezen. Dit is een anders-bevoegde leraar (bijv.
          wiskunde-) of een informaticaleraar.
        </p>
        <p>
          In het voortraject bereiden IT-professionals zich voor met een
          basiscursus vakdidactiek en pedagogiek. Ze ontwikkelen hun eigen
          informatica-onderwijsproject met input van vakdidactici en
          (anders-)bevoegde leraren. Als school omlijst je dat met een online
          leerlijn waarbij je op ondersteuning kunt rekenen van een regionaal
          informatica vaksteunpunt. In samenspraak stem je de roostering van de
          gastlessen af (gespreid of in een projectweek).
        </p>
        <blockquote>
          “Op school krijgt de IT-expert een co-teacher toegewezen.”
        </blockquote>
        <p>
          Co-teach Informatica is uitermate geschikt voor scholen die zich voor
          meerdere jaren willen committeren aan het aanbieden van vernieuwend
          informatica-onderwijs.
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default Index;
