import React from "react";
import classes from "./Paths.module.scss";
import Link from "next/link";

const Paths = (props: {}) => (
  <section id={classes.Paths}>
    <div id={classes.Professionals}>
      <Link href="/voor-professionals">
        <a aria-hidden>
          <img src="/images/professionals_illustration.svg" aria-hidden />
        </a>
      </Link>
      <div className={classes.content}>
        <h2>
          Professionals{" "}
          <span>Voor bedrijven en instanties met oog voor de toekomst</span>
        </h2>
        <ul>
          <li>Enthousiasmeer leerlingen om in IT te werken</li>
          <li>Gebruik je expertise om authentieke uitdagingen te ontwerpen</li>
          <li>Bouw bekwaamheden op in lesgeven en communicatie</li>
          <li>Lever een maatschappelijke bijdrage in digitale geletterdheid</li>
        </ul>
        <p>
          Als gastdocent krijg je een <em>crash course</em>, doorlopende
          professionele begeleiding en heb je de vrijheid om zelf
          projectonderwijs vorm te geven.{" "}
          <Link href="/voor-professionals">
            <a>Meer informatie voor IT-professionals, managers en eigenaren.</a>
          </Link>
        </p>
      </div>
    </div>
    <div id={classes.Schools}>
      <Link href="/voor-scholen">
        <a aria-hidden>
          <img src="/images/schools_illustration.svg" aria-hidden />
        </a>
      </Link>
      <div className={classes.content}>
        <h2>
          Scholen <span>Voor leerlingen die hun hart willen volgen</span>{" "}
        </h2>
        <ul>
          <li>
            Volg informatica, van de eerste kennismaking tot het eindexamen
            (havo en vwo)
          </li>
          <li>Leer van professionals en bouw je netwerk op</li>
          <li>Werk aan projecten die nu spelen in het werkveld</li>
        </ul>
        <p>
          Door het aanbieden van zowel een leerlijn als projectonderwijs geeft
          Co-Teach Informatica scholen de kans om ondanks het lerarentekort toch
          dit belangrijke vak vorm te kunnen geven.{" "}
          <Link href="/voor-scholen">
            <a>Meer informatie voor leerlingen, leraren en schoolbestuurders</a>
          </Link>
        </p>
      </div>
    </div>
  </section>
);

export default Paths;
