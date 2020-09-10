import React from "react";
import classes from "./Paths.module.scss";
import Link from "next/link";

const Paths = (props: {}) => (
  <section id={classes.Paths}>
    <div id={classes.Professionals}>
      <h2>Voor bedrijven en professionals met oog voor de toekomst</h2>
      <ul>
        <li>Enthusiasmeer leerlingen om in IT te werken</li>
        <li>Gebruik je expertise om authentieke uitdagingen te ontwerpen</li>
        <li>Bouw bekwaamheden op in lesgeven en communicatie</li>
        <li>Lever een maatschappelijke bijdrage in digitale geletterheid</li>
      </ul>
      <p>
        Als gastdocent ontvang je een <em>crash course</em>, doorlopende
        professionele begeleiding en heb je de vrijheid om zelf projectonderwijs
        vorm te geven.{" "}
        <Link href="/voor-professionals">
          <a>Meer informatie voor IT professional, managers en eigenaren.</a>
        </Link>
      </p>
    </div>
    <div id={classes.Schools}>
      <h2>Voor leerlingen die hun hart willen volgen</h2>
      <ul>
        <li>Volg informatica, van de eerste kennismaking tot het eindexamen</li>
        <li>Leer van professionals en bouw je netwerk op</li>
        <li>Werk aan projecten die nu spelen in het werkveld</li>
      </ul>
      <p>
        Door het aanbieden van zowel een leerlijn als projectonderwijs geeft
        Co-Teach Informatica scholen de kans om ondanks het leraartekort toch
        dit belangrijke vak vorm te kunnen geven.{" "}
        <Link href="/voor-scholen">
          <a>Meer informatie voor leerlingen, leraren en schoolbestuurders</a>
        </Link>
      </p>
    </div>
  </section>
);

export default Paths;
