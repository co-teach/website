import Head from "next/head";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import classes from "./agenda.module.scss";
import { menuStructure } from "../../contents/menuStructure";

const Home = () => {
  return (
    <>
      <Head>
        <title>Co-Teach Informatica</title>
      </Head>
      <Header navData={menuStructure} />
      <main className={classes.Contact}>
        <article className="restrictedWidth">
          <SignatureHeader title="Agenda" subtitle="" />
          <p>
          <h2>Aankomende bijeenkomsten, cursussen en events</h2>
          </p>
          <h3>Webinars voor scholen</h3>
          <p>
            Korte sessies waarin je informatie krijgt over
            het Co-Teach Informatica programma en hoe je als school kan deelnemen.
            <ul>
              <li>
                12 juni 2023 | 16.15-17.00 uur \n
                <a href="https://events.teams.microsoft.com/event/e6b2051e-b802-48b3-8b97-4181e8d0438c@d72758a0-a446-4e0f-a0aa-4bf95a4a10e7">Microsoft Teams link</a>
              </li>
              <li>
                13 juni 2023 | 16.15-17.00 uur 
                <a href="https://events.teams.microsoft.com/event/e6b2051e-b802-48b3-8b97-4181e8d0438c@d72758a0-a446-4e0f-a0aa-4bf95a4a10e7">Microsoft Teams link</a>
              </li>
              <li>
                15 juni 2023 | 16.15-17.00 uur 
                <a href="https://events.teams.microsoft.com/event/beced50f-7f5f-4c5d-b287-6839440bada1@d72758a0-a446-4e0f-a0aa-4bf95a4a10e7">Microsoft Teams link</a>
                </li>
              <li>
                16 juni 2023 | 16.15-17.00 uur 
                <a href="https://events.teams.microsoft.com/event/a6f9725d-9541-452d-8c4a-eb1fd93d90c7@d72758a0-a446-4e0f-a0aa-4bf95a4a10e7">Microsoft Teams link</a>
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
