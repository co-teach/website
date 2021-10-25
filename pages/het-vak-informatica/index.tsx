import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import classes from "./het-vak-informatica.module.scss";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import Footer from "../../components/Footer/Footer";
import { menuStructure } from "../../contents/menuStructure";

const Index = () => (
  <>
    <Head>
      <title>Het vak informatica in de bovenbouw</title>
    </Head>
    <Header navData={menuStructure} />

    <main className={classes.main}>
      <article className="restrictedWidth">
        <section className="columns">
          <SignatureHeader
            title="Het vak informatica in de bovenbouw"
            subtitle="maak kennis."
          />

          <img
            src={"/images/decorative_3.jpg"}
            width="1552"
            height="1030"
            aria-hidden
            alt={""}
          />

          <p className={classes.Lede}>
            Van landbouw en gezondheidszorg tot onderwijs, logistiek en
            wetenschap – in elke sector wordt met ICT gewerkt. Informatica staat
            midden in onze maatschappij en onze informatietechnologie heeft
            gevolgen voor jou en voor de maatschappij als geheel. Logisch toch
            dat je wilt weten hoe alles werkt?
          </p>

          <div className={classes.BodyText}>
            <p>
              Bij informatica leer je belangrijke computer- en algemene
              vaardigheden. Je leert bijvoorbeeld programmeren, zodat je je
              eigen app of website kunt maken. Maar, informatica is veel meer
              dan dat. Zo kan je onderzoeken hoe je de gebruiksvriendelijkheid
              en bruikbaarheid (user experience en usability) van een product
              kunt verbeteren. Je gaat problemen analyseren en oplossen door te
              kijken naar algoritmen en automaten. Wat dat zijn, leer je bij
              informatica.
            </p>
            <blockquote>
              "Informatica is niet alleen een theoretisch vak, maar vooral een
              praktisch vak waarbij je onderzoekt, bedenkt, maakt en doet"
            </blockquote>
            <p>
              Je leert hoe computers en datanetwerken werken, hoe je veiliger
              kunt internetten (security) en hoe je (grote hoeveelheden)
              gegevens kunt verwerken (via databases of lerende algoritmes). Heb
              je er wel eens over nagedacht dat via social media en het gebruik
              van internet en apps veel gegevens over jou verzameld en
              opgeslagen worden? Wat wordt daar mee gedaan? Dat zijn
              maatschappelijke gevolgen waar we bij informatica ook naar kijken.
            </p>

            <p>
              Informatica is niet alleen een theoretisch vak, maar vooral een
              praktisch vak waarbij je onderzoekt, bedenkt, maakt en doet. Dat
              doe je niet alleen, maar ook veel samen. Samenwerken is een
              vaardigheid die je overal kunt toepassen, wat je keuzes in de
              toekomst ook zijn.
            </p>
            <p>
              Kortom, informatica is een actueel, boeiend en breed vak dat elke
              leerling zou moeten kunnen volgen. Zelfs als er te weinig
              informaticaleraren zijn.
            </p>
          </div>
        </section>
      </article>
    </main>
    <Footer />
  </>
);

export default Index;
