import Head from "next/head";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import classes from "./webinar.module.scss";
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
          <SignatureHeader title="Webinar" subtitle="" />

          <h2>Schrijf je nu in voor het Co-Teach Informatica webinar</h2>
          <p>
            Kunt u door een gebrek aan docenten het vak informatica niet (meer)
            aanbieden in uw HAVO/VWO klassen, of heeft u zorgen om het
            voortbestaan van het vak? Maak dan kennis met Co-Teach Informatica.
            In dit unieke pilotproject krijgen scholen de kans het vak
            informatica aan te bieden door een combinatie van projectonderwijs
            door IT-professionals en een solide online leerlijn, ontwikkeld door
            en begeleid vanuit universitaire lerarenopleidingen. Wij hebben nu
            ruimte om meer scholen te betrekken bij dit project. Deelname is
            uitermate geschikt voor scholen waar het vak niet (meer) kan worden
            aangeboden omdat er geen docent beschikbaar is, terwijl leerlingen
            het vak wel willen volgen.
          </p>

          <p>
            Nieuwsgierig? U kunt nu deelnemen aan onze webinar
            informatiebijeenkomsten op <br />
            19 december, 19 januari of 24 januari.
          </p>

          <h2>Schrijf je nu in</h2>
          <p>
            <ul>
              <li>
                <a href="https://teams.microsoft.com/registration/oFgn10akD06gqkv5WkoQ5w,6ESrmc946kyLd6a6BTpqsQ,8uCiOauJH0mVKfrBlvg97A,JuqWQvNF40a25BgS7u2jEQ,Ler-QlwX2k2z0NRUF74ddw,b6J2fmnc3EicRWPgvNnNgg?mode=read&tenantId=d72758a0-a446-4e0f-a0aa-4bf95a4a10e7">
                  Maandag 19 december, 15.00-15.45
                </a>
              </li>
              <li>
                <a href="https://teams.microsoft.com/registration/oFgn10akD06gqkv5WkoQ5w,6ESrmc946kyLd6a6BTpqsQ,8uCiOauJH0mVKfrBlvg97A,H6v1Ff_RkEuG4AKxkWJaOw,NDvl5nR-yEGRWU3h9Z6YYg,Aj4GlnkNT0WfXbIz4lRh-w?mode=read&tenantId=d72758a0-a446-4e0f-a0aa-4bf95a4a10e7">
                  Woensdag 19 januari, 16:00–16.45
                </a>
              </li>
              <li>
                <a href="https://teams.microsoft.com/registration/oFgn10akD06gqkv5WkoQ5w,6ESrmc946kyLd6a6BTpqsQ,8uCiOauJH0mVKfrBlvg97A,rJOpMpGSSE2GBcGpkp-ogQ,iF_aGAGXiUiHOhCN1JRVlQ,rzEgWXCZ0USi8HOp8d3YaA?mode=read&tenantId=d72758a0-a446-4e0f-a0aa-4bf95a4a10e7">
                  Dinsdag 24 januari, 16:00–16.45
                </a>
              </li>
            </ul>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Home;
