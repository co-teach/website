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
          <SignatureHeader title="Co-Teach Informatica Agenda" subtitle="Aankomende bijeenkomsten, cursussen en events" />

          <h2>Webinars voor scholen</h2>

          <p>
            Korte sessies waarin je informatie krijgt over het Co-Teach Informatica programma en hoe je als school kan deelnemen.
          </p>

          <ul>
            <li>
              12 juni 2023 | 16.15-17.00 uur&nbsp;
              <a href="https://events.teams.microsoft.com/event/6e72fddb-f04e-485d-9d9c-9cf2aee61d01@d72758a0-a446-4e0f-a0aa-4bf95a4a10e7">Microsoft Teams</a>
            </li>
            <li>
              13 juni 2023 | 16.15-17.00 uur&nbsp;
              <a href="https://events.teams.microsoft.com/event/e6b2051e-b802-48b3-8b97-4181e8d0438c@d72758a0-a446-4e0f-a0aa-4bf95a4a10e7">Microsoft Teams</a>
            </li>
            <li>
              15 juni 2023 | 16.15-17.00 uur&nbsp;
              <a href="https://events.teams.microsoft.com/event/beced50f-7f5f-4c5d-b287-6839440bada1@d72758a0-a446-4e0f-a0aa-4bf95a4a10e7">Microsoft Teams</a>
            </li>
            <li>
              16 juni 2023 | 16.15-17.00 uur&nbsp;
              <a href="https://events.teams.microsoft.com/event/a6f9725d-9541-452d-8c4a-eb1fd93d90c7@d72758a0-a446-4e0f-a0aa-4bf95a4a10e7">Microsoft Teams</a>
            </li>
          </ul>

          <h2>Gastdocenten cursus planning</h2>

          <h3>GASTDOCENTEN CURSUS – UTRECHT - JUNI 2023</h3>
          
          Locatie: Universiteit Utrecht

          <ul>
            <li>
              Week 23: Vrijdag 9 Juni 2023 – Gastdocentencursus Deel I | Utrecht | 14u – 17u
            </li>
            <li>
              Week 24: Vrijdag 16 Juni 2023 – Gastdocentencursus Deel II | Online | 14u – 17u
            </li>
            <li>
              Week 26: Vrijdag 30 Juni 2023 – Gastdocentencursus Deel III | Utrecht | 13u – 17u
            </li>
          </ul>
          
          <h3>GASTDOCENTEN CURSUS – DELFT - SEPTEMBER/OKTOBER 2023</h3>
          
          Locatie: TU Delft

          <ul>
            <li>
              Week 37: Vrijdag 15 September 2023 – Gastdocentencursus Deel I | Delft | 14u – 17u
            </li>
            <li>
              Week 38: Vrijdag 22 September 2023 – Gastdocentencursus Deel II | Online | 14u – 17u
            </li>
            <li>
              Week 41: Vrijdag 13 Oktober 2023 – Gastdocentencursus Deel III | Delft | 13u – 17u
            </li>
          </ul>
          
          <h3>GASTDOCENTEN CURSUS – ENSCHEDE - OKTOBER 2023</h3>
          
          Locatie: Universiteit Twente

          <ul>
            <li>
              Week 40: Vrijdag 6 Oktober 2023 – Gastdocentencursus Deel I & II | Enschede| 11u – 17u
            </li>
            <li>
              Week 41: Vrijdag 13 Oktober 2023 – Gastdocentencursus Deel III | Enschede| 13u – 17u
            </li>
          </ul>
          
          
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Home;
